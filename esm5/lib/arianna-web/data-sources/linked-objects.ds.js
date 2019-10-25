/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwLinkedObjectsDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwLinkedObjectsDS, _super);
    function AwLinkedObjectsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        /** @type {?} */
        var CONFIG = this.options.config;
        this.pageSize = this.options.size;
        this.currentPage = Number(this.options.page);
        this.totalPages = Math.floor(data.length / Number(this.pageSize));
        this.context = this.options.context;
        return unpackData(data, this.currentPage, this.pageSize, CONFIG, this.totalPages, this.context);
    };
    return AwLinkedObjectsDS;
}(DataSource));
export { AwLinkedObjectsDS };
if (false) {
    /** @type {?} */
    AwLinkedObjectsDS.prototype.totalPages;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.currentPage;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.pageSize;
    /** @type {?} */
    AwLinkedObjectsDS.prototype.context;
}
/**
 * @param {?} data
 * @param {?} page
 * @param {?} size
 * @param {?} config
 * @param {?} totalPages
 * @param {?} context
 * @return {?}
 */
function unpackData(data, page, size, config, totalPages, context) {
    if (config) {
        /** @type {?} */
        var keys = config.get('config-keys');
        switch (context) {
            case 'home':
                /** @type {?} */
                var lengthLimit = config.get('home-layout')['max-item-length'];
                break;
            default:
                break;
        }
    }
    // resize data
    if (size && page) {
        data = data.slice(page * size - size, page * size);
    }
    else if (size) {
        data = data.slice(0, size);
    }
    /** @type {?} */
    var result = [];
    data.forEach((/**
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
            classes: context == 'entita' ? 'is-fullwidth' : '',
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
                first: { payload: "goto-" + 1, classes: page == 1 ? "is-disabled" : '' },
                prev: { payload: "goto-" + (page - 1), classes: page == 1 ? "is-disabled" : '' },
                next: { payload: "goto-" + (page + 1), classes: page == totalPages ? "is-disabled" : '' },
                last: { payload: "goto-" + totalPages, classes: page == totalPages ? "is-disabled" : '' },
                links: makePagination(totalPages, page),
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
                { label: 'Vedi Tutti 7805' },
                { label: 'Vedi Altri 7795' }
            ]
        };
    }
    return result;
}
/**
 * @param {?} totalPages
 * @param {?} currentPage
 * @return {?}
 */
function makePagination(totalPages, currentPage) {
    /** @type {?} */
    var result = []
    // always push the first page
    ;
    // always push the first page
    result.push({ text: '1', payload: 'page-1', classes: currentPage == 1 ? 'is-active' : '' });
    for (var i = 1; i < totalPages; i++) {
        result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXVDLDZDQUFVO0lBQWpEOztJQWVBLENBQUM7Ozs7OztJQVJXLHFDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTtRQUNuQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNqRyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBdUMsVUFBVSxHQWVoRDs7OztJQWJDLHVDQUF5Qjs7SUFDekIsd0NBQTBCOztJQUMxQixxQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7Ozs7Ozs7Ozs7QUFZeEIsU0FBUyxVQUFVLENBQUMsSUFBSSxF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T0FBTyxLQUFLLE1BQU0sRUFBRTtRQUN0QixPQUFPO1lBQ0wsTUFBTSxRQUFBO1lBQ04sT0FBTyxFQUFFO2dCQUNQLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2dCQUM1QixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRTthQUM3QjtTQUNGLENBQUE7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7OztBQUVELFNBQVMsY0FBYyxDQUFDLFVBQVUsRUFBRSxXQUFXOztRQUN6QyxNQUFNLEdBQUcsRUFBRTtJQUNmLDZCQUE2Qjs7SUFBN0IsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUUzRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDekg7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyXG4gIHB1YmxpYyBjb250ZXh0OiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCBDT05GSUcgPSB0aGlzLm9wdGlvbnMuY29uZmlnXG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLm9wdGlvbnMucGFnZSlcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gTnVtYmVyKHRoaXMucGFnZVNpemUpKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0XG4gICAgcmV0dXJuIHVucGFja0RhdGEoZGF0YSwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wYWdlU2l6ZSwgQ09ORklHLCB0aGlzLnRvdGFsUGFnZXMsIHRoaXMuY29udGV4dClcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnBhY2tEYXRhKGRhdGEsIHBhZ2UsIHNpemUsIGNvbmZpZywgdG90YWxQYWdlcywgY29udGV4dCkge1xuICBpZiAoY29uZmlnKSB7XG4gICAgdmFyIGtleXMgPSBjb25maWcuZ2V0KCdjb25maWcta2V5cycpXG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgdmFyIGxlbmd0aExpbWl0ID0gY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWl0ZW0tbGVuZ3RoJ11cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8gcmVzaXplIGRhdGFcbiAgaWYgKHNpemUgJiYgcGFnZSkge1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpXG4gIH0gZWxzZSBpZiAoc2l6ZSkge1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKDAsIHNpemUpXG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW11cbiAgZGF0YS5mb3JFYWNoKGVsID0+IHtcbiAgICBsZXQgaXRlbSA9IHtcbiAgICAgIGltYWdlOiBlbC50aHVtYm5haWwsXG4gICAgICB0aXRsZTpcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBtYXggc3RyaW5nIGxlbmd0aCBpbiBjb25maWcsIHVzZSBpdFxuICAgICAgICBsZW5ndGhMaW1pdCAmJiBlbC5pdGVtLmxhYmVsLmxlbmd0aCA+IGxlbmd0aExpbWl0ID9cbiAgICAgICAgICBlbC5pdGVtLmxhYmVsLnNsaWNlKDAsIGxlbmd0aExpbWl0KSArICcuLi4nIDogZWwuaXRlbS5sYWJlbCxcbiAgICAgIHBheWxvYWQ6IGVsLml0ZW0uaWQsXG4gICAgICBjbGFzc2VzOiBjb250ZXh0ID09ICdlbnRpdGEnID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJyxcbiAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnbjctb2JqZWN0c19fbWV0YWRhdGEtYXJ0aXN0JyxcbiAgICAgICAgICBpdGVtczogZWwuaXRlbS5pbmZvLm1hcCgoeyB2YWx1ZSwga2V5IH0pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDoga2V5ID09PSAnYXV0aG9yJyA/ICdBcnRpc3RhJyA6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZSBcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1saW5rZWQnLFxuICAgICAgICAgIGl0ZW1zOiBlbC5yZWxhdGVkVE9FRGF0YS5tYXAodG9lID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC8vIFBlcnNvbmU6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgICAgdmFsdWU6IHRvZS5jb3VudCxcbiAgICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgICAgaWNvbjoga2V5c1t0b2UudHlwZS5jb25maWdLZXldLmljb24sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2xvci0nICsgdG9lLnR5cGUuY29uZmlnS2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgaWYgKGVsLmJyZWFkY3J1bWJzKSB7XG4gICAgICBpdGVtWydicmVhZGNydW1icyddID0geyAvLyBuNy1icmVhZGNydW1icyB1c2VzIHRoaXMgYXMgaXQncyBvd24gZGF0YVxuICAgICAgICBpdGVtczogZWwuYnJlYWRjcnVtYnMubWFwKGNydW1iID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGNydW1iLmxhYmVsLFxuICAgICAgICAgICAgcGF5bG9hZDogY3J1bWIubGluayxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgfSk7XG4gIGlmIChwYWdlKSB7IC8vIGlmIEknbSBvbiBhIHBhZ2UsIHJlbmRlciBwYWdpbmF0aW9uIGRhdGEuXG4gICAgbGV0IHNpemVPcHRpb25zID0gWzEwLCAyNSwgNTBdXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gMSA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnIH0sXG4gICAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlIC0gMX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyBcImlzLWRpc2FibGVkXCIgOiAnJyB9LFxuICAgICAgICBuZXh0OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSArIDF9YCwgY2xhc3NlczogcGFnZSA9PSB0b3RhbFBhZ2VzID8gXCJpcy1kaXNhYmxlZFwiIDogJycgfSxcbiAgICAgICAgbGFzdDogeyBwYXlsb2FkOiBgZ290by0ke3RvdGFsUGFnZXN9YCwgY2xhc3NlczogcGFnZSA9PSB0b3RhbFBhZ2VzID8gXCJpcy1kaXNhYmxlZFwiIDogJycgfSxcbiAgICAgICAgbGlua3M6IG1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcChvID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRleHQ6IG8sXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBvID09IHNpemUsXG4gICAgICAgICAgICAgIC8vIGRpc2FibGVzIG9wdGlvbnMgZ3JlYXRlciB0aGFuIHRvdGFsIGl0ZW1zXG4gICAgICAgICAgICAgIC8vIGRpc2FibGVkOiBvID4gdG90YWxQYWdlcypzaXplXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJldmlld3M6IHJlc3VsdFxuICAgIH1cbiAgfVxuICBpZiAoY29udGV4dCA9PT0gJ2hvbWUnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdCxcbiAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgeyBsYWJlbDogJ1ZlZGkgVHV0dGkgNzgwNScgfSxcbiAgICAgICAgeyBsYWJlbDogJ1ZlZGkgQWx0cmkgNzc5NScgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkge1xuICBsZXQgcmVzdWx0ID0gW11cbiAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgcmVzdWx0LnB1c2goeyB0ZXh0OiAnMScsIHBheWxvYWQ6ICdwYWdlLTEnLCBjbGFzc2VzOiBjdXJyZW50UGFnZSA9PSAxID8gJ2lzLWFjdGl2ZScgOiAnJyB9KVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goeyB0ZXh0OiBTdHJpbmcoaSArIDEpLCBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkgKyAxKSwgY2xhc3NlczogY3VycmVudFBhZ2UgPT0gaSArIDEgPyAnaXMtYWN0aXZlJyA6ICcnIH0pXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufSJdfQ==