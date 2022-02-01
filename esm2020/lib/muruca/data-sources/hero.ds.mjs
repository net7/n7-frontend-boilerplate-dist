import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
export class MrHeroDS extends DataSource {
    transform(data) {
        const { classes, background } = this.options;
        const { text, image, title, button } = data;
        const backgroundImage = background ? image : null;
        return {
            text,
            title,
            classes,
            backgroundImage,
            image: !backgroundImage ? image : null,
            button: button && button.link ? {
                ...button,
                anchor: {
                    href: linksHelper.getRouterLink(button.link),
                    queryParams: linksHelper.getQueryParams(button.link)
                }
            } : null
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0lBRzVCLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxNQUFNLEVBQ0osSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQixHQUFHLElBQUksQ0FBQztRQUNULE1BQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbEQsT0FBTztZQUNMLElBQUk7WUFDSixLQUFLO1lBQ0wsT0FBTztZQUNQLGVBQWU7WUFDZixLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0QyxNQUFNLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixHQUFHLE1BQU07Z0JBQ1QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQzVDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ3JEO2FBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIE1ySGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgY2xhc3NlcywgYmFja2dyb3VuZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHtcbiAgICAgIHRleHQsIGltYWdlLCB0aXRsZSwgYnV0dG9uXG4gICAgfSA9IGRhdGE7XG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZCA/IGltYWdlIDogbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZXh0LFxuICAgICAgdGl0bGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgYmFja2dyb3VuZEltYWdlLFxuICAgICAgaW1hZ2U6ICFiYWNrZ3JvdW5kSW1hZ2UgPyBpbWFnZSA6IG51bGwsXG4gICAgICBidXR0b246IGJ1dHRvbiAmJiBidXR0b24ubGluayA/IHtcbiAgICAgICAgLi4uYnV0dG9uLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGJ1dHRvbi5saW5rKSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoYnV0dG9uLmxpbmspXG4gICAgICAgIH1cbiAgICAgIH0gOiBudWxsXG4gICAgfTtcbiAgfVxufVxuIl19