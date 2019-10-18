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
        this.context = this.options.context;
        return unpackData(data, this.currentPage, this.pageSize, KEYS, this.totalPages, this.context);
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
    el => {
        /** @type {?} */
        let item = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7Ozs7OztJQU9yQyxTQUFTLENBQUMsSUFBSTs7Y0FDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFDbkMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0YsQ0FBQztDQUNGOzs7SUFiQyx1Q0FBeUI7O0lBQ3pCLHdDQUEwQjs7SUFDMUIscUNBQXVCOztJQUN2QixvQ0FBc0I7Ozs7Ozs7Ozs7O0FBWXhCLFNBQVMsVUFBVSxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTztJQUM5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QUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxJQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtLQUN4SDtJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXJcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXJcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXJcbiAgcHVibGljIGNvbnRleHQ6IHN0cmluZ1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IEtFWVMgPSB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1xuICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZVxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBOdW1iZXIodGhpcy5vcHRpb25zLnBhZ2UpXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5mbG9vcihkYXRhLmxlbmd0aCAvIE51bWJlcih0aGlzLnBhZ2VTaXplKSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLm9wdGlvbnMuY29udGV4dFxuICAgIHJldHVybiB1bnBhY2tEYXRhKGRhdGEsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGFnZVNpemUsIEtFWVMsIHRoaXMudG90YWxQYWdlcywgdGhpcy5jb250ZXh0KVxuICB9XG59XG5cbmZ1bmN0aW9uIHVucGFja0RhdGEgKGRhdGEsIHBhZ2UsIHNpemUsIGtleXMsIHRvdGFsUGFnZXMsIGNvbnRleHQpIHtcbiAgLy8gcmVzaXplIGRhdGFcbiAgaWYgKHNpemUgJiYgcGFnZSkge1xuICAgIGRhdGEgPSBkYXRhLnNsaWNlKHBhZ2UgKiBzaXplIC0gc2l6ZSwgcGFnZSAqIHNpemUpXG4gIH0gZWxzZSBpZiAoIHNpemUgKSB7XG4gICAgZGF0YSA9IGRhdGEuc2xpY2UoMCwgc2l6ZSlcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXVxuICBkYXRhLmZvckVhY2goZWwgPT4ge1xuICAgIGxldCBpdGVtID0ge1xuICAgICAgaW1hZ2U6IGVsLnRodW1ibmFpbCxcbiAgICAgIHRpdGxlOiBlbC5pdGVtLmxhYmVsLFxuICAgICAgcGF5bG9hZDogZWwuaXRlbS5pZCxcbiAgICAgIGNsYXNzZXM6IGNvbnRleHQgPT0gJ2VudGl0YScgPyAnaXMtZnVsbHdpZHRoJyA6ICcnLFxuICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1hcnRpc3QnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IC8vIEFydGlzdGE6IE1pbW1vIEpvZGljZVxuICAgICAgICAgICAgICAvLyBsYWJlbDogZWwuaXRlbS5pbmZvWzBdLmtleSxcbiAgICAgICAgICAgICAgbGFiZWw6ICdBdXRvcmUnLFxuICAgICAgICAgICAgICB2YWx1ZTogZWwuaXRlbS5pbmZvWzBdLnZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBvbGlvIHN1IHRlbGFcbiAgICAgICAgICAgICAgdmFsdWU6IGVsLml0ZW0uaW5mb1sxXS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICduNy1vYmplY3RzX19tZXRhZGF0YS1saW5rZWQnLFxuICAgICAgICAgIGl0ZW1zOiBlbC5yZWxhdGVkVE9FRGF0YS5tYXAoIHRvZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAvLyBQZXJzb25lOiA2LCBPcmdhbml6ejogMTIsIEx1b2doaTogMiwgQ29uY2V0dGk6IDMyXG4gICAgICAgICAgICAgIHZhbHVlOiB0b2UuY291bnQsXG4gICAgICAgICAgICAgIC8vIGljb246ICduNy1pY29uLWJlbGwnIC8vIFRPRE86IGxpbmsgaWNvbiB0byBjb25maWcga2V5XG4gICAgICAgICAgICAgIGljb246IGtleXNbdG9lLnR5cGUuY29uZmlnS2V5XS5pY29uLFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnY29sb3ItJyArIHRvZS50eXBlLmNvbmZpZ0tleVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGlmICggZWwuYnJlYWRjcnVtYnMgKSB7XG4gICAgICBpdGVtWydicmVhZGNydW1icyddID0geyAvLyBuNy1icmVhZGNydW1icyB1c2VzIHRoaXMgYXMgaXQncyBvd24gZGF0YVxuICAgICAgaXRlbXM6IGVsLmJyZWFkY3J1bWJzLm1hcCggY3J1bWIgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIGxhYmVsOiBjcnVtYi5sYWJlbCxcbiAgICAgICAgICAgcGF5bG9hZDogY3J1bWIubGluayxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgfSk7XG4gIGlmICggcGFnZSApIHsgLy8gaWYgSSdtIG9uIGEgcGFnZSwgcmVuZGVyIHBhZ2luYXRpb24gZGF0YS5cbiAgICBsZXQgc2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MF1cbiAgICByZXR1cm4ge1xuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBmaXJzdDogeyBwYXlsb2FkOiBgZ290by0kezF9YCwgY2xhc3NlczogcGFnZSA9PSAxID8gXCJpcy1kaXNhYmxlZFwiIDogJycgfSxcbiAgICAgICAgcHJldjogeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UtMX1gLCBjbGFzc2VzOiBwYWdlID09IDEgPyBcImlzLWRpc2FibGVkXCIgOiAnJyB9LFxuICAgICAgICBuZXh0OiAgeyBwYXlsb2FkOiBgZ290by0ke3BhZ2UrMX1gLCBjbGFzc2VzOiBwYWdlID09IHRvdGFsUGFnZXMgPyBcImlzLWRpc2FibGVkXCIgOiAnJ30sXG4gICAgICAgIGxhc3Q6ICB7IHBheWxvYWQ6IGBnb3RvLSR7dG90YWxQYWdlc31gLCBjbGFzc2VzOiBwYWdlID09IHRvdGFsUGFnZXMgPyBcImlzLWRpc2FibGVkXCIgOiAnJ30sXG4gICAgICAgIGxpbmtzOiBtYWtlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBwYWdlKSxcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbGFiZWw6ICdOdW1lcm8gZGkgcmlzdWx0YXRpJyxcbiAgICAgICAgICBvcHRpb25zOiBzaXplT3B0aW9ucy5tYXAobyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0ZXh0OiBvLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogbyA9PSBzaXplLFxuICAgICAgICAgICAgICAvLyBkaXNhYmxlcyBvcHRpb25zIGdyZWF0ZXIgdGhhbiB0b3RhbCBpdGVtc1xuICAgICAgICAgICAgICAvLyBkaXNhYmxlZDogbyA+IHRvdGFsUGFnZXMqc2l6ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc2l6ZSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdzOiByZXN1bHQgXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1ha2VQYWdpbmF0aW9uICh0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkge1xuICBsZXQgcmVzdWx0ID0gW11cbiAgLy8gYWx3YXlzIHB1c2ggdGhlIGZpcnN0IHBhZ2VcbiAgcmVzdWx0LnB1c2goeyB0ZXh0OiAnMScsIHBheWxvYWQ6ICdwYWdlLTEnLCBjbGFzc2VzOiBjdXJyZW50UGFnZT09MT8gJ2lzLWFjdGl2ZScgOiAnJyB9KVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goeyB0ZXh0OiBTdHJpbmcoaSArIDEpLCBwYXlsb2FkOiAncGFnZS0nICsgU3RyaW5nKGkgKyAxKSwgY2xhc3NlczogY3VycmVudFBhZ2U9PSBpICsgMSA/ICdpcy1hY3RpdmUnIDogJycgfSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59Il19