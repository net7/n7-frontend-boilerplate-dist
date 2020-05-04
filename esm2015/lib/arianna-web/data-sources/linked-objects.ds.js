/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/linked-objects.ds.ts
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
                if (['entita', 'search', 'gallery'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                        infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                /** @type {?} */
                let classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? ` is-${config.get('config-keys')[itemData.typeOfEntity]['class-name']}` : ' is-oggetto-culturale';
                // gallery classes
                if (context === 'gallery') {
                    classes += ' is-vertical has-image';
                }
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
                    relation: { key: el.relationName, value: el.relation },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUNqRyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUFqRDs7UUFhUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXVCbEIsaUJBQVk7Ozs7UUFBRyxDQUFDLEtBQWUsRUFBRSxFQUFFO1lBQ3hDOzs7O2NBSUU7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLG9DQUFvQztnQkFDcEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxFQUFBO1FBRUksdUJB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LElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBaU1GOzs7SUFsT0Msd0NBQTJCOztJQUUzQix1Q0FBMEI7O0lBRTFCLHlDQUE0Qjs7SUFFNUIscUNBQXdCOztJQUV4QixvQ0FBdUI7O0lBRXZCLHVDQUF1Qjs7SUFFdkIsd0NBQTJCOztJQUUzQixrQ0FBa0I7O0lBcUJoQix5Q0FtQkM7O0lBRUgsK0NBVUM7Ozs7O0lBRUQsdUNBNkpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJzsgLy8gdXNlZCBmb3IgY2hlcnJ5LXBpY2tpbmcgb2JqZWN0IGtleXMgZnJvbSBhcHAtY29uZmlnLmpzb25cbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyO1xuXG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XG5cbiAgcHVibGljIHRvdGFsT2JqZWN0czogbnVtYmVyO1xuXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmc7XG5cbiAgcHVibGljIGxvYWRlZERhdGE6IGFueTtcblxuICBwdWJsaWMgbG9hZGluZ0RhdGEgPSBmYWxzZTtcblxuICBwdWJsaWMgcGF0aHM6IGFueTsgLy8gdXNlIGR5bmFtaWMgb2JqZWN0IHBhdGhzIGZyb20gY29uZmlnXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5wYXRocyA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKTtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgdGhpcy50b3RhbE9iamVjdHMgPSBkYXRhLnRvdGFsQ291bnQ7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMub3B0aW9ucy5wYWdlID8gK3RoaXMub3B0aW9ucy5wYWdlIDogMTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uICYmIHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCkge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5pdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEuaXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEucmVsYXRlZEl0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLm9wdGlvbnMuY29udGV4dDtcbiAgICB0aGlzLmxvYWRlZERhdGEgPSB0aGlzLnVucGFja0RhdGEoZGF0YSk7XG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTsgLy8gY2hlY2tzIGlmIDxTaG93IE1vcmU+IGJ1dHRvbiBzaG91bGQgYmUgZW5hYmxlZFxuICAgIHRoaXMubG9hZGVkRGF0YS5sb2FkZXJEYXRhID0ge307XG4gICAgcmV0dXJuIHRoaXMubG9hZGVkRGF0YTtcbiAgfVxuXG4gICAgcHVibGljIGNoZWNrRm9yTW9yZSA9IChmb3JjZT86IGJvb2xlYW4pID0+IHtcbiAgICAgIC8qXG4gICAgICAgIENoZWNrcyBpZiBpdCBpcyBwb3NzaWJsZSB0byBsb2FkIG1vcmUgaXRlbSBwcmV2aWV3cy5cbiAgICAgICAgQ2FuIHJlY2VpdmUgYSBib29sZWFuIGFyZ3VtZW50IHRvIGZvcmNlIHRoZSBidXR0b24gdG8gYmVcbiAgICAgICAgZW5hYmxlZCBvciBkaXNhYmxlZC4gKFVzZWQgd2hpbGUgZGF0YSBpcyBsb2FkaW5nKVxuICAgICAgKi9cbiAgICAgIGlmICghdGhpcy5sb2FkZWREYXRhLmFjdGlvbnMpIHtcbiAgICAgICAgLy8gaWYgbm90IHVzaW5nIGFjdGlvbnMsIGRvbid0IGNoZWNrXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZm9yY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gIWZvcmNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5sb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggPj0gdGhpcy50b3RhbE9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgcHVibGljIGhhbmRsZUluY29taW5nRGF0YSA9IChpbmNvbWluZ0RhdGEpID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IGluZmluaXRlIHNjcm9sbGVyLCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgdGhpcy5jdXJyZW50UGFnZSArPSAxO1xuICAgIGNvbnN0IG5ld0RhdGE6IGFueSA9IHRoaXMudW5wYWNrRGF0YShpbmNvbWluZ0RhdGEuaXRlbXNQYWdpbmF0aW9uKTtcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7XG4gICAgdGhpcy5sb2FkZWREYXRhLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gKGRhdGEpID0+IHtcbiAgICAvKlxuICAgICAgRHluYW1pY2FsbHkgcmV0dXJucyB0aGUgZGF0YSBvYmplY3QgZm9yIGVhY2ggSFRNTCBjb21wb25lbnRcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcHJldmlld3M6IFsgYnJlYWRjcnVtYnM6IHsgaXRlbXNbXSB9LCBjbGFzc2VzLCBpbWFnZSwgbWV0YWRhdGEsIHBheWxvYWQsIHRpdGxlIF0sXG4gICAgICAgIHBhZ2luYXRpb246IHsgZmlyc3QsIGxhc3QsIGxpbmtzLCBuZXh0LCBwcmV2LCBzZWxlY3QgfVxuICAgICAgfVxuICAgICovXG4gICAgY29uc3RcbiAgICAgIHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7IC8vIGFwcC1jb25maWcuanNvblxuICAgIGNvbnN0IHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7IC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXG4gICAgY29uc3QgeyB0b3RhbENvdW50IH0gPSBkYXRhOyAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICBjb25zdCBwYWdlID0gdGhpcy5jdXJyZW50UGFnZTsgLy8gY3VycmVudCBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpczsgLy8gcGFyZW50IGxheW91dCBuYW1lXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMucGFnZVNpemU7IC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIGNvbnN0IGxhYmVscyA9IGNvbmZpZy5nZXQoJ2xhYmVscycpO1xuICAgIGNvbnN0IHsgZHluYW1pY1BhZ2luYXRpb24gfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBrZXlzID0gY29uZmlnID8gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKSA6IHt9O1xuICAgIGxldFxuICAgICAgbGVuZ3RoTGltaXQ6IG51bGw7XG4gICAgbGV0IHJlc3VsdHNMaW1pdDogbnVsbDtcbiAgICBsZXQgZCA9IGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zIDogZGF0YS5yZWxhdGVkSXRlbXM7IC8vIGl0ZW1zIHRvIGl0ZXJhdGUgb3ZlclxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcbiAgICAgIGlmIChjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApKSB7XG4gICAgICAgIGxlbmd0aExpbWl0ID0gY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKVsnbWF4LWl0ZW0tbGVuZ3RoJ107XG4gICAgICAgIHJlc3VsdHNMaW1pdCA9IGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YClbJ3Jlc3VsdHMtbGltaXQnXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVzaXplIGRhdGFcbiAgICBpZiAoIWR5bmFtaWNQYWdpbmF0aW9uICYmIHNpemUgJiYgcGFnZSkge1xuICAgICAgZCA9IGQuc2xpY2UocGFnZSAqIHNpemUgLSBzaXplLCBwYWdlICogc2l6ZSk7XG4gICAgfSBlbHNlIGlmIChzaXplKSB7XG4gICAgICBkID0gZC5zbGljZSgwLCBzaXplKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBlbmFibGVkS2V5cyA9IHBhdGhzLm1ldGFkYXRhLmluZm8uc2VsZWN0aW9uLm1hcCgoaW5mbykgPT4gaW5mby5rZXkpO1xuICAgIGQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1EYXRhID0gZWwuaXRlbSA/IGVsLml0ZW0gOiBlbDtcblxuICAgICAgY29uc3QgaW5mb0RhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLmRhdGEsIGl0ZW1EYXRhLmZpZWxkcyk7XG4gICAgICBjb25zdCBpbmZvRGF0YUl0ZW1zID0gaW5mb0RhdGFcbiAgICAgICAgPyBpbmZvRGF0YS5maWx0ZXIoKGluZm8pID0+IGVuYWJsZWRLZXlzLmluZGV4T2YoaW5mby5rZXkpICE9PSAtMSlcbiAgICAgICAgOiBbXTtcbiAgICAgIGNvbnN0IHRvZURhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS50b2UuZGF0YSwgaXRlbURhdGEucmVsYXRlZFR5cGVzT2ZFbnRpdHkpO1xuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBpdGVtRGF0YS5icmVhZGNydW1icyk7XG5cbiAgICAgIGlmIChbJ2VudGl0YScsICdzZWFyY2gnLCAnZ2FsbGVyeSddLmluY2x1ZGVzKGNvbnRleHQpKSB7XG4gICAgICAgIGlmIChpdGVtRGF0YS50eXBlT2ZFbnRpdHkgJiYgaXRlbURhdGEudHlwZU9mRW50aXR5ICE9PSAnJykge1xuICAgICAgICAgIGluZm9EYXRhSXRlbXMucHVzaCh7IGtleTogJ1RpcG8gZGkgZW50aXTDoCcsIHZhbHVlOiBrZXlzW2l0ZW1EYXRhLnR5cGVPZkVudGl0eV1bJ3Npbmd1bGFyLWxhYmVsJ10gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjbGFzc2VzID0gWydlbnRpdGEnLCAnc2VhcmNoJywgJ29nZ2V0dGktY29sbGVnYXRpJ10uaW5jbHVkZXMoY29udGV4dCkgPyAnaXMtZnVsbHdpZHRoJyA6ICcnO1xuICAgICAgY2xhc3NlcyArPSBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgPyBgIGlzLSR7Y29uZmlnLmdldCgnY29uZmlnLWtleXMnKVtpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydjbGFzcy1uYW1lJ119YCA6ICcgaXMtb2dnZXR0by1jdWx0dXJhbGUnO1xuXG4gICAgICAvLyBnYWxsZXJ5IGNsYXNzZXNcbiAgICAgIGlmIChjb250ZXh0ID09PSAnZ2FsbGVyeScpIHtcbiAgICAgICAgY2xhc3NlcyArPSAnIGlzLXZlcnRpY2FsIGhhcy1pbWFnZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNpZGVyIHRoZSBsZW5naHQgb2YgPGVtPiB0YWdzIHRvIGV4Y2x1ZGUgZnJvbSBjb3VudFxuICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubWF0Y2goLzxlbT4vZykgPyBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpLmxlbmd0aCAqIDkgOiAwO1xuXG4gICAgICBjb25zdCBpdGVtVGl0bGUgPSArcGF0aHMudGl0bGUubWF4TGVuZ3RoXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubGVuZ3RoID4gK3BhdGhzLnRpdGxlLm1heExlbmd0aCArIGhpZ2hsaWdodHNcbiAgICAgICAgPyBgJHtfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLnNsaWNlKDAsICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzKX3igKZgXG4gICAgICAgIDogX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKTtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGl0ZW1EYXRhLmlkKTtcbiAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbURhdGEudHlwZU9mRW50aXR5O1xuICAgICAgY29uc3QgaXRlbUhyZWYgPSBbXG4gICAgICAgIGl0ZW1UeXBlID8gY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCA6IGNvbmZpZy5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXG4gICAgICAgIGl0ZW1JZCxcbiAgICAgICAgaGVscGVycy5zbHVnaWZ5KGl0ZW1UaXRsZSksXG4gICAgICBdLmpvaW4oJy8nKTtcbiAgICAgIGxldCB0ZXh0O1xuICAgICAgaWYgKCFwYXRocy50ZXh0KSB7XG4gICAgICAgIHRleHQgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgK3BhdGhzLnRleHQubWF4TGVuZ3RoXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkubGVuZ3RoID4gK3BhdGhzLnRleHQubWF4TGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGV4dCA9IGAke19nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkuc2xpY2UoMCwgK3BhdGhzLnRleHQubWF4TGVuZ3RoKX3igKZgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCk7XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICB0ZXh0LFxuICAgICAgICBjbGFzc2VzLFxuICAgICAgICBicmVhZGNydW1icyxcbiAgICAgICAgaW1hZ2U6IF9nZXQoZWwsIHBhdGhzLmltYWdlLCBpdGVtRGF0YS5pbWFnZSksXG4gICAgICAgIHRpdGxlOiBpdGVtVGl0bGUsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxuICAgICAgICAgIHRhcmdldDogY29udGV4dCA9PT0gJ3NlYXJjaCcgPyAnX2JsYW5rJyA6ICdfc2VsZidcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpb246IHsga2V5OiBlbC5yZWxhdGlvbk5hbWUsIHZhbHVlOiBlbC5yZWxhdGlvbiB9LFxuICAgICAgICBtZXRhZGF0YTogaW5mb0RhdGFJdGVtcy5sZW5ndGggfHwgdG9lRGF0YSA/IFtdIDogbnVsbCxcbiAgICAgIH07XG4gICAgICAvLyBtZXRhZGF0YVxuICAgICAgaWYgKGluZm9EYXRhSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlld19tZXRhZGF0YScsXG4gICAgICAgICAgaXRlbXM6IGluZm9EYXRhSXRlbXMubWFwKChpbmZvREl0ZW0pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpbmZvREl0ZW0ua2V5LCBsYWJlbHNbaW5mb0RJdGVtLmtleV0pLFxuICAgICAgICAgICAgdmFsdWU6IGluZm9ESXRlbS52YWx1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRvZURhdGEpIHtcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5wdXNoKHtcbiAgICAgICAgICBjbGFzc2VzOiAnYXctaXRlbS1wcmV2aWV3LWVudGl0aWVzJyxcbiAgICAgICAgICBpdGVtczogdG9lRGF0YS5tYXAoKHRvZSkgPT4gKHsgLy8gcGVyc29uYTogNiwgT3JnYW5peno6IDEyLCBMdW9naGk6IDIsIENvbmNldHRpOiAzMlxuICAgICAgICAgICAgdmFsdWU6IF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UudmFsdWUsIHRvZS5jb3VudCksXG4gICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgaWNvbjoga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1cbiAgICAgICAgICAgICAgPyBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXS5pY29uXG4gICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXVsnY2xhc3MtbmFtZSddfWAsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGJyZWFkY3J1bWJzXG4gICAgICBpZiAoYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgaXRlbS5icmVhZGNydW1icyA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgICBpdGVtczogX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgZWwuaXRlbS5icmVhZGNydW1icykubWFwKChjcnVtYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5sYWJlbCwgY3J1bWIubGFiZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmIChjb250ZXh0ID09PSAnaG9tZScpIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogYE1vc3RyYSBUdXR0aSAoJHt0b3RhbENvdW50fSlgLFxuICAgICAgICB9LFxuICAgICAgICBsZW5ndGhMaW1pdFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgbGFiZWw6IGBNb3N0cmEgQWx0cmkgKCR7cmVzdWx0c0xpbWl0fSlgLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZmFsbGJhY2s6IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ2xpbmtlZC1vYmplY3RzLWZhbGxiYWNrJ10sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBwcmV2aWV3czogcmVzdWx0IH07XG4gIH1cbn1cbiJdfQ==