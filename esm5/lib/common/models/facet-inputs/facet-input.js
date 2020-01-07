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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDhCQU1DOzs7SUFMQyxnQ0FBdUI7O0lBQ3ZCLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsaUNBQWlCOztJQUNqQixrQ0FBYzs7Ozs7QUFHaEI7SUFTRSxvQkFBWSxNQUFNO1FBQWxCLGlCQUtDO1FBUFMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVluQixXQUFNOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQTlCLENBQThCLEVBQUM7UUFDOUMsVUFBSzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxFQUFDO1FBQ3RCLFlBQU87OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFULENBQVMsRUFBQztRQUMxQixjQUFTOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLEVBQUM7UUFDOUIsZUFBVTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFuQixDQUFtQixFQUFDO1FBQ3ZDLGtCQUFhOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQXRCLENBQXNCLEVBQUM7UUFDN0Msb0JBQWU7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBeEIsQ0FBd0IsRUFBQztRQUNqRCxlQUFVOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBOUMsQ0FBOEMsRUFBQztRQUNsRSxjQUFTOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLElBQUksRUFBdkMsQ0FBdUMsRUFBQztRQUMxRCxnQkFBVzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQXpDLENBQXlDLEVBQUM7UUFDOUQsWUFBTzs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFoQixDQUFnQixFQUFDO1FBQ2pDLGNBQVM7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFYLENBQVcsRUFBQztRQUc5QixlQUFVOzs7O1FBQUcsVUFBQyxLQUFjO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQTtRQUNNLFlBQU87Ozs7UUFBRyxVQUFDLE9BQTBCLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBbkIsQ0FBbUIsRUFBQztRQTFCbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFpQk0sMEJBQUs7OztJQUFaLGNBQWdCLENBQUM7Ozs7O0lBTVQsMkJBQU07Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQWUsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFJLFVBQVUsQ0FBQyxLQUFPLENBQUM7SUFDaEUsQ0FBQztJQXRDTSxnQkFBSyxHQUFHLENBQUMsQ0FBQztJQXVDbkIsaUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXhDcUIsVUFBVTs7O0lBQzlCLGlCQUFpQjs7Ozs7SUFFakIsd0JBQW1COzs7OztJQUNuQiw0QkFBc0I7Ozs7O0lBQ3RCLDRCQUFzQjs7Ozs7SUFDdEIsMEJBQWtDOzs7OztJQUNsQyw2QkFBMEI7O0lBWTFCLDRCQUFxRDs7SUFDckQsMkJBQTZCOztJQUM3Qiw2QkFBaUM7O0lBQ2pDLCtCQUFxQzs7SUFDckMsZ0NBQThDOztJQUM5QyxtQ0FBb0Q7O0lBQ3BELHFDQUF3RDs7SUFDeEQsZ0NBQXlFOztJQUN6RSwrQkFBaUU7O0lBQ2pFLGlDQUFxRTs7SUFDckUsNkJBQXdDOztJQUN4QywrQkFBcUM7O0lBR3JDLGdDQUVDOztJQUNELDZCQUFxRTs7Ozs7O0lBcEJyRSwyREFBaUQ7Ozs7OztJQUNqRCxpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUZhY2V0SW5wdXREYXRhIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY291bnRlcjogbnVtYmVyO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBvcHRpb25zPzogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFjZXRJbnB1dCB7XG4gIHN0YXRpYyBpbmRleCA9IDA7XG5cbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XG4gIHByb3RlY3RlZCBvdXRwdXQ6IGFueTtcbiAgcHJvdGVjdGVkIGRhdGE6IElGYWNldElucHV0RGF0YVtdO1xuICBwcm90ZWN0ZWQgaXNFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3NldElkKCk7XG5cbiAgICBGYWNldElucHV0LmluZGV4Kys7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0QWN0aXZlKGZhY2V0VmFsdWU6IGFueSk6IHZvaWQ7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm0oKTogYW55O1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB0aGlzLm91dHB1dCA9IHRoaXMudHJhbnNmb3JtKCk7XG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XG4gIHB1YmxpYyBnZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcbiAgcHVibGljIGdldElucHV0SW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5pbnB1dEluZGV4O1xuICBwdWJsaWMgZ2V0U2VjdGlvbkluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuc2VjdGlvbkluZGV4O1xuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XG4gIHB1YmxpYyBnZXRUYXJnZXQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudGFyZ2V0IHx8IG51bGw7XG4gIHB1YmxpYyBnZXRTZWFyY2hJbiA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5zZWFyY2hJbiB8fCBudWxsO1xuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XG4gIHB1YmxpYyBnZXRPdXRwdXQgPSAoKSA9PiB0aGlzLm91dHB1dDtcbiAgcHVibGljIGNsZWFyKCkge31cblxuICBwdWJsaWMgc2V0SXNFbXB0eSA9IChlbXB0eTogYm9vbGVhbikgPT4ge1xuICAgIHRoaXMuaXNFbXB0eSA9IGVtcHR5O1xuICB9XG4gIHB1YmxpYyBzZXREYXRhID0gKG5ld0RhdGE6IElGYWNldElucHV0RGF0YVtdKSA9PiB0aGlzLmRhdGEgPSBuZXdEYXRhO1xuICBwcml2YXRlIF9zZXRJZCgpIHtcbiAgICB0aGlzLmlkID0gYGZhY2V0LWlucHV0LSR7dGhpcy5nZXRUeXBlKCl9LSR7RmFjZXRJbnB1dC5pbmRleH1gO1xuICB9XG59XG4iXX0=