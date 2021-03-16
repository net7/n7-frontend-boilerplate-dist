import { DataSource, _t } from '@n7-frontend/core';
const ACTIVE_CLASS = 'is-active';
export class FacetLinkMultipleDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = [];
        this.isUpdate = false;
        this.getValue = () => this.value;
    }
    transform(data) {
        const { links } = data;
        // empty state check
        if (this.isUpdate && !links.length) {
            return {
                links: [{
                        text: _t('global#facet_empty_text'),
                        classes: 'empty-text-link',
                        payload: null,
                    }]
            };
        }
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
        this.isUpdate = update;
        if (update) {
            const { links } = this.input;
            const updatedLinks = links.map((link) => (Object.assign(Object.assign({}, link), { classes: this.value.includes(link.payload) ? ACTIVE_CLASS : '' })));
            this.update(Object.assign(Object.assign({}, this.input), { links: updatedLinks }));
        }
    }
    toggleValue(linkValue) {
        const exists = this.value.includes(linkValue);
        if (!exists) {
            this.value.push(linkValue);
        }
        else if (exists) {
            this.value.splice(this.value.indexOf(linkValue), 1);
        }
        // update
        this.setValue(this.value, true);
    }
    clear() {
        this.value = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay1tdWx0aXBsZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbkQsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO0FBRWpDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVO0lBQW5EOztRQUdFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFSCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBOEN6QixhQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUs5QixDQUFDO0lBakRXLFNBQVMsQ0FBQyxJQUFtQjtRQUNyQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG9CQUFvQjtRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2xDLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLENBQUM7d0JBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDbkMsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsT0FBTyxFQUFFLElBQUk7cUJBQ2QsQ0FBQzthQUNILENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFFdkIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3QixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxpQ0FDL0MsSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUM5RCxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxpQ0FDTixJQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsU0FBUztRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0TGluaywgSW5wdXRMaW5rRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbmNvbnN0IEFDVElWRV9DTEFTUyA9ICdpcy1hY3RpdmUnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRMaW5rTXVsdGlwbGVEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlID0gW107XG5cbiAgcHJpdmF0ZSBpc1VwZGF0ZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRMaW5rRGF0YSk6IElucHV0TGlua0RhdGEge1xuICAgIGNvbnN0IHsgbGlua3MgfSA9IGRhdGE7XG4gICAgLy8gZW1wdHkgc3RhdGUgY2hlY2tcbiAgICBpZiAodGhpcy5pc1VwZGF0ZSAmJiAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5rczogW3tcbiAgICAgICAgICB0ZXh0OiBfdCgnZ2xvYmFsI2ZhY2V0X2VtcHR5X3RleHQnKSxcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcbiAgICAgICAgICBwYXlsb2FkOiBudWxsLFxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5pc1VwZGF0ZSA9IHVwZGF0ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkTGlua3MgPSBsaW5rcy5tYXAoKGxpbms6IElucHV0TGluaykgPT4gKHtcbiAgICAgICAgLi4ubGluayxcbiAgICAgICAgY2xhc3NlczogdGhpcy52YWx1ZS5pbmNsdWRlcyhsaW5rLnBheWxvYWQpID8gQUNUSVZFX0NMQVNTIDogJydcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgbGlua3M6IHVwZGF0ZWRMaW5rc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmFsdWUobGlua1ZhbHVlKSB7XG4gICAgY29uc3QgZXhpc3RzID0gdGhpcy52YWx1ZS5pbmNsdWRlcyhsaW5rVmFsdWUpO1xuICAgIGlmICghZXhpc3RzKSB7XG4gICAgICB0aGlzLnZhbHVlLnB1c2gobGlua1ZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGV4aXN0cykge1xuICAgICAgdGhpcy52YWx1ZS5zcGxpY2UodGhpcy52YWx1ZS5pbmRleE9mKGxpbmtWYWx1ZSksIDEpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZVxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=