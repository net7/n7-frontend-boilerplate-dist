/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/entita-nav.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwEntitaNavDS extends DataSource {
    /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    transform(param) {
        if (!param) {
            return null;
        }
        const { data } = param;
        const { selected } = param;
        /** @type {?} */
        const navigation = { items: [], payload: 'entita-nav' };
        navigation.items.push({
            text: 'OVERVIEW',
            anchor: { href: `${param.basePath}/overview` },
            classes: selected === 'overview' ? 'is-selected' : '',
        });
        if (data.fields && data.fields.length > 0) {
            navigation.items.push({
                text: 'CAMPI',
                anchor: { href: `${param.basePath}/campi` },
                classes: selected === 'campi' ? 'is-selected' : '',
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: `${param.basePath}/oggetti-collegati`,
                    queryParams: {
                        page: 1,
                    },
                },
                classes: selected === 'oggetti-collegati' ? 'is-selected' : '',
            });
        }
        if (data.relatedEntities && this.options.bubblesEnabled) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                anchor: { href: `${param.basePath}/entita-collegate` },
                classes: selected === 'entita-collegate' ? 'is-selected' : '',
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: `${param.basePath}/maxxi` },
                classes: selected === 'maxxi' ? 'is-selected' : '',
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: `${param.basePath}/wiki` },
                classes: selected === 'wiki' ? 'is-selected' : '',
            });
        }
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVU7Ozs7OztJQUNqQyxTQUFTLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtjQUNLLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSztjQUNoQixFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUs7O2NBQ3BCLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUV2RCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxXQUFXLEVBQUU7WUFDOUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxvQkFBb0I7b0JBQzNDLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsQ0FBQztxQkFDUjtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsUUFBUSxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDL0QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLG1CQUFtQixFQUFFO2dCQUN0RCxPQUFPLEVBQUUsUUFBUSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLFFBQVEsRUFBRTtnQkFDM0MsT0FBTyxFQUFFLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNuRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLE9BQU8sRUFBRTtnQkFDMUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNsRCxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0ocGFyYW0pOiBhbnkge1xyXG4gICAgaWYgKCFwYXJhbSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcGFyYW07XHJcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSBwYXJhbTtcclxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB7IGl0ZW1zOiBbXSwgcGF5bG9hZDogJ2VudGl0YS1uYXYnIH07XHJcblxyXG4gICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgdGV4dDogJ09WRVJWSUVXJyxcclxuICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9vdmVydmlld2AgfSxcclxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdvdmVydmlldycgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhLmZpZWxkcyAmJiBkYXRhLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ0NBTVBJJyxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2NhbXBpYCB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnY2FtcGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnJlbGF0ZWRJdGVtcykge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICdPR0dFVFRJIENPTExFR0FUSScsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb2dnZXR0aS1jb2xsZWdhdGlgLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5yZWxhdGVkRW50aXRpZXMgJiYgdGhpcy5vcHRpb25zLmJ1YmJsZXNFbmFibGVkKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ0VOVElUw4AgQ09MTEVHQVRFJyxcclxuICAgICAgICBhbmNob3I6IHsgaHJlZjogYCR7cGFyYW0uYmFzZVBhdGh9L2VudGl0YS1jb2xsZWdhdGVgIH0sXHJcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdlbnRpdGEtY29sbGVnYXRlJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5leHRyYVRhYikge1xyXG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6ICdNQVhYSScsXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9tYXh4aWAgfSxcclxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ21heHhpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS53aWtpVGFiKSB7XHJcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogJ1dJS0lQRURJQScsXHJcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS93aWtpYCB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=