/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/facet-inputs/facet-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function FacetInputData() { }
if (false) {
    /** @type {?} */
    FacetInputData.prototype.value;
    /** @type {?} */
    FacetInputData.prototype.label;
    /** @type {?} */
    FacetInputData.prototype.counter;
    /** @type {?|undefined} */
    FacetInputData.prototype.hidden;
    /** @type {?|undefined} */
    FacetInputData.prototype.options;
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
        function () { _this.output = _this.transform(); });
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
        function (newData) { _this.data = newData; });
        this.config = config;
        this._setId();
        FacetInput.index += 1;
    }
    /**
     * @return {?}
     */
    FacetInput.prototype.clear = /**
     * @return {?}
     */
    function () { return null; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2QkFNQzs7O0lBTEMsK0JBQXVCOztJQUN2QiwrQkFBYzs7SUFDZCxpQ0FBZ0I7O0lBQ2hCLGdDQUFpQjs7SUFDakIsaUNBQWM7Ozs7O0FBR2hCO0lBYUUsb0JBQVksTUFBTTtRQUFsQixpQkFLQztRQVBTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFhbkIsV0FBTTs7O1FBQUcsY0FBUSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQTtRQUVsRCxVQUFLOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsRUFBUCxDQUFPLEVBQUM7UUFFdEIsWUFBTzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQVQsQ0FBUyxFQUFDO1FBRTFCLGNBQVM7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFYLENBQVcsRUFBQztRQUU5QixlQUFVOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQW5CLENBQW1CLEVBQUM7UUFFdkMsa0JBQWE7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBdEIsQ0FBc0IsRUFBQztRQUU3QyxvQkFBZTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUF4QixDQUF3QixFQUFDO1FBRWpELGVBQVU7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksVUFBVSxFQUE5QyxDQUE4QyxFQUFDO1FBRWxFLGNBQVM7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUF2QyxDQUF1QyxFQUFDO1FBRTFELGdCQUFXOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksRUFBekMsQ0FBeUMsRUFBQztRQUU5RCxZQUFPOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQWhCLENBQWdCLEVBQUM7UUFFakMsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxFQUFDO1FBSTlCLGVBQVU7Ozs7UUFBRyxVQUFDLEtBQWM7WUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFBO1FBRU0sWUFBTzs7OztRQUFHLFVBQUMsT0FBeUIsSUFBTyxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQTtRQXhDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQThCTSwwQkFBSzs7O0lBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztJQVF2QiwyQkFBTTs7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBZSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQUksVUFBVSxDQUFDLEtBQU8sQ0FBQztJQUNoRSxDQUFDO0lBekRNLGdCQUFLLEdBQUcsQ0FBQyxDQUFDO0lBMERuQixpQkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RxQixVQUFVOzs7SUFDOUIsaUJBQWlCOzs7OztJQUVqQix3QkFBbUI7Ozs7O0lBRW5CLDRCQUFzQjs7Ozs7SUFFdEIsNEJBQXNCOzs7OztJQUV0QiwwQkFBaUM7Ozs7O0lBRWpDLDZCQUEwQjs7SUFhMUIsNEJBQXlEOztJQUV6RCwyQkFBNkI7O0lBRTdCLDZCQUFpQzs7SUFFakMsK0JBQXFDOztJQUVyQyxnQ0FBOEM7O0lBRTlDLG1DQUFvRDs7SUFFcEQscUNBQXdEOztJQUV4RCxnQ0FBeUU7O0lBRXpFLCtCQUFpRTs7SUFFakUsaUNBQXFFOztJQUVyRSw2QkFBd0M7O0lBRXhDLCtCQUFxQzs7SUFJckMsZ0NBRUM7O0lBRUQsNkJBQXdFOzs7Ozs7SUFsQ3hFLDJEQUFpRDs7Ozs7O0lBRWpELGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBGYWNldElucHV0RGF0YSB7XHJcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGNvdW50ZXI6IG51bWJlcjtcclxuICBoaWRkZW4/OiBib29sZWFuO1xyXG4gIG9wdGlvbnM/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWNldElucHV0IHtcclxuICBzdGF0aWMgaW5kZXggPSAwO1xyXG5cclxuICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIG91dHB1dDogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgZGF0YTogRmFjZXRJbnB1dERhdGFbXTtcclxuXHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuX3NldElkKCk7XHJcblxyXG4gICAgRmFjZXRJbnB1dC5pbmRleCArPSAxO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFic3RyYWN0IHNldEFjdGl2ZShmYWNldFZhbHVlOiBhbnkpOiB2b2lkO1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHJhbnNmb3JtKCk6IGFueTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHsgdGhpcy5vdXRwdXQgPSB0aGlzLnRyYW5zZm9ybSgpOyB9XHJcblxyXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xyXG5cclxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XHJcblxyXG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcclxuXHJcbiAgcHVibGljIGdldElucHV0SW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5pbnB1dEluZGV4O1xyXG5cclxuICBwdWJsaWMgZ2V0U2VjdGlvbkluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuc2VjdGlvbkluZGV4O1xyXG5cclxuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XHJcblxyXG4gIHB1YmxpYyBnZXRUYXJnZXQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudGFyZ2V0IHx8IG51bGw7XHJcblxyXG4gIHB1YmxpYyBnZXRTZWFyY2hJbiA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5zZWFyY2hJbiB8fCBudWxsO1xyXG5cclxuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XHJcblxyXG4gIHB1YmxpYyBnZXRPdXRwdXQgPSAoKSA9PiB0aGlzLm91dHB1dDtcclxuXHJcbiAgcHVibGljIGNsZWFyKCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBwdWJsaWMgc2V0SXNFbXB0eSA9IChlbXB0eTogYm9vbGVhbikgPT4ge1xyXG4gICAgdGhpcy5pc0VtcHR5ID0gZW1wdHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGF0YSA9IChuZXdEYXRhOiBGYWNldElucHV0RGF0YVtdKSA9PiB7IHRoaXMuZGF0YSA9IG5ld0RhdGE7IH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0SWQoKSB7XHJcbiAgICB0aGlzLmlkID0gYGZhY2V0LWlucHV0LSR7dGhpcy5nZXRUeXBlKCl9LSR7RmFjZXRJbnB1dC5pbmRleH1gO1xyXG4gIH1cclxufVxyXG4iXX0=