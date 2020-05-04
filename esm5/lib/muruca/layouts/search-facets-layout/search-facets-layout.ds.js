/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-facets-layout/search-facets-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var SearchFacetsLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(SearchFacetsLayoutDS, _super);
    function SearchFacetsLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.onInit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.data = payload.data;
        this.initInputs();
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        // TODO
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.initInputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.data.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            section.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                // set id
                /** @type {?} */
                var widgetDataSource = _this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // update data
                _this.one(input.id).update(input.data);
            }));
        }));
    };
    return SearchFacetsLayoutDS;
}(LayoutDataSource));
export { SearchFacetsLayoutDS };
if (false) {
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHckQ7SUFBMEMsZ0RBQWdCO0lBQTFEOztJQXdCQSxDQUFDOzs7OztJQXJCQyxxQ0FBTTs7OztJQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNFLE9BQU87SUFDVCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBSzs7O29CQUVyQixnQkFBZ0IsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDM0QsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLGNBQWM7Z0JBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUEwQyxnQkFBZ0IsR0F3QnpEOzs7O0lBdkJDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNDb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBkYXRhOiBTZWFyY2hGYWNldHNDb25maWc7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmRhdGEgPSBwYXlsb2FkLmRhdGE7XG5cbiAgICB0aGlzLmluaXRJbnB1dHMoKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICBpbml0SW5wdXRzKCkge1xuICAgIHRoaXMuZGF0YS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAvLyBzZXQgaWRcbiAgICAgICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpbnB1dC5pZCk7XG4gICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpbnB1dC5pZDtcbiAgICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgICAgdGhpcy5vbmUoaW5wdXQuaWQpLnVwZGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=