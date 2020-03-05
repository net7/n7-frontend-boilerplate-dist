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
            return null;
        }
        return {
            // set select option
            select: {
                id: data.select.id,
                hidden: true,
                icon: data.select.icon || 'n7-icon-angle-down',
                label: data.select.label,
                items: data.select.items,
                classes: data.select.classes,
            },
            // set picker
            datepicker: {
                hidden: true,
                data: {
                    id: data.datepicker.id,
                    libOptions: data.datepicker.libOptions,
                    getInstance: (/**
                     * @param {?} datepicker
                     * @return {?}
                     */
                    (datepicker) => { this._datepicker = datepicker; }),
                },
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFBckQ7O1FBQ1ksZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFtRHBDLENBQUM7Ozs7OztJQWpEVyxTQUFTLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUUzQixPQUFPOztZQUVMLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CO2dCQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQzdCOztZQUVELFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtvQkFDdEMsV0FBVzs7OztvQkFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ2hFO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGNBQWM7UUFDWixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDbkM7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQW5EQyw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIER2RGF0ZXBpY2tlcldyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCBfZGF0ZXBpY2tlcjogYW55ID0gbnVsbDtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogYW55IHtcclxuICAgIGlmICghZGF0YSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIHNldCBzZWxlY3Qgb3B0aW9uXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiBkYXRhLnNlbGVjdC5pZCxcclxuICAgICAgICBoaWRkZW46IHRydWUsXHJcbiAgICAgICAgaWNvbjogZGF0YS5zZWxlY3QuaWNvbiB8fCAnbjctaWNvbi1hbmdsZS1kb3duJyxcclxuICAgICAgICBsYWJlbDogZGF0YS5zZWxlY3QubGFiZWwsXHJcbiAgICAgICAgaXRlbXM6IGRhdGEuc2VsZWN0Lml0ZW1zLFxyXG4gICAgICAgIGNsYXNzZXM6IGRhdGEuc2VsZWN0LmNsYXNzZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHNldCBwaWNrZXJcclxuICAgICAgZGF0ZXBpY2tlcjoge1xyXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZDogZGF0YS5kYXRlcGlja2VyLmlkLFxyXG4gICAgICAgICAgbGliT3B0aW9uczogZGF0YS5kYXRlcGlja2VyLmxpYk9wdGlvbnMsXHJcbiAgICAgICAgICBnZXRJbnN0YW5jZTogKGRhdGVwaWNrZXIpID0+IHsgdGhpcy5fZGF0ZXBpY2tlciA9IGRhdGVwaWNrZXI7IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvcGVuRGF0ZXBpY2tlcigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGF0ZXBpY2tlci5vcGVuKCkpO1xyXG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VEYXRlcGlja2VyKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLmNsb3NlKCkpO1xyXG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRMYWJlbChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLm91dHB1dC5zZWxlY3QubGFiZWwgPSBwYXlsb2FkO1xyXG4gICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcERvd24oKSB7XHJcbiAgICBpZiAodGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==