/**
 * @fileoverview added by tsickle
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
        const { title, text, button, backgroundImage, input } = data;
        return {
            title,
            text,
            backgroundImage,
            button: {
                text: button.text,
                payload: 'cerca'
            },
            input: {
                placeholder: input.placeholder,
                payload: "cerca-in-maxxi"
            }
        };
    }
}
if (false) {
    /** @type {?} */
    AwHeroDS.prototype.currentInputValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUFDUyxzQkFBaUIsR0FBVyxFQUFFLENBQUE7SUFrQnZDLENBQUM7Ozs7OztJQWhCVyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO1FBQzVELE9BQU87WUFDTCxLQUFLO1lBQ0wsSUFBSTtZQUNKLGVBQWU7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixPQUFPLEVBQUUsT0FBTzthQUNqQjtZQUNELEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGOzs7SUFsQkMscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjdXJyZW50SW5wdXRWYWx1ZTogc3RyaW5nID0gJydcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGNvbnN0IHsgdGl0bGUsIHRleHQsIGJ1dHRvbiwgYmFja2dyb3VuZEltYWdlLCBpbnB1dCB9ID0gZGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICB0ZXh0LFxuICAgICAgYmFja2dyb3VuZEltYWdlLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICBwYXlsb2FkOiAnY2VyY2EnXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwYXlsb2FkOiBcImNlcmNhLWluLW1heHhpXCJcbiAgICAgIH1cbiAgICB9O1xuICB9XG59Il19