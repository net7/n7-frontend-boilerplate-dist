/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/facets-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetsWrapperEH = /** @class */ (function (_super) {
    tslib_1.__extends(FacetsWrapperEH, _super);
    function FacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._facetsChanged = false;
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
                        _this.dataSource.filterTarget(input.getTarget());
                        _this.dataSource.updateFilteredTarget(input.getTarget());
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUFxQywyQ0FBWTtJQUFqRDtRQUFBLHFFQWdFQztRQS9EUyxvQkFBYyxHQUFZLEtBQUssQ0FBQzs7SUErRDFDLENBQUM7Ozs7SUE3RFEsZ0NBQU07OztJQUFiO1FBQUEsaUJBNERDO1FBM0RDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLHNCQUFzQjtvQkFDakIsSUFBQSxtREFBTzs7d0JBQ2IsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOzt3QkFDbEQsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7b0JBQzlCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUUzQixTQUFTO29CQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUV2QyxXQUFXO29CQUNYLElBQUcsT0FBTyxLQUFLLFVBQVUsRUFBQzt3QkFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7d0JBRXhELFdBQVc7cUJBQ1o7eUJBQU07OzRCQUNDLGFBQWEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFOzs0QkFDdEQsYUFBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzt3QkFFM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLENBQUMsQ0FBQyxPQUFPOzs7O3dCQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsYUFBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQTNDLENBQTJDLEVBQUMsQ0FBQzt3QkFFckYsU0FBUzt3QkFDVCxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUUvQixnQkFBZ0I7d0JBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFOzRCQUMxQixPQUFPLEVBQUUsUUFBUTs0QkFDakIsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsV0FBVyxlQUFBO3lCQUNaLENBQUMsQ0FBQztxQkFDSjtvQkFFRCxNQUFNO2dCQUVSLEtBQUssNEJBQTRCO29CQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILDBCQUEwQjtRQUMxQixZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUNuRCxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxPQUFPLEVBQUM7d0JBQ2pELEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztxQkFDcEM7b0JBQ0QsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFoRUQsQ0FBcUMsWUFBWSxHQWdFaEQ7Ozs7Ozs7SUEvREMseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBfZmFjZXRzQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgLy8gbGlzdGVuIHRvIGlubmVyICh3aWRnZXQpIGV2ZW50c1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXQnOlxuICAgICAgICAgIGNvbnN0IHsgZmFjZXRJZCB9ID0gcGF5bG9hZC5ldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLFxuICAgICAgICAgICAgaW5wdXQgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCksXG4gICAgICAgICAgICBjb250ZXh0ID0gaW5wdXQuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgIHRoaXMuX2ZhY2V0c0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRmFjZXRDaGFuZ2UocGF5bG9hZCk7XG5cbiAgICAgICAgICAvLyBpbnRlcm5hbFxuICAgICAgICAgIGlmKGNvbnRleHQgPT09ICdpbnRlcm5hbCcpe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclRhcmdldChpbnB1dC5nZXRUYXJnZXQoKSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyZWRUYXJnZXQoaW5wdXQuZ2V0VGFyZ2V0KCkpO1xuXG4gICAgICAgICAgICAvLyBleHRlcm5hbFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmdldFJlcXVlc3RQYXJhbXMoKSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXMgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goa2V5ID0+IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBzaWduYWxcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHNjaGFuZ2UnKTtcblxuICAgICAgICAgICAgLy8gcm91dGVyIHNpZ25hbFxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtdLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVHcm91cChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBnbG9iYWwgZXZlbnRzXG4gICAgRXZlbnRIYW5kbGVyLmdsb2JhbEV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlICdnbG9iYWwuc2VhcmNocmVzcG9uc2UnOlxuICAgICAgICAgIGlmKHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRJZCgpID09PSBwYXlsb2FkKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dExpbmtzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19