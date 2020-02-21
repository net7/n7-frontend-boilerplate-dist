/**
 * @fileoverview added by tsickle
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
            return;
        }
        /** @type {?} */
        const data = param.data;
        /** @type {?} */
        const selected = param.selected;
        /** @type {?} */
        const navigation = { items: [], payload: 'entita-nav' };
        navigation.items.push({
            text: 'OVERVIEW',
            anchor: { href: param.basePath + '/overview' },
            classes: selected === 'overview' ? 'is-selected' : ''
        });
        if (data.fields && data.fields.length > 0) {
            navigation.items.push({
                text: 'CAMPI',
                anchor: { href: param.basePath + '/campi' },
                classes: selected === 'campi' ? 'is-selected' : ''
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI COLLEGATI',
                anchor: {
                    href: param.basePath + '/oggetti-collegati',
                    queryParams: {
                        page: 1
                    }
                },
                classes: selected === 'oggetti-collegati' ? 'is-selected' : ''
            });
        }
        if (data.relatedEntities && this.options['bubblesEnabled']) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                anchor: { href: param.basePath + '/entita-collegate' },
                classes: selected === 'entita-collegate' ? 'is-selected' : ''
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                anchor: { href: param.basePath + '/maxxi' },
                classes: selected === 'maxxi' ? 'is-selected' : ''
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                anchor: { href: param.basePath + '/wiki' },
                classes: selected === 'wiki' ? 'is-selected' : ''
            });
        }
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTs7Ozs7O0lBRWpDLFNBQVMsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7O2NBQ0ssSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOztjQUNqQixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7O2NBQ3pCLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUV2RCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXLEVBQUU7WUFDOUMsT0FBTyxFQUFFLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxvQkFBb0I7b0JBQzNDLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsQ0FBQztxQkFDUjtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsUUFBUSxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDL0QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzFELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsRUFBRTtnQkFDdEQsT0FBTyxFQUFFLFFBQVEsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzlELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbkQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLEVBQUU7Z0JBQzFDLE9BQU8sRUFBRSxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbEQsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0ocGFyYW0pIHtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBwYXJhbS5kYXRhO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyYW0uc2VsZWN0ZWQ7XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHsgaXRlbXM6IFtdLCBwYXlsb2FkOiAnZW50aXRhLW5hdicgfVxuXG4gICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgIHRleHQ6ICdPVkVSVklFVycsXG4gICAgICBhbmNob3I6IHsgaHJlZjogcGFyYW0uYmFzZVBhdGggKyAnL292ZXJ2aWV3JyB9LFxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdvdmVydmlldycgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICB9KTtcbiAgICBpZiAoZGF0YS5maWVsZHMgJiYgZGF0YS5maWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0NBTVBJJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy9jYW1waScgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICdjYW1waScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdPR0dFVFRJIENPTExFR0FUSScsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy9vZ2dldHRpLWNvbGxlZ2F0aScsXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgIHBhZ2U6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEucmVsYXRlZEVudGl0aWVzICYmIHRoaXMub3B0aW9uc1snYnViYmxlc0VuYWJsZWQnXSkge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0VOVElUw4AgQ09MTEVHQVRFJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6IHBhcmFtLmJhc2VQYXRoICsgJy9lbnRpdGEtY29sbGVnYXRlJyB9LFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PT0gJ2VudGl0YS1jb2xsZWdhdGUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuZXh0cmFUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdNQVhYSScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvbWF4eGknIH0sXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09PSAnbWF4eGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEud2lraVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ1dJS0lQRURJQScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiBwYXJhbS5iYXNlUGF0aCArICcvd2lraScgfSxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT09ICd3aWtpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRpb247XG4gIH1cbn0iXX0=