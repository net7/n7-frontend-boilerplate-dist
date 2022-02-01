import { DataSource } from '@n7-frontend/core';
export class AwCarouselDS extends DataSource {
    transform(data) {
        const res = {
            containerId: 'carousel-root',
            classes: 'aw-home__carousel-root',
            libOptions: {
                count: 1,
                move: 1,
                // touch: true,
                // mode: 'align',
                buttons: true,
                dots: true,
                rewind: true,
                autoplay: 4000,
                animation: 500,
                // responsive: {
                //   0: { count: 1.5, buttons: false },
                //   480: { count: 2.5, buttons: false },
                //   768: { count: 3, touch: false },
                //   1440: { count: 4, touch: false },
                // },
            },
            slides: data.map((slide) => {
                const items = [];
                let action;
                let background;
                if (slide.title)
                    items.push({ title: slide.title });
                if (slide.text)
                    items.push({ text: slide.text });
                if (slide.ctaLabel && slide.ctaPayload) {
                    action = {
                        text: slide.ctaLabel,
                        anchor: {
                            href: slide.ctaPayload,
                            target: '_blank'
                        }
                    };
                }
                if (slide.background && slide.background.value) {
                    if (slide.background.type === 'color') {
                        background = {
                            color: slide.background.value
                        };
                    }
                    else if (slide.background.type === 'image') {
                        background = {
                            image: slide.background.value
                        };
                    }
                    else if (slide.background.type === 'video') {
                        background = {
                            video: slide.background.value
                        };
                    }
                }
                else {
                    // The background is missing!
                    background = {
                        color: 'rgba(0, 0, 0, 0)'
                    };
                }
                return ({
                    items,
                    action,
                    background
                });
            })
        };
        return res;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvY2Fyb3VzZWwuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBYS9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBVTtJQUNoQyxTQUFTLENBQUMsSUFBdUI7UUFDekMsTUFBTSxHQUFHLEdBQWlCO1lBQ3hCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxDQUFDO2dCQUNQLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsR0FBRztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLHVDQUF1QztnQkFDdkMseUNBQXlDO2dCQUN6QyxxQ0FBcUM7Z0JBQ3JDLHNDQUFzQztnQkFDdEMsS0FBSzthQUNOO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixJQUFJLE1BQU0sQ0FBQztnQkFDWCxJQUFJLFVBQVUsQ0FBQztnQkFDZixJQUFJLEtBQUssQ0FBQyxLQUFLO29CQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3BELElBQUksS0FBSyxDQUFDLElBQUk7b0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDakQsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7b0JBQ3RDLE1BQU0sR0FBRzt3QkFDUCxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVE7d0JBQ3BCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVU7NEJBQ3RCLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtvQkFDOUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQ3JDLFVBQVUsR0FBRzs0QkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO3lCQUM5QixDQUFDO3FCQUNIO3lCQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUM1QyxVQUFVLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSzt5QkFDOUIsQ0FBQztxQkFDSDt5QkFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDNUMsVUFBVSxHQUFHOzRCQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7eUJBQzlCLENBQUM7cUJBQ0g7aUJBQ0Y7cUJBQU07b0JBQ0wsNkJBQTZCO29CQUM3QixVQUFVLEdBQUc7d0JBQ1gsS0FBSyxFQUFFLGtCQUFrQjtxQkFDMUIsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUM7b0JBQ04sS0FBSztvQkFDTCxNQUFNO29CQUNOLFVBQVU7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1NBQ0gsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxudHlwZSBHZXRTbGlkZXJSZXNwb25zZSA9IFNsaWRlRGF0YVtdO1xudHlwZSBTbGlkZURhdGEgPSB7XG4gIGJhY2tncm91bmQ6IHsgdHlwZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgbnVsbCB9O1xuICBjdGFMYWJlbDogc3RyaW5nO1xuICBjdGFQYXlsb2FkOiBzdHJpbmc7XG4gIG1ldGFkYXRhOiB7a2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9W10gfCBudWxsO1xuICBwcmV0ZXh0OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEF3Q2Fyb3VzZWxEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEdldFNsaWRlclJlc3BvbnNlKTogQ2Fyb3VzZWxEYXRhIHtcbiAgICBjb25zdCByZXM6IENhcm91c2VsRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiAnY2Fyb3VzZWwtcm9vdCcsXG4gICAgICBjbGFzc2VzOiAnYXctaG9tZV9fY2Fyb3VzZWwtcm9vdCcsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBtb3ZlOiAxLFxuICAgICAgICAvLyB0b3VjaDogdHJ1ZSxcbiAgICAgICAgLy8gbW9kZTogJ2FsaWduJyxcbiAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmV3aW5kOiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogNDAwMCxcbiAgICAgICAgYW5pbWF0aW9uOiA1MDAsXG4gICAgICAgIC8vIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgLy8gICAwOiB7IGNvdW50OiAxLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXG4gICAgICAgIC8vICAgNDgwOiB7IGNvdW50OiAyLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXG4gICAgICAgIC8vICAgNzY4OiB7IGNvdW50OiAzLCB0b3VjaDogZmFsc2UgfSxcbiAgICAgICAgLy8gICAxNDQwOiB7IGNvdW50OiA0LCB0b3VjaDogZmFsc2UgfSxcbiAgICAgICAgLy8gfSxcbiAgICAgIH0sXG4gICAgICBzbGlkZXM6IGRhdGEubWFwKChzbGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBsZXQgYWN0aW9uO1xuICAgICAgICBsZXQgYmFja2dyb3VuZDtcbiAgICAgICAgaWYgKHNsaWRlLnRpdGxlKSBpdGVtcy5wdXNoKHsgdGl0bGU6IHNsaWRlLnRpdGxlIH0pO1xuICAgICAgICBpZiAoc2xpZGUudGV4dCkgaXRlbXMucHVzaCh7IHRleHQ6IHNsaWRlLnRleHQgfSk7XG4gICAgICAgIGlmIChzbGlkZS5jdGFMYWJlbCAmJiBzbGlkZS5jdGFQYXlsb2FkKSB7XG4gICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgdGV4dDogc2xpZGUuY3RhTGFiZWwsXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogc2xpZGUuY3RhUGF5bG9hZCxcbiAgICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNsaWRlLmJhY2tncm91bmQgJiYgc2xpZGUuYmFja2dyb3VuZC52YWx1ZSkge1xuICAgICAgICAgIGlmIChzbGlkZS5iYWNrZ3JvdW5kLnR5cGUgPT09ICdjb2xvcicpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGUuYmFja2dyb3VuZC50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xuICAgICAgICAgICAgICBpbWFnZTogc2xpZGUuYmFja2dyb3VuZC52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgICAgdmlkZW86IHNsaWRlLmJhY2tncm91bmQudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGlzIG1pc3NpbmchXG4gICAgICAgICAgYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwKSdcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBiYWNrZ3JvdW5kXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9O1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdfQ==