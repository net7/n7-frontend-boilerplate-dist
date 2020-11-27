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
        var title = data.title, text = data.text, button = data.button, backgroundImage = data.backgroundImage, input = data.input;
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
        };
    };
    return AwHeroDS;
}(DataSource));
export { AwHeroDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQThCLDRCQUFVO0lBQXhDO1FBQUEscUVBdUJDO1FBdEJRLHVCQUFpQixHQUFHLEVBQUUsQ0FBQzs7SUFzQmhDLENBQUM7SUFwQlcsNEJBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUVwQixJQUFBLGtCQUFLLEVBQUUsZ0JBQUksRUFBRSxvQkFBTSxFQUFFLHNDQUFlLEVBQUUsa0JBQUssQ0FDcEM7UUFDVCxPQUFPO1lBQ0wsS0FBSyxPQUFBO1lBQ0wsSUFBSSxNQUFBO1lBQ0osZUFBZSxpQkFBQTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsT0FBTztpQkFDakI7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBdkJELENBQThCLFVBQVUsR0F1QnZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjdXJyZW50SW5wdXRWYWx1ZSA9ICcnO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLCB0ZXh0LCBidXR0b24sIGJhY2tncm91bmRJbWFnZSwgaW5wdXQsXG4gICAgfSA9IGRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgdGV4dCxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2NlcmNhJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXQucGxhY2Vob2xkZXIsXG4gICAgICAgIHBheWxvYWQ6ICdjZXJjYS1pbi1tYXh4aScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==