/**
 * @fileoverview added by tsickle
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
    ;
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
    FacetInput.prototype.setData;
    /* Skipping unhandled member: ;*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDhCQU1DOzs7SUFMQyxnQ0FBdUI7O0lBQ3ZCLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsaUNBQWlCOztJQUNqQixrQ0FBYzs7Ozs7QUFHaEI7SUFRRSxvQkFBWSxNQUFNO1FBQWxCLGlCQUtDO1FBS00sV0FBTTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUE5QixDQUE4QixFQUFDO1FBQzlDLFVBQUs7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsRUFBRSxFQUFQLENBQU8sRUFBQztRQUN0QixZQUFPOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBVCxDQUFTLEVBQUM7UUFDMUIsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxFQUFDO1FBQzlCLGVBQVU7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBbkIsQ0FBbUIsRUFBQztRQUN2QyxrQkFBYTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUF0QixDQUFzQixFQUFDO1FBQzdDLG9CQUFlOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQXhCLENBQXdCLEVBQUM7UUFDakQsZUFBVTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxVQUFVLEVBQTlDLENBQThDLEVBQUM7UUFDbEUsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQXZDLENBQXVDLEVBQUM7UUFDMUQsZ0JBQVc7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUF6QyxDQUF5QyxFQUFDO1FBQzlELFlBQU87OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBaEIsQ0FBZ0IsRUFBQztRQUNqQyxjQUFTOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLEVBQUM7UUFFOUIsWUFBTzs7OztRQUFHLFVBQUMsT0FBMEIsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFuQixDQUFtQixFQUFDO1FBdEJuRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFtQk8sMkJBQU07Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQWUsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFJLFVBQVUsQ0FBQyxLQUFPLENBQUM7SUFDaEUsQ0FBQztJQUFBLENBQUM7SUFqQ0ssZ0JBQUssR0FBVyxDQUFDLENBQUM7SUFrQzNCLGlCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FuQ3FCLFVBQVU7OztJQUM5QixpQkFBeUI7Ozs7O0lBRXpCLHdCQUFtQjs7Ozs7SUFDbkIsNEJBQXNCOzs7OztJQUN0Qiw0QkFBc0I7Ozs7O0lBQ3RCLDBCQUFrQzs7SUFZbEMsNEJBQXFEOztJQUNyRCwyQkFBNkI7O0lBQzdCLDZCQUFpQzs7SUFDakMsK0JBQXFDOztJQUNyQyxnQ0FBOEM7O0lBQzlDLG1DQUFvRDs7SUFDcEQscUNBQXdEOztJQUN4RCxnQ0FBeUU7O0lBQ3pFLCtCQUFpRTs7SUFDakUsaUNBQXFFOztJQUNyRSw2QkFBd0M7O0lBQ3hDLCtCQUFxQzs7SUFFckMsNkJBQXFFOzs7Ozs7O0lBaEJyRSwyREFBaUQ7Ozs7OztJQUNqRCxpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUZhY2V0SW5wdXREYXRhIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY291bnRlcjogbnVtYmVyO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBvcHRpb25zPzogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFjZXRJbnB1dCB7XG4gIHN0YXRpYyBpbmRleDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcbiAgcHJvdGVjdGVkIG91dHB1dDogYW55O1xuICBwcm90ZWN0ZWQgZGF0YTogSUZhY2V0SW5wdXREYXRhW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9zZXRJZCgpO1xuICAgIFxuICAgIEZhY2V0SW5wdXQuaW5kZXgrKztcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBzZXRBY3RpdmUoZmFjZXRWYWx1ZTogYW55KTogdm9pZDtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRyYW5zZm9ybSgpOiBhbnk7XG4gIFxuICBwdWJsaWMgdXBkYXRlID0gKCkgPT4gdGhpcy5vdXRwdXQgPSB0aGlzLnRyYW5zZm9ybSgpO1xuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLmlkO1xuICBwdWJsaWMgZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xuICBwdWJsaWMgZ2V0RmFjZXRJZCA9ICgpID0+IHRoaXMuY29uZmlnLmZhY2V0SWQ7XG4gIHB1YmxpYyBnZXRJbnB1dEluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuaW5wdXRJbmRleDtcbiAgcHVibGljIGdldFNlY3Rpb25JbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLnNlY3Rpb25JbmRleDtcbiAgcHVibGljIGdldENvbnRleHQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuY29udGV4dCB8fCAnZXh0ZXJuYWwnO1xuICBwdWJsaWMgZ2V0VGFyZ2V0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnRhcmdldCB8fCBudWxsO1xuICBwdWJsaWMgZ2V0U2VhcmNoSW4gPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuc2VhcmNoSW4gfHwgbnVsbDtcbiAgcHVibGljIGdldFR5cGUgPSAoKSA9PiB0aGlzLmNvbmZpZy50eXBlO1xuICBwdWJsaWMgZ2V0T3V0cHV0ID0gKCkgPT4gdGhpcy5vdXRwdXQ7XG4gIFxuICBwdWJsaWMgc2V0RGF0YSA9IChuZXdEYXRhOiBJRmFjZXRJbnB1dERhdGFbXSkgPT4gdGhpcy5kYXRhID0gbmV3RGF0YTtcbiAgcHJpdmF0ZSBfc2V0SWQoKSB7XG4gICAgdGhpcy5pZCA9IGBmYWNldC1pbnB1dC0ke3RoaXMuZ2V0VHlwZSgpfS0ke0ZhY2V0SW5wdXQuaW5kZXh9YDtcbiAgfTtcbn0iXX0=