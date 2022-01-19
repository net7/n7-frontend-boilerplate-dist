import { DataSource } from '@n7-frontend/core';
export class AwSchedaBreadcrumbsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (data) => data;
    }
    toggleSidebar() {
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
        }
        else {
            sidebarData.classes = 'is-expanded';
        }
        this.update(sidebarData);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxVQUFVO0lBQXJEOztRQUNZLGNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBV3ZDLENBQUM7SUFUQyxhQUFhO1FBQ1gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUJyZWFkY3J1bWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IGRhdGE7XHJcblxyXG4gIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyRGF0YSA9IHRoaXMub3V0cHV0O1xyXG4gICAgaWYgKHNpZGViYXJEYXRhLmNsYXNzZXMgPT09ICdpcy1leHBhbmRlZCcpIHtcclxuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1jb2xsYXBzZWQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1leHBhbmRlZCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZShzaWRlYmFyRGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==