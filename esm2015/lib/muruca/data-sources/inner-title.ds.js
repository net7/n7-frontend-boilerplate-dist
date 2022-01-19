import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
export class MrInnerTitleDS extends DataSource {
    transform(data) {
        if (!data)
            return null;
        const { title, description, button } = data;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: description,
                    classes: 'italic'
                }
            },
            actions: button && button.link ? {
                buttons: [
                    {
                        anchor: {
                            href: linksHelper.getRouterLink(button.link),
                            queryParams: linksHelper.getQueryParams(button.link)
                        },
                        text: button.text,
                        classes: 'n7-btn-cta'
                    }
                ]
            } : null
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBQ2xDLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzVDLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxLQUFLO29CQUNYLE9BQU8sRUFBRSxNQUFNO2lCQUNoQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjthQUNGO1lBQ0QsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxFQUFFO29CQUNQO3dCQUNFLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUM1QyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNyRDt3QkFDRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ2pCLE9BQU8sRUFBRSxZQUFZO3FCQUN0QjtpQkFDRjthQUNGLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNcklubmVyVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uIH0gPSBkYXRhO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICB0ZXh0OiB0aXRsZSxcclxuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgICB0ZXh0OiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNsYXNzZXM6ICdpdGFsaWMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhY3Rpb25zOiBidXR0b24gJiYgYnV0dG9uLmxpbmsgPyB7XHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGJ1dHRvbi5saW5rKSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoYnV0dG9uLmxpbmspXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxyXG4gICAgICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=