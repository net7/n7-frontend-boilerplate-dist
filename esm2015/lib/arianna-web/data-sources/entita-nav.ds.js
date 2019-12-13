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
        if (!param)
            return;
        /** @type {?} */
        const data = param.data;
        /** @type {?} */
        const selected = param.selected;
        /** @type {?} */
        const navigation = { items: [], payload: 'entita-nav' };
        navigation.items.push({
            text: 'OVERVIEW',
            payload: 'overview',
            classes: selected == 'overview' ? 'is-selected' : ''
        });
        if (data.fields && data.fields.length > 0) {
            navigation.items.push({
                text: 'CAMPI',
                payload: 'campi',
                classes: selected == 'campi' ? 'is-selected' : ''
            });
        }
        if (data.relatedItems) {
            navigation.items.push({
                text: 'OGGETTI-COLLEGATI',
                payload: 'oggetti-collegati',
                classes: selected == 'oggetti-collegati' ? 'is-selected' : ''
            });
        }
        if (data.relatedEntities && this.options['bubblesEnabled']) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                payload: 'entita-collegate',
                classes: selected == 'entita-collegate' ? 'is-selected' : ''
            });
        }
        if (data.extraTab) {
            navigation.items.push({
                text: 'MAXXI',
                payload: 'maxxi',
                classes: selected == 'maxxi' ? 'is-selected' : ''
            });
        }
        if (data.wikiTab) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                payload: 'wiki',
                classes: selected == 'wiki' ? 'is-selected' : ''
            });
        }
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTs7Ozs7O0lBRWpDLFNBQVMsQ0FBRSxLQUFLO1FBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTzs7Y0FDYixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7O2NBQ2pCLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTs7Y0FDekIsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1FBRXZELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE9BQU8sRUFBRSxRQUFRLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDckQsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbEQsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLE9BQU8sRUFBRSxRQUFRLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM5RCxDQUFDLENBQUE7U0FBSztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDMUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLE9BQU8sRUFBRSxRQUFRLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM3RCxDQUFDLENBQUE7U0FBSztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbEQsQ0FBQyxDQUFBO1NBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsTUFBTTtnQkFDZixPQUFPLEVBQUUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2pELENBQUMsQ0FBQTtTQUFLO1FBQ1QsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCBwYXJhbSApe1xuICAgIGlmICghcGFyYW0pIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0gcGFyYW0uZGF0YVxuICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyYW0uc2VsZWN0ZWRcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0geyBpdGVtczogW10sIHBheWxvYWQ6ICdlbnRpdGEtbmF2JyB9XG5cbiAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgdGV4dDogJ09WRVJWSUVXJyxcbiAgICAgIHBheWxvYWQ6ICdvdmVydmlldycsXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnb3ZlcnZpZXcnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgfSlcbiAgICBpZiAoZGF0YS5maWVsZHMgJiYgZGF0YS5maWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0NBTVBJJyxcbiAgICAgICAgcGF5bG9hZDogJ2NhbXBpJyxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT0gJ2NhbXBpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnT0dHRVRUSS1DT0xMRUdBVEknLFxuICAgICAgICBwYXlsb2FkOiAnb2dnZXR0aS1jb2xsZWdhdGknLFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KSAgICB9XG4gICAgaWYgKGRhdGEucmVsYXRlZEVudGl0aWVzICYmIHRoaXMub3B0aW9uc1snYnViYmxlc0VuYWJsZWQnXSkge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0VOVElUw4AgQ09MTEVHQVRFJyxcbiAgICAgICAgcGF5bG9hZDogJ2VudGl0YS1jb2xsZWdhdGUnLFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnZW50aXRhLWNvbGxlZ2F0ZScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pICAgIH1cbiAgICBpZiAoZGF0YS5leHRyYVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcbiAgICAgICAgcGF5bG9hZDogJ21heHhpJyxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT0gJ21heHhpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSkgICAgfVxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBwYXlsb2FkOiAnd2lraScsXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09ICd3aWtpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSkgICAgfVxuICAgIHJldHVybiBuYXZpZ2F0aW9uXG4gIH1cbn0iXX0=