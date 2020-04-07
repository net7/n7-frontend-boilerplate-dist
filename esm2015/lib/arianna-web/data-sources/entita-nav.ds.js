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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVU7Ozs7OztJQUNqQyxTQUFTLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtjQUNLLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSztjQUNoQixFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUs7O2NBQ3BCLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUV2RCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxXQUFXLEVBQUU7WUFDOUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxvQkFBb0I7b0JBQzNDLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsQ0FBQztxQkFDUjtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsUUFBUSxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDL0QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7WUFDdkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLG1CQUFtQixFQUFFO2dCQUN0RCxPQUFPLEVBQUUsUUFBUSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLFFBQVEsRUFBRTtnQkFDM0MsT0FBTyxFQUFFLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNuRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLE9BQU8sRUFBRTtnQkFDMUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNsRCxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0ocGFyYW0pOiBhbnkge1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IGRhdGEgfSA9IHBhcmFtO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHBhcmFtO1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB7IGl0ZW1zOiBbXSwgcGF5bG9hZDogJ2VudGl0YS1uYXYnIH07XG5cbiAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgdGV4dDogJ09WRVJWSUVXJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb3ZlcnZpZXdgIH0sXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ292ZXJ2aWV3JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICB9KTtcbiAgICBpZiAoZGF0YS5maWVsZHMgJiYgZGF0YS5maWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0NBTVBJJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9jYW1waWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdjYW1waScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnT0dHRVRUSSBDT0xMRUdBVEknLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vb2dnZXR0aS1jb2xsZWdhdGlgLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnJlbGF0ZWRFbnRpdGllcyAmJiB0aGlzLm9wdGlvbnMuYnViYmxlc0VuYWJsZWQpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdFTlRJVMOAIENPTExFR0FURScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vZW50aXRhLWNvbGxlZ2F0ZWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdlbnRpdGEtY29sbGVnYXRlJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5leHRyYVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGAke3BhcmFtLmJhc2VQYXRofS9tYXh4aWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdtYXh4aScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEud2lraVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ1dJS0lQRURJQScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBgJHtwYXJhbS5iYXNlUGF0aH0vd2lraWAgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICd3aWtpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xuICB9XG59XG4iXX0=