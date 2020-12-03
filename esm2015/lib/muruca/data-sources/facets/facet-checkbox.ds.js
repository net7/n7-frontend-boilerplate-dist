import { DataSource } from '@n7-frontend/core';
export class FacetCheckboxDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = [];
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = Array.isArray(value) ? value : [value];
        if (update) {
            const { checkboxes } = this.input;
            const updatedCheckboxes = checkboxes.map((checkbox) => (Object.assign(Object.assign({}, checkbox), { checked: this.value.indexOf(checkbox.payload) !== -1 })));
            this.update(Object.assign(Object.assign({}, this.input), { checkboxes: updatedCheckboxes }));
        }
    }
    toggleValue({ inputPayload, value: isChecked }) {
        const exists = this.value.indexOf(inputPayload) !== -1;
        if (isChecked && !exists) {
            this.value.push(inputPayload);
        }
        else if (!isChecked && exists) {
            this.value.splice(this.value.indexOf(inputPayload), 1);
        }
    }
    clear() {
        this.value = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBR0UsVUFBSyxHQUFnQixFQUFFLENBQUM7UUErQnhCLGFBQVEsR0FBRyxHQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUszQyxDQUFDO0lBbENXLFNBQVMsQ0FBQyxJQUF1QjtRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxNQUFNLEdBQUcsS0FBSztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRSxDQUFDLGlDQUNqRSxRQUFRLEtBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFDcEQsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0saUNBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixVQUFVLEVBQUUsaUJBQWlCLElBQzdCLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQjthQUFNLElBQUksQ0FBQyxTQUFTLElBQUksTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dENoZWNrYm94LCBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcclxuXHJcbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrYm94RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dENoZWNrYm94RGF0YSk6IElucHV0Q2hlY2tib3hEYXRhIHtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xyXG5cclxuICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgY29uc3QgeyBjaGVja2JveGVzIH0gPSB0aGlzLmlucHV0O1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ2hlY2tib3hlcyA9IGNoZWNrYm94ZXMubWFwKChjaGVja2JveDogSW5wdXRDaGVja2JveCkgPT4gKHtcclxuICAgICAgICAuLi5jaGVja2JveCxcclxuICAgICAgICBjaGVja2VkOiB0aGlzLnZhbHVlLmluZGV4T2YoY2hlY2tib3gucGF5bG9hZCkgIT09IC0xXHJcbiAgICAgIH0pKTtcclxuICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXHJcbiAgICAgICAgY2hlY2tib3hlczogdXBkYXRlZENoZWNrYm94ZXNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWYWx1ZSh7IGlucHV0UGF5bG9hZCwgdmFsdWU6IGlzQ2hlY2tlZCB9KSB7XHJcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnZhbHVlLmluZGV4T2YoaW5wdXRQYXlsb2FkKSAhPT0gLTE7XHJcbiAgICBpZiAoaXNDaGVja2VkICYmICFleGlzdHMpIHtcclxuICAgICAgdGhpcy52YWx1ZS5wdXNoKGlucHV0UGF5bG9hZCk7XHJcbiAgICB9IGVsc2UgaWYgKCFpc0NoZWNrZWQgJiYgZXhpc3RzKSB7XHJcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=