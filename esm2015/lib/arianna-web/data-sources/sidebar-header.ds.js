import { DataSource } from '@n7-frontend/core';
export class AwSidebarHeaderDS extends DataSource {
    transform(data) {
        return {
            iconLeft: 'n7-icon-tree-icon',
            text: data.text || '',
            iconRight: data.isExpanded ? 'n7-icon-angle-left' : 'n7-icon-angle-right',
            classes: data.isExpanded ? 'is-expanded' : 'is-collapsed',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUNyQyxTQUFTLENBQUMsSUFBSTtRQUN0QixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1lBQ3pFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDekQsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7U0FDL0M7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7U0FDOUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2lkZWJhckhlYWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpY29uTGVmdDogJ243LWljb24tdHJlZS1pY29uJyxcclxuICAgICAgdGV4dDogZGF0YS50ZXh0IHx8ICcnLFxyXG4gICAgICBpY29uUmlnaHQ6IGRhdGEuaXNFeHBhbmRlZCA/ICduNy1pY29uLWFuZ2xlLWxlZnQnIDogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICBjbGFzc2VzOiBkYXRhLmlzRXhwYW5kZWQgPyAnaXMtZXhwYW5kZWQnIDogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgIHBheWxvYWQ6ICdoZWFkZXInLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyRGF0YSA9IHRoaXMub3V0cHV0O1xyXG4gICAgaWYgKHNpZGViYXJEYXRhLmNsYXNzZXMgPT09ICdpcy1leHBhbmRlZCcpIHtcclxuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1jb2xsYXBzZWQnO1xyXG4gICAgICBzaWRlYmFyRGF0YS5pY29uUmlnaHQgPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWV4cGFuZGVkJztcclxuICAgICAgc2lkZWJhckRhdGEuaWNvblJpZ2h0ID0gJ243LWljb24tYW5nbGUtbGVmdCc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==