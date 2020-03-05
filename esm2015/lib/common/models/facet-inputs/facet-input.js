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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2QkFNQzs7O0lBTEMsK0JBQXVCOztJQUN2QiwrQkFBYzs7SUFDZCxpQ0FBZ0I7O0lBQ2hCLGdDQUFpQjs7SUFDakIsaUNBQWM7Ozs7O0FBR2hCLE1BQU0sT0FBZ0IsVUFBVTs7OztJQWE5QixZQUFZLE1BQU07UUFGUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBYW5CLFdBQU07OztRQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFBO1FBRWxELFVBQUs7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUM7UUFFdEIsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztRQUUxQixjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBRTlCLGVBQVU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO1FBRXZDLGtCQUFhOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQztRQUU3QyxvQkFBZTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUM7UUFFakQsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBQztRQUVsRSxjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1FBRTFELGdCQUFXOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1FBRTlELFlBQU87OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDO1FBRWpDLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFJOUIsZUFBVTs7OztRQUFHLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFBO1FBRU0sWUFBTzs7OztRQUFHLENBQUMsT0FBeUIsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUE7UUF4Q3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUE4Qk0sS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFRdkIsTUFBTTtRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsZUFBZSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hFLENBQUM7O0FBekRNLGdCQUFLLEdBQUcsQ0FBQyxDQUFDOzs7SUFBakIsaUJBQWlCOzs7OztJQUVqQix3QkFBbUI7Ozs7O0lBRW5CLDRCQUFzQjs7Ozs7SUFFdEIsNEJBQXNCOzs7OztJQUV0QiwwQkFBaUM7Ozs7O0lBRWpDLDZCQUEwQjs7SUFhMUIsNEJBQXlEOztJQUV6RCwyQkFBNkI7O0lBRTdCLDZCQUFpQzs7SUFFakMsK0JBQXFDOztJQUVyQyxnQ0FBOEM7O0lBRTlDLG1DQUFvRDs7SUFFcEQscUNBQXdEOztJQUV4RCxnQ0FBeUU7O0lBRXpFLCtCQUFpRTs7SUFFakUsaUNBQXFFOztJQUVyRSw2QkFBd0M7O0lBRXhDLCtCQUFxQzs7SUFJckMsZ0NBRUM7O0lBRUQsNkJBQXdFOzs7Ozs7SUFsQ3hFLDJEQUFpRDs7Ozs7O0lBRWpELGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBGYWNldElucHV0RGF0YSB7XHJcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGNvdW50ZXI6IG51bWJlcjtcclxuICBoaWRkZW4/OiBib29sZWFuO1xyXG4gIG9wdGlvbnM/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWNldElucHV0IHtcclxuICBzdGF0aWMgaW5kZXggPSAwO1xyXG5cclxuICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIG91dHB1dDogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgZGF0YTogRmFjZXRJbnB1dERhdGFbXTtcclxuXHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuX3NldElkKCk7XHJcblxyXG4gICAgRmFjZXRJbnB1dC5pbmRleCArPSAxO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFic3RyYWN0IHNldEFjdGl2ZShmYWNldFZhbHVlOiBhbnkpOiB2b2lkO1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHJhbnNmb3JtKCk6IGFueTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHsgdGhpcy5vdXRwdXQgPSB0aGlzLnRyYW5zZm9ybSgpOyB9XHJcblxyXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xyXG5cclxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XHJcblxyXG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcclxuXHJcbiAgcHVibGljIGdldElucHV0SW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5pbnB1dEluZGV4O1xyXG5cclxuICBwdWJsaWMgZ2V0U2VjdGlvbkluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuc2VjdGlvbkluZGV4O1xyXG5cclxuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XHJcblxyXG4gIHB1YmxpYyBnZXRUYXJnZXQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudGFyZ2V0IHx8IG51bGw7XHJcblxyXG4gIHB1YmxpYyBnZXRTZWFyY2hJbiA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5zZWFyY2hJbiB8fCBudWxsO1xyXG5cclxuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XHJcblxyXG4gIHB1YmxpYyBnZXRPdXRwdXQgPSAoKSA9PiB0aGlzLm91dHB1dDtcclxuXHJcbiAgcHVibGljIGNsZWFyKCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBwdWJsaWMgc2V0SXNFbXB0eSA9IChlbXB0eTogYm9vbGVhbikgPT4ge1xyXG4gICAgdGhpcy5pc0VtcHR5ID0gZW1wdHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGF0YSA9IChuZXdEYXRhOiBGYWNldElucHV0RGF0YVtdKSA9PiB7IHRoaXMuZGF0YSA9IG5ld0RhdGE7IH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0SWQoKSB7XHJcbiAgICB0aGlzLmlkID0gYGZhY2V0LWlucHV0LSR7dGhpcy5nZXRUeXBlKCl9LSR7RmFjZXRJbnB1dC5pbmRleH1gO1xyXG4gIH1cclxufVxyXG4iXX0=