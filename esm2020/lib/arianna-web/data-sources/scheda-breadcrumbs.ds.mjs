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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NjaGVkYS1icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFBckQ7O1FBQ1ksY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFXdkMsQ0FBQztJQVRDLGFBQWE7UUFDWCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxhQUFhLEVBQUU7WUFDekMsV0FBVyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7U0FDdEM7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhQnJlYWRjcnVtYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4gZGF0YTtcclxuXHJcbiAgdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XHJcbiAgICBpZiAoc2lkZWJhckRhdGEuY2xhc3NlcyA9PT0gJ2lzLWV4cGFuZGVkJykge1xyXG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWNvbGxhcHNlZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWV4cGFuZGVkJztcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKHNpZGViYXJEYXRhKTtcclxuICB9XHJcbn1cclxuIl19