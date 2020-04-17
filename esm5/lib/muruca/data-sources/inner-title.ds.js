/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrInnerTitleDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrInnerTitleDS, _super);
    function MrInnerTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrInnerTitleDS.prototype.transform = 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var title = data.title, subtitle = data.subtitle, button = data.button;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: subtitle,
                    classes: 'italic'
                }
            },
            actions: {
                buttons: [
                    {
                        text: button.text,
                        payload: button.link,
                        classes: 'n7-btn-cta'
                    }
                ]
            }
        };
    };
    return MrInnerTitleDS;
}(DataSource));
export { MrInnerTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFvQywwQ0FBVTtJQUE5Qzs7SUEwQkEsQ0FBQztJQXpCQyw2REFBNkQ7Ozs7Ozs7SUFDbkQsa0NBQVM7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBUztRQUNuQixJQUFBLGtCQUFLLEVBQUUsd0JBQVEsRUFBRSxvQkFBTTtRQUMvQixPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ2pCLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDcEIsT0FBTyxFQUFFLFlBQVk7cUJBQ3RCO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUFvQyxVQUFVLEdBMEI3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNcklubmVyVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IHRpdGxlLCBzdWJ0aXRsZSwgYnV0dG9uIH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIHRleHQ6IHN1YnRpdGxlLFxuICAgICAgICAgIGNsYXNzZXM6ICdpdGFsaWMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhY3Rpb25zOiB7XG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGJ1dHRvbi5saW5rLFxuICAgICAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19