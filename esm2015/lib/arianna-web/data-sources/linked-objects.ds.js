/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
import { get as _get } from 'lodash'; // used for cherry-picking object keys from app-config.json
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
            const newData = this.unpackData(incomingData.itemsPagination);
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
            const sizeOptions = [10, 25, 50];
            this.loadedData.pagination = {
                first: { payload: `goto-${1}`, classes: page === 1 ? 'is-disabled' : '' },
                prev: { payload: `goto-${page / 1 - 1}`, classes: page === 1 ? 'is-disabled' : '' },
                next: { payload: `goto-${page / 1 + 1}`, classes: page === totalPages ? 'is-disabled' : '' },
                last: { payload: `goto-${totalPages}`, classes: page === totalPages ? 'is-disabled' : '' },
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
                            selected: o === size,
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
            const result = [];
            /** @type {?} */
            const limit = this.paths.paginationLimit - 1;
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
                for (let i = 1; i < totalPages; i++) {
                    result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage === i + 1 ? 'is-active' : '' });
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
            size = this.pageSize;
            /** @type {?} */
            const // items per page (if using pagination)
            labels = config.get('labels');
            const { dynamicPagination } = this.options;
            /** @type {?} */
            const keys = config ? config.get('config-keys') : {};
            /** @type {?} */
            let lengthLimit;
            /** @type {?} */
            let resultsLimit;
            /** @type {?} */
            let d = data.items ? data.items : data.relatedItems;
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
            const result = [];
            /** @type {?} */
            const enabledKeys = paths.metadata.info.selection.map((/**
             * @param {?} info
             * @return {?}
             */
            info => info.key));
            d.forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                /** @type {?} */
                const item = {
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
                    payload: _get(el, paths.payload, el.item.id),
                    classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                    metadata: [
                        _get(el, paths.metadata.info.data, el.item.fields) ? {
                            classes: 'n7-objects__metadata-artist',
                            items: _get(el, paths.metadata.info.data, el.item.fields)
                                .filter((/**
                             * @param {?} data
                             * @return {?}
                             */
                            data => enabledKeys.indexOf(data.keys) !== -1))
                                .map((/**
                             * @param {?} data
                             * @return {?}
                             */
                            data => ({
                                label: helpers.prettifySnakeCase(data.key, labels[data.key]),
                                value: data.value
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
                                        icon: keys[_get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')]
                                            ? keys[_get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')].icon
                                            : '',
                                        classes: 'color-' + _get(toe, paths.metadata.toe.icon, toe.type).replace(' ', '-')
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
                const actions = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUMsQ0FBQywyREFBMkQ7O0FBRWpHLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQVFTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBeUJwQixpQkFBWTs7OztRQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDeEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDN0M7WUFDRCxPQUFPO1FBQ1QsQ0FBQyxFQUFB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UyxDQUFDLENBQUM7d0JBQzlGLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUM3RSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ3hDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO3dCQUNoRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUMvRixJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7NEJBQy9FLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzNDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQzVDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDckUsUUFBUSxFQUFFO3dCQUNSLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNuRCxPQUFPLEVBQUUsNkJBQTZCOzRCQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUNBQ3RELE1BQU07Ozs7NEJBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztpQ0FDckQsR0FBRzs7Ozs0QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs2QkFDbEIsQ0FBQyxFQUFDO3lCQUNOLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ047NEJBQ0UsT0FBTyxFQUFFLDZCQUE2Qjs0QkFDdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUc7Ozs7Z0NBQUMsR0FBRyxDQUFDLEVBQUU7b0NBQ25FLE9BQU87O3dDQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDOzt3Q0FFckQsSUFBSSxFQUFFLElBQUksQ0FDUixJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs0Q0FDaEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7NENBQzNFLENBQUMsQ0FBQyxFQUFFO3dDQUNOLE9BQU8sRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO3FDQUNuRixDQUFDO2dDQUNKLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGO2dCQUNELElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUc7O3dCQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUc7Ozs7d0JBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQzNFLE9BQU87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QUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztDQXlORjs7O0lBdFBDLHdDQUEyQjs7SUFDM0IsdUNBQTBCOztJQUMxQix5Q0FBNEI7O0lBQzVCLHFDQUF3Qjs7SUFDeEIsb0NBQXVCOztJQUN2Qix1Q0FBdUI7O0lBQ3ZCLHdDQUEyQjs7SUFDM0Isa0NBQWtCOztJQXdCbEIseUNBb0JDOztJQUVELCtDQVVDOztJQUVELDBDQW9CQzs7SUFFRCwyQ0E2Q0M7Ozs7O0lBRUQsdUNBK0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJzsgLy8gdXNlZCBmb3IgY2hlcnJ5LXBpY2tpbmcgb2JqZWN0IGtleXMgZnJvbSBhcHAtY29uZmlnLmpzb25cblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHB1YmxpYyB0b3RhbE9iamVjdHM6IG51bWJlcjtcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBsb2FkZWREYXRhOiBhbnk7XG4gIHB1YmxpYyBsb2FkaW5nRGF0YSA9IGZhbHNlO1xuICBwdWJsaWMgcGF0aHM6IGFueTsgLy8gdXNlIGR5bmFtaWMgb2JqZWN0IHBhdGhzIGZyb20gY29uZmlnXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5wYXRocyA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKTtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgdGhpcy50b3RhbE9iamVjdHMgPSBkYXRhLnRvdGFsQ291bnQ7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMub3B0aW9ucy5wYWdlID8gPG51bWJlcj50aGlzLm9wdGlvbnMucGFnZSA6IDE7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbiAmJiB0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwgLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5vcHRpb25zLmNvbnRleHQ7XG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5hZGRQYWdpbmF0aW9uKHRoaXMuY3VycmVudFBhZ2UsIHRoaXMudG90YWxQYWdlcywgdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7IC8vIGNoZWNrcyBpZiA8U2hvdyBNb3JlPiBidXR0b24gc2hvdWxkIGJlIGVuYWJsZWRcbiAgICB0aGlzLmxvYWRlZERhdGEubG9hZGVyRGF0YSA9IHt9O1xuICAgIHJldHVybiB0aGlzLmxvYWRlZERhdGE7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tGb3JNb3JlID0gKGZvcmNlPzogYm9vbGVhbikgPT4ge1xuICAgIC8qXG4gICAgICBDaGVja3MgaWYgaXQgaXMgcG9zc2libGUgdG8gbG9hZCBtb3JlIGl0ZW0gcHJldmlld3MuXG4gICAgICBDYW4gcmVjZWl2ZSBhIGJvb2xlYW4gYXJndW1lbnQgdG8gZm9yY2UgdGhlIGJ1dHRvbiB0byBiZVxuICAgICAgZW5hYmxlZCBvciBkaXNhYmxlZC4gKFVzZWQgd2hpbGUgZGF0YSBpcyBsb2FkaW5nKVxuICAgICovXG4gICAgaWYgKCF0aGlzLmxvYWRlZERhdGEuYWN0aW9ucykge1xuICAgICAgLy8gaWYgbm90IHVzaW5nIGFjdGlvbnMsIGRvbid0IGNoZWNrXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm9yY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9ICFmb3JjZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoID49IHRoaXMudG90YWxPYmplY3RzKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSBpbmNvbWluZ0RhdGEgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgYnV0dG9uIDxNb3N0cmEgQWx0cmk+LCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgdGhpcy5jdXJyZW50UGFnZSArPSAxO1xuICAgIGNvbnN0IG5ld0RhdGE6IGFueSA9IHRoaXMudW5wYWNrRGF0YShpbmNvbWluZ0RhdGEuaXRlbXNQYWdpbmF0aW9uKTtcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7XG4gICAgdGhpcy5sb2FkZWREYXRhLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGFkZFBhZ2luYXRpb24gPSAocGFnZSwgdG90YWxQYWdlcywgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IHNpemVPcHRpb25zID0gWzEwLCAyNSwgNTBdO1xuICAgIHRoaXMubG9hZGVkRGF0YS5wYWdpbmF0aW9uID0ge1xuICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC8gMSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxICsgMX1gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsYXN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7dG90YWxQYWdlc31gLCBjbGFzc2VzOiBwYWdlID09PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBsaW5rczogdGhpcy5tYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAobyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6IG8sXG4gICAgICAgICAgICBzZWxlY3RlZDogbyA9PT0gc2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgfSxcbiAgICAgIC8vIHByZXZpZXdzOiByZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG1ha2VQYWdpbmF0aW9uID0gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSB0aGlzLnVucGFja0RhdGEoKSB3aGVuIHRoaXMub3B0aW9ucy5wYWdlIGlzIGRlZmluZWQuXG4gICAgICBSZXR1cm5zIHRoZSBkYXRhIGZvciA8bjctcGFnaW5hdGlvbj4gY29tcG9uZW50LlxuICAgICovXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgbGltaXQgPSB0aGlzLnBhdGhzLnBhZ2luYXRpb25MaW1pdCAtIDE7XG4gICAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgICBpZiAobGltaXQpIHtcbiAgICAgIGxldCBsYXN0UGFnZTogbnVtYmVyLCBmaXJzdFBhZ2U6IG51bWJlcjtcbiAgICAgIGlmIChjdXJyZW50UGFnZSA+IE1hdGguZmxvb3IobGltaXQgLyAyKSkge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGFmdGVyIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgKHRvdGFsUGFnZXMgLSBNYXRoLmZsb29yKGxpbWl0IC8gMikpKSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSBjdXJyZW50UGFnZSAvIDEgKyBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgICBmaXJzdFBhZ2UgPSBjdXJyZW50UGFnZSAtIGxpbWl0ICsgKHRvdGFsUGFnZXMgLSBjdXJyZW50UGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdoZW4gY3VycmVudFBhZ2UgaXMgYmVmb3JlIGhhbGYtcG9pbnRcbiAgICAgICAgLy8gKGV4YW1wbGU6IFsgMSBdWyEyIV1bIDMgXVsgNCBdWyA1IF0pXG4gICAgICAgIGxhc3RQYWdlID0gbGltaXQgKyAxO1xuICAgICAgICBmaXJzdFBhZ2UgPSAxO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coeyBjdXJyZW50UGFnZSwgbGltaXQsIGxhc3RQYWdlLCBmaXJzdFBhZ2UgfSlcbiAgICAgIGZvciAobGV0IGkgPSBmaXJzdFBhZ2U7IGkgPD0gbGFzdFBhZ2U7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgdGV4dDogU3RyaW5nKGkpLFxuICAgICAgICAgIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSksXG4gICAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IGkgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHRleHQ6ICcxJyxcbiAgICAgICAgcGF5bG9hZDogJ3BhZ2UtMScsXG4gICAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSAxID8gJ2lzLWFjdGl2ZScgOiAnJ1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSArIDEpLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gZGF0YSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnLCAgICAgICAvLyBhcHAtY29uZmlnLmpzb25cbiAgICAgIHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3JyksIC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXG4gICAgICB0b3RhbENvdW50ID0gZGF0YS50b3RhbENvdW50LCAgICAgICAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsUGFnZXMsICAgICAgIC8vIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBwYWdlID0gdGhpcy5jdXJyZW50UGFnZSwgICAgICAgICAgICAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgICAgICAgICAgICAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICAgIHNpemUgPSB0aGlzLnBhZ2VTaXplLCAgICAgICAgICAgICAgIC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgICAgbGFiZWxzID0gY29uZmlnLmdldCgnbGFiZWxzJyksXG4gICAgICB7IGR5bmFtaWNQYWdpbmF0aW9uIH0gPSB0aGlzLm9wdGlvbnMsXG4gICAgICBrZXlzID0gY29uZmlnID8gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKSA6IHt9O1xuICAgIGxldFxuICAgICAgbGVuZ3RoTGltaXQ6IG51bGwsXG4gICAgICByZXN1bHRzTGltaXQ6IG51bGwsXG4gICAgICBkID0gZGF0YS5pdGVtcyA/IGRhdGEuaXRlbXMgOiBkYXRhLnJlbGF0ZWRJdGVtczsgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICAvLyBkeW5hbWljIHNlYXJjaCBmb3IgbWF4LWl0ZW0tbGVuZ3RoXG4gICAgICBpZiAoY29uZmlnLmdldChjb250ZXh0ICsgJy1sYXlvdXQnKSkge1xuICAgICAgICBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddO1xuICAgICAgICByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J107XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlc2l6ZSBkYXRhXG4gICAgaWYgKCFkeW5hbWljUGFnaW5hdGlvbiAmJiBzaXplICYmIHBhZ2UpIHtcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoaW5mbyA9PiBpbmZvLmtleSk7XG4gICAgZC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIGltYWdlOiBfZ2V0KGVsLCBwYXRocy5pbWFnZSwgZWwuaW1hZ2UpLFxuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIG1heCBzdHJpbmcgbGVuZ3RoIGluIGNvbmZpZywgdXNlIGl0XG4gICAgICAgICAgK3BhdGhzLnRpdGxlLm1heExlbmd0aCAmJiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCkubGVuZ3RoID4gK3BhdGhzLnRpdGxlLm1heExlbmd0aCA/XG4gICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCkuc2xpY2UoMCwgK3BhdGhzLnRpdGxlLm1heExlbmd0aCkgKyAn4oCmJyA6XG4gICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCksXG4gICAgICAgIHRleHQ6ICFwYXRocy50ZXh0ID8gbnVsbCA6IC8vIG1ha2UgdGV4dCBibG9jayAoaW4gY29uZmlnKSBvcHRpb25hbFxuICAgICAgICAgICtwYXRocy50ZXh0Lm1heExlbmd0aCAmJiBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGVsLml0ZW0udGV4dCkubGVuZ3RoID4gK3BhdGhzLnRleHQubWF4TGVuZ3RoID9cbiAgICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgZWwuaXRlbS50ZXh0KS5zbGljZSgwLCArcGF0aHMudGV4dC5tYXhMZW5ndGgpICsgJ+KApicgOlxuICAgICAgICAgICAgX2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBlbC5pdGVtLnRleHQpLFxuICAgICAgICBwYXlsb2FkOiBfZ2V0KGVsLCBwYXRocy5wYXlsb2FkLCBlbC5pdGVtLmlkKSxcbiAgICAgICAgY2xhc3NlczogWydlbnRpdGEnLCAnc2VhcmNoJ10uaW5jbHVkZXMoY29udGV4dCkgPyAnaXMtZnVsbHdpZHRoJyA6ICcnLFxuICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmluZm8uZGF0YSwgZWwuaXRlbS5maWVsZHMpID8ge1xuICAgICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWFydGlzdCcsXG4gICAgICAgICAgICBpdGVtczogX2dldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby5kYXRhLCBlbC5pdGVtLmZpZWxkcylcbiAgICAgICAgICAgICAgLmZpbHRlcihkYXRhID0+IGVuYWJsZWRLZXlzLmluZGV4T2YoZGF0YS5rZXlzKSAhPT0gLTEpXG4gICAgICAgICAgICAgIC5tYXAoZGF0YSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGRhdGEua2V5LCBsYWJlbHNbZGF0YS5rZXldKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICB9IDoge30sIC8vIGlmIG1ldGFkYXRhLmRhdGEgaXMgbWlzc2luZywgdXNlIGVtcHR5IG9iamVjdFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1saW5rZWQnLFxuICAgICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLnRvZS5kYXRhLCBlbC5yZWxhdGVkVHlwZXNPZkVudGl0eSkgP1xuICAgICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS50b2UuZGF0YSwgZWwucmVsYXRlZFR5cGVzT2ZFbnRpdHkpLm1hcCh0b2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC8vIHBlcnNvbmE6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgICAgICAgIGljb246IGtleXNbXG4gICAgICAgICAgICAgICAgICAgIF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUgKS5yZXBsYWNlKCcgJywgJy0nKV1cbiAgICAgICAgICAgICAgICAgICAgPyBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoJyAnLCAnLScpXS5pY29uXG4gICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnY29sb3ItJyArIF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoJyAnLCAnLScpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSkgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuICAgICAgaWYgKF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLmJyZWFkY3J1bWJzKSkge1xuICAgICAgICBpdGVtWydicmVhZGNydW1icyddID0geyAvLyBuNy1icmVhZGNydW1icyB1c2VzIHRoaXMgYXMgaXQncyBvd24gZGF0YVxuICAgICAgICAgIGl0ZW1zOiBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBlbC5icmVhZGNydW1icykubWFwKGNydW1iID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5sYWJlbCwgY3J1bWIubGFiZWwpLFxuICAgICAgICAgICAgICBwYXlsb2FkOiBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5wYXlsb2FkLCBjcnVtYi5saW5rKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmIChjb250ZXh0ID09PSAnaG9tZScpIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ01vc3RyYSBUdXR0aSAoJyArIHRvdGFsQ291bnQgKyAnKSdcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoTGltaXQgP1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTW9zdHJhIEFsdHJpICgnICsgcmVzdWx0c0xpbWl0ICsgJyknLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHByZXZpZXdzOiByZXN1bHQgfTtcbiAgfVxufVxuIl19