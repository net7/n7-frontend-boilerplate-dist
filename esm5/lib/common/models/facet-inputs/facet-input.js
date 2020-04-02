/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDZCQU1DOzs7SUFMQywrQkFBdUI7O0lBQ3ZCLCtCQUFjOztJQUNkLGlDQUFnQjs7SUFDaEIsZ0NBQWlCOztJQUNqQixpQ0FBYzs7Ozs7QUFHaEI7SUFhRSxvQkFBWSxNQUFNO1FBQWxCLGlCQUtDO1FBUFMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQWFuQixXQUFNOzs7UUFBRyxjQUFRLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFBO1FBRWxELFVBQUs7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsRUFBRSxFQUFQLENBQU8sRUFBQztRQUV0QixZQUFPOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBVCxDQUFTLEVBQUM7UUFFMUIsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxFQUFDO1FBRTlCLGVBQVU7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBbkIsQ0FBbUIsRUFBQztRQUV2QyxrQkFBYTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUF0QixDQUFzQixFQUFDO1FBRTdDLG9CQUFlOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQXhCLENBQXdCLEVBQUM7UUFFakQsZUFBVTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxVQUFVLEVBQTlDLENBQThDLEVBQUM7UUFFbEUsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQXZDLENBQXVDLEVBQUM7UUFFMUQsZ0JBQVc7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUF6QyxDQUF5QyxFQUFDO1FBRTlELFlBQU87OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBaEIsQ0FBZ0IsRUFBQztRQUVqQyxjQUFTOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLEVBQUM7UUFJOUIsZUFBVTs7OztRQUFHLFVBQUMsS0FBYztZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUE7UUFFTSxZQUFPOzs7O1FBQUcsVUFBQyxPQUF5QixJQUFPLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFBO1FBeEN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBOEJNLDBCQUFLOzs7SUFBWixjQUFpQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBUXZCLDJCQUFNOzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLGlCQUFlLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxVQUFVLENBQUMsS0FBTyxDQUFDO0lBQ2hFLENBQUM7SUF6RE0sZ0JBQUssR0FBRyxDQUFDLENBQUM7SUEwRG5CLGlCQUFDO0NBQUEsQUEzREQsSUEyREM7U0EzRHFCLFVBQVU7OztJQUM5QixpQkFBaUI7Ozs7O0lBRWpCLHdCQUFtQjs7Ozs7SUFFbkIsNEJBQXNCOzs7OztJQUV0Qiw0QkFBc0I7Ozs7O0lBRXRCLDBCQUFpQzs7Ozs7SUFFakMsNkJBQTBCOztJQWExQiw0QkFBeUQ7O0lBRXpELDJCQUE2Qjs7SUFFN0IsNkJBQWlDOztJQUVqQywrQkFBcUM7O0lBRXJDLGdDQUE4Qzs7SUFFOUMsbUNBQW9EOztJQUVwRCxxQ0FBd0Q7O0lBRXhELGdDQUF5RTs7SUFFekUsK0JBQWlFOztJQUVqRSxpQ0FBcUU7O0lBRXJFLDZCQUF3Qzs7SUFFeEMsK0JBQXFDOztJQUlyQyxnQ0FFQzs7SUFFRCw2QkFBd0U7Ozs7OztJQWxDeEUsMkRBQWlEOzs7Ozs7SUFFakQsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEZhY2V0SW5wdXREYXRhIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY291bnRlcjogbnVtYmVyO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBvcHRpb25zPzogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFjZXRJbnB1dCB7XG4gIHN0YXRpYyBpbmRleCA9IDA7XG5cbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcblxuICBwcm90ZWN0ZWQgb3V0cHV0OiBhbnk7XG5cbiAgcHJvdGVjdGVkIGRhdGE6IEZhY2V0SW5wdXREYXRhW107XG5cbiAgcHJvdGVjdGVkIGlzRW1wdHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9zZXRJZCgpO1xuXG4gICAgRmFjZXRJbnB1dC5pbmRleCArPSAxO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHNldEFjdGl2ZShmYWNldFZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm0oKTogYW55O1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7IHRoaXMub3V0cHV0ID0gdGhpcy50cmFuc2Zvcm0oKTsgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XG5cbiAgcHVibGljIGdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG5cbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xuXG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcblxuICBwdWJsaWMgZ2V0SW5wdXRJbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLmlucHV0SW5kZXg7XG5cbiAgcHVibGljIGdldFNlY3Rpb25JbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLnNlY3Rpb25JbmRleDtcblxuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XG5cbiAgcHVibGljIGdldFRhcmdldCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50YXJnZXQgfHwgbnVsbDtcblxuICBwdWJsaWMgZ2V0U2VhcmNoSW4gPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuc2VhcmNoSW4gfHwgbnVsbDtcblxuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XG5cbiAgcHVibGljIGdldE91dHB1dCA9ICgpID0+IHRoaXMub3V0cHV0O1xuXG4gIHB1YmxpYyBjbGVhcigpIHsgcmV0dXJuIG51bGw7IH1cblxuICBwdWJsaWMgc2V0SXNFbXB0eSA9IChlbXB0eTogYm9vbGVhbikgPT4ge1xuICAgIHRoaXMuaXNFbXB0eSA9IGVtcHR5O1xuICB9XG5cbiAgcHVibGljIHNldERhdGEgPSAobmV3RGF0YTogRmFjZXRJbnB1dERhdGFbXSkgPT4geyB0aGlzLmRhdGEgPSBuZXdEYXRhOyB9XG5cbiAgcHJpdmF0ZSBfc2V0SWQoKSB7XG4gICAgdGhpcy5pZCA9IGBmYWNldC1pbnB1dC0ke3RoaXMuZ2V0VHlwZSgpfS0ke0ZhY2V0SW5wdXQuaW5kZXh9YDtcbiAgfVxufVxuIl19