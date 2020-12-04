import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwHomeAutocompleteDS extends DataSource {
    transform(data) {
        const { response, query } = data;
        const { results, totalCount } = response;
        const { keys, config, paths } = this.options;
        const labels = this.options.labels || {};
        const itemIds = [];
        const groups = {};
        results.forEach(({ item, entity }) => {
            const groupId = entity ? entity.typeOfEntity : item.document_type;
            const groupConfig = keys[groupId];
            const mainMetadata = groupConfig['main-metadata'];
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
                const metadata = [];
                if (currentItem.fields) {
                    currentItem.fields.forEach(({ key, value }) => {
                        if (mainMetadata && key === mainMetadata) {
                            metadata.push({ key: helpers.prettifySnakeCase(key, labels[key]), value });
                        }
                    });
                }
                groups[groupId].items.push({
                    title: currentItem.label,
                    metadata,
                    anchor: {
                        href: `${paths[entity ? 'entitaBasePath' : 'schedaBasePath']}/${currentItem.id}/${helpers.slugify(currentItem.label)}`,
                    },
                });
            }
        });
        const grouplist = Object.keys(groups).map((key) => ({
            group: {
                title: groups[key].title,
                icon: groups[key].icon,
                classes: groups[key].classes,
            },
            items: groups[key].items,
        }));
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
                            'query-all': 1,
                        },
                    },
                },
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsVUFBVTtJQUN4QyxTQUFTLENBQUMsSUFBSTtRQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUNqQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUN6QyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQ25DLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNsRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxNQUFNLENBQUM7WUFF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QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVE7U0FDekUsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyByZXNwb25zZSwgcXVlcnkgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgeyBrZXlzLCBjb25maWcsIHBhdGhzIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xyXG4gICAgY29uc3QgaXRlbUlkcyA9IFtdO1xyXG4gICAgY29uc3QgZ3JvdXBzID0ge307XHJcblxyXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBlbnRpdHkgPyBlbnRpdHkudHlwZU9mRW50aXR5IDogaXRlbS5kb2N1bWVudF90eXBlO1xyXG4gICAgICBjb25zdCBncm91cENvbmZpZyA9IGtleXNbZ3JvdXBJZF07XHJcbiAgICAgIGNvbnN0IG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ107XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gaXRlbSB8fCBlbnRpdHk7XHJcblxyXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGdyb3VwQ29uZmlnO1xyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXSA9IHtcclxuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcclxuICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtncm91cENvbmZpZ1snY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICB0eXBlOiBncm91cElkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtSWRzLmluZGV4T2YoY3VycmVudEl0ZW0uaWQpID09PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xyXG4gICAgICAgICAgY3VycmVudEl0ZW0uZmllbGRzLmZvckVhY2goKHsga2V5LCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXS5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcclxuICAgICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhzW2VudGl0eSA/ICdlbnRpdGFCYXNlUGF0aCcgOiAnc2NoZWRhQmFzZVBhdGgnXX0vJHtjdXJyZW50SXRlbS5pZH0vJHtoZWxwZXJzLnNsdWdpZnkoY3VycmVudEl0ZW0ubGFiZWwpfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBncm91cGxpc3QgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIHRpdGxlOiBncm91cHNba2V5XS50aXRsZSxcclxuICAgICAgICBpY29uOiBncm91cHNba2V5XS5pY29uLFxyXG4gICAgICAgIGNsYXNzZXM6IGdyb3Vwc1trZXldLmNsYXNzZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtcyxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN1bHRzOiBncm91cGxpc3QsXHJcbiAgICAgIGFjdGlvbnM6IGdyb3VwbGlzdC5sZW5ndGggPiAwID8ge1xyXG4gICAgICAgIHNob3dNb3JlOiB7XHJcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSA6IHtcclxuICAgICAgICBzaG93TW9yZToge1xyXG4gICAgICAgICAgdGV4dDogJ0NlcmNhIGluIHR1dHRpIGkgY2FtcGknLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IHBhdGhzLnNlYXJjaEJhc2VQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgIHF1ZXJ5LCAvLyBRdWVyeSBzdHJpbmdcclxuICAgICAgICAgICAgICAncXVlcnktYWxsJzogMSwgLy8gXCJDZXJjYSBpbiB0dXR0aSBpIGNhbXBpIGRlbGxlIHNjaGVkZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pWyd0b3AtaGVybyddIHx8IHt9KS5mYWxsYmFjayxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==