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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7Ozs7OztJQUN4QyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO2NBQzFCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLFFBQVE7Y0FDbEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7Y0FDbEMsT0FBTyxHQUFHLEVBQUU7O2NBQ1osTUFBTSxHQUFHLEVBQUU7UUFFakIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7O2tCQUM3QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTs7a0JBQzNELFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztrQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2tCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtzQkFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxXQUFX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ICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHJlc3BvbnNlLCBxdWVyeSB9ID0gZGF0YTtcbiAgICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHsga2V5cywgY29uZmlnLCBwYXRocyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge307XG4gICAgY29uc3QgaXRlbUlkcyA9IFtdO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gZW50aXR5ID8gZW50aXR5LnR5cGVPZkVudGl0eSA6IGl0ZW0uZG9jdW1lbnRfdHlwZTtcbiAgICAgIGNvbnN0IGdyb3VwQ29uZmlnID0ga2V5c1tncm91cElkXTtcbiAgICAgIGNvbnN0IG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ107XG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGl0ZW0gfHwgZW50aXR5O1xuXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBncm91cENvbmZpZztcbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdID0ge1xuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2dyb3VwQ29uZmlnWydjbGFzcy1uYW1lJ119YCxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgdHlwZTogZ3JvdXBJZCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1JZHMuaW5kZXhPZihjdXJyZW50SXRlbS5pZCkgPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5maWVsZHMpIHtcbiAgICAgICAgICBjdXJyZW50SXRlbS5maWVsZHMuZm9yRWFjaCgoeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGtleTogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1trZXldKSwgdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdLml0ZW1zLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcbiAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhzW2VudGl0eSA/ICdlbnRpdGFCYXNlUGF0aCcgOiAnc2NoZWRhQmFzZVBhdGgnXX0vJHtjdXJyZW50SXRlbS5pZH0vJHtoZWxwZXJzLnNsdWdpZnkoY3VycmVudEl0ZW0ubGFiZWwpfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBncm91cGxpc3QgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgZ3JvdXA6IHtcbiAgICAgICAgdGl0bGU6IGdyb3Vwc1trZXldLnRpdGxlLFxuICAgICAgICBpY29uOiBncm91cHNba2V5XS5pY29uLFxuICAgICAgICBjbGFzc2VzOiBncm91cHNba2V5XS5jbGFzc2VzLFxuICAgICAgfSxcbiAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtcyxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0czogZ3JvdXBsaXN0LFxuICAgICAgYWN0aW9uczogZ3JvdXBsaXN0Lmxlbmd0aCA+IDAgPyB7XG4gICAgICAgIHNob3dNb3JlOiB7XG4gICAgICAgICAgdGV4dDogYFZpc3VhbGl6emEgdHV0dGkgaSAke3RvdGFsQ291bnR9IHJpc3VsdGF0aWAsXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSA6IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiAnQ2VyY2EgaW4gdHV0dGkgaSBjYW1waScsXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5LCAvLyBRdWVyeSBzdHJpbmdcbiAgICAgICAgICAgICAgJ3F1ZXJ5LWFsbCc6IDEsIC8vIFwiQ2VyY2EgaW4gdHV0dGkgaSBjYW1waSBkZWxsZSBzY2hlZGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pWyd0b3AtaGVybyddIHx8IHt9KS5mYWxsYmFjayxcbiAgICB9O1xuICB9XG59XG4iXX0=