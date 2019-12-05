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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFNQzs7O0lBTEMsZ0NBQXVCOztJQUN2QixnQ0FBYzs7SUFDZCxrQ0FBZ0I7O0lBQ2hCLGlDQUFpQjs7SUFDakIsa0NBQWM7Ozs7O0FBR2hCO0lBUUUsb0JBQVksTUFBTTtRQUFsQixpQkFLQztRQUtNLFdBQU07OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBOUIsQ0FBOEIsRUFBQztRQUM5QyxVQUFLOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsRUFBUCxDQUFPLEVBQUM7UUFDdEIsWUFBTzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQVQsQ0FBUyxFQUFDO1FBQzFCLGNBQVM7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFYLENBQVcsRUFBQztRQUM5QixlQUFVOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQW5CLENBQW1CLEVBQUM7UUFDdkMsa0JBQWE7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBdEIsQ0FBc0IsRUFBQztRQUM3QyxvQkFBZTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUF4QixDQUF3QixFQUFDO1FBQ2pELGVBQVU7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksVUFBVSxFQUE5QyxDQUE4QyxFQUFDO1FBQ2xFLGNBQVM7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUF2QyxDQUF1QyxFQUFDO1FBQzFELGdCQUFXOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksRUFBekMsQ0FBeUMsRUFBQztRQUM5RCxZQUFPOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQWhCLENBQWdCLEVBQUM7UUFDakMsY0FBUzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxFQUFDO1FBRTlCLFlBQU87Ozs7UUFBRyxVQUFDLE9BQTBCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBbkIsQ0FBbUIsRUFBQztRQXRCbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBbUJPLDJCQUFNOzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLGlCQUFlLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxVQUFVLENBQUMsS0FBTyxDQUFDO0lBQ2hFLENBQUM7SUFBQSxDQUFDO0lBakNLLGdCQUFLLEdBQVcsQ0FBQyxDQUFDO0lBa0MzQixpQkFBQztDQUFBLEFBbkNELElBbUNDO1NBbkNxQixVQUFVOzs7SUFDOUIsaUJBQXlCOzs7OztJQUV6Qix3QkFBbUI7Ozs7O0lBQ25CLDRCQUFzQjs7Ozs7SUFDdEIsNEJBQXNCOzs7OztJQUN0QiwwQkFBa0M7O0lBWWxDLDRCQUFxRDs7SUFDckQsMkJBQTZCOztJQUM3Qiw2QkFBaUM7O0lBQ2pDLCtCQUFxQzs7SUFDckMsZ0NBQThDOztJQUM5QyxtQ0FBb0Q7O0lBQ3BELHFDQUF3RDs7SUFDeEQsZ0NBQXlFOztJQUN6RSwrQkFBaUU7O0lBQ2pFLGlDQUFxRTs7SUFDckUsNkJBQXdDOztJQUN4QywrQkFBcUM7O0lBRXJDLDZCQUFxRTs7Ozs7OztJQWhCckUsMkRBQWlEOzs7Ozs7SUFDakQsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElGYWNldElucHV0RGF0YSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvdW50ZXI6IG51bWJlcjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgb3B0aW9ucz86IGFueTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhY2V0SW5wdXQge1xuICBzdGF0aWMgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XG4gIHByb3RlY3RlZCBvdXRwdXQ6IGFueTtcbiAgcHJvdGVjdGVkIGRhdGE6IElGYWNldElucHV0RGF0YVtdO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZyl7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fc2V0SWQoKTtcbiAgICBcbiAgICBGYWNldElucHV0LmluZGV4Kys7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0QWN0aXZlKGZhY2V0VmFsdWU6IGFueSk6IHZvaWQ7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm0oKTogYW55O1xuICBcbiAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHRoaXMub3V0cHV0ID0gdGhpcy50cmFuc2Zvcm0oKTtcbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5pZDtcbiAgcHVibGljIGdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcbiAgcHVibGljIGdldEZhY2V0SWQgPSAoKSA9PiB0aGlzLmNvbmZpZy5mYWNldElkO1xuICBwdWJsaWMgZ2V0SW5wdXRJbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLmlucHV0SW5kZXg7XG4gIHB1YmxpYyBnZXRTZWN0aW9uSW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5zZWN0aW9uSW5kZXg7XG4gIHB1YmxpYyBnZXRDb250ZXh0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLmNvbnRleHQgfHwgJ2V4dGVybmFsJztcbiAgcHVibGljIGdldFRhcmdldCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50YXJnZXQgfHwgbnVsbDtcbiAgcHVibGljIGdldFNlYXJjaEluID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnNlYXJjaEluIHx8IG51bGw7XG4gIHB1YmxpYyBnZXRUeXBlID0gKCkgPT4gdGhpcy5jb25maWcudHlwZTtcbiAgcHVibGljIGdldE91dHB1dCA9ICgpID0+IHRoaXMub3V0cHV0O1xuICBcbiAgcHVibGljIHNldERhdGEgPSAobmV3RGF0YTogSUZhY2V0SW5wdXREYXRhW10pID0+IHRoaXMuZGF0YSA9IG5ld0RhdGE7XG4gIHByaXZhdGUgX3NldElkKCkge1xuICAgIHRoaXMuaWQgPSBgZmFjZXQtaW5wdXQtJHt0aGlzLmdldFR5cGUoKX0tJHtGYWNldElucHV0LmluZGV4fWA7XG4gIH07XG59Il19