/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
const ICON_OPEN = 'n7-icon-angle-down';
/** @type {?} */
const ICON_CLOSE = 'n7-icon-angle-right';
export class FacetHeaderDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getValue = (/**
         * @return {?}
         */
        () => this.value);
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return Object.assign({}, data, { iconRight: data.iconRight || ICON_OPEN });
    }
    /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            this.update(Object.assign({}, this.input, { additionalText: value }));
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        let { iconRight } = this.output;
        iconRight = iconRight === ICON_OPEN ? ICON_CLOSE : ICON_OPEN;
        this.update(Object.assign({}, this.input, { iconRight }));
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this.output.iconRight === ICON_OPEN;
    }
    /**
     * @return {?}
     */
    clear() {
        this.value = null;
    }
}
if (false) {
    /** @type {?} */
    FacetHeaderDS.prototype.id;
    /** @type {?} */
    FacetHeaderDS.prototype.value;
    /** @type {?} */
    FacetHeaderDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhlYWRlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztNQUt6QyxTQUFTLEdBQUcsb0JBQW9COztNQUNoQyxVQUFVLEdBQUcscUJBQXFCO0FBRXhDLE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTtJQUE3Qzs7UUF1QkUsYUFBUTs7O1FBQUcsR0FBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7SUFrQjNDLENBQUM7Ozs7OztJQXBDVyxTQUFTLENBQUMsSUFBcUI7UUFDdkMseUJBQ0ssSUFBSSxJQUNQLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsSUFDdEM7SUFDSixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxNQUFNLEdBQUcsS0FBSztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLG1CQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsY0FBYyxFQUFFLEtBQUssSUFDckIsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUlELE1BQU07WUFDQSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQy9CLFNBQVMsR0FBRyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxtQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLFNBQVMsSUFDVCxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Q0FDRjs7O0lBeENDLDJCQUFXOztJQUVYLDhCQUFtQjs7SUFvQm5CLGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBGYWNldEhlYWRlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nIHwgbnVsbDtcbmNvbnN0IElDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuY29uc3QgSUNPTl9DTE9TRSA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBGYWNldEhlYWRlckRhdGEpOiBGYWNldEhlYWRlckRhdGEge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgaWNvblJpZ2h0OiBkYXRhLmljb25SaWdodCB8fCBJQ09OX09QRU5cbiAgICB9O1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBsZXQgeyBpY29uUmlnaHQgfSA9IHRoaXMub3V0cHV0O1xuICAgIGljb25SaWdodCA9IGljb25SaWdodCA9PT0gSUNPTl9PUEVOID8gSUNPTl9DTE9TRSA6IElDT05fT1BFTjtcbiAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgaWNvblJpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0Lmljb25SaWdodCA9PT0gSUNPTl9PUEVOO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==