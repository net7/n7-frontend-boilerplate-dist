import { DataSource } from '@n7-frontend/core';
export class AwSidebarHeaderDS extends DataSource {
    transform(data) {
        return {
            iconLeft: 'n7-icon-tree-icon',
            text: data.text || '',
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header',
        };
    }
    toggleSidebar() {
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
            sidebarData.iconRight = 'n7-icon-angle-right';
        }
        else {
            sidebarData.classes = 'is-expanded';
            sidebarData.iconRight = 'n7-icon-angle-left';
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUNyQyxTQUFTLENBQUMsSUFBSTtRQUN0QixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsT0FBTyxFQUFFLGFBQWE7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7U0FDL0M7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7U0FDOUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2lkZWJhckhlYWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcclxuICAgICAgdGV4dDogZGF0YS50ZXh0IHx8ICcnLFxyXG4gICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWxlZnQnLFxyXG4gICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxyXG4gICAgICBwYXlsb2FkOiAnaGVhZGVyJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcclxuICAgIGlmIChzaWRlYmFyRGF0YS5jbGFzc2VzID09PSAnaXMtZXhwYW5kZWQnKSB7XHJcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtY29sbGFwc2VkJztcclxuICAgICAgc2lkZWJhckRhdGEuaWNvblJpZ2h0ID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1leHBhbmRlZCc7XHJcbiAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLWFuZ2xlLWxlZnQnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=