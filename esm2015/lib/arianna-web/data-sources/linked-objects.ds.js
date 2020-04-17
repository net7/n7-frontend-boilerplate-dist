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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUMsQ0FBQywyREFBMkQ7O0FBQ2pHLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQWpEOztRQWFTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBdUJsQixpQkFBWTs7OztRQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDeEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDN0M7UUFDSCxDQUFDLEVBQUE7UUFFSSx1QkFB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SUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsaURBQWlEO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztDQTRMRjs7O0lBN05DLHdDQUEyQjs7SUFFM0IsdUNBQTBCOztJQUUxQix5Q0FBNEI7O0lBRTVCLHFDQUF3Qjs7SUFFeEIsb0NBQXVCOztJQUV2Qix1Q0FBdUI7O0lBRXZCLHdDQUEyQjs7SUFFM0Isa0NBQWtCOztJQXFCaEIseUNBbUJDOztJQUVILCtDQVVDOzs7OztJQUVELHVDQXdKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7IC8vIHVzZWQgZm9yIGNoZXJyeS1waWNraW5nIG9iamVjdCBrZXlzIGZyb20gYXBwLWNvbmZpZy5qc29uXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcblxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuXG4gIHB1YmxpYyB0b3RhbE9iamVjdHM6IG51bWJlcjtcblxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcblxuICBwdWJsaWMgY29udGV4dDogc3RyaW5nO1xuXG4gIHB1YmxpYyBsb2FkZWREYXRhOiBhbnk7XG5cbiAgcHVibGljIGxvYWRpbmdEYXRhID0gZmFsc2U7XG5cbiAgcHVibGljIHBhdGhzOiBhbnk7IC8vIHVzZSBkeW5hbWljIG9iamVjdCBwYXRocyBmcm9tIGNvbmZpZ1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMucGF0aHMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgIHRoaXMudG90YWxPYmplY3RzID0gZGF0YS50b3RhbENvdW50O1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm9wdGlvbnMucGFnZSA/ICt0aGlzLm9wdGlvbnMucGFnZSA6IDE7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbiAmJiB0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwgLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5vcHRpb25zLmNvbnRleHQ7XG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7IC8vIGNoZWNrcyBpZiA8U2hvdyBNb3JlPiBidXR0b24gc2hvdWxkIGJlIGVuYWJsZWRcbiAgICB0aGlzLmxvYWRlZERhdGEubG9hZGVyRGF0YSA9IHt9O1xuICAgIHJldHVybiB0aGlzLmxvYWRlZERhdGE7XG4gIH1cblxuICAgIHB1YmxpYyBjaGVja0Zvck1vcmUgPSAoZm9yY2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAvKlxuICAgICAgICBDaGVja3MgaWYgaXQgaXMgcG9zc2libGUgdG8gbG9hZCBtb3JlIGl0ZW0gcHJldmlld3MuXG4gICAgICAgIENhbiByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudCB0byBmb3JjZSB0aGUgYnV0dG9uIHRvIGJlXG4gICAgICAgIGVuYWJsZWQgb3IgZGlzYWJsZWQuIChVc2VkIHdoaWxlIGRhdGEgaXMgbG9hZGluZylcbiAgICAgICovXG4gICAgICBpZiAoIXRoaXMubG9hZGVkRGF0YS5hY3Rpb25zKSB7XG4gICAgICAgIC8vIGlmIG5vdCB1c2luZyBhY3Rpb25zLCBkb24ndCBjaGVja1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGZvcmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9ICFmb3JjZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoID49IHRoaXMudG90YWxPYmplY3RzKSB7XG4gICAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSAoaW5jb21pbmdEYXRhKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSBpbmZpbml0ZSBzY3JvbGxlciwgYWRkcyB0aGUgaW5jb21pbmdcbiAgICAgIGRhdGEgdG8gdGhlIGxpbmtlZCBvYmplY3RzIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIHRoaXMuY3VycmVudFBhZ2UgKz0gMTtcbiAgICBjb25zdCBuZXdEYXRhOiBhbnkgPSB0aGlzLnVucGFja0RhdGEoaW5jb21pbmdEYXRhLml0ZW1zUGFnaW5hdGlvbik7XG4gICAgdGhpcy5sb2FkZWREYXRhLnJlc3VsdCA9IHRoaXMubG9hZGVkRGF0YS5yZXN1bHQuY29uY2F0KG5ld0RhdGEucmVzdWx0KTtcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpO1xuICAgIHRoaXMubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zOyAvLyBhcHAtY29uZmlnLmpzb25cbiAgICBjb25zdCBwYXRocyA9IGNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpOyAvLyBpdGVtIHByZXZpZXcgZHluYW1pYyBwYXRoc1xuICAgIGNvbnN0IHsgdG90YWxDb3VudCB9ID0gZGF0YTsgLy8gdG90YWwgYW1vdW50IG9mIGl0ZW1zIGF2YWlsYWJsZSBvbiBiYWNrZW5kXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7IC8vIGN1cnJlbnQgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXM7IC8vIHBhcmVudCBsYXlvdXQgbmFtZVxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnBhZ2VTaXplOyAvLyBpdGVtcyBwZXIgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICBjb25zdCBsYWJlbHMgPSBjb25maWcuZ2V0KCdsYWJlbHMnKTtcbiAgICBjb25zdCB7IGR5bmFtaWNQYWdpbmF0aW9uIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qga2V5cyA9IGNvbmZpZyA/IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJykgOiB7fTtcbiAgICBsZXRcbiAgICAgIGxlbmd0aExpbWl0OiBudWxsO1xuICAgIGxldCByZXN1bHRzTGltaXQ6IG51bGw7XG4gICAgbGV0IGQgPSBkYXRhLml0ZW1zID8gZGF0YS5pdGVtcyA6IGRhdGEucmVsYXRlZEl0ZW1zOyAvLyBpdGVtcyB0byBpdGVyYXRlIG92ZXJcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICAvLyBkeW5hbWljIHNlYXJjaCBmb3IgbWF4LWl0ZW0tbGVuZ3RoXG4gICAgICBpZiAoY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKSkge1xuICAgICAgICBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YClbJ21heC1pdGVtLWxlbmd0aCddO1xuICAgICAgICByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApWydyZXN1bHRzLWxpbWl0J107XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlc2l6ZSBkYXRhXG4gICAgaWYgKCFkeW5hbWljUGFnaW5hdGlvbiAmJiBzaXplICYmIHBhZ2UpIHtcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoKGluZm8pID0+IGluZm8ua2V5KTtcbiAgICBkLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRGF0YSA9IGVsLml0ZW0gPyBlbC5pdGVtIDogZWw7XG5cbiAgICAgIGNvbnN0IGluZm9EYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby5kYXRhLCBpdGVtRGF0YS5maWVsZHMpO1xuICAgICAgY29uc3QgaW5mb0RhdGFJdGVtcyA9IGluZm9EYXRhXG4gICAgICAgID8gaW5mb0RhdGEuZmlsdGVyKChpbmZvKSA9PiBlbmFibGVkS2V5cy5pbmRleE9mKGluZm8ua2V5KSAhPT0gLTEpXG4gICAgICAgIDogW107XG4gICAgICBjb25zdCB0b2VEYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEudG9lLmRhdGEsIGl0ZW1EYXRhLnJlbGF0ZWRUeXBlc09mRW50aXR5KTtcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgaXRlbURhdGEuYnJlYWRjcnVtYnMpO1xuXG4gICAgICBpZiAoWydlbnRpdGEnLCAnc2VhcmNoJ10uaW5jbHVkZXMoY29udGV4dCkpIHtcbiAgICAgICAgaWYgKGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAmJiBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgIT09ICcnKSB7XG4gICAgICAgICAgaW5mb0RhdGFJdGVtcy5wdXNoKHsga2V5OiAnVGlwbyBkaSBlbnRpdMOgJywgdmFsdWU6IGtleXNbaXRlbURhdGEudHlwZU9mRW50aXR5XVsnc2luZ3VsYXItbGFiZWwnXSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGNsYXNzZXMgPSBbJ2VudGl0YScsICdzZWFyY2gnLCAnb2dnZXR0aS1jb2xsZWdhdGknXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdpcy1mdWxsd2lkdGgnIDogJyc7XG4gICAgICBjbGFzc2VzICs9IGl0ZW1EYXRhLnR5cGVPZkVudGl0eSA/IGAgaXMtJHtjb25maWcuZ2V0KCdjb25maWcta2V5cycpW2l0ZW1EYXRhLnR5cGVPZkVudGl0eV1bJ2NsYXNzLW5hbWUnXX1gIDogJyBpcy1vZ2dldHRvLWN1bHR1cmFsZSc7XG5cbiAgICAgIC8vIGNvbnNpZGVyIHRoZSBsZW5naHQgb2YgPGVtPiB0YWdzIHRvIGV4Y2x1ZGUgZnJvbSBjb3VudFxuICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubWF0Y2goLzxlbT4vZykgPyBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpLmxlbmd0aCAqIDkgOiAwO1xuXG4gICAgICBjb25zdCBpdGVtVGl0bGUgPSArcGF0aHMudGl0bGUubWF4TGVuZ3RoXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubGVuZ3RoID4gK3BhdGhzLnRpdGxlLm1heExlbmd0aCArIGhpZ2hsaWdodHNcbiAgICAgICAgPyBgJHtfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLnNsaWNlKDAsICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzKX3igKZgXG4gICAgICAgIDogX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKTtcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGl0ZW1EYXRhLmlkKTtcbiAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbURhdGEudHlwZU9mRW50aXR5O1xuICAgICAgY29uc3QgaXRlbUhyZWYgPSBbXG4gICAgICAgIGl0ZW1UeXBlID8gY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCA6IGNvbmZpZy5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXG4gICAgICAgIGl0ZW1JZCxcbiAgICAgICAgaGVscGVycy5zbHVnaWZ5KGl0ZW1UaXRsZSksXG4gICAgICBdLmpvaW4oJy8nKTtcbiAgICAgIGxldCB0ZXh0O1xuICAgICAgaWYgKCFwYXRocy50ZXh0KSB7XG4gICAgICAgIHRleHQgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgK3BhdGhzLnRleHQubWF4TGVuZ3RoXG4gICAgICAgICYmIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkubGVuZ3RoID4gK3BhdGhzLnRleHQubWF4TGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgdGV4dCA9IGAke19nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkuc2xpY2UoMCwgK3BhdGhzLnRleHQubWF4TGVuZ3RoKX3igKZgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCk7XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICB0ZXh0LFxuICAgICAgICBjbGFzc2VzLFxuICAgICAgICBicmVhZGNydW1icyxcbiAgICAgICAgaW1hZ2U6IF9nZXQoZWwsIHBhdGhzLmltYWdlLCBpdGVtRGF0YS5pbWFnZSksXG4gICAgICAgIHRpdGxlOiBpdGVtVGl0bGUsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxuICAgICAgICAgIHRhcmdldDogY29udGV4dCA9PT0gJ3NlYXJjaCcgPyAnX2JsYW5rJyA6ICdfc2VsZidcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpb246IHsga2V5OiBlbC5yZWxhdGlvbk5hbWUsIHZhbHVlOiBlbC5yZWxhdGlvbiB9LFxuICAgICAgICBtZXRhZGF0YTogaW5mb0RhdGFJdGVtcy5sZW5ndGggfHwgdG9lRGF0YSA/IFtdIDogbnVsbCxcbiAgICAgIH07XG4gICAgICAvLyBtZXRhZGF0YVxuICAgICAgaWYgKGluZm9EYXRhSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlld19tZXRhZGF0YScsXG4gICAgICAgICAgaXRlbXM6IGluZm9EYXRhSXRlbXMubWFwKChpbmZvREl0ZW0pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpbmZvREl0ZW0ua2V5LCBsYWJlbHNbaW5mb0RJdGVtLmtleV0pLFxuICAgICAgICAgICAgdmFsdWU6IGluZm9ESXRlbS52YWx1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRvZURhdGEpIHtcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5wdXNoKHtcbiAgICAgICAgICBjbGFzc2VzOiAnYXctaXRlbS1wcmV2aWV3LWVudGl0aWVzJyxcbiAgICAgICAgICBpdGVtczogdG9lRGF0YS5tYXAoKHRvZSkgPT4gKHsgLy8gcGVyc29uYTogNiwgT3JnYW5peno6IDEyLCBMdW9naGk6IDIsIENvbmNldHRpOiAzMlxuICAgICAgICAgICAgdmFsdWU6IF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UudmFsdWUsIHRvZS5jb3VudCksXG4gICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgaWNvbjoga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1cbiAgICAgICAgICAgICAgPyBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXS5pY29uXG4gICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXVsnY2xhc3MtbmFtZSddfWAsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGJyZWFkY3J1bWJzXG4gICAgICBpZiAoYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgaXRlbS5icmVhZGNydW1icyA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgICBpdGVtczogX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgZWwuaXRlbS5icmVhZGNydW1icykubWFwKChjcnVtYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5sYWJlbCwgY3J1bWIubGFiZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmIChjb250ZXh0ID09PSAnaG9tZScpIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogYE1vc3RyYSBUdXR0aSAoJHt0b3RhbENvdW50fSlgLFxuICAgICAgICB9LFxuICAgICAgICBsZW5ndGhMaW1pdFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgbGFiZWw6IGBNb3N0cmEgQWx0cmkgKCR7cmVzdWx0c0xpbWl0fSlgLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZmFsbGJhY2s6IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ2xpbmtlZC1vYmplY3RzLWZhbGxiYWNrJ10sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBwcmV2aWV3czogcmVzdWx0IH07XG4gIH1cbn1cbiJdfQ==