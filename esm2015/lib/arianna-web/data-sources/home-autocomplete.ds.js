/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-autocomplete.ds.ts
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
                    type: groupId,
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
                        href: `${paths[entity ? 'entitaBasePath' : 'schedaBasePath']}/${currentItem.id}/${helpers.slugify(currentItem.label)}`,
                    },
                });
            }
        }));
        /** @type {?} */
        const grouplist = Object.keys(groups).map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => ({
            group: {
                title: groups[key].title,
                icon: groups[key].icon,
                classes: groups[key].classes,
            },
            items: groups[key].items,
        })));
        return {
            results: grouplist,
            actions: grouplist.length > 0 ? {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query,
                        },
                    },
                },
            } : {
                showMore: {
                    text: 'Cerca in tutti i campi',
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query,
                            // Query string
                            'query-all': 1,
                        },
                    },
                },
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVOzs7Ozs7SUFDeEMsU0FBUyxDQUFDLElBQUk7Y0FDaEIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTtjQUMxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxRQUFRO2NBQ2xDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTzs7Y0FDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O2NBQ2xDLE9BQU8sR0FBRyxFQUFFOztjQUNaLE1BQU0sR0FBRyxFQUFFO1FBRWpCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFOztrQkFDN0IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWE7O2tCQUMzRCxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7a0JBQzNCLFlBQVksR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDOztrQkFDM0MsV0FBVyxHQUFHLElBQUksSUFBSSxNQUFNO1lBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7c0JBQ2QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsV0FB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bSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdIb21lQXV0b2NvbXBsZXRlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IHsgcmVzcG9uc2UsIHF1ZXJ5IH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyByZXN1bHRzLCB0b3RhbENvdW50IH0gPSByZXNwb25zZTtcclxuICAgIGNvbnN0IHsga2V5cywgY29uZmlnLCBwYXRocyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5vcHRpb25zLmxhYmVscyB8fCB7fTtcclxuICAgIGNvbnN0IGl0ZW1JZHMgPSBbXTtcclxuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xyXG5cclxuICAgIHJlc3VsdHMuZm9yRWFjaCgoeyBpdGVtLCBlbnRpdHkgfSkgPT4ge1xyXG4gICAgICBjb25zdCBncm91cElkID0gZW50aXR5ID8gZW50aXR5LnR5cGVPZkVudGl0eSA6IGl0ZW0uZG9jdW1lbnRfdHlwZTtcclxuICAgICAgY29uc3QgZ3JvdXBDb25maWcgPSBrZXlzW2dyb3VwSWRdO1xyXG4gICAgICBjb25zdCBtYWluTWV0YWRhdGEgPSBncm91cENvbmZpZ1snbWFpbi1tZXRhZGF0YSddO1xyXG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGl0ZW0gfHwgZW50aXR5O1xyXG5cclxuICAgICAgaWYgKCFncm91cHNbZ3JvdXBJZF0pIHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBncm91cENvbmZpZztcclxuICAgICAgICBncm91cHNbZ3JvdXBJZF0gPSB7XHJcbiAgICAgICAgICB0aXRsZTogbGFiZWwsXHJcbiAgICAgICAgICBpY29uLFxyXG4gICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7Z3JvdXBDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxyXG4gICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgdHlwZTogZ3JvdXBJZCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbUlkcy5pbmRleE9mKGN1cnJlbnRJdGVtLmlkKSA9PT0gLTEpIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IFtdO1xyXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5maWVsZHMpIHtcclxuICAgICAgICAgIGN1cnJlbnRJdGVtLmZpZWxkcy5mb3JFYWNoKCh7IGtleSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFpbk1ldGFkYXRhICYmIGtleSA9PT0gbWFpbk1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGtleTogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1trZXldKSwgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncm91cHNbZ3JvdXBJZF0uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICB0aXRsZTogY3VycmVudEl0ZW0ubGFiZWwsXHJcbiAgICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBgJHtwYXRoc1tlbnRpdHkgPyAnZW50aXRhQmFzZVBhdGgnIDogJ3NjaGVkYUJhc2VQYXRoJ119LyR7Y3VycmVudEl0ZW0uaWR9LyR7aGVscGVycy5zbHVnaWZ5KGN1cnJlbnRJdGVtLmxhYmVsKX1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ3JvdXBsaXN0ID0gT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoKGtleSkgPT4gKHtcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICB0aXRsZTogZ3JvdXBzW2tleV0udGl0bGUsXHJcbiAgICAgICAgaWNvbjogZ3JvdXBzW2tleV0uaWNvbixcclxuICAgICAgICBjbGFzc2VzOiBncm91cHNba2V5XS5jbGFzc2VzLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtczogZ3JvdXBzW2tleV0uaXRlbXMsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdWx0czogZ3JvdXBsaXN0LFxyXG4gICAgICBhY3Rpb25zOiBncm91cGxpc3QubGVuZ3RoID4gMCA/IHtcclxuICAgICAgICBzaG93TW9yZToge1xyXG4gICAgICAgICAgdGV4dDogYFZpc3VhbGl6emEgdHV0dGkgaSAke3RvdGFsQ291bnR9IHJpc3VsdGF0aWAsXHJcbiAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgaHJlZjogcGF0aHMuc2VhcmNoQmFzZVBhdGgsXHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gOiB7XHJcbiAgICAgICAgc2hvd01vcmU6IHtcclxuICAgICAgICAgIHRleHQ6ICdDZXJjYSBpbiB0dXR0aSBpIGNhbXBpJyxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICBxdWVyeSwgLy8gUXVlcnkgc3RyaW5nXHJcbiAgICAgICAgICAgICAgJ3F1ZXJ5LWFsbCc6IDEsIC8vIFwiQ2VyY2EgaW4gdHV0dGkgaSBjYW1waSBkZWxsZSBzY2hlZGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBmYWxsYmFjazogKChjb25maWcuZ2V0KCdob21lLWxheW91dCcpIHx8IHt9KVsndG9wLWhlcm8nXSB8fCB7fSkuZmFsbGJhY2ssXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=