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
                            'query-all': 1, // "Cerca in tutti i campi delle schede"
                        },
                    },
                },
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1hdXRvY29tcGxldGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVO0lBQ3hDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBQ3pDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDbkMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2xFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFB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Q0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVE7U0FDekUsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyByZXNwb25zZSwgcXVlcnkgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgeyBrZXlzLCBjb25maWcsIHBhdGhzIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xyXG4gICAgY29uc3QgaXRlbUlkcyA9IFtdO1xyXG4gICAgY29uc3QgZ3JvdXBzID0ge307XHJcblxyXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBlbnRpdHkgPyBlbnRpdHkudHlwZU9mRW50aXR5IDogaXRlbS5kb2N1bWVudF90eXBlO1xyXG4gICAgICBjb25zdCBncm91cENvbmZpZyA9IGtleXNbZ3JvdXBJZF07XHJcbiAgICAgIGNvbnN0IG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ107XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gaXRlbSB8fCBlbnRpdHk7XHJcblxyXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGdyb3VwQ29uZmlnO1xyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXSA9IHtcclxuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcclxuICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtncm91cENvbmZpZ1snY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICB0eXBlOiBncm91cElkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtSWRzLmluZGV4T2YoY3VycmVudEl0ZW0uaWQpID09PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xyXG4gICAgICAgICAgY3VycmVudEl0ZW0uZmllbGRzLmZvckVhY2goKHsga2V5LCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXS5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcclxuICAgICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhzW2VudGl0eSA/ICdlbnRpdGFCYXNlUGF0aCcgOiAnc2NoZWRhQmFzZVBhdGgnXX0vJHtjdXJyZW50SXRlbS5pZH0vJHtoZWxwZXJzLnNsdWdpZnkoY3VycmVudEl0ZW0ubGFiZWwpfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBncm91cGxpc3QgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIHRpdGxlOiBncm91cHNba2V5XS50aXRsZSxcclxuICAgICAgICBpY29uOiBncm91cHNba2V5XS5pY29uLFxyXG4gICAgICAgIGNsYXNzZXM6IGdyb3Vwc1trZXldLmNsYXNzZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtcyxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN1bHRzOiBncm91cGxpc3QsXHJcbiAgICAgIGFjdGlvbnM6IGdyb3VwbGlzdC5sZW5ndGggPiAwID8ge1xyXG4gICAgICAgIHNob3dNb3JlOiB7XHJcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSA6IHtcclxuICAgICAgICBzaG93TW9yZToge1xyXG4gICAgICAgICAgdGV4dDogJ0NlcmNhIGluIHR1dHRpIGkgY2FtcGknLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IHBhdGhzLnNlYXJjaEJhc2VQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgIHF1ZXJ5LCAvLyBRdWVyeSBzdHJpbmdcclxuICAgICAgICAgICAgICAncXVlcnktYWxsJzogMSwgLy8gXCJDZXJjYSBpbiB0dXR0aSBpIGNhbXBpIGRlbGxlIHNjaGVkZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pWyd0b3AtaGVybyddIHx8IHt9KS5mYWxsYmFjayxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==