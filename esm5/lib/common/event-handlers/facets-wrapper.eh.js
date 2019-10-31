/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXFDLDJDQUFZO0lBQWpEO1FBQUEscUVBZ0VDO1FBL0RTLG9CQUFjLEdBQVksS0FBSyxDQUFDOztJQStEMUMsQ0FBQzs7OztJQTdEUSxnQ0FBTTs7O0lBQWI7UUFBQSxpQkE0REM7UUEzREMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssc0JBQXNCO29CQUNqQixJQUFBLG1EQUFPOzt3QkFDYixLQUFLLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7O3dCQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDOUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBRTNCLFNBQVM7b0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXZDLFdBQVc7b0JBQ1gsSUFBRyxPQUFPLEtBQUssVUFBVSxFQUFDO3dCQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFDaEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFFeEQsV0FBVztxQkFDWjt5QkFBTTs7NEJBQ0MsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7OzRCQUN0RCxhQUFXLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO3dCQUUzRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7d0JBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxhQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO3dCQUVyRixTQUFTO3dCQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBRS9CLGdCQUFnQjt3QkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7NEJBQzFCLE9BQU8sRUFBRSxRQUFROzRCQUNqQixJQUFJLEVBQUUsRUFBRTs0QkFDUixXQUFXLGVBQUE7eUJBQ1osQ0FBQyxDQUFDO3FCQUNKO29CQUVELE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsMEJBQTBCO1FBQzFCLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQ25ELFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssdUJBQXVCO29CQUMxQixJQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLE9BQU8sRUFBQzt3QkFDakQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO3FCQUNwQztvQkFDRCxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWhFRCxDQUFxQyxZQUFZLEdBZ0VoRDs7Ozs7OztJQS9EQyx5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIF9mYWNldHNDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICAvLyBsaXN0ZW4gdG8gaW5uZXIgKHdpZGdldCkgZXZlbnRzXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldCc6XG4gICAgICAgICAgY29uc3QgeyBmYWNldElkIH0gPSBwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQsXG4gICAgICAgICAgICBpbnB1dCA9IHRoaXMuZGF0YVNvdXJjZS5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBpbnB1dC5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgdGhpcy5fZmFjZXRzQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25GYWNldENoYW5nZShwYXlsb2FkKTtcblxuICAgICAgICAgIC8vIGludGVybmFsXG4gICAgICAgICAgaWYoY29udGV4dCA9PT0gJ2ludGVybmFsJyl7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyVGFyZ2V0KGlucHV0LmdldFRhcmdldCgpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVGaWx0ZXJlZFRhcmdldChpbnB1dC5nZXRUYXJnZXQoKSk7XG5cbiAgICAgICAgICAgIC8vIGV4dGVybmFsXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxdWVzdFBhcmFtcygpLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChrZXkgPT4gcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHNpZ25hbFxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c2NoYW5nZScpO1xuXG4gICAgICAgICAgICAvLyByb3V0ZXIgc2lnbmFsXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW10sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldGhlYWRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcbiAgICBFdmVudEhhbmRsZXIuZ2xvYmFsRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2dsb2JhbC5zZWFyY2hyZXNwb25zZSc6XG4gICAgICAgICAgaWYodGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElkKCkgPT09IHBheWxvYWQpe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0TGlua3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=