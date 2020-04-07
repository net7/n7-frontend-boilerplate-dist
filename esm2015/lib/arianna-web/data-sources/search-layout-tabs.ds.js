/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/search-layout-tabs.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwSearchLayoutTabsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.selected = 'list';
    }
    /**
     * @protected
     * @return {?}
     */
    transform() {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : '',
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : '',
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : '',
                }],
        };
    }
    /**
     * @param {?} tabId
     * @return {?}
     */
    setSelected(tabId) {
        this.selected = tabId;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutTabsDS.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUFBcEQ7O1FBQ1UsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQXVCNUIsQ0FBQzs7Ozs7SUFyQlcsU0FBUztRQUNqQixPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3ZELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUN4RCxFQUFFO29CQUNELElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQzNELENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsS0FBSztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBQ0Y7Ozs7OztJQXZCQyx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRUYWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBzZWxlY3RlZCA9ICdsaXN0JztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgdGV4dDogJ0xJU1RBJyxcbiAgICAgICAgcGF5bG9hZDogJ2xpc3QnLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAnbGlzdCcgPyAnaXMtc2VsZWN0ZWQnIDogJycsXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICdHUkFGSUNPJyxcbiAgICAgICAgcGF5bG9hZDogJ2NoYXJ0JyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ2NoYXJ0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogJ1RJTUVMSU5FJyxcbiAgICAgICAgcGF5bG9hZDogJ3RpbWVsaW5lJyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ3RpbWVsaW5lJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcbiAgICAgIH1dLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodGFiSWQpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGFiSWQ7XG4gIH1cbn1cbiJdfQ==