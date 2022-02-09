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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvc2lkZWJhci1oZWFkZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQ3JDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxxQkFBcUI7WUFDekUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsY0FBYztZQUN6RCxPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxhQUFhLEVBQUU7WUFDekMsV0FBVyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFDckMsV0FBVyxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztTQUMvQzthQUFNO1lBQ0wsV0FBVyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7WUFDcEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztTQUM5QztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTaWRlYmFySGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGljb25MZWZ0OiAnbjctaWNvbi10cmVlLWljb24nLFxyXG4gICAgICB0ZXh0OiBkYXRhLnRleHQgfHwgJycsXHJcbiAgICAgIGljb25SaWdodDogZGF0YS5pc0V4cGFuZGVkID8gJ243LWljb24tYW5nbGUtbGVmdCcgOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgIGNsYXNzZXM6IGRhdGEuaXNFeHBhbmRlZCA/ICdpcy1leHBhbmRlZCcgOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgcGF5bG9hZDogJ2hlYWRlcicsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XHJcbiAgICBpZiAoc2lkZWJhckRhdGEuY2xhc3NlcyA9PT0gJ2lzLWV4cGFuZGVkJykge1xyXG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWNvbGxhcHNlZCc7XHJcbiAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtZXhwYW5kZWQnO1xyXG4gICAgICBzaWRlYmFyRGF0YS5pY29uUmlnaHQgPSAnbjctaWNvbi1hbmdsZS1sZWZ0JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19