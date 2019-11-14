/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import * as _ from "lodash"; // used for cherry-picking object keys from app-config.json
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
            let result = []
            // always push the first page
            ;
            // always push the first page
            result.push({
                text: '1',
                payload: 'page-1',
                classes: currentPage == 1 ? 'is-active' : ''
            });
            for (let i = 1; i < totalPages; i++) {
                result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
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
                    image: _.get(el, paths.image, el.image),
                    title: 
                    // if there is a max string length in config, use it
                    Number(paths.title.maxLength) && _.get(el, paths.title, el.item.label).length > Number(paths.title.maxLength) ?
                        _.get(el, paths.title, el.item.label).slice(0, Number(paths.title.maxLength)) + '…' :
                        _.get(el, paths.title, el.item.label),
                    text: Number(paths.text.maxLength) && _.get(el, paths.text.data, el.item.text).length > Number(paths.text.maxLength) ?
                        _.get(el, paths.text.data, el.item.text).slice(0, Number(paths.text.maxLength)) + '…' :
                        _.get(el, paths.text.data, el.item.text),
                    payload: _.get(el, paths.payload, el.item.id),
                    classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                    metadata: [
                        _.get(el, paths.metadata.info.value, el.item.info) ? {
                            classes: 'n7-objects__metadata-artist',
                            items: _.get(el, paths.metadata.info.value, el.item.info).map((/**
                             * @param {?} value
                             * @return {?}
                             */
                            value => ({
                                label: paths.metadata.info.customLabel ? paths.metadata.info.customLabel : null,
                                value
                            })))
                        } : {},
                        {
                            classes: 'n7-objects__metadata-linked',
                            items: _.get(el, paths.metadata.toe.data, el.relatedTypesOfEntity).map((/**
                             * @param {?} toe
                             * @return {?}
                             */
                            toe => {
                                return {
                                    // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                    value: _.get(toe, paths.metadata.toe.value, toe.count),
                                    // icon: 'n7-icon-bell' // TODO: link icon to config key
                                    icon: keys[_.get(toe, paths.metadata.toe.icon, toe.type)] ? keys[_.get(toe, paths.metadata.toe.icon, toe.type)].icon : "",
                                    classes: 'color-' + _.get(toe, paths.metadata.toe.icon, toe.type)
                                };
                            }))
                        }
                    ]
                };
                if (_.get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs)) {
                    item['breadcrumbs'] = {
                        // n7-breadcrumbs uses this as it's own data
                        items: _.get(el, paths.metadata.breadcrumbs.data, el.breadcrumbs).map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        crumb => {
                            return {
                                label: _.get(crumb, paths.metadata.breadcrumbs.label, crumb.label),
                                payload: _.get(crumb, paths.metadata.breadcrumbs.payload, crumb.link),
                            };
                        }))
                    };
                }
                result.push(item);
            }));
            if (this.options.pagination) { // if I'm on a page, render pagination data.
                // if I'm on a page, render pagination data.
                /** @type {?} */
                let sizeOptions = [10, 25, 50];
                return {
                    pagination: {
                        first: { payload: `goto-${1}`, classes: page == 1 ? 'is-disabled' : '' },
                        prev: { payload: `goto-${page - 1}`, classes: page == 1 ? 'is-disabled' : '' },
                        next: { payload: `goto-${page + 1}`, classes: page == totalPages ? 'is-disabled' : '' },
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
                        }
                    },
                    previews: result
                };
            }
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
    // public paths: any = this.options.paths // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
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
    AwLinkedObjectsDS.prototype.checkForMore;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.handleIncomingData;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.makePagination;
    /**
     * @type {?}
     * @private
     */
    AwLinkedObjectsDS.prototype.unpackData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQywyREFBMkQ7O0FBRXhGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQVFTLGdCQUFXLEdBQVksS0FBSyxDQUFBO1FBbUI1QixpQkFBWTs7OztRQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDeEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFNO2FBQ1A7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFBO2dCQUM1QyxPQUFNO2FBQ1A7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2FBQzNDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7YUFDNUM7WUFDRCxPQUFNO1FBQ1IsQ0FBQyxFQUFBO1FBRU0sdUJBQWtCOzs7O1FBQUcsWUFBWSxDQUFDLEVBQUU7WUFDekM7OztjQUdF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eEIsQ0FBQztDQW9MRjs7O0lBM01DLHdDQUEwQjs7SUFDMUIsdUNBQXlCOztJQUN6Qix5Q0FBMkI7O0lBQzNCLHFDQUF1Qjs7SUFDdkIsb0NBQXNCOztJQUN0Qix1Q0FBc0I7O0lBQ3RCLHdDQUFtQzs7SUFtQm5DLHlDQW9CQzs7SUFFRCwrQ0FVQzs7SUFFRCwyQ0FnQkM7Ozs7O0lBRUQsdUNBNkhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiOyAvLyB1c2VkIGZvciBjaGVycnktcGlja2luZyBvYmplY3Qga2V5cyBmcm9tIGFwcC1jb25maWcuanNvblxuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlclxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyXG4gIHB1YmxpYyB0b3RhbE9iamVjdHM6IG51bWJlclxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlclxuICBwdWJsaWMgY29udGV4dDogc3RyaW5nXG4gIHB1YmxpYyBsb2FkZWREYXRhOiBhbnlcbiAgcHVibGljIGxvYWRpbmdEYXRhOiBib29sZWFuID0gZmFsc2VcbiAgLy8gcHVibGljIHBhdGhzOiBhbnkgPSB0aGlzLm9wdGlvbnMucGF0aHMgLy8gdXNlIGR5bmFtaWMgb2JqZWN0IHBhdGhzIGZyb20gY29uZmlnXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplXG4gICAgdGhpcy50b3RhbE9iamVjdHMgPSBkYXRhLnRvdGFsQ291bnRcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5vcHRpb25zLnBhZ2UgPyA8bnVtYmVyPnRoaXMub3B0aW9ucy5wYWdlIDogMVxuICAgIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5pdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKVxuICAgIH0gZWxzZSBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLm9wdGlvbnMuY29udGV4dFxuICAgIHRoaXMubG9hZGVkRGF0YSA9IHRoaXMudW5wYWNrRGF0YShkYXRhKVxuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCkgLy8gY2hlY2tzIGlmIDxTaG93IE1vcmU+IGJ1dHRvbiBzaG91bGQgYmUgZW5hYmxlZFxuICAgIHRoaXMubG9hZGVkRGF0YS5sb2FkZXJEYXRhID0ge31cbiAgICByZXR1cm4gdGhpcy5sb2FkZWREYXRhXG4gIH1cblxuICBwdWJsaWMgY2hlY2tGb3JNb3JlID0gKGZvcmNlPzogYm9vbGVhbikgPT4ge1xuICAgIC8qXG4gICAgICBDaGVja3MgaWYgaXQgaXMgcG9zc2libGUgdG8gbG9hZCBtb3JlIGl0ZW0gcHJldmlld3MuXG4gICAgICBDYW4gcmVjZWl2ZSBhIGJvb2xlYW4gYXJndW1lbnQgdG8gZm9yY2UgdGhlIGJ1dHRvbiB0byBiZVxuICAgICAgZW5hYmxlZCBvciBkaXNhYmxlZC4gKFVzZWQgd2hpbGUgZGF0YSBpcyBsb2FkaW5nKVxuICAgICovXG4gICAgaWYgKCF0aGlzLmxvYWRlZERhdGEuYWN0aW9ucykge1xuICAgICAgLy8gaWYgbm90IHVzaW5nIGFjdGlvbnMsIGRvbid0IGNoZWNrXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmb3JjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gIWZvcmNlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoID49IHRoaXMudG90YWxPYmplY3RzKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSBmYWxzZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSBpbmNvbWluZ0RhdGEgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgYnV0dG9uIDxNb3N0cmEgQWx0cmk+LCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgdGhpcy5jdXJyZW50UGFnZSArPSAxXG4gICAgbGV0IG5ld0RhdGE6IGFueSA9IHRoaXMudW5wYWNrRGF0YShpbmNvbWluZ0RhdGEuaXRlbXNQYWdpbmF0aW9uKVxuICAgIHRoaXMubG9hZGVkRGF0YS5yZXN1bHQgPSB0aGlzLmxvYWRlZERhdGEucmVzdWx0LmNvbmNhdChuZXdEYXRhLnJlc3VsdClcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpXG4gICAgdGhpcy5sb2FkZWREYXRhLmlzTG9hZGluZyA9IGZhbHNlXG4gIH1cblxuICBwdWJsaWMgbWFrZVBhZ2luYXRpb24gPSAodG90YWxQYWdlcywgY3VycmVudFBhZ2UpID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IHRoaXMudW5wYWNrRGF0YSgpIHdoZW4gdGhpcy5vcHRpb25zLnBhZ2UgaXMgZGVmaW5lZC5cbiAgICAgIFJldHVybnMgdGhlIGRhdGEgZm9yIDxuNy1wYWdpbmF0aW9uPiBjb21wb25lbnQuXG4gICAgKi9cbiAgICBsZXQgcmVzdWx0ID0gW11cbiAgICAvLyBhbHdheXMgcHVzaCB0aGUgZmlyc3QgcGFnZVxuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIHRleHQ6ICcxJyxcbiAgICAgIHBheWxvYWQ6ICdwYWdlLTEnLFxuICAgICAgY2xhc3NlczogY3VycmVudFBhZ2UgPT0gMSA/ICdpcy1hY3RpdmUnIDogJydcbiAgICB9KVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSArIDEpLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gZGF0YSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnLCAgICAgICAvLyBhcHAtY29uZmlnLmpzb25cbiAgICAgIHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3JyksIC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXG4gICAgICB0b3RhbENvdW50ID0gZGF0YS50b3RhbENvdW50LCAgICAgICAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsUGFnZXMsICAgICAgIC8vIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBwYWdlID0gdGhpcy5jdXJyZW50UGFnZSwgICAgICAgICAgICAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgICAgICAgICAgICAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICAgIHNpemUgPSB0aGlzLnBhZ2VTaXplICAgICAgICAgICAgICAgIC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIHZhclxuICAgICAgZCA9IGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zIDogZGF0YS5yZWxhdGVkSXRlbXMgICAgICAgICAgICAgICAgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB2YXIga2V5cyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcbiAgICAgIGlmIChjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpKSB7XG4gICAgICAgIHZhciBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddXG4gICAgICAgIHZhciByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVzaXplIGRhdGFcbiAgICBpZiAoc2l6ZSAmJiBwYWdlKSB7XG4gICAgICBkID0gZC5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKVxuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSlcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICBkLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgIGltYWdlOiBfLmdldChlbCwgcGF0aHMuaW1hZ2UsIGVsLmltYWdlKSxcbiAgICAgICAgdGl0bGU6XG4gICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBtYXggc3RyaW5nIGxlbmd0aCBpbiBjb25maWcsIHVzZSBpdFxuICAgICAgICAgIE51bWJlcihwYXRocy50aXRsZS5tYXhMZW5ndGgpICYmIF8uZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCkubGVuZ3RoID4gTnVtYmVyKHBhdGhzLnRpdGxlLm1heExlbmd0aCkgP1xuICAgICAgICAgICAgXy5nZXQoZWwsIHBhdGhzLnRpdGxlLCBlbC5pdGVtLmxhYmVsKS5zbGljZSgwLCBOdW1iZXIocGF0aHMudGl0bGUubWF4TGVuZ3RoKSkgKyAn4oCmJyA6XG4gICAgICAgICAgICBfLmdldChlbCwgcGF0aHMudGl0bGUsIGVsLml0ZW0ubGFiZWwpLFxuICAgICAgICB0ZXh0OlxuICAgICAgICAgIE51bWJlcihwYXRocy50ZXh0Lm1heExlbmd0aCkgJiYgXy5nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgZWwuaXRlbS50ZXh0KS5sZW5ndGggPiBOdW1iZXIocGF0aHMudGV4dC5tYXhMZW5ndGgpID9cbiAgICAgICAgICAgIF8uZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGVsLml0ZW0udGV4dCkuc2xpY2UoMCwgTnVtYmVyKHBhdGhzLnRleHQubWF4TGVuZ3RoKSkgKyAn4oCmJyA6XG4gICAgICAgICAgICBfLmdldChlbCwgcGF0aHMudGV4dC5kYXRhLCBlbC5pdGVtLnRleHQpLFxuICAgICAgICBwYXlsb2FkOiBfLmdldChlbCwgcGF0aHMucGF5bG9hZCwgZWwuaXRlbS5pZCksXG4gICAgICAgIGNsYXNzZXM6IFsnZW50aXRhJywgJ3NlYXJjaCddLmluY2x1ZGVzKGNvbnRleHQpID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJyxcbiAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICBfLmdldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby52YWx1ZSwgZWwuaXRlbS5pbmZvKSA/IHtcbiAgICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1hcnRpc3QnLFxuICAgICAgICAgICAgaXRlbXM6IF8uZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLnZhbHVlLCBlbC5pdGVtLmluZm8pLm1hcCh2YWx1ZSA9PiAoe1xuICAgICAgICAgICAgICBsYWJlbDogcGF0aHMubWV0YWRhdGEuaW5mby5jdXN0b21MYWJlbCA/IHBhdGhzLm1ldGFkYXRhLmluZm8uY3VzdG9tTGFiZWwgOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfSA6IHt9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1saW5rZWQnLFxuICAgICAgICAgICAgaXRlbXM6IF8uZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS50b2UuZGF0YSwgZWwucmVsYXRlZFR5cGVzT2ZFbnRpdHkpLm1hcCh0b2UgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4geyAvLyBwZXJzb25hOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgICAgdmFsdWU6IF8uZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgICAgIC8vIGljb246ICduNy1pY29uLWJlbGwnIC8vIFRPRE86IGxpbmsgaWNvbiB0byBjb25maWcga2V5XG4gICAgICAgICAgICAgICAgaWNvbjoga2V5c1tfLmdldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldID8ga2V5c1tfLmdldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldLmljb24gOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2xvci0nICsgXy5nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuICAgICAgaWYgKF8uZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBlbC5icmVhZGNydW1icykpIHtcbiAgICAgICAgaXRlbVsnYnJlYWRjcnVtYnMnXSA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgICBpdGVtczogXy5nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLmJyZWFkY3J1bWJzKS5tYXAoY3J1bWIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWw6IF8uZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5sYWJlbCwgY3J1bWIubGFiZWwpLFxuICAgICAgICAgICAgICBwYXlsb2FkOiBfLmdldChjcnVtYiwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMucGF5bG9hZCwgY3J1bWIubGluayksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucGFnaW5hdGlvbikgeyAvLyBpZiBJJ20gb24gYSBwYWdlLCByZW5kZXIgcGFnaW5hdGlvbiBkYXRhLlxuICAgICAgbGV0IHNpemVPcHRpb25zID0gWzEwLCAyNSwgNTBdXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC0gMX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgICAgICBuZXh0OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSArIDF9YCwgY2xhc3NlczogcGFnZSA9PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICAgICAgbGFzdDogeyBwYXlsb2FkOiBgZ290by0ke3RvdGFsUGFnZXN9YCwgY2xhc3NlczogcGFnZSA9PSB0b3RhbFBhZ2VzID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICAgICAgbGlua3M6IHRoaXMubWFrZVBhZ2luYXRpb24odG90YWxQYWdlcywgcGFnZSksXG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICAgICAgb3B0aW9uczogc2l6ZU9wdGlvbnMubWFwKG8gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IG8sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG8gPT0gc2l6ZSxcbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlcyBvcHRpb25zIGdyZWF0ZXIgdGhhbiB0b3RhbCBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkOiBvID4gdG90YWxQYWdlcypzaXplXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlld3M6IHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGV4dCA9PT0gJ2hvbWUnKSB7XG4gICAgICBsZXQgYWN0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTW9zdHJhIFR1dHRpICgnICsgdG90YWxDb3VudCArICcpJ1xuICAgICAgICB9LFxuICAgICAgICBsZW5ndGhMaW1pdCA/XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdNb3N0cmEgQWx0cmkgKCcgKyByZXN1bHRzTGltaXQgKyAnKScsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSA6IG51bGwsXG4gICAgICBdXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHByZXZpZXdzOiByZXN1bHQgfTtcbiAgfVxufSJdfQ==