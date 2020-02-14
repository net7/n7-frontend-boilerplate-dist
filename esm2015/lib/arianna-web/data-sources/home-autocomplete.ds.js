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
        const { response, query } = data;
        const { results, totalCount } = response;
        const { keys, config, paths } = this.options;
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
            const groupId = entity ? entity.typeOfEntity : item.document_type;
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
                    classes: `color-${groupConfig['class-name']}`,
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
                    anchor: {
                        href: `${paths[entity ? 'entitaBasePath' : 'schedaBasePath']}/${currentItem.id}/${helpers.slugify(currentItem.label)}`
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
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query
                        }
                    }
                }
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7Ozs7OztJQUN4QyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO2NBQzFCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLFFBQVE7Y0FDbEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7Y0FDbEMsT0FBTyxHQUFHLEVBQUU7O2NBQ1osTUFBTSxHQUFHLEVBQUU7UUFFakIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7O2tCQUM3QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTs7a0JBQy9ELFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztrQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2tCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtzQkFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxXQUFXO2dCQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7b0JBQ2hCLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUk7b0JBQ0osT0FBTyxFQUFFLFNBQVMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUM3QyxLQUFLLEVBQUUsRUFBRTtvQkFDVCxJQUFJLEVBQUUsT0FBTztpQkFDZCxDQUFDO2FBQ0g7WUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztzQkFDcEMsUUFBUSxHQUFHLEVBQUU7Z0JBQ25CLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTt3QkFDNUMsSUFBSSxZQUFZLElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTs0QkFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7eUJBQzVFO29CQUNILENBQUMsRUFBQyxDQUFDO2lCQUNKO2dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUN6QixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7b0JBQ3hCLFFBQVE7b0JBQ1IsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7cUJBQ3ZIO2lCQUNGLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSztvQkFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO29CQUN0QixPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87aUJBQzdCO2dCQUNELEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSzthQUN6QixDQUFDLEVBQUM7WUFDSCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxzQkFBc0IsVUFBVSxZQUFZO29CQUNsRCxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxjQUFjO3dCQUMxQixXQUFXLEVBQUU7NEJBQ1gsS0FBSzt5QkFDTjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVE7U0FDekUsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHJlc3BvbnNlLCBxdWVyeSB9ID0gZGF0YSxcbiAgICAgICAgICB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IHJlc3BvbnNlLFxuICAgICAgICAgIHsga2V5cywgY29uZmlnLCBwYXRocyB9ID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge30sXG4gICAgICAgICAgaXRlbUlkcyA9IFtdLFxuICAgICAgICAgIGdyb3VwcyA9IHt9O1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gZW50aXR5ID8gZW50aXR5LnR5cGVPZkVudGl0eSA6IGl0ZW0uZG9jdW1lbnRfdHlwZSxcbiAgICAgICAgZ3JvdXBDb25maWcgPSBrZXlzW2dyb3VwSWRdLFxuICAgICAgICBtYWluTWV0YWRhdGEgPSBncm91cENvbmZpZ1snbWFpbi1tZXRhZGF0YSddLFxuICAgICAgICBjdXJyZW50SXRlbSA9IGl0ZW0gfHwgZW50aXR5O1xuXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBncm91cENvbmZpZztcbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdID0ge1xuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2dyb3VwQ29uZmlnWydjbGFzcy1uYW1lJ119YCxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgdHlwZTogZ3JvdXBJZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbUlkcy5pbmRleE9mKGN1cnJlbnRJdGVtLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBbXTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xuICAgICAgICAgIGN1cnJlbnRJdGVtLmZpZWxkcy5mb3JFYWNoKCh7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1haW5NZXRhZGF0YSAmJiBrZXkgPT09IG1haW5NZXRhZGF0YSkge1xuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbZ3JvdXBJZF0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IGN1cnJlbnRJdGVtLmxhYmVsLFxuICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgaHJlZjogYCR7cGF0aHNbZW50aXR5ID8gJ2VudGl0YUJhc2VQYXRoJyA6ICdzY2hlZGFCYXNlUGF0aCddfS8ke2N1cnJlbnRJdGVtLmlkfS8ke2hlbHBlcnMuc2x1Z2lmeShjdXJyZW50SXRlbS5sYWJlbCl9YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0czogT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoa2V5ID0+ICh7XG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgdGl0bGU6IGdyb3Vwc1trZXldLnRpdGxlLFxuICAgICAgICAgIGljb246IGdyb3Vwc1trZXldLmljb24sXG4gICAgICAgICAgY2xhc3NlczogZ3JvdXBzW2tleV0uY2xhc3Nlc1xuICAgICAgICB9LFxuICAgICAgICBpdGVtczogZ3JvdXBzW2tleV0uaXRlbXNcbiAgICAgIH0pKSxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIGhyZWY6IHBhdGhzLnNlYXJjaEJhc2VQYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxsYmFjazogKChjb25maWcuZ2V0KCdob21lLWxheW91dCcpIHx8IHt9KVsndG9wLWhlcm8nXSB8fCB7fSkuZmFsbGJhY2tcbiAgICB9O1xuICB9XG59XG4iXX0=