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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7Ozs7OztJQUV4QyxTQUFTLENBQUMsSUFBSTtjQUVoQixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJO2NBQzVCLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87O1lBRTNCLE9BQU8sR0FBRyxFQUFFOztZQUNkLE1BQU0sR0FBRyxFQUFFO1FBRWIsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7WUFDdkMsSUFBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7c0JBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUN0RCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUN4QixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJO29CQUNKLE9BQU8sRUFBRSxTQUFTLFlBQVksQ0FBQyxTQUFTLEVBQUU7b0JBQzFDLEtBQUssRUFBRSxFQUFFO2lCQUNWLENBQUM7YUFDSDtZQUVELElBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7O29CQUM3QixhQUFhLEdBQVcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O2dCQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMzQixJQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUTt3QkFBRSxhQUFhLEdBQUcsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZFLENBQUMsRUFBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDWjtpQkFDRixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDOztjQUVHLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLG9CQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQztRQUM3RSxPQUFPO1lBQ0wsT0FBTztZQUNQLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLHNCQUFzQixVQUFVLFlBQVk7b0JBQ2xELE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsVUFBVTtxQkFDbkI7aUJBQ0Y7YUFDRjtZQUNELFFBQVEsRUFBRSxzRkFBc0Y7U0FDakcsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBBRFZBTkNFRF9BVVRPQ09NUExFVEVfTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUF1dG9jb21wbGV0ZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcblxuICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsQ291bnQgfSA9IGRhdGEsXG4gICAgICAgICAgeyBjb25maWcgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCBpdGVtSWRzID0gW10sXG4gICAgICBncm91cHMgPSB7fTtcblxuICAgIGl0ZW1zLmZvckVhY2goKHsgaXRlbSwgdHlwZU9mRW50aXR5IH0pID0+IHtcbiAgICAgIGlmKCFncm91cHNbdHlwZU9mRW50aXR5LmlkXSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBjb25maWdbdHlwZU9mRW50aXR5LmNvbmZpZ0tleV07XG4gICAgICAgIGdyb3Vwc1t0eXBlT2ZFbnRpdHkuaWRdID0ge1xuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke3R5cGVPZkVudGl0eS5jb25maWdLZXl9YCxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmKGl0ZW1JZHMuaW5kZXhPZihpdGVtLmlkKSA9PT0gLTEpe1xuICAgICAgICBsZXQgbWV0YURhdGFWYWx1ZTogc3RyaW5nID0gJyc7XG4gICAgICAgIGl0ZW0uaW5mby5mb3JFYWNoKGluZm9EYXRhID0+IHtcbiAgICAgICAgICBpZihpbmZvRGF0YS5rZXkgPT09ICdhdXRob3InKSBtZXRhRGF0YVZhbHVlID0gYGRpICR7aW5mb0RhdGEudmFsdWV9YDtcbiAgICAgICAgfSk7XG4gICAgICAgIGdyb3Vwc1t0eXBlT2ZFbnRpdHkuaWRdLml0ZW1zLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLCBcbiAgICAgICAgICB2YWx1ZTogbWV0YURhdGFWYWx1ZSwgXG4gICAgICAgICAgcGF5bG9hZDogeyBcbiAgICAgICAgICAgIHNvdXJjZTogJ2l0ZW0nLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQgXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcChrZXkgPT4gKHsgZ3JvdXA6IHsuLi5ncm91cHNba2V5XX0gfSkpO1xuICAgIHJldHVybiB7IFxuICAgICAgcmVzdWx0cyxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcbiAgICAgICAgICBwYXlsb2FkOiB7IFxuICAgICAgICAgICAgc291cmNlOiAnc2hvd01vcmUnIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrOiAnU3BpYWNlbnRpLCBub24gw6ggc3RhdG8gdHJvdmF0byBuZXNzdW4gcmlzdWx0YXRvLiA8YnI+IFJpcHJvdmEgY29uIHVuYSBudW92YSByaWNlcmNhLidcbiAgICB9O1xuICB9XG59Il19