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
                    this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.destroy':
                    this.destroyed$.next();
                    break;
                case "aw-home-layout.bubble-tooltip-close-click":
                    this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case "aw-home-layout.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [`aw/entita/${payload.entityId}/overview`]
                    });
                    break;
                case "aw-home-layout.bubble-tooltip-select-click":
                    this.dataSource.onBubbleTooltipClick('select', payload);
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
                    this.dataSource.onHeroChange(payload.value);
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
                    this.dataSource.onBubbleMouseEnter({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    // TODO: do something
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble)
                            this.dataSource.onBubbleSelected(payload.bubble);
                    }
                    else if (payload.source === 'close')
                        this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    this.dataSource.onTagClicked(payload);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-autocomplete.click':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get('paths').entitaBasePath, payload.id]
                    });
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
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZO0lBQWhEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQW9GbkQsQ0FBQzs7OztJQWhGUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQU8sSUFBSSxFQUFFO2dCQUNYLEtBQUsscUJBQXFCO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssd0JBQXdCO29CQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUNWLEtBQUssMkNBQTJDO29CQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEQsTUFBTTtnQkFDVixLQUFLLDBDQUEwQztvQkFDM0MsSUFBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO3dCQUFFLE9BQU87b0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLENBQUMsYUFBYSxPQUFPLENBQUMsUUFBUSxXQUFXLENBQUM7cUJBQ2pELENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNWLEtBQUssNENBQTRDO29CQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkQsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ1g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGdCQUFnQjtvQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSOzttQkFFRztnQkFDSCxLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUjs7bUJBRUc7Z0JBQ0gsS0FBSyxrQ0FBa0M7b0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7b0JBQ2hHLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0M7b0JBQ3JDLHFCQUFxQjtvQkFDckIsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFHLFFBQVEsRUFBQzt3QkFDM0IsSUFBRyxPQUFPLENBQUMsTUFBTTs0QkFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDckU7eUJBQU0sSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFHLE9BQU87d0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7b0JBQ2xHLE1BQU07Z0JBQ1I7O21CQUVHO2dCQUNILEtBQUssaUNBQWlDO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDVjs7bUJBRUc7Z0JBQ0gsS0FBSyw0QkFBNEI7b0JBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7cUJBQ25FLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNJLE1BQU07YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUFwRkMsb0NBQWlEOzs7OztJQUNqRCx1Q0FBMkI7Ozs7O0lBQzNCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctaG9tZS1sYXlvdXQuYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2tcIjpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVRvb2x0aXBDbGljaygnY2xvc2UnLHBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1ob21lLWxheW91dC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrXCI6XG4gICAgICAgICAgICBpZighcGF5bG9hZCB8fCAhcGF5bG9hZC5lbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7cGF5bG9hZC5lbnRpdHlJZH0vb3ZlcnZpZXdgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWhvbWUtbGF5b3V0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGlja1wiOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlVG9vbHRpcENsaWNrKCdzZWxlY3QnLHBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25IZXJvQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmFjZXRzIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgICAqL1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRIZWFkZXJDbGljayhwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldFNlYXJjaENoYW5nZShwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0U2VhcmNoRW50ZXIocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWJibGUgQ2hhcnQgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0Lm1vdXNlX2VudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVNb3VzZUVudGVyKHtidWJibGVQYXlsb2FkOnBheWxvYWQuYnViYmxlUGF5bG9hZCxidWJibGU6cGF5bG9hZC5idWJibGV9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfbGVhdmUnOlxuICAgICAgICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZ1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYocGF5bG9hZC5zb3VyY2U9PT0nYnViYmxlJyl7XG4gICAgICAgICAgICBpZihwYXlsb2FkLmJ1YmJsZSkgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlU2VsZWN0ZWQocGF5bG9hZC5idWJibGUpO1xuICAgICAgICAgIH0gZWxzZSBpZihwYXlsb2FkLnNvdXJjZT09PSdjbG9zZScpXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVEZXNlbGVjdGVkKHtidWJibGVQYXlsb2FkOnBheWxvYWQuYnViYmxlUGF5bG9hZCxidWJibGU6cGF5bG9hZC5idWJibGV9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhZ3MgJiBJdGVtIFByZXZpZXdzIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgICAqL1xuICAgICAgICBjYXNlICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblRhZ0NsaWNrZWQocGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhZ3MgJiBJdGVtIFByZXZpZXdzIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgICAqL1xuICAgICAgICBjYXNlICdhdy1ob21lLWF1dG9jb21wbGV0ZS5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsIHBheWxvYWQuaWRdIFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=