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
     * @private
     * @return {?}
     */
    _setId() {
        this.id = `facet-input-${this.getType()}-${FacetInput.index}`;
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4QkFNQzs7O0lBTEMsZ0NBQXVCOztJQUN2QixnQ0FBYzs7SUFDZCxrQ0FBZ0I7O0lBQ2hCLGlDQUFpQjs7SUFDakIsa0NBQWM7Ozs7O0FBR2hCLE1BQU0sT0FBZ0IsVUFBVTs7OztJQVE5QixZQUFZLE1BQU07UUFVWCxXQUFNOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQztRQUM5QyxVQUFLOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDO1FBQ3RCLFlBQU87OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUM7UUFDMUIsY0FBUzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUM5QixlQUFVOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQztRQUN2QyxrQkFBYTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUM7UUFDN0Msb0JBQWU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDO1FBQ2pELGVBQVU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxVQUFVLEVBQUM7UUFDbEUsY0FBUzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLElBQUksRUFBQztRQUMxRCxnQkFBVzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksRUFBQztRQUM5RCxZQUFPOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQztRQUNqQyxjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBRTlCLFlBQU87Ozs7UUFBRyxDQUFDLE9BQTBCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFDO1FBdEJuRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFtQk8sTUFBTTtRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsZUFBZSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFBQSxDQUFDOztBQWpDSyxnQkFBSyxHQUFXLENBQUMsQ0FBQzs7O0lBQXpCLGlCQUF5Qjs7Ozs7SUFFekIsd0JBQW1COzs7OztJQUNuQiw0QkFBc0I7Ozs7O0lBQ3RCLDRCQUFzQjs7Ozs7SUFDdEIsMEJBQWtDOztJQVlsQyw0QkFBcUQ7O0lBQ3JELDJCQUE2Qjs7SUFDN0IsNkJBQWlDOztJQUNqQywrQkFBcUM7O0lBQ3JDLGdDQUE4Qzs7SUFDOUMsbUNBQW9EOztJQUNwRCxxQ0FBd0Q7O0lBQ3hELGdDQUF5RTs7SUFDekUsK0JBQWlFOztJQUNqRSxpQ0FBcUU7O0lBQ3JFLDZCQUF3Qzs7SUFDeEMsK0JBQXFDOztJQUVyQyw2QkFBcUU7Ozs7Ozs7SUFoQnJFLDJEQUFpRDs7Ozs7O0lBQ2pELGlEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJRmFjZXRJbnB1dERhdGEge1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBjb3VudGVyOiBudW1iZXI7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIG9wdGlvbnM/OiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWNldElucHV0IHtcbiAgc3RhdGljIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuICBwcm90ZWN0ZWQgb3V0cHV0OiBhbnk7XG4gIHByb3RlY3RlZCBkYXRhOiBJRmFjZXRJbnB1dERhdGFbXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpe1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3NldElkKCk7XG4gICAgXG4gICAgRmFjZXRJbnB1dC5pbmRleCsrO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHNldEFjdGl2ZShmYWNldFZhbHVlOiBhbnkpOiB2b2lkO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHJhbnNmb3JtKCk6IGFueTtcbiAgXG4gIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB0aGlzLm91dHB1dCA9IHRoaXMudHJhbnNmb3JtKCk7XG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XG4gIHB1YmxpYyBnZXREYXRhID0gKCkgPT4gdGhpcy5kYXRhO1xuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcbiAgcHVibGljIGdldElucHV0SW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5pbnB1dEluZGV4O1xuICBwdWJsaWMgZ2V0U2VjdGlvbkluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuc2VjdGlvbkluZGV4O1xuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XG4gIHB1YmxpYyBnZXRUYXJnZXQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudGFyZ2V0IHx8IG51bGw7XG4gIHB1YmxpYyBnZXRTZWFyY2hJbiA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5zZWFyY2hJbiB8fCBudWxsO1xuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XG4gIHB1YmxpYyBnZXRPdXRwdXQgPSAoKSA9PiB0aGlzLm91dHB1dDtcbiAgXG4gIHB1YmxpYyBzZXREYXRhID0gKG5ld0RhdGE6IElGYWNldElucHV0RGF0YVtdKSA9PiB0aGlzLmRhdGEgPSBuZXdEYXRhO1xuICBwcml2YXRlIF9zZXRJZCgpIHtcbiAgICB0aGlzLmlkID0gYGZhY2V0LWlucHV0LSR7dGhpcy5nZXRUeXBlKCl9LSR7RmFjZXRJbnB1dC5pbmRleH1gO1xuICB9O1xufSJdfQ==