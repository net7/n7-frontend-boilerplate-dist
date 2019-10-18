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
        var KEYS = this.options.configKeys;
        this.pageSize = this.options.size;
        this.currentPage = Number(this.options.page);
        this.totalPages = Math.floor(data.length / Number(this.pageSize));
        this.context = this.options.context;
        return unpackData(data, this.currentPage, this.pageSize, KEYS, this.totalPages, this.context);
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
 * @param {?} keys
 * @param {?} totalPages
 * @param {?} context
 * @return {?}
 */
function unpackData(data, page, size, keys, totalPages, context) {
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
            title: el.item.label,
            payload: el.item.id,
            classes: context == 'entita' ? 'is-fullwidth' : '',
            metadata: [
                {
                    classes: 'n7-objects__metadata-artist',
                    items: [
                        {
                            // Artista: Mimmo Jodice
                            // label: el.item.info[0].key,
                            label: 'Autore',
                            value: el.item.info[0].value
                        },
                        {
                            // olio su tela
                            value: el.item.info[1].value
                        }
                    ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXVDLDZDQUFVO0lBQWpEOztJQWVBLENBQUM7Ozs7OztJQVJXLHFDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTtRQUNuQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBdUMsVUFBVSxHQWVoRDs7OztJQWJDLHVDQUF5Qjs7SUFDekIsd0NBQTBCOztJQUMxQixxQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7Ozs7Ozs7Ozs7QUFZeEIsU0FBUyxVQUFVLENBQUUsSUFBSSxF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QyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLElBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0tBQ3hIO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlclxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlclxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlclxuICBwdWJsaWMgY29udGV4dDogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgS0VZUyA9IHRoaXMub3B0aW9ucy5jb25maWdLZXlzXG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLm9wdGlvbnMucGFnZSlcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gTnVtYmVyKHRoaXMucGFnZVNpemUpKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0XG4gICAgcmV0dXJuIHVucGFja0RhdGEoZGF0YSwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wYWdlU2l6ZSwgS0VZUywgdGhpcy50b3RhbFBhZ2VzLCB0aGlzLmNvbnRleHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gdW5wYWNrRGF0YSAoZGF0YSwgcGFnZSwgc2l6ZSwga2V5cywgdG90YWxQYWdlcywgY29udGV4dCkge1xuICAvLyByZXNpemUgZGF0YVxuICBpZiAoc2l6ZSAmJiBwYWdlKSB7XG4gICAgZGF0YSA9IGRhdGEuc2xpY2UocGFnZSAqIHNpemUgLSBzaXplLCBwYWdlICogc2l6ZSlcbiAgfSBlbHNlIGlmICggc2l6ZSApIHtcbiAgICBkYXRhID0gZGF0YS5zbGljZSgwLCBzaXplKVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdXG4gIGRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgbGV0IGl0ZW0gPSB7XG4gICAgICBpbWFnZTogZWwudGh1bWJuYWlsLFxuICAgICAgdGl0bGU6IGVsLml0ZW0ubGFiZWwsXG4gICAgICBwYXlsb2FkOiBlbC5pdGVtLmlkLFxuICAgICAgY2xhc3NlczogY29udGV4dCA9PSAnZW50aXRhJyA/ICdpcy1mdWxsd2lkdGgnIDogJycsXG4gICAgICBtZXRhZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWFydGlzdCcsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgLy8gQXJ0aXN0YTogTWltbW8gSm9kaWNlXG4gICAgICAgICAgICAgIC8vIGxhYmVsOiBlbC5pdGVtLmluZm9bMF0ua2V5LFxuICAgICAgICAgICAgICBsYWJlbDogJ0F1dG9yZScsXG4gICAgICAgICAgICAgIHZhbHVlOiBlbC5pdGVtLmluZm9bMF0udmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIG9saW8gc3UgdGVsYVxuICAgICAgICAgICAgICB2YWx1ZTogZWwuaXRlbS5pbmZvWzFdLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgaXRlbXM6IGVsLnJlbGF0ZWRUT0VEYXRhLm1hcCggdG9lID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC8vIFBlcnNvbmU6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgICAgdmFsdWU6IHRvZS5jb3VudCxcbiAgICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgICAgaWNvbjoga2V5c1t0b2UudHlwZS5jb25maWdLZXldLmljb24sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2xvci0nICsgdG9lLnR5cGUuY29uZmlnS2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgaWYgKCBlbC5icmVhZGNydW1icyApIHtcbiAgICAgIGl0ZW1bJ2JyZWFkY3J1bWJzJ10gPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICBpdGVtczogZWwuYnJlYWRjcnVtYnMubWFwKCBjcnVtYiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgbGFiZWw6IGNydW1iLmxhYmVsLFxuICAgICAgICAgICBwYXlsb2FkOiBjcnVtYi5saW5rLFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICB9KTtcbiAgaWYgKCBwYWdlICkgeyAvLyBpZiBJJ20gb24gYSBwYWdlLCByZW5kZXIgcGFnaW5hdGlvbiBkYXRhLlxuICAgIGxldCBzaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwXVxuICAgIHJldHVybiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGZpcnN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7MX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyBcImlzLWRpc2FibGVkXCIgOiAnJyB9LFxuICAgICAgICBwcmV2OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZS0xfWAsIGNsYXNzZXM6IHBhZ2UgPT0gMSA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnIH0sXG4gICAgICAgIG5leHQ6ICB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSsxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnfSxcbiAgICAgICAgbGFzdDogIHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnfSxcbiAgICAgICAgbGlua3M6IG1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcChvID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRleHQ6IG8sXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBvID09IHNpemUsXG4gICAgICAgICAgICAgIC8vIGRpc2FibGVzIG9wdGlvbnMgZ3JlYXRlciB0aGFuIHRvdGFsIGl0ZW1zXG4gICAgICAgICAgICAgIC8vIGRpc2FibGVkOiBvID4gdG90YWxQYWdlcypzaXplXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJldmlld3M6IHJlc3VsdCBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbWFrZVBhZ2luYXRpb24gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuICAvLyBhbHdheXMgcHVzaCB0aGUgZmlyc3QgcGFnZVxuICByZXN1bHQucHVzaCh7IHRleHQ6ICcxJywgcGF5bG9hZDogJ3BhZ2UtMScsIGNsYXNzZXM6IGN1cnJlbnRQYWdlPT0xPyAnaXMtYWN0aXZlJyA6ICcnIH0pXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSArIDEpLCBjbGFzc2VzOiBjdXJyZW50UGFnZT09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0iXX0=