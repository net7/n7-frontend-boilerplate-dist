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
export class FacetInput {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.isEmpty = false;
        this.update = (/**
         * @return {?}
         */
        () => { this.output = this.transform(); });
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
        (newData) => { this.data = newData; });
        this.config = config;
        this._setId();
        FacetInput.index += 1;
    }
    /**
     * @return {?}
     */
    clear() { return null; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2QkFNQzs7O0lBTEMsK0JBQXVCOztJQUN2QiwrQkFBYzs7SUFDZCxpQ0FBZ0I7O0lBQ2hCLGdDQUFpQjs7SUFDakIsaUNBQWM7Ozs7O0FBR2hCLE1BQU0sT0FBZ0IsVUFBVTs7OztJQWE5QixZQUFZLE1BQU07UUFGUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBYW5CLFdBQU07OztRQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFBO1FBRWxELFVBQUs7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUM7UUFFdEIsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztRQUUxQixjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBRTlCLGVBQVU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO1FBRXZDLGtCQUFhOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQztRQUU3QyxvQkFBZTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUM7UUFFakQsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBQztRQUVsRSxjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1FBRTFELGdCQUFXOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1FBRTlELFlBQU87OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDO1FBRWpDLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFJOUIsZUFBVTs7OztRQUFHLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFBO1FBRU0sWUFBTzs7OztRQUFHLENBQUMsT0FBeUIsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUE7UUF4Q3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUE4Qk0sS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFRdkIsTUFBTTtRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsZUFBZSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hFLENBQUM7O0FBekRNLGdCQUFLLEdBQUcsQ0FBQyxDQUFDOzs7SUFBakIsaUJBQWlCOzs7OztJQUVqQix3QkFBbUI7Ozs7O0lBRW5CLDRCQUFzQjs7Ozs7SUFFdEIsNEJBQXNCOzs7OztJQUV0QiwwQkFBaUM7Ozs7O0lBRWpDLDZCQUEwQjs7SUFhMUIsNEJBQXlEOztJQUV6RCwyQkFBNkI7O0lBRTdCLDZCQUFpQzs7SUFFakMsK0JBQXFDOztJQUVyQyxnQ0FBOEM7O0lBRTlDLG1DQUFvRDs7SUFFcEQscUNBQXdEOztJQUV4RCxnQ0FBeUU7O0lBRXpFLCtCQUFpRTs7SUFFakUsaUNBQXFFOztJQUVyRSw2QkFBd0M7O0lBRXhDLCtCQUFxQzs7SUFJckMsZ0NBRUM7O0lBRUQsNkJBQXdFOzs7Ozs7SUFsQ3hFLDJEQUFpRDs7Ozs7O0lBRWpELGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBGYWNldElucHV0RGF0YSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvdW50ZXI6IG51bWJlcjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgb3B0aW9ucz86IGFueTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhY2V0SW5wdXQge1xuICBzdGF0aWMgaW5kZXggPSAwO1xuXG4gIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG91dHB1dDogYW55O1xuXG4gIHByb3RlY3RlZCBkYXRhOiBGYWNldElucHV0RGF0YVtdO1xuXG4gIHByb3RlY3RlZCBpc0VtcHR5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fc2V0SWQoKTtcblxuICAgIEZhY2V0SW5wdXQuaW5kZXggKz0gMTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBzZXRBY3RpdmUoZmFjZXRWYWx1ZTogYW55KTogdm9pZDtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHJhbnNmb3JtKCk6IGFueTtcblxuICBwdWJsaWMgdXBkYXRlID0gKCkgPT4geyB0aGlzLm91dHB1dCA9IHRoaXMudHJhbnNmb3JtKCk7IH1cblxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLmlkO1xuXG4gIHB1YmxpYyBnZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xuXG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcblxuICBwdWJsaWMgZ2V0RmFjZXRJZCA9ICgpID0+IHRoaXMuY29uZmlnLmZhY2V0SWQ7XG5cbiAgcHVibGljIGdldElucHV0SW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5pbnB1dEluZGV4O1xuXG4gIHB1YmxpYyBnZXRTZWN0aW9uSW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5zZWN0aW9uSW5kZXg7XG5cbiAgcHVibGljIGdldENvbnRleHQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuY29udGV4dCB8fCAnZXh0ZXJuYWwnO1xuXG4gIHB1YmxpYyBnZXRUYXJnZXQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudGFyZ2V0IHx8IG51bGw7XG5cbiAgcHVibGljIGdldFNlYXJjaEluID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnNlYXJjaEluIHx8IG51bGw7XG5cbiAgcHVibGljIGdldFR5cGUgPSAoKSA9PiB0aGlzLmNvbmZpZy50eXBlO1xuXG4gIHB1YmxpYyBnZXRPdXRwdXQgPSAoKSA9PiB0aGlzLm91dHB1dDtcblxuICBwdWJsaWMgY2xlYXIoKSB7IHJldHVybiBudWxsOyB9XG5cbiAgcHVibGljIHNldElzRW1wdHkgPSAoZW1wdHk6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLmlzRW1wdHkgPSBlbXB0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXREYXRhID0gKG5ld0RhdGE6IEZhY2V0SW5wdXREYXRhW10pID0+IHsgdGhpcy5kYXRhID0gbmV3RGF0YTsgfVxuXG4gIHByaXZhdGUgX3NldElkKCkge1xuICAgIHRoaXMuaWQgPSBgZmFjZXQtaW5wdXQtJHt0aGlzLmdldFR5cGUoKX0tJHtGYWNldElucHV0LmluZGV4fWA7XG4gIH1cbn1cbiJdfQ==