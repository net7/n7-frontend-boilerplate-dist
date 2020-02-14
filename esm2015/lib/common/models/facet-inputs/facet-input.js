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
export class FacetInput {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.isEmpty = false;
        this.update = (/**
         * @return {?}
         */
        () => this.output = this.transform());
        this.getId = (/**
         * @return {?}
         */
        () => this.id);
        this.getData = (/**
         * @return {?}
         */
        () => this.data);
        this.getConfig = (/**
         * @return {?}
         */
        () => this.config);
        this.getFacetId = (/**
         * @return {?}
         */
        () => this.config.facetId);
        this.getInputIndex = (/**
         * @return {?}
         */
        () => this.config.inputIndex);
        this.getSectionIndex = (/**
         * @return {?}
         */
        () => this.config.sectionIndex);
        this.getContext = (/**
         * @return {?}
         */
        () => this.config.filterConfig.context || 'external');
        this.getTarget = (/**
         * @return {?}
         */
        () => this.config.filterConfig.target || null);
        this.getSearchIn = (/**
         * @return {?}
         */
        () => this.config.filterConfig.searchIn || null);
        this.getType = (/**
         * @return {?}
         */
        () => this.config.type);
        this.getOutput = (/**
         * @return {?}
         */
        () => this.output);
        this.setIsEmpty = (/**
         * @param {?} empty
         * @return {?}
         */
        (empty) => {
            this.isEmpty = empty;
        });
        this.setData = (/**
         * @param {?} newData
         * @return {?}
         */
        (newData) => this.data = newData);
        this.config = config;
        this._setId();
        FacetInput.index++;
    }
    /**
     * @return {?}
     */
    clear() { }
    /**
     * @private
     * @return {?}
     */
    _setId() {
        this.id = `facet-input-${this.getType()}-${FacetInput.index}`;
    }
}
FacetInput.index = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFNQzs7O0lBTEMsZ0NBQXVCOztJQUN2QixnQ0FBYzs7SUFDZCxrQ0FBZ0I7O0lBQ2hCLGlDQUFpQjs7SUFDakIsa0NBQWM7Ozs7O0FBR2hCLE1BQU0sT0FBZ0IsVUFBVTs7OztJQVM5QixZQUFZLE1BQU07UUFGUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBWW5CLFdBQU07OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1FBQzlDLFVBQUs7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUM7UUFDdEIsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztRQUMxQixjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQzlCLGVBQVU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO1FBQ3ZDLGtCQUFhOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQztRQUM3QyxvQkFBZTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUM7UUFDakQsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBQztRQUNsRSxjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1FBQzFELGdCQUFXOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1FBQzlELFlBQU87OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDO1FBQ2pDLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFHOUIsZUFBVTs7OztRQUFHLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFBO1FBQ00sWUFBTzs7OztRQUFHLENBQUMsT0FBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUM7UUExQm5FLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBaUJNLEtBQUssS0FBSSxDQUFDOzs7OztJQU1ULE1BQU07UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLGVBQWUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoRSxDQUFDOztBQXRDTSxnQkFBSyxHQUFHLENBQUMsQ0FBQzs7O0lBQWpCLGlCQUFpQjs7Ozs7SUFFakIsd0JBQW1COzs7OztJQUNuQiw0QkFBc0I7Ozs7O0lBQ3RCLDRCQUFzQjs7Ozs7SUFDdEIsMEJBQWtDOzs7OztJQUNsQyw2QkFBMEI7O0lBWTFCLDRCQUFxRDs7SUFDckQsMkJBQTZCOztJQUM3Qiw2QkFBaUM7O0lBQ2pDLCtCQUFxQzs7SUFDckMsZ0NBQThDOztJQUM5QyxtQ0FBb0Q7O0lBQ3BELHFDQUF3RDs7SUFDeEQsZ0NBQXlFOztJQUN6RSwrQkFBaUU7O0lBQ2pFLGlDQUFxRTs7SUFDckUsNkJBQXdDOztJQUN4QywrQkFBcUM7O0lBR3JDLGdDQUVDOztJQUNELDZCQUFxRTs7Ozs7O0lBcEJyRSwyREFBaUQ7Ozs7OztJQUNqRCxpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUZhY2V0SW5wdXREYXRhIHtcclxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgY291bnRlcjogbnVtYmVyO1xyXG4gIGhpZGRlbj86IGJvb2xlYW47XHJcbiAgb3B0aW9ucz86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhY2V0SW5wdXQge1xyXG4gIHN0YXRpYyBpbmRleCA9IDA7XHJcblxyXG4gIHByaXZhdGUgaWQ6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XHJcbiAgcHJvdGVjdGVkIG91dHB1dDogYW55O1xyXG4gIHByb3RlY3RlZCBkYXRhOiBJRmFjZXRJbnB1dERhdGFbXTtcclxuICBwcm90ZWN0ZWQgaXNFbXB0eSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy5fc2V0SWQoKTtcclxuXHJcbiAgICBGYWNldElucHV0LmluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0QWN0aXZlKGZhY2V0VmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRyYW5zZm9ybSgpOiBhbnk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB0aGlzLm91dHB1dCA9IHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5pZDtcclxuICBwdWJsaWMgZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcclxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XHJcbiAgcHVibGljIGdldEZhY2V0SWQgPSAoKSA9PiB0aGlzLmNvbmZpZy5mYWNldElkO1xyXG4gIHB1YmxpYyBnZXRJbnB1dEluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuaW5wdXRJbmRleDtcclxuICBwdWJsaWMgZ2V0U2VjdGlvbkluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuc2VjdGlvbkluZGV4O1xyXG4gIHB1YmxpYyBnZXRDb250ZXh0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLmNvbnRleHQgfHwgJ2V4dGVybmFsJztcclxuICBwdWJsaWMgZ2V0VGFyZ2V0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnRhcmdldCB8fCBudWxsO1xyXG4gIHB1YmxpYyBnZXRTZWFyY2hJbiA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5zZWFyY2hJbiB8fCBudWxsO1xyXG4gIHB1YmxpYyBnZXRUeXBlID0gKCkgPT4gdGhpcy5jb25maWcudHlwZTtcclxuICBwdWJsaWMgZ2V0T3V0cHV0ID0gKCkgPT4gdGhpcy5vdXRwdXQ7XHJcbiAgcHVibGljIGNsZWFyKCkge31cclxuXHJcbiAgcHVibGljIHNldElzRW1wdHkgPSAoZW1wdHk6IGJvb2xlYW4pID0+IHtcclxuICAgIHRoaXMuaXNFbXB0eSA9IGVtcHR5O1xyXG4gIH1cclxuICBwdWJsaWMgc2V0RGF0YSA9IChuZXdEYXRhOiBJRmFjZXRJbnB1dERhdGFbXSkgPT4gdGhpcy5kYXRhID0gbmV3RGF0YTtcclxuICBwcml2YXRlIF9zZXRJZCgpIHtcclxuICAgIHRoaXMuaWQgPSBgZmFjZXQtaW5wdXQtJHt0aGlzLmdldFR5cGUoKX0tJHtGYWNldElucHV0LmluZGV4fWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==