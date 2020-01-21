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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDhCQU1DOzs7SUFMQyxnQ0FBdUI7O0lBQ3ZCLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsaUNBQWlCOztJQUNqQixrQ0FBYzs7Ozs7QUFHaEIsTUFBTSxPQUFnQixVQUFVOzs7O0lBUzlCLFlBQVksTUFBTTtRQUZSLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFZbkIsV0FBTTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7UUFDOUMsVUFBSzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQztRQUN0QixZQUFPOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDO1FBQzFCLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFDOUIsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7UUFDdkMsa0JBQWE7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDO1FBQzdDLG9CQUFlOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBQztRQUNqRCxlQUFVOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksVUFBVSxFQUFDO1FBQ2xFLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUM7UUFDMUQsZ0JBQVc7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUM7UUFDOUQsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUM7UUFDakMsY0FBUzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUc5QixlQUFVOzs7O1FBQUcsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUE7UUFDTSxZQUFPOzs7O1FBQUcsQ0FBQyxPQUEwQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBQztRQTFCbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFpQk0sS0FBSyxLQUFJLENBQUM7Ozs7O0lBTVQsTUFBTTtRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsZUFBZSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hFLENBQUM7O0FBdENNLGdCQUFLLEdBQUcsQ0FBQyxDQUFDOzs7SUFBakIsaUJBQWlCOzs7OztJQUVqQix3QkFBbUI7Ozs7O0lBQ25CLDRCQUFzQjs7Ozs7SUFDdEIsNEJBQXNCOzs7OztJQUN0QiwwQkFBa0M7Ozs7O0lBQ2xDLDZCQUEwQjs7SUFZMUIsNEJBQXFEOztJQUNyRCwyQkFBNkI7O0lBQzdCLDZCQUFpQzs7SUFDakMsK0JBQXFDOztJQUNyQyxnQ0FBOEM7O0lBQzlDLG1DQUFvRDs7SUFDcEQscUNBQXdEOztJQUN4RCxnQ0FBeUU7O0lBQ3pFLCtCQUFpRTs7SUFDakUsaUNBQXFFOztJQUNyRSw2QkFBd0M7O0lBQ3hDLCtCQUFxQzs7SUFHckMsZ0NBRUM7O0lBQ0QsNkJBQXFFOzs7Ozs7SUFwQnJFLDJEQUFpRDs7Ozs7O0lBQ2pELGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJRmFjZXRJbnB1dERhdGEge1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBjb3VudGVyOiBudW1iZXI7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIG9wdGlvbnM/OiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWNldElucHV0IHtcbiAgc3RhdGljIGluZGV4ID0gMDtcblxuICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcbiAgcHJvdGVjdGVkIG91dHB1dDogYW55O1xuICBwcm90ZWN0ZWQgZGF0YTogSUZhY2V0SW5wdXREYXRhW107XG4gIHByb3RlY3RlZCBpc0VtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fc2V0SWQoKTtcblxuICAgIEZhY2V0SW5wdXQuaW5kZXgrKztcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBzZXRBY3RpdmUoZmFjZXRWYWx1ZTogYW55KTogdm9pZDtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRyYW5zZm9ybSgpOiBhbnk7XG5cbiAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHRoaXMub3V0cHV0ID0gdGhpcy50cmFuc2Zvcm0oKTtcbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5pZDtcbiAgcHVibGljIGdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcbiAgcHVibGljIGdldEZhY2V0SWQgPSAoKSA9PiB0aGlzLmNvbmZpZy5mYWNldElkO1xuICBwdWJsaWMgZ2V0SW5wdXRJbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLmlucHV0SW5kZXg7XG4gIHB1YmxpYyBnZXRTZWN0aW9uSW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5zZWN0aW9uSW5kZXg7XG4gIHB1YmxpYyBnZXRDb250ZXh0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLmNvbnRleHQgfHwgJ2V4dGVybmFsJztcbiAgcHVibGljIGdldFRhcmdldCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50YXJnZXQgfHwgbnVsbDtcbiAgcHVibGljIGdldFNlYXJjaEluID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnNlYXJjaEluIHx8IG51bGw7XG4gIHB1YmxpYyBnZXRUeXBlID0gKCkgPT4gdGhpcy5jb25maWcudHlwZTtcbiAgcHVibGljIGdldE91dHB1dCA9ICgpID0+IHRoaXMub3V0cHV0O1xuICBwdWJsaWMgY2xlYXIoKSB7fVxuXG4gIHB1YmxpYyBzZXRJc0VtcHR5ID0gKGVtcHR5OiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5pc0VtcHR5ID0gZW1wdHk7XG4gIH1cbiAgcHVibGljIHNldERhdGEgPSAobmV3RGF0YTogSUZhY2V0SW5wdXREYXRhW10pID0+IHRoaXMuZGF0YSA9IG5ld0RhdGE7XG4gIHByaXZhdGUgX3NldElkKCkge1xuICAgIHRoaXMuaWQgPSBgZmFjZXQtaW5wdXQtJHt0aGlzLmdldFR5cGUoKX0tJHtGYWNldElucHV0LmluZGV4fWA7XG4gIH1cbn1cbiJdfQ==