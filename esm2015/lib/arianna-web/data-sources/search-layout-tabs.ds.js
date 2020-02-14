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
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : ''
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : ''
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : ''
                }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUFBcEQ7O1FBQ1UsYUFBUSxHQUFXLE1BQU0sQ0FBQztJQXdCcEMsQ0FBQzs7Ozs7O0lBdEJXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDdkQsRUFBRTtvQkFDRCxJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3hELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDM0QsQ0FBQztTQUNILENBQUE7SUFDSCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxLQUFLO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Q0FFRjs7Ozs7O0lBeEJDLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRUYWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcml2YXRlIHNlbGVjdGVkOiBzdHJpbmcgPSAnbGlzdCc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgaXRlbXM6IFt7XHJcbiAgICAgICAgdGV4dDogJ0xJU1RBJywgXHJcbiAgICAgICAgcGF5bG9hZDogJ2xpc3QnLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdsaXN0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJ0dSQUZJQ08nLCBcclxuICAgICAgICBwYXlsb2FkOiAnY2hhcnQnLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdjaGFydCcgPyAnaXMtc2VsZWN0ZWQnIDogJydcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdUSU1FTElORScsIFxyXG4gICAgICAgIHBheWxvYWQ6ICd0aW1lbGluZScsXHJcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ3RpbWVsaW5lJyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xyXG4gICAgICB9XSBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZCh0YWJJZCl7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGFiSWQ7XHJcbiAgfVxyXG5cclxufSJdfQ==