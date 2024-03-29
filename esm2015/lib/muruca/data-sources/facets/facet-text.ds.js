import { DataSource, _t } from '@n7-frontend/core';
export class FacetTextDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getValue = () => this.value;
    }
    transform(data) {
        return Object.assign(Object.assign({}, data), { placeholder: _t(data.placeholder) });
    }
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            this.update(Object.assign(Object.assign({}, this.input), { value: value || value === 0 ? `${value}` : null }));
            // fix element update
            const el = document.getElementById(this.output.id);
            if (el) {
                el.value = value || value === 0 ? `${value}` : null;
            }
        }
    }
    clear() {
        this.value = null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsTUFBTSxPQUFPLFdBQVksU0FBUSxVQUFVO0lBQTNDOztRQTZCRSxhQUFRLEdBQUcsR0FBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFLM0MsQ0FBQztJQTdCVyxTQUFTLENBQUMsSUFBbUI7UUFDckMsdUNBQ0ssSUFBSSxLQUNQLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUNqQztJQUNKLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxNQUFNLEdBQUcsS0FBSztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLGlDQUNOLElBQUksQ0FBQyxLQUFLLEtBQ2IsS0FBSyxFQUFFLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQy9DLENBQUM7WUFFSCxxQkFBcUI7WUFDckIsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBcUIsQ0FBQztZQUN2RSxJQUFJLEVBQUUsRUFBRTtnQkFDTixFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDckQ7U0FDRjtJQUNILENBQUM7SUFJRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IElucHV0VGV4dERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XHJcblxyXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldFRleHREUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHZhbHVlOiBGQUNFVF9WQUxVRTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dFRleHREYXRhKTogSW5wdXRUZXh0RGF0YSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBwbGFjZWhvbGRlcjogX3QoZGF0YS5wbGFjZWhvbGRlcilcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogRkFDRVRfVkFMVUUsIHVwZGF0ZSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcclxuICAgICAgICB2YWx1ZTogdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBgJHt2YWx1ZX1gIDogbnVsbFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGZpeCBlbGVtZW50IHVwZGF0ZVxyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3V0cHV0LmlkKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAoZWwpIHtcclxuICAgICAgICBlbC52YWx1ZSA9IHZhbHVlIHx8IHZhbHVlID09PSAwID8gYCR7dmFsdWV9YCA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==