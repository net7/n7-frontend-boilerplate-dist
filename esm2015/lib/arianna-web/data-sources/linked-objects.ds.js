/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import { get as _get } from 'lodash'; // used for cherry-picking object keys from app-config.json
// used for cherry-picking object keys from app-config.json
import helpers from '../../common/helpers';
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
        });
        this.handleIncomingData = (/**
         * @param {?} incomingData
         * @return {?}
         */
        (incomingData) => {
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
        this.unpackData = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /*
                  Dynamically returns the data object for each HTML component
                  data: {
                    previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
                    pagination: { first, last, links, next, prev, select }
                  }
                */
            const { config } = this.options;
            // app-config.json
            /** @type {?} */
            const paths = config.get('item-preview');
            // item preview dynamic paths
            const { totalCount } = data;
            // total amount of items available on backend
            /** @type {?} */
            const page = this.currentPage;
            // current page (if using pagination)
            const { context } = this;
            // parent layout name
            /** @type {?} */
            const size = this.pageSize;
            // items per page (if using pagination)
            /** @type {?} */
            const labels = config.get('labels');
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
                if (config.get(`${context}-layout`)) {
                    lengthLimit = config.get(`${context}-layout`)['max-item-length'];
                    resultsLimit = config.get(`${context}-layout`)['results-limit'];
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
            (info) => info.key));
            d.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                /** @type {?} */
                const itemData = el.item ? el.item : el;
                /** @type {?} */
                const infoData = _get(el, paths.metadata.info.data, itemData.fields);
                /** @type {?} */
                const infoDataItems = infoData
                    ? infoData.filter((/**
                     * @param {?} info
                     * @return {?}
                     */
                    (info) => enabledKeys.indexOf(info.key) !== -1))
                    : [];
                /** @type {?} */
                const toeData = _get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                /** @type {?} */
                const breadcrumbs = _get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                if (['entita', 'search'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                        infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                /** @type {?} */
                let classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? ` is-${config.get('config-keys')[itemData.typeOfEntity]['class-name']}` : ' is-oggetto-culturale';
                // consider the lenght of <em> tags to exclude from count
                /** @type {?} */
                const highlights = _get(el, paths.title, itemData.label).match(/<em>/g) ? _get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                /** @type {?} */
                const itemTitle = +paths.title.maxLength
                    && _get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                    ? `${_get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights)}…`
                    : _get(el, paths.title, itemData.label);
                /** @type {?} */
                const itemId = _get(el, paths.payload, itemData.id);
                /** @type {?} */
                const itemType = itemData.typeOfEntity;
                /** @type {?} */
                const itemHref = [
                    itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                    itemId,
                    helpers.slugify(itemTitle),
                ].join('/');
                /** @type {?} */
                let text;
                if (!paths.text) {
                    text = null;
                }
                else if (+paths.text.maxLength
                    && _get(el, paths.text.data, itemData.text).length > +paths.text.maxLength) {
                    text = `${_get(el, paths.text.data, itemData.text).slice(0, +paths.text.maxLength)}…`;
                }
                else {
                    text = _get(el, paths.text.data, itemData.text);
                }
                /** @type {?} */
                const item = {
                    text,
                    classes,
                    breadcrumbs,
                    image: _get(el, paths.image, itemData.image),
                    title: itemTitle,
                    anchor: {
                        href: itemHref,
                        target: context === 'search' ? '_blank' : '_self'
                    },
                    metadata: infoDataItems.length || toeData ? [] : null,
                };
                // metadata
                if (infoDataItems.length) {
                    item.metadata.push({
                        classes: 'aw-item-preview_metadata',
                        items: infoDataItems.map((/**
                         * @param {?} infoDItem
                         * @return {?}
                         */
                        (infoDItem) => ({
                            label: helpers.prettifySnakeCase(infoDItem.key, labels[infoDItem.key]),
                            value: infoDItem.value,
                        }))),
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'aw-item-preview-entities',
                        items: toeData.map((/**
                         * @param {?} toe
                         * @return {?}
                         */
                        (toe) => ({
                            // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                            value: _get(toe, paths.metadata.toe.value, toe.count),
                            // icon: 'n7-icon-bell' // TODO: link icon to config key
                            icon: keys[_get(toe, paths.metadata.toe.icon, toe.type)]
                                ? keys[_get(toe, paths.metadata.toe.icon, toe.type)].icon
                                : '',
                            classes: `color-${keys[_get(toe, paths.metadata.toe.icon, toe.type)]['class-name']}`,
                        }))),
                    });
                }
                // breadcrumbs
                if (breadcrumbs) {
                    item.breadcrumbs = {
                        // n7-breadcrumbs uses this as it's own data
                        items: _get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs).map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        (crumb) => {
                            /** @type {?} */
                            const label = _get(crumb, paths.metadata.breadcrumbs.label, crumb.label);
                            return {
                                label,
                                anchor: {
                                    href: itemHref,
                                },
                            };
                        })),
                    };
                }
                result.push(item);
            }));
            if (context === 'home') {
                /** @type {?} */
                const actions = [
                    {
                        label: `Mostra Tutti (${totalCount})`,
                    },
                    lengthLimit
                        ? {
                            label: `Mostra Altri (${resultsLimit})`,
                            disabled: false,
                        } : null,
                ];
                return {
                    result,
                    actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback'],
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
    /**
     * @type {?}
     * @private
     */
    AwLinkedObjectsDS.prototype.unpackData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUMsQ0FBQywyREFBMkQ7O0FBQ2pHLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQWFTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBdUJwQixpQkFBWTs7OztRQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDeEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDN0M7UUFDSCxDQUFDLEVBQUE7UUFFTSx1QkFB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QUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBNExGOzs7SUE3TkMsd0NBQTJCOztJQUUzQix1Q0FBMEI7O0lBRTFCLHlDQUE0Qjs7SUFFNUIscUNBQXdCOztJQUV4QixvQ0FBdUI7O0lBRXZCLHVDQUF1Qjs7SUFFdkIsd0NBQTJCOztJQUUzQixrQ0FBa0I7O0lBcUJsQix5Q0FtQkM7O0lBRUQsK0NBVUM7Ozs7O0lBRUQsdUNBd0pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJzsgLy8gdXNlZCBmb3IgY2hlcnJ5LXBpY2tpbmcgb2JqZWN0IGtleXMgZnJvbSBhcHAtY29uZmlnLmpzb25cbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyO1xuXG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XG5cbiAgcHVibGljIHRvdGFsT2JqZWN0czogbnVtYmVyO1xuXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmc7XG5cbiAgcHVibGljIGxvYWRlZERhdGE6IGFueTtcblxuICBwdWJsaWMgbG9hZGluZ0RhdGEgPSBmYWxzZTtcblxuICBwdWJsaWMgcGF0aHM6IGFueTsgLy8gdXNlIGR5bmFtaWMgb2JqZWN0IHBhdGhzIGZyb20gY29uZmlnXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5wYXRocyA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKTtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgdGhpcy50b3RhbE9iamVjdHMgPSBkYXRhLnRvdGFsQ291bnQ7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMub3B0aW9ucy5wYWdlID8gK3RoaXMub3B0aW9ucy5wYWdlIDogMTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uICYmIHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCkge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5pdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEuaXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEucmVsYXRlZEl0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLm9wdGlvbnMuY29udGV4dDtcbiAgICB0aGlzLmxvYWRlZERhdGEgPSB0aGlzLnVucGFja0RhdGEoZGF0YSk7XG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTsgLy8gY2hlY2tzIGlmIDxTaG93IE1vcmU+IGJ1dHRvbiBzaG91bGQgYmUgZW5hYmxlZFxuICAgIHRoaXMubG9hZGVkRGF0YS5sb2FkZXJEYXRhID0ge307XG4gICAgcmV0dXJuIHRoaXMubG9hZGVkRGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0Zvck1vcmUgPSAoZm9yY2U/OiBib29sZWFuKSA9PiB7XG4gICAgLypcbiAgICAgIENoZWNrcyBpZiBpdCBpcyBwb3NzaWJsZSB0byBsb2FkIG1vcmUgaXRlbSBwcmV2aWV3cy5cbiAgICAgIENhbiByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudCB0byBmb3JjZSB0aGUgYnV0dG9uIHRvIGJlXG4gICAgICBlbmFibGVkIG9yIGRpc2FibGVkLiAoVXNlZCB3aGlsZSBkYXRhIGlzIGxvYWRpbmcpXG4gICAgKi9cbiAgICBpZiAoIXRoaXMubG9hZGVkRGF0YS5hY3Rpb25zKSB7XG4gICAgICAvLyBpZiBub3QgdXNpbmcgYWN0aW9ucywgZG9uJ3QgY2hlY2tcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmb3JjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gIWZvcmNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggPj0gdGhpcy50b3RhbE9iamVjdHMpIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlSW5jb21pbmdEYXRhID0gKGluY29taW5nRGF0YSkgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgaW5maW5pdGUgc2Nyb2xsZXIsIGFkZHMgdGhlIGluY29taW5nXG4gICAgICBkYXRhIHRvIHRoZSBsaW5rZWQgb2JqZWN0cyBjb21wb25lbnQuXG4gICAgKi9cbiAgICB0aGlzLmN1cnJlbnRQYWdlICs9IDE7XG4gICAgY29uc3QgbmV3RGF0YTogYW55ID0gdGhpcy51bnBhY2tEYXRhKGluY29taW5nRGF0YS5pdGVtc1BhZ2luYXRpb24pO1xuICAgIHRoaXMubG9hZGVkRGF0YS5yZXN1bHQgPSB0aGlzLmxvYWRlZERhdGEucmVzdWx0LmNvbmNhdChuZXdEYXRhLnJlc3VsdCk7XG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTtcbiAgICB0aGlzLmxvYWRlZERhdGEuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHVucGFja0RhdGEgPSAoZGF0YSkgPT4ge1xuICAgIC8qXG4gICAgICBEeW5hbWljYWxseSByZXR1cm5zIHRoZSBkYXRhIG9iamVjdCBmb3IgZWFjaCBIVE1MIGNvbXBvbmVudFxuICAgICAgZGF0YToge1xuICAgICAgICBwcmV2aWV3czogWyBicmVhZGNydW1iczogeyBpdGVtc1tdIH0sIGNsYXNzZXMsIGltYWdlLCBtZXRhZGF0YSwgcGF5bG9hZCwgdGl0bGUgXSxcbiAgICAgICAgcGFnaW5hdGlvbjogeyBmaXJzdCwgbGFzdCwgbGlua3MsIG5leHQsIHByZXYsIHNlbGVjdCB9XG4gICAgICB9XG4gICAgKi9cbiAgICBjb25zdFxuICAgICAgeyBjb25maWcgfSA9IHRoaXMub3B0aW9uczsgLy8gYXBwLWNvbmZpZy5qc29uXG4gICAgY29uc3QgcGF0aHMgPSBjb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKTsgLy8gaXRlbSBwcmV2aWV3IGR5bmFtaWMgcGF0aHNcbiAgICBjb25zdCB7IHRvdGFsQ291bnQgfSA9IGRhdGE7IC8vIHRvdGFsIGFtb3VudCBvZiBpdGVtcyBhdmFpbGFibGUgb24gYmFja2VuZFxuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlOyAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzOyAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICBjb25zdCBzaXplID0gdGhpcy5wYWdlU2l6ZTsgLy8gaXRlbXMgcGVyIHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgY29uc3QgbGFiZWxzID0gY29uZmlnLmdldCgnbGFiZWxzJyk7XG4gICAgY29uc3QgeyBkeW5hbWljUGFnaW5hdGlvbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGtleXMgPSBjb25maWcgPyBjb25maWcuZ2V0KCdjb25maWcta2V5cycpIDoge307XG4gICAgbGV0XG4gICAgICBsZW5ndGhMaW1pdDogbnVsbDtcbiAgICBsZXQgcmVzdWx0c0xpbWl0OiBudWxsO1xuICAgIGxldCBkID0gZGF0YS5pdGVtcyA/IGRhdGEuaXRlbXMgOiBkYXRhLnJlbGF0ZWRJdGVtczsgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICAvLyBkeW5hbWljIHNlYXJjaCBmb3IgbWF4LWl0ZW0tbGVuZ3RoXG4gICAgICBpZiAoY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKSkge1xuICAgICAgICBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YClbJ21heC1pdGVtLWxlbmd0aCddO1xuICAgICAgICByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApWydyZXN1bHRzLWxpbWl0J107XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlc2l6ZSBkYXRhXG4gICAgaWYgKCFkeW5hbWljUGFnaW5hdGlvbiAmJiBzaXplICYmIHBhZ2UpIHtcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoKGluZm8pID0+IGluZm8ua2V5KTtcbiAgICBkLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRGF0YSA9IGVsLml0ZW0gPyBlbC5pdGVtIDogZWw7XG5cbiAgICAgIGNvbnN0IGluZm9EYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby5kYXRhLCBpdGVtRGF0YS5maWVsZHMpO1xuICAgICAgY29uc3QgaW5mb0RhdGFJdGVtcyA9IGluZm9EYXRhXG4gICAgICAgID8gaW5mb0RhdGEuZmlsdGVyKChpbmZvKSA9PiBlbmFibGVkS2V5cy5pbmRleE9mKGluZm8ua2V5KSAhPT0gLTEpXG4gICAgICAgIDogW107XG4gICAgICBjb25zdCB0b2VEYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEudG9lLmRhdGEsIGl0ZW1EYXRhLnJlbGF0ZWRUeXBlc09mRW50aXR5KTtcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgaXRlbURhdGEuYnJlYWRjcnVtYnMpO1xuXG4gICAgICBpZiAoWydlbnRpdGEnLCAnc2VhcmNoJ10uaW5jbHVkZXMoY29udGV4dCkpIHtcbiAgICAgICAgaWYgKGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAmJiBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgIT09ICcnKSB7XG4gICAgICAgICAgaW5mb0RhdGFJdGVtcy5wdXNoKHsga2V5OiAnVGlwbyBkaSBlbnRpdMOgJywgdmFsdWU6IGtleXNbaXRlbURhdGEudHlwZU9mRW50aXR5XVsnc2luZ3VsYXItbGFiZWwnXSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGNsYXNzZXMgPSBbJ2VudGl0YScsICdzZWFyY2gnLCAnb2dnZXR0aS1jb2xsZWdhdGknXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdpcy1mdWxsd2lkdGgnIDogJyc7XG4gICAgICBjbGFzc2VzICs9IGl0ZW1EYXRhLnR5cGVPZkVudGl0eSA/IGAgaXMtJHtjb25maWcuZ2V0KCdjb25maWcta2V5cycpW2l0ZW1EYXRhLnR5cGVPZkVudGl0eV1bJ2NsYXNzLW5hbWUnXX1gIDogJyBpcy1vZ2dldHRvLWN1bHR1cmFsZSc7XG5cbiAgICAgIC8vIGNvbnNpZGVyIHRoZSBsZW5naHQgb2YgPGVtPiB0YWdzIHRvIGV4Y2x1ZGUgZnJvbSBjb3VudFxuICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubWF0Y2goLzxlbT4vZykgPyBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpLmxlbmd0aCAqIDkgOiAwO1xuXG4gICAgICBjb25zdCBpdGVtVGl0bGUgPSArcGF0aHMudGl0bGUubWF4TGVuZ3RoXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubGVuZ3RoID4gK3BhdGhzLnRpdGxlLm1heExlbmd0aCArIGhpZ2hsaWdodHNcbiAgICAgICAgPyBgJHtfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLnNsaWNlKDAsICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzKX3igKZgXG4gICAgICAgIDogX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKTtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGl0ZW1EYXRhLmlkKTtcbiAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbURhdGEudHlwZU9mRW50aXR5O1xuICAgICAgY29uc3QgaXRlbUhyZWYgPSBbXG4gICAgICAgIGl0ZW1UeXBlID8gY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCA6IGNvbmZpZy5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXG4gICAgICAgIGl0ZW1JZCxcbiAgICAgICAgaGVscGVycy5zbHVnaWZ5KGl0ZW1UaXRsZSksXG4gICAgICBdLmpvaW4oJy8nKTtcbiAgICAgIGxldCB0ZXh0O1xuICAgICAgaWYgKCFwYXRocy50ZXh0KSB7XG4gICAgICAgIHRleHQgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgK3BhdGhzLnRleHQubWF4TGVuZ3RoXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkubGVuZ3RoID4gK3BhdGhzLnRleHQubWF4TGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGV4dCA9IGAke19nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkuc2xpY2UoMCwgK3BhdGhzLnRleHQubWF4TGVuZ3RoKX3igKZgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCk7XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICB0ZXh0LFxuICAgICAgICBjbGFzc2VzLFxuICAgICAgICBicmVhZGNydW1icyxcbiAgICAgICAgaW1hZ2U6IF9nZXQoZWwsIHBhdGhzLmltYWdlLCBpdGVtRGF0YS5pbWFnZSksXG4gICAgICAgIHRpdGxlOiBpdGVtVGl0bGUsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxuICAgICAgICAgIHRhcmdldDogY29udGV4dCA9PT0gJ3NlYXJjaCcgPyAnX2JsYW5rJyA6ICdfc2VsZidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0YWRhdGE6IGluZm9EYXRhSXRlbXMubGVuZ3RoIHx8IHRvZURhdGEgPyBbXSA6IG51bGwsXG4gICAgICB9O1xuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xuICAgICAgICAgIGNsYXNzZXM6ICdhdy1pdGVtLXByZXZpZXdfbWV0YWRhdGEnLFxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcCgoaW5mb0RJdGVtKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaW5mb0RJdGVtLmtleSwgbGFiZWxzW2luZm9ESXRlbS5rZXldKSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmZvREl0ZW0udmFsdWUsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2VEYXRhKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlldy1lbnRpdGllcycsXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKCh0b2UpID0+ICh7IC8vIHBlcnNvbmE6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgIGljb246IGtleXNbX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldXG4gICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV0uaWNvblxuICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7a2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1bJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBicmVhZGNydW1ic1xuICAgICAgaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgICAgIGl0ZW0uYnJlYWRjcnVtYnMgPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLml0ZW0uYnJlYWRjcnVtYnMpLm1hcCgoY3J1bWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gX2dldChjcnVtYiwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMubGFiZWwsIGNydW1iLmxhYmVsKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgICBocmVmOiBpdGVtSHJlZixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2hvbWUnKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IGBNb3N0cmEgVHV0dGkgKCR7dG90YWxDb3VudH0pYCxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoTGltaXRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIGxhYmVsOiBgTW9zdHJhIEFsdHJpICgke3Jlc3VsdHNMaW1pdH0pYCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGZhbGxiYWNrOiBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydsaW5rZWQtb2JqZWN0cy1mYWxsYmFjayddLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xuICB9XG59XG4iXX0=