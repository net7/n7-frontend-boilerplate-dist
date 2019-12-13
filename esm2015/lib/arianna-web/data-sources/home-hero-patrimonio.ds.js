/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeHeroPatrimonioDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { title, backgroundImage, image, text, button } = data;
        return {
            title,
            backgroundImage,
            image,
            text,
            button: {
                text: button.text,
                payload: "naviga-patrimonio"
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1oZXJvLXBhdHJpbW9uaW8uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtaGVyby1wYXRyaW1vbmlvLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFVBQVU7Ozs7OztJQUUxQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJO1FBRTVELE9BQU87WUFDTCxLQUFLO1lBQ0wsZUFBZTtZQUNmLEtBQUs7WUFDTCxJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsT0FBTyxFQUFFLG1CQUFtQjthQUM3QjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lSGVyb1BhdHJpbW9uaW9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGJhY2tncm91bmRJbWFnZSwgaW1hZ2UsIHRleHQsIGJ1dHRvbiB9ID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIGltYWdlLFxuICAgICAgdGV4dCxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgcGF5bG9hZDogXCJuYXZpZ2EtcGF0cmltb25pb1wiXG4gICAgICB9XG4gICAgfTtcbiAgfVxufSJdfQ==