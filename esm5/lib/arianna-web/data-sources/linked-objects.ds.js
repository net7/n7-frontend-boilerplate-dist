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
                classes += itemData.typeOfEntity ? " is-" + itemData.typeOfEntity.replace(/ /g, '-') : " is-oggetto-culturale";
                /** @type {?} */
                var itemTitle = +paths.title.maxLength && _get(el, paths.title, itemData.label).length > +paths.title.maxLength
                    ? _get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength) + '…'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUVqRzs7O0lBQXVDLDZDQUFVO0lBQWpEO1FBQUEscUVBNE5DO1FBcE5RLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBc0JwQixrQkFBWTs7OztRQUFHLFVBQUMsS0FBZTtZQUNwQzs7OztjQUlFO1lBQ0YsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUM1QixvQ0FBb0M7Z0JBQ3BDLE9BQU87YUFDUjtZQUNELElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLE9BQU87YUFDUjtZQUNELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUM3QztZQUNELE9BQU87UUFDVCxDQUFDLEVBQUE7UUFFTSx3QkFB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QUFDLENBQUMsaURBQWlEO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBc0xPLGdEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsSUFBSTtRQUN6QixJQUFBLGtDQUFxRCxFQUFuRCxjQUFJLEVBQUUsNEJBQTZDO1FBQzNELE9BQU87WUFDTCxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ3RDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxzQkFDckIsV0FBVyxJQUNkLElBQUksRUFBRSxJQUFJLElBQ1YsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTVORCxDQUF1QyxVQUFVLEdBNE5oRDs7Ozs7SUExTkMsd0NBQTJCOztJQUMzQix1Q0FBMEI7O0lBQzFCLHlDQUE0Qjs7SUFDNUIscUNBQXdCOztJQUN4QixvQ0FBdUI7O0lBQ3ZCLHVDQUF1Qjs7SUFDdkIsd0NBQTJCOztJQUMzQixrQ0FBa0I7O0lBcUJsQix5Q0FvQkM7O0lBRUQsK0NBVUM7Ozs7O0lBRUQsdUNBZ0pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJzsgLy8gdXNlZCBmb3IgY2hlcnJ5LXBpY2tpbmcgb2JqZWN0IGtleXMgZnJvbSBhcHAtY29uZmlnLmpzb25cblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHB1YmxpYyB0b3RhbE9iamVjdHM6IG51bWJlcjtcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBsb2FkZWREYXRhOiBhbnk7XG4gIHB1YmxpYyBsb2FkaW5nRGF0YSA9IGZhbHNlO1xuICBwdWJsaWMgcGF0aHM6IGFueTsgLy8gdXNlIGR5bmFtaWMgb2JqZWN0IHBhdGhzIGZyb20gY29uZmlnXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5wYXRocyA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKTtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgdGhpcy50b3RhbE9iamVjdHMgPSBkYXRhLnRvdGFsQ291bnQ7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMub3B0aW9ucy5wYWdlID8gK3RoaXMub3B0aW9ucy5wYWdlIDogMTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uICYmIHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCkge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5pdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEuaXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEucmVsYXRlZEl0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLm9wdGlvbnMuY29udGV4dDtcbiAgICB0aGlzLmxvYWRlZERhdGEgPSB0aGlzLnVucGFja0RhdGEoZGF0YSk7XG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTsgLy8gY2hlY2tzIGlmIDxTaG93IE1vcmU+IGJ1dHRvbiBzaG91bGQgYmUgZW5hYmxlZFxuICAgIHRoaXMubG9hZGVkRGF0YS5sb2FkZXJEYXRhID0ge307XG4gICAgcmV0dXJuIHRoaXMubG9hZGVkRGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0Zvck1vcmUgPSAoZm9yY2U/OiBib29sZWFuKSA9PiB7XG4gICAgLypcbiAgICAgIENoZWNrcyBpZiBpdCBpcyBwb3NzaWJsZSB0byBsb2FkIG1vcmUgaXRlbSBwcmV2aWV3cy5cbiAgICAgIENhbiByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudCB0byBmb3JjZSB0aGUgYnV0dG9uIHRvIGJlXG4gICAgICBlbmFibGVkIG9yIGRpc2FibGVkLiAoVXNlZCB3aGlsZSBkYXRhIGlzIGxvYWRpbmcpXG4gICAgKi9cbiAgICBpZiAoIXRoaXMubG9hZGVkRGF0YS5hY3Rpb25zKSB7XG4gICAgICAvLyBpZiBub3QgdXNpbmcgYWN0aW9ucywgZG9uJ3QgY2hlY2tcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmb3JjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gIWZvcmNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggPj0gdGhpcy50b3RhbE9iamVjdHMpIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUluY29taW5nRGF0YSA9IGluY29taW5nRGF0YSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSBpbmZpbml0ZSBzY3JvbGxlciwgYWRkcyB0aGUgaW5jb21pbmdcbiAgICAgIGRhdGEgdG8gdGhlIGxpbmtlZCBvYmplY3RzIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIHRoaXMuY3VycmVudFBhZ2UgKz0gMTtcbiAgICBjb25zdCBuZXdEYXRhOiBhbnkgPSB0aGlzLnVucGFja0RhdGEoaW5jb21pbmdEYXRhLml0ZW1zUGFnaW5hdGlvbik7XG4gICAgdGhpcy5sb2FkZWREYXRhLnJlc3VsdCA9IHRoaXMubG9hZGVkRGF0YS5yZXN1bHQuY29uY2F0KG5ld0RhdGEucmVzdWx0KTtcbiAgICB0aGlzLmNoZWNrRm9yTW9yZSgpO1xuICAgIHRoaXMubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IGRhdGEgPT4ge1xuICAgIC8qXG4gICAgICBEeW5hbWljYWxseSByZXR1cm5zIHRoZSBkYXRhIG9iamVjdCBmb3IgZWFjaCBIVE1MIGNvbXBvbmVudFxuICAgICAgZGF0YToge1xuICAgICAgICBwcmV2aWV3czogWyBicmVhZGNydW1iczogeyBpdGVtc1tdIH0sIGNsYXNzZXMsIGltYWdlLCBtZXRhZGF0YSwgcGF5bG9hZCwgdGl0bGUgXSxcbiAgICAgICAgcGFnaW5hdGlvbjogeyBmaXJzdCwgbGFzdCwgbGlua3MsIG5leHQsIHByZXYsIHNlbGVjdCB9XG4gICAgICB9XG4gICAgKi9cbiAgICBjb25zdFxuICAgICAgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZywgICAgICAgLy8gYXBwLWNvbmZpZy5qc29uXG4gICAgICBwYXRocyA9IGNvbmZpZy5nZXQoJ2l0ZW0tcHJldmlldycpLCAvLyBpdGVtIHByZXZpZXcgZHluYW1pYyBwYXRoc1xuICAgICAgdG90YWxDb3VudCA9IGRhdGEudG90YWxDb3VudCwgICAgICAgLy8gdG90YWwgYW1vdW50IG9mIGl0ZW1zIGF2YWlsYWJsZSBvbiBiYWNrZW5kXG4gICAgICB0b3RhbFBhZ2VzID0gdGhpcy50b3RhbFBhZ2VzLCAgICAgICAvLyBjYWxjdWxhdGVkIG51bWJlciBvZiBwYWdlc1xuICAgICAgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2UsICAgICAgICAgICAgLy8gY3VycmVudCBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgICAgY29udGV4dCA9IHRoaXMuY29udGV4dCwgICAgICAgICAgICAgLy8gcGFyZW50IGxheW91dCBuYW1lXG4gICAgICBzaXplID0gdGhpcy5wYWdlU2l6ZSwgICAgICAgICAgICAgICAvLyBpdGVtcyBwZXIgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICAgIGxhYmVscyA9IGNvbmZpZy5nZXQoJ2xhYmVscycpLFxuICAgICAgeyBkeW5hbWljUGFnaW5hdGlvbiB9ID0gdGhpcy5vcHRpb25zLFxuICAgICAga2V5cyA9IGNvbmZpZyA/IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJykgOiB7fTtcbiAgICBsZXRcbiAgICAgIGxlbmd0aExpbWl0OiBudWxsLFxuICAgICAgcmVzdWx0c0xpbWl0OiBudWxsLFxuICAgICAgZCA9IGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zIDogZGF0YS5yZWxhdGVkSXRlbXM7IC8vIGl0ZW1zIHRvIGl0ZXJhdGUgb3ZlclxuXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgLy8gZHluYW1pYyBzZWFyY2ggZm9yIG1heC1pdGVtLWxlbmd0aFxuICAgICAgaWYgKGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JykpIHtcbiAgICAgICAgbGVuZ3RoTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydtYXgtaXRlbS1sZW5ndGgnXTtcbiAgICAgICAgcmVzdWx0c0xpbWl0ID0gY29uZmlnLmdldChjb250ZXh0ICsgJy1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXNpemUgZGF0YVxuICAgIGlmICghZHluYW1pY1BhZ2luYXRpb24gJiYgc2l6ZSAmJiBwYWdlKSB7XG4gICAgICBkID0gZC5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKTtcbiAgICB9IGVsc2UgaWYgKHNpemUpIHtcbiAgICAgIGQgPSBkLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGVuYWJsZWRLZXlzID0gcGF0aHMubWV0YWRhdGEuaW5mby5zZWxlY3Rpb24ubWFwKGluZm8gPT4gaW5mby5rZXkpO1xuICAgIGQuZm9yRWFjaChlbCA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ZW1EYXRhID0gZWwuaXRlbSA/IGVsLml0ZW0gOiBlbDtcblxuICAgICAgY29uc3QgaW5mb0RhdGEgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLmRhdGEsIGl0ZW1EYXRhLmZpZWxkcyksXG4gICAgICAgIGluZm9EYXRhSXRlbXMgPSBpbmZvRGF0YSA/IGluZm9EYXRhLmZpbHRlcihkYXRhID0+IGVuYWJsZWRLZXlzLmluZGV4T2YoZGF0YS5rZXkpICE9PSAtMSkgOiBbXSxcbiAgICAgICAgdG9lRGF0YSA9IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLnRvZS5kYXRhLCBpdGVtRGF0YS5yZWxhdGVkVHlwZXNPZkVudGl0eSksXG4gICAgICAgIGJyZWFkY3J1bWJzID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgaXRlbURhdGEuYnJlYWRjcnVtYnMpO1xuXG4gICAgICAgIGlmKCBbJ2VudGl0YScsICdzZWFyY2gnXS5pbmNsdWRlcyhjb250ZXh0KSApe1xuICAgICAgICAgIGlmKCBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgJiYgaXRlbURhdGEudHlwZU9mRW50aXR5ICE9IFwiXCIgKSB7XG4gICAgICAgICAgICBpbmZvRGF0YUl0ZW1zLnB1c2goe1wia2V5XCI6IFwiVGlwbyBkaSBlbnRpdMOgXCIsIFwidmFsdWVcIjoga2V5c1tpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydzaW5ndWxhci1sYWJlbCddfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNsYXNzZXMgPSBbJ2VudGl0YScsICdzZWFyY2gnLCAnb2dnZXR0aS1jb2xsZWdhdGknXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdpcy1mdWxsd2lkdGgnIDogJyc7XG4gICAgICAgIGNsYXNzZXMgKz0gaXRlbURhdGEudHlwZU9mRW50aXR5ID8gXCIgaXMtXCIgKyBpdGVtRGF0YS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpIDogXCIgaXMtb2dnZXR0by1jdWx0dXJhbGVcIjtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSArcGF0aHMudGl0bGUubWF4TGVuZ3RoICYmIF9nZXQoZWwsIHBhdGhzLnRpdGxlLCBpdGVtRGF0YS5sYWJlbCkubGVuZ3RoID4gK3BhdGhzLnRpdGxlLm1heExlbmd0aFxuICAgICAgICAgID8gX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5zbGljZSgwLCArcGF0aHMudGl0bGUubWF4TGVuZ3RoKSArICfigKYnXG4gICAgICAgICAgOiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLFxuICAgICAgICAgIGl0ZW1JZCA9IF9nZXQoZWwsIHBhdGhzLnBheWxvYWQsIGl0ZW1EYXRhLmlkKSxcbiAgICAgICAgICBpdGVtVHlwZSA9IGl0ZW1EYXRhLnR5cGVPZkVudGl0eSxcbiAgICAgICAgICBpdGVtSHJlZiA9IFtcbiAgICAgICAgICAgIGl0ZW1UeXBlID8gY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCA6IGNvbmZpZy5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXG4gICAgICAgICAgICBpdGVtSWQsXG4gICAgICAgICAgICBoZWxwZXJzLnNsdWdpZnkoaXRlbVRpdGxlKVxuICAgICAgICAgIF0uam9pbignLycpLFxuICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICBpbWFnZTogX2dldChlbCwgcGF0aHMuaW1hZ2UsIGl0ZW1EYXRhLmltYWdlKSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtVGl0bGUsXG4gICAgICAgICAgICB0ZXh0OiAhcGF0aHMudGV4dCA/IG51bGwgOiAvLyBtYWtlIHRleHQgYmxvY2sgKGluIGNvbmZpZykgb3B0aW9uYWxcblxuICAgICAgICAgICAgICArcGF0aHMudGV4dC5tYXhMZW5ndGggJiYgX2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KS5sZW5ndGggPiArcGF0aHMudGV4dC5tYXhMZW5ndGggP1xuICAgICAgICAgICAgICAgIF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCkuc2xpY2UoMCwgK3BhdGhzLnRleHQubWF4TGVuZ3RoKSArICfigKYnIDpcbiAgICAgICAgICAgICAgICBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcGF5bG9hZDogeyBpZDogX2dldChlbCwgcGF0aHMucGF5bG9hZCwgZWwuaXRlbS5pZCksIHR5cGU6IGVsLml0ZW0udHlwZU9mRW50aXR5LCB0aXRsZTogaXRlbVRpdGxlIH0sXG4gICAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLFxuICAgICAgICAgICAgbWV0YWRhdGE6IGluZm9EYXRhSXRlbXMubGVuZ3RoIHx8IHRvZURhdGEgPyBbXSA6IG51bGwsXG4gICAgICAgICAgICBicmVhZGNydW1iczogYnJlYWRjcnVtYnNcbiAgICAgICAgICB9O1xuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGlmIChpbmZvRGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1hcnRpc3QnLFxuICAgICAgICAgIGl0ZW1zOiBpbmZvRGF0YUl0ZW1zLm1hcChkYXRhID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShkYXRhLmtleSwgbGFiZWxzW2RhdGEua2V5XSksXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxuICAgICAgICAgIH0pKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2VEYXRhKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEucHVzaCh7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgaXRlbXM6IHRvZURhdGEubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAvLyBwZXJzb25hOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgIHZhbHVlOiBfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLnZhbHVlLCB0b2UuY291bnQpLFxuICAgICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgICBpY29uOiBrZXlzW1xuICAgICAgICAgICAgICAgIF9nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpLnJlcGxhY2UoJyAnLCAnLScpXVxuICAgICAgICAgICAgICAgID8ga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKS5yZXBsYWNlKCcgJywgJy0nKV0uaWNvblxuICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2xvci0nICsgX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSkucmVwbGFjZSgnICcsICctJylcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBicmVhZGNydW1ic1xuICAgICAgaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgICAgIGl0ZW1bJ2JyZWFkY3J1bWJzJ10gPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICAgICAgaXRlbXM6IF9nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLml0ZW0uYnJlYWRjcnVtYnMpLm1hcChjcnVtYiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IF9nZXQoY3J1bWIsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmxhYmVsLCBjcnVtYi5sYWJlbCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgICAgaHJlZjogaXRlbUhyZWZcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTW9zdHJhIFR1dHRpICgnICsgdG90YWxDb3VudCArICcpJ1xuICAgICAgICB9LFxuICAgICAgICBsZW5ndGhMaW1pdCA/XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdNb3N0cmEgQWx0cmkgKCcgKyByZXN1bHRzTGltaXQgKyAnKScsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSA6IG51bGwsXG4gICAgICBdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBmYWxsYmFjazogY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbGlua2VkLW9iamVjdHMtZmFsbGJhY2snXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvbkFuY2hvcihwYWdlKXtcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLm9wdGlvbnMucGFnaW5hdGlvblBhcmFtcztcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcXVlcnlQYXJhbXMgPyBocmVmIDogaHJlZiArIHBhZ2UsXG4gICAgICBxdWVyeVBhcmFtczogcXVlcnlQYXJhbXMgPyB7XG4gICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgICAgICBwYWdlOiBwYWdlXG4gICAgICB9IDogbnVsbFxuICAgIH07XG4gIH1cbn1cbiJdfQ==