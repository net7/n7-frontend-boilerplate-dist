/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import * as _ from "lodash"; // used for cherry-picking object keys from app-config.json
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
              Called by button <Mostra Altri>, adds the incoming
              data to the linked objects component.
            */
            _this.currentPage += 1;
            /** @type {?} */
            var newData = _this.unpackData(incomingData.itemsPagination);
            _this.loadedData.result = _this.loadedData.result.concat(newData.result);
            _this.checkForMore();
            _this.loadedData.isLoading = false;
        });
        _this.makePagination = (/**
         * @param {?} totalPages
         * @param {?} currentPage
         * @return {?}
         */
        function (totalPages, currentPage) {
            /*
                  Called by this.unpackData() when this.options.page is defined.
                  Returns the data for <n7-pagination> component.
                */
            /** @type {?} */
            var result = []
            // always push the first page
            ;
            // always push the first page
            result.push({
                text: '1',
                payload: 'page-1',
                classes: currentPage == 1 ? 'is-active' : ''
            });
            for (var i = 1; i < totalPages; i++) {
                result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
            }
            return result;
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
            size = _this.pageSize // items per page (if using pagination)
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
            function (el) {
                /** @type {?} */
                var item = {
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
                            function (value) { return ({
                                label: paths.metadata.info.customLabel ? paths.metadata.info.customLabel : null,
                                value: value
                            }); }))
                        } : {},
                        {
                            classes: 'n7-objects__metadata-linked',
                            items: _.get(el, paths.metadata.toe.data, el.relatedTypesOfEntity).map((/**
                             * @param {?} toe
                             * @return {?}
                             */
                            function (toe) {
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
                        function (crumb) {
                            return {
                                label: _.get(crumb, paths.metadata.breadcrumbs.label, crumb.label),
                                payload: _.get(crumb, paths.metadata.breadcrumbs.payload, crumb.link),
                            };
                        }))
                    };
                }
                result.push(item);
            }));
            if (_this.options.pagination) { // if I'm on a page, render pagination data.
                // if I'm on a page, render pagination data.
                /** @type {?} */
                var sizeOptions = [10, 25, 50];
                return {
                    pagination: {
                        first: { payload: "goto-" + 1, classes: page == 1 ? 'is-disabled' : '' },
                        prev: { payload: "goto-" + (page - 1), classes: page == 1 ? 'is-disabled' : '' },
                        next: { payload: "goto-" + (page + 1), classes: page == totalPages ? 'is-disabled' : '' },
                        last: { payload: "goto-" + totalPages, classes: page == totalPages ? 'is-disabled' : '' },
                        links: _this.makePagination(totalPages, page),
                        select: {
                            label: 'Numero di risultati',
                            options: sizeOptions.map((/**
                             * @param {?} o
                             * @return {?}
                             */
                            function (o) {
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
                };
            }
            return { previews: result };
        });
        return _this;
    }
    // public paths: any = this.options.paths // use dynamic object paths from config
    // public paths: any = this.options.paths // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwLinkedObjectsDS.prototype.transform = 
    // public paths: any = this.options.paths // use dynamic object paths from config
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDLENBQUMsMkRBQTJEOztBQUV4Rjs7O0lBQXVDLDZDQUFVO0lBQWpEO1FBQUEscUVBNk1DO1FBck1RLGlCQUFXLEdBQVksS0FBSyxDQUFBO1FBbUI1QixrQkFBWTs7OztRQUFHLFVBQUMsS0FBZTtZQUNwQzs7OztjQUlFO1lBQ0YsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUM1QixvQ0FBb0M7Z0JBQ3BDLE9BQU07YUFDUDtZQUNELElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUE7Z0JBQzVDLE9BQU07YUFDUDtZQUNELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7YUFDM0M7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTthQUM1QztZQUNELE9BQU07UUFDUixDQUFDLEVBQUE7UUFFTSx3QkFBa0I7Ozs7UUFBRyxVQUFBLFlBQVk7WUFDdEM7OztjQUdFO1lBQ0YsS0FBSSxDQUFD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QUFDO0lBb0xILHdCQUFDO0FBQUQsQ0FBQyxBQTdNRCxDQUF1QyxVQUFVLEdBNk1oRDs7Ozs7SUEzTUMsd0NBQTBCOztJQUMxQix1Q0FBeUI7O0lBQ3pCLHlDQUEyQjs7SUFDM0IscUNBQXVCOztJQUN2QixvQ0FBc0I7O0lBQ3RCLHVDQUFzQjs7SUFDdEIsd0NBQW1DOztJQW1CbkMseUNBb0JDOztJQUVELCtDQVVDOztJQUVELDJDQWdCQzs7Ozs7SUFFRCx1Q0E2SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7IC8vIHVzZWQgZm9yIGNoZXJyeS1waWNraW5nIG9iamVjdCBrZXlzIGZyb20gYXBwLWNvbmZpZy5qc29uXG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyXG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXJcbiAgcHVibGljIHRvdGFsT2JqZWN0czogbnVtYmVyXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyXG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmdcbiAgcHVibGljIGxvYWRlZERhdGE6IGFueVxuICBwdWJsaWMgbG9hZGluZ0RhdGE6IGJvb2xlYW4gPSBmYWxzZVxuICAvLyBwdWJsaWMgcGF0aHM6IGFueSA9IHRoaXMub3B0aW9ucy5wYXRocyAvLyB1c2UgZHluYW1pYyBvYmplY3QgcGF0aHMgZnJvbSBjb25maWdcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemVcbiAgICB0aGlzLnRvdGFsT2JqZWN0cyA9IGRhdGEudG90YWxDb3VudFxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm9wdGlvbnMucGFnZSA/IDxudW1iZXI+dGhpcy5vcHRpb25zLnBhZ2UgOiAxXG4gICAgaWYgKGRhdGEuaXRlbXMpIHtcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLml0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpXG4gICAgfSBlbHNlIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEucmVsYXRlZEl0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0XG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpXG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKSAvLyBjaGVja3MgaWYgPFNob3cgTW9yZT4gYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkXG4gICAgdGhpcy5sb2FkZWREYXRhLmxvYWRlckRhdGEgPSB7fVxuICAgIHJldHVybiB0aGlzLmxvYWRlZERhdGFcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0Zvck1vcmUgPSAoZm9yY2U/OiBib29sZWFuKSA9PiB7XG4gICAgLypcbiAgICAgIENoZWNrcyBpZiBpdCBpcyBwb3NzaWJsZSB0byBsb2FkIG1vcmUgaXRlbSBwcmV2aWV3cy5cbiAgICAgIENhbiByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudCB0byBmb3JjZSB0aGUgYnV0dG9uIHRvIGJlXG4gICAgICBlbmFibGVkIG9yIGRpc2FibGVkLiAoVXNlZCB3aGlsZSBkYXRhIGlzIGxvYWRpbmcpXG4gICAgKi9cbiAgICBpZiAoIXRoaXMubG9hZGVkRGF0YS5hY3Rpb25zKSB7XG4gICAgICAvLyBpZiBub3QgdXNpbmcgYWN0aW9ucywgZG9uJ3QgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodHlwZW9mIGZvcmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSAhZm9yY2VcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggPj0gdGhpcy50b3RhbE9iamVjdHMpIHtcbiAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgcHVibGljIGhhbmRsZUluY29taW5nRGF0YSA9IGluY29taW5nRGF0YSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSBidXR0b24gPE1vc3RyYSBBbHRyaT4sIGFkZHMgdGhlIGluY29taW5nXG4gICAgICBkYXRhIHRvIHRoZSBsaW5rZWQgb2JqZWN0cyBjb21wb25lbnQuXG4gICAgKi9cbiAgICB0aGlzLmN1cnJlbnRQYWdlICs9IDFcbiAgICBsZXQgbmV3RGF0YTogYW55ID0gdGhpcy51bnBhY2tEYXRhKGluY29taW5nRGF0YS5pdGVtc1BhZ2luYXRpb24pXG4gICAgdGhpcy5sb2FkZWREYXRhLnJlc3VsdCA9IHRoaXMubG9hZGVkRGF0YS5yZXN1bHQuY29uY2F0KG5ld0RhdGEucmVzdWx0KVxuICAgIHRoaXMuY2hlY2tGb3JNb3JlKClcbiAgICB0aGlzLmxvYWRlZERhdGEuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBtYWtlUGFnaW5hdGlvbiA9ICh0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgdGhpcy51bnBhY2tEYXRhKCkgd2hlbiB0aGlzLm9wdGlvbnMucGFnZSBpcyBkZWZpbmVkLlxuICAgICAgUmV0dXJucyB0aGUgZGF0YSBmb3IgPG43LXBhZ2luYXRpb24+IGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGxldCByZXN1bHQgPSBbXVxuICAgIC8vIGFsd2F5cyBwdXNoIHRoZSBmaXJzdCBwYWdlXG4gICAgcmVzdWx0LnB1c2goe1xuICAgICAgdGV4dDogJzEnLFxuICAgICAgcGF5bG9hZDogJ3BhZ2UtMScsXG4gICAgICBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PSAxID8gJ2lzLWFjdGl2ZScgOiAnJ1xuICAgIH0pXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKHsgdGV4dDogU3RyaW5nKGkgKyAxKSwgcGF5bG9hZDogJ3BhZ2UtJyArIFN0cmluZyhpICsgMSksIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyB9KVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBwcml2YXRlIHVucGFja0RhdGEgPSBkYXRhID0+IHtcbiAgICAvKlxuICAgICAgRHluYW1pY2FsbHkgcmV0dXJucyB0aGUgZGF0YSBvYmplY3QgZm9yIGVhY2ggSFRNTCBjb21wb25lbnRcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcHJldmlld3M6IFsgYnJlYWRjcnVtYnM6IHsgaXRlbXNbXSB9LCBjbGFzc2VzLCBpbWFnZSwgbWV0YWRhdGEsIHBheWxvYWQsIHRpdGxlIF0sXG4gICAgICAgIHBhZ2luYXRpb246IHsgZmlyc3QsIGxhc3QsIGxpbmtzLCBuZXh0LCBwcmV2LCBzZWxlY3QgfVxuICAgICAgfVxuICAgICovXG4gICAgY29uc3RcbiAgICAgIGNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWcsICAgICAgIC8vIGFwcC1jb25maWcuanNvblxuICAgICAgcGF0aHMgPSBjb25maWcuZ2V0KCdpdGVtLXByZXZpZXcnKSwgLy8gaXRlbSBwcmV2aWV3IGR5bmFtaWMgcGF0aHNcbiAgICAgIHRvdGFsQ291bnQgPSBkYXRhLnRvdGFsQ291bnQsICAgICAgIC8vIHRvdGFsIGFtb3VudCBvZiBpdGVtcyBhdmFpbGFibGUgb24gYmFja2VuZFxuICAgICAgdG90YWxQYWdlcyA9IHRoaXMudG90YWxQYWdlcywgICAgICAgLy8gY2FsY3VsYXRlZCBudW1iZXIgb2YgcGFnZXNcbiAgICAgIHBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlLCAgICAgICAgICAgIC8vIGN1cnJlbnQgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcbiAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQsICAgICAgICAgICAgIC8vIHBhcmVudCBsYXlvdXQgbmFtZVxuICAgICAgc2l6ZSA9IHRoaXMucGFnZVNpemUgICAgICAgICAgICAgICAgLy8gaXRlbXMgcGVyIHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgdmFyXG4gICAgICBkID0gZGF0YS5pdGVtcyA/IGRhdGEuaXRlbXMgOiBkYXRhLnJlbGF0ZWRJdGVtcyAgICAgICAgICAgICAgICAvLyBpdGVtcyB0byBpdGVyYXRlIG92ZXJcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHZhciBrZXlzID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKVxuICAgICAgLy8gZHluYW1pYyBzZWFyY2ggZm9yIG1heC1pdGVtLWxlbmd0aFxuICAgICAgaWYgKGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JykpIHtcbiAgICAgICAgdmFyIGxlbmd0aExpbWl0ID0gY29uZmlnLmdldChjb250ZXh0ICsgJy1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ11cbiAgICAgICAgdmFyIHJlc3VsdHNMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXVxuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXNpemUgZGF0YVxuICAgIGlmIChzaXplICYmIHBhZ2UpIHtcbiAgICAgIGQgPSBkLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpXG4gICAgfSBlbHNlIGlmIChzaXplKSB7XG4gICAgICBkID0gZC5zbGljZSgwLCBzaXplKVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIGQuZm9yRWFjaChlbCA9PiB7XG4gICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgaW1hZ2U6IF8uZ2V0KGVsLCBwYXRocy5pbWFnZSwgZWwuaW1hZ2UpLFxuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIG1heCBzdHJpbmcgbGVuZ3RoIGluIGNvbmZpZywgdXNlIGl0XG4gICAgICAgICAgTnVtYmVyKHBhdGhzLnRpdGxlLm1heExlbmd0aCkgJiYgXy5nZXQoZWwsIHBhdGhzLnRpdGxlLCBlbC5pdGVtLmxhYmVsKS5sZW5ndGggPiBOdW1iZXIocGF0aHMudGl0bGUubWF4TGVuZ3RoKSA/XG4gICAgICAgICAgICBfLmdldChlbCwgcGF0aHMudGl0bGUsIGVsLml0ZW0ubGFiZWwpLnNsaWNlKDAsIE51bWJlcihwYXRocy50aXRsZS5tYXhMZW5ndGgpKSArICfigKYnIDpcbiAgICAgICAgICAgIF8uZ2V0KGVsLCBwYXRocy50aXRsZSwgZWwuaXRlbS5sYWJlbCksXG4gICAgICAgIHRleHQ6XG4gICAgICAgICAgTnVtYmVyKHBhdGhzLnRleHQubWF4TGVuZ3RoKSAmJiBfLmdldChlbCwgcGF0aHMudGV4dC5kYXRhLCBlbC5pdGVtLnRleHQpLmxlbmd0aCA+IE51bWJlcihwYXRocy50ZXh0Lm1heExlbmd0aCkgP1xuICAgICAgICAgICAgXy5nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgZWwuaXRlbS50ZXh0KS5zbGljZSgwLCBOdW1iZXIocGF0aHMudGV4dC5tYXhMZW5ndGgpKSArICfigKYnIDpcbiAgICAgICAgICAgIF8uZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGVsLml0ZW0udGV4dCksXG4gICAgICAgIHBheWxvYWQ6IF8uZ2V0KGVsLCBwYXRocy5wYXlsb2FkLCBlbC5pdGVtLmlkKSxcbiAgICAgICAgY2xhc3NlczogWydlbnRpdGEnLCAnc2VhcmNoJ10uaW5jbHVkZXMoY29udGV4dCkgPyAnaXMtZnVsbHdpZHRoJyA6ICcnLFxuICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgIF8uZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5pbmZvLnZhbHVlLCBlbC5pdGVtLmluZm8pID8ge1xuICAgICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWFydGlzdCcsXG4gICAgICAgICAgICBpdGVtczogXy5nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmluZm8udmFsdWUsIGVsLml0ZW0uaW5mbykubWFwKHZhbHVlID0+ICh7XG4gICAgICAgICAgICAgIGxhYmVsOiBwYXRocy5tZXRhZGF0YS5pbmZvLmN1c3RvbUxhYmVsID8gcGF0aHMubWV0YWRhdGEuaW5mby5jdXN0b21MYWJlbCA6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9IDoge30sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgICBpdGVtczogXy5nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLnRvZS5kYXRhLCBlbC5yZWxhdGVkVHlwZXNPZkVudGl0eSkubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IC8vIHBlcnNvbmE6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXy5nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UudmFsdWUsIHRvZS5jb3VudCksXG4gICAgICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgICAgICBpY29uOiBrZXlzW18uZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV0gPyBrZXlzW18uZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV0uaWNvbiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogJ2NvbG9yLScgKyBfLmdldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgICBpZiAoXy5nZXQoZWwsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmRhdGEsIGVsLmJyZWFkY3J1bWJzKSkge1xuICAgICAgICBpdGVtWydicmVhZGNydW1icyddID0geyAvLyBuNy1icmVhZGNydW1icyB1c2VzIHRoaXMgYXMgaXQncyBvd24gZGF0YVxuICAgICAgICAgIGl0ZW1zOiBfLmdldChlbCwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMuZGF0YSwgZWwuYnJlYWRjcnVtYnMpLm1hcChjcnVtYiA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBsYWJlbDogXy5nZXQoY3J1bWIsIHBhdGhzLm1ldGFkYXRhLmJyZWFkY3J1bWJzLmxhYmVsLCBjcnVtYi5sYWJlbCksXG4gICAgICAgICAgICAgIHBheWxvYWQ6IF8uZ2V0KGNydW1iLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5wYXlsb2FkLCBjcnVtYi5saW5rKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYWdpbmF0aW9uKSB7IC8vIGlmIEknbSBvbiBhIHBhZ2UsIHJlbmRlciBwYWdpbmF0aW9uIGRhdGEuXG4gICAgICBsZXQgc2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBmaXJzdDogeyBwYXlsb2FkOiBgZ290by0kezF9YCwgY2xhc3NlczogcGFnZSA9PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICAgICAgcHJldjogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgLSAxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gMSA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgICAgIG5leHQ6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlICsgMX1gLCBjbGFzc2VzOiBwYWdlID09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgICAgICBsYXN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7dG90YWxQYWdlc31gLCBjbGFzc2VzOiBwYWdlID09IHRvdGFsUGFnZXMgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgICAgICBsaW5rczogdGhpcy5tYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAobyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogbyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbyA9PSBzaXplLFxuICAgICAgICAgICAgICAgIC8vIGRpc2FibGVzIG9wdGlvbnMgZ3JlYXRlciB0aGFuIHRvdGFsIGl0ZW1zXG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ6IG8gPiB0b3RhbFBhZ2VzKnNpemVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwYXlsb2FkOiAnc2VsZWN0LXNpemUnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3czogcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb250ZXh0ID09PSAnaG9tZScpIHtcbiAgICAgIGxldCBhY3Rpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdNb3N0cmEgVHV0dGkgKCcgKyB0b3RhbENvdW50ICsgJyknXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aExpbWl0ID9cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ01vc3RyYSBBbHRyaSAoJyArIHJlc3VsdHNMaW1pdCArICcpJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgIF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xuICB9XG59Il19