import { DataSource } from '@n7-frontend/core';
const ACTIVE_CLASS = 'is-active';
export class FacetLinkMultipleDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = [];
        this.getValue = () => this.value;
    }
    transform(data) {
        return data;
    }
    setValue(value, update = false) {
        this.value = value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay1tdWx0aXBsZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUkvQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUFFakMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7O1FBR0UsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQWtDWCxhQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUs5QixDQUFDO0lBckNXLFNBQVMsQ0FBQyxJQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxLQUFLO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDN0IsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQWUsRUFBRSxFQUFFLENBQUMsaUNBQy9DLElBQUksS0FDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDOUQsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0saUNBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsWUFBWSxJQUNuQixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLFNBQVM7UUFDbkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFJRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0TGluaywgSW5wdXRMaW5rRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbmNvbnN0IEFDVElWRV9DTEFTUyA9ICdpcy1hY3RpdmUnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRMaW5rTXVsdGlwbGVEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlID0gW107XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dExpbmtEYXRhKTogSW5wdXRMaW5rRGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmlucHV0O1xuICAgICAgY29uc3QgdXBkYXRlZExpbmtzID0gbGlua3MubWFwKChsaW5rOiBJbnB1dExpbmspID0+ICh7XG4gICAgICAgIC4uLmxpbmssXG4gICAgICAgIGNsYXNzZXM6IHRoaXMudmFsdWUuaW5jbHVkZXMobGluay5wYXlsb2FkKSA/IEFDVElWRV9DTEFTUyA6ICcnXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICAgIGxpbmtzOiB1cGRhdGVkTGlua3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKGxpbmtWYWx1ZSkge1xuICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMudmFsdWUuaW5jbHVkZXMobGlua1ZhbHVlKTtcbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgdGhpcy52YWx1ZS5wdXNoKGxpbmtWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZihsaW5rVmFsdWUpLCAxKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGVcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19