import { DataSource } from '@n7-frontend/core';
export class MrInnerTitleDS extends DataSource {
    transform(data) {
        const { title, subtitle, button } = data;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: subtitle,
                    classes: 'italic'
                }
            },
            actions: button ? {
                buttons: [
                    {
                        anchor: {
                            href: button.link,
                        },
                        text: button.text,
                        classes: 'n7-btn-cta'
                    }
                ]
            } : null
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBQ2xDLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjthQUNGO1lBQ0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3lCQUNsQjt3QkFDRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ2pCLE9BQU8sRUFBRSxZQUFZO3FCQUN0QjtpQkFDRjthQUNGLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ySW5uZXJUaXRsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IHRpdGxlLCBzdWJ0aXRsZSwgYnV0dG9uIH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIHRleHQ6IHN1YnRpdGxlLFxuICAgICAgICAgIGNsYXNzZXM6ICdpdGFsaWMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhY3Rpb25zOiBidXR0b24gPyB7XG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogYnV0dG9uLmxpbmssXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0gOiBudWxsXG4gICAgfTtcbiAgfVxufVxuIl19