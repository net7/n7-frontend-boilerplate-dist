/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                case 'aw-home-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-hero.change':
                    const { inputPayload, value } = payload;
                    // TODO: do something
                    break;
                /**
                 * Facets Event Handlers
                 */
                case 'aw-home-facets-wrapper.click':
                    this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    this.dataSource.handleFacetSearchChange(payload);
                    break;
                case 'aw-home-facets-wrapper.enter':
                    this.dataSource.handleFacetSearchEnter(payload);
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
                        this.dataSource.onBubbleSelected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    else if (payload.source === 'close')
                        this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
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
                    this.dataSource.onTagClicked(payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.destroyed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZO0lBQWhEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQWtFbkQsQ0FBQzs7OztJQWhFUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQU8sSUFBSSxFQUFFO2dCQUNYLEtBQUsscUJBQXFCO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUixLQUFLLHdCQUF3QjtvQkFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ1g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGdCQUFnQjswQkFDYixFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPO29CQUN2QyxxQkFBcUI7b0JBQ3JCLE1BQU07Z0JBQ1I7O21CQUVHO2dCQUNILEtBQUssOEJBQThCO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2dCQUNSLEtBQUssOEJBQThCO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRCxNQUFNO2dCQUNSOzttQkFFRztnQkFDSCxLQUFLLGtDQUFrQztvQkFDckMscUJBQXFCO29CQUNyQixNQUFNO2dCQUNSLEtBQUssa0NBQWtDO29CQUNyQyxxQkFBcUI7b0JBQ3JCLE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7b0JBQy9CLElBQUcsT0FBTyxDQUFDLE1BQU0sS0FBRyxRQUFRO3dCQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsYUFBYSxFQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO3lCQUMzRixJQUFHLE9BQU8sQ0FBQyxNQUFNLEtBQUcsT0FBTzt3QkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLGFBQWEsRUFBQyxPQUFPLENBQUMsYUFBYSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDbEcsTUFBTTtnQkFDUixLQUFLLGtDQUFrQztvQkFDckMsNkJBQTZCO29CQUM3QixNQUFNO2dCQUNSLEtBQUssa0NBQWtDO29CQUNyQyw2QkFBNkI7b0JBQzdCLE1BQU07Z0JBQ1I7O21CQUVHO2dCQUNILEtBQUssaUNBQWlDO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ1g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBbEVDLG9DQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIGNvbnN0IHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICAvLyBUT0RPOiBkbyBzb21ldGhpbmdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZhY2V0cyBFdmVudCBIYW5kbGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0SGVhZGVyQ2xpY2socGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuZW50ZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldFNlYXJjaEVudGVyKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvKipcbiAgICAgICAgICogQnViYmxlIENoYXJ0IEV2ZW50IEhhbmRsZXJzXG4gICAgICAgICAqL1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZV9lbnRlcic6XG4gICAgICAgICAgLy8gVE9ETzogZG8gc29tZXRoaW5nXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0Lm1vdXNlX2xlYXZlJzpcbiAgICAgICAgICAvLyBUT0RPOiBkbyBzb21ldGhpbmdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIGlmKHBheWxvYWQuc291cmNlPT09J2J1YmJsZScpXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVTZWxlY3RlZCh7YnViYmxlUGF5bG9hZDpwYXlsb2FkLmJ1YmJsZVBheWxvYWQsYnViYmxlOnBheWxvYWQuYnViYmxlfSk7XG4gICAgICAgICAgZWxzZSBpZihwYXlsb2FkLnNvdXJjZT09PSdjbG9zZScpXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVEZXNlbGVjdGVkKHtidWJibGVQYXlsb2FkOnBheWxvYWQuYnViYmxlUGF5bG9hZCxidWJibGU6cGF5bG9hZC5idWJibGV9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudGUgYmVoYXZpb3VyXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0Lm1vdXNlX2xlYXZlJzpcbiAgICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnRlIGJlaGF2aW91clxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGFncyAmIEl0ZW0gUHJldmlld3MgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uVGFnQ2xpY2tlZChwYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=