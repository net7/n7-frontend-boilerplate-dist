/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
import { get as _get } from 'lodash'; // used for cherry-picking object keys from app-config.json
// used for cherry-picking object keys from app-config.json
var 
// used for cherry-picking object keys from app-config.json
AwLinkedObjectsDS = /** @class */ (function (_super) {
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
            return;
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
            /** @type {?} */
            var config = _this.options.config;
            /** @type {?} */
            var // app-config.json
            paths = config.get('item-preview');
            /** @type {?} */
            var // item preview dynamic paths
            totalCount = data.totalCount;
            /** @type {?} */
            var // total amount of items available on backend
            totalPages = _this.totalPages;
            /** @type {?} */
            var // calculated number of pages
            page = _this.currentPage;
            /** @type {?} */
            var // current page (if using pagination)
            context = _this.context;
            /** @type {?} */
            var // parent layout name
            size = _this.pageSize;
            /** @type {?} */
            var // items per page (if using pagination)
            labels = config.get('labels');
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
                var infoDataItems = infoData ? infoData.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return enabledKeys.indexOf(data.key) !== -1; })) : [];
                /** @type {?} */
                var toeData = _get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                /** @type {?} */
                var breadcrumbs = _get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                if (['entita', 'search'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity != "") {
                        infoDataItems.push({ "key": "Tipo di entità", "value": keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                /** @type {?} */
                var classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? ' is-' + config.get('config-keys')[itemData.typeOfEntity]['class-name'] : ' is-oggetto-culturale';
                //consider the lenght of <em> tags to exclude from count
                /** @type {?} */
                var highlights = _get(el, paths.title, itemData.label).match(/<em>/g) ? _get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                /** @type {?} */
                var itemTitle = +paths.title.maxLength && _get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                    ? _get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights) + '…'
                    : _get(el, paths.title, itemData.label);
                /** @type {?} */
                var itemId = _get(el, paths.payload, itemData.id);
                /** @type {?} */
                var itemType = itemData.typeOfEntity;
                /** @type {?} */
                var itemHref = [
                    itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                    itemId,
                    helpers.slugify(itemTitle)
                ].join('/');
                /** @type {?} */
                var item = {
                    image: _get(el, paths.image, itemData.image),
                    title: itemTitle,
                    text: !paths.text ? null : // make text block (in config) optional
                        +paths.text.maxLength && _get(el, paths.text.data, itemData.text).length > +paths.text.maxLength ?
                            _get(el, paths.text.data, itemData.text).slice(0, +paths.text.maxLength) + '…' :
                            _get(el, paths.text.data, itemData.text),
                    anchor: {
                        href: itemHref
                    },
                    // payload: { id: _get(el, paths.payload, el.item.id), type: el.item.typeOfEntity, title: itemTitle },
                    classes: classes,
                    metadata: infoDataItems.length || toeData ? [] : null,
                    breadcrumbs: breadcrumbs
                };
                // metadata
                if (infoDataItems.length) {
                    item.metadata.push({
                        classes: 'n7-objects__metadata-artist',
                        items: infoDataItems.map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) { return ({
                            label: helpers.prettifySnakeCase(data.key, labels[data.key]),
                            value: data.value
                        }); }))
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'n7-objects__metadata-linked',
                        items: toeData.map((/**
                         * @param {?} toe
                         * @return {?}
                         */
                        function (toe) {
                            return {
                                // persona: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                value: _get(toe, paths.metadata.toe.value, toe.count),
                                // icon: 'n7-icon-bell' // TODO: link icon to config key
                                icon: keys[_get(toe, paths.metadata.toe.icon, toe.type)]
                                    ? keys[_get(toe, paths.metadata.toe.icon, toe.type)].icon
                                    : '',
                                classes: 'color-' + keys[_get(toe, paths.metadata.toe.icon, toe.type)]['class-name']
                            };
                        }))
                    });
                }
                // breadcrumbs
                if (breadcrumbs) {
                    item['breadcrumbs'] = {
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
                                    href: itemHref
                                }
                            };
                        }))
                    };
                }
                result.push(item);
            }));
            if (context === 'home') {
                /** @type {?} */
                var actions = [
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
                    result: result,
                    actions: actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback']
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
            queryParams: queryParams ? tslib_1.__assign({}, queryParams, { page: page }) : null
        };
    };
    return AwLinkedObjectsDS;
}(DataSource));
// used for cherry-picking object keys from app-config.json
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUVqRzs7O0lBQXVDLDZDQUFVO0lBQWpEO1FBQUEscUVBOE5DO1FBdE5RLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBc0JwQixrQkFBWTs7OztRQUFHLFVBQUMsS0FBZTtZQUNwQzs7OztjQUlFO1lBQ0YsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUM1QixvQ0FBb0M7Z0JBQ3BDLE9BQU87YUFDUjtZQUNELElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLE9BQU87YUFDUjtZQUNELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUM3QztZQUNELE9BQU87UUFDVCxDQUFDLEVBQUE7UUFFTSx3QkFB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Q0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUF3TE8sZ0RBQW9COzs7OztJQUE1QixVQUE2QixJQUFJO1FBQ3pCLElBQUEsa0NBQXFELEVBQW5ELGNBQUksRUFBRSw0QkFBNkM7UUFDM0QsT0FBTztZQUNMLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUk7WUFDdEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLHNCQUNyQixXQUFXLElBQ2QsSUFBSSxFQUFFLElBQUksSUFDVixDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBOU5ELENBQXVDLFVBQVUsR0E4TmhEOzs7OztJQTVOQyx3Q0FBMkI7O0lBQzNCLHVDQUEwQjs7SUFDMUIseUNBQTRCOztJQUM1QixxQ0FBd0I7O0lBQ3hCLG9DQUF1Qjs7SUFDdkIsdUNBQXVCOztJQUN2Qix3Q0FBMkI7O0lBQzNCLGtDQUFrQjs7SUFxQmxCLHlDQW9CQzs7SUFFRCwrQ0FVQzs7Ozs7SUFFRCx1Q0FrSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnOyAvLyB1c2VkIGZvciBjaGVycnktcGlja2luZyBvYmplY3Qga2V5cyBmcm9tIGFwcC1jb25maWcuanNvblxuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgcHVibGljIHRvdGFsT2JqZWN0czogbnVtYmVyO1xuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiAgcHVibGljIGNvbnRleHQ6IHN0cmluZztcbiAgcHVibGljIGxvYWRlZERhdGE6IGFueTtcbiAgcHVibGljIGxvYWRpbmdEYXRhID0gZmFsc2U7XG4gIHB1YmxpYyBwYXRoczogYW55OyAvLyB1c2UgZHluYW1pYyBvYmplY3QgcGF0aHMgZnJvbSBjb25maWdcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLnBhdGhzID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpO1xuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbiAgICB0aGlzLnRvdGFsT2JqZWN0cyA9IGRhdGEudG90YWxDb3VudDtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5vcHRpb25zLnBhZ2UgPyArdGhpcy5vcHRpb25zLnBhZ2UgOiAxO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZHluYW1pY1BhZ2luYXRpb24gJiYgdGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5pdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5yZWxhdGVkSXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0O1xuICAgIHRoaXMubG9hZGVkRGF0YSA9IHRoaXMudW5wYWNrRGF0YShkYXRhKTtcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpOyAvLyBjaGVja3MgaWYgPFNob3cgTW9yZT4gYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkXG4gICAgdGhpcy5sb2FkZWREYXRhLmxvYWRlckRhdGEgPSB7fTtcbiAgICByZXR1cm4gdGhpcy5sb2FkZWREYXRhO1xuICB9XG5cbiAgcHVibGljIGNoZWNrRm9yTW9yZSA9IChmb3JjZT86IGJvb2xlYW4pID0+IHtcbiAgICAvKlxuICAgICAgQ2hlY2tzIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGxvYWQgbW9yZSBpdGVtIHByZXZpZXdzLlxuICAgICAgQ2FuIHJlY2VpdmUgYSBib29sZWFuIGFyZ3VtZW50IHRvIGZvcmNlIHRoZSBidXR0b24gdG8gYmVcbiAgICAgIGVuYWJsZWQgb3IgZGlzYWJsZWQuIChVc2VkIHdoaWxlIGRhdGEgaXMgbG9hZGluZylcbiAgICAqL1xuICAgIGlmICghdGhpcy5sb2FkZWREYXRhLmFjdGlvbnMpIHtcbiAgICAgIC8vIGlmIG5vdCB1c2luZyBhY3Rpb25zLCBkb24ndCBjaGVja1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZvcmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSAhZm9yY2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA+PSB0aGlzLnRvdGFsT2JqZWN0cykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlSW5jb21pbmdEYXRhID0gaW5jb21pbmdEYXRhID0+IHtcbiAgICAvKlxuICAgICAgQ2FsbGVkIGJ5IGluZmluaXRlIHNjcm9sbGVyLCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgdGhpcy5jdXJyZW50UGFnZSArPSAxO1xuICAgIGNvbnN0IG5ld0RhdGE6IGFueSA9IHRoaXMudW5wYWNrRGF0YShpbmNvbWluZ0RhdGEuaXRlbXNQYWdpbmF0aW9uKTtcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpO1xuICAgIHRoaXMuY2hlY2tGb3JNb3JlKCk7XG4gICAgdGhpcy5sb2FkZWREYXRhLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnBhY2tEYXRhID0gZGF0YSA9PiB7XG4gICAgLypcbiAgICAgIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByZXZpZXdzOiBbIGJyZWFkY3J1bWJzOiB7IGl0ZW1zW10gfSwgY2xhc3NlcywgaW1hZ2UsIG1ldGFkYXRhLCBwYXlsb2FkLCB0aXRsZSBdLFxuICAgICAgICBwYWdpbmF0aW9uOiB7IGZpcnN0LCBsYXN0LCBsaW5rcywgbmV4dCwgcHJldiwgc2VsZWN0IH1cbiAgICAgIH1cbiAgICAqL1xuICAgIGNvbnN0XG4gICAgICBjb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlnLCAgICAgICAvLyBhcHAtY29uZmlnLmpzb25cbiAgICAgIHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3JyksIC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXG4gICAgICB0b3RhbENvdW50ID0gZGF0YS50b3RhbENvdW50LCAgICAgICAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsUGFnZXMsICAgICAgIC8vIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBwYWdlID0gdGhpcy5jdXJyZW50UGFnZSwgICAgICAgICAgICAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgICAgICAgICAgICAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICAgIHNpemUgPSB0aGlzLnBhZ2VTaXplLCAgICAgICAgICAgICAgIC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgICAgbGFiZWxzID0gY29uZmlnLmdldCgnbGFiZWxzJyksXG4gICAgICB7IGR5bmFtaWNQYWdpbmF0aW9uIH0gPSB0aGlzLm9wdGlvbnMsXG4gICAgICBrZXlzID0gY29uZmlnID8gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKSA6IHt9O1xuICAgIGxldFxuICAgICAgbGVuZ3RoTGltaXQ6IG51bGwsXG4gICAgICByZXN1bHRzTGltaXQ6IG51bGwsXG4gICAgICBkID0gZGF0YS5pdGVtcyA/IGRhdGEuaXRlbXMgOiBkYXRhLnJlbGF0ZWRJdGVtczsgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICAvLyBkeW5hbWljIHNlYXJjaCBmb3IgbWF4LWl0ZW0tbGVuZ3RoXG4gICAgICBpZiAoY29uZmlnLmdldChjb250ZXh0ICsgJy1sYXlvdXQnKSkge1xuICAgICAgICBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddO1xuICAgICAgICByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J107XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlc2l6ZSBkYXRhXG4gICAgaWYgKCFkeW5hbWljUGFnaW5hdGlvbiAmJiBzaXplICYmIHBhZ2UpIHtcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZW5hYmxlZEtleXMgPSBwYXRocy5tZXRhZGF0YS5pbmZvLnNlbGVjdGlvbi5tYXAoaW5mbyA9PiBpbmZvLmtleSk7XG4gICAgZC5mb3JFYWNoKGVsID0+IHtcblxuICAgICAgY29uc3QgaXRlbURhdGEgPSBlbC5pdGVtID8gZWwuaXRlbSA6IGVsO1xuXG4gICAgICBjb25zdCBpbmZvRGF0YSA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmluZm8uZGF0YSwgaXRlbURhdGEuZmllbGRzKSxcbiAgICAgICAgaW5mb0RhdGFJdGVtcyA9IGluZm9EYXRhID8gaW5mb0RhdGEuZmlsdGVyKGRhdGEgPT4gZW5hYmxlZEtleXMuaW5kZXhPZihkYXRhLmtleSkgIT09IC0xKSA6IFtdLFxuICAgICAgICB0b2VEYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEudG9lLmRhdGEsIGl0ZW1EYXRhLnJlbGF0ZWRUeXBlc09mRW50aXR5KSxcbiAgICAgICAgYnJlYWRjcnVtYnMgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBpdGVtRGF0YS5icmVhZGNydW1icyk7XG5cbiAgICAgIGlmIChbJ2VudGl0YScsICdzZWFyY2gnXS5pbmNsdWRlcyhjb250ZXh0KSkge1xuICAgICAgICBpZiAoaXRlbURhdGEudHlwZU9mRW50aXR5ICYmIGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAhPSBcIlwiKSB7XG4gICAgICAgICAgaW5mb0RhdGFJdGVtcy5wdXNoKHsgXCJrZXlcIjogXCJUaXBvIGRpIGVudGl0w6BcIiwgXCJ2YWx1ZVwiOiBrZXlzW2l0ZW1EYXRhLnR5cGVPZkVudGl0eV1bJ3Npbmd1bGFyLWxhYmVsJ10gfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGNsYXNzZXMgPSBbJ2VudGl0YScsICdzZWFyY2gnLCAnb2dnZXR0aS1jb2xsZWdhdGknXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdpcy1mdWxsd2lkdGgnIDogJyc7XG4gICAgICBjbGFzc2VzICs9IGl0ZW1EYXRhLnR5cGVPZkVudGl0eSA/ICcgaXMtJyArIGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylbaXRlbURhdGEudHlwZU9mRW50aXR5XVsnY2xhc3MtbmFtZSddIDogJyBpcy1vZ2dldHRvLWN1bHR1cmFsZSc7XG5cbiAgICAgICAvL2NvbnNpZGVyIHRoZSBsZW5naHQgb2YgPGVtPiB0YWdzIHRvIGV4Y2x1ZGUgZnJvbSBjb3VudFxuICAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSAgX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5tYXRjaCgvPGVtPi9nKSA/IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubWF0Y2goLzxlbT4vZykubGVuZ3RoICogOSA6IDA7XG5cbiAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9ICtwYXRocy50aXRsZS5tYXhMZW5ndGggJiYgX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5sZW5ndGggPiArcGF0aHMudGl0bGUubWF4TGVuZ3RoICArIGhpZ2hsaWdodHNcbiAgICAgICAgPyBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLnNsaWNlKDAsICtwYXRocy50aXRsZS5tYXhMZW5ndGggICsgaGlnaGxpZ2h0cykgKyAn4oCmJ1xuICAgICAgICA6IF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCksXG4gICAgICAgIGl0ZW1JZCA9IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGl0ZW1EYXRhLmlkKSxcbiAgICAgICAgaXRlbVR5cGUgPSBpdGVtRGF0YS50eXBlT2ZFbnRpdHksXG4gICAgICAgIGl0ZW1IcmVmID0gW1xuICAgICAgICAgIGl0ZW1UeXBlID8gY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCA6IGNvbmZpZy5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXG4gICAgICAgICAgaXRlbUlkLFxuICAgICAgICAgIGhlbHBlcnMuc2x1Z2lmeShpdGVtVGl0bGUpXG4gICAgICAgIF0uam9pbignLycpLFxuICAgICAgICBpdGVtID0ge1xuICAgICAgICAgIGltYWdlOiBfZ2V0KGVsLCBwYXRocy5pbWFnZSwgaXRlbURhdGEuaW1hZ2UpLFxuICAgICAgICAgIHRpdGxlOiBpdGVtVGl0bGUsXG4gICAgICAgICAgdGV4dDogIXBhdGhzLnRleHQgPyBudWxsIDogLy8gbWFrZSB0ZXh0IGJsb2NrIChpbiBjb25maWcpIG9wdGlvbmFsXG5cbiAgICAgICAgICAgICtwYXRocy50ZXh0Lm1heExlbmd0aCAmJiBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLmxlbmd0aCA+ICtwYXRocy50ZXh0Lm1heExlbmd0aCA/XG4gICAgICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkuc2xpY2UoMCwgK3BhdGhzLnRleHQubWF4TGVuZ3RoKSArICfigKYnIDpcbiAgICAgICAgICAgICAgX2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBwYXlsb2FkOiB7IGlkOiBfZ2V0KGVsLCBwYXRocy5wYXlsb2FkLCBlbC5pdGVtLmlkKSwgdHlwZTogZWwuaXRlbS50eXBlT2ZFbnRpdHksIHRpdGxlOiBpdGVtVGl0bGUgfSxcbiAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLFxuICAgICAgICAgIG1ldGFkYXRhOiBpbmZvRGF0YUl0ZW1zLmxlbmd0aCB8fCB0b2VEYXRhID8gW10gOiBudWxsLFxuICAgICAgICAgIGJyZWFkY3J1bWJzOiBicmVhZGNydW1ic1xuICAgICAgICB9O1xuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1hcnRpc3QnLFxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcChkYXRhID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShkYXRhLmtleSwgbGFiZWxzW2RhdGEua2V5XSksXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxuICAgICAgICAgIH0pKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2VEYXRhKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAvLyBwZXJzb25hOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgICBpY29uOiBrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXVxuICAgICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV0uaWNvblxuICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2xvci0nICsga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1bJ2NsYXNzLW5hbWUnXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGJyZWFkY3J1bWJzXG4gICAgICBpZiAoYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgaXRlbVsnYnJlYWRjcnVtYnMnXSA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgICBpdGVtczogX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgZWwuaXRlbS5icmVhZGNydW1icykubWFwKGNydW1iID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gX2dldChjcnVtYiwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMubGFiZWwsIGNydW1iLmxhYmVsKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgICBocmVmOiBpdGVtSHJlZlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2hvbWUnKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdNb3N0cmEgVHV0dGkgKCcgKyB0b3RhbENvdW50ICsgJyknXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aExpbWl0ID9cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ01vc3RyYSBBbHRyaSAoJyArIHJlc3VsdHNMaW1pdCArICcpJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGZhbGxiYWNrOiBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydsaW5rZWQtb2JqZWN0cy1mYWxsYmFjayddXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBwcmV2aWV3czogcmVzdWx0IH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uQW5jaG9yKHBhZ2UpIHtcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLm9wdGlvbnMucGFnaW5hdGlvblBhcmFtcztcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcXVlcnlQYXJhbXMgPyBocmVmIDogaHJlZiArIHBhZ2UsXG4gICAgICBxdWVyeVBhcmFtczogcXVlcnlQYXJhbXMgPyB7XG4gICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgICAgICBwYWdlOiBwYWdlXG4gICAgICB9IDogbnVsbFxuICAgIH07XG4gIH1cbn1cbiJdfQ==