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
                    // do something
                    break;
                case 'aw-home-facets-wrapper.click':
                    _this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    _this.dataSource.handleFacetSearchChange(payload);
                    break;
                case 'aw-home-facets-wrapper.enter':
                    _this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble')
                        _this.dataSource.onBubbleSelected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    else if (payload.source === 'close')
                        _this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                case 'aw-home-bubble-chart.mouse_enter':
                    console.log('bubble mouse enter', payload);
                    // TODO: implemente behaviour
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    console.log('bubble mouse leave', payload);
                    // TODO: implemente behaviour
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload);
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        /* EventHandler.globalEvents$.pipe(
          takeUntil(this.destroyed$)
        ).subscribe(({type, payload}) => {
          switch(type){
            case 'global.navigate':
              this.dataSource.onNavigate(payload);
              break;
    
            default:
              break;
          }
        }); */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQW9DLDBDQUFZO0lBQWhEO1FBQUEscUVBNkVDO1FBNUVTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBNEVuRCxDQUFDOzs7O0lBMUVRLCtCQUFNOzs7SUFBYjtRQUFBLGlCQXdFQztRQXZFQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBRTtnQkFDWCxLQUFLLHFCQUFxQjtvQkFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBRVIsS0FBSyx3QkFBd0I7b0JBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVY7b0JBQ0ksTUFBTTthQUNYO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGdCQUFnQjtvQkFDWCxJQUFBLG1DQUFZLEVBQUUscUJBQUs7b0JBQzNCLGVBQWU7b0JBQ2YsTUFBTTtnQkFFUixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFFUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFHLFFBQVE7d0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7eUJBQzNGLElBQUcsT0FBTyxDQUFDLE1BQU0sS0FBRyxPQUFPO3dCQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUMsYUFBYSxFQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO29CQUNsRyxNQUFNO2dCQUVSLEtBQUssa0NBQWtDO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQyw2QkFBNkI7b0JBQzdCLE1BQU07Z0JBRVIsS0FBSyxrQ0FBa0M7b0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFDLDZCQUE2QjtvQkFDN0IsTUFBTTtnQkFFUixLQUFLLGlDQUFpQztvQkFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBRVY7b0JBQ0ksTUFBTTthQUNYO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCwwQkFBMEI7UUFDMUI7Ozs7Ozs7Ozs7O2NBV007SUFDUixDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBN0VELENBQW9DLFlBQVksR0E2RS9DOzs7Ozs7O0lBNUVDLG9DQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICBjb25zdCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0SGVhZGVyQ2xpY2socGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuZW50ZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldFNlYXJjaEVudGVyKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBpZihwYXlsb2FkLnNvdXJjZT09PSdidWJibGUnKVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlU2VsZWN0ZWQoe2J1YmJsZVBheWxvYWQ6cGF5bG9hZC5idWJibGVQYXlsb2FkLGJ1YmJsZTpwYXlsb2FkLmJ1YmJsZX0pO1xuICAgICAgICAgIGVsc2UgaWYocGF5bG9hZC5zb3VyY2U9PT0nY2xvc2UnKVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlRGVzZWxlY3RlZCh7YnViYmxlUGF5bG9hZDpwYXlsb2FkLmJ1YmJsZVBheWxvYWQsYnViYmxlOnBheWxvYWQuYnViYmxlfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIGNvbnNvbGUubG9nKCdidWJibGUgbW91c2UgZW50ZXInLHBheWxvYWQpO1xuICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudGUgYmVoYXZpb3VyXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfbGVhdmUnOlxuICAgICAgICAgIGNvbnNvbGUubG9nKCdidWJibGUgbW91c2UgbGVhdmUnLHBheWxvYWQpO1xuICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudGUgYmVoYXZpb3VyXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25UYWdDbGlja2VkKHBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcbiAgICAvKiBFdmVudEhhbmRsZXIuZ2xvYmFsRXZlbnRzJC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgoe3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2dsb2JhbC5uYXZpZ2F0ZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uTmF2aWdhdGUocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTsgKi9cbiAgfVxuXG59Il19