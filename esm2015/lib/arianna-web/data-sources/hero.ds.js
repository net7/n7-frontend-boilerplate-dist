/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/hero.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHeroDS extends DataSource {
    constructor() {
        super(...arguments);
        this.currentInputValue = '';
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { title, text, button, backgroundImage, input, } = data;
        return {
            title,
            text,
            backgroundImage,
            button: {
                text: button.text,
                anchor: {
                    payload: 'cerca',
                },
            },
            input: {
                placeholder: input.placeholder,
                payload: 'cerca-in-maxxi',
            },
        };
    }
}
if (false) {
    /** @type {?} */
    AwHeroDS.prototype.currentInputValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7SUFBeEM7O1FBQ1Msc0JBQWlCLEdBQUcsRUFBRSxDQUFDO0lBc0JoQyxDQUFDOzs7Ozs7SUFwQlcsU0FBUyxDQUFDLElBQUk7Y0FDaEIsRUFDSixLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsS0FBSyxHQUM1QyxHQUFHLElBQUk7UUFDUixPQUFPO1lBQ0wsS0FBSztZQUNMLElBQUk7WUFDSixlQUFlO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQXRCQyxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIGN1cnJlbnRJbnB1dFZhbHVlID0gJyc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSwgdGV4dCwgYnV0dG9uLCBiYWNrZ3JvdW5kSW1hZ2UsIGlucHV0LFxyXG4gICAgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGV4dCxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdjZXJjYScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgcGF5bG9hZDogJ2NlcmNhLWluLW1heHhpJyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==