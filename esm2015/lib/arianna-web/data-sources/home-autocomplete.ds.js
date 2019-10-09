/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeAutocompleteDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { items, totalCount } = data;
        const { config } = this.options;
        /** @type {?} */
        let itemIds = [];
        /** @type {?} */
        let groups = {};
        items.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item, typeOfEntity }) => {
            if (!groups[typeOfEntity.id]) {
                const { label, icon } = config[typeOfEntity.configKey];
                groups[typeOfEntity.id] = {
                    title: label,
                    icon,
                    classes: `color-${typeOfEntity.configKey}`,
                    items: [],
                };
            }
            if (itemIds.indexOf(item.id) === -1) {
                /** @type {?} */
                let metaDataValue = '';
                item.info.forEach((/**
                 * @param {?} infoData
                 * @return {?}
                 */
                infoData => {
                    if (infoData.key === 'author')
                        metaDataValue = `di ${infoData.value}`;
                }));
                groups[typeOfEntity.id].items.push({
                    label: item.label,
                    value: metaDataValue,
                    payload: {
                        source: 'item',
                        id: item.id
                    }
                });
            }
        }));
        /** @type {?} */
        const results = Object.keys(groups).map((/**
         * @param {?} key
         * @return {?}
         */
        key => ({ group: Object.assign({}, groups[key]) })));
        return {
            results,
            actions: {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    payload: {
                        source: 'showMore'
                    }
                }
            },
            fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7Ozs7OztJQUV4QyxTQUFTLENBQUMsSUFBSTtjQUVoQixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJO2NBQ2hDLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87O1lBRXZCLE9BQU8sR0FBRyxFQUFFOztZQUNkLE1BQU0sR0FBRyxFQUFFO1FBRWIsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7WUFDdkMsSUFBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7c0JBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUN0RCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUN4QixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJO29CQUNKLE9BQU8sRUFBRSxTQUFTLFlBQVksQ0FBQyxTQUFTLEVBQUU7b0JBQzFDLEtBQUssRUFBRSxFQUFFO2lCQUNWLENBQUM7YUFDSDtZQUVELElBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7O29CQUM3QixhQUFhLEdBQVcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O2dCQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMzQixJQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUTt3QkFBRSxhQUFhLEdBQUcsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZFLENBQUMsRUFBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDWjtpQkFDRixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDOztjQUVHLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLG9CQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQztRQUM3RSxPQUFPO1lBQ0wsT0FBTztZQUNQLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLHNCQUFzQixVQUFVLFlBQVk7b0JBQ2xELE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsVUFBVTtxQkFDbkI7aUJBQ0Y7YUFDRjtZQUNELFFBQVEsRUFBRSxzRkFBc0Y7U0FDakcsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBBRFZBTkNFRF9BVVRPQ09NUExFVEVfTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUF1dG9jb21wbGV0ZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcblxuICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsQ291bnQgfSA9IGRhdGEsXG4gICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IGl0ZW1JZHMgPSBbXSxcbiAgICAgIGdyb3VwcyA9IHt9O1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoeyBpdGVtLCB0eXBlT2ZFbnRpdHkgfSkgPT4ge1xuICAgICAgaWYoIWdyb3Vwc1t0eXBlT2ZFbnRpdHkuaWRdKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGNvbmZpZ1t0eXBlT2ZFbnRpdHkuY29uZmlnS2V5XTtcbiAgICAgICAgZ3JvdXBzW3R5cGVPZkVudGl0eS5pZF0gPSB7XG4gICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgIGljb24sXG4gICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7dHlwZU9mRW50aXR5LmNvbmZpZ0tleX1gLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYoaXRlbUlkcy5pbmRleE9mKGl0ZW0uaWQpID09PSAtMSl7XG4gICAgICAgIGxldCBtZXRhRGF0YVZhbHVlOiBzdHJpbmcgPSAnJztcbiAgICAgICAgaXRlbS5pbmZvLmZvckVhY2goaW5mb0RhdGEgPT4ge1xuICAgICAgICAgIGlmKGluZm9EYXRhLmtleSA9PT0gJ2F1dGhvcicpIG1ldGFEYXRhVmFsdWUgPSBgZGkgJHtpbmZvRGF0YS52YWx1ZX1gO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXBzW3R5cGVPZkVudGl0eS5pZF0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsIFxuICAgICAgICAgIHZhbHVlOiBtZXRhRGF0YVZhbHVlLCBcbiAgICAgICAgICBwYXlsb2FkOiB7IFxuICAgICAgICAgICAgc291cmNlOiAnaXRlbScsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGtleSA9PiAoeyBncm91cDogey4uLmdyb3Vwc1trZXldfSB9KSk7XG4gICAgcmV0dXJuIHsgXG4gICAgICByZXN1bHRzLFxuICAgICAgYWN0aW9uczoge1xuICAgICAgICBzaG93TW9yZToge1xuICAgICAgICAgIHRleHQ6IGBWaXN1YWxpenphIHR1dHRpIGkgJHt0b3RhbENvdW50fSByaXN1bHRhdGlgLFxuICAgICAgICAgIHBheWxvYWQ6IHsgXG4gICAgICAgICAgICBzb3VyY2U6ICdzaG93TW9yZScgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xuICAgIH07XG4gIH1cbn0iXX0=