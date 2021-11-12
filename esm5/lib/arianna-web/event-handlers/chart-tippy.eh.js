import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import tippy from 'tippy.js';
var AwChartTippyEH = /** @class */ (function (_super) {
    __extends(AwChartTippyEH, _super);
    function AwChartTippyEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tippyList = []; // array of tippy instances
        _this.tippyMaker = function (bubbles) {
            /*
              Destroys every existing tooltip,
              then creates a new Tippy instance for each bubble.
            */
            // flush existing tooltips
            _this.tippyList.forEach(function (t) { if (t) {
                t.destroy();
            } });
            _this.tippyList = [];
            // create new tooltips
            bubbles.forEach(function (b) {
                var target = document.getElementById("g_" + b.entity.id);
                if (target) {
                    _this.tippyList.push(// add this tippy to the array of instances
                    tippy(target, {
                        content: document.getElementById("template__" + b.entity.id),
                        interactive: true,
                        appendTo: document.body,
                        arrow: true,
                        flip: false,
                        theme: 'light-border no-padding',
                        placement: 'top',
                        delay: 150,
                        updateDuration: 400,
                    }));
                }
            });
        };
        return _this;
    }
    AwChartTippyEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-chart-tippy.select':
                    _this.emitOuter('select', payload);
                    break;
                default:
                    console.warn('(chart-tippy) unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.d3end':
                case 'aw-entita-layout.d3end':
                case 'aw-scheda-layout.d3end':
                    _this.dataSource.update(payload); // creating DOM Elements (templates)
                    setTimeout(function () {
                        _this.tippyMaker(payload.bubbles); // assign templates to the bubbles
                    });
                    break;
                default:
                    break;
            }
        });
    };
    return AwChartTippyEH;
}(EventHandler));
export { AwChartTippyEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFBb0Msa0NBQVk7SUFBaEQ7UUFBQSxxRUEwREM7UUF6RFMsZUFBUyxHQUFVLEVBQUUsQ0FBQSxDQUFDLDJCQUEyQjtRQTZCekQsZ0JBQVUsR0FBRyxVQUFDLE9BQU87WUFDbkI7OztjQUdFO1lBQ0YsMEJBQTBCO1lBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxJQUFPLElBQUksQ0FBQyxFQUFFO2dCQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsc0JBQXNCO1lBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUNoQixJQUFNLE1BQU0sR0FBWSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsMkNBQTJDO29CQUM5RCxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLENBQUM7d0JBQzVELFdBQVcsRUFBRSxJQUFJO3dCQUNqQixRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixLQUFLLEVBQUUsR0FBRzt3QkFDVixjQUFjLEVBQUUsR0FBRztxQkFDcEIsQ0FBQyxDQUNILENBQUM7aUJBQ0g7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTs7SUFDSCxDQUFDO0lBdkRRLCtCQUFNLEdBQWI7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2xFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0IsQ0FBQztnQkFDNUIsS0FBSyx3QkFBd0IsQ0FBQztnQkFDOUIsS0FBSyx3QkFBd0I7b0JBQzNCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsb0NBQW9DO29CQUNyRSxVQUFVLENBQUM7d0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7b0JBQ3RFLENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBOEJILHFCQUFDO0FBQUQsQ0FBQyxBQTFERCxDQUFvQyxZQUFZLEdBMEQvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSB0aXBweUxpc3Q6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgdGlwcHkgaW5zdGFuY2VzXHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWNoYXJ0LXRpcHB5LnNlbGVjdCc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0JywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCcoY2hhcnQtdGlwcHkpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmQzZW5kJzpcclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmQzZW5kJzpcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmQzZW5kJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7IC8vIGNyZWF0aW5nIERPTSBFbGVtZW50cyAodGVtcGxhdGVzKVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIHdhaXQgRE9NIHRvIGJlIHJlYWR5XHJcbiAgICAgICAgICAgIHRoaXMudGlwcHlNYWtlcihwYXlsb2FkLmJ1YmJsZXMpOyAvLyBhc3NpZ24gdGVtcGxhdGVzIHRvIHRoZSBidWJibGVzXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0aXBweU1ha2VyID0gKGJ1YmJsZXMpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIERlc3Ryb3lzIGV2ZXJ5IGV4aXN0aW5nIHRvb2x0aXAsXHJcbiAgICAgIHRoZW4gY3JlYXRlcyBhIG5ldyBUaXBweSBpbnN0YW5jZSBmb3IgZWFjaCBidWJibGUuXHJcbiAgICAqL1xyXG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcclxuICAgIHRoaXMudGlwcHlMaXN0LmZvckVhY2goKHQpID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCk7IH0gfSk7XHJcbiAgICB0aGlzLnRpcHB5TGlzdCA9IFtdO1xyXG4gICAgLy8gY3JlYXRlIG5ldyB0b29sdGlwc1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKChiKSA9PiB7IC8vIGdpdmUgYSB0b29sdGlwIHRvIGVhY2ggYnViYmxlXHJcbiAgICAgIGNvbnN0IHRhcmdldDogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBnXyR7Yi5lbnRpdHkuaWR9YCk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXHJcbiAgICAgICAgICB0aXBweSh0YXJnZXQsIHtcclxuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRlbXBsYXRlX18ke2IuZW50aXR5LmlkfWApLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcclxuICAgICAgICAgICAgYXJyb3c6IHRydWUsXHJcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxyXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcclxuICAgICAgICAgICAgZGVsYXk6IDE1MCxcclxuICAgICAgICAgICAgdXBkYXRlRHVyYXRpb246IDQwMCxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=