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
        // listen to outer events
        EventHandler.globalEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'global.queryparams':
                    if (!_this._facetsChanged) {
                        _this.dataSource.updateFiltersFromQueryParams(payload);
                        _this.dataSource.updateInputsFromFilters();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXFDLDJDQUFZO0lBQWpEO1FBQUEscUVBNkRDO1FBNURTLG9CQUFjLEdBQVksS0FBSyxDQUFDOztJQTREMUMsQ0FBQzs7OztJQTFEUSxnQ0FBTTs7O0lBQWI7UUFBQSxpQkF5REM7UUF4REMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssc0JBQXNCO29CQUNqQixJQUFBLG1EQUFPOzt3QkFDYixLQUFLLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7O3dCQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDOUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBRTNCLFNBQVM7b0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXZDLFdBQVc7b0JBQ1gsSUFBRyxPQUFPLEtBQUssVUFBVSxFQUFDO3dCQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFDaEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFFeEQsV0FBVztxQkFDWjt5QkFBTTs7NEJBQ0MsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7OzRCQUN0RCxhQUFXLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO3dCQUUzRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7d0JBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxhQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBM0MsQ0FBMkMsRUFBQyxDQUFDO3dCQUVyRixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxFQUFFOzRCQUNSLFdBQVcsZUFBQTt5QkFDWixDQUFDLENBQUM7cUJBQ0o7b0JBRUQsTUFBTTtnQkFFUixLQUFLLDRCQUE0QjtvQkFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCx5QkFBeUI7UUFDekIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDbkQsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyxvQkFBb0I7b0JBQ3ZCLElBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFDO3dCQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLENBQUM7cUJBQzNDO29CQUNELE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBN0RELENBQXFDLFlBQVksR0E2RGhEOzs7Ozs7O0lBNURDLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0c1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgX2ZhY2V0c0NoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIC8vIGxpc3RlbiB0byBpbm5lciAod2lkZ2V0KSBldmVudHNcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0JzpcbiAgICAgICAgICBjb25zdCB7IGZhY2V0SWQgfSA9IHBheWxvYWQuZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCxcbiAgICAgICAgICAgIGlucHV0ID0gdGhpcy5kYXRhU291cmNlLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGlucHV0LmdldENvbnRleHQoKTtcbiAgICAgICAgICB0aGlzLl9mYWNldHNDaGFuZ2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkZhY2V0Q2hhbmdlKHBheWxvYWQpO1xuXG4gICAgICAgICAgLy8gaW50ZXJuYWxcbiAgICAgICAgICBpZihjb250ZXh0ID09PSAnaW50ZXJuYWwnKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJUYXJnZXQoaW5wdXQuZ2V0VGFyZ2V0KCkpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KGlucHV0LmdldFRhcmdldCgpKTtcblxuICAgICAgICAgICAgLy8gZXh0ZXJuYWxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtdLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVHcm91cChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBvdXRlciBldmVudHNcbiAgICBFdmVudEhhbmRsZXIuZ2xvYmFsRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2dsb2JhbC5xdWVyeXBhcmFtcyc6XG4gICAgICAgICAgaWYoIXRoaXMuX2ZhY2V0c0NoYW5nZWQpe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=