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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVOzs7Ozs7SUFDeEMsU0FBUyxDQUFDLElBQUk7Y0FDaEIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTtjQUMxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxRQUFRO2NBQ2xDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTzs7Y0FDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O2NBQ2xDLE9BQU8sR0FBRyxFQUFFOztjQUNaLE1BQU0sR0FBRyxFQUFFO1FBRWpCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFOztrQkFDN0IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWE7O2tCQUMvRCxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7a0JBQzNCLFlBQVksR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDOztrQkFDM0MsV0FBVyxHQUFHLElBQUksSUFBSSxNQUFNO1lBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7c0JBQ2QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsV0FB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Y2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHJlc3BvbnNlLCBxdWVyeSB9ID0gZGF0YSxcbiAgICAgICAgICB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IHJlc3BvbnNlLFxuICAgICAgICAgIHsga2V5cywgY29uZmlnLCBwYXRocyB9ID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge30sXG4gICAgICAgICAgaXRlbUlkcyA9IFtdLFxuICAgICAgICAgIGdyb3VwcyA9IHt9O1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gZW50aXR5ID8gZW50aXR5LnR5cGVPZkVudGl0eSA6IGl0ZW0uZG9jdW1lbnRfdHlwZSxcbiAgICAgICAgZ3JvdXBDb25maWcgPSBrZXlzW2dyb3VwSWRdLFxuICAgICAgICBtYWluTWV0YWRhdGEgPSBncm91cENvbmZpZ1snbWFpbi1tZXRhZGF0YSddLFxuICAgICAgICBjdXJyZW50SXRlbSA9IGl0ZW0gfHwgZW50aXR5O1xuXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBncm91cENvbmZpZztcbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdID0ge1xuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2dyb3VwQ29uZmlnWydjbGFzcy1uYW1lJ119YCxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgdHlwZTogZ3JvdXBJZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbUlkcy5pbmRleE9mKGN1cnJlbnRJdGVtLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBbXTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xuICAgICAgICAgIGN1cnJlbnRJdGVtLmZpZWxkcy5mb3JFYWNoKCh7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1haW5NZXRhZGF0YSAmJiBrZXkgPT09IG1haW5NZXRhZGF0YSkge1xuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbZ3JvdXBJZF0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IGN1cnJlbnRJdGVtLmxhYmVsLFxuICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgaHJlZjogYCR7cGF0aHNbZW50aXR5ID8gJ2VudGl0YUJhc2VQYXRoJyA6ICdzY2hlZGFCYXNlUGF0aCddfS8ke2N1cnJlbnRJdGVtLmlkfS8ke2hlbHBlcnMuc2x1Z2lmeShjdXJyZW50SXRlbS5sYWJlbCl9YFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBncm91cGxpc3QgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcChrZXkgPT4gKHtcbiAgICAgIGdyb3VwOiB7XG4gICAgICAgIHRpdGxlOiBncm91cHNba2V5XS50aXRsZSxcbiAgICAgICAgaWNvbjogZ3JvdXBzW2tleV0uaWNvbixcbiAgICAgICAgY2xhc3NlczogZ3JvdXBzW2tleV0uY2xhc3Nlc1xuICAgICAgfSxcbiAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtc1xuICAgIH0pKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHM6IGdyb3VwbGlzdCxcbiAgICAgIGFjdGlvbnM6IGdyb3VwbGlzdC5sZW5ndGggPiAwID8ge1xuICAgICAgICBzaG93TW9yZToge1xuICAgICAgICAgIHRleHQ6IGBWaXN1YWxpenphIHR1dHRpIGkgJHt0b3RhbENvdW50fSByaXN1bHRhdGlgLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgaHJlZjogcGF0aHMuc2VhcmNoQmFzZVBhdGgsXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSA6IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiBgQ2VyY2EgaW4gdHV0dGkgaSBjYW1waWAsXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5LCAvLyBRdWVyeSBzdHJpbmdcbiAgICAgICAgICAgICAgJ3F1ZXJ5LWFsbCc6IDEgLy8gXCJDZXJjYSBpbiB0dXR0aSBpIGNhbXBpIGRlbGxlIHNjaGVkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2s6ICgoY29uZmlnLmdldCgnaG9tZS1sYXlvdXQnKSB8fCB7fSlbJ3RvcC1oZXJvJ10gfHwge30pLmZhbGxiYWNrXG4gICAgfTtcbiAgfVxufVxuIl19