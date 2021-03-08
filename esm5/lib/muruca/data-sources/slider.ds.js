import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrSliderDS = /** @class */ (function (_super) {
    __extends(MrSliderDS, _super);
    function MrSliderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSliderDS.prototype.transform = function (data) {
        var slides = data.slides;
        return {
            slides: slides,
            containerId: "carousel-" + this.id,
            // classes: 'demo',
            libOptions: {
                count: 1,
                move: 1,
                // touch: true,
                // mode: 'align',
                buttons: true,
                dots: true,
                rewind: true,
                autoplay: 0,
                animation: 500,
            },
        };
    };
    return MrSliderDS;
}(DataSource));
export { MrSliderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvc2xpZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBZ0MsOEJBQVU7SUFBMUM7O0lBNEJBLENBQUM7SUF6QlcsOEJBQVMsR0FBbkIsVUFBb0IsSUFBUztRQUNuQixJQUFBLG9CQUFNLENBQVU7UUFDeEIsT0FBTztZQUNMLE1BQU0sUUFBQTtZQUNOLFdBQVcsRUFBRSxjQUFZLElBQUksQ0FBQyxFQUFJO1lBQ2xDLG1CQUFtQjtZQUNuQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxHQUFHO2FBT2Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFnQyxVQUFVLEdBNEJ6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclNsaWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBDYXJvdXNlbERhdGEge1xyXG4gICAgY29uc3QgeyBzbGlkZXMgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzbGlkZXMsXHJcbiAgICAgIGNvbnRhaW5lcklkOiBgY2Fyb3VzZWwtJHt0aGlzLmlkfWAsXHJcbiAgICAgIC8vIGNsYXNzZXM6ICdkZW1vJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgIG1vdmU6IDEsXHJcbiAgICAgICAgLy8gdG91Y2g6IHRydWUsXHJcbiAgICAgICAgLy8gbW9kZTogJ2FsaWduJyxcclxuICAgICAgICBidXR0b25zOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiAwLFxyXG4gICAgICAgIGFuaW1hdGlvbjogNTAwLFxyXG4gICAgICAgIC8vIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAvLyAgIDA6IHsgY291bnQ6IDEuNSwgYnV0dG9uczogZmFsc2UgfSxcclxuICAgICAgICAvLyAgIDQ4MDogeyBjb3VudDogMi41LCBidXR0b25zOiBmYWxzZSB9LFxyXG4gICAgICAgIC8vICAgNzY4OiB7IGNvdW50OiAzLCB0b3VjaDogZmFsc2UgfSxcclxuICAgICAgICAvLyAgIDE0NDA6IHsgY291bnQ6IDQsIHRvdWNoOiBmYWxzZSB9LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=