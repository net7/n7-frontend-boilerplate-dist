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
                if (['entita', 'search'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                        infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                /** @type {?} */
                var classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? " is-" + config.get('config-keys')[itemData.typeOfEntity]['class-name'] : ' is-oggetto-culturale';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUNqRyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUF1Qyw2Q0FBVTtJQUFqRDtRQUFBLHFFQThOQztRQWpOUSxpQkFBVyxHQUFHLEtBQUssQ0FBQztRQXVCcEIsa0JBQVk7Ozs7UUFBRyxVQUFDLEtBQWU7WUFDcEM7Ozs7Y0FJRTtZQUNGLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsb0NBQW9DO2dCQUNwQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDN0M7UUFDSCxDQUFDLEVBQUE7UUFFTSx3QkFBa0I7Ozs7UUFBRyxV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O1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBNExILHdCQUFDO0FBQUQsQ0FBQyxBQTlORCxDQUF1QyxVQUFVLEdBOE5oRDs7OztJQTdOQyx3Q0FBMkI7O0lBRTNCLHVDQUEwQjs7SUFFMUIseUNBQTRCOztJQUU1QixxQ0FBd0I7O0lBRXhCLG9DQUF1Qjs7SUFFdkIsdUNBQXVCOztJQUV2Qix3Q0FBMkI7O0lBRTNCLGtDQUFrQjs7SUFxQmxCLHlDQW1CQzs7SUFFRCwrQ0FVQzs7Ozs7SUFFRCx1Q0F3SkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnOyAvLyB1c2VkIGZvciBjaGVycnktcGlja2luZyBvYmplY3Qga2V5cyBmcm9tIGFwcC1jb25maWcuanNvblxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcjtcblxuICBwdWJsaWMgdG90YWxPYmplY3RzOiBudW1iZXI7XG5cbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnRleHQ6IHN0cmluZztcblxuICBwdWJsaWMgbG9hZGVkRGF0YTogYW55O1xuXG4gIHB1YmxpYyBsb2FkaW5nRGF0YSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBwYXRoczogYW55OyAvLyB1c2UgZHluYW1pYyBvYmplY3QgcGF0aHMgZnJvbSBjb25maWdcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLnBhdGhzID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpO1xuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICB0aGlzLnRvdGFsT2JqZWN0cyA9IGRhdGEudG90YWxDb3VudDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5vcHRpb25zLnBhZ2UgPyArdGhpcy5vcHRpb25zLnBhZ2UgOiAxO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24gJiYgdGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5pdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5yZWxhdGVkSXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0O1xuICAgIHRoaXMubG9hZGVkRGF0YSA9IHRoaXMudW5wYWNrRGF0YShkYXRhKTtcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpOyAvLyBjaGVja3MgaWYgPFNob3cgTW9yZT4gYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkXG4gICAgdGhpcy5sb2FkZWREYXRhLmxvYWRlckRhdGEgPSB7fTtcbiAgICByZXR1cm4gdGhpcy5sb2FkZWREYXRhO1xuICB9XG5cbiAgcHVibGljIGNoZWNrRm9yTW9yZSA9IChmb3JjZT86IGJvb2xlYW4pID0+IHtcbiAgICAvKlxuICAgICAgQ2hlY2tzIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGxvYWQgbW9yZSBpdGVtIHByZXZpZXdzLlxuICAgICAgQ2FuIHJlY2VpdmUgYSBib29sZWFuIGFyZ3VtZW50IHRvIGZvcmNlIHRoZSBidXR0b24gdG8gYmVcbiAgICAgIGVuYWJsZWQgb3IgZGlzYWJsZWQuIChVc2VkIHdoaWxlIGRhdGEgaXMgbG9hZGluZylcbiAgICAqL1xuICAgIGlmICghdGhpcy5sb2FkZWREYXRhLmFjdGlvbnMpIHtcbiAgICAgIC8vIGlmIG5vdCB1c2luZyBhY3Rpb25zLCBkb24ndCBjaGVja1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZvcmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSAhZm9yY2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA+PSB0aGlzLnRvdGFsT2JqZWN0cykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSAoaW5jb21pbmdEYXRhKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSBpbmZpbml0ZSBzY3JvbGxlciwgYWRkcyB0aGUgaW5jb21pbmdcbiAgICAgIGRhdGEgdG8gdGhlIGxpbmtlZCBvYmplY3RzIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIHRoaXMuY3VycmVudFBhZ2UgKz0gMTtcbiAgICBjb25zdCBuZXdEYXRhOiBhbnkgPSB0aGlzLnVucGFja0RhdGEoaW5jb21pbmdEYXRhLml0ZW1zUGFnaW5hdGlvbik7XG4gICAgdGhpcy5sb2FkZWREYXRhLnJlc3VsdCA9IHRoaXMubG9hZGVkRGF0YS5yZXN1bHQuY29uY2F0KG5ld0RhdGEucmVzdWx0KTtcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpO1xuICAgIHRoaXMubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zOyAvLyBhcHAtY29uZmlnLmpzb25cbiAgICBjb25zdCBwYXRocyA9IGNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpOyAvLyBpdGVtIHByZXZpZXcgZHluYW1pYyBwYXRoc1xuICAgIGNvbnN0IHsgdG90YWxDb3VudCB9ID0gZGF0YTsgLy8gdG90YWwgYW1vdW50IG9mIGl0ZW1zIGF2YWlsYWJsZSBvbiBiYWNrZW5kXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7IC8vIGN1cnJlbnQgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXM7IC8vIHBhcmVudCBsYXlvdXQgbmFtZVxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnBhZ2VTaXplOyAvLyBpdGVtcyBwZXIgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICBjb25zdCBsYWJlbHMgPSBjb25maWcuZ2V0KCdsYWJlbHMnKTtcbiAgICBjb25zdCB7IGR5bmFtaWNQYWdpbmF0aW9uIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qga2V5cyA9IGNvbmZpZyA/IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJykgOiB7fTtcbiAgICBsZXRcbiAgICAgIGxlbmd0aExpbWl0OiBudWxsO1xuICAgIGxldCByZXN1bHRzTGltaXQ6IG51bGw7XG4gICAgbGV0IGQgPSBkYXRhLml0ZW1zID8gZGF0YS5pdGVtcyA6IGRhdGEucmVsYXRlZEl0ZW1zOyAvLyBpdGVtcyB0byBpdGVyYXRlIG92ZXJcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcbiAgICAgIGlmIChjb25maWcuZ2V0KGAke2NvbnRleHR9LWxheW91dGApKSB7XG4gICAgICAgIGxlbmd0aExpbWl0ID0gY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKVsnbWF4LWl0ZW0tbGVuZ3RoJ107XG4gICAgICAgIHJlc3VsdHNMaW1pdCA9IGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YClbJ3Jlc3VsdHMtbGltaXQnXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVzaXplIGRhdGFcbiAgICBpZiAoIWR5bmFtaWNQYWdpbmF0aW9uICYmIHNpemUgJiYgcGFnZSkge1xuICAgICAgZCA9IGQuc2xpY2UocGFnZSAqIHNpemUgLSBzaXplLCBwYWdlICogc2l6ZSk7XG4gICAgfSBlbHNlIGlmIChzaXplKSB7XG4gICAgICBkID0gZC5zbGljZSgwLCBzaXplKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBlbmFibGVkS2V5cyA9IHBhdGhzLm1ldGFkYXRhLmluZm8uc2VsZWN0aW9uLm1hcCgoaW5mbykgPT4gaW5mby5rZXkpO1xuICAgIGQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1EYXRhID0gZWwuaXRlbSA/IGVsLml0ZW0gOiBlbDtcblxuICAgICAgY29uc3QgaW5mb0RhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLmRhdGEsIGl0ZW1EYXRhLmZpZWxkcyk7XG4gICAgICBjb25zdCBpbmZvRGF0YUl0ZW1zID0gaW5mb0RhdGFcbiAgICAgICAgPyBpbmZvRGF0YS5maWx0ZXIoKGluZm8pID0+IGVuYWJsZWRLZXlzLmluZGV4T2YoaW5mby5rZXkpICE9PSAtMSlcbiAgICAgICAgOiBbXTtcbiAgICAgIGNvbnN0IHRvZURhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS50b2UuZGF0YSwgaXRlbURhdGEucmVsYXRlZFR5cGVzT2ZFbnRpdHkpO1xuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBpdGVtRGF0YS5icmVhZGNydW1icyk7XG5cbiAgICAgIGlmIChbJ2VudGl0YScsICdzZWFyY2gnXS5pbmNsdWRlcyhjb250ZXh0KSkge1xuICAgICAgICBpZiAoaXRlbURhdGEudHlwZU9mRW50aXR5ICYmIGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAhPT0gJycpIHtcbiAgICAgICAgICBpbmZvRGF0YUl0ZW1zLnB1c2goeyBrZXk6ICdUaXBvIGRpIGVudGl0w6AnLCB2YWx1ZToga2V5c1tpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydzaW5ndWxhci1sYWJlbCddIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgY2xhc3NlcyA9IFsnZW50aXRhJywgJ3NlYXJjaCcsICdvZ2dldHRpLWNvbGxlZ2F0aSddLmluY2x1ZGVzKGNvbnRleHQpID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJztcbiAgICAgIGNsYXNzZXMgKz0gaXRlbURhdGEudHlwZU9mRW50aXR5ID8gYCBpcy0ke2NvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylbaXRlbURhdGEudHlwZU9mRW50aXR5XVsnY2xhc3MtbmFtZSddfWAgOiAnIGlzLW9nZ2V0dG8tY3VsdHVyYWxlJztcblxuICAgICAgLy8gY29uc2lkZXIgdGhlIGxlbmdodCBvZiA8ZW0+IHRhZ3MgdG8gZXhjbHVkZSBmcm9tIGNvdW50XG4gICAgICBjb25zdCBoaWdobGlnaHRzID0gX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5tYXRjaCgvPGVtPi9nKSA/IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubWF0Y2goLzxlbT4vZykubGVuZ3RoICogOSA6IDA7XG5cbiAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9ICtwYXRocy50aXRsZS5tYXhMZW5ndGhcbiAgICAgICAgJiYgX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5sZW5ndGggPiArcGF0aHMudGl0bGUubWF4TGVuZ3RoICsgaGlnaGxpZ2h0c1xuICAgICAgICA/IGAke19nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkuc2xpY2UoMCwgK3BhdGhzLnRpdGxlLm1heExlbmd0aCArIGhpZ2hsaWdodHMpfeKApmBcbiAgICAgICAgOiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpO1xuICAgICAgY29uc3QgaXRlbUlkID0gX2dldChlbCwgcGF0aHMucGF5bG9hZCwgaXRlbURhdGEuaWQpO1xuICAgICAgY29uc3QgaXRlbVR5cGUgPSBpdGVtRGF0YS50eXBlT2ZFbnRpdHk7XG4gICAgICBjb25zdCBpdGVtSHJlZiA9IFtcbiAgICAgICAgaXRlbVR5cGUgPyBjb25maWcuZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoIDogY29uZmlnLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcbiAgICAgICAgaXRlbUlkLFxuICAgICAgICBoZWxwZXJzLnNsdWdpZnkoaXRlbVRpdGxlKSxcbiAgICAgIF0uam9pbignLycpO1xuICAgICAgbGV0IHRleHQ7XG4gICAgICBpZiAoIXBhdGhzLnRleHQpIHtcbiAgICAgICAgdGV4dCA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICArcGF0aHMudGV4dC5tYXhMZW5ndGhcbiAgICAgICAgJiYgX2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KS5sZW5ndGggPiArcGF0aHMudGV4dC5tYXhMZW5ndGhcbiAgICAgICkge1xuICAgICAgICB0ZXh0ID0gYCR7X2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KS5zbGljZSgwLCArcGF0aHMudGV4dC5tYXhMZW5ndGgpfeKApmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gX2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIHRleHQsXG4gICAgICAgIGNsYXNzZXMsXG4gICAgICAgIGJyZWFkY3J1bWJzLFxuICAgICAgICBpbWFnZTogX2dldChlbCwgcGF0aHMuaW1hZ2UsIGl0ZW1EYXRhLmltYWdlKSxcbiAgICAgICAgdGl0bGU6IGl0ZW1UaXRsZSxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogaXRlbUhyZWYsXG4gICAgICAgICAgdGFyZ2V0OiBjb250ZXh0ID09PSAnc2VhcmNoJyA/ICdfYmxhbmsnIDogJ19zZWxmJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRhZGF0YTogaW5mb0RhdGFJdGVtcy5sZW5ndGggfHwgdG9lRGF0YSA/IFtdIDogbnVsbCxcbiAgICAgIH07XG4gICAgICAvLyBtZXRhZGF0YVxuICAgICAgaWYgKGluZm9EYXRhSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlld19tZXRhZGF0YScsXG4gICAgICAgICAgaXRlbXM6IGluZm9EYXRhSXRlbXMubWFwKChpbmZvREl0ZW0pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpbmZvREl0ZW0ua2V5LCBsYWJlbHNbaW5mb0RJdGVtLmtleV0pLFxuICAgICAgICAgICAgdmFsdWU6IGluZm9ESXRlbS52YWx1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRvZURhdGEpIHtcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5wdXNoKHtcbiAgICAgICAgICBjbGFzc2VzOiAnYXctaXRlbS1wcmV2aWV3LWVudGl0aWVzJyxcbiAgICAgICAgICBpdGVtczogdG9lRGF0YS5tYXAoKHRvZSkgPT4gKHsgLy8gcGVyc29uYTogNiwgT3JnYW5peno6IDEyLCBMdW9naGk6IDIsIENvbmNldHRpOiAzMlxuICAgICAgICAgICAgdmFsdWU6IF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UudmFsdWUsIHRvZS5jb3VudCksXG4gICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgaWNvbjoga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1cbiAgICAgICAgICAgICAgPyBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXS5pY29uXG4gICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXVsnY2xhc3MtbmFtZSddfWAsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGJyZWFkY3J1bWJzXG4gICAgICBpZiAoYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgaXRlbS5icmVhZGNydW1icyA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgICBpdGVtczogX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgZWwuaXRlbS5icmVhZGNydW1icykubWFwKChjcnVtYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBfZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5sYWJlbCwgY3J1bWIubGFiZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIGlmIChjb250ZXh0ID09PSAnaG9tZScpIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogYE1vc3RyYSBUdXR0aSAoJHt0b3RhbENvdW50fSlgLFxuICAgICAgICB9LFxuICAgICAgICBsZW5ndGhMaW1pdFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgbGFiZWw6IGBNb3N0cmEgQWx0cmkgKCR7cmVzdWx0c0xpbWl0fSlgLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZmFsbGJhY2s6IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ2xpbmtlZC1vYmplY3RzLWZhbGxiYWNrJ10sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBwcmV2aWV3czogcmVzdWx0IH07XG4gIH1cbn1cbiJdfQ==