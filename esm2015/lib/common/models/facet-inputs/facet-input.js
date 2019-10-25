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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDhCQU1DOzs7SUFMQyxnQ0FBdUI7O0lBQ3ZCLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsaUNBQWlCOztJQUNqQixrQ0FBYzs7Ozs7QUFHaEIsTUFBTSxPQUFnQixVQUFVOzs7O0lBUTlCLFlBQVksTUFBTTtRQVVYLFdBQU07OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDO1FBQzlDLFVBQUs7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUM7UUFDdEIsWUFBTzs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztRQUMxQixjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQzlCLGVBQVU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO1FBQ3ZDLGtCQUFhOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQztRQUM3QyxvQkFBZTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUM7UUFDakQsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBQztRQUNsRSxjQUFTOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDO1FBQzFELGdCQUFXOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1FBQzlELFlBQU87OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDO1FBQ2pDLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFFOUIsWUFBTzs7OztRQUFHLENBQUMsT0FBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUM7UUF0Qm5FLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQW1CTyxNQUFNO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxlQUFlLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUFBLENBQUM7O0FBakNLLGdCQUFLLEdBQVcsQ0FBQyxDQUFDOzs7SUFBekIsaUJBQXlCOzs7OztJQUV6Qix3QkFBbUI7Ozs7O0lBQ25CLDRCQUFzQjs7Ozs7SUFDdEIsNEJBQXNCOzs7OztJQUN0QiwwQkFBa0M7O0lBWWxDLDRCQUFxRDs7SUFDckQsMkJBQTZCOztJQUM3Qiw2QkFBaUM7O0lBQ2pDLCtCQUFxQzs7SUFDckMsZ0NBQThDOztJQUM5QyxtQ0FBb0Q7O0lBQ3BELHFDQUF3RDs7SUFDeEQsZ0NBQXlFOztJQUN6RSwrQkFBaUU7O0lBQ2pFLGlDQUFxRTs7SUFDckUsNkJBQXdDOztJQUN4QywrQkFBcUM7O0lBRXJDLDZCQUFxRTs7Ozs7OztJQWhCckUsMkRBQWlEOzs7Ozs7SUFDakQsaURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElGYWNldElucHV0RGF0YSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvdW50ZXI6IG51bWJlcjtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgb3B0aW9ucz86IGFueTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhY2V0SW5wdXQge1xuICBzdGF0aWMgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XG4gIHByb3RlY3RlZCBvdXRwdXQ6IGFueTtcbiAgcHJvdGVjdGVkIGRhdGE6IElGYWNldElucHV0RGF0YVtdO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZyl7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fc2V0SWQoKTtcbiAgICBcbiAgICBGYWNldElucHV0LmluZGV4Kys7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0QWN0aXZlKGZhY2V0VmFsdWU6IGFueSk6IHZvaWQ7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm0oKTogYW55O1xuICBcbiAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHRoaXMub3V0cHV0ID0gdGhpcy50cmFuc2Zvcm0oKTtcbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5pZDtcbiAgcHVibGljIGdldERhdGEgPSAoKSA9PiB0aGlzLmRhdGE7XG4gIHB1YmxpYyBnZXRDb25maWcgPSAoKSA9PiB0aGlzLmNvbmZpZztcbiAgcHVibGljIGdldEZhY2V0SWQgPSAoKSA9PiB0aGlzLmNvbmZpZy5mYWNldElkO1xuICBwdWJsaWMgZ2V0SW5wdXRJbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLmlucHV0SW5kZXg7XG4gIHB1YmxpYyBnZXRTZWN0aW9uSW5kZXggPSAoKSA9PiB0aGlzLmNvbmZpZy5zZWN0aW9uSW5kZXg7XG4gIHB1YmxpYyBnZXRDb250ZXh0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLmNvbnRleHQgfHwgJ2V4dGVybmFsJztcbiAgcHVibGljIGdldFRhcmdldCA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50YXJnZXQgfHwgbnVsbDtcbiAgcHVibGljIGdldFNlYXJjaEluID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnNlYXJjaEluIHx8IG51bGw7XG4gIHB1YmxpYyBnZXRUeXBlID0gKCkgPT4gdGhpcy5jb25maWcudHlwZTtcbiAgcHVibGljIGdldE91dHB1dCA9ICgpID0+IHRoaXMub3V0cHV0O1xuICBcbiAgcHVibGljIHNldERhdGEgPSAobmV3RGF0YTogSUZhY2V0SW5wdXREYXRhW10pID0+IHRoaXMuZGF0YSA9IG5ld0RhdGE7XG4gIHByaXZhdGUgX3NldElkKCkge1xuICAgIHRoaXMuaWQgPSBgZmFjZXQtaW5wdXQtJHt0aGlzLmdldFR5cGUoKX0tJHtGYWNldElucHV0LmluZGV4fWA7XG4gIH07XG59Il19