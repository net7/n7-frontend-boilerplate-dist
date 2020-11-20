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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvc2xpZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBZ0MsOEJBQVU7SUFBMUM7O0lBNEJBLENBQUM7SUF6QlcsOEJBQVMsR0FBbkIsVUFBb0IsSUFBUztRQUNuQixJQUFBLG9CQUFNLENBQVU7UUFDeEIsT0FBTztZQUNMLE1BQU0sUUFBQTtZQUNOLFdBQVcsRUFBRSxjQUFZLElBQUksQ0FBQyxFQUFJO1lBQ2xDLG1CQUFtQjtZQUNuQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxHQUFHO2FBT2Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFnQyxVQUFVLEdBNEJ6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNclNsaWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBDYXJvdXNlbERhdGEge1xuICAgIGNvbnN0IHsgc2xpZGVzIH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICBzbGlkZXMsXG4gICAgICBjb250YWluZXJJZDogYGNhcm91c2VsLSR7dGhpcy5pZH1gLFxuICAgICAgLy8gY2xhc3NlczogJ2RlbW8nLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgbW92ZTogMSxcbiAgICAgICAgLy8gdG91Y2g6IHRydWUsXG4gICAgICAgIC8vIG1vZGU6ICdhbGlnbicsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHJld2luZDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IDAsXG4gICAgICAgIGFuaW1hdGlvbjogNTAwLFxuICAgICAgICAvLyByZXNwb25zaXZlOiB7XG4gICAgICAgIC8vICAgMDogeyBjb3VudDogMS41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgICAgICAvLyAgIDQ4MDogeyBjb3VudDogMi41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgICAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXG4gICAgICAgIC8vICAgMTQ0MDogeyBjb3VudDogNCwgdG91Y2g6IGZhbHNlIH0sXG4gICAgICAgIC8vIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==