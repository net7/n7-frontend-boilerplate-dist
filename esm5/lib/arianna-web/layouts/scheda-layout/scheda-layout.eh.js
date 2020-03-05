/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import helpers from '../../../common/helpers';
var AwSchedaLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaLayoutEH, _super);
    function AwSchedaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AwSchedaLayoutEH.prototype.listen = /**
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
                case 'aw-scheda-layout.init':
                    {
                        _this.dataSource.onInit(payload);
                        _this.configuration = payload.configuration;
                        _this.route = payload.route;
                        /** @type {?} */
                        var paramId = _this.route.snapshot.params.id || '';
                        if (paramId) {
                            _this.dataSource.currentId = paramId;
                        }
                        _this.listenRoute();
                        _this.loadNavigation(paramId);
                    }
                    break;
                case 'aw-scheda-layout.destroy':
                    _this.destroyed$.next();
                    _this.dataSource.onDestroy();
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
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    _this.emitOuter('d3end', payload);
                    break;
                case 'aw-sidebar-header.click':
                    _this.dataSource.collapseSidebar();
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    {
                        var id = payload.id, label = payload.label;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [
                                _this.configuration.get('paths').entitaBasePath,
                                id,
                                helpers.slugify(label),
                                'overview',
                            ],
                        });
                    }
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSchedaLayoutEH.prototype.listenRoute = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            /** @type {?} */
            var paramId = params.get('id');
            if (paramId) {
                if (paramId) {
                    _this.dataSource.currentId = paramId;
                    _this.emitOuter('routechanged', paramId);
                }
                _this.dataSource.contentIsLoading = true;
                _this.dataSource.loadItem(paramId).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.dataSource.contentIsLoading = false;
                    if (response) {
                        _this.dataSource.loadContent(response);
                        if (Array.isArray(response.relatedEntities) && response.relatedEntities.length) {
                            if (_this.dataSource.bubblesEnabled) {
                                _this.emitOuter('filterbubbleresponse', response.relatedEntities);
                            }
                        }
                    }
                }));
            }
        }));
    };
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    AwSchedaLayoutEH.prototype.loadNavigation = /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        var _this = this;
        this.dataSource.updateNavigation('Loading...');
        this.dataSource.getNavigation('patrimonio').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response) {
                _this.dataSource.setTree(response);
                _this.dataSource.updateNavigation(_this.dataSource.getTree().label);
                _this.emitOuter('navigationresponse', {
                    tree: _this.dataSource.getTree(),
                    currentItem: selectedItem,
                    basePath: _this.configuration.get('paths').schedaBasePath,
                });
            }
        }));
    };
    return AwSchedaLayoutEH;
}(EventHandler));
export { AwSchedaLayoutEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUFzQyw0Q0FBWTtJQUFsRDtRQUFBLHFFQStGQztRQTlGUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQThGbkQsQ0FBQzs7OztJQXhGUSxpQ0FBTTs7O0lBQWI7UUFBQSxpQkFnREM7UUEvQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQUU7d0JBQzVCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzs7NEJBQ3JCLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUU7d0JBQ25ELElBQUksT0FBTyxFQUFFOzRCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQzt5QkFDckM7d0JBQ0QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8s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QyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDbkMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUMvQixXQUFXLEVBQUUsWUFBWTtvQkFDekIsUUFBUSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWM7aUJBQ3pELENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBL0ZELENBQXNDLFlBQVksR0ErRmpEOzs7Ozs7O0lBOUZDLHNDQUFpRDs7Ozs7SUFFakQseUNBQTJCOzs7OztJQUUzQixpQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IGFueTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5pbml0Jzoge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1JZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xyXG4gICAgICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uKHBhcmFtSWQpO1xyXG4gICAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6IHRoaXMuZGF0YVNvdXJjZS5jb2xsYXBzZVNpZGViYXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrJzoge1xyXG4gICAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICAgICAgcGF0aDogW1xyXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXHJcbiAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGxhYmVsKSxcclxuICAgICAgICAgICAgICAnb3ZlcnZpZXcnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1JZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPSBwYXJhbUlkO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3JvdXRlY2hhbmdlZCcsIHBhcmFtSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29udGVudElzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKHBhcmFtSWQpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRDb250ZW50KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKSAmJiByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZU5hdmlnYXRpb24oJ0xvYWRpbmcuLi4nKTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5nZXROYXZpZ2F0aW9uKCdwYXRyaW1vbmlvJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VHJlZShyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZU5hdmlnYXRpb24odGhpcy5kYXRhU291cmNlLmdldFRyZWUoKS5sYWJlbCk7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ25hdmlnYXRpb25yZXNwb25zZScsIHtcclxuICAgICAgICAgIHRyZWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCksXHJcbiAgICAgICAgICBjdXJyZW50SXRlbTogc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=