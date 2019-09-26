/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var HeaderDS = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderDS, _super);
    function HeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    HeaderDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log('header', data);
        if (!data)
            return;
        delete data.actions;
        return tslib_1.__assign({}, data, { logo: {
                image: "https://i.imgur.com/kTND3Do.png",
                payload: "aw/home"
            }, nav: {
                items: [
                    { text: 'Home', payload: 'aw/home', icon: 'n7-icon-home' },
                    { text: 'Patrimonio', payload: 'aw/patrimonio', icon: 'n7-icon-tree-icon' },
                    { text: 'Galleria', payload: 'aw/galleria', icon: 'n7-icon-th' },
                    { text: 'Ricerca', payload: 'aw/ricerca', icon: 'n7-icon-search' },
                    { text: 'Utenti', payload: 'aw/utenti', icon: 'n7-icon-facebook' },
                ]
            }, user: {
                img: 'https://placeimg.com/150/150/any/people',
                name: 'Giorgio Spinosa'
            }, menuToggle: {
                open: {
                    payload: 'mobile-open'
                },
                close: {
                    payload: 'mobile-close'
                }
            } });
    };
    return HeaderDS;
}(DataSource));
export { HeaderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQThCLG9DQUFVO0lBQXhDOztJQWlDQSxDQUFDOzs7Ozs7SUFoQ1csNEJBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQiw0QkFBWSxJQUFJLElBQ2IsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxpQ0FBaUM7Z0JBQ3hDLE9BQU8sRUFBRSxTQUFTO2FBQ25CLEVBQ0QsR0FBRyxFQUFFO2dCQUNKLEtBQUssRUFBRTtvQkFDTCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO29CQUMxRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7b0JBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7b0JBQ2hFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtvQkFDbEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2lCQUNuRTthQUNGLEVBQ0QsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSx5Q0FBeUM7Z0JBQzlDLElBQUksRUFBRSxpQkFBaUI7YUFDeEIsRUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxhQUFhO2lCQUN2QjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLGNBQWM7aUJBQ3hCO2FBQ0YsSUFDRDtJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUE4QixVQUFVLEdBaUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnaGVhZGVyJywgZGF0YSk7XG4gICAgaWYoIWRhdGEpIHJldHVybjtcbiAgICBkZWxldGUgZGF0YS5hY3Rpb25zO1xuICAgIHJldHVybiB7IC4uLmRhdGEsIFxuICAgICAgIGxvZ286IHsgXG4gICAgICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tL2tUTkQzRG8ucG5nXCIsXG4gICAgICAgICBwYXlsb2FkOiBcImF3L2hvbWVcIlxuICAgICAgIH0sXG4gICAgICAgbmF2OiB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnSG9tZScsIHBheWxvYWQ6ICdhdy9ob21lJywgaWNvbjogJ243LWljb24taG9tZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQYXRyaW1vbmlvJywgcGF5bG9hZDogJ2F3L3BhdHJpbW9uaW8nLCBpY29uOiAnbjctaWNvbi10cmVlLWljb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR2FsbGVyaWEnLCBwYXlsb2FkOiAnYXcvZ2FsbGVyaWEnLCBpY29uOiAnbjctaWNvbi10aCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSaWNlcmNhJywgcGF5bG9hZDogJ2F3L3JpY2VyY2EnLCBpY29uOiAnbjctaWNvbi1zZWFyY2gnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXRlbnRpJywgcGF5bG9hZDogJ2F3L3V0ZW50aScsIGljb246ICduNy1pY29uLWZhY2Vib29rJyB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgdXNlcjoge1xuICAgICAgICBpbWc6ICdodHRwczovL3BsYWNlaW1nLmNvbS8xNTAvMTUwL2FueS9wZW9wbGUnLFxuICAgICAgICBuYW1lOiAnR2lvcmdpbyBTcGlub3NhJ1xuICAgICAgfSxcbiAgICAgIG1lbnVUb2dnbGU6IHtcbiAgICAgICAgb3Blbjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdtb2JpbGUtb3BlbidcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnbW9iaWxlLWNsb3NlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19