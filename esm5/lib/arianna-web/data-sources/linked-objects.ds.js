/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import { get as _get } from 'lodash'; // used for cherry-picking object keys from app-config.json
// used for cherry-picking object keys from app-config.json
import helpers from '../../common/helpers';
var AwLinkedObjectsDS = /** @class */ (function (_super) {
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
            var config = _this.options.config;
            // app-config.json
            /** @type {?} */
            var paths = config.get('item-preview');
            // item preview dynamic paths
            var totalCount = data.totalCount;
            // total amount of items available on backend
            /** @type {?} */
            var page = _this.currentPage;
            // current page (if using pagination)
            var context = _this.context;
            // parent layout name
            /** @type {?} */
            var size = _this.pageSize;
            // items per page (if using pagination)
            /** @type {?} */
            var labels = config.get('labels');
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
                if (config.get(context + "-layout")) {
                    lengthLimit = config.get(context + "-layout")['max-item-length'];
                    resultsLimit = config.get(context + "-layout")['results-limit'];
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
                var itemData = el.item ? el.item : el;
                /** @type {?} */
                var infoData = _get(el, paths.metadata.info.data, itemData.fields);
                /** @type {?} */
                var infoDataItems = infoData
                    ? infoData.filter((/**
                     * @param {?} info
                     * @return {?}
                     */
                    function (info) { return enabledKeys.indexOf(info.key) !== -1; }))
                    : [];
                /** @type {?} */
                var toeData = _get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                /** @type {?} */
                var breadcrumbs = _get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                if (['entita', 'search', 'gallery'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                        infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                /** @type {?} */
                var classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? " is-" + config.get('config-keys')[itemData.typeOfEntity]['class-name'] : ' is-oggetto-culturale';
                // gallery classes
                if (context === 'gallery') {
                    classes += ' is-vertical has-image';
                }
                // consider the lenght of <em> tags to exclude from count
                /** @type {?} */
                var highlights = _get(el, paths.title, itemData.label).match(/<em>/g) ? _get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                /** @type {?} */
                var itemTitle = +paths.title.maxLength
                    && _get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                    ? _get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights) + "\u2026"
                    : _get(el, paths.title, itemData.label);
                /** @type {?} */
                var itemId = _get(el, paths.payload, itemData.id);
                /** @type {?} */
                var itemType = itemData.typeOfEntity;
                /** @type {?} */
                var itemHref = [
                    itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                    itemId,
                    helpers.slugify(itemTitle),
                ].join('/');
                /** @type {?} */
                var text;
                if (!paths.text) {
                    text = null;
                }
                else if (+paths.text.maxLength
                    && _get(el, paths.text.data, itemData.text).length > +paths.text.maxLength) {
                    text = _get(el, paths.text.data, itemData.text).slice(0, +paths.text.maxLength) + "\u2026";
                }
                else {
                    text = _get(el, paths.text.data, itemData.text);
                }
                /** @type {?} */
                var item = {
                    text: text,
                    classes: classes,
                    breadcrumbs: breadcrumbs,
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
                        function (infoDItem) { return ({
                            label: helpers.prettifySnakeCase(infoDItem.key, labels[infoDItem.key]),
                            value: infoDItem.value,
                        }); })),
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'aw-item-preview-entities',
                        items: toeData.map((/**
                         * @param {?} toe
                         * @return {?}
                         */
                        function (toe) { return ({
                            // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                            value: _get(toe, paths.metadata.toe.value, toe.count),
                            // icon: 'n7-icon-bell' // TODO: link icon to config key
                            icon: keys[_get(toe, paths.metadata.toe.icon, toe.type)]
                                ? keys[_get(toe, paths.metadata.toe.icon, toe.type)].icon
                                : '',
                            classes: "color-" + keys[_get(toe, paths.metadata.toe.icon, toe.type)]['class-name'],
                        }); })),
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
                        function (crumb) {
                            /** @type {?} */
                            var label = _get(crumb, paths.metadata.breadcrumbs.label, crumb.label);
                            return {
                                label: label,
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
                var actions = [
                    {
                        label: "Mostra Tutti (" + totalCount + ")",
                    },
                    lengthLimit
                        ? {
                            label: "Mostra Altri (" + resultsLimit + ")",
                            disabled: false,
                        } : null,
                ];
                return {
                    result: result,
                    actions: actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback'],
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
        this.checkForMore(); // checks if <Show More> button should be enabled
        this.loadedData.loaderData = {};
        return this.loadedData;
    };
    return AwLinkedObjectsDS;
}(DataSource));
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
    /**
     * @type {?}
     * @private
     */
    AwLinkedObjectsDS.prototype.unpackData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUNqRyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUF1Qyw2Q0FBVTtJQUFqRDtRQUFBLHFFQW1PQztRQXROUSxpQkFBVyxHQUFHLEtBQUssQ0FBQztRQXVCbEIsa0JBQVk7Ozs7UUFBRyxVQUFDLEtBQWU7WUFDcEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDN0M7UUFDSCxDQUFDLEVBQUE7UUFFSSx3QkFBa0I7Ozs7UUFBRyxV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QyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLGlEQUFpRDtRQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFpTUgsd0JBQUM7QUFBRCxDQUFDLEFBbk9ELENBQXVDLFVBQVUsR0FtT2hEOzs7O0lBbE9DLHdDQUEyQjs7SUFFM0IsdUNBQTBCOztJQUUxQix5Q0FBNEI7O0lBRTVCLHFDQUF3Qjs7SUFFeEIsb0NBQXVCOztJQUV2Qix1Q0FBdUI7O0lBRXZCLHdDQUEyQjs7SUFFM0Isa0NBQWtCOztJQXFCaEIseUNBbUJDOztJQUVILCtDQVVDOzs7OztJQUVELHVDQTZKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7IC8vIHVzZWQgZm9yIGNoZXJyeS1waWNraW5nIG9iamVjdCBrZXlzIGZyb20gYXBwLWNvbmZpZy5qc29uXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcblxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuXG4gIHB1YmxpYyB0b3RhbE9iamVjdHM6IG51bWJlcjtcblxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcblxuICBwdWJsaWMgY29udGV4dDogc3RyaW5nO1xuXG4gIHB1YmxpYyBsb2FkZWREYXRhOiBhbnk7XG5cbiAgcHVibGljIGxvYWRpbmdEYXRhID0gZmFsc2U7XG5cbiAgcHVibGljIHBhdGhzOiBhbnk7IC8vIHVzZSBkeW5hbWljIG9iamVjdCBwYXRocyBmcm9tIGNvbmZpZ1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMucGF0aHMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgIHRoaXMudG90YWxPYmplY3RzID0gZGF0YS50b3RhbENvdW50O1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm9wdGlvbnMucGFnZSA/ICt0aGlzLm9wdGlvbnMucGFnZSA6IDE7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbiAmJiB0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwgLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5vcHRpb25zLmNvbnRleHQ7XG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7IC8vIGNoZWNrcyBpZiA8U2hvdyBNb3JlPiBidXR0b24gc2hvdWxkIGJlIGVuYWJsZWRcbiAgICB0aGlzLmxvYWRlZERhdGEubG9hZGVyRGF0YSA9IHt9O1xuICAgIHJldHVybiB0aGlzLmxvYWRlZERhdGE7XG4gIH1cblxuICAgIHB1YmxpYyBjaGVja0Zvck1vcmUgPSAoZm9yY2U/OiBib29sZWFuKSA9PiB7XG4gICAgICAvKlxuICAgICAgICBDaGVja3MgaWYgaXQgaXMgcG9zc2libGUgdG8gbG9hZCBtb3JlIGl0ZW0gcHJldmlld3MuXG4gICAgICAgIENhbiByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudCB0byBmb3JjZSB0aGUgYnV0dG9uIHRvIGJlXG4gICAgICAgIGVuYWJsZWQgb3IgZGlzYWJsZWQuIChVc2VkIHdoaWxlIGRhdGEgaXMgbG9hZGluZylcbiAgICAgICovXG4gICAgICBpZiAoIXRoaXMubG9hZGVkRGF0YS5hY3Rpb25zKSB7XG4gICAgICAgIC8vIGlmIG5vdCB1c2luZyBhY3Rpb25zLCBkb24ndCBjaGVja1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGZvcmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9ICFmb3JjZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoID49IHRoaXMudG90YWxPYmplY3RzKSB7XG4gICAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSAoaW5jb21pbmdEYXRhKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSBpbmZpbml0ZSBzY3JvbGxlciwgYWRkcyB0aGUgaW5jb21pbmdcbiAgICAgIGRhdGEgdG8gdGhlIGxpbmtlZCBvYmplY3RzIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIHRoaXMuY3VycmVudFBhZ2UgKz0gMTtcbiAgICBjb25zdCBuZXdEYXRhOiBhbnkgPSB0aGlzLnVucGFja0RhdGEoaW5jb21pbmdEYXRhLml0ZW1zUGFnaW5hdGlvbik7XG4gICAgdGhpcy5sb2FkZWREYXRhLnJlc3VsdCA9IHRoaXMubG9hZGVkRGF0YS5yZXN1bHQuY29uY2F0KG5ld0RhdGEucmVzdWx0KTtcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpO1xuICAgIHRoaXMubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zOyAvLyBhcHAtY29uZmlnLmpzb25cbiAgICBjb25zdCBwYXRocyA9IGNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpOyAvLyBpdGVtIHByZXZpZXcgZHluYW1pYyBwYXRoc1xuICAgIGNvbnN0IHsgdG90YWxDb3VudCB9ID0gZGF0YTsgLy8gdG90YWwgYW1vdW50IG9mIGl0ZW1zIGF2YWlsYWJsZSBvbiBiYWNrZW5kXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7IC8vIGN1cnJlbnQgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXM7IC8vIHBhcmVudCBsYXlvdXQgbmFtZVxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnBhZ2VTaXplOyAvLyBpdGVtcyBwZXIgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICBjb25zdCBsYWJlbHMgPSBjb25maWcuZ2V0KCdsYWJlbHMnKTtcbiAgICBjb25zdCB7IGR5bmFtaWNQYWdpbmF0aW9uIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qga2V5cyA9IGNvbmZpZyA/IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJykgOiB7fTtcbiAgICBsZXRcbiAgICAgIGxlbmd0aExpbWl0OiBudWxsO1xuICAgIGxldCByZXN1bHRzTGltaXQ6IG51bGw7XG4gICAgbGV0IGQgPSBkYXRhLml0ZW1zID8gZGF0YS5pdGVtcyA6IGRhdGEucmVsYXRlZEl0ZW1zOyAvLyBpdGVtcyB0byBpdGVyYXRlIG92ZXJcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICAvLyBkeW5hbWljIHNlYXJjaCBmb3IgbWF4LWl0ZW0tbGVuZ3RoXG4gICAgICBpZiAoY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKSkge1xuICAgICAgICBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YClbJ21heC1pdGVtLWxlbmd0aCddO1xuICAgICAgICByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApWydyZXN1bHRzLWxpbWl0J107XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlc2l6ZSBkYXRhXG4gICAgaWYgKCFkeW5hbWljUGFnaW5hdGlvbiAmJiBzaXplICYmIHBhZ2UpIHtcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoKGluZm8pID0+IGluZm8ua2V5KTtcbiAgICBkLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRGF0YSA9IGVsLml0ZW0gPyBlbC5pdGVtIDogZWw7XG5cbiAgICAgIGNvbnN0IGluZm9EYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby5kYXRhLCBpdGVtRGF0YS5maWVsZHMpO1xuICAgICAgY29uc3QgaW5mb0RhdGFJdGVtcyA9IGluZm9EYXRhXG4gICAgICAgID8gaW5mb0RhdGEuZmlsdGVyKChpbmZvKSA9PiBlbmFibGVkS2V5cy5pbmRleE9mKGluZm8ua2V5KSAhPT0gLTEpXG4gICAgICAgIDogW107XG4gICAgICBjb25zdCB0b2VEYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEudG9lLmRhdGEsIGl0ZW1EYXRhLnJlbGF0ZWRUeXBlc09mRW50aXR5KTtcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgaXRlbURhdGEuYnJlYWRjcnVtYnMpO1xuXG4gICAgICBpZiAoWydlbnRpdGEnLCAnc2VhcmNoJywgJ2dhbGxlcnknXS5pbmNsdWRlcyhjb250ZXh0KSkge1xuICAgICAgICBpZiAoaXRlbURhdGEudHlwZU9mRW50aXR5ICYmIGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAhPT0gJycpIHtcbiAgICAgICAgICBpbmZvRGF0YUl0ZW1zLnB1c2goeyBrZXk6ICdUaXBvIGRpIGVudGl0w6AnLCB2YWx1ZToga2V5c1tpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydzaW5ndWxhci1sYWJlbCddIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgY2xhc3NlcyA9IFsnZW50aXRhJywgJ3NlYXJjaCcsICdvZ2dldHRpLWNvbGxlZ2F0aSddLmluY2x1ZGVzKGNvbnRleHQpID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJztcbiAgICAgIGNsYXNzZXMgKz0gaXRlbURhdGEudHlwZU9mRW50aXR5ID8gYCBpcy0ke2NvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylbaXRlbURhdGEudHlwZU9mRW50aXR5XVsnY2xhc3MtbmFtZSddfWAgOiAnIGlzLW9nZ2V0dG8tY3VsdHVyYWxlJztcblxuICAgICAgLy8gZ2FsbGVyeSBjbGFzc2VzXG4gICAgICBpZiAoY29udGV4dCA9PT0gJ2dhbGxlcnknKSB7XG4gICAgICAgIGNsYXNzZXMgKz0gJyBpcy12ZXJ0aWNhbCBoYXMtaW1hZ2UnO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zaWRlciB0aGUgbGVuZ2h0IG9mIDxlbT4gdGFncyB0byBleGNsdWRlIGZyb20gY291bnRcbiAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpID8gX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5tYXRjaCgvPGVtPi9nKS5sZW5ndGggKiA5IDogMDtcblxuICAgICAgY29uc3QgaXRlbVRpdGxlID0gK3BhdGhzLnRpdGxlLm1heExlbmd0aFxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLmxlbmd0aCA+ICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzXG4gICAgICAgID8gYCR7X2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5zbGljZSgwLCArcGF0aHMudGl0bGUubWF4TGVuZ3RoICsgaGlnaGxpZ2h0cyl94oCmYFxuICAgICAgICA6IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCk7XG4gICAgICBjb25zdCBpdGVtSWQgPSBfZ2V0KGVsLCBwYXRocy5wYXlsb2FkLCBpdGVtRGF0YS5pZCk7XG4gICAgICBjb25zdCBpdGVtVHlwZSA9IGl0ZW1EYXRhLnR5cGVPZkVudGl0eTtcbiAgICAgIGNvbnN0IGl0ZW1IcmVmID0gW1xuICAgICAgICBpdGVtVHlwZSA/IGNvbmZpZy5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGggOiBjb25maWcuZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxuICAgICAgICBpdGVtSWQsXG4gICAgICAgIGhlbHBlcnMuc2x1Z2lmeShpdGVtVGl0bGUpLFxuICAgICAgXS5qb2luKCcvJyk7XG4gICAgICBsZXQgdGV4dDtcbiAgICAgIGlmICghcGF0aHMudGV4dCkge1xuICAgICAgICB0ZXh0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICtwYXRocy50ZXh0Lm1heExlbmd0aFxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLmxlbmd0aCA+ICtwYXRocy50ZXh0Lm1heExlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHRleHQgPSBgJHtfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLnNsaWNlKDAsICtwYXRocy50ZXh0Lm1heExlbmd0aCl94oCmYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICAgIGltYWdlOiBfZ2V0KGVsLCBwYXRocy5pbWFnZSwgaXRlbURhdGEuaW1hZ2UpLFxuICAgICAgICB0aXRsZTogaXRlbVRpdGxlLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBpdGVtSHJlZixcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRleHQgPT09ICdzZWFyY2gnID8gJ19ibGFuaycgOiAnX3NlbGYnXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aW9uOiB7IGtleTogZWwucmVsYXRpb25OYW1lLCB2YWx1ZTogZWwucmVsYXRpb24gfSxcbiAgICAgICAgbWV0YWRhdGE6IGluZm9EYXRhSXRlbXMubGVuZ3RoIHx8IHRvZURhdGEgPyBbXSA6IG51bGwsXG4gICAgICB9O1xuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xuICAgICAgICAgIGNsYXNzZXM6ICdhdy1pdGVtLXByZXZpZXdfbWV0YWRhdGEnLFxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcCgoaW5mb0RJdGVtKSA9PiAoe1xuICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaW5mb0RJdGVtLmtleSwgbGFiZWxzW2luZm9ESXRlbS5rZXldKSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmZvREl0ZW0udmFsdWUsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2VEYXRhKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlldy1lbnRpdGllcycsXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKCh0b2UpID0+ICh7IC8vIHBlcnNvbmE6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgIGljb246IGtleXNbX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldXG4gICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV0uaWNvblxuICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7a2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1bJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBicmVhZGNydW1ic1xuICAgICAgaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgICAgIGl0ZW0uYnJlYWRjcnVtYnMgPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLml0ZW0uYnJlYWRjcnVtYnMpLm1hcCgoY3J1bWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gX2dldChjcnVtYiwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMubGFiZWwsIGNydW1iLmxhYmVsKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgICBocmVmOiBpdGVtSHJlZixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2hvbWUnKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IGBNb3N0cmEgVHV0dGkgKCR7dG90YWxDb3VudH0pYCxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoTGltaXRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIGxhYmVsOiBgTW9zdHJhIEFsdHJpICgke3Jlc3VsdHNMaW1pdH0pYCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGZhbGxiYWNrOiBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydsaW5rZWQtb2JqZWN0cy1mYWxsYmFjayddLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xuICB9XG59XG4iXX0=