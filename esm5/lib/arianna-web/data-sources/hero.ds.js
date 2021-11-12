import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHeroDS = /** @class */ (function (_super) {
    __extends(AwHeroDS, _super);
    function AwHeroDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentInputValue = '';
        return _this;
    }
    AwHeroDS.prototype.transform = function (data) {
        var title = data.title, text = data.text, button = data.button, backgroundImage = data.backgroundImage, input = data.input, classes = data.classes;
        return {
            title: title,
            text: text,
            backgroundImage: backgroundImage,
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
            classes: classes,
        };
    };
    return AwHeroDS;
}(DataSource));
export { AwHeroDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQThCLDRCQUFVO0lBQXhDO1FBQUEscUVBd0JDO1FBdkJRLHVCQUFpQixHQUFHLEVBQUUsQ0FBQzs7SUF1QmhDLENBQUM7SUFyQlcsNEJBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUVwQixJQUFBLGtCQUFLLEVBQUUsZ0JBQUksRUFBRSxvQkFBTSxFQUFFLHNDQUFlLEVBQUUsa0JBQUssRUFBRSxzQkFBTyxDQUM3QztRQUNULE9BQU87WUFDTCxLQUFLLE9BQUE7WUFDTCxJQUFJLE1BQUE7WUFDSixlQUFlLGlCQUFBO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtZQUNELE9BQU8sU0FBQTtTQUNSLENBQUM7SUFDSixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF4QkQsQ0FBOEIsVUFBVSxHQXdCdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIGN1cnJlbnRJbnB1dFZhbHVlID0gJyc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSwgdGV4dCwgYnV0dG9uLCBiYWNrZ3JvdW5kSW1hZ2UsIGlucHV0LCBjbGFzc2VzXHJcbiAgICB9ID0gZGF0YTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ2NlcmNhJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBpbnB1dC5wbGFjZWhvbGRlcixcclxuICAgICAgICBwYXlsb2FkOiAnY2VyY2EtaW4tbWF4eGknLFxyXG4gICAgICB9LFxyXG4gICAgICBjbGFzc2VzLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19