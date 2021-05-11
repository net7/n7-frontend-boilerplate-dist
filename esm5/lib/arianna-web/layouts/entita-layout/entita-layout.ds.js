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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUMvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXJDLE9BQU8sY0FBYyxNQUFNLCtCQUErQixDQUFDO0FBRzNEO0lBQXNDLG9DQUFnQjtJQUF0RDtRQUFBLHFFQW9XQztRQXJWUSx1QkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQU1oRCxpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtRQUVoRCxjQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBRWpELDJCQUEyQjtRQUNwQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQU96RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBNENmLHFCQUFlLEdBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FB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RUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBb0IsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssaUJBQWlCO1lBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7WUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyx1Q0FBWSxHQUFwQixVQUFxQixLQUFhLEVBQUUsSUFBWTtRQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFwV0QsQ0FBc0MsZ0JBQWdCLEdBb1dyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgY2F0Y2hFcnJvciwgZmlsdGVyLCBmaXJzdCwgdGFwXHJcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCBtZXRhZGF0YUhlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL21ldGFkYXRhLmhlbHBlcic7XHJcbmltcG9ydCB7IEVudGl0YUxheW91dFJlc3BvbnNlIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbiAgcHVibGljIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaGFzTWV0YWRhdGFGaWVsZHMgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIG15UmVzcG9uc2U6IEVudGl0YUxheW91dFJlc3BvbnNlOyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IHN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cclxuXHJcbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxyXG5cclxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxyXG5cclxuICBwdWJsaWMgY3VycmVudFNsdWc6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXHJcblxyXG4gIHB1YmxpYyBjdXJyZW50UGFnZSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcclxuXHJcbiAgcHVibGljIHBhZ2VTaXplID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxyXG5cclxuICAvLyA9PT09PSBCVUJCTEUgQ0hBUlQgPT09PT1cclxuICBwdWJsaWMgYnViYmxlc1NpemUgPSAxMDsgLy8gcmVsYXRlZCBlbnRpdGllcyAoYnViYmxlcykgcGFnZSBzaXplXHJcblxyXG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBmYWxsYmFja1RleHQgPSAnJztcclxuXHJcbiAgcHVibGljIGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIHJvdXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXHJcbiAgfSkge1xyXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xyXG4gICAgdGhpcy5jdXJyZW50SWQgPSAnJztcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcy5wYWdlID8/IDE7XHJcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnZW50aXRhJyk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIEVudGl0w6AnKTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0YWJcclxuICAgIHRoaXMuc2luZ2xlVGFiQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNpbmdsZVRhYkNoZWNrKCkge1xyXG4gICAgY29uc3QgbmF2RFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LWVudGl0YS1uYXYnKTtcclxuICAgIG5hdkRTLm91dCRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChvdXRwdXQpID0+ICEhb3V0cHV0KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHsgaXRlbXMgfSkgPT4ge1xyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhYlxyXG4gICAgICAgIC8vIGFuZCB0aGVyZSBhcmUgbm8gcXVlcnkgcGFyYW1zXHJcbiAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIHRhYi5cclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAxICYmICF0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbaXRlbXNbMF0uYW5jaG9yLmhyZWZdLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGRyYXdQYWdpbmF0aW9uID0gKHRvdGFsSXRlbXMsIHBhZ2VTaXplKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSkgcmV0dXJuO1xyXG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgbW9kZTogJ2hyZWYnLFxyXG4gICAgICBocmVmLFxyXG4gICAgICBxdWVyeVBhcmFtcyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xyXG4gICAgICB0b3RhbFBhZ2VzOiB0aGlzLmdldFBhZ2VDb3VudCh0b3RhbEl0ZW1zLCBwYWdlU2l6ZSksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiArdGhpcy5jdXJyZW50UGFnZSB8fCAxLFxyXG4gICAgICBwYWdlTGltaXQ6IDUsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxyXG4gICAgICAgIGFjdGl2ZTogK3RoaXMucGFnZVNpemUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHNlbGVjdGVkIHRhYiBvbiB0YWIgY2hhbmdlXHJcbiAgICovXHJcbiAgaGFuZGxlUGFnZU5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMubXlSZXNwb25zZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldEVudGl0eURldGFpbHNQYWdlKHRoaXMubXlSZXNwb25zZS5pZCwgK3RoaXMuY3VycmVudFBhZ2UsICt0aGlzLnBhZ2VTaXplKVxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICAvLyBBd2FpdCBmb3IgbmV0d29yayByZXNwb25zZVxyXG4gICAgICAgIG5leHQ6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm15UmVzcG9uc2UgPSBkYXRhO1xyXG4gICAgICAgICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpO1xyXG4gICAgICAgICAgLy8gdXBkYXRlIGxheW91dCBzdGF0ZVxyXG4gICAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHF1ZXJ5UGFyYW1zLnNpemU7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcXVlcnlQYXJhbXMucGFnZTtcclxuICAgICAgICAgIC8vIHVwZGF0ZSBjb21wb25lbnRzXHJcbiAgICAgICAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKHRoaXMuZ2V0SXRlbUNvdW50KCksIHRoaXMucGFnZVNpemUpO1xyXG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSxcclxuICAgICAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcclxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgdG90YWw6IHRoaXMuZ2V0SXRlbUNvdW50KCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5UGFyYW1zLnBhZ2UsXHJcbiAgICAgICAgICAgIHNpemU6IHF1ZXJ5UGFyYW1zLnNpemUsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogKGUpID0+IGNhdGNoRXJyb3IoZSksXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTmF2VXBkYXRlID0gKHRhYikgPT4ge1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjtcclxuICAgIHRoaXMudXBkYXRlV2lkZ2V0cyh0aGlzLm15UmVzcG9uc2UpO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xyXG4gICAgICAgIHRvdGFsOiB0aGlzLmdldEl0ZW1Db3VudCgpLFxyXG4gICAgICB9LFxyXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkgfSk7XHJcbiAgICAvLyB1cGRhdGUgdGhlIHVybCB3aXRoIHRoZSBjb3JyZWN0IHBhZ2UgYW5kIHNpemVcclxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBQYXJhbXMgPSB7XHJcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgIFtdLCB7XHJcbiAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXaWRnZXRzKGRhdGEpIHtcclxuICAgIC8qXHJcbiAgICAgIFVwZGF0ZXMgdGhlIHdpZGdldHMgb24gdGhpcyBsYXlvdXQsIGJhc2VkIG9uIHJvdXRlXHJcbiAgICAqL1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkVGFiO1xyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tdKSAmJiBkYXRhW2tdLmxlbmd0aCA9PT0gMCkgeyBkYXRhW2tdID0gbnVsbDsgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZSh7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHNlbGVjdGVkLFxyXG4gICAgICBiYXNlUGF0aDogdGhpcy5nZXROYXZCYXNlUGF0aCgpLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudCgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicsIHRoaXMuZ2V0RmllbGRzKHRoaXMubXlSZXNwb25zZSkpO1xyXG4gICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUodGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcyk7XHJcbiAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKHRoaXMuZ2V0SXRlbUNvdW50KCksIHRoaXMucGFnZVNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBwYWdlIG51bWJlciBhbmQgYSBsaXN0IHNpemUsIHJldHVybnMgdGhlIGRhdGFcclxuICAgKiBmb3IgYSBzaW5nbGUgcGFnZSBvZiBjb250ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlkIEVudGl0eSBJRFxyXG4gICAqIEBwYXJhbSBwYWdlTnVtYmVyIFBhZ2UgbnVtYmVyIHRvIGxvYWRcclxuICAgKiBAcGFyYW0gcGFnZVNpemUgSG93IG1hbnkgaXRlbXMgbmVlZCB0byBiZSBsb2FkZWRcclxuICAgKi9cclxuICBnZXRFbnRpdHlEZXRhaWxzUGFnZShpZCwgcGFnZU51bWJlcjogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGVudGl0eUlkOiBpZCxcclxuICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAoKHBhZ2VOdW1iZXIgfHwgMSkgLSAxKSAqIHBhZ2VTaXplLCBsaW1pdDogK3BhZ2VTaXplIH0sXHJcbiAgICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZVxyXG4gICAgICB9LFxyXG4gICAgfSkucGlwZShcclxuICAgICAgLy8gZ2xvYmFsIG1ldGFkYXRhIHRhYiBjb250cm9sXHJcbiAgICAgIHRhcCgoeyBmaWVsZHMsIHR5cGVPZkVudGl0eSB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YUZpZWxkcyA9ICEhbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcclxuICAgICAgICAgIGZpZWxkcyxcclxuICAgICAgICAgIHBhdGhzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLFxyXG4gICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcclxuICAgICAgICAgIG1ldGFkYXRhVG9TaG93OiBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ21ldGFkYXRhLXRvLXNob3cnLCBbXSksXHJcbiAgICAgICAgICB0eXBlOiB0eXBlT2ZFbnRpdHlcclxuICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxyXG4gICAqL1xyXG4gIGxvYWRJdGVtKGlkLCBzbHVnLCB0YWIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGlmIChpZCAmJiB0YWIpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZDsgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxyXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnID0gc2x1ZzsgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiOyAvLyBzdG9yZSBzZWxlY3RlZCB0YWIgZnJvbSB1cmxcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5RGV0YWlsc1BhZ2UoaWQsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGFnZVNpemUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnRW50aXTDoCBUZXN0JztcclxuICAgIHJldHVybiBvZihudWxsKTtcclxuICB9XHJcblxyXG4gIGxvYWRDb250ZW50KHJlcykge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlcy50eXBlT2ZFbnRpdHldO1xyXG4gICAgdGhpcy5teVJlc3BvbnNlID0gcmVzO1xyXG4gICAgdGhpcy5uYXZIZWFkZXIgPSB7IC8vIGFsd2F5cyByZW5kZXIgbmF2IGhlYWRlclxyXG4gICAgICBpY29uOiBjb25maWcgPyBjb25maWcuaWNvbiA6ICcnLFxyXG4gICAgICB0ZXh0OiB0aGlzLm15UmVzcG9uc2UubGFiZWwsXHJcbiAgICAgIGNvbG9yOiBjb25maWdbJ2NsYXNzLW5hbWUnXSxcclxuICAgIH07XHJcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBidWJibGVzRW5hYmxlZDogdGhpcy5idWJibGVzRW5hYmxlZCxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksXHJcbiAgICAgIGhhc01ldGFkYXRhRmllbGRzOiB0aGlzLmhhc01ldGFkYXRhRmllbGRzLFxyXG4gICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHRoaXMuZ2V0RmllbGRzKHJlcykpO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xyXG4gICAgICAgIHRvdGFsOiB0aGlzLmdldEl0ZW1Db3VudCgpLFxyXG4gICAgICB9LFxyXG4gICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCksXHJcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5yZWxhdGlvbk5hbWUgPSByZXMubGFiZWwubGVuZ3RoID4gMzBcclxuICAgICAgICA/IGAke3Jlcy5sYWJlbC5zdWJzdHIoMCwgMzApfS4uLiBgXHJcbiAgICAgICAgOiByZXMubGFiZWw7XHJcbiAgICB9KTtcclxuICAgIHJlcy5yZWxhdGVkRW50aXRpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwucmVsYXRpb25OYW1lID0gcmVzLmxhYmVsLmxlbmd0aCA+IDMwXHJcbiAgICAgICAgPyBgJHtyZXMubGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxyXG4gICAgICAgIDogcmVzLmxhYmVsO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LXJlbGF0ZWQtZW50aXRpZXMnKS51cGRhdGUocmVzLnJlbGF0ZWRFbnRpdGllcyk7XHJcbiAgICAvLyBmYWxsYmFjayB0ZXh0XHJcbiAgICBpZiAoIXRoaXMuaGFzTWV0YWRhdGFGaWVsZHMpIHtcclxuICAgICAgdGhpcy5mYWxsYmFja1RleHQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JykuZmFsbGJhY2s7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gRW50aXTDoCAtICR7dGhpcy5teVJlc3BvbnNlLmxhYmVsfWApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvblVSTCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhyZWY6IFtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgICAgIGAke3RoaXMuY3VycmVudElkfS9gLFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNsdWcsXHJcbiAgICAgICAgYC8ke3RoaXMuc2VsZWN0ZWRUYWJ9L2AsXHJcbiAgICAgIF0uam9pbignJyksXHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSB8fCAxLFxyXG4gICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5hdkJhc2VQYXRoKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXHJcbiAgICAgIHRoaXMuY3VycmVudFNsdWcsXHJcbiAgICBdLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEl0ZW1Db3VudCgpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkVGFiKSB7XHJcbiAgICAgIGNhc2UgJ2ZvbmRpLWNvbGxlZ2F0aSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlSZXNwb25zZS5yZWxhdGVkTGFUb3RhbENvdW50O1xyXG4gICAgICBjYXNlICdvZ2dldHRpLWNvbGxlZ2F0aSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXNUb3RhbENvdW50O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZpZWxkcyhyZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyBmaWVsZHMsIHR5cGVPZkVudGl0eSB9ID0gcmVzcG9uc2U7XHJcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcclxuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAnb3ZlcnZpZXcnKSB7XHJcbiAgICAgIG1ldGFkYXRhVG9TaG93ID0gX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdvdmVydmlldy5pbmZvcm1hemlvbmknLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1ldGFkYXRhSGVscGVyLm5vcm1hbGl6ZSh7XHJcbiAgICAgIGZpZWxkcyxcclxuICAgICAgcGF0aHMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgICAgbWV0YWRhdGFUb1Nob3csXHJcbiAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldExpbmtlZE9iamVjdEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUYWIgPT09ICdmb25kaS1jb2xsZWdhdGknXHJcbiAgICAgID8gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRMYVxyXG4gICAgICA6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGVzIHRoZSB0b3RhbCBhbW91bnQgb2YgcGFnZXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpdGVtcyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgaW4gdGhlIGRhdGFiYXNlXHJcbiAgICogQHBhcmFtIHNpemUgdGhlIG51bWJlciBvZiBpdGVtcyBzaG93biBvbiBhIHBhZ2VcclxuICAgKiBAcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRQYWdlQ291bnQoaXRlbXM6IG51bWJlciwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihpdGVtcyAvIHNpemUpO1xyXG4gIH1cclxufVxyXG4iXX0=