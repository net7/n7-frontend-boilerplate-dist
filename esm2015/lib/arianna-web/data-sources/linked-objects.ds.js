/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwLinkedObjectsDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const KEYS = this.options.configKeys;
        this.pageSize = this.options.size;
        this.currentPage = Number(this.options.page);
        this.totalPages = Math.floor(data.length / Number(this.pageSize));
        return unpackData(data, this.currentPage, this.pageSize, KEYS, this.totalPages);
    }
}
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
    el => {
        /** @type {?} */
        let item = {
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
                    toe => {
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
                crumb => {
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
        let sizeOptions = [10, 25, 50];
        return {
            pagination: {
                first: { payload: `goto-${1}`, classes: page == 1 ? "is-disabled" : '' },
                prev: { payload: `goto-${page - 1}`, classes: page == 1 ? "is-disabled" : '' },
                next: { payload: `goto-${page + 1}`, classes: page == totalPages ? "is-disabled" : '' },
                last: { payload: `goto-${totalPages}`, classes: page == totalPages ? "is-disabled" : '' },
                links: makePagination(totalPages, page),
                select: {
                    label: 'Numero di risultati',
                    options: sizeOptions.map((/**
                     * @param {?} o
                     * @return {?}
                     */
                    o => {
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
    let result = []
    // always push the first page
    ;
    // always push the first page
    result.push({ text: '1', payload: 'page-1', classes: currentPage == 1 ? 'is-active' : '' });
    for (let i = 1; i < totalPages; i++) {
        result.push({ text: String(i + 1), payload: 'page-' + String(i + 1), classes: currentPage == i + 1 ? 'is-active' : '' });
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7Ozs7OztJQU1yQyxTQUFTLENBQUMsSUFBSTs7Y0FDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNqRixDQUFDO0NBQ0Y7OztJQVhDLHVDQUF3Qjs7SUFDeEIsd0NBQXlCOztJQUN6QixxQ0FBc0I7Ozs7Ozs7Ozs7QUFXeEIsU0FBUyxVQUFVLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVU7SUFDckQsY0FBYztJQUNkLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFB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IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIHRvdGFsUGFnZXM6TnVtYmVyXG4gIHB1YmxpYyBjdXJyZW50UGFnZTpOdW1iZXJcbiAgcHVibGljIHBhZ2VTaXplOk51bWJlclxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IEtFWVMgPSB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1xuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZVxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBOdW1iZXIodGhpcy5vcHRpb25zLnBhZ2UpXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIE51bWJlcih0aGlzLnBhZ2VTaXplKSlcbiAgICByZXR1cm4gdW5wYWNrRGF0YShkYXRhLCB0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLnBhZ2VTaXplLCBLRVlTLCB0aGlzLnRvdGFsUGFnZXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gdW5wYWNrRGF0YSAoZGF0YSwgcGFnZSwgc2l6ZSwga2V5cywgdG90YWxQYWdlcykge1xuICAvLyByZXNpemUgZGF0YVxuICBpZiAoc2l6ZSAmJiBwYWdlKSB7XG4gICAgZGF0YSA9IGRhdGEuc2xpY2UocGFnZSAqIHNpemUgLSBzaXplLCBwYWdlICogc2l6ZSlcbiAgfSBlbHNlIGlmICggc2l6ZSApIHtcbiAgICBkYXRhID0gZGF0YS5zbGljZSgwLCBzaXplKVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdXG4gIGRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgbGV0IGl0ZW0gPSB7XG4gICAgICBpbWFnZTogZWwudGh1bWJuYWlsLFxuICAgICAgdGl0bGU6IGVsLml0ZW0ubGFiZWwsXG4gICAgICB0ZXh0OiBlbC5pdGVtLmluZm9bMV0udmFsdWUsXG4gICAgICBwYXlsb2FkOiBlbC5pdGVtLmlkLFxuICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1hcnRpc3QnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IC8vIEFydGlzdGE6IE1pbW1vIEpvZGljZVxuICAgICAgICAgICAgICAvLyBsYWJlbDogZWwuaXRlbS5pbmZvWzBdLmtleSxcbiAgICAgICAgICAgICAgbGFiZWw6ICdBdXRvcmUnLFxuICAgICAgICAgICAgICB2YWx1ZTogZWwuaXRlbS5pbmZvWzBdLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWxpbmtlZCcsXG4gICAgICAgICAgaXRlbXM6IGVsLnJlbGF0ZWRUT0VEYXRhLm1hcCggdG9lID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC8vIFBlcnNvbmU6IDYsIE9yZ2FuaXp6OiAxMiwgTHVvZ2hpOiAyLCBDb25jZXR0aTogMzJcbiAgICAgICAgICAgICAgdmFsdWU6IHRvZS5jb3VudCxcbiAgICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcbiAgICAgICAgICAgICAgaWNvbjoga2V5c1t0b2UudHlwZS5jb25maWdLZXldLmljb24gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gICAgaWYgKCBlbC5icmVhZGNydW1icyApIHtcbiAgICAgIGl0ZW1bJ2JyZWFkY3J1bWJzJ10gPSB7IC8vIG43LWJyZWFkY3J1bWJzIHVzZXMgdGhpcyBhcyBpdCdzIG93biBkYXRhXG4gICAgICBpdGVtczogZWwuYnJlYWRjcnVtYnMubWFwKCBjcnVtYiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgbGFiZWw6IGNydW1iLmxhYmVsLFxuICAgICAgICAgICBwYXlsb2FkOiBjcnVtYi5saW5rLFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICB9KTtcbiAgaWYgKCBwYWdlICkgeyAvLyBpZiBJJ20gb24gYSBwYWdlLCByZW5kZXIgcGFnaW5hdGlvbiBkYXRhLlxuICAgIGxldCBzaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwXVxuICAgIHJldHVybiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGZpcnN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7MX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyBcImlzLWRpc2FibGVkXCIgOiAnJyB9LFxuICAgICAgICBwcmV2OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZS0xfWAsIGNsYXNzZXM6IHBhZ2UgPT0gMSA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnIH0sXG4gICAgICAgIG5leHQ6ICB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSsxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnfSxcbiAgICAgICAgbGFzdDogIHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnfSxcbiAgICAgICAgbGlua3M6IG1ha2VQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIHBhZ2UpLFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ051bWVybyBkaSByaXN1bHRhdGknLFxuICAgICAgICAgIG9wdGlvbnM6IHNpemVPcHRpb25zLm1hcChvID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHRleHQ6IG8gLCBzZWxlY3RlZDogbyA9PSBzaXplLCBkaXNhYmxlZDogbyA+IHRvdGFsUGFnZXMgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdzOiByZXN1bHQgXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1ha2VQYWdpbmF0aW9uICh0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkge1xuICBsZXQgcmVzdWx0ID0gW11cbiAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgcmVzdWx0LnB1c2goeyB0ZXh0OiAnMScsIHBheWxvYWQ6ICdwYWdlLTEnLCBjbGFzc2VzOiBjdXJyZW50UGFnZT09MT8gJ2lzLWFjdGl2ZScgOiAnJyB9KVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goeyB0ZXh0OiBTdHJpbmcoaSArIDEpLCBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkgKyAxKSwgY2xhc3NlczogY3VycmVudFBhZ2U9PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59Il19