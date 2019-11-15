/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import { get as _get } from "lodash"; // used for cherry-picking object keys from app-config.json
// used for cherry-picking object keys from app-config.json
export class AwLinkedObjectsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.loadingData = false;
        this.checkForMore = (/**
         * @param {?=} force
         * @return {?}
         */
        (force) => {
            /*
              Checks if it is possible to load more item previews.
              Can receive a boolean argument to force the button to be
              enabled or disabled. (Used while data is loading)
            */
            if (!this.loadedData.actions) {
                // if not using actions, don't check
                return;
            }
            if (typeof force !== 'undefined') {
                this.loadedData.actions[1].disabled = !force;
                return;
            }
            if (this.loadedData.result.length >= this.totalObjects) {
                this.loadedData.actions[1].disabled = true;
            }
            else {
                this.loadedData.actions[1].disabled = false;
            }
            return;
        });
        this.handleIncomingData = (/**
         * @param {?} incomingData
         * @return {?}
         */
        incomingData => {
            /*
              Called by button <Mostra Altri>, adds the incoming
              data to the linked objects component.
            */
            this.currentPage += 1;
            /** @type {?} */
            let newData = this.unpackData(incomingData.itemsPagination);
            this.loadedData.result = this.loadedData.result.concat(newData.result);
            this.checkForMore();
            this.loadedData.isLoading = false;
        });
        this.addPagination = (/**
         * @param {?} page
         * @param {?} totalPages
         * @param {?} size
         * @return {?}
         */
        (page, totalPages, size) => {
            /** @type {?} */
            let sizeOptions = [10, 25, 50];
            this.loadedData.pagination = {
                first: { payload: `goto-${1}`, classes: page == 1 ? 'is-disabled' : '' },
                prev: { payload: `goto-${page / 1 - 1}`, classes: page == 1 ? 'is-disabled' : '' },
                next: { payload: `goto-${page / 1 + 1}`, classes: page == totalPages ? 'is-disabled' : '' },
                last: { payload: `goto-${totalPages}`, classes: page == totalPages ? 'is-disabled' : '' },
                links: this.makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    o => {
                        return {
                            text: o,
                            selected: o == size,
                        };
                    })),
                    payload: 'select-size'
                },
            };
        });
        this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        (totalPages, currentPage) => {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            let result = [];
            /** @type {?} */
            let limit = this.paths.paginationLimit - 1
            // always push the first page
            ;
            // always push the first page
            if (limit) {
                /** @type {?} */
                let lastPage;
                /** @type {?} */
                let firstPage;
                if (currentPage > Math.floor(limit / 2)) {
                    // when currentPage is after half-point
                    // (example: [ 14 ][ 15 ][!16!][ 17 ][ 18 ])
                    if (currentPage < (totalPages - Math.floor(limit / 2))) {
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
                // console.log({ currentPage, limit, lastPage, firstPage })
                for (let i = firstPage; i <= lastPage; i++) {
                    result.push({
                        text: String(i),
                        payload: 'page-' + String(i),
                        classes: currentPage == i ? 'is-active' : ''
                    });
                }
            }
            else {
                result.push({
                    text: '1',
                    payload: 'page-1',
                    classes: currentPage == 1 ? 'is-active' : ''
                });
                for (let i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
                }
            }
            return result;
        });
        this.unpackData = (/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /*
                  Dynamically returns the data object for each HTML component
                  data: {
                    previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
                    pagination: { first, last, links, next, prev, select }
                  }
                */
            /** @type {?} */
            const config = this.options.config;
            /** @type {?} */
            const // app-config.json
            paths = config.get('item-preview');
            /** @type {?} */
            const // item preview dynamic paths
            totalCount = data.totalCount;
            /** @type {?} */
            const // total amount of items available on backend
            totalPages = this.totalPages;
            /** @type {?} */
            const // calculated number of pages
            page = this.currentPage;
            /** @type {?} */
            const // current page (if using pagination)
            context = this.context;
            /** @type {?} */
            const // parent layout name
            size = this.pageSize // items per page (if using pagination)
            ;
            // items per page (if using pagination)
            /** @type {?} */
            var d = data.items ? data.items : data.relatedItems // items to iterate over
            ;
            if (config) {
                /** @type {?} */
                var keys = config.get('config-keys')
                // dynamic search for max-item-length
                ;
                // dynamic search for max-item-length
                if (config.get(context + '-layout')) {
                    /** @type {?} */
                    var lengthLimit = config.get(context + '-layout')['max-item-length'];
                    /** @type {?} */
                    var resultsLimit = config.get(context + '-layout')['results-limit'];
                }
            }
            // resize data
            if (size && page) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            /** @type {?} */
            var result = [];
            d.forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                /** @type {?} */
                let item = {
                    image: _get(el, paths.image, el.image),
                    title: 
                    // if there is a max string length in config, use it
                    Number(paths.title.maxLength) && _get(el, paths.title, el.item.label).length > Number(paths.title.maxLength) ?
                        _get(el, paths.title, el.item.label).slice(0, Number(paths.title.maxLength)) + '…' :
                        _get(el, paths.title, el.item.label),
                    text: Number(paths.text.maxLength) && _get(el, paths.text.data, el.item.text).length > Number(paths.text.maxLength) ?
                        _get(el, paths.text.data, el.item.text).slice(0, Number(paths.text.maxLength)) + '…' :
                        _get(el, paths.text.data, el.item.text),
                    payload: _get(el, paths.payload, el.item.id),
                    classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                    metadata: [
                        _get(el, paths.metadata.info.data, el.item.fields) ? {
                            classes: 'n7-objects__metadata-artist',
                            items: _get(el, paths.metadata.info.data, el.item.fields).map((/**
                             * @param {?} data
                             * @return {?}
                             */
                            data => ({
                                label: paths.metadata.info.customLabel ? paths.metadata.info.customLabel : _get(data, paths.metadata.info.label, data.key),
                                value: _get(data, paths.metadata.info.value, data.value)
                            })))
                        } : {},
                        {
                            classes: 'n7-objects__metadata-linked',
                            items: _get(el, paths.metadata.toe.data, el.relatedTypesOfEntity) ?
                                _get(el, paths.metadata.toe.data, el.relatedTypesOfEntity).map((/**
                                 * @param {?} toe
                                 * @return {?}
                                 */
                                toe => {
                                    return {
                                        // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                        value: _get(toe, paths.metadata.toe.value, toe.count),
                                        // icon: 'n7-icon-bell' // TODO: link icon to config key
                                        icon: keys[_get(toe, paths.metadata.toe.icon, toe.type).replace(" ", "-")] ? keys[_get(toe, paths.metadata.toe.icon, toe.type).replace(" ", "-")].icon : "",
                                        classes: 'color-' + _get(toe, paths.metadata.toe.icon, toe.type).replace(" ", "-")
                                    };
                                })) : null
                        }
                    ]
                };
                if (_get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs)) {
                    item['breadcrumbs'] = {
                        // n7-breadcrumbs uses this as it's own data
                        items: _get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs).map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        crumb => {
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
                let actions = [
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
                    result,
                    actions,
                    isLoading: false,
                };
            }
            return { previews: result };
        });
    }
    // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        this.paths = this.options.config.get('item-preview');
        this.pageSize = this.options.size;
        this.totalObjects = data.totalCount;
        this.currentPage = this.options.page ? (/** @type {?} */ (this.options.page)) : 1;
        if (data.items) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUEsQ0FBQywyREFBMkQ7O0FBRWhHLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQVFTLGdCQUFXLEdBQVksS0FBSyxDQUFBO1FBdUI1QixpQkFBWTs7OztRQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDeEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFNO2FBQ1A7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFBO2dCQUM1QyxPQUFNO2FBQ1A7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2FBQzNDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7YUFDNUM7WUFDRCxPQUFNO1FBQ1IsQ0FBQyxFQUFBO1FBRU0sdUJBQWtCOzs7O1FBQUcsWUFBWSxDQUFDLEVB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QTtTQUMvRDthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDckU7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUEsQ0FBQyxpREFBaUQ7UUFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDO0NBK01GOzs7SUExT0Msd0NBQTBCOztJQUMxQix1Q0FBeUI7O0lBQ3pCLHlDQUEyQjs7SUFDM0IscUNBQXVCOztJQUN2QixvQ0FBc0I7O0lBQ3RCLHVDQUFzQjs7SUFDdEIsd0NBQW1DOztJQUNuQyxrQ0FBaUI7O0lBc0JqQix5Q0FvQkM7O0lBRUQsK0NBVUM7O0lBRUQsMENBb0JDOztJQUVELDJDQTZDQzs7Ozs7SUFFRCx1Q0FxR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tIFwibG9kYXNoXCIgLy8gdXNlZCBmb3IgY2hlcnJ5LXBpY2tpbmcgb2JqZWN0IGtleXMgZnJvbSBhcHAtY29uZmlnLmpzb25cblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXJcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlclxuICBwdWJsaWMgdG90YWxPYmplY3RzOiBudW1iZXJcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXJcbiAgcHVibGljIGNvbnRleHQ6IHN0cmluZ1xuICBwdWJsaWMgbG9hZGVkRGF0YTogYW55XG4gIHB1YmxpYyBsb2FkaW5nRGF0YTogYm9vbGVhbiA9IGZhbHNlXG4gIHB1YmxpYyBwYXRoczogYW55IC8vIHVzZSBkeW5hbWljIG9iamVjdCBwYXRocyBmcm9tIGNvbmZpZ1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMucGF0aHMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3JylcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemVcbiAgICB0aGlzLnRvdGFsT2JqZWN0cyA9IGRhdGEudG90YWxDb3VudFxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm9wdGlvbnMucGFnZSA/IDxudW1iZXI+dGhpcy5vcHRpb25zLnBhZ2UgOiAxXG4gICAgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpXG4gICAgfSBlbHNlIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEucmVsYXRlZEl0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0XG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLmFkZFBhZ2luYXRpb24odGhpcy5jdXJyZW50UGFnZSwgdGhpcy50b3RhbFBhZ2VzLCB0aGlzLnBhZ2VTaXplKVxuICAgIH1cbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpIC8vIGNoZWNrcyBpZiA8U2hvdyBNb3JlPiBidXR0b24gc2hvdWxkIGJlIGVuYWJsZWRcbiAgICB0aGlzLmxvYWRlZERhdGEubG9hZGVyRGF0YSA9IHt9XG4gICAgcmV0dXJuIHRoaXMubG9hZGVkRGF0YVxuICB9XG5cbiAgcHVibGljIGNoZWNrRm9yTW9yZSA9IChmb3JjZT86IGJvb2xlYW4pID0+IHtcbiAgICAvKlxuICAgICAgQ2hlY2tzIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGxvYWQgbW9yZSBpdGVtIHByZXZpZXdzLlxuICAgICAgQ2FuIHJlY2VpdmUgYSBib29sZWFuIGFyZ3VtZW50IHRvIGZvcmNlIHRoZSBidXR0b24gdG8gYmVcbiAgICAgIGVuYWJsZWQgb3IgZGlzYWJsZWQuIChVc2VkIHdoaWxlIGRhdGEgaXMgbG9hZGluZylcbiAgICAqL1xuICAgIGlmICghdGhpcy5sb2FkZWREYXRhLmFjdGlvbnMpIHtcbiAgICAgIC8vIGlmIG5vdCB1c2luZyBhY3Rpb25zLCBkb24ndCBjaGVja1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm9yY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9ICFmb3JjZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA+PSB0aGlzLnRvdGFsT2JqZWN0cykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlSW5jb21pbmdEYXRhID0gaW5jb21pbmdEYXRhID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IGJ1dHRvbiA8TW9zdHJhIEFsdHJpPiwgYWRkcyB0aGUgaW5jb21pbmdcbiAgICAgIGRhdGEgdG8gdGhlIGxpbmtlZCBvYmplY3RzIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIHRoaXMuY3VycmVudFBhZ2UgKz0gMVxuICAgIGxldCBuZXdEYXRhOiBhbnkgPSB0aGlzLnVucGFja0RhdGEoaW5jb21pbmdEYXRhLml0ZW1zUGFnaW5hdGlvbilcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpXG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKVxuICAgIHRoaXMubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgcHVibGljIGFkZFBhZ2luYXRpb24gPSAocGFnZSwgdG90YWxQYWdlcywgc2l6ZSkgPT4ge1xuICAgIGxldCBzaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwXVxuICAgIHRoaXMubG9hZGVkRGF0YS5wYWdpbmF0aW9uID0ge1xuICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgcHJldjogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UvMSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBuZXh0OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZS8xICsgMX1gLCBjbGFzc2VzOiBwYWdlID09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgbGlua3M6IHRoaXMubWFrZVBhZ2luYXRpb24odG90YWxQYWdlcywgcGFnZSksXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgb3B0aW9uczogc2l6ZU9wdGlvbnMubWFwKG8gPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiBvLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IG8gPT0gc2l6ZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnXG4gICAgICB9LFxuICAgICAgLy8gcHJldmlld3M6IHJlc3VsdFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYWtlUGFnaW5hdGlvbiA9ICh0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgdGhpcy51bnBhY2tEYXRhKCkgd2hlbiB0aGlzLm9wdGlvbnMucGFnZSBpcyBkZWZpbmVkLlxuICAgICAgUmV0dXJucyB0aGUgZGF0YSBmb3IgPG43LXBhZ2luYXRpb24+IGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIGxldCBsaW1pdCA9IHRoaXMucGF0aHMucGFnaW5hdGlvbkxpbWl0IC0gMVxuICAgIC8vIGFsd2F5cyBwdXNoIHRoZSBmaXJzdCBwYWdlXG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICBsZXQgbGFzdFBhZ2U6IG51bWJlciwgZmlyc3RQYWdlOiBudW1iZXJcbiAgICAgIGlmIChjdXJyZW50UGFnZSA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgKHRvdGFsUGFnZXMgLSBNYXRoLmZsb29yKGxpbWl0LzIpKSkge1xuICAgICAgICAgIGxhc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpXG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzXG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLSBsaW1pdCArICh0b3RhbFBhZ2VzIC0gY3VycmVudFBhZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXG4gICAgICAgIGxhc3RQYWdlID0gbGltaXQgKyAxXG4gICAgICAgIGZpcnN0UGFnZSA9IDFcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgY3VycmVudFBhZ2UsIGxpbWl0LCBsYXN0UGFnZSwgZmlyc3RQYWdlIH0pXG4gICAgICBmb3IgKGxldCBpID0gZmlyc3RQYWdlOyBpIDw9IGxhc3RQYWdlOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHRleHQ6IFN0cmluZyhpKSxcbiAgICAgICAgICBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkpLFxuICAgICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09IGkgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdGV4dDogJzEnLFxuICAgICAgICBwYXlsb2FkOiAncGFnZS0xJyxcbiAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT0gMSA/ICdpcy1hY3RpdmUnIDogJydcbiAgICAgIH0pXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSArIDEpLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gZGF0YSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnLCAgICAgICAvLyBhcHAtY29uZmlnLmpzb25cbiAgICAgIHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3JyksIC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXG4gICAgICB0b3RhbENvdW50ID0gZGF0YS50b3RhbENvdW50LCAgICAgICAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsUGFnZXMsICAgICAgIC8vIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBwYWdlID0gdGhpcy5jdXJyZW50UGFnZSwgICAgICAgICAgICAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgICAgICAgICAgICAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICAgIHNpemUgPSB0aGlzLnBhZ2VTaXplICAgICAgICAgICAgICAgIC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIHZhclxuICAgICAgZCA9IGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zIDogZGF0YS5yZWxhdGVkSXRlbXMgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB2YXIga2V5cyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcbiAgICAgIGlmIChjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpKSB7XG4gICAgICAgIHZhciBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddXG4gICAgICAgIHZhciByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVzaXplIGRhdGFcbiAgICBpZiAoc2l6ZSAmJiBwYWdlKSB7XG4gICAgICBkID0gZC5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKVxuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSlcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICBkLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgIGltYWdlOiBfZ2V0KGVsLCBwYXRocy5pbWFnZSwgZWwuaW1hZ2UpLFxuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIG1heCBzdHJpbmcgbGVuZ3RoIGluIGNvbmZpZywgdXNlIGl0XG4gICAgICAgICAgTnVtYmVyKHBhdGhzLnRpdGxlLm1heExlbmd0aCkgJiYgX2dldChlbCwgcGF0aHMudGl0bGUsIGVsLml0ZW0ubGFiZWwpLmxlbmd0aCA+IE51bWJlcihwYXRocy50aXRsZS5tYXhMZW5ndGgpID9cbiAgICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBlbC5pdGVtLmxhYmVsKS5zbGljZSgwLCBOdW1iZXIocGF0aHMudGl0bGUubWF4TGVuZ3RoKSkgKyAn4oCmJyA6XG4gICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCksXG4gICAgICAgIHRleHQ6XG4gICAgICAgICAgTnVtYmVyKHBhdGhzLnRleHQubWF4TGVuZ3RoKSAmJiBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGVsLml0ZW0udGV4dCkubGVuZ3RoID4gTnVtYmVyKHBhdGhzLnRleHQubWF4TGVuZ3RoKSA/XG4gICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGVsLml0ZW0udGV4dCkuc2xpY2UoMCwgTnVtYmVyKHBhdGhzLnRleHQubWF4TGVuZ3RoKSkgKyAn4oCmJyA6XG4gICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGVsLml0ZW0udGV4dCksXG4gICAgICAgIHBheWxvYWQ6IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGVsLml0ZW0uaWQpLFxuICAgICAgICBjbGFzc2VzOiBbJ2VudGl0YScsICdzZWFyY2gnXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdpcy1mdWxsd2lkdGgnIDogJycsXG4gICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgX2dldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby5kYXRhLCBlbC5pdGVtLmZpZWxkcykgPyB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnbjctb2JqZWN0c19fbWV0YWRhdGEtYXJ0aXN0JyxcbiAgICAgICAgICAgIGl0ZW1zOiBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLmRhdGEsIGVsLml0ZW0uZmllbGRzKS5tYXAoZGF0YSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogcGF0aHMubWV0YWRhdGEuaW5mby5jdXN0b21MYWJlbCA/IHBhdGhzLm1ldGFkYXRhLmluZm8uY3VzdG9tTGFiZWwgOiBfZ2V0KGRhdGEsIHBhdGhzLm1ldGFkYXRhLmluZm8ubGFiZWwsIGRhdGEua2V5KSxcbiAgICAgICAgICAgICAgdmFsdWU6IF9nZXQoZGF0YSwgcGF0aHMubWV0YWRhdGEuaW5mby52YWx1ZSwgZGF0YS52YWx1ZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0gOiB7fSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc2VzOiAnbjctb2JqZWN0c19fbWV0YWRhdGEtbGlua2VkJyxcbiAgICAgICAgICAgIGl0ZW1zOiBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS50b2UuZGF0YSwgZWwucmVsYXRlZFR5cGVzT2ZFbnRpdHkpID9cbiAgICAgICAgICAgICAgX2dldChlbCwgcGF0aHMubWV0YWRhdGEudG9lLmRhdGEsIGVsLnJlbGF0ZWRUeXBlc09mRW50aXR5KS5tYXAodG9lID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAvLyBwZXJzb25hOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS52YWx1ZSwgdG9lLmNvdW50KSxcbiAgICAgICAgICAgICAgICAgIC8vIGljb246ICduNy1pY29uLWJlbGwnIC8vIFRPRE86IGxpbmsgaWNvbiB0byBjb25maWcga2V5XG4gICAgICAgICAgICAgICAgICBpY29uOiBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoXCIgXCIsIFwiLVwiKV0gPyBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoXCIgXCIsIFwiLVwiKV0uaWNvbiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnY29sb3ItJyArIF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoXCIgXCIsIFwiLVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuICAgICAgaWYgKF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLmJyZWFkY3J1bWJzKSkge1xuICAgICAgICBpdGVtWydicmVhZGNydW1icyddID0geyAvLyBuNy1icmVhZGNydW1icyB1c2VzIHRoaXMgYXMgaXQncyBvd24gZGF0YVxuICAgICAgICAgIGl0ZW1zOiBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBlbC5icmVhZGNydW1icykubWFwKGNydW1iID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5sYWJlbCwgY3J1bWIubGFiZWwpLFxuICAgICAgICAgICAgICBwYXlsb2FkOiBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5wYXlsb2FkLCBjcnVtYi5saW5rKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xuICAgICAgbGV0IGFjdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ01vc3RyYSBUdXR0aSAoJyArIHRvdGFsQ291bnQgKyAnKSdcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoTGltaXQgP1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTW9zdHJhIEFsdHJpICgnICsgcmVzdWx0c0xpbWl0ICsgJyknLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBwcmV2aWV3czogcmVzdWx0IH07XG4gIH1cbn0iXX0=