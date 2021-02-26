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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQThCLDRCQUFVO0lBQXhDO1FBQUEscUVBdUJDO1FBdEJRLHVCQUFpQixHQUFHLEVBQUUsQ0FBQzs7SUFzQmhDLENBQUM7SUFwQlcsNEJBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUVwQixJQUFBLGtCQUFLLEVBQUUsZ0JBQUksRUFBRSxvQkFBTSxFQUFFLHNDQUFlLEVBQUUsa0JBQUssQ0FDcEM7UUFDVCxPQUFPO1lBQ0wsS0FBSyxPQUFBO1lBQ0wsSUFBSSxNQUFBO1lBQ0osZUFBZSxpQkFBQTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsT0FBTztpQkFDakI7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBdkJELENBQThCLFVBQVUsR0F1QnZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hlcm9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBjdXJyZW50SW5wdXRWYWx1ZSA9ICcnO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsIHRleHQsIGJ1dHRvbiwgYmFja2dyb3VuZEltYWdlLCBpbnB1dCxcclxuICAgIH0gPSBkYXRhO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnY2VyY2EnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIHBheWxvYWQ6ICdjZXJjYS1pbi1tYXh4aScsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=