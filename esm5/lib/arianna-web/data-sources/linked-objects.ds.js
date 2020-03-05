/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/linked-objects.ds.ts
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
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    AwLinkedObjectsDS.prototype._getPaginationAnchor = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        var _a = this.options.paginationParams, href = _a.href, queryParams = _a.queryParams;
        return {
            href: queryParams ? href : href + page,
            queryParams: queryParams ? tslib_1.__assign({}, queryParams, { page: page }) : null,
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQyxDQUFDLDJEQUEyRDs7QUFDakcsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBdUMsNkNBQVU7SUFBakQ7UUFBQSxxRUF3T0M7UUEzTlEsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUF1QnBCLGtCQUFZOzs7O1FBQUcsVUFBQyxLQUFlO1lBQ3BDOzs7O2NBSUU7WUFDRixJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLG9DQUFvQztnQkFDcEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTzthQUNSO1lBQ0QsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxFQUFBO1FBRU0sd0JBQWtCOzs7O1FBQUcs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SSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsaURBQWlEO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBNExPLGdEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsSUFBSTtRQUN6QixJQUFBLGtDQUFxRCxFQUFuRCxjQUFJLEVBQUUsNEJBQTZDO1FBQzNELE9BQU87WUFDTCxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ3RDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxzQkFDckIsV0FBVyxJQUNkLElBQUksTUFBQSxJQUNKLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUF4T0QsQ0FBdUMsVUFBVSxHQXdPaEQ7Ozs7SUF2T0Msd0NBQTJCOztJQUUzQix1Q0FBMEI7O0lBRTFCLHlDQUE0Qjs7SUFFNUIscUNBQXdCOztJQUV4QixvQ0FBdUI7O0lBRXZCLHVDQUF1Qjs7SUFFdkIsd0NBQTJCOztJQUUzQixrQ0FBa0I7O0lBcUJsQix5Q0FtQkM7O0lBRUQsK0NBVUM7Ozs7O0lBRUQsdUNBdUpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnOyAvLyB1c2VkIGZvciBjaGVycnktcGlja2luZyBvYmplY3Qga2V5cyBmcm9tIGFwcC1jb25maWcuanNvblxyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHRvdGFsT2JqZWN0czogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnRleHQ6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGxvYWRlZERhdGE6IGFueTtcclxuXHJcbiAgcHVibGljIGxvYWRpbmdEYXRhID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwYXRoczogYW55OyAvLyB1c2UgZHluYW1pYyBvYmplY3QgcGF0aHMgZnJvbSBjb25maWdcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICB0aGlzLnBhdGhzID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpO1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xyXG4gICAgdGhpcy50b3RhbE9iamVjdHMgPSBkYXRhLnRvdGFsQ291bnQ7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5vcHRpb25zLnBhZ2UgPyArdGhpcy5vcHRpb25zLnBhZ2UgOiAxO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbiAmJiB0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24udG90YWwpIHtcclxuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCAvIHRoaXMucGFnZVNpemUpO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLml0ZW1zKSB7XHJcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5yZWxhdGVkSXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLm9wdGlvbnMuY29udGV4dDtcclxuICAgIHRoaXMubG9hZGVkRGF0YSA9IHRoaXMudW5wYWNrRGF0YShkYXRhKTtcclxuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7IC8vIGNoZWNrcyBpZiA8U2hvdyBNb3JlPiBidXR0b24gc2hvdWxkIGJlIGVuYWJsZWRcclxuICAgIHRoaXMubG9hZGVkRGF0YS5sb2FkZXJEYXRhID0ge307XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrRm9yTW9yZSA9IChmb3JjZT86IGJvb2xlYW4pID0+IHtcclxuICAgIC8qXHJcbiAgICAgIENoZWNrcyBpZiBpdCBpcyBwb3NzaWJsZSB0byBsb2FkIG1vcmUgaXRlbSBwcmV2aWV3cy5cclxuICAgICAgQ2FuIHJlY2VpdmUgYSBib29sZWFuIGFyZ3VtZW50IHRvIGZvcmNlIHRoZSBidXR0b24gdG8gYmVcclxuICAgICAgZW5hYmxlZCBvciBkaXNhYmxlZC4gKFVzZWQgd2hpbGUgZGF0YSBpcyBsb2FkaW5nKVxyXG4gICAgKi9cclxuICAgIGlmICghdGhpcy5sb2FkZWREYXRhLmFjdGlvbnMpIHtcclxuICAgICAgLy8gaWYgbm90IHVzaW5nIGFjdGlvbnMsIGRvbid0IGNoZWNrXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZm9yY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gIWZvcmNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggPj0gdGhpcy50b3RhbE9iamVjdHMpIHtcclxuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSAoaW5jb21pbmdEYXRhKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBDYWxsZWQgYnkgaW5maW5pdGUgc2Nyb2xsZXIsIGFkZHMgdGhlIGluY29taW5nXHJcbiAgICAgIGRhdGEgdG8gdGhlIGxpbmtlZCBvYmplY3RzIGNvbXBvbmVudC5cclxuICAgICovXHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlICs9IDE7XHJcbiAgICBjb25zdCBuZXdEYXRhOiBhbnkgPSB0aGlzLnVucGFja0RhdGEoaW5jb21pbmdEYXRhLml0ZW1zUGFnaW5hdGlvbik7XHJcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpO1xyXG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTtcclxuICAgIHRoaXMubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBEeW5hbWljYWxseSByZXR1cm5zIHRoZSBkYXRhIG9iamVjdCBmb3IgZWFjaCBIVE1MIGNvbXBvbmVudFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJldmlld3M6IFsgYnJlYWRjcnVtYnM6IHsgaXRlbXNbXSB9LCBjbGFzc2VzLCBpbWFnZSwgbWV0YWRhdGEsIHBheWxvYWQsIHRpdGxlIF0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjogeyBmaXJzdCwgbGFzdCwgbGlua3MsIG5leHQsIHByZXYsIHNlbGVjdCB9XHJcbiAgICAgIH1cclxuICAgICovXHJcbiAgICBjb25zdFxyXG4gICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zOyAvLyBhcHAtY29uZmlnLmpzb25cclxuICAgIGNvbnN0IHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7IC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXHJcbiAgICBjb25zdCB7IHRvdGFsQ291bnQgfSA9IGRhdGE7IC8vIHRvdGFsIGFtb3VudCBvZiBpdGVtcyBhdmFpbGFibGUgb24gYmFja2VuZFxyXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7IC8vIGN1cnJlbnQgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcclxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpczsgLy8gcGFyZW50IGxheW91dCBuYW1lXHJcbiAgICBjb25zdCBzaXplID0gdGhpcy5wYWdlU2l6ZTsgLy8gaXRlbXMgcGVyIHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXHJcbiAgICBjb25zdCBsYWJlbHMgPSBjb25maWcuZ2V0KCdsYWJlbHMnKTtcclxuICAgIGNvbnN0IHsgZHluYW1pY1BhZ2luYXRpb24gfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGtleXMgPSBjb25maWcgPyBjb25maWcuZ2V0KCdjb25maWcta2V5cycpIDoge307XHJcbiAgICBsZXRcclxuICAgICAgbGVuZ3RoTGltaXQ6IG51bGw7XHJcbiAgICBsZXQgcmVzdWx0c0xpbWl0OiBudWxsO1xyXG4gICAgbGV0IGQgPSBkYXRhLml0ZW1zID8gZGF0YS5pdGVtcyA6IGRhdGEucmVsYXRlZEl0ZW1zOyAvLyBpdGVtcyB0byBpdGVyYXRlIG92ZXJcclxuXHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcclxuICAgICAgaWYgKGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YCkpIHtcclxuICAgICAgICBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YClbJ21heC1pdGVtLWxlbmd0aCddO1xyXG4gICAgICAgIHJlc3VsdHNMaW1pdCA9IGNvbmZpZy5nZXQoYCR7Y29udGV4dH0tbGF5b3V0YClbJ3Jlc3VsdHMtbGltaXQnXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmVzaXplIGRhdGFcclxuICAgIGlmICghZHluYW1pY1BhZ2luYXRpb24gJiYgc2l6ZSAmJiBwYWdlKSB7XHJcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xyXG4gICAgfSBlbHNlIGlmIChzaXplKSB7XHJcbiAgICAgIGQgPSBkLnNsaWNlKDAsIHNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoKGluZm8pID0+IGluZm8ua2V5KTtcclxuICAgIGQuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgY29uc3QgaXRlbURhdGEgPSBlbC5pdGVtID8gZWwuaXRlbSA6IGVsO1xyXG5cclxuICAgICAgY29uc3QgaW5mb0RhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLmRhdGEsIGl0ZW1EYXRhLmZpZWxkcyk7XHJcbiAgICAgIGNvbnN0IGluZm9EYXRhSXRlbXMgPSBpbmZvRGF0YVxyXG4gICAgICAgID8gaW5mb0RhdGEuZmlsdGVyKChpbmZvKSA9PiBlbmFibGVkS2V5cy5pbmRleE9mKGluZm8ua2V5KSAhPT0gLTEpXHJcbiAgICAgICAgOiBbXTtcclxuICAgICAgY29uc3QgdG9lRGF0YSA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLnRvZS5kYXRhLCBpdGVtRGF0YS5yZWxhdGVkVHlwZXNPZkVudGl0eSk7XHJcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgaXRlbURhdGEuYnJlYWRjcnVtYnMpO1xyXG5cclxuICAgICAgaWYgKFsnZW50aXRhJywgJ3NlYXJjaCddLmluY2x1ZGVzKGNvbnRleHQpKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAmJiBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICBpbmZvRGF0YUl0ZW1zLnB1c2goeyBrZXk6ICdUaXBvIGRpIGVudGl0w6AnLCB2YWx1ZToga2V5c1tpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydzaW5ndWxhci1sYWJlbCddIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgY2xhc3NlcyA9IFsnZW50aXRhJywgJ3NlYXJjaCcsICdvZ2dldHRpLWNvbGxlZ2F0aSddLmluY2x1ZGVzKGNvbnRleHQpID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJztcclxuICAgICAgY2xhc3NlcyArPSBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgPyBgIGlzLSR7Y29uZmlnLmdldCgnY29uZmlnLWtleXMnKVtpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydjbGFzcy1uYW1lJ119YCA6ICcgaXMtb2dnZXR0by1jdWx0dXJhbGUnO1xyXG5cclxuICAgICAgLy8gY29uc2lkZXIgdGhlIGxlbmdodCBvZiA8ZW0+IHRhZ3MgdG8gZXhjbHVkZSBmcm9tIGNvdW50XHJcbiAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpID8gX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5tYXRjaCgvPGVtPi9nKS5sZW5ndGggKiA5IDogMDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9ICtwYXRocy50aXRsZS5tYXhMZW5ndGhcclxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLmxlbmd0aCA+ICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzXHJcbiAgICAgICAgPyBgJHtfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLnNsaWNlKDAsICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzKX3igKZgXHJcbiAgICAgICAgOiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpO1xyXG4gICAgICBjb25zdCBpdGVtSWQgPSBfZ2V0KGVsLCBwYXRocy5wYXlsb2FkLCBpdGVtRGF0YS5pZCk7XHJcbiAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbURhdGEudHlwZU9mRW50aXR5O1xyXG4gICAgICBjb25zdCBpdGVtSHJlZiA9IFtcclxuICAgICAgICBpdGVtVHlwZSA/IGNvbmZpZy5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGggOiBjb25maWcuZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgIGl0ZW1JZCxcclxuICAgICAgICBoZWxwZXJzLnNsdWdpZnkoaXRlbVRpdGxlKSxcclxuICAgICAgXS5qb2luKCcvJyk7XHJcbiAgICAgIGxldCB0ZXh0O1xyXG4gICAgICBpZiAoIXBhdGhzLnRleHQpIHtcclxuICAgICAgICB0ZXh0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICArcGF0aHMudGV4dC5tYXhMZW5ndGhcclxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLmxlbmd0aCA+ICtwYXRocy50ZXh0Lm1heExlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICB0ZXh0ID0gYCR7X2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KS5zbGljZSgwLCArcGF0aHMudGV4dC5tYXhMZW5ndGgpfeKApmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGV4dCA9IF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGNsYXNzZXMsXHJcbiAgICAgICAgYnJlYWRjcnVtYnMsXHJcbiAgICAgICAgaW1hZ2U6IF9nZXQoZWwsIHBhdGhzLmltYWdlLCBpdGVtRGF0YS5pbWFnZSksXHJcbiAgICAgICAgdGl0bGU6IGl0ZW1UaXRsZSxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0YWRhdGE6IGluZm9EYXRhSXRlbXMubGVuZ3RoIHx8IHRvZURhdGEgPyBbXSA6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIG1ldGFkYXRhXHJcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnYXctaXRlbS1wcmV2aWV3X21ldGFkYXRhJyxcclxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcCgoaW5mb0RJdGVtKSA9PiAoe1xyXG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpbmZvREl0ZW0ua2V5LCBsYWJlbHNbaW5mb0RJdGVtLmtleV0pLFxyXG4gICAgICAgICAgICB2YWx1ZTogaW5mb0RJdGVtLnZhbHVlLFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b2VEYXRhKSB7XHJcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5wdXNoKHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdhdy1pdGVtLXByZXZpZXctZW50aXRpZXMnLFxyXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKCh0b2UpID0+ICh7IC8vIHBlcnNvbmE6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcclxuICAgICAgICAgICAgdmFsdWU6IF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UudmFsdWUsIHRvZS5jb3VudCksXHJcbiAgICAgICAgICAgIC8vIGljb246ICduNy1pY29uLWJlbGwnIC8vIFRPRE86IGxpbmsgaWNvbiB0byBjb25maWcga2V5XHJcbiAgICAgICAgICAgIGljb246IGtleXNbX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldXHJcbiAgICAgICAgICAgICAgPyBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXS5pY29uXHJcbiAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7a2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1bJ2NsYXNzLW5hbWUnXX1gLFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGJyZWFkY3J1bWJzXHJcbiAgICAgIGlmIChicmVhZGNydW1icykge1xyXG4gICAgICAgIGl0ZW0uYnJlYWRjcnVtYnMgPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXHJcbiAgICAgICAgICBpdGVtczogX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgZWwuaXRlbS5icmVhZGNydW1icykubWFwKChjcnVtYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IF9nZXQoY3J1bWIsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmxhYmVsLCBjcnVtYi5sYWJlbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBpdGVtSHJlZixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xyXG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBgTW9zdHJhIFR1dHRpICgke3RvdGFsQ291bnR9KWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZW5ndGhMaW1pdFxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBgTW9zdHJhIEFsdHJpICgke3Jlc3VsdHNMaW1pdH0pYCxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSA6IG51bGwsXHJcbiAgICAgIF07XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgIGFjdGlvbnMsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBmYWxsYmFjazogY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbGlua2VkLW9iamVjdHMtZmFsbGJhY2snXSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHByZXZpZXdzOiByZXN1bHQgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25BbmNob3IocGFnZSkge1xyXG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5vcHRpb25zLnBhZ2luYXRpb25QYXJhbXM7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBocmVmOiBxdWVyeVBhcmFtcyA/IGhyZWYgOiBocmVmICsgcGFnZSxcclxuICAgICAgcXVlcnlQYXJhbXM6IHF1ZXJ5UGFyYW1zID8ge1xyXG4gICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgIH0gOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19