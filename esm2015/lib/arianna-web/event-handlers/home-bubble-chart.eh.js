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
        /*
        this.outerEvents$.subscribe(event => {
          
        });
        */
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvaG9tZS1idWJibGUtY2hhcnQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsWUFBWTs7OztJQUU1QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssa0NBQWtDO29CQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0M7b0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNIOzs7O1VBSUU7SUFDSixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0Lm1vdXNlX2VudGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbW91c2VfZW50ZXInLGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZV9sZWF2ZSc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ21vdXNlX2xlYXZlJyxldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKlxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBcbiAgICB9KTtcbiAgICAqL1xuICB9XG5cbn0iXX0=