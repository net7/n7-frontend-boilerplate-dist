/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwHomeBubbleChartEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            switch (event.type) {
                case 'aw-home-bubble-chart.click':
                    this.emitOuter('click', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouse_enter':
                    this.emitOuter('mouse_enter', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    this.emitOuter('mouse_leave', event.payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvaG9tZS1idWJibGUtY2hhcnQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsWUFBWTs7OztJQUU1QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssa0NBQWtDO29CQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0M7b0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUJ1YmJsZUNoYXJ0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJyxldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9lbnRlcicsZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0Lm1vdXNlX2xlYXZlJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbW91c2VfbGVhdmUnLGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn0iXX0=