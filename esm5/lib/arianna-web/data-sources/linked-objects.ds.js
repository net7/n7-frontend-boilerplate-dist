/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
import { get as _get } from 'lodash'; // used for cherry-picking object keys from app-config.json
// used for cherry-picking object keys from app-config.json
var 
// used for cherry-picking object keys from app-config.json
AwLinkedObjectsDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwLinkedObjectsDS, _super);
    function AwLinkedObjectsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingData = false;
        _this.checkForMore = (/**
         * @param {?=} force
         * @return {?}
         */
        function (force) {
            /*
              Checks if it is possible to load more item previews.
              Can receive a boolean argument to force the button to be
              enabled or disabled. (Used while data is loading)
            */
            if (!_this.loadedData.actions) {
                // if not using actions, don't check
                return;
            }
            if (typeof force !== 'undefined') {
                _this.loadedData.actions[1].disabled = !force;
                return;
            }
            if (_this.loadedData.result.length >= _this.totalObjects) {
                _this.loadedData.actions[1].disabled = true;
            }
            else {
                _this.loadedData.actions[1].disabled = false;
            }
            return;
        });
        _this.handleIncomingData = (/**
         * @param {?} incomingData
         * @return {?}
         */
        function (incomingData) {
            /*
              Called by infinite scroller, adds the incoming
              data to the linked objects component.
            */
            _this.currentPage += 1;
            /** @type {?} */
            var newData = _this.unpackData(incomingData.itemsPagination);
            _this.loadedData.result = _this.loadedData.result.concat(newData.result);
            _this.checkForMore();
            _this.loadedData.isLoading = false;
        });
        _this.addPagination = (/**
         * @param {?} page
         * @param {?} totalPages
         * @param {?} size
         * @return {?}
         */
        function (page, totalPages, size) {
            /** @type {?} */
            var sizeOptions = [10, 25, 50];
            _this.loadedData.pagination = {
                first: { payload: "goto-" + 1, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: "goto-" + (page / 1 - 1), classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: "goto-" + (page / 1 + 1), classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: "goto-" + totalPages, classes: page === totalPages ? 'is-disabled' : '' },
                links: _this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) {
                        return {
                            text: o,
                            selected: o === size,
                        };
                    })),
                    payload: 'select-size'
                },
            };
        });
        _this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        function (totalPages, currentPage) {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            var result = [];
            /** @type {?} */
            var limit = _this.paths.paginationLimit - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                /** @type {?} */
                var lastPage = void 0;
                /** @type {?} */
                var firstPage = void 0;
                if (currentPage > Math.floor(limit / 2)) {
                    if (totalPages === 2) {
                        lastPage = totalPages;
                        firstPage = 1;
                        // when currentPage is after half-point
                        // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    }
                    else if (currentPage < (totalPages - Math.floor(limit / 2))) {
                        lastPage = currentPage / 1 + Math.floor(limit / 2);
                        firstPage = currentPage / 1 - Math.floor(limit / 2);
                    }
                    else {
                        lastPage = totalPages;
                        firstPage = currentPage - limit + (totalPages - currentPage);
                    }
                }
                else {
                    // when currentPage is before half-point
                    // (example: [ 1 ][!2!][ 3 ][ 4 ][ 5 ])
                    lastPage = limit + 1;
                    firstPage = 1;
                }
                for (var i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: 'page-' + String(i),
                        classes: currentPage === i ? 'is-active' : ''
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    payload: 'page-1',
                    classes: currentPage === 1 ? 'is-active' : ''
                });
                for (var i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        });
        _this.unpackData = (/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /*
                  Dynamically returns the data object for each HTML component
                  data: {
                    previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
                    pagination: { first, last, links, next, prev, select }
                  }
                */
            /** @type {?} */
            var config = _this.options.config;
            /** @type {?} */
            var // app-config.json
            paths = config.get('item-preview');
            /** @type {?} */
            var // item preview dynamic paths
            totalCount = data.totalCount;
            /** @type {?} */
            var // total amount of items available on backend
            totalPages = _this.totalPages;
            /** @type {?} */
            var // calculated number of pages
            page = _this.currentPage;
            /** @type {?} */
            var // current page (if using pagination)
            context = _this.context;
            /** @type {?} */
            var // parent layout name
            size = _this.pageSize;
            /** @type {?} */
            var // items per page (if using pagination)
            labels = config.get('labels');
            var dynamicPagination = _this.options.dynamicPagination;
            /** @type {?} */
            var keys = config ? config.get('config-keys') : {};
            /** @type {?} */
            var lengthLimit;
            /** @type {?} */
            var resultsLimit;
            /** @type {?} */
            var d = data.items ? data.items : data.relatedItems;
            if (config) {
                // dynamic search for max-item-length
                if (config.get(context + '-layout')) {
                    lengthLimit = config.get(context + '-layout')['max-item-length'];
                    resultsLimit = config.get(context + '-layout')['results-limit'];
                }
            }
            // resize data
            if (!dynamicPagination && size && page) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            /** @type {?} */
            var result = [];
            /** @type {?} */
            var enabledKeys = paths.metadata.info.selection.map((/**
             * @param {?} info
             * @return {?}
             */
            function (info) { return info.key; }));
            d.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                /** @type {?} */
                var infoData = _get(el, paths.metadata.info.data, el.item.fields);
                /** @type {?} */
                var infoDataItems = infoData ? infoData.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return enabledKeys.indexOf(data.key) !== -1; })) : [];
                /** @type {?} */
                var toeData = _get(el, paths.metadata.toe.data, el.relatedTypesOfEntity);
                /** @type {?} */
                var breadcrumbs = _get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs);
                /** @type {?} */
                var item = {
                    image: _get(el, paths.image, el.image),
                    title: 
                    // if there is a max string length in config, use it
                    +paths.title.maxLength && _get(el, paths.title, el.item.label).length > +paths.title.maxLength ?
                        _get(el, paths.title, el.item.label).slice(0, +paths.title.maxLength) + '…' :
                        _get(el, paths.title, el.item.label),
                    text: !paths.text ? null : // make text block (in config) optional
                        +paths.text.maxLength && _get(el, paths.text.data, el.item.text).length > +paths.text.maxLength ?
                            _get(el, paths.text.data, el.item.text).slice(0, +paths.text.maxLength) + '…' :
                            _get(el, paths.text.data, el.item.text),
                    payload: { id: _get(el, paths.payload, el.item.id), type: el.item.typeOfEntity },
                    classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                    metadata: infoDataItems.length || toeData ? [] : null,
                    breadcrumbs: null
                };
                // metadata
                if (infoDataItems.length) {
                    item.metadata.push({
                        classes: 'n7-objects__metadata-artist',
                        items: infoDataItems.map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) { return ({
                            label: helpers.prettifySnakeCase(data.key, labels[data.key]),
                            value: data.value
                        }); }))
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'n7-objects__metadata-linked',
                        items: toeData.map((/**
                         * @param {?} toe
                         * @return {?}
                         */
                        function (toe) {
                            return {
                                // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                value: _get(toe, paths.metadata.toe.value, toe.count),
                                // icon: 'n7-icon-bell' // TODO: link icon to config key
                                icon: keys[_get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')]
                                    ? keys[_get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')].icon
                                    : '',
                                classes: 'color-' + _get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')
                            };
                        }))
                    });
                }
                // breadcrumbs
                if (breadcrumbs) {
                    item['breadcrumbs'] = {
                        // n7-breadcrumbs uses this as it's own data
                        items: _get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs).map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        function (crumb) {
                            return {
                                label: _get(crumb, paths.metadata.breadcrumbs.label, crumb.label),
                                payload: _get(crumb, paths.metadata.breadcrumbs.payload, crumb.link),
                            };
                        }))
                    };
                }
                result.push(item);
            }));
            if (context === 'home') {
                /** @type {?} */
                var actions = [
                    {
                        label: 'Mostra Tutti (' + totalCount + ')'
                    },
                    lengthLimit ?
                        {
                            label: 'Mostra Altri (' + resultsLimit + ')',
                            disabled: false,
                        } : null,
                ];
                return {
                    result: result,
                    actions: actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback']
                };
            }
            return { previews: result };
        });
        return _this;
    }
    // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwLinkedObjectsDS.prototype.transform = 
    // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.paths = this.options.config.get('item-preview');
        this.pageSize = this.options.size;
        this.totalObjects = data.totalCount;
        this.currentPage = this.options.page ? +this.options.page : 1;
        if (this.options.dynamicPagination && this.options.dynamicPagination.total) {
            this.totalPages = Math.ceil(this.options.dynamicPagination.total / this.pageSize);
        }
        else if (data.items) {
            this.totalPages = Math.ceil(data.items.length / this.pageSize);
        }
        else if (data.relatedItems) {
            this.totalPages = Math.ceil(data.relatedItems.length / this.pageSize);
        }
        this.context = this.options.context;
        this.loadedData = this.unpackData(data);
        if (this.options.pagination) {
            this.addPagination(this.currentPage, this.totalPages, this.pageSize);
        }
        this.checkForMore(); // checks if <Show More> button should be enabled
        this.loadedData.loaderData = {};
        return this.loadedData;
    };
    return AwLinkedObjectsDS;
}(DataSource));
// used for cherry-picking object keys from app-config.json
export { AwLinkedObjectsDS };
if (false) {
    /** @type {?} */
    AwLinkedObjectsDS.prototype.currentPage;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.totalPages;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.totalObjects;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.pageSize;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.context;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.loadedData;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.loadingData;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.paths;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.checkForMore;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.handleIncomingData;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.addPagination;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.makePagination;
    /**
     * @type {?}
     * @private
     */
    AwLinkedObjectsDS.prototype.unpackData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUVqRzs7O0lBQXVDLDZDQUFVO0lBQWpEO1FBQUEscUVBd1FDO1FBaFFRLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBeUJwQixrQkFBWTs7OztRQUFHLFVBQUMsS0FBZTtZQUNwQzs7OztjQUlFO1lBQ0YsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUM1QixvQ0FBb0M7Z0JBQ3BDLE9BQU87YUFDUjtZQUNELElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLE9BQU87YUFDUjtZQUNELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUM3QztZQUNELE9BQU87UUFDVCxDQUFDLEVBQUE7UUFFTSx3QkFB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QUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBcEMsQ0FBb0MsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztvQkFDN0YsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzs7b0JBQ3BFLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDOztvQkFDdkUsSUFBSSxHQUFHO29CQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDdEMsS0FBSztvQkFDSCxvREFBb0Q7b0JBQ3BELENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUYsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzdFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDeEMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7d0JBQ2hFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7NEJBQy9GLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzs0QkFDL0UsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDM0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDaEYsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNyRSxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDckQsV0FBVyxFQUFFLElBQUk7aUJBQ2xCO2dCQUNILFdBQVc7Z0JBQ1gsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsT0FBTyxFQUFFLDZCQUE2Qjt3QkFDdEMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxHQUFHOzs7O3dCQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQzs0QkFDaEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt5QkFDbEIsQ0FBQyxFQUgrQixDQUcvQixFQUFDO3FCQUNKLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsT0FBTyxFQUFFLDZCQUE2Qjt3QkFDdEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHOzs7O3dCQUFDLFVBQUEsR0FBRzs0QkFDcEIsT0FBTzs7Z0NBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7O2dDQUVyRCxJQUFJLEVBQUUsSUFBSSxDQUNSLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29DQUMvRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQ0FDM0UsQ0FBQyxDQUFDLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7NkJBQ25GLENBQUM7d0JBQ0osQ0FBQyxFQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtnQkFDRCxjQUFjO2dCQUNkLElBQUksV0FBVyxFQUFFO29CQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRzs7d0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRzs7Ozt3QkFBQyxVQUFBLEtBQUs7NEJBQ3hFLE9BQU87Z0NBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0NBQ2pFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDOzZCQUNyRSxDQUFDO3dCQUNKLENBQUMsRUFBQztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7O29CQUNoQixPQUFPLEdBQUc7b0JBQ2Q7d0JBQ0UsS0FBSyxFQUFFLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxHQUFHO3FCQUMzQztvQkFDRCxXQUFXLENBQUMsQ0FBQzt3QkFDWDs0QkFDRSxLQUFLLEVBQUUsZ0JBQWdCLEdBQUcsWUFBWSxHQUFHLEdBQUc7NEJBQzVDLFFBQVEsRUFBRSxLQUFLO3lCQUNoQixDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUNYO2dCQUNELE9BQU87b0JBQ0wsTUFBTSxRQUFBO29CQUNOLE9BQU8sU0FBQTtvQkFDUCxTQUFTLEVBQUUsS0FBSztvQkFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMseUJBQXlCLENBQUM7aUJBQy9ELENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7Ozs7SUE3UFcscUNBQVM7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkY7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRTthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBeU9ILHdCQUFDO0FBQUQsQ0FBQyxBQXhRRCxDQUF1QyxVQUFVLEdBd1FoRDs7Ozs7SUF0UUMsd0NBQTJCOztJQUMzQix1Q0FBMEI7O0lBQzFCLHlDQUE0Qjs7SUFDNUIscUNBQXdCOztJQUN4QixvQ0FBdUI7O0lBQ3ZCLHVDQUF1Qjs7SUFDdkIsd0NBQTJCOztJQUMzQixrQ0FBa0I7O0lBd0JsQix5Q0FvQkM7O0lBRUQsK0NBVUM7O0lBRUQsMENBb0JDOztJQUVELDJDQXFEQzs7Ozs7SUFFRCx1Q0F1SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnOyAvLyB1c2VkIGZvciBjaGVycnktcGlja2luZyBvYmplY3Qga2V5cyBmcm9tIGFwcC1jb25maWcuanNvblxuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgcHVibGljIHRvdGFsT2JqZWN0czogbnVtYmVyO1xuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiAgcHVibGljIGNvbnRleHQ6IHN0cmluZztcbiAgcHVibGljIGxvYWRlZERhdGE6IGFueTtcbiAgcHVibGljIGxvYWRpbmdEYXRhID0gZmFsc2U7XG4gIHB1YmxpYyBwYXRoczogYW55OyAvLyB1c2UgZHluYW1pYyBvYmplY3QgcGF0aHMgZnJvbSBjb25maWdcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLnBhdGhzID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpO1xuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICB0aGlzLnRvdGFsT2JqZWN0cyA9IGRhdGEudG90YWxDb3VudDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5vcHRpb25zLnBhZ2UgPyArdGhpcy5vcHRpb25zLnBhZ2UgOiAxO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24gJiYgdGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5pdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5yZWxhdGVkSXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0O1xuICAgIHRoaXMubG9hZGVkRGF0YSA9IHRoaXMudW5wYWNrRGF0YShkYXRhKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuYWRkUGFnaW5hdGlvbih0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLnRvdGFsUGFnZXMsIHRoaXMucGFnZVNpemUpO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpOyAvLyBjaGVja3MgaWYgPFNob3cgTW9yZT4gYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkXG4gICAgdGhpcy5sb2FkZWREYXRhLmxvYWRlckRhdGEgPSB7fTtcbiAgICByZXR1cm4gdGhpcy5sb2FkZWREYXRhO1xuICB9XG5cbiAgcHVibGljIGNoZWNrRm9yTW9yZSA9IChmb3JjZT86IGJvb2xlYW4pID0+IHtcbiAgICAvKlxuICAgICAgQ2hlY2tzIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGxvYWQgbW9yZSBpdGVtIHByZXZpZXdzLlxuICAgICAgQ2FuIHJlY2VpdmUgYSBib29sZWFuIGFyZ3VtZW50IHRvIGZvcmNlIHRoZSBidXR0b24gdG8gYmVcbiAgICAgIGVuYWJsZWQgb3IgZGlzYWJsZWQuIChVc2VkIHdoaWxlIGRhdGEgaXMgbG9hZGluZylcbiAgICAqL1xuICAgIGlmICghdGhpcy5sb2FkZWREYXRhLmFjdGlvbnMpIHtcbiAgICAgIC8vIGlmIG5vdCB1c2luZyBhY3Rpb25zLCBkb24ndCBjaGVja1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZvcmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSAhZm9yY2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA+PSB0aGlzLnRvdGFsT2JqZWN0cykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlSW5jb21pbmdEYXRhID0gaW5jb21pbmdEYXRhID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IGluZmluaXRlIHNjcm9sbGVyLCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgdGhpcy5jdXJyZW50UGFnZSArPSAxO1xuICAgIGNvbnN0IG5ld0RhdGE6IGFueSA9IHRoaXMudW5wYWNrRGF0YShpbmNvbWluZ0RhdGEuaXRlbXNQYWdpbmF0aW9uKTtcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7XG4gICAgdGhpcy5sb2FkZWREYXRhLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGFkZFBhZ2luYXRpb24gPSAocGFnZSwgdG90YWxQYWdlcywgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IHNpemVPcHRpb25zID0gWzEwLCAyNSwgNTBdO1xuICAgIHRoaXMubG9hZGVkRGF0YS5wYWdpbmF0aW9uID0ge1xuICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC8gMSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxICsgMX1gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsYXN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7dG90YWxQYWdlc31gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsaW5rczogdGhpcy5tYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAobyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6IG8sXG4gICAgICAgICAgICBzZWxlY3RlZDogbyA9PT0gc2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgfSxcbiAgICAgIC8vIHByZXZpZXdzOiByZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG1ha2VQYWdpbmF0aW9uID0gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSB0aGlzLnVucGFja0RhdGEoKSB3aGVuIHRoaXMub3B0aW9ucy5wYWdlIGlzIGRlZmluZWQuXG4gICAgICBSZXR1cm5zIHRoZSBkYXRhIGZvciA8bjctcGFnaW5hdGlvbj4gY29tcG9uZW50LlxuICAgICovXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IGxpbWl0ID0gdGhpcy5wYXRocy5wYWdpbmF0aW9uTGltaXQgLSAxO1xuXG4gICAgaWYgKHRvdGFsUGFnZXMgPD0gbGltaXQpIHtcbiAgICAgIGxpbWl0ID0gdG90YWxQYWdlcyAtIDE7XG4gICAgfVxuXG4gICAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgICBpZiAobGltaXQpIHtcbiAgICAgIGxldCBsYXN0UGFnZTogbnVtYmVyLCBmaXJzdFBhZ2U6IG51bWJlcjtcbiAgICAgIGlmIChjdXJyZW50UGFnZSA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xuICAgICAgICBpZiAodG90YWxQYWdlcyA9PT0gMikge1xuICAgICAgICAgIGxhc3RQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBmaXJzdFBhZ2UgPSAxO1xuICAgICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYWZ0ZXIgaGFsZi1wb2ludFxuICAgICAgICAgIC8vIChleGFtcGxlOiBbIDE0IF1bIDE1IF1bITE2IV1bIDE3IF1bIDE4IF0pXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPCAodG90YWxQYWdlcyAtIE1hdGguZmxvb3IobGltaXQgLyAyKSkpIHtcbiAgICAgICAgICBsYXN0UGFnZSA9IGN1cnJlbnRQYWdlIC8gMSArIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgICBmaXJzdFBhZ2UgPSBjdXJyZW50UGFnZSAvIDEgLSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlIC0gbGltaXQgKyAodG90YWxQYWdlcyAtIGN1cnJlbnRQYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBiZWZvcmUgaGFsZi1wb2ludFxuICAgICAgICAvLyAoZXhhbXBsZTogWyAxIF1bITIhXVsgMyBdWyA0IF1bIDUgXSlcbiAgICAgICAgbGFzdFBhZ2UgPSBsaW1pdCArIDE7XG4gICAgICAgIGZpcnN0UGFnZSA9IDE7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdFBhZ2U7IGkgPD0gbGFzdFBhZ2U7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxuICAgICAgICAgIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSksXG4gICAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHRleHQ6ICcxJyxcbiAgICAgICAgcGF5bG9hZDogJ3BhZ2UtMScsXG4gICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJ1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSArIDEpLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gZGF0YSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnLCAgICAgICAvLyBhcHAtY29uZmlnLmpzb25cbiAgICAgIHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3JyksIC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXG4gICAgICB0b3RhbENvdW50ID0gZGF0YS50b3RhbENvdW50LCAgICAgICAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsUGFnZXMsICAgICAgIC8vIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBwYWdlID0gdGhpcy5jdXJyZW50UGFnZSwgICAgICAgICAgICAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgICAgICAgICAgICAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICAgIHNpemUgPSB0aGlzLnBhZ2VTaXplLCAgICAgICAgICAgICAgIC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgICAgbGFiZWxzID0gY29uZmlnLmdldCgnbGFiZWxzJyksXG4gICAgICB7IGR5bmFtaWNQYWdpbmF0aW9uIH0gPSB0aGlzLm9wdGlvbnMsXG4gICAgICBrZXlzID0gY29uZmlnID8gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKSA6IHt9O1xuICAgIGxldFxuICAgICAgbGVuZ3RoTGltaXQ6IG51bGwsXG4gICAgICByZXN1bHRzTGltaXQ6IG51bGwsXG4gICAgICBkID0gZGF0YS5pdGVtcyA/IGRhdGEuaXRlbXMgOiBkYXRhLnJlbGF0ZWRJdGVtczsgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICAvLyBkeW5hbWljIHNlYXJjaCBmb3IgbWF4LWl0ZW0tbGVuZ3RoXG4gICAgICBpZiAoY29uZmlnLmdldChjb250ZXh0ICsgJy1sYXlvdXQnKSkge1xuICAgICAgICBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddO1xuICAgICAgICByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J107XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlc2l6ZSBkYXRhXG4gICAgaWYgKCFkeW5hbWljUGFnaW5hdGlvbiAmJiBzaXplICYmIHBhZ2UpIHtcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoaW5mbyA9PiBpbmZvLmtleSk7XG4gICAgZC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IGluZm9EYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby5kYXRhLCBlbC5pdGVtLmZpZWxkcyksXG4gICAgICAgIGluZm9EYXRhSXRlbXMgPSBpbmZvRGF0YSA/IGluZm9EYXRhLmZpbHRlcihkYXRhID0+IGVuYWJsZWRLZXlzLmluZGV4T2YoZGF0YS5rZXkpICE9PSAtMSkgOiBbXSxcbiAgICAgICAgdG9lRGF0YSA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLnRvZS5kYXRhLCBlbC5yZWxhdGVkVHlwZXNPZkVudGl0eSksXG4gICAgICAgIGJyZWFkY3J1bWJzID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgZWwuYnJlYWRjcnVtYnMpLFxuICAgICAgICBpdGVtID0ge1xuICAgICAgICAgIGltYWdlOiBfZ2V0KGVsLCBwYXRocy5pbWFnZSwgZWwuaW1hZ2UpLFxuICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBtYXggc3RyaW5nIGxlbmd0aCBpbiBjb25maWcsIHVzZSBpdFxuICAgICAgICAgICAgK3BhdGhzLnRpdGxlLm1heExlbmd0aCAmJiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCkubGVuZ3RoID4gK3BhdGhzLnRpdGxlLm1heExlbmd0aCA/XG4gICAgICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBlbC5pdGVtLmxhYmVsKS5zbGljZSgwLCArcGF0aHMudGl0bGUubWF4TGVuZ3RoKSArICfigKYnIDpcbiAgICAgICAgICAgICAgX2dldChlbCwgcGF0aHMudGl0bGUsIGVsLml0ZW0ubGFiZWwpLFxuICAgICAgICAgIHRleHQ6ICFwYXRocy50ZXh0ID8gbnVsbCA6IC8vIG1ha2UgdGV4dCBibG9jayAoaW4gY29uZmlnKSBvcHRpb25hbFxuICAgICAgICAgICAgK3BhdGhzLnRleHQubWF4TGVuZ3RoICYmIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgZWwuaXRlbS50ZXh0KS5sZW5ndGggPiArcGF0aHMudGV4dC5tYXhMZW5ndGggP1xuICAgICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGVsLml0ZW0udGV4dCkuc2xpY2UoMCwgK3BhdGhzLnRleHQubWF4TGVuZ3RoKSArICfigKYnIDpcbiAgICAgICAgICAgICAgX2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBlbC5pdGVtLnRleHQpLFxuICAgICAgICAgIHBheWxvYWQ6IHsgaWQ6IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGVsLml0ZW0uaWQpLCB0eXBlOiBlbC5pdGVtLnR5cGVPZkVudGl0eSB9LFxuICAgICAgICAgIGNsYXNzZXM6IFsnZW50aXRhJywgJ3NlYXJjaCddLmluY2x1ZGVzKGNvbnRleHQpID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJyxcbiAgICAgICAgICBtZXRhZGF0YTogaW5mb0RhdGFJdGVtcy5sZW5ndGggfHwgdG9lRGF0YSA/IFtdIDogbnVsbCxcbiAgICAgICAgICBicmVhZGNydW1iczogbnVsbFxuICAgICAgICB9O1xuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1hcnRpc3QnLFxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcChkYXRhID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShkYXRhLmtleSwgbGFiZWxzW2RhdGEua2V5XSksXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxuICAgICAgICAgIH0pKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2VEYXRhKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAvLyBwZXJzb25hOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgICBpY29uOiBrZXlzW1xuICAgICAgICAgICAgICAgIF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoJyAnLCAnLScpXVxuICAgICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKS5yZXBsYWNlKCcgJywgJy0nKV0uaWNvblxuICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2xvci0nICsgX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSkucmVwbGFjZSgnICcsICctJylcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBicmVhZGNydW1ic1xuICAgICAgaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgICAgIGl0ZW1bJ2JyZWFkY3J1bWJzJ10gPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLmJyZWFkY3J1bWJzKS5tYXAoY3J1bWIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWw6IF9nZXQoY3J1bWIsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmxhYmVsLCBjcnVtYi5sYWJlbCksXG4gICAgICAgICAgICAgIHBheWxvYWQ6IF9nZXQoY3J1bWIsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLnBheWxvYWQsIGNydW1iLmxpbmspLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTW9zdHJhIFR1dHRpICgnICsgdG90YWxDb3VudCArICcpJ1xuICAgICAgICB9LFxuICAgICAgICBsZW5ndGhMaW1pdCA/XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdNb3N0cmEgQWx0cmkgKCcgKyByZXN1bHRzTGltaXQgKyAnKScsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSA6IG51bGwsXG4gICAgICBdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBmYWxsYmFjazogY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbGlua2VkLW9iamVjdHMtZmFsbGJhY2snXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xuICB9XG59XG4iXX0=