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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2dhbGxlcnkuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVS9DLE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtJQUcvQixTQUFTLENBQUMsSUFBcUI7UUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2YsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUM1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNMLEVBQUU7Z0JBQ0YsS0FBSztnQkFDTCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLEVBQUU7YUFDWixDQUFDLENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVcsQ0FBQyxNQUF1QjtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBHYWxsZXJ5RGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5JztcblxudHlwZSBHYWxsZXJ5UmVzcG9uc2UgPSB7XG4gIGlkOiBzdHJpbmcgfCBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xufVtdO1xuXG5leHBvcnQgY2xhc3MgTXJHYWxsZXJ5RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEdhbGxlcnlSZXNwb25zZSk6IEdhbGxlcnlEYXRhIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZDogbnVsbCxcbiAgICAgIGl0ZW1zOiBkYXRhLm1hcCgoe1xuICAgICAgICBpZCwgdGl0bGUsIHRodW1ibmFpbCwgaW1hZ2VcbiAgICAgIH0pID0+ICh7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGh1bWJTcmM6IHRodW1ibmFpbCxcbiAgICAgICAgZnVsbFNyYzogaW1hZ2UsXG4gICAgICAgIHBheWxvYWQ6IGlkXG4gICAgICB9KSlcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldFNlbGVjdGVkKGl0ZW1JZDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLm91dHB1dC5pdGVtcy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpdGVtSWQpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkKCkge1xuICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gbnVsbDtcbiAgfVxufVxuIl19