import { DataSource } from '@n7-frontend/core';
export class MrGalleryDS extends DataSource {
    transform(data) {
        if (!data) {
            return null;
        }
        return {
            selected: null,
            items: data.map(({ id, title, thumbnail, image }) => ({
                id,
                title,
                thumbSrc: thumbnail,
                fullSrc: image,
                payload: id
            }))
        };
    }
    setSelected(itemId) {
        this.output.selected = this.output.items.find(({ id }) => id === itemId);
    }
    removeSelected() {
        this.output.selected = null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9kYXRhLXNvdXJjZXMvZ2FsbGVyeS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVL0MsTUFBTSxPQUFPLFdBQVksU0FBUSxVQUFVO0lBRy9CLFNBQVMsQ0FBQyxJQUFxQjtRQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDZixFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQzVCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ0wsRUFBRTtnQkFDRixLQUFLO2dCQUNMLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsRUFBRTthQUNaLENBQUMsQ0FBQztTQUNKLENBQUM7SUFDSixDQUFDO0lBRU0sV0FBVyxDQUFDLE1BQXVCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEdhbGxlcnlEYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnknO1xuXG50eXBlIEdhbGxlcnlSZXNwb25zZSA9IHtcbiAgaWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG59W107XG5cbmV4cG9ydCBjbGFzcyBNckdhbGxlcnlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogR2FsbGVyeVJlc3BvbnNlKTogR2FsbGVyeURhdGEge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkOiBudWxsLFxuICAgICAgaXRlbXM6IGRhdGEubWFwKCh7XG4gICAgICAgIGlkLCB0aXRsZSwgdGh1bWJuYWlsLCBpbWFnZVxuICAgICAgfSkgPT4gKHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0aHVtYlNyYzogdGh1bWJuYWlsLFxuICAgICAgICBmdWxsU3JjOiBpbWFnZSxcbiAgICAgICAgcGF5bG9hZDogaWRcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWQoaXRlbUlkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLm91dHB1dC5zZWxlY3RlZCA9IHRoaXMub3V0cHV0Lml0ZW1zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGl0ZW1JZCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSBudWxsO1xuICB9XG59XG4iXX0=