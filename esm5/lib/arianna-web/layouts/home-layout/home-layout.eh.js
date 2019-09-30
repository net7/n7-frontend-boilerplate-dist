/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var AwHomeLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutEH, _super);
    function AwHomeLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AwHomeLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.init':
                    _this.dataSource.onInit(payload);
                    break;
                case 'aw-home-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-hero.change':
                    var inputPayload = payload.inputPayload, value = payload.value;
                    // TODO: do something
                    break;
                /**
                 * Facets Event Handlers
                 */
                case 'aw-home-facets-wrapper.click':
                    _this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    _this.dataSource.handleFacetSearchChange(payload);
                    break;
                case 'aw-home-facets-wrapper.enter':
                    _this.dataSource.handleFacetSearchEnter(payload);
                    break;
                /**
                 * Bubble Chart Event Handlers
                 */
                case 'aw-home-bubble-chart.mouse_enter':
                    // TODO: do something
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    // TODO: do something
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble')
                        _this.dataSource.onBubbleSelected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    else if (payload.source === 'close')
                        _this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                case 'aw-home-bubble-chart.mouse_enter':
                    // TODO: implemente behaviour
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    // TODO: implemente behaviour
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwHomeLayoutEH;
}(EventHandler));
export { AwHomeLayoutEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.destroyed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQW9DLDBDQUFZO0lBQWhEO1FBQUEscUVBbUVDO1FBbEVTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBa0VuRCxDQUFDOzs7O0lBaEVRLCtCQUFNOzs7SUFBYjtRQUFBLGlCQStEQztRQTlEQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBRTtnQkFDWCxLQUFLLHFCQUFxQjtvQkFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyx3QkFBd0I7b0JBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1Y7b0JBQ0ksTUFBTTthQUNYO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGdCQUFnQjtvQkFDWCxJQUFBLG1DQUFZLEVBQUUscUJBQUs7b0JBQzNCLHFCQUFxQjtvQkFDckIsTUFBTTtnQkFDUjs7bUJBRUc7Z0JBQ0gsS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1IsS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1I7O21CQUVHO2dCQUNILEtBQUssa0NBQWtDO29CQUNyQyxxQkFBcUI7b0JBQ3JCLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0M7b0JBQ3JDLHFCQUFxQjtvQkFDckIsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFHLFFBQVE7d0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7eUJBQzNGLElBQUcsT0FBTyxDQUFDLE1BQU0sS0FBRyxPQUFPO3dCQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUMsYUFBYSxFQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO29CQUNsRyxNQUFNO2dCQUNSLEtBQUssa0NBQWtDO29CQUNyQyw2QkFBNkI7b0JBQzdCLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0M7b0JBQ3JDLDZCQUE2QjtvQkFDN0IsTUFBTTtnQkFDUjs7bUJBRUc7Z0JBQ0gsS0FBSyxpQ0FBaUM7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQW5FRCxDQUFvQyxZQUFZLEdBbUUvQzs7Ozs7OztJQWxFQyxvQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICBjb25zdCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgLy8gVE9ETzogZG8gc29tZXRoaW5nXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGYWNldHMgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldEhlYWRlckNsaWNrKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1YmJsZSBDaGFydCBFdmVudCBIYW5kbGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZ1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZV9sZWF2ZSc6XG4gICAgICAgICAgLy8gVE9ETzogZG8gc29tZXRoaW5nXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBpZihwYXlsb2FkLnNvdXJjZT09PSdidWJibGUnKVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlU2VsZWN0ZWQoe2J1YmJsZVBheWxvYWQ6cGF5bG9hZC5idWJibGVQYXlsb2FkLGJ1YmJsZTpwYXlsb2FkLmJ1YmJsZX0pO1xuICAgICAgICAgIGVsc2UgaWYocGF5bG9hZC5zb3VyY2U9PT0nY2xvc2UnKVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlRGVzZWxlY3RlZCh7YnViYmxlUGF5bG9hZDpwYXlsb2FkLmJ1YmJsZVBheWxvYWQsYnViYmxlOnBheWxvYWQuYnViYmxlfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0Lm1vdXNlX2VudGVyJzpcbiAgICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnRlIGJlaGF2aW91clxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZV9sZWF2ZSc6XG4gICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50ZSBiZWhhdmlvdXJcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhZ3MgJiBJdGVtIFByZXZpZXdzIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgICAqL1xuICAgICAgICBjYXNlICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblRhZ0NsaWNrZWQocGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19