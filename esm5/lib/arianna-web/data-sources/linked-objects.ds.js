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
        return unpackData(data, this.currentPage, this.pageSize, KEYS, this.totalPages);
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
}
/**
 * @param {?} data
 * @param {?} page
 * @param {?} size
 * @param {?} keys
 * @param {?} totalPages
 * @return {?}
 */
function unpackData(data, page, size, keys, totalPages) {
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
            text: el.item.info[1].value,
            payload: el.item.id,
            metadata: [
                {
                    classes: 'n7-objects__metadata-artist',
                    items: [
                        {
                            // Artista: Mimmo Jodice
                            // label: el.item.info[0].key,
                            label: 'Autore',
                            value: el.item.info[0].value
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
                            icon: keys[toe.type.configKey].icon
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
                        return { text: o, selected: o == size, disabled: o > totalPages };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXVDLDZDQUFVO0lBQWpEOztJQWFBLENBQUM7Ozs7OztJQVBXLHFDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDakUsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pGLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFiRCxDQUF1QyxVQUFVLEdBYWhEOzs7O0lBWEMsdUNBQXdCOztJQUN4Qix3Q0FBeUI7O0lBQ3pCLHFDQUFzQjs7Ozs7Ozs7OztBQVd4QixTQUFTLFVBQVUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVTtJQUNyRCxjQUFjO0lBQ2QsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLElBQUks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WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwdWJsaWMgdG90YWxQYWdlczpOdW1iZXJcbiAgcHVibGljIGN1cnJlbnRQYWdlOk51bWJlclxuICBwdWJsaWMgcGFnZVNpemU6TnVtYmVyXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgS0VZUyA9IHRoaXMub3B0aW9ucy5jb25maWdLZXlzXG4gICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLm9wdGlvbnMucGFnZSlcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoIC8gTnVtYmVyKHRoaXMucGFnZVNpemUpKVxuICAgIHJldHVybiB1bnBhY2tEYXRhKGRhdGEsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGFnZVNpemUsIEtFWVMsIHRoaXMudG90YWxQYWdlcylcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnBhY2tEYXRhIChkYXRhLCBwYWdlLCBzaXplLCBrZXlzLCB0b3RhbFBhZ2VzKSB7XG4gIC8vIHJlc2l6ZSBkYXRhXG4gIGlmIChzaXplICYmIHBhZ2UpIHtcbiAgICBkYXRhID0gZGF0YS5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKVxuICB9IGVsc2UgaWYgKCBzaXplICkge1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKDAsIHNpemUpXG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW11cbiAgZGF0YS5mb3JFYWNoKGVsID0+IHtcbiAgICBsZXQgaXRlbSA9IHtcbiAgICAgIGltYWdlOiBlbC50aHVtYm5haWwsXG4gICAgICB0aXRsZTogZWwuaXRlbS5sYWJlbCxcbiAgICAgIHRleHQ6IGVsLml0ZW0uaW5mb1sxXS52YWx1ZSxcbiAgICAgIHBheWxvYWQ6IGVsLml0ZW0uaWQsXG4gICAgICBtZXRhZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWFydGlzdCcsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgLy8gQXJ0aXN0YTogTWltbW8gSm9kaWNlXG4gICAgICAgICAgICAgIC8vIGxhYmVsOiBlbC5pdGVtLmluZm9bMF0ua2V5LFxuICAgICAgICAgICAgICBsYWJlbDogJ0F1dG9yZScsXG4gICAgICAgICAgICAgIHZhbHVlOiBlbC5pdGVtLmluZm9bMF0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnbjctb2JqZWN0c19fbWV0YWRhdGEtbGlua2VkJyxcbiAgICAgICAgICBpdGVtczogZWwucmVsYXRlZFRPRURhdGEubWFwKCB0b2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgLy8gUGVyc29uZTogNiwgT3JnYW5peno6IDEyLCBMdW9naGk6IDIsIENvbmNldHRpOiAzMlxuICAgICAgICAgICAgICB2YWx1ZTogdG9lLmNvdW50LFxuICAgICAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1iZWxsJyAvLyBUT0RPOiBsaW5rIGljb24gdG8gY29uZmlnIGtleVxuICAgICAgICAgICAgICBpY29uOiBrZXlzW3RvZS50eXBlLmNvbmZpZ0tleV0uaWNvbiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICBpZiAoIGVsLmJyZWFkY3J1bWJzICkge1xuICAgICAgaXRlbVsnYnJlYWRjcnVtYnMnXSA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgIGl0ZW1zOiBlbC5icmVhZGNydW1icy5tYXAoIGNydW1iID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICBsYWJlbDogY3J1bWIubGFiZWwsXG4gICAgICAgICAgIHBheWxvYWQ6IGNydW1iLmxpbmssXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gIH0pO1xuICBpZiAoIHBhZ2UgKSB7IC8vIGlmIEknbSBvbiBhIHBhZ2UsIHJlbmRlciBwYWdpbmF0aW9uIGRhdGEuXG4gICAgbGV0IHNpemVPcHRpb25zID0gWzEwLCAyNSwgNTBdXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZmlyc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHsxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gMSA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnIH0sXG4gICAgICAgIHByZXY6IHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlLTF9YCwgY2xhc3NlczogcGFnZSA9PSAxID8gXCJpcy1kaXNhYmxlZFwiIDogJycgfSxcbiAgICAgICAgbmV4dDogIHsgcGF5bG9hZDogYGdvdG8tJHtwYWdlKzF9YCwgY2xhc3NlczogcGFnZSA9PSB0b3RhbFBhZ2VzID8gXCJpcy1kaXNhYmxlZFwiIDogJyd9LFxuICAgICAgICBsYXN0OiAgeyBwYXlsb2FkOiBgZ290by0ke3RvdGFsUGFnZXN9YCwgY2xhc3NlczogcGFnZSA9PSB0b3RhbFBhZ2VzID8gXCJpcy1kaXNhYmxlZFwiIDogJyd9LFxuICAgICAgICBsaW5rczogbWFrZVBhZ2luYXRpb24odG90YWxQYWdlcywgcGFnZSksXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGxhYmVsOiAnTnVtZXJvIGRpIHJpc3VsdGF0aScsXG4gICAgICAgICAgb3B0aW9uczogc2l6ZU9wdGlvbnMubWFwKG8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgdGV4dDogbyAsIHNlbGVjdGVkOiBvID09IHNpemUsIGRpc2FibGVkOiBvID4gdG90YWxQYWdlcyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zaXplJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJldmlld3M6IHJlc3VsdCBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbWFrZVBhZ2luYXRpb24gKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuICAvLyBhbHdheXMgcHVzaCB0aGUgZmlyc3QgcGFnZVxuICByZXN1bHQucHVzaCh7IHRleHQ6ICcxJywgcGF5bG9hZDogJ3BhZ2UtMScsIGNsYXNzZXM6IGN1cnJlbnRQYWdlPT0xPyAnaXMtYWN0aXZlJyA6ICcnIH0pXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICByZXN1bHQucHVzaCh7IHRleHQ6IFN0cmluZyhpICsgMSksIHBheWxvYWQ6ICdwYWdlLScgKyBTdHJpbmcoaSArIDEpLCBjbGFzc2VzOiBjdXJyZW50UGFnZT09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0iXX0=