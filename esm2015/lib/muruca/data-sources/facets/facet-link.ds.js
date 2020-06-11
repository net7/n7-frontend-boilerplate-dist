import { DataSource } from '@n7-frontend/core';
const ACTIVE_CLASS = 'is-active';
export class FacetLinkDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = null;
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            const { links } = this.input;
            const updatedLinks = links.map((link) => (Object.assign(Object.assign({}, link), { classes: this.value === link.payload ? ACTIVE_CLASS : '' })));
            this.update(Object.assign(Object.assign({}, this.input), { links: updatedLinks }));
        }
    }
    toggleValue(linkValue) {
        // update
        this.setValue(this.value !== linkValue ? linkValue : null, true);
    }
    clear() {
        this.value = null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUkvQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUFFakMsTUFBTSxPQUFPLFdBQVksU0FBUSxVQUFVO0lBQTNDOztRQUdFLFVBQUssR0FBRyxJQUFJLENBQUM7UUEyQmIsYUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFLOUIsQ0FBQztJQTlCVyxTQUFTLENBQUMsSUFBbUI7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsS0FBSztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdCLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFlLEVBQUUsRUFBRSxDQUFDLGlDQUMvQyxJQUFJLEtBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQ3hELENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLGlDQUNOLElBQUksQ0FBQyxLQUFLLEtBQ2IsS0FBSyxFQUFFLFlBQVksSUFDbkIsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFTO1FBQ25CLFNBQVM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBSUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dExpbmssIElucHV0TGlua0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0TGlua0RTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWUgPSBudWxsO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRMaW5rRGF0YSk6IElucHV0TGlua0RhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluazogSW5wdXRMaW5rKSA9PiAoe1xuICAgICAgICAuLi5saW5rLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlID09PSBsaW5rLnBheWxvYWQgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShsaW5rVmFsdWUpIHtcbiAgICAvLyB1cGRhdGVcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUgIT09IGxpbmtWYWx1ZSA/IGxpbmtWYWx1ZSA6IG51bGwsIHRydWUpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICB9XG59XG4iXX0=