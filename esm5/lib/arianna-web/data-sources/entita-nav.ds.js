/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwEntitaNavDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaNavDS, _super);
    function AwEntitaNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    AwEntitaNavDS.prototype.transform = /**
     * @protected
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (!param)
            return;
        /** @type {?} */
        var data = param.data;
        /** @type {?} */
        var selected = param.selected;
        /** @type {?} */
        var navigation = { items: [], payload: 'entita-nav' };
        navigation.items.push({
            text: 'OVERVIEW',
            payload: 'overview',
            classes: selected == 'overview' ? 'is-selected' : ''
        });
        if (data.fieldsTab) {
            navigation.items.push({
                text: 'CAMPI',
                payload: 'campi',
                classes: selected == 'campi' ? 'is-selected' : ''
            });
        }
        if (data.items) {
            navigation.items.push({
                text: 'OGGETTI-COLLEGATI',
                payload: 'oggetti-collegati',
                classes: selected == 'oggetti-collegati' ? 'is-selected' : ''
            });
        }
        if (data.entities) {
            navigation.items.push({
                text: 'ENTITÀ COLLEGATE',
                payload: 'entita-collegate',
                classes: selected == 'entita-collegate' ? 'is-selected' : ''
            });
        }
        if (data.extraTabUrl) {
            navigation.items.push({
                text: 'MAXXI',
                payload: 'maxxi',
                classes: selected == 'maxxi' ? 'is-selected' : ''
            });
        }
        if (data.wikiTabUrl) {
            navigation.items.push({
                text: 'WIKIPEDIA',
                payload: 'wiki',
                classes: selected == 'wiki' ? 'is-selected' : ''
            });
        }
        return navigation;
    };
    return AwEntitaNavDS;
}(DataSource));
export { AwEntitaNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFtQyx5Q0FBVTtJQUE3Qzs7SUErQ0EsQ0FBQzs7Ozs7O0lBN0NXLGlDQUFTOzs7OztJQUFuQixVQUFxQixLQUFLO1FBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTzs7WUFFYixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7O1lBQ2pCLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTs7WUFDekIsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1FBRXZELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE9BQU8sRUFBRSxRQUFRLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDckQsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNsRCxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsUUFBUSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUQsQ0FBQyxDQUFBO1NBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLE9BQU8sRUFBRSxRQUFRLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUM3RCxDQUFDLENBQUE7U0FBSztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDbEQsQ0FBQyxDQUFBO1NBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsTUFBTTtnQkFDZixPQUFPLEVBQUUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2pELENBQUMsQ0FBQTtTQUFLO1FBQ1QsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQS9DRCxDQUFtQyxVQUFVLEdBK0M1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSggcGFyYW0gKXtcbiAgICBpZiAoIXBhcmFtKSByZXR1cm47XG5cbiAgICBjb25zdCBkYXRhID0gcGFyYW0uZGF0YVxuICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyYW0uc2VsZWN0ZWRcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0geyBpdGVtczogW10sIHBheWxvYWQ6ICdlbnRpdGEtbmF2JyB9XG5cbiAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goeyBcbiAgICAgIHRleHQ6ICdPVkVSVklFVycsIFxuICAgICAgcGF5bG9hZDogJ292ZXJ2aWV3JywgXG4gICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnb3ZlcnZpZXcnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgfSlcbiAgICBpZiAoZGF0YS5maWVsZHNUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdDQU1QSScsXG4gICAgICAgIHBheWxvYWQ6ICdjYW1waScsXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09ICdjYW1waScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnT0dHRVRUSS1DT0xMRUdBVEknLFxuICAgICAgICBwYXlsb2FkOiAnb2dnZXR0aS1jb2xsZWdhdGknLFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KSAgICB9XG4gICAgaWYgKGRhdGEuZW50aXRpZXMpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdFTlRJVMOAIENPTExFR0FURScsXG4gICAgICAgIHBheWxvYWQ6ICdlbnRpdGEtY29sbGVnYXRlJyxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT0gJ2VudGl0YS1jb2xsZWdhdGUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KSAgICB9XG4gICAgaWYgKGRhdGEuZXh0cmFUYWJVcmwpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdNQVhYSScsXG4gICAgICAgIHBheWxvYWQ6ICdtYXh4aScsXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09ICdtYXh4aScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pICAgIH1cbiAgICBpZiAoZGF0YS53aWtpVGFiVXJsKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnV0lLSVBFRElBJyxcbiAgICAgICAgcGF5bG9hZDogJ3dpa2knLFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnd2lraScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pICAgIH1cbiAgICByZXR1cm4gbmF2aWdhdGlvblxuICB9XG59Il19