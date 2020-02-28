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
        /** @type {?} */
        const grouplist = Object.keys(groups).map((/**
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
        })));
        return {
            results: grouplist,
            actions: grouplist.length > 0 ? {
                showMore: {
                    text: `Visualizza tutti i ${totalCount} risultati`,
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query
                        }
                    }
                }
            } : {
                showMore: {
                    text: `Cerca in tutti i campi`,
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query,
                            // Query string
                            'query-all': 1 // "Cerca in tutti i campi delle schede"
                        }
                    }
                }
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7Ozs7OztJQUN4QyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO2NBQzFCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLFFBQVE7Y0FDbEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOztjQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7Y0FDbEMsT0FBTyxHQUFHLEVBQUU7O2NBQ1osTUFBTSxHQUFHLEVBQUU7UUFFakIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7O2tCQUM3QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTs7a0JBQy9ELFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztrQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2tCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtzQkFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxXQUFX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ZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUF1dG9jb21wbGV0ZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgcmVzcG9uc2UsIHF1ZXJ5IH0gPSBkYXRhLFxuICAgICAgICAgIHsgcmVzdWx0cywgdG90YWxDb3VudCB9ID0gcmVzcG9uc2UsXG4gICAgICAgICAgeyBrZXlzLCBjb25maWcsIHBhdGhzIH0gPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5vcHRpb25zLmxhYmVscyB8fCB7fSxcbiAgICAgICAgICBpdGVtSWRzID0gW10sXG4gICAgICAgICAgZ3JvdXBzID0ge307XG5cbiAgICByZXN1bHRzLmZvckVhY2goKHsgaXRlbSwgZW50aXR5IH0pID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBlbnRpdHkgPyBlbnRpdHkudHlwZU9mRW50aXR5IDogaXRlbS5kb2N1bWVudF90eXBlLFxuICAgICAgICBncm91cENvbmZpZyA9IGtleXNbZ3JvdXBJZF0sXG4gICAgICAgIG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ10sXG4gICAgICAgIGN1cnJlbnRJdGVtID0gaXRlbSB8fCBlbnRpdHk7XG5cbiAgICAgIGlmICghZ3JvdXBzW2dyb3VwSWRdKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGdyb3VwQ29uZmlnO1xuICAgICAgICBncm91cHNbZ3JvdXBJZF0gPSB7XG4gICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgIGljb24sXG4gICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7Z3JvdXBDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB0eXBlOiBncm91cElkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtSWRzLmluZGV4T2YoY3VycmVudEl0ZW0uaWQpID09PSAtMSkge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IFtdO1xuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZmllbGRzKSB7XG4gICAgICAgICAgY3VycmVudEl0ZW0uZmllbGRzLmZvckVhY2goKHsga2V5LCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAobWFpbk1ldGFkYXRhICYmIGtleSA9PT0gbWFpbk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLnB1c2goeyBrZXk6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCBsYWJlbHNba2V5XSksIHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdyb3Vwc1tncm91cElkXS5pdGVtcy5wdXNoKHtcbiAgICAgICAgICB0aXRsZTogY3VycmVudEl0ZW0ubGFiZWwsXG4gICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBocmVmOiBgJHtwYXRoc1tlbnRpdHkgPyAnZW50aXRhQmFzZVBhdGgnIDogJ3NjaGVkYUJhc2VQYXRoJ119LyR7Y3VycmVudEl0ZW0uaWR9LyR7aGVscGVycy5zbHVnaWZ5KGN1cnJlbnRJdGVtLmxhYmVsKX1gXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGdyb3VwbGlzdCA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGtleSA9PiAoe1xuICAgICAgZ3JvdXA6IHtcbiAgICAgICAgdGl0bGU6IGdyb3Vwc1trZXldLnRpdGxlLFxuICAgICAgICBpY29uOiBncm91cHNba2V5XS5pY29uLFxuICAgICAgICBjbGFzc2VzOiBncm91cHNba2V5XS5jbGFzc2VzXG4gICAgICB9LFxuICAgICAgaXRlbXM6IGdyb3Vwc1trZXldLml0ZW1zXG4gICAgfSkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0czogZ3JvdXBsaXN0LFxuICAgICAgYWN0aW9uczogZ3JvdXBsaXN0Lmxlbmd0aCA+IDAgPyB7XG4gICAgICAgIHNob3dNb3JlOiB7XG4gICAgICAgICAgdGV4dDogYFZpc3VhbGl6emEgdHV0dGkgaSAke3RvdGFsQ291bnR9IHJpc3VsdGF0aWAsXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IDoge1xuICAgICAgICBzaG93TW9yZToge1xuICAgICAgICAgIHRleHQ6IGBDZXJjYSBpbiB0dXR0aSBpIGNhbXBpYCxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIGhyZWY6IHBhdGhzLnNlYXJjaEJhc2VQYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgcXVlcnksIC8vIFF1ZXJ5IHN0cmluZ1xuICAgICAgICAgICAgICAncXVlcnktYWxsJzogMSAvLyBcIkNlcmNhIGluIHR1dHRpIGkgY2FtcGkgZGVsbGUgc2NoZWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxsYmFjazogKChjb25maWcuZ2V0KCdob21lLWxheW91dCcpIHx8IHt9KVsndG9wLWhlcm8nXSB8fCB7fSkuZmFsbGJhY2tcbiAgICB9O1xuICB9XG59XG4iXX0=