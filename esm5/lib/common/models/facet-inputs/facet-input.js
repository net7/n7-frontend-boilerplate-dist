/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IFacetInputData() { }
if (false) {
    /** @type {?} */
    IFacetInputData.prototype.value;
    /** @type {?} */
    IFacetInputData.prototype.label;
    /** @type {?} */
    IFacetInputData.prototype.counter;
    /** @type {?|undefined} */
    IFacetInputData.prototype.hidden;
    /** @type {?|undefined} */
    IFacetInputData.prototype.options;
}
/**
 * @abstract
 */
var FacetInput = /** @class */ (function () {
    function FacetInput(config) {
        var _this = this;
        this.isEmpty = false;
        this.update = (/**
         * @return {?}
         */
        function () { return _this.output = _this.transform(); });
        this.getId = (/**
         * @return {?}
         */
        function () { return _this.id; });
        this.getData = (/**
         * @return {?}
         */
        function () { return _this.data; });
        this.getConfig = (/**
         * @return {?}
         */
        function () { return _this.config; });
        this.getFacetId = (/**
         * @return {?}
         */
        function () { return _this.config.facetId; });
        this.getInputIndex = (/**
         * @return {?}
         */
        function () { return _this.config.inputIndex; });
        this.getSectionIndex = (/**
         * @return {?}
         */
        function () { return _this.config.sectionIndex; });
        this.getContext = (/**
         * @return {?}
         */
        function () { return _this.config.filterConfig.context || 'external'; });
        this.getTarget = (/**
         * @return {?}
         */
        function () { return _this.config.filterConfig.target || null; });
        this.getSearchIn = (/**
         * @return {?}
         */
        function () { return _this.config.filterConfig.searchIn || null; });
        this.getType = (/**
         * @return {?}
         */
        function () { return _this.config.type; });
        this.getOutput = (/**
         * @return {?}
         */
        function () { return _this.output; });
        this.setIsEmpty = (/**
         * @param {?} empty
         * @return {?}
         */
        function (empty) {
            _this.isEmpty = empty;
        });
        this.setData = (/**
         * @param {?} newData
         * @return {?}
         */
        function (newData) { return _this.data = newData; });
        this.config = config;
        this._setId();
        FacetInput.index++;
    }
    /**
     * @return {?}
     */
    FacetInput.prototype.clear = /**
     * @return {?}
     */
    function () { };
    /**
     * @private
     * @return {?}
     */
    FacetInput.prototype._setId = /**
     * @private
     * @return {?}
     */
    function () {
        this.id = "facet-input-" + this.getType() + "-" + FacetInput.index;
    };
    FacetInput.index = 0;
    return FacetInput;
}());
export { FacetInput };
if (false) {
    /** @type {?} */
    FacetInput.index;
    /**
     * @type {?}
     * @private
     */
    FacetInput.prototype.id;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.output;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.data;
    /**
     * @type {?}
     * @protected
     */
    FacetInput.prototype.isEmpty;
    /** @type {?} */
    FacetInput.prototype.update;
    /** @type {?} */
    FacetInput.prototype.getId;
    /** @type {?} */
    FacetInput.prototype.getData;
    /** @type {?} */
    FacetInput.prototype.getConfig;
    /** @type {?} */
    FacetInput.prototype.getFacetId;
    /** @type {?} */
    FacetInput.prototype.getInputIndex;
    /** @type {?} */
    FacetInput.prototype.getSectionIndex;
    /** @type {?} */
    FacetInput.prototype.getContext;
    /** @type {?} */
    FacetInput.prototype.getTarget;
    /** @type {?} */
    FacetInput.prototype.getSearchIn;
    /** @type {?} */
    FacetInput.prototype.getType;
    /** @type {?} */
    FacetInput.prototype.getOutput;
    /** @type {?} */
    FacetInput.prototype.setIsEmpty;
    /** @type {?} */
    FacetInput.prototype.setData;
    /**
     * @abstract
     * @param {?} facetValue
     * @return {?}
     */
    FacetInput.prototype.setActive = function (facetValue) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    FacetInput.prototype.transform = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFNQzs7O0lBTEMsZ0NBQXVCOztJQUN2QixnQ0FBYzs7SUFDZCxrQ0FBZ0I7O0lBQ2hCLGlDQUFpQjs7SUFDakIsa0NBQWM7Ozs7O0FBR2hCO0lBU0Usb0JBQVksTUFBTTtRQUFsQixpQkFLQztRQVBTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFZbkIsV0FBTTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUE5QixDQUE4QixFQUFDO1FBQzlDLFVBQUs7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsRUFBRSxFQUFQLENBQU8sRUFBQztRQUN0QixZQUFPOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBVCxDQUFTLEVBQUM7UUFDMUIsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxFQUFDO1FBQzlCLGVBQVU7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBbkIsQ0FBbUIsRUFBQztRQUN2QyxrQkFBYTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUF0QixDQUFzQixFQUFDO1FBQzdDLG9CQUFlOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQXhCLENBQXdCLEVBQUM7UUFDakQsZUFBVTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxVQUFVLEVBQTlDLENBQThDLEVBQUM7UUFDbEUsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQXZDLENBQXVDLEVBQUM7UUFDMUQsZ0JBQVc7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUF6QyxDQUF5QyxFQUFDO1FBQzlELFlBQU87OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBaEIsQ0FBZ0IsRUFBQztRQUNqQyxjQUFTOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLEVBQUM7UUFHOUIsZUFBVTs7OztRQUFHLFVBQUMsS0FBYztZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUE7UUFDTSxZQUFPOzs7O1FBQUcsVUFBQyxPQUEwQixJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQW5CLENBQW1CLEVBQUM7UUExQm5FLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBaUJNLDBCQUFLOzs7SUFBWixjQUFnQixDQUFDOzs7OztJQU1ULDJCQUFNOzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLGlCQUFlLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxVQUFVLENBQUMsS0FBTyxDQUFDO0lBQ2hFLENBQUM7SUF0Q00sZ0JBQUssR0FBRyxDQUFDLENBQUM7SUF1Q25CLGlCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F4Q3FCLFVBQVU7OztJQUM5QixpQkFBaUI7Ozs7O0lBRWpCLHdCQUFtQjs7Ozs7SUFDbkIsNEJBQXNCOzs7OztJQUN0Qiw0QkFBc0I7Ozs7O0lBQ3RCLDBCQUFrQzs7Ozs7SUFDbEMsNkJBQTBCOztJQVkxQiw0QkFBcUQ7O0lBQ3JELDJCQUE2Qjs7SUFDN0IsNkJBQWlDOztJQUNqQywrQkFBcUM7O0lBQ3JDLGdDQUE4Qzs7SUFDOUMsbUNBQW9EOztJQUNwRCxxQ0FBd0Q7O0lBQ3hELGdDQUF5RTs7SUFDekUsK0JBQWlFOztJQUNqRSxpQ0FBcUU7O0lBQ3JFLDZCQUF3Qzs7SUFDeEMsK0JBQXFDOztJQUdyQyxnQ0FFQzs7SUFDRCw2QkFBcUU7Ozs7OztJQXBCckUsMkRBQWlEOzs7Ozs7SUFDakQsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElGYWNldElucHV0RGF0YSB7XHJcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGNvdW50ZXI6IG51bWJlcjtcclxuICBoaWRkZW4/OiBib29sZWFuO1xyXG4gIG9wdGlvbnM/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWNldElucHV0IHtcclxuICBzdGF0aWMgaW5kZXggPSAwO1xyXG5cclxuICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xyXG4gIHByb3RlY3RlZCBvdXRwdXQ6IGFueTtcclxuICBwcm90ZWN0ZWQgZGF0YTogSUZhY2V0SW5wdXREYXRhW107XHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuX3NldElkKCk7XHJcblxyXG4gICAgRmFjZXRJbnB1dC5pbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFic3RyYWN0IHNldEFjdGl2ZShmYWNldFZhbHVlOiBhbnkpOiB2b2lkO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm0oKTogYW55O1xyXG5cclxuICBwdWJsaWMgdXBkYXRlID0gKCkgPT4gdGhpcy5vdXRwdXQgPSB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XHJcbiAgcHVibGljIGdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XHJcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xyXG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcclxuICBwdWJsaWMgZ2V0SW5wdXRJbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLmlucHV0SW5kZXg7XHJcbiAgcHVibGljIGdldFNlY3Rpb25JbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLnNlY3Rpb25JbmRleDtcclxuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XHJcbiAgcHVibGljIGdldFRhcmdldCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50YXJnZXQgfHwgbnVsbDtcclxuICBwdWJsaWMgZ2V0U2VhcmNoSW4gPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuc2VhcmNoSW4gfHwgbnVsbDtcclxuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XHJcbiAgcHVibGljIGdldE91dHB1dCA9ICgpID0+IHRoaXMub3V0cHV0O1xyXG4gIHB1YmxpYyBjbGVhcigpIHt9XHJcblxyXG4gIHB1YmxpYyBzZXRJc0VtcHR5ID0gKGVtcHR5OiBib29sZWFuKSA9PiB7XHJcbiAgICB0aGlzLmlzRW1wdHkgPSBlbXB0eTtcclxuICB9XHJcbiAgcHVibGljIHNldERhdGEgPSAobmV3RGF0YTogSUZhY2V0SW5wdXREYXRhW10pID0+IHRoaXMuZGF0YSA9IG5ld0RhdGE7XHJcbiAgcHJpdmF0ZSBfc2V0SWQoKSB7XHJcbiAgICB0aGlzLmlkID0gYGZhY2V0LWlucHV0LSR7dGhpcy5nZXRUeXBlKCl9LSR7RmFjZXRJbnB1dC5pbmRleH1gO1xyXG4gIH1cclxufVxyXG4iXX0=