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
                    _this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.destroy':
                    _this.destroyed$.next();
                    break;
                case "aw-home-layout.bubble-tooltip-close-click":
                    _this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case "aw-home-layout.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId + "/overview"]
                    });
                    break;
                case "aw-home-layout.bubble-tooltip-select-click":
                    _this.dataSource.onBubbleTooltipClick('select', payload);
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
                    _this.dataSource.onHeroChange(payload.value);
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
                    _this.dataSource.onBubbleMouseEnter({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    // TODO: do something
                    break;
                case 'aw-home-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble)
                            _this.dataSource.onBubbleSelected(payload.bubble);
                    }
                    else if (payload.source === 'close')
                        _this.dataSource.onBubbleDeselected({ bubblePayload: payload.bubblePayload, bubble: payload.bubble });
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-autocomplete.click':
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get('paths').entitaBasePath, payload.id]
                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQW9DLDBDQUFZO0lBQWhEO1FBQUEscUVBcUZDO1FBcEZTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBb0ZuRCxDQUFDOzs7O0lBaEZRLCtCQUFNOzs7SUFBYjtRQUFBLGlCQStFQztRQTlFQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBRTtnQkFDWCxLQUFLLHFCQUFxQjtvQkFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLHdCQUF3QjtvQkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDVixLQUFLLDJDQUEyQztvQkFDNUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RELE1BQU07Z0JBQ1YsS0FBSywwQ0FBMEM7b0JBQzNDLElBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTt3QkFBRSxPQUFPO29CQUN6QyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTt3QkFDMUIsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxDQUFDLGVBQWEsT0FBTyxDQUFDLFFBQVEsY0FBVyxDQUFDO3FCQUNqRCxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDVixLQUFLLDRDQUE0QztvQkFDN0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1Y7b0JBQ0ksTUFBTTthQUNYO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGdCQUFnQjtvQkFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSOzttQkFFRztnQkFDSCxLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUjs7bUJBRUc7Z0JBQ0gsS0FBSyxrQ0FBa0M7b0JBQ3JDLEtBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7b0JBQ2hHLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0M7b0JBQ3JDLHFCQUFxQjtvQkFDckIsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFHLFFBQVEsRUFBQzt3QkFDM0IsSUFBRyxPQUFPLENBQUMsTUFBTTs0QkFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDckU7eUJBQU0sSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFHLE9BQU87d0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7b0JBQ2xHLE1BQU07Z0JBQ1I7O21CQUVHO2dCQUNILEtBQUssaUNBQWlDO29CQUNsQyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDVjs7bUJBRUc7Z0JBQ0gsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7cUJBQ25FLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNJLE1BQU07YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXJGRCxDQUFvQyxZQUFZLEdBcUYvQzs7Ozs7OztJQXBGQyxvQ0FBaUQ7Ozs7O0lBQ2pELHVDQUEyQjs7Ozs7SUFDM0IsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1ob21lLWxheW91dC5idWJibGUtdG9vbHRpcC1jbG9zZS1jbGlja1wiOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlVG9vbHRpcENsaWNrKCdjbG9zZScscGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWhvbWUtbGF5b3V0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2tcIjpcbiAgICAgICAgICAgIGlmKCFwYXlsb2FkIHx8ICFwYXlsb2FkLmVudGl0eUlkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHtwYXlsb2FkLmVudGl0eUlkfS9vdmVydmlld2BdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctaG9tZS1sYXlvdXQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVUb29sdGlwQ2xpY2soJ3NlbGVjdCcscGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkhlcm9DaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGYWNldHMgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldEhlYWRlckNsaWNrKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1YmJsZSBDaGFydCBFdmVudCBIYW5kbGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZU1vdXNlRW50ZXIoe2J1YmJsZVBheWxvYWQ6cGF5bG9hZC5idWJibGVQYXlsb2FkLGJ1YmJsZTpwYXlsb2FkLmJ1YmJsZX0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZV9sZWF2ZSc6XG4gICAgICAgICAgLy8gVE9ETzogZG8gc29tZXRoaW5nXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBpZihwYXlsb2FkLnNvdXJjZT09PSdidWJibGUnKXtcbiAgICAgICAgICAgIGlmKHBheWxvYWQuYnViYmxlKSB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVTZWxlY3RlZChwYXlsb2FkLmJ1YmJsZSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHBheWxvYWQuc291cmNlPT09J2Nsb3NlJylcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZURlc2VsZWN0ZWQoe2J1YmJsZVBheWxvYWQ6cGF5bG9hZC5idWJibGVQYXlsb2FkLGJ1YmJsZTpwYXlsb2FkLmJ1YmJsZX0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGFncyAmIEl0ZW0gUHJldmlld3MgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uVGFnQ2xpY2tlZChwYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGFncyAmIEl0ZW0gUHJldmlld3MgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYXV0b2NvbXBsZXRlLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCwgcGF5bG9hZC5pZF0gXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==