import { DataSource } from '@n7-frontend/core';
export class DvDatepickerWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this._datepicker = null;
    }
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
                    getInstance: (datepicker) => { this._datepicker = datepicker; },
                },
            },
        };
    }
    openDatepicker() {
        setTimeout(() => this._datepicker.open());
        this.output.select.hidden = true;
        this.output.datepicker.hidden = false;
    }
    closeDatepicker() {
        setTimeout(() => this._datepicker.close());
        this.output.select.hidden = true;
        this.output.datepicker.hidden = true;
    }
    setLabel(payload) {
        this.output.select.label = payload;
        this.output.datepicker.hidden = true;
    }
    toggleDropDown() {
        if (this.output.select.hidden === false) {
            this.output.select.hidden = true;
        }
        else {
            this.output.select.hidden = false;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2RhdGVwaWNrZXItd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFBckQ7O1FBQ1ksZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFtRHBDLENBQUM7SUFqRFcsU0FBUyxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFM0IsT0FBTztZQUNMLG9CQUFvQjtZQUNwQixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQjtnQkFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzthQUM3QjtZQUNELGFBQWE7WUFDYixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFO29CQUNKLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7b0JBQ3RDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUNoRTthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjO1FBQ1osVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQU87UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkRhdGVwaWNrZXJXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIF9kYXRlcGlja2VyOiBhbnkgPSBudWxsO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IGFueSB7XG4gICAgaWYgKCFkYXRhKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gc2V0IHNlbGVjdCBvcHRpb25cbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogZGF0YS5zZWxlY3QuaWQsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgaWNvbjogZGF0YS5zZWxlY3QuaWNvbiB8fCAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgbGFiZWw6IGRhdGEuc2VsZWN0LmxhYmVsLFxuICAgICAgICBpdGVtczogZGF0YS5zZWxlY3QuaXRlbXMsXG4gICAgICAgIGNsYXNzZXM6IGRhdGEuc2VsZWN0LmNsYXNzZXMsXG4gICAgICB9LFxuICAgICAgLy8gc2V0IHBpY2tlclxuICAgICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogZGF0YS5kYXRlcGlja2VyLmlkLFxuICAgICAgICAgIGxpYk9wdGlvbnM6IGRhdGEuZGF0ZXBpY2tlci5saWJPcHRpb25zLFxuICAgICAgICAgIGdldEluc3RhbmNlOiAoZGF0ZXBpY2tlcikgPT4geyB0aGlzLl9kYXRlcGlja2VyID0gZGF0ZXBpY2tlcjsgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIG9wZW5EYXRlcGlja2VyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGF0ZXBpY2tlci5vcGVuKCkpO1xuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBjbG9zZURhdGVwaWNrZXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLmNsb3NlKCkpO1xuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHNldExhYmVsKHBheWxvYWQpIHtcbiAgICB0aGlzLm91dHB1dC5zZWxlY3QubGFiZWwgPSBwYXlsb2FkO1xuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZURyb3BEb3duKCkge1xuICAgIGlmICh0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==