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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFNQzs7O0lBTEMsZ0NBQXVCOztJQUN2QixnQ0FBYzs7SUFDZCxrQ0FBZ0I7O0lBQ2hCLGlDQUFpQjs7SUFDakIsa0NBQWM7Ozs7O0FBR2hCLE1BQU0sT0FBZ0IsVUFBVTs7OztJQVM5QixZQUFZLE1BQU07UUFGUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBWW5CLFdBQU07OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1FBQzlDLFVBQUs7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUM7UUFDdEIsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztRQUMxQixjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQzlCLGVBQVU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO1FBQ3ZDLGtCQUFhOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQztRQUM3QyxvQkFBZTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUM7UUFDakQsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBQztRQUNsRSxjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1FBQzFELGdCQUFXOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1FBQzlELFlBQU87OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDO1FBQ2pDLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFHOUIsZUFBVTs7OztRQUFHLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFBO1FBQ00sWUFBTzs7OztRQUFHLENBQUMsT0FBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUM7UUExQm5FLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBaUJNLEtBQUssS0FBSSxDQUFDOzs7OztJQU1ULE1BQU07UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLGVBQWUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoRSxDQUFDOztBQXRDTSxnQkFBSyxHQUFHLENBQUMsQ0FBQzs7O0lBQWpCLGlCQUFpQjs7Ozs7SUFFakIsd0JBQW1COzs7OztJQUNuQiw0QkFBc0I7Ozs7O0lBQ3RCLDRCQUFzQjs7Ozs7SUFDdEIsMEJBQWtDOzs7OztJQUNsQyw2QkFBMEI7O0lBWTFCLDRCQUFxRDs7SUFDckQsMkJBQTZCOztJQUM3Qiw2QkFBaUM7O0lBQ2pDLCtCQUFxQzs7SUFDckMsZ0NBQThDOztJQUM5QyxtQ0FBb0Q7O0lBQ3BELHFDQUF3RDs7SUFDeEQsZ0NBQXlFOztJQUN6RSwrQkFBaUU7O0lBQ2pFLGlDQUFxRTs7SUFDckUsNkJBQXdDOztJQUN4QywrQkFBcUM7O0lBR3JDLGdDQUVDOztJQUNELDZCQUFxRTs7Ozs7O0lBcEJyRSwyREFBaUQ7Ozs7OztJQUNqRCxpREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUZhY2V0SW5wdXREYXRhIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY291bnRlcjogbnVtYmVyO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBvcHRpb25zPzogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFjZXRJbnB1dCB7XG4gIHN0YXRpYyBpbmRleCA9IDA7XG5cbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XG4gIHByb3RlY3RlZCBvdXRwdXQ6IGFueTtcbiAgcHJvdGVjdGVkIGRhdGE6IElGYWNldElucHV0RGF0YVtdO1xuICBwcm90ZWN0ZWQgaXNFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3NldElkKCk7XG5cbiAgICBGYWNldElucHV0LmluZGV4Kys7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0QWN0aXZlKGZhY2V0VmFsdWU6IGFueSk6IHZvaWQ7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm0oKTogYW55O1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB0aGlzLm91dHB1dCA9IHRoaXMudHJhbnNmb3JtKCk7XG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XG4gIHB1YmxpYyBnZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcbiAgcHVibGljIGdldElucHV0SW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5pbnB1dEluZGV4O1xuICBwdWJsaWMgZ2V0U2VjdGlvbkluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuc2VjdGlvbkluZGV4O1xuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XG4gIHB1YmxpYyBnZXRUYXJnZXQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudGFyZ2V0IHx8IG51bGw7XG4gIHB1YmxpYyBnZXRTZWFyY2hJbiA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5zZWFyY2hJbiB8fCBudWxsO1xuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XG4gIHB1YmxpYyBnZXRPdXRwdXQgPSAoKSA9PiB0aGlzLm91dHB1dDtcbiAgcHVibGljIGNsZWFyKCkge31cblxuICBwdWJsaWMgc2V0SXNFbXB0eSA9IChlbXB0eTogYm9vbGVhbikgPT4ge1xuICAgIHRoaXMuaXNFbXB0eSA9IGVtcHR5O1xuICB9XG4gIHB1YmxpYyBzZXREYXRhID0gKG5ld0RhdGE6IElGYWNldElucHV0RGF0YVtdKSA9PiB0aGlzLmRhdGEgPSBuZXdEYXRhO1xuICBwcml2YXRlIF9zZXRJZCgpIHtcbiAgICB0aGlzLmlkID0gYGZhY2V0LWlucHV0LSR7dGhpcy5nZXRUeXBlKCl9LSR7RmFjZXRJbnB1dC5pbmRleH1gO1xuICB9XG59XG4iXX0=