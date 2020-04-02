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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDZCQU1DOzs7SUFMQywrQkFBdUI7O0lBQ3ZCLCtCQUFjOztJQUNkLGlDQUFnQjs7SUFDaEIsZ0NBQWlCOztJQUNqQixpQ0FBYzs7Ozs7QUFHaEIsTUFBTSxPQUFnQixVQUFVOzs7O0lBYTlCLFlBQVksTUFBTTtRQUZSLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFhbkIsV0FBTTs7O1FBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUE7UUFFbEQsVUFBSzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQztRQUV0QixZQUFPOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDO1FBRTFCLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFFOUIsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7UUFFdkMsa0JBQWE7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDO1FBRTdDLG9CQUFlOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBQztRQUVqRCxlQUFVOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksVUFBVSxFQUFDO1FBRWxFLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUM7UUFFMUQsZ0JBQVc7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUM7UUFFOUQsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUM7UUFFakMsY0FBUzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUk5QixlQUFVOzs7O1FBQUcsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUE7UUFFTSxZQUFPOzs7O1FBQUcsQ0FBQyxPQUF5QixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQTtRQXhDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQThCTSxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztJQVF2QixNQUFNO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxlQUFlLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEUsQ0FBQzs7QUF6RE0sZ0JBQUssR0FBRyxDQUFDLENBQUM7OztJQUFqQixpQkFBaUI7Ozs7O0lBRWpCLHdCQUFtQjs7Ozs7SUFFbkIsNEJBQXNCOzs7OztJQUV0Qiw0QkFBc0I7Ozs7O0lBRXRCLDBCQUFpQzs7Ozs7SUFFakMsNkJBQTBCOztJQWExQiw0QkFBeUQ7O0lBRXpELDJCQUE2Qjs7SUFFN0IsNkJBQWlDOztJQUVqQywrQkFBcUM7O0lBRXJDLGdDQUE4Qzs7SUFFOUMsbUNBQW9EOztJQUVwRCxxQ0FBd0Q7O0lBRXhELGdDQUF5RTs7SUFFekUsK0JBQWlFOztJQUVqRSxpQ0FBcUU7O0lBRXJFLDZCQUF3Qzs7SUFFeEMsK0JBQXFDOztJQUlyQyxnQ0FFQzs7SUFFRCw2QkFBd0U7Ozs7OztJQWxDeEUsMkRBQWlEOzs7Ozs7SUFFakQsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEZhY2V0SW5wdXREYXRhIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY291bnRlcjogbnVtYmVyO1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBvcHRpb25zPzogYW55O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFjZXRJbnB1dCB7XG4gIHN0YXRpYyBpbmRleCA9IDA7XG5cbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcblxuICBwcm90ZWN0ZWQgb3V0cHV0OiBhbnk7XG5cbiAgcHJvdGVjdGVkIGRhdGE6IEZhY2V0SW5wdXREYXRhW107XG5cbiAgcHJvdGVjdGVkIGlzRW1wdHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9zZXRJZCgpO1xuXG4gICAgRmFjZXRJbnB1dC5pbmRleCArPSAxO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHNldEFjdGl2ZShmYWNldFZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm0oKTogYW55O1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7IHRoaXMub3V0cHV0ID0gdGhpcy50cmFuc2Zvcm0oKTsgfVxuXG4gIHB1YmxpYyBnZXRJZCA9ICgpID0+IHRoaXMuaWQ7XG5cbiAgcHVibGljIGdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG5cbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xuXG4gIHB1YmxpYyBnZXRGYWNldElkID0gKCkgPT4gdGhpcy5jb25maWcuZmFjZXRJZDtcblxuICBwdWJsaWMgZ2V0SW5wdXRJbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLmlucHV0SW5kZXg7XG5cbiAgcHVibGljIGdldFNlY3Rpb25JbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLnNlY3Rpb25JbmRleDtcblxuICBwdWJsaWMgZ2V0Q29udGV4dCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5jb250ZXh0IHx8ICdleHRlcm5hbCc7XG5cbiAgcHVibGljIGdldFRhcmdldCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50YXJnZXQgfHwgbnVsbDtcblxuICBwdWJsaWMgZ2V0U2VhcmNoSW4gPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuc2VhcmNoSW4gfHwgbnVsbDtcblxuICBwdWJsaWMgZ2V0VHlwZSA9ICgpID0+IHRoaXMuY29uZmlnLnR5cGU7XG5cbiAgcHVibGljIGdldE91dHB1dCA9ICgpID0+IHRoaXMub3V0cHV0O1xuXG4gIHB1YmxpYyBjbGVhcigpIHsgcmV0dXJuIG51bGw7IH1cblxuICBwdWJsaWMgc2V0SXNFbXB0eSA9IChlbXB0eTogYm9vbGVhbikgPT4ge1xuICAgIHRoaXMuaXNFbXB0eSA9IGVtcHR5O1xuICB9XG5cbiAgcHVibGljIHNldERhdGEgPSAobmV3RGF0YTogRmFjZXRJbnB1dERhdGFbXSkgPT4geyB0aGlzLmRhdGEgPSBuZXdEYXRhOyB9XG5cbiAgcHJpdmF0ZSBfc2V0SWQoKSB7XG4gICAgdGhpcy5pZCA9IGBmYWNldC1pbnB1dC0ke3RoaXMuZ2V0VHlwZSgpfS0ke0ZhY2V0SW5wdXQuaW5kZXh9YDtcbiAgfVxufVxuIl19