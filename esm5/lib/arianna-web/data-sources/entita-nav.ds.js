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
        if (data.entities && this.options['bubblesEnabled']) {
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
    };
    return AwEntitaNavDS;
}(DataSource));
export { AwEntitaNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFtQyx5Q0FBVTtJQUE3Qzs7SUErQ0EsQ0FBQzs7Ozs7O0lBN0NXLGlDQUFTOzs7OztJQUFuQixVQUFxQixLQUFLO1FBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTzs7WUFFYixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7O1lBQ2pCLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTs7WUFDekIsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1FBRXZELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE9BQU8sRUFBRSxRQUFRLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDckQsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNsRCxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsUUFBUSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUQsQ0FBQyxDQUFBO1NBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ25ELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixPQUFPLEVBQUUsUUFBUSxJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDN0QsQ0FBQyxDQUFBO1NBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ2xELENBQUMsQ0FBQTtTQUFLO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsT0FBTyxFQUFFLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTthQUNqRCxDQUFDLENBQUE7U0FBSztRQUNULE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvQ0QsQ0FBbUMsVUFBVSxHQStDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oIHBhcmFtICl7XG4gICAgaWYgKCFwYXJhbSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGF0YSA9IHBhcmFtLmRhdGFcbiAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmFtLnNlbGVjdGVkXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHsgaXRlbXM6IFtdLCBwYXlsb2FkOiAnZW50aXRhLW5hdicgfVxuXG4gICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgIHRleHQ6ICdPVkVSVklFVycsXG4gICAgICBwYXlsb2FkOiAnb3ZlcnZpZXcnLFxuICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT0gJ292ZXJ2aWV3JyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgIH0pXG4gICAgaWYgKGRhdGEuZmllbGRzVGFiKSB7XG4gICAgICBuYXZpZ2F0aW9uLml0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnQ0FNUEknLFxuICAgICAgICBwYXlsb2FkOiAnY2FtcGknLFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnY2FtcGknID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZGF0YS5pdGVtcykge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ09HR0VUVEktQ09MTEVHQVRJJyxcbiAgICAgICAgcGF5bG9hZDogJ29nZ2V0dGktY29sbGVnYXRpJyxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSkgICAgfVxuICAgIGlmIChkYXRhLmVudGl0aWVzICYmIHRoaXMub3B0aW9uc1snYnViYmxlc0VuYWJsZWQnXSkge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0VOVElUw4AgQ09MTEVHQVRFJyxcbiAgICAgICAgcGF5bG9hZDogJ2VudGl0YS1jb2xsZWdhdGUnLFxuICAgICAgICBjbGFzc2VzOiBzZWxlY3RlZCA9PSAnZW50aXRhLWNvbGxlZ2F0ZScgPyAnaXMtc2VsZWN0ZWQnIDogJydcbiAgICAgIH0pICAgIH1cbiAgICBpZiAoZGF0YS5leHRyYVRhYikge1xuICAgICAgbmF2aWdhdGlvbi5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ01BWFhJJyxcbiAgICAgICAgcGF5bG9hZDogJ21heHhpJyxcbiAgICAgICAgY2xhc3Nlczogc2VsZWN0ZWQgPT0gJ21heHhpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSkgICAgfVxuICAgIGlmIChkYXRhLndpa2lUYWIpIHtcbiAgICAgIG5hdmlnYXRpb24uaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICBwYXlsb2FkOiAnd2lraScsXG4gICAgICAgIGNsYXNzZXM6IHNlbGVjdGVkID09ICd3aWtpJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSkgICAgfVxuICAgIHJldHVybiBuYXZpZ2F0aW9uXG4gIH1cbn0iXX0=