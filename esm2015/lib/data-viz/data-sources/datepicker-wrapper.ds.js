/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFDYyxnQkFBVyxHQUFRLElBQUksQ0FBQztJQW9EdEMsQ0FBQzs7Ozs7O0lBbERhLFNBQVMsQ0FBQyxJQUFJO1FBQ3BCLElBQUcsQ0FBQyxJQUFJLEVBQUM7WUFBQyxPQUFNO1NBQUM7UUFBQSxDQUFDO1FBRWxCLE9BQU87O1lBRUosTUFBTSxFQUFFO2dCQUNILEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2xCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxvQkFBb0I7Z0JBQzlDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3hCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDL0I7O1lBRUQsVUFBVSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxJQUFJO2dCQUNaLElBQUksRUFBRTtvQkFDRixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO29CQUN0QyxXQUFXOzs7O29CQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQTtpQkFDN0Q7YUFDSjtTQUNKLENBQUE7SUFDTCxDQUFDOzs7O0lBRUQsY0FBYztRQUNWLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGNBQWM7UUFDVixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQzthQUFJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQztJQUNMLENBQUM7Q0FFSjs7Ozs7O0lBcERHLDRDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkRhdGVwaWNrZXJXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgICBwcm90ZWN0ZWQgX2RhdGVwaWNrZXI6IGFueSA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpeyBcbiAgICAgICAgaWYoIWRhdGEpe3JldHVybn07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy9zZXQgc2VsZWN0IG9wdGlvblxuICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgICBpZDogZGF0YS5zZWxlY3QuaWQsXG4gICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IGRhdGEuc2VsZWN0Lmljb24gfHwgXCJuNy1pY29uLWFuZ2xlLWRvd25cIixcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5zZWxlY3QubGFiZWwsXG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuc2VsZWN0Lml0ZW1zLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IGRhdGEuc2VsZWN0LmNsYXNzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy9zZXQgcGlja2VyXG4gICAgICAgICAgICBkYXRlcGlja2VyOiB7XG4gICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuZGF0ZXBpY2tlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgbGliT3B0aW9uczogZGF0YS5kYXRlcGlja2VyLmxpYk9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGdldEluc3RhbmNlOiAoZGF0ZXBpY2tlcikgPT4gdGhpcy5fZGF0ZXBpY2tlciA9IGRhdGVwaWNrZXIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9wZW5EYXRlcGlja2VyKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2RhdGVwaWNrZXIub3BlbigpKTtcbiAgICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xvc2VEYXRlcGlja2VyKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2RhdGVwaWNrZXIuY2xvc2UoKSk7XG4gICAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0TGFiZWwocGF5bG9hZCkge1xuICAgICAgICB0aGlzLm91dHB1dC5zZWxlY3QubGFiZWwgPSBwYXlsb2FkO1xuICAgICAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcERvd24oKXtcbiAgICAgICAgaWYodGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==