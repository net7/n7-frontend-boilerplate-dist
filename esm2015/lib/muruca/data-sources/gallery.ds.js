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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2dhbGxlcnkuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVS9DLE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtJQUcvQixTQUFTLENBQUMsSUFBcUI7UUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2YsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUM1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNMLEVBQUU7Z0JBQ0YsS0FBSztnQkFDTCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLEVBQUU7YUFDWixDQUFDLENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVcsQ0FBQyxNQUF1QjtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlEYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnknO1xyXG5cclxudHlwZSBHYWxsZXJ5UmVzcG9uc2UgPSB7XHJcbiAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbn1bXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNckdhbGxlcnlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogR2FsbGVyeVJlc3BvbnNlKTogR2FsbGVyeURhdGEge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gICAgICBpdGVtczogZGF0YS5tYXAoKHtcclxuICAgICAgICBpZCwgdGl0bGUsIHRodW1ibmFpbCwgaW1hZ2VcclxuICAgICAgfSkgPT4gKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICB0aHVtYlNyYzogdGh1bWJuYWlsLFxyXG4gICAgICAgIGZ1bGxTcmM6IGltYWdlLFxyXG4gICAgICAgIHBheWxvYWQ6IGlkXHJcbiAgICAgIH0pKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZChpdGVtSWQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLm91dHB1dC5pdGVtcy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpdGVtSWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=