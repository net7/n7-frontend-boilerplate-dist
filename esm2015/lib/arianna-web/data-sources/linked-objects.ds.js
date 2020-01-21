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
              Called by infinite scroller, adds the incoming
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
            let limit = this.paths.paginationLimit - 1;
            if (totalPages <= limit) {
                limit = totalPages - 1;
            }
            // always push the first page
            if (limit) {
                /** @type {?} */
                let lastPage;
                /** @type {?} */
                let firstPage;
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
                const infoData = _get(el, paths.metadata.info.data, el.item.fields);
                /** @type {?} */
                const infoDataItems = infoData ? infoData.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => enabledKeys.indexOf(data.key) !== -1)) : [];
                /** @type {?} */
                const toeData = _get(el, paths.metadata.toe.data, el.relatedTypesOfEntity);
                /** @type {?} */
                const breadcrumbs = _get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs);
                if (['entita', 'search'].includes(context)) {
                    if (el.item.typeOfEntity && el.item.typeOfEntity != "") {
                        infoDataItems.push({ "key": "Tipo di entità", "value": keys[el.item.typeOfEntity]['singular-label'] });
                    }
                }
                /** @type {?} */
                let classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += el.item.typeOfEntity ? " is-" + el.item.typeOfEntity.replace(/ /g, '-') : " is-oggetto-culturale";
                /** @type {?} */
                const itemTitle = +paths.title.maxLength && _get(el, paths.title, el.item.label).length > +paths.title.maxLength
                    ? _get(el, paths.title, el.item.label).slice(0, +paths.title.maxLength) + '…'
                    : _get(el, paths.title, el.item.label);
                /** @type {?} */
                const item = {
                    image: _get(el, paths.image, el.image),
                    title: itemTitle,
                    text: !paths.text ? null : // make text block (in config) optional
                        +paths.text.maxLength && _get(el, paths.text.data, el.item.text).length > +paths.text.maxLength ?
                            _get(el, paths.text.data, el.item.text).slice(0, +paths.text.maxLength) + '…' :
                            _get(el, paths.text.data, el.item.text),
                    payload: { id: _get(el, paths.payload, el.item.id), type: el.item.typeOfEntity, title: itemTitle },
                    classes: classes,
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
                        data => ({
                            label: helpers.prettifySnakeCase(data.key, labels[data.key]),
                            value: data.value
                        })))
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'n7-objects__metadata-linked',
                        items: toeData.map((/**
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
                    fallback: config.get('home-layout')['linked-objects-fallback']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUMsQ0FBQywyREFBMkQ7O0FBRWpHLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQVFTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBeUJwQixpQkFBWTs7OztRQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDeEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDN0M7WUFDRCxPQUFPO1FBQ1QsQ0FBQyxFQUFB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QUMsdUJBQXVCLENBQUM7O3NCQUV2RyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVM7b0JBQzlHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHO29CQUM3RSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztzQkFDdEMsSUFBSSxHQUFHO29CQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDdEMsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO3dCQUNoRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUMvRixJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFD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QUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Q0FpUEY7OztJQTlRQyx3Q0FBMkI7O0lBQzNCLHVDQUEwQjs7SUFDMUIseUNBQTRCOztJQUM1QixxQ0FBd0I7O0lBQ3hCLG9DQUF1Qjs7SUFDdkIsdUNBQXVCOztJQUN2Qix3Q0FBMkI7O0lBQzNCLGtDQUFrQjs7SUF3QmxCLHlDQW9CQzs7SUFFRCwrQ0FVQzs7SUFFRCwwQ0FvQkM7O0lBRUQsMkNBcURDOzs7OztJQUVELHVDQStIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7IC8vIHVzZWQgZm9yIGNoZXJyeS1waWNraW5nIG9iamVjdCBrZXlzIGZyb20gYXBwLWNvbmZpZy5qc29uXG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuICBwdWJsaWMgdG90YWxPYmplY3RzOiBudW1iZXI7XG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuICBwdWJsaWMgY29udGV4dDogc3RyaW5nO1xuICBwdWJsaWMgbG9hZGVkRGF0YTogYW55O1xuICBwdWJsaWMgbG9hZGluZ0RhdGEgPSBmYWxzZTtcbiAgcHVibGljIHBhdGhzOiBhbnk7IC8vIHVzZSBkeW5hbWljIG9iamVjdCBwYXRocyBmcm9tIGNvbmZpZ1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMucGF0aHMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgIHRoaXMudG90YWxPYmplY3RzID0gZGF0YS50b3RhbENvdW50O1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm9wdGlvbnMucGFnZSA/ICt0aGlzLm9wdGlvbnMucGFnZSA6IDE7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbiAmJiB0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwgLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5vcHRpb25zLmNvbnRleHQ7XG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5hZGRQYWdpbmF0aW9uKHRoaXMuY3VycmVudFBhZ2UsIHRoaXMudG90YWxQYWdlcywgdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7IC8vIGNoZWNrcyBpZiA8U2hvdyBNb3JlPiBidXR0b24gc2hvdWxkIGJlIGVuYWJsZWRcbiAgICB0aGlzLmxvYWRlZERhdGEubG9hZGVyRGF0YSA9IHt9O1xuICAgIHJldHVybiB0aGlzLmxvYWRlZERhdGE7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tGb3JNb3JlID0gKGZvcmNlPzogYm9vbGVhbikgPT4ge1xuICAgIC8qXG4gICAgICBDaGVja3MgaWYgaXQgaXMgcG9zc2libGUgdG8gbG9hZCBtb3JlIGl0ZW0gcHJldmlld3MuXG4gICAgICBDYW4gcmVjZWl2ZSBhIGJvb2xlYW4gYXJndW1lbnQgdG8gZm9yY2UgdGhlIGJ1dHRvbiB0byBiZVxuICAgICAgZW5hYmxlZCBvciBkaXNhYmxlZC4gKFVzZWQgd2hpbGUgZGF0YSBpcyBsb2FkaW5nKVxuICAgICovXG4gICAgaWYgKCF0aGlzLmxvYWRlZERhdGEuYWN0aW9ucykge1xuICAgICAgLy8gaWYgbm90IHVzaW5nIGFjdGlvbnMsIGRvbid0IGNoZWNrXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm9yY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9ICFmb3JjZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoID49IHRoaXMudG90YWxPYmplY3RzKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSBpbmNvbWluZ0RhdGEgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgaW5maW5pdGUgc2Nyb2xsZXIsIGFkZHMgdGhlIGluY29taW5nXG4gICAgICBkYXRhIHRvIHRoZSBsaW5rZWQgb2JqZWN0cyBjb21wb25lbnQuXG4gICAgKi9cbiAgICB0aGlzLmN1cnJlbnRQYWdlICs9IDE7XG4gICAgY29uc3QgbmV3RGF0YTogYW55ID0gdGhpcy51bnBhY2tEYXRhKGluY29taW5nRGF0YS5pdGVtc1BhZ2luYXRpb24pO1xuICAgIHRoaXMubG9hZGVkRGF0YS5yZXN1bHQgPSB0aGlzLmxvYWRlZERhdGEucmVzdWx0LmNvbmNhdChuZXdEYXRhLnJlc3VsdCk7XG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTtcbiAgICB0aGlzLmxvYWRlZERhdGEuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgYWRkUGFnaW5hdGlvbiA9IChwYWdlLCB0b3RhbFBhZ2VzLCBzaXplKSA9PiB7XG4gICAgY29uc3Qgc2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MF07XG4gICAgdGhpcy5sb2FkZWREYXRhLnBhZ2luYXRpb24gPSB7XG4gICAgICBmaXJzdDogeyBwYXlsb2FkOiBgZ290by0kezF9YCwgY2xhc3NlczogcGFnZSA9PT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgcHJldjogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLyAxIC0gMX1gLCBjbGFzc2VzOiBwYWdlID09PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICBuZXh0OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAvIDEgKyAxfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgIGxpbmtzOiB0aGlzLm1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcChvID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogbyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBvID09PSBzaXplLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnXG4gICAgICB9LFxuICAgICAgLy8gcHJldmlld3M6IHJlc3VsdFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgbWFrZVBhZ2luYXRpb24gPSAodG90YWxQYWdlcywgY3VycmVudFBhZ2UpID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IHRoaXMudW5wYWNrRGF0YSgpIHdoZW4gdGhpcy5vcHRpb25zLnBhZ2UgaXMgZGVmaW5lZC5cbiAgICAgIFJldHVybnMgdGhlIGRhdGEgZm9yIDxuNy1wYWdpbmF0aW9uPiBjb21wb25lbnQuXG4gICAgKi9cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgbGltaXQgPSB0aGlzLnBhdGhzLnBhZ2luYXRpb25MaW1pdCAtIDE7XG5cbiAgICBpZiAodG90YWxQYWdlcyA8PSBsaW1pdCkge1xuICAgICAgbGltaXQgPSB0b3RhbFBhZ2VzIC0gMTtcbiAgICB9XG5cbiAgICAvLyBhbHdheXMgcHVzaCB0aGUgZmlyc3QgcGFnZVxuICAgIGlmIChsaW1pdCkge1xuICAgICAgbGV0IGxhc3RQYWdlOiBudW1iZXIsIGZpcnN0UGFnZTogbnVtYmVyO1xuICAgICAgaWYgKGN1cnJlbnRQYWdlID4gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSB7XG4gICAgICAgIGlmICh0b3RhbFBhZ2VzID09PSAyKSB7XG4gICAgICAgICAgbGFzdFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IDE7XG4gICAgICAgICAgLy8gd2hlbiBjdXJyZW50UGFnZSBpcyBhZnRlciBoYWxmLXBvaW50XG4gICAgICAgICAgLy8gKGV4YW1wbGU6IFsgMTQgXVsgMTUgXVshMTYhXVsgMTcgXVsgMTggXSlcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA8ICh0b3RhbFBhZ2VzIC0gTWF0aC5mbG9vcihsaW1pdCAvIDIpKSkge1xuICAgICAgICAgIGxhc3RQYWdlID0gY3VycmVudFBhZ2UgLyAxICsgTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuICAgICAgICAgIGZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlIC8gMSAtIE1hdGguZmxvb3IobGltaXQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0UGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgZmlyc3RQYWdlID0gY3VycmVudFBhZ2UgLSBsaW1pdCArICh0b3RhbFBhZ2VzIC0gY3VycmVudFBhZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3aGVuIGN1cnJlbnRQYWdlIGlzIGJlZm9yZSBoYWxmLXBvaW50XG4gICAgICAgIC8vIChleGFtcGxlOiBbIDEgXVshMiFdWyAzIF1bIDQgXVsgNSBdKVxuICAgICAgICBsYXN0UGFnZSA9IGxpbWl0ICsgMTtcbiAgICAgICAgZmlyc3RQYWdlID0gMTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGZpcnN0UGFnZTsgaSA8PSBsYXN0UGFnZTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcoaSksXG4gICAgICAgICAgcGF5bG9hZDogJ3BhZ2UtJyArIFN0cmluZyhpKSxcbiAgICAgICAgICBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PT0gaSA/ICdpcy1hY3RpdmUnIDogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgdGV4dDogJzEnLFxuICAgICAgICBwYXlsb2FkOiAncGFnZS0xJyxcbiAgICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT09IDEgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgdGV4dDogU3RyaW5nKGkgKyAxKSwgcGF5bG9hZDogJ3BhZ2UtJyArIFN0cmluZyhpICsgMSksIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHVucGFja0RhdGEgPSBkYXRhID0+IHtcbiAgICAvKlxuICAgICAgRHluYW1pY2FsbHkgcmV0dXJucyB0aGUgZGF0YSBvYmplY3QgZm9yIGVhY2ggSFRNTCBjb21wb25lbnRcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcHJldmlld3M6IFsgYnJlYWRjcnVtYnM6IHsgaXRlbXNbXSB9LCBjbGFzc2VzLCBpbWFnZSwgbWV0YWRhdGEsIHBheWxvYWQsIHRpdGxlIF0sXG4gICAgICAgIHBhZ2luYXRpb246IHsgZmlyc3QsIGxhc3QsIGxpbmtzLCBuZXh0LCBwcmV2LCBzZWxlY3QgfVxuICAgICAgfVxuICAgICovXG4gICAgY29uc3RcbiAgICAgIGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWcsICAgICAgIC8vIGFwcC1jb25maWcuanNvblxuICAgICAgcGF0aHMgPSBjb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKSwgLy8gaXRlbSBwcmV2aWV3IGR5bmFtaWMgcGF0aHNcbiAgICAgIHRvdGFsQ291bnQgPSBkYXRhLnRvdGFsQ291bnQsICAgICAgIC8vIHRvdGFsIGFtb3VudCBvZiBpdGVtcyBhdmFpbGFibGUgb24gYmFja2VuZFxuICAgICAgdG90YWxQYWdlcyA9IHRoaXMudG90YWxQYWdlcywgICAgICAgLy8gY2FsY3VsYXRlZCBudW1iZXIgb2YgcGFnZXNcbiAgICAgIHBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlLCAgICAgICAgICAgIC8vIGN1cnJlbnQgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQsICAgICAgICAgICAgIC8vIHBhcmVudCBsYXlvdXQgbmFtZVxuICAgICAgc2l6ZSA9IHRoaXMucGFnZVNpemUsICAgICAgICAgICAgICAgLy8gaXRlbXMgcGVyIHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBsYWJlbHMgPSBjb25maWcuZ2V0KCdsYWJlbHMnKSxcbiAgICAgIHsgZHluYW1pY1BhZ2luYXRpb24gfSA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGtleXMgPSBjb25maWcgPyBjb25maWcuZ2V0KCdjb25maWcta2V5cycpIDoge307XG4gICAgbGV0XG4gICAgICBsZW5ndGhMaW1pdDogbnVsbCxcbiAgICAgIHJlc3VsdHNMaW1pdDogbnVsbCxcbiAgICAgIGQgPSBkYXRhLml0ZW1zID8gZGF0YS5pdGVtcyA6IGRhdGEucmVsYXRlZEl0ZW1zOyAvLyBpdGVtcyB0byBpdGVyYXRlIG92ZXJcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcbiAgICAgIGlmIChjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpKSB7XG4gICAgICAgIGxlbmd0aExpbWl0ID0gY29uZmlnLmdldChjb250ZXh0ICsgJy1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ107XG4gICAgICAgIHJlc3VsdHNMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVzaXplIGRhdGFcbiAgICBpZiAoIWR5bmFtaWNQYWdpbmF0aW9uICYmIHNpemUgJiYgcGFnZSkge1xuICAgICAgZCA9IGQuc2xpY2UocGFnZSAqIHNpemUgLSBzaXplLCBwYWdlICogc2l6ZSk7XG4gICAgfSBlbHNlIGlmIChzaXplKSB7XG4gICAgICBkID0gZC5zbGljZSgwLCBzaXplKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBlbmFibGVkS2V5cyA9IHBhdGhzLm1ldGFkYXRhLmluZm8uc2VsZWN0aW9uLm1hcChpbmZvID0+IGluZm8ua2V5KTtcbiAgICBkLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgaW5mb0RhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLmRhdGEsIGVsLml0ZW0uZmllbGRzKSxcbiAgICAgICAgaW5mb0RhdGFJdGVtcyA9IGluZm9EYXRhID8gaW5mb0RhdGEuZmlsdGVyKGRhdGEgPT4gZW5hYmxlZEtleXMuaW5kZXhPZihkYXRhLmtleSkgIT09IC0xKSA6IFtdLFxuICAgICAgICB0b2VEYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEudG9lLmRhdGEsIGVsLnJlbGF0ZWRUeXBlc09mRW50aXR5KSxcbiAgICAgICAgYnJlYWRjcnVtYnMgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBlbC5icmVhZGNydW1icyk7XG5cbiAgICAgICAgaWYoIFsnZW50aXRhJywgJ3NlYXJjaCddLmluY2x1ZGVzKGNvbnRleHQpICl7XG4gICAgICAgICAgaWYoIGVsLml0ZW0udHlwZU9mRW50aXR5ICYmIGVsLml0ZW0udHlwZU9mRW50aXR5ICE9IFwiXCIgKSB7XG4gICAgICAgICAgICBpbmZvRGF0YUl0ZW1zLnB1c2goe1wia2V5XCI6IFwiVGlwbyBkaSBlbnRpdMOgXCIsIFwidmFsdWVcIjoga2V5c1tlbC5pdGVtLnR5cGVPZkVudGl0eV1bJ3Npbmd1bGFyLWxhYmVsJ119KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xhc3NlcyA9IFsnZW50aXRhJywgJ3NlYXJjaCcsICdvZ2dldHRpLWNvbGxlZ2F0aSddLmluY2x1ZGVzKGNvbnRleHQpID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJztcbiAgICAgICAgY2xhc3NlcyArPSBlbC5pdGVtLnR5cGVPZkVudGl0eSA/IFwiIGlzLVwiICsgZWwuaXRlbS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpIDogXCIgaXMtb2dnZXR0by1jdWx0dXJhbGVcIjtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSArcGF0aHMudGl0bGUubWF4TGVuZ3RoICYmIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBlbC5pdGVtLmxhYmVsKS5sZW5ndGggPiArcGF0aHMudGl0bGUubWF4TGVuZ3RoXG4gICAgICAgICAgPyBfZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCkuc2xpY2UoMCwgK3BhdGhzLnRpdGxlLm1heExlbmd0aCkgKyAn4oCmJ1xuICAgICAgICAgIDogX2dldChlbCwgcGF0aHMudGl0bGUsIGVsLml0ZW0ubGFiZWwpLFxuICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICBpbWFnZTogX2dldChlbCwgcGF0aHMuaW1hZ2UsIGVsLmltYWdlKSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtVGl0bGUsXG4gICAgICAgICAgICB0ZXh0OiAhcGF0aHMudGV4dCA/IG51bGwgOiAvLyBtYWtlIHRleHQgYmxvY2sgKGluIGNvbmZpZykgb3B0aW9uYWxcbiAgICAgICAgICAgICAgK3BhdGhzLnRleHQubWF4TGVuZ3RoICYmIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgZWwuaXRlbS50ZXh0KS5sZW5ndGggPiArcGF0aHMudGV4dC5tYXhMZW5ndGggP1xuICAgICAgICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgZWwuaXRlbS50ZXh0KS5zbGljZSgwLCArcGF0aHMudGV4dC5tYXhMZW5ndGgpICsgJ+KApicgOlxuICAgICAgICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgZWwuaXRlbS50ZXh0KSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHsgaWQ6IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGVsLml0ZW0uaWQpLCB0eXBlOiBlbC5pdGVtLnR5cGVPZkVudGl0eSwgdGl0bGU6IGl0ZW1UaXRsZSB9LFxuICAgICAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgICAgIG1ldGFkYXRhOiBpbmZvRGF0YUl0ZW1zLmxlbmd0aCB8fCB0b2VEYXRhID8gW10gOiBudWxsLFxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IG51bGxcbiAgICAgICAgICB9O1xuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1hcnRpc3QnLFxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcChkYXRhID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShkYXRhLmtleSwgbGFiZWxzW2RhdGEua2V5XSksXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxuICAgICAgICAgIH0pKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2VEYXRhKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAvLyBwZXJzb25hOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgICBpY29uOiBrZXlzW1xuICAgICAgICAgICAgICAgIF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoJyAnLCAnLScpXVxuICAgICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKS5yZXBsYWNlKCcgJywgJy0nKV0uaWNvblxuICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2xvci0nICsgX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSkucmVwbGFjZSgnICcsICctJylcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBicmVhZGNydW1ic1xuICAgICAgaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgICAgIGl0ZW1bJ2JyZWFkY3J1bWJzJ10gPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLmJyZWFkY3J1bWJzKS5tYXAoY3J1bWIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWw6IF9nZXQoY3J1bWIsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmxhYmVsLCBjcnVtYi5sYWJlbCksXG4gICAgICAgICAgICAgIHBheWxvYWQ6IF9nZXQoY3J1bWIsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLnBheWxvYWQsIGNydW1iLmxpbmspLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTW9zdHJhIFR1dHRpICgnICsgdG90YWxDb3VudCArICcpJ1xuICAgICAgICB9LFxuICAgICAgICBsZW5ndGhMaW1pdCA/XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdNb3N0cmEgQWx0cmkgKCcgKyByZXN1bHRzTGltaXQgKyAnKScsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSA6IG51bGwsXG4gICAgICBdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBmYWxsYmFjazogY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbGlua2VkLW9iamVjdHMtZmFsbGJhY2snXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xuICB9XG59XG4iXX0=