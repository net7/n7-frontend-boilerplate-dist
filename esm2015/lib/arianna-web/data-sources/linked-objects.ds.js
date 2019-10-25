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
        const CONFIG = this.options.config;
        this.pageSize = this.options.size;
        this.currentPage = Number(this.options.page);
        this.totalPages = Math.floor(data.length / Number(this.pageSize));
        this.context = this.options.context;
        return unpackData(data, this.currentPage, this.pageSize, CONFIG, this.totalPages, this.context);
    }
}
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
    el => {
        /** @type {?} */
        let item = {
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
                    ({ value, key }) => ({
                        label: key === 'author' ? 'Artista' : null,
                        value
                    })))
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
            result,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7Ozs7OztJQU9yQyxTQUFTLENBQUMsSUFBSTs7Y0FDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFDbkMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakcsQ0FBQztDQUNGOzs7SUFiQyx1Q0FBeUI7O0lBQ3pCLHdDQUEwQjs7SUFDMUIscUNBQXVCOztJQUN2QixvQ0FBc0I7Ozs7Ozs7Ozs7O0FBWXhCLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTztJQUMv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TTtZQUNOLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRTtnQkFDNUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7YUFDN0I7U0FDRixDQUFBO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxVQUFVLEVBQUUsV0FBVzs7UUFDekMsTUFBTSxHQUFHLEVBQUU7SUFDZiw2QkFBNkI7O0lBQTdCLDZCQUE2QjtJQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFM0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0tBQ3pIO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlclxuICBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlclxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlclxuICBwdWJsaWMgY29udGV4dDogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgQ09ORklHID0gdGhpcy5vcHRpb25zLmNvbmZpZ1xuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZVxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBOdW1iZXIodGhpcy5vcHRpb25zLnBhZ2UpXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIE51bWJlcih0aGlzLnBhZ2VTaXplKSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLm9wdGlvbnMuY29udGV4dFxuICAgIHJldHVybiB1bnBhY2tEYXRhKGRhdGEsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGFnZVNpemUsIENPTkZJRywgdGhpcy50b3RhbFBhZ2VzLCB0aGlzLmNvbnRleHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gdW5wYWNrRGF0YShkYXRhLCBwYWdlLCBzaXplLCBjb25maWcsIHRvdGFsUGFnZXMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbmZpZykge1xuICAgIHZhciBrZXlzID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKVxuICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIHZhciBsZW5ndGhMaW1pdCA9IGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JylbJ21heC1pdGVtLWxlbmd0aCddXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIHJlc2l6ZSBkYXRhXG4gIGlmIChzaXplICYmIHBhZ2UpIHtcbiAgICBkYXRhID0gZGF0YS5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKVxuICB9IGVsc2UgaWYgKHNpemUpIHtcbiAgICBkYXRhID0gZGF0YS5zbGljZSgwLCBzaXplKVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdXG4gIGRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgbGV0IGl0ZW0gPSB7XG4gICAgICBpbWFnZTogZWwudGh1bWJuYWlsLFxuICAgICAgdGl0bGU6XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbWF4IHN0cmluZyBsZW5ndGggaW4gY29uZmlnLCB1c2UgaXRcbiAgICAgICAgbGVuZ3RoTGltaXQgJiYgZWwuaXRlbS5sYWJlbC5sZW5ndGggPiBsZW5ndGhMaW1pdCA/XG4gICAgICAgICAgZWwuaXRlbS5sYWJlbC5zbGljZSgwLCBsZW5ndGhMaW1pdCkgKyAnLi4uJyA6IGVsLml0ZW0ubGFiZWwsXG4gICAgICBwYXlsb2FkOiBlbC5pdGVtLmlkLFxuICAgICAgY2xhc3NlczogY29udGV4dCA9PSAnZW50aXRhJyA/ICdpcy1mdWxsd2lkdGgnIDogJycsXG4gICAgICBtZXRhZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ243LW9iamVjdHNfX21ldGFkYXRhLWFydGlzdCcsXG4gICAgICAgICAgaXRlbXM6IGVsLml0ZW0uaW5mby5tYXAoKHsgdmFsdWUsIGtleSB9KSA9PiAoe1xuICAgICAgICAgICAgbGFiZWw6IGtleSA9PT0gJ2F1dGhvcicgPyAnQXJ0aXN0YScgOiBudWxsLFxuICAgICAgICAgICAgdmFsdWUgXG4gICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnbjctb2JqZWN0c19fbWV0YWRhdGEtbGlua2VkJyxcbiAgICAgICAgICBpdGVtczogZWwucmVsYXRlZFRPRURhdGEubWFwKHRvZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAvLyBQZXJzb25lOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgIHZhbHVlOiB0b2UuY291bnQsXG4gICAgICAgICAgICAgIC8vIGljb246ICduNy1pY29uLWJlbGwnIC8vIFRPRE86IGxpbmsgaWNvbiB0byBjb25maWcga2V5XG4gICAgICAgICAgICAgIGljb246IGtleXNbdG9lLnR5cGUuY29uZmlnS2V5XS5pY29uLFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnY29sb3ItJyArIHRvZS50eXBlLmNvbmZpZ0tleVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGlmIChlbC5icmVhZGNydW1icykge1xuICAgICAgaXRlbVsnYnJlYWRjcnVtYnMnXSA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcbiAgICAgICAgaXRlbXM6IGVsLmJyZWFkY3J1bWJzLm1hcChjcnVtYiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiBjcnVtYi5sYWJlbCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGNydW1iLmxpbmssXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gIH0pO1xuICBpZiAocGFnZSkgeyAvLyBpZiBJJ20gb24gYSBwYWdlLCByZW5kZXIgcGFnaW5hdGlvbiBkYXRhLlxuICAgIGxldCBzaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwXVxuICAgIHJldHVybiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGZpcnN0OiB7IHBheWxvYWQ6IGBnb3RvLSR7MX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyBcImlzLWRpc2FibGVkXCIgOiAnJyB9LFxuICAgICAgICBwcmV2OiB7IHBheWxvYWQ6IGBnb3RvLSR7cGFnZSAtIDF9YCwgY2xhc3NlczogcGFnZSA9PSAxID8gXCJpcy1kaXNhYmxlZFwiIDogJycgfSxcbiAgICAgICAgbmV4dDogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UgKyAxfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnIH0sXG4gICAgICAgIGxhc3Q6IHsgcGF5bG9hZDogYGdvdG8tJHt0b3RhbFBhZ2VzfWAsIGNsYXNzZXM6IHBhZ2UgPT0gdG90YWxQYWdlcyA/IFwiaXMtZGlzYWJsZWRcIiA6ICcnIH0sXG4gICAgICAgIGxpbmtzOiBtYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAobyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0ZXh0OiBvLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogbyA9PSBzaXplLFxuICAgICAgICAgICAgICAvLyBkaXNhYmxlcyBvcHRpb25zIGdyZWF0ZXIgdGhhbiB0b3RhbCBpdGVtc1xuICAgICAgICAgICAgICAvLyBkaXNhYmxlZDogbyA+IHRvdGFsUGFnZXMqc2l6ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdzOiByZXN1bHRcbiAgICB9XG4gIH1cbiAgaWYgKGNvbnRleHQgPT09ICdob21lJykge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQsXG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6ICdWZWRpIFR1dHRpIDc4MDUnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdWZWRpIEFsdHJpIDc3OTUnIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbWFrZVBhZ2luYXRpb24odG90YWxQYWdlcywgY3VycmVudFBhZ2UpIHtcbiAgbGV0IHJlc3VsdCA9IFtdXG4gIC8vIGFsd2F5cyBwdXNoIHRoZSBmaXJzdCBwYWdlXG4gIHJlc3VsdC5wdXNoKHsgdGV4dDogJzEnLCBwYXlsb2FkOiAncGFnZS0xJywgY2xhc3NlczogY3VycmVudFBhZ2UgPT0gMSA/ICdpcy1hY3RpdmUnIDogJycgfSlcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKHsgdGV4dDogU3RyaW5nKGkgKyAxKSwgcGF5bG9hZDogJ3BhZ2UtJyArIFN0cmluZyhpICsgMSksIGNsYXNzZXM6IGN1cnJlbnRQYWdlID09IGkgKyAxID8gJ2lzLWFjdGl2ZScgOiAnJyB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn0iXX0=