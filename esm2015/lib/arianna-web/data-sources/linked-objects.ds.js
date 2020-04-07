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
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    _getPaginationAnchor(page) {
        const { href, queryParams } = this.options.paginationParams;
        return {
            href: queryParams ? href : href + page,
            queryParams: queryParams ? Object.assign({}, queryParams, { page }) : null,
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUNqRyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUFqRDs7UUFhUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXVCcEIsaUJBQVk7Ozs7UUFBRyxDQUFDLEtBQWUsRUFBRSxFQUFFO1lBQ3hDOzs7O2NBSUU7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLG9DQUFvQztnQkFDcEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxFQUFBO1FBRU0sdUJB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QUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsaURBQWlEO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBNExPLG9CQUFvQixDQUFDLElBQUk7Y0FDekIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0I7UUFDM0QsT0FBTztZQUNMLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUk7WUFDdEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLG1CQUNyQixXQUFXLElBQ2QsSUFBSSxJQUNKLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7Q0FDRjs7O0lBdk9DLHdDQUEyQjs7SUFFM0IsdUNBQTBCOztJQUUxQix5Q0FBNEI7O0lBRTVCLHFDQUF3Qjs7SUFFeEIsb0NBQXVCOztJQUV2Qix1Q0FBdUI7O0lBRXZCLHdDQUEyQjs7SUFFM0Isa0NBQWtCOztJQXFCbEIseUNBbUJDOztJQUVELCtDQVVDOzs7OztJQUVELHVDQXVKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7IC8vIHVzZWQgZm9yIGNoZXJyeS1waWNraW5nIG9iamVjdCBrZXlzIGZyb20gYXBwLWNvbmZpZy5qc29uXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcblxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuXG4gIHB1YmxpYyB0b3RhbE9iamVjdHM6IG51bWJlcjtcblxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcblxuICBwdWJsaWMgY29udGV4dDogc3RyaW5nO1xuXG4gIHB1YmxpYyBsb2FkZWREYXRhOiBhbnk7XG5cbiAgcHVibGljIGxvYWRpbmdEYXRhID0gZmFsc2U7XG5cbiAgcHVibGljIHBhdGhzOiBhbnk7IC8vIHVzZSBkeW5hbWljIG9iamVjdCBwYXRocyBmcm9tIGNvbmZpZ1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMucGF0aHMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgIHRoaXMudG90YWxPYmplY3RzID0gZGF0YS50b3RhbENvdW50O1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm9wdGlvbnMucGFnZSA/ICt0aGlzLm9wdGlvbnMucGFnZSA6IDE7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbiAmJiB0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwgLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5vcHRpb25zLmNvbnRleHQ7XG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7IC8vIGNoZWNrcyBpZiA8U2hvdyBNb3JlPiBidXR0b24gc2hvdWxkIGJlIGVuYWJsZWRcbiAgICB0aGlzLmxvYWRlZERhdGEubG9hZGVyRGF0YSA9IHt9O1xuICAgIHJldHVybiB0aGlzLmxvYWRlZERhdGE7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tGb3JNb3JlID0gKGZvcmNlPzogYm9vbGVhbikgPT4ge1xuICAgIC8qXG4gICAgICBDaGVja3MgaWYgaXQgaXMgcG9zc2libGUgdG8gbG9hZCBtb3JlIGl0ZW0gcHJldmlld3MuXG4gICAgICBDYW4gcmVjZWl2ZSBhIGJvb2xlYW4gYXJndW1lbnQgdG8gZm9yY2UgdGhlIGJ1dHRvbiB0byBiZVxuICAgICAgZW5hYmxlZCBvciBkaXNhYmxlZC4gKFVzZWQgd2hpbGUgZGF0YSBpcyBsb2FkaW5nKVxuICAgICovXG4gICAgaWYgKCF0aGlzLmxvYWRlZERhdGEuYWN0aW9ucykge1xuICAgICAgLy8gaWYgbm90IHVzaW5nIGFjdGlvbnMsIGRvbid0IGNoZWNrXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm9yY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9ICFmb3JjZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoID49IHRoaXMudG90YWxPYmplY3RzKSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUluY29taW5nRGF0YSA9IChpbmNvbWluZ0RhdGEpID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IGluZmluaXRlIHNjcm9sbGVyLCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgdGhpcy5jdXJyZW50UGFnZSArPSAxO1xuICAgIGNvbnN0IG5ld0RhdGE6IGFueSA9IHRoaXMudW5wYWNrRGF0YShpbmNvbWluZ0RhdGEuaXRlbXNQYWdpbmF0aW9uKTtcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7XG4gICAgdGhpcy5sb2FkZWREYXRhLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gKGRhdGEpID0+IHtcbiAgICAvKlxuICAgICAgRHluYW1pY2FsbHkgcmV0dXJucyB0aGUgZGF0YSBvYmplY3QgZm9yIGVhY2ggSFRNTCBjb21wb25lbnRcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcHJldmlld3M6IFsgYnJlYWRjcnVtYnM6IHsgaXRlbXNbXSB9LCBjbGFzc2VzLCBpbWFnZSwgbWV0YWRhdGEsIHBheWxvYWQsIHRpdGxlIF0sXG4gICAgICAgIHBhZ2luYXRpb246IHsgZmlyc3QsIGxhc3QsIGxpbmtzLCBuZXh0LCBwcmV2LCBzZWxlY3QgfVxuICAgICAgfVxuICAgICovXG4gICAgY29uc3RcbiAgICAgIHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7IC8vIGFwcC1jb25maWcuanNvblxuICAgIGNvbnN0IHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7IC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXG4gICAgY29uc3QgeyB0b3RhbENvdW50IH0gPSBkYXRhOyAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICBjb25zdCBwYWdlID0gdGhpcy5jdXJyZW50UGFnZTsgLy8gY3VycmVudCBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpczsgLy8gcGFyZW50IGxheW91dCBuYW1lXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMucGFnZVNpemU7IC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIGNvbnN0IGxhYmVscyA9IGNvbmZpZy5nZXQoJ2xhYmVscycpO1xuICAgIGNvbnN0IHsgZHluYW1pY1BhZ2luYXRpb24gfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBrZXlzID0gY29uZmlnID8gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKSA6IHt9O1xuICAgIGxldFxuICAgICAgbGVuZ3RoTGltaXQ6IG51bGw7XG4gICAgbGV0IHJlc3VsdHNMaW1pdDogbnVsbDtcbiAgICBsZXQgZCA9IGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zIDogZGF0YS5yZWxhdGVkSXRlbXM7IC8vIGl0ZW1zIHRvIGl0ZXJhdGUgb3ZlclxuXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgLy8gZHluYW1pYyBzZWFyY2ggZm9yIG1heC1pdGVtLWxlbmd0aFxuICAgICAgaWYgKGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YCkpIHtcbiAgICAgICAgbGVuZ3RoTGltaXQgPSBjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApWydtYXgtaXRlbS1sZW5ndGgnXTtcbiAgICAgICAgcmVzdWx0c0xpbWl0ID0gY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKVsncmVzdWx0cy1saW1pdCddO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXNpemUgZGF0YVxuICAgIGlmICghZHluYW1pY1BhZ2luYXRpb24gJiYgc2l6ZSAmJiBwYWdlKSB7XG4gICAgICBkID0gZC5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKTtcbiAgICB9IGVsc2UgaWYgKHNpemUpIHtcbiAgICAgIGQgPSBkLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGVuYWJsZWRLZXlzID0gcGF0aHMubWV0YWRhdGEuaW5mby5zZWxlY3Rpb24ubWFwKChpbmZvKSA9PiBpbmZvLmtleSk7XG4gICAgZC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgaXRlbURhdGEgPSBlbC5pdGVtID8gZWwuaXRlbSA6IGVsO1xuXG4gICAgICBjb25zdCBpbmZvRGF0YSA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmluZm8uZGF0YSwgaXRlbURhdGEuZmllbGRzKTtcbiAgICAgIGNvbnN0IGluZm9EYXRhSXRlbXMgPSBpbmZvRGF0YVxuICAgICAgICA/IGluZm9EYXRhLmZpbHRlcigoaW5mbykgPT4gZW5hYmxlZEtleXMuaW5kZXhPZihpbmZvLmtleSkgIT09IC0xKVxuICAgICAgICA6IFtdO1xuICAgICAgY29uc3QgdG9lRGF0YSA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLnRvZS5kYXRhLCBpdGVtRGF0YS5yZWxhdGVkVHlwZXNPZkVudGl0eSk7XG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGl0ZW1EYXRhLmJyZWFkY3J1bWJzKTtcblxuICAgICAgaWYgKFsnZW50aXRhJywgJ3NlYXJjaCddLmluY2x1ZGVzKGNvbnRleHQpKSB7XG4gICAgICAgIGlmIChpdGVtRGF0YS50eXBlT2ZFbnRpdHkgJiYgaXRlbURhdGEudHlwZU9mRW50aXR5ICE9PSAnJykge1xuICAgICAgICAgIGluZm9EYXRhSXRlbXMucHVzaCh7IGtleTogJ1RpcG8gZGkgZW50aXTDoCcsIHZhbHVlOiBrZXlzW2l0ZW1EYXRhLnR5cGVPZkVudGl0eV1bJ3Npbmd1bGFyLWxhYmVsJ10gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjbGFzc2VzID0gWydlbnRpdGEnLCAnc2VhcmNoJywgJ29nZ2V0dGktY29sbGVnYXRpJ10uaW5jbHVkZXMoY29udGV4dCkgPyAnaXMtZnVsbHdpZHRoJyA6ICcnO1xuICAgICAgY2xhc3NlcyArPSBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgPyBgIGlzLSR7Y29uZmlnLmdldCgnY29uZmlnLWtleXMnKVtpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydjbGFzcy1uYW1lJ119YCA6ICcgaXMtb2dnZXR0by1jdWx0dXJhbGUnO1xuXG4gICAgICAvLyBjb25zaWRlciB0aGUgbGVuZ2h0IG9mIDxlbT4gdGFncyB0byBleGNsdWRlIGZyb20gY291bnRcbiAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpID8gX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5tYXRjaCgvPGVtPi9nKS5sZW5ndGggKiA5IDogMDtcblxuICAgICAgY29uc3QgaXRlbVRpdGxlID0gK3BhdGhzLnRpdGxlLm1heExlbmd0aFxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLmxlbmd0aCA+ICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzXG4gICAgICAgID8gYCR7X2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5zbGljZSgwLCArcGF0aHMudGl0bGUubWF4TGVuZ3RoICsgaGlnaGxpZ2h0cyl94oCmYFxuICAgICAgICA6IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCk7XG4gICAgICBjb25zdCBpdGVtSWQgPSBfZ2V0KGVsLCBwYXRocy5wYXlsb2FkLCBpdGVtRGF0YS5pZCk7XG4gICAgICBjb25zdCBpdGVtVHlwZSA9IGl0ZW1EYXRhLnR5cGVPZkVudGl0eTtcbiAgICAgIGNvbnN0IGl0ZW1IcmVmID0gW1xuICAgICAgICBpdGVtVHlwZSA/IGNvbmZpZy5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGggOiBjb25maWcuZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxuICAgICAgICBpdGVtSWQsXG4gICAgICAgIGhlbHBlcnMuc2x1Z2lmeShpdGVtVGl0bGUpLFxuICAgICAgXS5qb2luKCcvJyk7XG4gICAgICBsZXQgdGV4dDtcbiAgICAgIGlmICghcGF0aHMudGV4dCkge1xuICAgICAgICB0ZXh0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICtwYXRocy50ZXh0Lm1heExlbmd0aFxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLmxlbmd0aCA+ICtwYXRocy50ZXh0Lm1heExlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRleHQgPSBgJHtfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLnNsaWNlKDAsICtwYXRocy50ZXh0Lm1heExlbmd0aCl94oCmYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICAgIGltYWdlOiBfZ2V0KGVsLCBwYXRocy5pbWFnZSwgaXRlbURhdGEuaW1hZ2UpLFxuICAgICAgICB0aXRsZTogaXRlbVRpdGxlLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBpdGVtSHJlZixcbiAgICAgICAgfSxcbiAgICAgICAgbWV0YWRhdGE6IGluZm9EYXRhSXRlbXMubGVuZ3RoIHx8IHRvZURhdGEgPyBbXSA6IG51bGwsXG4gICAgICB9O1xuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xuICAgICAgICAgIGNsYXNzZXM6ICdhdy1pdGVtLXByZXZpZXdfbWV0YWRhdGEnLFxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcCgoaW5mb0RJdGVtKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaW5mb0RJdGVtLmtleSwgbGFiZWxzW2luZm9ESXRlbS5rZXldKSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmZvREl0ZW0udmFsdWUsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2VEYXRhKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlldy1lbnRpdGllcycsXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKCh0b2UpID0+ICh7IC8vIHBlcnNvbmE6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgIGljb246IGtleXNbX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldXG4gICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV0uaWNvblxuICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7a2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1bJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBicmVhZGNydW1ic1xuICAgICAgaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgICAgIGl0ZW0uYnJlYWRjcnVtYnMgPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLml0ZW0uYnJlYWRjcnVtYnMpLm1hcCgoY3J1bWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gX2dldChjcnVtYiwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMubGFiZWwsIGNydW1iLmxhYmVsKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgICBocmVmOiBpdGVtSHJlZixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2hvbWUnKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IGBNb3N0cmEgVHV0dGkgKCR7dG90YWxDb3VudH0pYCxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoTGltaXRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIGxhYmVsOiBgTW9zdHJhIEFsdHJpICgke3Jlc3VsdHNMaW1pdH0pYCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGZhbGxiYWNrOiBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydsaW5rZWQtb2JqZWN0cy1mYWxsYmFjayddLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvbkFuY2hvcihwYWdlKSB7XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5vcHRpb25zLnBhZ2luYXRpb25QYXJhbXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHF1ZXJ5UGFyYW1zID8gaHJlZiA6IGhyZWYgKyBwYWdlLFxuICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zID8ge1xuICAgICAgICAuLi5xdWVyeVBhcmFtcyxcbiAgICAgICAgcGFnZSxcbiAgICAgIH0gOiBudWxsLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==