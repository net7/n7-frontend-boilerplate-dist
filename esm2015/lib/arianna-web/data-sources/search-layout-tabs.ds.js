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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUFBcEQ7O1FBQ1UsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQXVCNUIsQ0FBQzs7Ozs7SUFyQlcsU0FBUztRQUNqQixPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3ZELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUN4RCxFQUFFO29CQUNELElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQzNELENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsS0FBSztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBQ0Y7Ozs7OztJQXZCQyx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0VGFic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZCA9ICdsaXN0JztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zOiBbe1xyXG4gICAgICAgIHRleHQ6ICdMSVNUQScsXHJcbiAgICAgICAgcGF5bG9hZDogJ2xpc3QnLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdsaXN0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdHUkFGSUNPJyxcclxuICAgICAgICBwYXlsb2FkOiAnY2hhcnQnLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdjaGFydCcgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0ZXh0OiAnVElNRUxJTkUnLFxyXG4gICAgICAgIHBheWxvYWQ6ICd0aW1lbGluZScsXHJcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ3RpbWVsaW5lJyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfV0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNlbGVjdGVkKHRhYklkKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGFiSWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==