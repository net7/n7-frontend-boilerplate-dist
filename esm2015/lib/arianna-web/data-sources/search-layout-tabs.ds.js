/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsVUFBVTtJQUFwRDs7UUFDVSxhQUFRLEdBQVcsTUFBTSxDQUFDO0lBd0JwQyxDQUFDOzs7Ozs7SUF0QlcsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTztZQUNMLEtBQUssRUFBRSxDQUFDO29CQUNOLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRSxNQUFNO29CQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUN2RCxFQUFFO29CQUNELElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDeEQsRUFBRTtvQkFDRCxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMzRCxDQUFDO1NBQ0gsQ0FBQTtJQUNILENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQUs7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztDQUVGOzs7Ozs7SUF4QkMsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0VGFic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IHN0cmluZyA9ICdsaXN0JztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIHJldHVybiB7IFxuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIHRleHQ6ICdMSVNUQScsIFxuICAgICAgICBwYXlsb2FkOiAnbGlzdCcsXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICdsaXN0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJ1xuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAnR1JBRklDTycsIFxuICAgICAgICBwYXlsb2FkOiAnY2hhcnQnLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAnY2hhcnQnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICdUSU1FTElORScsIFxuICAgICAgICBwYXlsb2FkOiAndGltZWxpbmUnLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAndGltZWxpbmUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnXG4gICAgICB9XSBcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodGFiSWQpe1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0YWJJZDtcbiAgfVxuXG59Il19