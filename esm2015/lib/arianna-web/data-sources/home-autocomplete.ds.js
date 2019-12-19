/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwHomeAutocompleteDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { results, totalCount } = data;
        const { keys, config } = this.options;
        /** @type {?} */
        const labels = this.options.labels || {};
        /** @type {?} */
        const itemIds = [];
        /** @type {?} */
        const groups = {};
        results.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item, entity }) => {
            /** @type {?} */
            const groupId = entity ? entity.typeOfEntity.replace(' ', '-') : 'oggetto-culturale';
            /** @type {?} */
            const groupConfig = keys[groupId];
            /** @type {?} */
            const mainMetadata = groupConfig['main-metadata'];
            /** @type {?} */
            const currentItem = item || entity;
            if (!groups[groupId]) {
                const { label, icon } = groupConfig;
                groups[groupId] = {
                    title: label,
                    icon,
                    classes: `color-${groupId}`,
                    items: [],
                    type: groupId
                };
            }
            if (itemIds.indexOf(currentItem.id) === -1) {
                /** @type {?} */
                const metadata = [];
                if (currentItem.fields) {
                    currentItem.fields.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ key, value }) => {
                        if (mainMetadata && key === mainMetadata) {
                            metadata.push({ key: helpers.prettifySnakeCase(key, labels[key]), value });
                        }
                    }));
                }
                groups[groupId].items.push({
                    title: currentItem.label,
                    metadata,
                    payload: {
                        source: 'item',
                        id: currentItem.id,
                        type: (groups[groupId] || {}).type
                    }
                });
            }
        }));
        return {
            results: Object.keys(groups).map((/**
             * @param {?} key
             * @return {?}
             */
            key => ({
                group: {
                    title: groups[key].title,
                    icon: groups[key].icon,
                    classes: groups[key].classes
                },
                items: groups[key].items
            }))),
            actions: {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    payload: {
                        source: 'showMore'
                    }
                }
            },
            fallback: ((config.get('home-layout') || {})["top-hero"] || {}).fallback
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7Ozs7OztJQUN4QyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJO2NBQzlCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7Y0FDbEMsT0FBTyxHQUFHLEVBQUU7O2NBQ1osTUFBTSxHQUFHLEVBQUU7UUFFakIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7O2tCQUM3QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjs7a0JBQ2xGLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztrQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2tCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtzQkFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxXQUFXO2dCQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7b0JBQ2hCLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUk7b0JBQ0osT0FBTyxFQUFFLFNBQVMsT0FBTyxFQUFFO29CQUMzQixLQUFLLEVBQUUsRUFBRTtvQkFDVCxJQUFJLEVBQUUsT0FBTztpQkFDZCxDQUFDO2FBQ0g7WUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztzQkFDcEMsUUFBUSxHQUFHLEVBQUU7Z0JBQ25CLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTt3QkFDNUMsSUFBSSxZQUFZLElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTs0QkFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7eUJBQzVFO29CQUNILENBQUMsRUFBQyxDQUFDO2lCQUNKO2dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUN6QixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7b0JBQ3hCLFFBQVE7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTt3QkFDbEIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7cUJBQ25DO2lCQUNGLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSztvQkFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO29CQUN0QixPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87aUJBQzdCO2dCQUNELEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSzthQUN6QixDQUFDLEVBQUM7WUFDSCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxzQkFBc0IsVUFBVSxZQUFZO29CQUNsRCxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGO2FBQ0Y7WUFDRCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUTtTQUN6RSxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUF1dG9jb21wbGV0ZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgdG90YWxDb3VudCB9ID0gZGF0YSxcbiAgICAgICAgICB7IGtleXMsIGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge30sXG4gICAgICAgICAgaXRlbUlkcyA9IFtdLFxuICAgICAgICAgIGdyb3VwcyA9IHt9O1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gZW50aXR5ID8gZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKCcgJywgJy0nKSA6ICdvZ2dldHRvLWN1bHR1cmFsZScsXG4gICAgICAgIGdyb3VwQ29uZmlnID0ga2V5c1tncm91cElkXSxcbiAgICAgICAgbWFpbk1ldGFkYXRhID0gZ3JvdXBDb25maWdbJ21haW4tbWV0YWRhdGEnXSxcbiAgICAgICAgY3VycmVudEl0ZW0gPSBpdGVtIHx8IGVudGl0eTtcblxuICAgICAgaWYgKCFncm91cHNbZ3JvdXBJZF0pIHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaWNvbiB9ID0gZ3JvdXBDb25maWc7XG4gICAgICAgIGdyb3Vwc1tncm91cElkXSA9IHtcbiAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtncm91cElkfWAsXG4gICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIHR5cGU6IGdyb3VwSWRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1JZHMuaW5kZXhPZihjdXJyZW50SXRlbS5pZCkgPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5maWVsZHMpIHtcbiAgICAgICAgICBjdXJyZW50SXRlbS5maWVsZHMuZm9yRWFjaCgoeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGtleTogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1trZXldKSwgdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdLml0ZW1zLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcbiAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdpdGVtJyxcbiAgICAgICAgICAgIGlkOiBjdXJyZW50SXRlbS5pZCxcbiAgICAgICAgICAgIHR5cGU6IChncm91cHNbZ3JvdXBJZF0gfHwge30pLnR5cGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHM6IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGtleSA9PiAoe1xuICAgICAgICBncm91cDoge1xuICAgICAgICAgIHRpdGxlOiBncm91cHNba2V5XS50aXRsZSxcbiAgICAgICAgICBpY29uOiBncm91cHNba2V5XS5pY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGdyb3Vwc1trZXldLmNsYXNzZXNcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbXM6IGdyb3Vwc1trZXldLml0ZW1zXG4gICAgICB9KSksXG4gICAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dNb3JlOiB7XG4gICAgICAgICAgdGV4dDogYFZpc3VhbGl6emEgdHV0dGkgaSAke3RvdGFsQ291bnR9IHJpc3VsdGF0aWAsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc291cmNlOiAnc2hvd01vcmUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2s6ICgoY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKSB8fCB7fSlbXCJ0b3AtaGVyb1wiXSB8fCB7fSkuZmFsbGJhY2tcbiAgICB9O1xuICB9XG59XG4iXX0=