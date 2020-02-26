/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/datepicker-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class DvDatepickerWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this._datepicker = null;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data) {
            return;
        }
        ;
        return {
            //set select option
            select: {
                id: data.select.id,
                hidden: true,
                icon: data.select.icon || "n7-icon-angle-down",
                label: data.select.label,
                items: data.select.items,
                classes: data.select.classes,
            },
            //set picker
            datepicker: {
                hidden: true,
                data: {
                    id: data.datepicker.id,
                    libOptions: data.datepicker.libOptions,
                    getInstance: (/**
                     * @param {?} datepicker
                     * @return {?}
                     */
                    (datepicker) => this._datepicker = datepicker),
                }
            }
        };
    }
    /**
     * @return {?}
     */
    openDatepicker() {
        setTimeout((/**
         * @return {?}
         */
        () => this._datepicker.open()));
        this.output.select.hidden = true;
        this.output.datepicker.hidden = false;
    }
    /**
     * @return {?}
     */
    closeDatepicker() {
        setTimeout((/**
         * @return {?}
         */
        () => this._datepicker.close()));
        this.output.select.hidden = true;
        this.output.datepicker.hidden = true;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    setLabel(payload) {
        this.output.select.label = payload;
        this.output.datepicker.hidden = true;
    }
    /**
     * @return {?}
     */
    toggleDropDown() {
        if (this.output.select.hidden === false) {
            this.output.select.hidden = true;
        }
        else {
            this.output.select.hidden = false;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DvDatepickerWrapperDS.prototype._datepicker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFBckQ7O1FBQ2MsZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFvRHRDLENBQUM7Ozs7OztJQWxEYSxTQUFTLENBQUMsSUFBSTtRQUNwQixJQUFHLENBQUMsSUFBSSxFQUFDO1lBQUMsT0FBTTtTQUFDO1FBQUEsQ0FBQztRQUVsQixPQUFPOztZQUVKLE1BQU0sRUFBRTtnQkFDSCxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CO2dCQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQy9COztZQUVELFVBQVUsRUFBRTtnQkFDUixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtvQkFDdEMsV0FBVzs7OztvQkFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUE7aUJBQzdEO2FBQ0o7U0FDSixDQUFBO0lBQ0wsQ0FBQzs7OztJQUVELGNBQWM7UUFDVixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1YsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEM7YUFBSTtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckM7SUFDTCxDQUFDO0NBRUo7Ozs7OztJQXBERyw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZEYXRlcGlja2VyV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIF9kYXRlcGlja2VyOiBhbnkgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXsgXG4gICAgICAgIGlmKCFkYXRhKXtyZXR1cm59O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vc2V0IHNlbGVjdCBvcHRpb25cbiAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEuc2VsZWN0LmlkLFxuICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpY29uOiBkYXRhLnNlbGVjdC5pY29uIHx8IFwibjctaWNvbi1hbmdsZS1kb3duXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuc2VsZWN0LmxhYmVsLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBkYXRhLnNlbGVjdC5pdGVtcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBkYXRhLnNlbGVjdC5jbGFzc2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vc2V0IHBpY2tlclxuICAgICAgICAgICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmRhdGVwaWNrZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIGxpYk9wdGlvbnM6IGRhdGEuZGF0ZXBpY2tlci5saWJPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBnZXRJbnN0YW5jZTogKGRhdGVwaWNrZXIpID0+IHRoaXMuX2RhdGVwaWNrZXIgPSBkYXRlcGlja2VyLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvcGVuRGF0ZXBpY2tlcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLm9wZW4oKSk7XG4gICAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNsb3NlRGF0ZXBpY2tlcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLmNsb3NlKCkpO1xuICAgICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHNldExhYmVsKHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmxhYmVsID0gcGF5bG9hZDtcbiAgICAgICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3BEb3duKCl7XG4gICAgICAgIGlmKHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=