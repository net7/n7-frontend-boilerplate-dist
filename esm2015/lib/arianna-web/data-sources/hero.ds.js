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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUFDUyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFzQmhDLENBQUM7Ozs7OztJQXBCVyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUNKLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxLQUFLLEdBQzVDLEdBQUcsSUFBSTtRQUNSLE9BQU87WUFDTCxLQUFLO1lBQ0wsSUFBSTtZQUNKLGVBQWU7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2dCQUM5QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjs7O0lBdEJDLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hlcm9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY3VycmVudElucHV0VmFsdWUgPSAnJztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSwgdGV4dCwgYnV0dG9uLCBiYWNrZ3JvdW5kSW1hZ2UsIGlucHV0LFxuICAgIH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIHRleHQsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdjZXJjYScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwYXlsb2FkOiAnY2VyY2EtaW4tbWF4eGknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=