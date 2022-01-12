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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUMvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXJDLE9BQU8sY0FBYyxNQUFNLCtCQUErQixDQUFDO0FBRzNEO0lBQXNDLG9DQUFnQjtJQUF0RDtRQUFBLHFFQXFXQztRQXRWUSx1QkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQU1oRCxpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtRQUVoRCxjQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCO1FBRWpELDJCQUEyQjtRQUNwQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQU96RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBNENmLHFCQUFlLEdBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUE7UUFFRDs7V0FFRztRQUNILG9CQUFjLEdBQUcsVUFBQyxVQUFVLEVBQUUsUUFBUTtZQUNwQyxJQUFJLENBQUMsS0FBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUFFLE9BQU87WUFDbkMsSUFBQSw4QkFBZ0QsRUFBOUMsY0FBSSxFQUFFLDRCQUF3QyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzVDLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksTUFBQTtnQkFDSixXQUFXLGFBQUE7YUFDWixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2dCQUNuRCxXQUFXLEVBQUUsQ0FBQyxLQUFJLENBQUMsV0FBVyxJQUFJLENBQUM7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbEIsTUFBTSxFQUFFLENBQUMsS0FBSSxDQUFDLFFBQVE7aUJBQ3ZCO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBRUQ7O1dBRUc7UUFDSCwwQkFBb0IsR0FBRztZQUNyQixJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7aUJBQzdFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDYixTQUFTLENBQUM7Z0JBQ1QsNkJBQTZCO2dCQUM3QixJQUFJLEVBQUUsVUFBQyxJQUFJO29CQUNULEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFBLDhCQUFnRCxFQUE5QyxjQUFJLEVBQUUsNEJBQXdDLENBQUM7b0JBQ3ZELHNCQUFzQjtvQkFDdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ3BDLG9CQUFvQjtvQkFDcEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4RCxLQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDO3dCQUMxQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFO3dCQUN2QyxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVc7d0JBQ3pCLE1BQU0sRUFBRSxLQUFJLENBQUMsYUFBYTt3QkFDMUIsaUJBQWlCLEVBQUU7NEJBQ2pCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFO3lCQUMzQjt3QkFDRCxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7d0JBQ3RCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTt3QkFDdEIsVUFBVSxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQztvQkFDSCxLQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztnQkFDRCxLQUFLLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYTthQUM1QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFRCxxQkFBZSxHQUFHLFVBQUMsR0FBRztZQUNwQixLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUMxQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQ3pCLE1BQU0sRUFBRSxLQUFJLENBQUMsYUFBYTtnQkFDMUIsaUJBQWlCLEVBQUU7b0JBQ2pCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFO2lCQUMzQjtnQkFDRCxJQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQ3RCLElBQUksRUFBRSxLQUFJLENBQUMsUUFBUTtnQkFDbkIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxpQkFBaUIsRUFBRTthQUMzQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RSxnREFBZ0Q7WUFDaEQsSUFBTSxXQUFXLEdBQVc7Z0JBQzFCLElBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsUUFBUTthQUM1QyxDQUFDO1lBQ0YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLEVBQUUsRUFBRTtnQkFDRixVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUs7Z0JBQ3RCLFdBQVcsYUFBQTtnQkFDWCxtQkFBbUIsRUFBRSxPQUFPO2FBQzdCLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQTs7SUFvTEgsQ0FBQztJQTFUQyxpQ0FBTSxHQUFOLFVBQU8sRUFFTjtZQURDLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxrQkFBTSxFQUFFLGdCQUFLLEVBQUUsb0JBQU8sRUFBRSw4QkFBWSxFQUFFLGdDQUFhOztRQUU3RSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxTQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksbUNBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQzNCLENBQUMsQ0FBQztRQUVILG9CQUFvQjtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFcEQsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRTVELGlDQUFpQztRQUNqQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFBQSxpQkFjQztRQWJDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4RCxLQUFLLENBQUMsSUFBSTthQUNQLElBQUksQ0FDSCxNQUFNLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUM3QjthQUNBLFNBQVMsQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFDakIsMkJBQTJCO1lBQzNCLGdDQUFnQztZQUNoQyx1QkFBdUI7WUFDdkIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBZ0dELHdDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCOztVQUVFO1FBQ0YsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDMUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFBRTtRQUN6RSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksTUFBQTtZQUNKLFFBQVEsVUFBQTtZQUNSLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFO1NBQ2hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsK0NBQW9CLEdBQXBCLFVBQXFCLEVBQUUsRUFBRSxVQUFrQixFQUFFLFFBQWdCO1FBQTdELGlCQW9CQztRQW5CQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JELE9BQU8sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CO1lBQ3hDLE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUNqRixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVzthQUNuQztTQUNGLENBQUMsQ0FBQyxJQUFJO1FBQ0wsOEJBQThCO1FBQzlCLEdBQUcsQ0FBQyxVQUFDLEVBQXdCO2dCQUF0QixrQkFBTSxFQUFFLDhCQUFZO1lBQ3pCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztnQkFDbEQsTUFBTSxRQUFBO2dCQUNOLEtBQUssRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RDLE1BQU0sRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Z0JBQ3hDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO2dCQUNyRixJQUFJLEVBQUUsWUFBWTthQUNuQixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFRLEdBQVIsVUFBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQywrQkFBK0I7WUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQywrQkFBK0I7WUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyw4QkFBOEI7WUFDdEQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDL0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxHQUFHO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDNUIsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3RDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1lBQy9DLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN6QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGlCQUFpQixFQUFFO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTthQUMzQjtZQUNELGdCQUFnQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtZQUNyQyxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUU7Z0JBQ3JDLENBQUMsQ0FBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQU07Z0JBQ2xDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRTtnQkFDckMsQ0FBQyxDQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBTTtnQkFDbEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUN0RTtRQUNELG9CQUFvQjtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsa0NBQTJCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBTyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVPLDRDQUFpQixHQUF6QjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsTUFBRztnQkFDcEIsSUFBSSxDQUFDLFdBQVc7Z0JBQ2hCLE1BQUksSUFBSSxDQUFDLFdBQVcsTUFBRzthQUN4QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQztnQkFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSx5Q0FBYyxHQUFyQjtRQUNFLE9BQU87WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjO1lBQzNDLElBQUksQ0FBQyxTQUFTLE1BQUc7WUFDcEIsSUFBSSxDQUFDLFdBQVc7U0FDakIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sdUNBQVksR0FBbkI7UUFDRSxRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QyxLQUFLLG1CQUFtQjtnQkFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO1lBQ2hEO2dCQUNFLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBRU0sb0NBQVMsR0FBaEIsVUFBaUIsUUFBUTtRQUNmLElBQUEsd0JBQU0sRUFBRSxvQ0FBWSxDQUFjO1FBQzFDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO1lBQ25DLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0Y7UUFFRCxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDOUIsTUFBTSxRQUFBO1lBQ04sS0FBSyxPQUFBO1lBQ0wsTUFBTSxRQUFBO1lBQ04sY0FBYyxnQkFBQTtZQUNkLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBb0IsR0FBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssaUJBQWlCO1lBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7WUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyx1Q0FBWSxHQUFwQixVQUFxQixLQUFhLEVBQUUsSUFBWTtRQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyV0QsQ0FBc0MsZ0JBQWdCLEdBcVdyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvciwgZmlsdGVyLCBmaXJzdCwgdGFwXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xuaW1wb3J0IHsgRW50aXRhTGF5b3V0UmVzcG9uc2UgfSBmcm9tICcuL2VudGl0YS1sYXlvdXQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcblxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIGhhc01ldGFkYXRhRmllbGRzID0gZmFsc2U7XG5cbiAgcHVibGljIG15UmVzcG9uc2U6IEVudGl0YUxheW91dFJlc3BvbnNlOyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxuXG4gIHB1YmxpYyBzZWxlY3RlZFRhYjogc3RyaW5nOyAvLyBzZWxlY3RlZCBuYXYgaXRlbVxuXG4gIHB1YmxpYyBuYXZIZWFkZXI6IGFueSA9IHt9OyAvLyBuYXYtaGVhZGVyIChjdXN0b20pIGRhdGFcblxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBjdXJyZW50U2x1Zzogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcblxuICBwdWJsaWMgY3VycmVudFBhZ2UgPSAxOyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXG5cbiAgcHVibGljIHBhZ2VTaXplID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxuXG4gIC8vID09PT09IEJVQkJMRSBDSEFSVCA9PT09PVxuICBwdWJsaWMgYnViYmxlc1NpemUgPSAxMDsgLy8gcmVsYXRlZCBlbnRpdGllcyAoYnViYmxlcykgcGFnZSBzaXplXG5cbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwdWJsaWMgZmFsbGJhY2tUZXh0ID0gJyc7XG5cbiAgcHVibGljIGxvYWRpbmcgPSB0cnVlO1xuXG4gIG9uSW5pdCh7XG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIHJvdXRlLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jdXJyZW50SWQgPSAnJztcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gK3RoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXMucGFnZSA/PyAxO1xuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICB9KTtcblxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2VudGl0YScpO1xuXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBFbnRpdMOgJyk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0YWJcbiAgICB0aGlzLnNpbmdsZVRhYkNoZWNrKCk7XG4gIH1cblxuICBzaW5nbGVUYWJDaGVjaygpIHtcbiAgICBjb25zdCBuYXZEUyA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnYXctZW50aXRhLW5hdicpO1xuICAgIG5hdkRTLm91dCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKG91dHB1dCkgPT4gISFvdXRwdXQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IGl0ZW1zIH0pID0+IHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgb25seSBvbmUgdGFiXG4gICAgICAgIC8vIGFuZCB0aGVyZSBhcmUgbm8gcXVlcnkgcGFyYW1zXG4gICAgICAgIC8vIG5hdmlnYXRlIHRvIHRoZSB0YWIuXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEgJiYgIXRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbaXRlbXNbMF0uYW5jaG9yLmhyZWZdLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnRcbiAgICovXG4gIGRyYXdQYWdpbmF0aW9uID0gKHRvdGFsSXRlbXMsIHBhZ2VTaXplKSA9PiB7XG4gICAgaWYgKCF0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkpIHJldHVybjtcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIG1vZGU6ICdocmVmJyxcbiAgICAgIGhyZWYsXG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiB0aGlzLmdldFBhZ2VDb3VudCh0b3RhbEl0ZW1zLCBwYWdlU2l6ZSksXG4gICAgICBjdXJyZW50UGFnZTogK3RoaXMuY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgIHBhZ2VMaW1pdDogNSxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgIGxpc3Q6IFsxMCwgMjUsIDUwXSxcbiAgICAgICAgYWN0aXZlOiArdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcbiAgICovXG4gIGhhbmRsZVBhZ2VOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5teVJlc3BvbnNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2V0RW50aXR5RGV0YWlsc1BhZ2UodGhpcy5teVJlc3BvbnNlLmlkLCArdGhpcy5jdXJyZW50UGFnZSwgK3RoaXMucGFnZVNpemUpXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIC8vIEF3YWl0IGZvciBuZXR3b3JrIHJlc3BvbnNlXG4gICAgICAgIG5leHQ6IChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5teVJlc3BvbnNlID0gZGF0YTtcbiAgICAgICAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uVVJMKCk7XG4gICAgICAgICAgLy8gdXBkYXRlIGxheW91dCBzdGF0ZVxuICAgICAgICAgIHRoaXMucGFnZVNpemUgPSBxdWVyeVBhcmFtcy5zaXplO1xuICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBxdWVyeVBhcmFtcy5wYWdlO1xuICAgICAgICAgIC8vIHVwZGF0ZSBjb21wb25lbnRzXG4gICAgICAgICAgdGhpcy5kcmF3UGFnaW5hdGlvbih0aGlzLmdldEl0ZW1Db3VudCgpLCB0aGlzLnBhZ2VTaXplKTtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSxcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIHRvdGFsOiB0aGlzLmdldEl0ZW1Db3VudCgpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5UGFyYW1zLnBhZ2UsXG4gICAgICAgICAgICBzaXplOiBxdWVyeVBhcmFtcy5zaXplLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGUpID0+IGNhdGNoRXJyb3IoZSksXG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hdlVwZGF0ZSA9ICh0YWIpID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiO1xuICAgIHRoaXMudXBkYXRlV2lkZ2V0cyh0aGlzLm15UmVzcG9uc2UpO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgdG90YWw6IHRoaXMuZ2V0SXRlbUNvdW50KCksXG4gICAgICB9LFxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblVSTCgpLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLmdldExpbmtlZE9iamVjdEl0ZW1zKCkgfSk7XG4gICAgLy8gdXBkYXRlIHRoZSB1cmwgd2l0aCB0aGUgY29ycmVjdCBwYWdlIGFuZCBzaXplXG4gICAgY29uc3QgcXVlcnlQYXJhbXM6IFBhcmFtcyA9IHtcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgIFtdLCB7XG4gICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xuICAgIC8qXG4gICAgICBVcGRhdGVzIHRoZSB3aWRnZXRzIG9uIHRoaXMgbGF5b3V0LCBiYXNlZCBvbiByb3V0ZVxuICAgICovXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkVGFiO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba10pICYmIGRhdGFba10ubGVuZ3RoID09PSAwKSB7IGRhdGFba10gPSBudWxsOyB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUoe1xuICAgICAgZGF0YSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgYmFzZVBhdGg6IHRoaXMuZ2V0TmF2QmFzZVBhdGgoKSxcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudCgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicsIHRoaXMuZ2V0RmllbGRzKHRoaXMubXlSZXNwb25zZSkpO1xuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHRoaXMubXlSZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpO1xuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24odGhpcy5nZXRJdGVtQ291bnQoKSwgdGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBwYWdlIG51bWJlciBhbmQgYSBsaXN0IHNpemUsIHJldHVybnMgdGhlIGRhdGFcbiAgICogZm9yIGEgc2luZ2xlIHBhZ2Ugb2YgY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIGlkIEVudGl0eSBJRFxuICAgKiBAcGFyYW0gcGFnZU51bWJlciBQYWdlIG51bWJlciB0byBsb2FkXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBIb3cgbWFueSBpdGVtcyBuZWVkIHRvIGJlIGxvYWRlZFxuICAgKi9cbiAgZ2V0RW50aXR5RGV0YWlsc1BhZ2UoaWQsIHBhZ2VOdW1iZXI6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZW50aXR5SWQ6IGlkLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAoKHBhZ2VOdW1iZXIgfHwgMSkgLSAxKSAqIHBhZ2VTaXplLCBsaW1pdDogK3BhZ2VTaXplIH0sXG4gICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemVcbiAgICAgIH0sXG4gICAgfSkucGlwZShcbiAgICAgIC8vIGdsb2JhbCBtZXRhZGF0YSB0YWIgY29udHJvbFxuICAgICAgdGFwKCh7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0pID0+IHtcbiAgICAgICAgdGhpcy5oYXNNZXRhZGF0YUZpZWxkcyA9ICEhbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXG4gICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcbiAgICAgICAgICBtZXRhZGF0YVRvU2hvdzogX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdtZXRhZGF0YS10by1zaG93JywgW10pLFxuICAgICAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKlxuICAgKiBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAgKi9cbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnID0gc2x1ZzsgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjsgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlEZXRhaWxzUGFnZShpZCwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCc7XG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXMudHlwZU9mRW50aXR5XTtcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXM7XG4gICAgdGhpcy5uYXZIZWFkZXIgPSB7IC8vIGFsd2F5cyByZW5kZXIgbmF2IGhlYWRlclxuICAgICAgaWNvbjogY29uZmlnID8gY29uZmlnLmljb24gOiAnJyxcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcbiAgICAgIGNvbG9yOiBjb25maWdbJ2NsYXNzLW5hbWUnXSxcbiAgICB9O1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBidWJibGVzRW5hYmxlZDogdGhpcy5idWJibGVzRW5hYmxlZCxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLFxuICAgICAgaGFzTWV0YWRhdGFGaWVsZHM6IHRoaXMuaGFzTWV0YWRhdGFGaWVsZHMsXG4gICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUodGhpcy5nZXRGaWVsZHMocmVzKSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XG4gICAgICAgIHRvdGFsOiB0aGlzLmdldEl0ZW1Db3VudCgpLFxuICAgICAgfSxcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25VUkwoKSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSk7XG4gICAgdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5yZWxhdGlvbk5hbWUgPSByZXMubGFiZWwubGVuZ3RoID4gMzBcbiAgICAgICAgPyBgJHtyZXMubGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxuICAgICAgICA6IHJlcy5sYWJlbDtcbiAgICB9KTtcbiAgICByZXMucmVsYXRlZEVudGl0aWVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5yZWxhdGlvbk5hbWUgPSByZXMubGFiZWwubGVuZ3RoID4gMzBcbiAgICAgICAgPyBgJHtyZXMubGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxuICAgICAgICA6IHJlcy5sYWJlbDtcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5nZXRMaW5rZWRPYmplY3RJdGVtcygpIH0pO1xuICAgIHRoaXMub25lKCdhdy1yZWxhdGVkLWVudGl0aWVzJykudXBkYXRlKHJlcy5yZWxhdGVkRW50aXRpZXMpO1xuICAgIC8vIGZhbGxiYWNrIHRleHRcbiAgICBpZiAoIXRoaXMuaGFzTWV0YWRhdGFGaWVsZHMpIHtcbiAgICAgIHRoaXMuZmFsbGJhY2tUZXh0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLmZhbGxiYWNrO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmE0VmlldyAtIEVudGl0w6AgLSAke3RoaXMubXlSZXNwb25zZS5sYWJlbH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25VUkwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IFtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXG4gICAgICAgIHRoaXMuY3VycmVudFNsdWcsXG4gICAgICAgIGAvJHt0aGlzLnNlbGVjdGVkVGFifS9gLFxuICAgICAgXS5qb2luKCcnKSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROYXZCYXNlUGF0aCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICAgIGAke3RoaXMuY3VycmVudElkfS9gLFxuICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcbiAgICBdLmpvaW4oJycpO1xuICB9XG5cbiAgcHVibGljIGdldEl0ZW1Db3VudCgpOiBudW1iZXIge1xuICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZFRhYikge1xuICAgICAgY2FzZSAnZm9uZGktY29sbGVnYXRpJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubXlSZXNwb25zZS5yZWxhdGVkTGFUb3RhbENvdW50O1xuICAgICAgY2FzZSAnb2dnZXR0aS1jb2xsZWdhdGknOlxuICAgICAgICByZXR1cm4gdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtc1RvdGFsQ291bnQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBmaWVsZHMsIHR5cGVPZkVudGl0eSB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gJ292ZXJ2aWV3Jykge1xuICAgICAgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ292ZXJ2aWV3LmluZm9ybWF6aW9uaScsIFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YWRhdGFIZWxwZXIubm9ybWFsaXplKHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIHBhdGhzLFxuICAgICAgbGFiZWxzLFxuICAgICAgbWV0YWRhdGFUb1Nob3csXG4gICAgICB0eXBlOiB0eXBlT2ZFbnRpdHlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGlua2VkT2JqZWN0SXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUYWIgPT09ICdmb25kaS1jb2xsZWdhdGknXG4gICAgICA/IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkTGFcbiAgICAgIDogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSB0b3RhbCBhbW91bnQgb2YgcGFnZXNcbiAgICpcbiAgICogQHBhcmFtIGl0ZW1zIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGUgZGF0YWJhc2VcbiAgICogQHBhcmFtIHNpemUgdGhlIG51bWJlciBvZiBpdGVtcyBzaG93biBvbiBhIHBhZ2VcbiAgICogQHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYWdlQ291bnQoaXRlbXM6IG51bWJlciwgc2l6ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaXRlbXMgLyBzaXplKTtcbiAgfVxufVxuIl19