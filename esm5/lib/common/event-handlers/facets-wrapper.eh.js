/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/facets-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var FacetsWrapperEH = /** @class */ (function (_super) {
    tslib_1.__extends(FacetsWrapperEH, _super);
    function FacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._facetsChanged = false;
        _this.internalFacetsChange$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    FacetsWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen to inner (widget) events
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facet':
                    var facetId = payload.eventPayload.inputPayload.facetId;
                    /** @type {?} */
                    var input = _this.dataSource.getInputByFacetId(facetId);
                    /** @type {?} */
                    var context = input.getContext();
                    _this._facetsChanged = true;
                    // update
                    _this.dataSource.onFacetChange(payload);
                    // internal
                    if (context === 'internal') {
                        _this.internalFacetsChange$.next(input.getTarget());
                        // external
                    }
                    else {
                        /** @type {?} */
                        var requestParams = _this.dataSource.getRequestParams();
                        /** @type {?} */
                        var queryParams_1 = _this.dataSource.filtersAsQueryParams(requestParams.filters);
                        Object.keys(queryParams_1).forEach((/**
                         * @param {?} key
                         * @return {?}
                         */
                        function (key) { return queryParams_1[key] = queryParams_1[key] || null; }));
                        // signal
                        _this.emitOuter('facetschange');
                        // router signal
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [],
                            queryParams: queryParams_1
                        });
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    _this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'global.searchresponse':
                    if (_this.dataSource.searchModel.getId() === payload) {
                        _this.dataSource.updateInputLinks();
                    }
                    break;
                default:
                    break;
            }
        }));
        // internal facets change
        this.internalFacetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            _this.dataSource.filterTarget(target);
            _this.dataSource.updateFilteredTarget(target);
        }));
    };
    return FacetsWrapperEH;
}(EventHandler));
export { FacetsWrapperEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype._facetsChanged;
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype.internalFacetsChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUFxQywyQ0FBWTtJQUFqRDtRQUFBLHFFQXdFQztRQXZFUyxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QiwyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFzRTlELENBQUM7Ozs7SUFwRVEsZ0NBQU07OztJQUFiO1FBQUEsaUJBa0VDO1FBakVDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHNCQUFzQjtvQkFDakIsSUFBQSxtREFBTzs7d0JBQ2IsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOzt3QkFDbEQsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7b0JBQzlCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUUzQixTQUFTO29CQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUV2QyxXQUFXO29CQUNYLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTt3QkFDMUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFFbkQsV0FBVztxQkFDWjt5QkFBTTs7NEJBQ0MsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7OzRCQUN0RCxhQUFXLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO3dCQUUzRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7d0JBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxhQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO3dCQUNyRixTQUFTO3dCQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBRS9CLGdCQUFnQjt3QkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7NEJBQzFCLE9BQU8sRUFBRSxRQUFROzRCQUNqQixJQUFJLEVBQUUsRUFBRTs0QkFDUixXQUFXLGVBQUE7eUJBQ1osQ0FBQyxDQUFDO3FCQUNKO29CQUVELE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsMEJBQTBCO1FBQzFCLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQ25ELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLE9BQU8sRUFBRTt3QkFDbkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO3FCQUNwQztvQkFDRCxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQzdCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBeEVELENBQXFDLFlBQVksR0F3RWhEOzs7Ozs7O0lBdkVDLHlDQUErQjs7Ozs7SUFDL0IsZ0RBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBfZmFjZXRzQ2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIGludGVybmFsRmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIC8vIGxpc3RlbiB0byBpbm5lciAod2lkZ2V0KSBldmVudHNcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXQnOlxuICAgICAgICAgIGNvbnN0IHsgZmFjZXRJZCB9ID0gcGF5bG9hZC5ldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLFxuICAgICAgICAgICAgaW5wdXQgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCksXG4gICAgICAgICAgICBjb250ZXh0ID0gaW5wdXQuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgIHRoaXMuX2ZhY2V0c0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRmFjZXRDaGFuZ2UocGF5bG9hZCk7XG5cbiAgICAgICAgICAvLyBpbnRlcm5hbFxuICAgICAgICAgIGlmIChjb250ZXh0ID09PSAnaW50ZXJuYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmFjZXRzQ2hhbmdlJC5uZXh0KGlucHV0LmdldFRhcmdldCgpKTtcblxuICAgICAgICAgICAgLy8gZXh0ZXJuYWxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsKTtcbiAgICAgICAgICAgIC8vIHNpZ25hbFxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c2NoYW5nZScpO1xuXG4gICAgICAgICAgICAvLyByb3V0ZXIgc2lnbmFsXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW10sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldGhlYWRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdnbG9iYWwuc2VhcmNocmVzcG9uc2UnOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SWQoKSA9PT0gcGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0TGlua3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGludGVybmFsIGZhY2V0cyBjaGFuZ2VcbiAgICB0aGlzLmludGVybmFsRmFjZXRzQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcbiAgICApLnN1YnNjcmliZSh0YXJnZXQgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19