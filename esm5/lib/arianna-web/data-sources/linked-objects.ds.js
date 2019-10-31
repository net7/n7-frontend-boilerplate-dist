/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwLinkedObjectsDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwLinkedObjectsDS, _super);
    function AwLinkedObjectsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleShowMoreClick = (/**
         * @param {?} incomingData
         * @return {?}
         */
        function (incomingData) {
            /*
              Called by button <Mostra Altri>, adds the incoming
              data to the linked objects component.
            */
            console.log('showing more stuff');
            // TODO
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
            var d = data.items // items to iterate over
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
                    image: el.thumbnail,
                    title: 
                    // if there is a max string length in config, use it
                    lengthLimit && el.item.label.length > lengthLimit ?
                        el.item.label.slice(0, lengthLimit) + '...' : el.item.label,
                    payload: el.item.id,
                    classes: ['entita', 'search'].includes(context) ? 'is-fullwidth' : '',
                    metadata: [
                        {
                            classes: 'n7-objects__metadata-artist',
                            items: el.item.info.map((/**
                             * @param {?} __0
                             * @return {?}
                             */
                            function (_a) {
                                var value = _a.value, key = _a.key;
                                return ({
                                    label: key === 'author' ? 'Artista' : null,
                                    value: value
                                });
                            }))
                        },
                        {
                            classes: 'n7-objects__metadata-linked',
                            items: el.relatedTOEData.map((/**
                             * @param {?} toe
                             * @return {?}
                             */
                            function (toe) {
                                return {
                                    // Persone: 6, Organizz: 12, Luoghi: 2, Concetti: 32
                                    value: toe.count,
                                    // icon: 'n7-icon-bell' // TODO: link icon to config key
                                    icon: keys[toe.type.configKey].icon,
                                    classes: 'color-' + toe.type.configKey
                                };
                            }))
                        }
                    ]
                };
                if (el.breadcrumbs) {
                    item['breadcrumbs'] = {
                        // n7-breadcrumbs uses this as it's own data
                        items: el.breadcrumbs.map((/**
                         * @param {?} crumb
                         * @return {?}
                         */
                        function (crumb) {
                            return {
                                label: crumb.label,
                                payload: crumb.link,
                            };
                        }))
                    };
                }
                result.push(item);
            }));
            if (page) { // if I'm on a page, render pagination data.
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
                return {
                    result: result,
                    actions: [
                        { label: 'Mostra Tutti (' + totalCount + ')' },
                        lengthLimit ?
                            { label: 'Mostra Altri (' + resultsLimit + ')' } :
                            null,
                    ]
                };
            }
            console.log('linked objects result', result);
            return result;
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwLinkedObjectsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.pageSize = this.options.size;
        this.currentPage = (/** @type {?} */ (this.options.page));
        this.totalPages = Math.floor(data.length / this.pageSize);
        this.context = this.options.context;
        return this.unpackData(data);
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
    AwLinkedObjectsDS.prototype.pageSize;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.context;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.handleShowMoreClick;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.makePagination;
    /**
     * @type {?}
     * @private
     */
    AwLinkedObjectsDS.prototype.unpackData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXVDLDZDQUFVO0lBQWpEO1FBQUEscUVBOEpDO1FBL0lRLHlCQUFtQjs7OztRQUFHLFVBQUEsWUFBWTtZQUN2Qzs7O2NBR0U7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7WUFDakMsT0FBTztRQUNULENBQUMsRUFBQTtRQUVNLG9CQUFjOzs7OztRQUFHLFVBQUMsVUFBVSxFQUFFLFdBQVc7Ozs7OztnQkFLMUMsTUFBTSxHQUFHLEVBQUU7WUFDZiw2QkFBNkI7O1lBQTdCLDZCQUE2QjtZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLElBQUksRUFBRSxHQUFHO2dCQUNULE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzdDLENBQUMsQ0FBQTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFB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Ozs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQSxDQUFBO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBaUpILHdCQUFDO0FBQUQsQ0FBQyxBQTlKRCxDQUF1QyxVQUFVLEdBOEpoRDs7OztJQTVKQyx3Q0FBMEI7O0lBQzFCLHVDQUF5Qjs7SUFDekIscUNBQXVCOztJQUN2QixvQ0FBc0I7O0lBVXRCLGdEQU9DOztJQUVELDJDQWdCQzs7Ozs7SUFFRCx1Q0FtSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlclxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyXG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemVcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gPG51bWJlcj50aGlzLm9wdGlvbnMucGFnZVxuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0XG4gICAgcmV0dXJuIHRoaXMudW5wYWNrRGF0YShkYXRhKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNob3dNb3JlQ2xpY2sgPSBpbmNvbWluZ0RhdGEgPT4ge1xuICAgIC8qXG4gICAgICBDYWxsZWQgYnkgYnV0dG9uIDxNb3N0cmEgQWx0cmk+LCBhZGRzIHRoZSBpbmNvbWluZ1xuICAgICAgZGF0YSB0byB0aGUgbGlua2VkIG9iamVjdHMgY29tcG9uZW50LlxuICAgICovXG4gICAgY29uc29sZS5sb2coJ3Nob3dpbmcgbW9yZSBzdHVmZicpXG4gICAgLy8gVE9ET1xuICB9XG5cbiAgcHVibGljIG1ha2VQYWdpbmF0aW9uID0gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XG4gICAgLypcbiAgICAgIENhbGxlZCBieSB0aGlzLnVucGFja0RhdGEoKSB3aGVuIHRoaXMub3B0aW9ucy5wYWdlIGlzIGRlZmluZWQuXG4gICAgICBSZXR1cm5zIHRoZSBkYXRhIGZvciA8bjctcGFnaW5hdGlvbj4gY29tcG9uZW50LlxuICAgICovXG4gICAgbGV0IHJlc3VsdCA9IFtdXG4gICAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgICByZXN1bHQucHVzaCh7XG4gICAgICB0ZXh0OiAnMScsXG4gICAgICBwYXlsb2FkOiAncGFnZS0xJyxcbiAgICAgIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09IDEgPyAnaXMtYWN0aXZlJyA6ICcnXG4gICAgfSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goeyB0ZXh0OiBTdHJpbmcoaSArIDEpLCBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkgKyAxKSwgY2xhc3NlczogY3VycmVudFBhZ2UgPT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IGRhdGEgPT4ge1xuICAgIC8qXG4gICAgICBEeW5hbWljYWxseSByZXR1cm5zIHRoZSBkYXRhIG9iamVjdCBmb3IgZWFjaCBIVE1MIGNvbXBvbmVudFxuICAgICAgZGF0YToge1xuICAgICAgICBwcmV2aWV3czogWyBicmVhZGNydW1iczogeyBpdGVtc1tdIH0sIGNsYXNzZXMsIGltYWdlLCBtZXRhZGF0YSwgcGF5bG9hZCwgdGl0bGUgXSxcbiAgICAgICAgcGFnaW5hdGlvbjogeyBmaXJzdCwgbGFzdCwgbGlua3MsIG5leHQsIHByZXYsIHNlbGVjdCB9XG4gICAgICB9XG4gICAgKi9cbiAgICBjb25zdFxuICAgICAgY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZywgLy8gYXBwLWNvbmZpZy5qc29uXG4gICAgICB0b3RhbENvdW50ID0gZGF0YS50b3RhbENvdW50LCAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYXZhaWxhYmxlIG9uIGJhY2tlbmRcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnRvdGFsUGFnZXMsIC8vIGNhbGN1bGF0ZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBwYWdlID0gdGhpcy5jdXJyZW50UGFnZSwgICAgICAvLyBjdXJyZW50IHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LCAgICAgICAvLyBwYXJlbnQgbGF5b3V0IG5hbWVcbiAgICAgIHNpemUgPSB0aGlzLnBhZ2VTaXplICAgICAgICAgIC8vIGl0ZW1zIHBlciBwYWdlIChpZiB1c2luZyBwYWdpbmF0aW9uKVxuICAgIHZhclxuICAgICAgZCA9IGRhdGEuaXRlbXMgICAgICAgICAgICAgICAgLy8gaXRlbXMgdG8gaXRlcmF0ZSBvdmVyXG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB2YXIga2V5cyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcbiAgICAgIC8vIGR5bmFtaWMgc2VhcmNoIGZvciBtYXgtaXRlbS1sZW5ndGhcbiAgICAgIGlmIChjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpKSB7XG4gICAgICAgIHZhciBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoY29udGV4dCArICctbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddXG4gICAgICAgIHZhciByZXN1bHRzTGltaXQgPSBjb25maWcuZ2V0KGNvbnRleHQgKyAnLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVzaXplIGRhdGFcbiAgICBpZiAoc2l6ZSAmJiBwYWdlKSB7XG4gICAgICBkID0gZC5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKVxuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgICAgZCA9IGQuc2xpY2UoMCwgc2l6ZSlcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICBkLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgIGltYWdlOiBlbC50aHVtYm5haWwsXG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbWF4IHN0cmluZyBsZW5ndGggaW4gY29uZmlnLCB1c2UgaXRcbiAgICAgICAgICBsZW5ndGhMaW1pdCAmJiBlbC5pdGVtLmxhYmVsLmxlbmd0aCA+IGxlbmd0aExpbWl0ID9cbiAgICAgICAgICAgIGVsLml0ZW0ubGFiZWwuc2xpY2UoMCwgbGVuZ3RoTGltaXQpICsgJy4uLicgOiBlbC5pdGVtLmxhYmVsLFxuICAgICAgICBwYXlsb2FkOiBlbC5pdGVtLmlkLFxuICAgICAgICBjbGFzc2VzOiBbJ2VudGl0YScsICdzZWFyY2gnXS5pbmNsdWRlcyhjb250ZXh0KSA/ICdpcy1mdWxsd2lkdGgnIDogJycsXG4gICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWFydGlzdCcsXG4gICAgICAgICAgICBpdGVtczogZWwuaXRlbS5pbmZvLm1hcCgoeyB2YWx1ZSwga2V5IH0pID0+ICh7XG4gICAgICAgICAgICAgIGxhYmVsOiBrZXkgPT09ICdhdXRob3InID8gJ0FydGlzdGEnIDogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgICBpdGVtczogZWwucmVsYXRlZFRPRURhdGEubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IC8vIFBlcnNvbmU6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdG9lLmNvdW50LFxuICAgICAgICAgICAgICAgIC8vIGljb246ICduNy1pY29uLWJlbGwnIC8vIFRPRE86IGxpbmsgaWNvbiB0byBjb25maWcga2V5XG4gICAgICAgICAgICAgICAgaWNvbjoga2V5c1t0b2UudHlwZS5jb25maWdLZXldLmljb24sXG4gICAgICAgICAgICAgICAgY2xhc3NlczogJ2NvbG9yLScgKyB0b2UudHlwZS5jb25maWdLZXlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgICBpZiAoZWwuYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgaXRlbVsnYnJlYWRjcnVtYnMnXSA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgICBpdGVtczogZWwuYnJlYWRjcnVtYnMubWFwKGNydW1iID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBjcnVtYi5sYWJlbCxcbiAgICAgICAgICAgICAgcGF5bG9hZDogY3J1bWIubGluayxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHBhZ2UpIHsgLy8gaWYgSSdtIG9uIGEgcGFnZSwgcmVuZGVyIHBhZ2luYXRpb24gZGF0YS5cbiAgICAgIGxldCBzaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGZpcnN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7MX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyAnaXMtZGlzYWJsZWQnIDogJycgfSxcbiAgICAgICAgICBwcmV2OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PSAxID8gJ2lzLWRpc2FibGVkJyA6ICcnIH0sXG4gICAgICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgKyAxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9LFxuICAgICAgICAgIGxpbmtzOiB0aGlzLm1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcChvID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBvLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBvID09IHNpemUsXG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZXMgb3B0aW9ucyBncmVhdGVyIHRoYW4gdG90YWwgaXRlbXNcbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZDogbyA+IHRvdGFsUGFnZXMqc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZpZXdzOiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBhY3Rpb25zOlxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdNb3N0cmEgVHV0dGkgKCcgKyB0b3RhbENvdW50ICsgJyknIH0sXG4gICAgICAgICAgICBsZW5ndGhMaW1pdCA/XG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdNb3N0cmEgQWx0cmkgKCcgKyByZXN1bHRzTGltaXQgKyAnKScgfSA6XG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnbGlua2VkIG9iamVjdHMgcmVzdWx0JywgcmVzdWx0KVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0iXX0=