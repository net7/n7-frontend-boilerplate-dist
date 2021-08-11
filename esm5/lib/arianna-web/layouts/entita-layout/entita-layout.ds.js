import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { of } from 'rxjs';
import { catchError, filter, first, tap } from 'rxjs/operators';
import { get as _get } from 'lodash';
import metadataHelper from '../../helpers/metadata.helper';
var AwEntitaLayoutDS = /** @class */ (function (_super) {
    __extends(AwEntitaLayoutDS, _super);
    function AwEntitaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasMetadataFields = false;
        _this.navHeader = {}; // nav-header (custom) data
        _this.currentPage = 1; // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        // ===== BUBBLE CHART =====
        _this.bubblesSize = 10; // related entities (bubbles) page size
        _this.fallbackText = '';
        _this.loading = true;
        _this.updateComponent = function (id, data, options) {
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        };
        /**
         * Updates the pagination component
         */
        _this.drawPagination = function (totalItems, pageSize) {
            if (!_this.getLinkedObjectItems())
                return;
            var _a = _this._getPaginationURL(), href = _a.href, queryParams = _a.queryParams;
            _this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href: href,
                queryParams: queryParams,
            });
            _this.one('n7-smart-pagination').update({
                totalPages: _this.getPageCount(totalItems, pageSize),
                currentPage: +_this.currentPage || 1,
                pageLimit: 5,
                sizes: {
                    label: 'Numero di risultati',
                    list: [10, 25, 50],
                    active: +_this.pageSize,
                },
            });
        };
        /**
         * Updates the selected tab on tab change
         */
        _this.handlePageNavigation = function () {
            if (!_this.myResponse) {
                return;
            }
            _this.getEntityDetailsPage(_this.myResponse.id, +_this.currentPage, +_this.pageSize)
                .pipe(first())
                .subscribe({
                // Await for network response
                next: function (data) {
                    _this.myResponse = data;
                    var _a = _this._getPaginationURL(), href = _a.href, queryParams = _a.queryParams;
                    // update layout state
                    _this.pageSize = queryParams.size;
                    _this.currentPage = queryParams.page;
                    // update components
                    _this.drawPagination(_this.getItemCount(), _this.pageSize);
                    _this.one('aw-linked-objects').updateOptions({
                        paginationParams: { href: href, queryParams: queryParams },
                        context: _this.selectedTab,
                        config: _this.configuration,
                        dynamicPagination: {
                            total: _this.getItemCount(),
                        },
                        page: queryParams.page,
                        size: queryParams.size,
                        pagination: true,
                    });
                    _this.one('aw-linked-objects').update({ items: _this.getLinkedObjectItems() });
                },
                error: function (e) { return catchError(e); },
            });
        };
        _this.handleNavUpdate = function (tab) {
            _this.selectedTab = tab;
            _this.updateWidgets(_this.myResponse);
            _this.one('aw-linked-objects').updateOptions({
                context: _this.selectedTab,
                config: _this.configuration,
                dynamicPagination: {
                    total: _this.getItemCount(),
                },
                page: _this.currentPage,
                size: _this.pageSize,
                pagination: true,
                paginationParams: _this._getPaginationURL(),
            });
            _this.one('aw-linked-objects').update({ items: _this.getLinkedObjectItems() });
            // update the url with the correct page and size
            var queryParams = {
                page: _this.currentPage, size: _this.pageSize,
            };
            _this.router.navigate([], {
                relativeTo: _this.route,
                queryParams: queryParams,
                queryParamsHandling: 'merge'
            });
        };
        return _this;
    }
    AwEntitaLayoutDS.prototype.onInit = function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, route = _a.route, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        var _b;
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = (_b = +this.route.snapshot.queryParams.page) !== null && _b !== void 0 ? _b : 1;
        this.one('aw-related-entities').updateOptions({
            config: this.configuration,
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna4View - Entità');
        // check if there is only one tab
        this.singleTabCheck();
    };
    AwEntitaLayoutDS.prototype.singleTabCheck = function () {
        var _this = this;
        var navDS = this.getWidgetDataSource('aw-entita-nav');
        navDS.out$
            .pipe(filter(function (output) { return !!output; }))
            .subscribe(function (_a) {
            var items = _a.items;
            // if there is only one tab
            // and there are no query params
            // navigate to the tab.
            if (items.length === 1 && !_this.currentPage) {
                _this.router.navigate([items[0].anchor.href], { replaceUrl: true });
            }
        });
    };
    AwEntitaLayoutDS.prototype.updateWidgets = function (data) {
        /*
          Updates the widgets on this layout, based on route
        */
        var selected = this.selectedTab;
        Object.keys(data).forEach(function (k) {
            if (Array.isArray(data[k]) && data[k].length === 0) {
                data[k] = null;
            }
        });
        this.one('aw-entita-nav').update({
            data: data,
            selected: selected,
            basePath: this.getNavBasePath(),
        });
        this.updateComponent('aw-entita-metadata-viewer', this.getFields(this.myResponse));
        this.one('aw-related-entities').update(this.myResponse.relatedEntities);
        this.drawPagination(this.getItemCount(), this.pageSize);
    };
    /**
     * Given a page number and a list size, returns the data
     * for a single page of content.
     *
     * @param id Entity ID
     * @param pageNumber Page number to load
     * @param pageSize How many items need to be loaded
     */
    AwEntitaLayoutDS.prototype.getEntityDetailsPage = function (id, pageNumber, pageSize) {
        var _this = this;
        return this.communication.request$('getEntityDetails', {
            onError: function (error) { return console.error(error); },
            params: {
                entityId: id,
                itemsPagination: { offset: ((pageNumber || 1) - 1) * pageSize, limit: +pageSize },
                entitiesListSize: this.bubblesSize
            },
        }).pipe(
        // global metadata tab control
        tap(function (_a) {
            var fields = _a.fields, typeOfEntity = _a.typeOfEntity;
            _this.hasMetadataFields = !!metadataHelper.normalize({
                fields: fields,
                paths: _this.configuration.get('paths'),
                labels: _this.configuration.get('labels'),
                metadataToShow: _get(_this.configuration.get('entita-layout'), 'metadata-to-show', []),
                type: typeOfEntity
            }).length;
        }));
    };
    /*
     * Loads the data for the selected nav item, into the adjacent text block.
     */
    AwEntitaLayoutDS.prototype.loadItem = function (id, slug, tab) {
        this.loading = true;
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.getEntityDetailsPage(id, this.currentPage, this.pageSize);
        }
        this.pageTitle = 'Entità Test';
        return of(null);
    };
    AwEntitaLayoutDS.prototype.loadContent = function (res) {
        this.loading = false;
        var config = this.configuration.get('config-keys')[res.typeOfEntity];
        this.myResponse = res;
        this.navHeader = {
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({
            bubblesEnabled: this.bubblesEnabled,
            config: this.configuration.get('entita-layout'),
            hasMetadataFields: this.hasMetadataFields,
            labels: this.configuration.get('labels')
        });
        this.one('aw-entita-metadata-viewer').update(this.getFields(res));
        this.one('aw-linked-objects').updateOptions({
            context: this.selectedTab,
            config: this.configuration,
            page: this.currentPage,
            pagination: true,
            dynamicPagination: {
                total: this.getItemCount(),
            },
            paginationParams: this._getPaginationURL(),
            size: this.pageSize,
        });
        this.getLinkedObjectItems().forEach(function (el) {
            el.relationName = res.label.length > 30
                ? res.label.substr(0, 30) + "... "
                : res.label;
        });
        res.relatedEntities.forEach(function (el) {
            el.relationName = res.label.length > 30
                ? res.label.substr(0, 30) + "... "
                : res.label;
        });
        this.one('aw-linked-objects').update({ items: this.getLinkedObjectItems() });
        this.one('aw-related-entities').update(res.relatedEntities);
        // fallback text
        if (!this.hasMetadataFields) {
            this.fallbackText = this.configuration.get('entita-layout').fallback;
        }
        // update head title
        this.mainState.update('headTitle', "Arianna4View - Entit\u00E0 - " + this.myResponse.label);
    };
    AwEntitaLayoutDS.prototype._getPaginationURL = function () {
        return {
            href: [
                this.configuration.get('paths').entitaBasePath,
                this.currentId + "/",
                this.currentSlug,
                "/" + this.selectedTab + "/",
            ].join(''),
            queryParams: {
                page: this.currentPage || 1,
                size: this.pageSize,
            },
        };
    };
    AwEntitaLayoutDS.prototype.getNavBasePath = function () {
        return [
            this.configuration.get('paths').entitaBasePath,
            this.currentId + "/",
            this.currentSlug,
        ].join('');
    };
    AwEntitaLayoutDS.prototype.getItemCount = function () {
        switch (this.selectedTab) {
            case 'fondi-collegati':
                return this.myResponse.relatedLaTotalCount;
            case 'oggetti-collegati':
                return this.myResponse.relatedItemsTotalCount;
            default:
                return 0;
        }
    };
    AwEntitaLayoutDS.prototype.getFields = function (response) {
        var fields = response.fields, typeOfEntity = response.typeOfEntity;
        var paths = this.configuration.get('paths');
        var labels = this.configuration.get('labels');
        var metadataToShow = _get(this.configuration.get('entita-layout'), 'metadata-to-show', []);
        if (this.selectedTab === 'overview') {
            metadataToShow = _get(this.configuration.get('entita-layout'), 'overview.informazioni', []);
        }
        return metadataHelper.normalize({
            fields: fields,
            paths: paths,
            labels: labels,
            metadataToShow: metadataToShow,
            type: typeOfEntity
        });
    };
    AwEntitaLayoutDS.prototype.getLinkedObjectItems = function () {
        return this.selectedTab === 'fondi-collegati'
            ? this.myResponse.relatedLa
            : this.myResponse.relatedItems;
    };
    /**
     * Calculates the total amount of pages
     *
     * @param items the number of records in the database
     * @param size the number of items shown on a page
     * @returns the total number of pages
     */
    AwEntitaLayoutDS.prototype.getPageCount = function (items, size) {
        return Math.floor(items / size);
    };
    return AwEntitaLayoutDS;
}(LayoutDataSource));
export { AwEntitaLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUMvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXJDLE9BQU8sY0FBYyxNQUFNLCtCQUErQixDQUFDO0FBRzNEO0lBQXNDLG9DQUFnQjtJQUF0RDtRQUFBLHFFQXFXQztRQXRWUSx1QkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQU1oRCxpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtRQUVoRCxjQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBRWpELDJCQUEyQjtRQUNwQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQU96RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBNENmLHFCQUFlLEdBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FB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Q04sY0FBYyxnQkFBQTtZQUNkLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBb0IsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssaUJBQWlCO1lBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7WUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyx1Q0FBWSxHQUFwQixVQUFxQixLQUFhLEVBQUUsSUFBWTtRQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyV0QsQ0FBc0MsZ0JBQWdCLEdBcVdyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgY2F0Y2hFcnJvciwgZmlsdGVyLCBmaXJzdCwgdGFwXHJcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCBtZXRhZGF0YUhlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL21ldGFkYXRhLmhlbHBlcic7XHJcbmltcG9ydCB7IEVudGl0YUxheW91dFJlc3BvbnNlIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzTWV0YWRhdGFGaWVsZHMgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIG15UmVzcG9uc2U6IEVudGl0YUxheW91dFJlc3BvbnNlOyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IHN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cclxuXHJcbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxyXG5cclxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxyXG5cclxuICBwdWJsaWMgY3VycmVudFNsdWc6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXHJcblxyXG4gIHB1YmxpYyBjdXJyZW50UGFnZSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcclxuXHJcbiAgcHVibGljIHBhZ2VTaXplID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxyXG5cclxuICAvLyA9PT09PSBCVUJCTEUgQ0hBUlQgPT09PT1cclxuICBwdWJsaWMgYnViYmxlc1NpemUgPSAxMDsgLy8gcmVsYXRlZCBlbnRpdGllcyAoYnViYmxlcykgcGFnZSBzaXplXHJcblxyXG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBmYWxsYmFja1RleHQgPSAnJztcclxuXHJcbiAgcHVibGljIGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIHJvdXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXHJcbiAgfSkge1xyXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5jdXJyZW50SWQgPSAnJztcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcy5wYWdlID8/IDE7XHJcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnZW50aXRhJyk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIEVudGl0w6AnKTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0YWJcclxuICAgIHRoaXMuc2luZ2xlVGFiQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNpbmdsZVRhYkNoZWNrKCkge1xyXG4gICAgY29uc3QgbmF2RFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LWVudGl0YS1uYXYnKTtcclxuICAgIG5hdkRTLm91dCRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChvdXRwdXQpID0+ICEhb3V0cHV0KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHsgaXRlbXMgfSkgPT4ge1xyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhYlxyXG4gICAgICAgIC8vIGFuZCB0aGVyZSBhcmUgbm8gcXVlcnkgcGFyYW1zXHJcbiAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIHRhYi5cclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAxICYmICF0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbaXRlbXNbMF0uYW5jaG9yLmhyZWZdLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGRyYXdQYWdpbmF0aW9uID0gKHRvdGFsSXRlbXMsIHBhZ2VTaXplKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSkgcmV0dXJuO1xyXG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgbW9kZTogJ2hyZWYnLFxyXG4gICAgICBocmVmLFxyXG4gICAgICBxdWVyeVBhcmFtcyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xyXG4gICAgICB0b3RhbFBhZ2VzOiB0aGlzLmdldFBhZ2VDb3VudCh0b3RhbEl0ZW1zLCBwYWdlU2l6ZSksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiArdGhpcy5jdXJyZW50UGFnZSB8fCAxLFxyXG4gICAgICBwYWdlTGltaXQ6IDUsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcclxuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXHJcbiAgICAgICAgYWN0aXZlOiArdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcclxuICAgKi9cclxuICBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5teVJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0RW50aXR5RGV0YWlsc1BhZ2UodGhpcy5teVJlc3BvbnNlLmlkLCArdGhpcy5jdXJyZW50UGFnZSwgK3RoaXMucGFnZVNpemUpXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIC8vIEF3YWl0IGZvciBuZXR3b3JrIHJlc3BvbnNlXHJcbiAgICAgICAgbmV4dDogKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMubXlSZXNwb25zZSA9IGRhdGE7XHJcbiAgICAgICAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCk7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgbGF5b3V0IHN0YXRlXHJcbiAgICAgICAgICB0aGlzLnBhZ2VTaXplID0gcXVlcnlQYXJhbXMuc2l6ZTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBxdWVyeVBhcmFtcy5wYWdlO1xyXG4gICAgICAgICAgLy8gdXBkYXRlIGNvbXBvbmVudHNcclxuICAgICAgICAgIHRoaXMuZHJhd1BhZ2luYXRpb24odGhpcy5nZXRJdGVtQ291bnQoKSwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgICAgICAgcGFnaW5hdGlvblBhcmFtczogeyBocmVmLCBxdWVyeVBhcmFtcyB9LFxyXG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxyXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICB0b3RhbDogdGhpcy5nZXRJdGVtQ291bnQoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZTogcXVlcnlQYXJhbXMucGFnZSxcclxuICAgICAgICAgICAgc2l6ZTogcXVlcnlQYXJhbXMuc2l6ZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZSkgPT4gY2F0Y2hFcnJvcihlKSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVOYXZVcGRhdGUgPSAodGFiKSA9PiB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiO1xyXG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgdG90YWw6IHRoaXMuZ2V0SXRlbUNvdW50KCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB9KTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgdXJsIHdpdGggdGhlIGNvcnJlY3QgcGFnZSBhbmQgc2l6ZVxyXG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IFBhcmFtcyA9IHtcclxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgW10sIHtcclxuICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xyXG4gICAgLypcclxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcclxuICAgICovXHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRUYWI7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba10pICYmIGRhdGFba10ubGVuZ3RoID09PSAwKSB7IGRhdGFba10gPSBudWxsOyB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKHtcclxuICAgICAgZGF0YSxcclxuICAgICAgc2VsZWN0ZWQsXHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmdldE5hdkJhc2VQYXRoKCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJywgdGhpcy5nZXRGaWVsZHModGhpcy5teVJlc3BvbnNlKSk7XHJcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZSh0aGlzLm15UmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24odGhpcy5nZXRJdGVtQ291bnQoKSwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhZ2UgbnVtYmVyIGFuZCBhIGxpc3Qgc2l6ZSwgcmV0dXJucyB0aGUgZGF0YVxyXG4gICAqIGZvciBhIHNpbmdsZSBwYWdlIG9mIGNvbnRlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaWQgRW50aXR5IElEXHJcbiAgICogQHBhcmFtIHBhZ2VOdW1iZXIgUGFnZSBudW1iZXIgdG8gbG9hZFxyXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBIb3cgbWFueSBpdGVtcyBuZWVkIHRvIGJlIGxvYWRlZFxyXG4gICAqL1xyXG4gIGdldEVudGl0eURldGFpbHNQYWdlKGlkLCBwYWdlTnVtYmVyOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZW50aXR5SWQ6IGlkLFxyXG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6ICgocGFnZU51bWJlciB8fCAxKSAtIDEpICogcGFnZVNpemUsIGxpbWl0OiArcGFnZVNpemUgfSxcclxuICAgICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmJ1YmJsZXNTaXplXHJcbiAgICAgIH0sXHJcbiAgICB9KS5waXBlKFxyXG4gICAgICAvLyBnbG9iYWwgbWV0YWRhdGEgdGFiIGNvbnRyb2xcclxuICAgICAgdGFwKCh7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0pID0+IHtcclxuICAgICAgICB0aGlzLmhhc01ldGFkYXRhRmllbGRzID0gISFtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xyXG4gICAgICAgICAgZmllbGRzLFxyXG4gICAgICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpLFxyXG4gICAgICAgICAgbWV0YWRhdGFUb1Nob3c6IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKSxcclxuICAgICAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxyXG4gICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXHJcbiAgICovXHJcbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgaWYgKGlkICYmIHRhYikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXHJcbiAgICAgIHRoaXMuY3VycmVudFNsdWcgPSBzbHVnOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWI7IC8vIHN0b3JlIHNlbGVjdGVkIHRhYiBmcm9tIHVybFxyXG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlEZXRhaWxzUGFnZShpZCwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdFbnRpdMOgIFRlc3QnO1xyXG4gICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgbG9hZENvbnRlbnQocmVzKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbcmVzLnR5cGVPZkVudGl0eV07XHJcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXM7XHJcbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXHJcbiAgICAgIGljb246IGNvbmZpZyA/IGNvbmZpZy5pY29uIDogJycsXHJcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcclxuICAgICAgY29sb3I6IGNvbmZpZ1snY2xhc3MtbmFtZSddLFxyXG4gICAgfTtcclxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGJ1YmJsZXNFbmFibGVkOiB0aGlzLmJ1YmJsZXNFbmFibGVkLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSxcclxuICAgICAgaGFzTWV0YWRhdGFGaWVsZHM6IHRoaXMuaGFzTWV0YWRhdGFGaWVsZHMsXHJcbiAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJylcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUodGhpcy5nZXRGaWVsZHMocmVzKSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgdG90YWw6IHRoaXMuZ2V0SXRlbUNvdW50KCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKSxcclxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IHJlcy5sYWJlbC5sZW5ndGggPiAzMFxyXG4gICAgICAgID8gYCR7cmVzLmxhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcclxuICAgICAgICA6IHJlcy5sYWJlbDtcclxuICAgIH0pO1xyXG4gICAgcmVzLnJlbGF0ZWRFbnRpdGllcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5yZWxhdGlvbk5hbWUgPSByZXMubGFiZWwubGVuZ3RoID4gMzBcclxuICAgICAgICA/IGAke3Jlcy5sYWJlbC5zdWJzdHIoMCwgMzApfS4uLiBgXHJcbiAgICAgICAgOiByZXMubGFiZWw7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZShyZXMucmVsYXRlZEVudGl0aWVzKTtcclxuICAgIC8vIGZhbGxiYWNrIHRleHRcclxuICAgIGlmICghdGhpcy5oYXNNZXRhZGF0YUZpZWxkcykge1xyXG4gICAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKS5mYWxsYmFjaztcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIGBBcmlhbm5hNFZpZXcgLSBFbnRpdMOgIC0gJHt0aGlzLm15UmVzcG9uc2UubGFiZWx9YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uVVJMKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaHJlZjogW1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXHJcbiAgICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcclxuICAgICAgICBgLyR7dGhpcy5zZWxlY3RlZFRhYn0vYCxcclxuICAgICAgXS5qb2luKCcnKSxcclxuICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmF2QmFzZVBhdGgoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgICBgJHt0aGlzLmN1cnJlbnRJZH0vYCxcclxuICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcclxuICAgIF0uam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SXRlbUNvdW50KCk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRUYWIpIHtcclxuICAgICAgY2FzZSAnZm9uZGktY29sbGVnYXRpJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRMYVRvdGFsQ291bnQ7XHJcbiAgICAgIGNhc2UgJ29nZ2V0dGktY29sbGVnYXRpJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtc1RvdGFsQ291bnQ7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0gPSByZXNwb25zZTtcclxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcclxuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xyXG4gICAgbGV0IG1ldGFkYXRhVG9TaG93ID0gX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09ICdvdmVydmlldycpIHtcclxuICAgICAgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ292ZXJ2aWV3LmluZm9ybWF6aW9uaScsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBwYXRocyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcclxuICAgICAgdHlwZTogdHlwZU9mRW50aXR5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFRhYiA9PT0gJ2ZvbmRpLWNvbGxlZ2F0aSdcclxuICAgICAgPyB0aGlzLm15UmVzcG9uc2UucmVsYXRlZExhXHJcbiAgICAgIDogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgdGhlIHRvdGFsIGFtb3VudCBvZiBwYWdlc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGl0ZW1zIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGUgZGF0YWJhc2VcclxuICAgKiBAcGFyYW0gc2l6ZSB0aGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIG9uIGEgcGFnZVxyXG4gICAqIEByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcclxuICAgKi9cclxuICBwcml2YXRlIGdldFBhZ2VDb3VudChpdGVtczogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKGl0ZW1zIC8gc2l6ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==