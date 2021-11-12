import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwAutocompleteWrapperEH = /** @class */ (function (_super) {
    __extends(AwAutocompleteWrapperEH, _super);
    function AwAutocompleteWrapperEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwAutocompleteWrapperEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-autocomplete-wrapper.click':
                    if (payload !== 'fallback-simple-autocomplete') { // if this is the fallback item, kill the event.
                        _this.emitOuter('clickresult', payload);
                    }
                    break;
                default:
                    console.warn('unhandled event of type:', type);
                    break;
            }
        });
    };
    return AwAutocompleteWrapperEH;
}(EventHandler));
export { AwAutocompleteWrapperEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvYXV0b2NvbXBsZXRlLXdyYXBwZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUE2QywyQ0FBWTtJQUF6RDs7SUFlQSxDQUFDO0lBZFEsd0NBQU0sR0FBYjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksT0FBTyxLQUFLLDhCQUE4QixFQUFFLEVBQUUsZ0RBQWdEO3dCQUNoRyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDeEM7b0JBQ0QsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMvQyxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFmRCxDQUE2QyxZQUFZLEdBZXhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QXV0b2NvbXBsZXRlV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1hdXRvY29tcGxldGUtd3JhcHBlci5jbGljayc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCAhPT0gJ2ZhbGxiYWNrLXNpbXBsZS1hdXRvY29tcGxldGUnKSB7IC8vIGlmIHRoaXMgaXMgdGhlIGZhbGxiYWNrIGl0ZW0sIGtpbGwgdGhlIGV2ZW50LlxyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2tyZXN1bHQnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlOicsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=