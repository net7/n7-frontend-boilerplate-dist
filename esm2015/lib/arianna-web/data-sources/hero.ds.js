/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/hero.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHeroDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { title, text, button, backgroundImage, input } = data;
        return {
            title,
            text,
            backgroundImage,
            button: {
                text: button.text,
                payload: "cerca"
            },
            input: {
                placeholder: input.placeholder,
                payload: "cerca-in-maxxi"
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7Ozs7OztJQUM1QixTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO1FBRTVELE9BQU87WUFDTCxLQUFLO1lBQ0wsSUFBSTtZQUNKLGVBQWU7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixPQUFPLEVBQUUsT0FBTzthQUNqQjtZQUNELEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgY29uc3QgeyB0aXRsZSwgdGV4dCwgYnV0dG9uLCBiYWNrZ3JvdW5kSW1hZ2UsIGlucHV0IH0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgdGV4dCxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgcGF5bG9hZDogXCJjZXJjYVwiXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwYXlsb2FkOiBcImNlcmNhLWluLW1heHhpXCJcbiAgICAgIH1cbiAgICB9O1xuICB9XG59Il19