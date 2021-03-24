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
                    _this.drawPagination(_this.myResponse.totalCount, _this.pageSize);
                    _this.one('aw-linked-objects').updateOptions({
                        paginationParams: { href: href, queryParams: queryParams },
                        context: _this.selectedTab,
                        config: _this.configuration,
                        dynamicPagination: {
                            total: _this.myResponse.totalCount,
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
                    total: _this.myResponse.totalCount,
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
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.titleService = titleService;
        this.currentId = '';
        this.currentPage = +this.route.snapshot.queryParams.page || 1;
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
        this.drawPagination(this.myResponse.totalCount, this.pageSize);
    };
    /**
     * Given a page number and a list size, returns the data
     * for a single page of content.
     *
     * @param pageNumber Page number to load
     * @param pageSize How many items need to be loaded
     */
    AwEntitaLayoutDS.prototype.getEntityDetailsPage = function (id, pageNumber, pageSize) {
        var _this = this;
        return this.communication.request$('getEntityDetails', {
            onError: function (error) { return console.error(error); },
            params: {
                entityId: id,
                itemsPagination: { offset: (pageNumber || 1) * pageSize, limit: +pageSize },
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
            return this.getEntityDetailsPage(id, 1, this.pageSize);
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
                total: this.myResponse.totalCount,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUMvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXJDLE9BQU8sY0FBYyxNQUFNLCtCQUErQixDQUFDO0FBRzNEO0lBQXNDLG9DQUFnQjtJQUF0RDtRQUFBLHFFQXdWQztRQXpVUSx1QkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQU1oRCxpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtRQUVoRCxjQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBRWpELDJCQUEyQjtRQUNwQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQU96RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBNENmLHFCQUFlLEdBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FB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VUFBcUIsS0FBYSxFQUFFLElBQVk7UUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBeFZELENBQXNDLGdCQUFnQixHQXdWckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsIGZpbHRlciwgZmlyc3QsIHRhcFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IG1ldGFkYXRhSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyJztcbmltcG9ydCB7IEVudGl0YUxheW91dFJlc3BvbnNlIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xuXG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNNZXRhZGF0YUZpZWxkcyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBteVJlc3BvbnNlOiBFbnRpdGFMYXlvdXRSZXNwb25zZTsgLy8gYmFja2VuZCByZXNwb25zZSBvYmplY3RcblxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IHN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cblxuICBwdWJsaWMgbmF2SGVhZGVyOiBhbnkgPSB7fTsgLy8gbmF2LWhlYWRlciAoY3VzdG9tKSBkYXRhXG5cbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcblxuICBwdWJsaWMgY3VycmVudFNsdWc6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXG5cbiAgcHVibGljIGN1cnJlbnRQYWdlID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcblxuICAvLyA9PT09PSBCVUJCTEUgQ0hBUlQgPT09PT1cbiAgcHVibGljIGJ1YmJsZXNTaXplID0gMTA7IC8vIHJlbGF0ZWQgZW50aXRpZXMgKGJ1YmJsZXMpIHBhZ2Ugc2l6ZVxuXG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHVibGljIGZhbGxiYWNrVGV4dCA9ICcnO1xuXG4gIHB1YmxpYyBsb2FkaW5nID0gdHJ1ZTtcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCByb3V0ZSwgb3B0aW9ucywgdGl0bGVTZXJ2aWNlLCBjb21tdW5pY2F0aW9uLFxuICB9KSB7XG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuY3VycmVudElkID0gJyc7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zLnBhZ2UgfHwgMTtcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgfSk7XG5cbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdlbnRpdGEnKTtcblxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gRW50aXTDoCcpO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgb25seSBvbmUgdGFiXG4gICAgdGhpcy5zaW5nbGVUYWJDaGVjaygpO1xuICB9XG5cbiAgc2luZ2xlVGFiQ2hlY2soKSB7XG4gICAgY29uc3QgbmF2RFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LWVudGl0YS1uYXYnKTtcbiAgICBuYXZEUy5vdXQkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChvdXRwdXQpID0+ICEhb3V0cHV0KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBpdGVtcyB9KSA9PiB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhYlxuICAgICAgICAvLyBhbmQgdGhlcmUgYXJlIG5vIHF1ZXJ5IHBhcmFtc1xuICAgICAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgdGFiLlxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAxICYmICF0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2l0ZW1zWzBdLmFuY2hvci5ocmVmXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG4gICAqL1xuICBkcmF3UGFnaW5hdGlvbiA9ICh0b3RhbEl0ZW1zLCBwYWdlU2l6ZSkgPT4ge1xuICAgIGlmICghdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpKSByZXR1cm47XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAnaHJlZicsXG4gICAgICBocmVmLFxuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xuICAgICAgdG90YWxQYWdlczogdGhpcy5nZXRQYWdlQ291bnQodG90YWxJdGVtcywgcGFnZVNpemUpLFxuICAgICAgY3VycmVudFBhZ2U6ICt0aGlzLmN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICBwYWdlTGltaXQ6IDUsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXG4gICAgICAgIGFjdGl2ZTogK3RoaXMucGFnZVNpemUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHNlbGVjdGVkIHRhYiBvbiB0YWIgY2hhbmdlXG4gICAqL1xuICBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMubXlSZXNwb25zZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdldEVudGl0eURldGFpbHNQYWdlKHRoaXMubXlSZXNwb25zZS5pZCwgK3RoaXMuY3VycmVudFBhZ2UsICt0aGlzLnBhZ2VTaXplKVxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAvLyBBd2FpdCBmb3IgbmV0d29yayByZXNwb25zZVxuICAgICAgICBuZXh0OiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubXlSZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpO1xuICAgICAgICAgIC8vIHVwZGF0ZSBsYXlvdXQgc3RhdGVcbiAgICAgICAgICB0aGlzLnBhZ2VTaXplID0gcXVlcnlQYXJhbXMuc2l6ZTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcXVlcnlQYXJhbXMucGFnZTtcbiAgICAgICAgICAvLyB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICAgIHRoaXMuZHJhd1BhZ2luYXRpb24odGhpcy5teVJlc3BvbnNlLnRvdGFsQ291bnQsIHRoaXMucGFnZVNpemUpO1xuICAgICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgcGFnaW5hdGlvblBhcmFtczogeyBocmVmLCBxdWVyeVBhcmFtcyB9LFxuICAgICAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgdG90YWw6IHRoaXMubXlSZXNwb25zZS50b3RhbENvdW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5UGFyYW1zLnBhZ2UsXG4gICAgICAgICAgICBzaXplOiBxdWVyeVBhcmFtcy5zaXplLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGUpID0+IGNhdGNoRXJyb3IoZSksXG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hdlVwZGF0ZSA9ICh0YWIpID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiO1xuICAgIHRoaXMudXBkYXRlV2lkZ2V0cyh0aGlzLm15UmVzcG9uc2UpO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgdG90YWw6IHRoaXMubXlSZXNwb25zZS50b3RhbENvdW50LFxuICAgICAgfSxcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKSxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xuICAgIC8vIHVwZGF0ZSB0aGUgdXJsIHdpdGggdGhlIGNvcnJlY3QgcGFnZSBhbmQgc2l6ZVxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBQYXJhbXMgPSB7XG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLCBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgIH07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICBbXSwge1xuICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVXaWRnZXRzKGRhdGEpIHtcbiAgICAvKlxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcbiAgICAqL1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tdKSAmJiBkYXRhW2tdLmxlbmd0aCA9PT0gMCkgeyBkYXRhW2tdID0gbnVsbDsgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKHtcbiAgICAgIGRhdGEsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmdldE5hdkJhc2VQYXRoKCksXG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnQoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInLCB0aGlzLmdldEZpZWxkcyh0aGlzLm15UmVzcG9uc2UpKTtcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZSh0aGlzLm15UmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcbiAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKHRoaXMubXlSZXNwb25zZS50b3RhbENvdW50LCB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIHBhZ2UgbnVtYmVyIGFuZCBhIGxpc3Qgc2l6ZSwgcmV0dXJucyB0aGUgZGF0YVxuICAgKiBmb3IgYSBzaW5nbGUgcGFnZSBvZiBjb250ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZU51bWJlciBQYWdlIG51bWJlciB0byBsb2FkXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBIb3cgbWFueSBpdGVtcyBuZWVkIHRvIGJlIGxvYWRlZFxuICAgKi9cbiAgZ2V0RW50aXR5RGV0YWlsc1BhZ2UoaWQsIHBhZ2VOdW1iZXI6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZW50aXR5SWQ6IGlkLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAocGFnZU51bWJlciB8fCAxKSAqIHBhZ2VTaXplLCBsaW1pdDogK3BhZ2VTaXplIH0sXG4gICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemVcbiAgICAgIH0sXG4gICAgfSkucGlwZShcbiAgICAgIC8vIGdsb2JhbCBtZXRhZGF0YSB0YWIgY29udHJvbFxuICAgICAgdGFwKCh7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0pID0+IHtcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YUZpZWxkcyA9ICEhbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXG4gICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcbiAgICAgICAgICBtZXRhZGF0YVRvU2hvdzogX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pLFxuICAgICAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKlxuICAgKiBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgKi9cbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnID0gc2x1ZzsgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjsgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlEZXRhaWxzUGFnZShpZCwgMSwgdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCc7XG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXMudHlwZU9mRW50aXR5XTtcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXM7XG4gICAgdGhpcy5uYXZIZWFkZXIgPSB7IC8vIGFsd2F5cyByZW5kZXIgbmF2IGhlYWRlclxuICAgICAgaWNvbjogY29uZmlnID8gY29uZmlnLmljb24gOiAnJyxcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcbiAgICAgIGNvbG9yOiBjb25maWdbJ2NsYXNzLW5hbWUnXSxcbiAgICB9O1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBidWJibGVzRW5hYmxlZDogdGhpcy5idWJibGVzRW5hYmxlZCxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLFxuICAgICAgaGFzTWV0YWRhdGFGaWVsZHM6IHRoaXMuaGFzTWV0YWRhdGFGaWVsZHMsXG4gICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUodGhpcy5nZXRGaWVsZHMocmVzKSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XG4gICAgICAgIHRvdGFsOiB0aGlzLm15UmVzcG9uc2UudG90YWxDb3VudCxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCksXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVsYXRpb25OYW1lID0gcmVzLmxhYmVsLmxlbmd0aCA+IDMwXG4gICAgICAgID8gYCR7cmVzLmxhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcbiAgICAgICAgOiByZXMubGFiZWw7XG4gICAgfSk7XG4gICAgcmVzLnJlbGF0ZWRFbnRpdGllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVsYXRpb25OYW1lID0gcmVzLmxhYmVsLmxlbmd0aCA+IDMwXG4gICAgICAgID8gYCR7cmVzLmxhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcbiAgICAgICAgOiByZXMubGFiZWw7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB9KTtcbiAgICB0aGlzLm9uZSgnYXctcmVsYXRlZC1lbnRpdGllcycpLnVwZGF0ZShyZXMucmVsYXRlZEVudGl0aWVzKTtcbiAgICAvLyBmYWxsYmFjayB0ZXh0XG4gICAgaWYgKCF0aGlzLmhhc01ldGFkYXRhRmllbGRzKSB7XG4gICAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKS5mYWxsYmFjaztcbiAgICB9XG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIGBBcmlhbm5hNFZpZXcgLSBFbnRpdMOgIC0gJHt0aGlzLm15UmVzcG9uc2UubGFiZWx9YCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uVVJMKCkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBbXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgICAgIGAke3RoaXMuY3VycmVudElkfS9gLFxuICAgICAgICB0aGlzLmN1cnJlbnRTbHVnLFxuICAgICAgICBgLyR7dGhpcy5zZWxlY3RlZFRhYn0vYCxcbiAgICAgIF0uam9pbignJyksXG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0TmF2QmFzZVBhdGgoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgICBgJHt0aGlzLmN1cnJlbnRJZH0vYCxcbiAgICAgIHRoaXMuY3VycmVudFNsdWcsXG4gICAgXS5qb2luKCcnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZHMocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XG4gICAgbGV0IG1ldGFkYXRhVG9TaG93ID0gX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAnb3ZlcnZpZXcnKSB7XG4gICAgICBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnb3ZlcnZpZXcuaW5mb3JtYXppb25pJywgW10pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xuICAgICAgZmllbGRzLFxuICAgICAgcGF0aHMsXG4gICAgICBsYWJlbHMsXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcbiAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5rZWRPYmplY3RJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFRhYiA9PT0gJ2ZvbmRpLWNvbGxlZ2F0aSdcbiAgICAgID8gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRMYVxuICAgICAgOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHRvdGFsIGFtb3VudCBvZiBwYWdlc1xuICAgKlxuICAgKiBAcGFyYW0gaXRlbXMgdGhlIG51bWJlciBvZiByZWNvcmRzIGluIHRoZSBkYXRhYmFzZVxuICAgKiBAcGFyYW0gc2l6ZSB0aGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIG9uIGEgcGFnZVxuICAgKiBAcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAqL1xuICBwcml2YXRlIGdldFBhZ2VDb3VudChpdGVtczogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihpdGVtcyAvIHNpemUpO1xuICB9XG59XG4iXX0=