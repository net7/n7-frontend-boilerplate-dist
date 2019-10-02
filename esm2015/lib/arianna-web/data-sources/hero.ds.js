/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7Ozs7O0lBQzVCLFNBQVMsQ0FBQyxJQUFJO2NBQ2hCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7UUFFNUQsT0FBTztZQUNMLEtBQUs7WUFDTCxJQUFJO1lBQ0osZUFBZTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBjb25zdCB7IHRpdGxlLCB0ZXh0LCBidXR0b24sIGJhY2tncm91bmRJbWFnZSwgaW5wdXQgfSA9IGRhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICB0ZXh0LFxuICAgICAgYmFja2dyb3VuZEltYWdlLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICBwYXlsb2FkOiBcImNlcmNhXCJcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXQucGxhY2Vob2xkZXIsXG4gICAgICAgIHBheWxvYWQ6IFwiY2VyY2EtaW4tbWF4eGlcIlxuICAgICAgfVxuICAgIH07XG4gIH1cbn0iXX0=