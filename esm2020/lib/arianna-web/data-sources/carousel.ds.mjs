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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvY2Fyb3VzZWwuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBYS9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBVTtJQUNoQyxTQUFTLENBQUMsSUFBdUI7UUFDekMsTUFBTSxHQUFHLEdBQWlCO1lBQ3hCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxDQUFDO2dCQUNQLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsR0FBRztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLHVDQUF1QztnQkFDdkMseUNBQXlDO2dCQUN6QyxxQ0FBcUM7Z0JBQ3JDLHNDQUFzQztnQkFDdEMsS0FBSzthQUNOO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixJQUFJLE1BQU0sQ0FBQztnQkFDWCxJQUFJLFVBQVUsQ0FBQztnQkFDZixJQUFJLEtBQUssQ0FBQyxLQUFLO29CQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3BELElBQUksS0FBSyxDQUFDLElBQUk7b0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDakQsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7b0JBQ3RDLE1BQU0sR0FBRzt3QkFDUCxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVE7d0JBQ3BCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVU7NEJBQ3RCLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtvQkFDOUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQ3JDLFVBQVUsR0FBRzs0QkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO3lCQUM5QixDQUFDO3FCQUNIO3lCQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUM1QyxVQUFVLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSzt5QkFDOUIsQ0FBQztxQkFDSDt5QkFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDNUMsVUFBVSxHQUFHOzRCQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7eUJBQzlCLENBQUM7cUJBQ0g7aUJBQ0Y7cUJBQU07b0JBQ0wsNkJBQTZCO29CQUM3QixVQUFVLEdBQUc7d0JBQ1gsS0FBSyxFQUFFLGtCQUFrQjtxQkFDMUIsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUM7b0JBQ04sS0FBSztvQkFDTCxNQUFNO29CQUNOLFVBQVU7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1NBQ0gsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxudHlwZSBHZXRTbGlkZXJSZXNwb25zZSA9IFNsaWRlRGF0YVtdO1xyXG50eXBlIFNsaWRlRGF0YSA9IHtcclxuICBiYWNrZ3JvdW5kOiB7IHR5cGU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bGwgfTtcclxuICBjdGFMYWJlbDogc3RyaW5nO1xyXG4gIGN0YVBheWxvYWQ6IHN0cmluZztcclxuICBtZXRhZGF0YToge2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfVtdIHwgbnVsbDtcclxuICBwcmV0ZXh0OiBzdHJpbmc7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBd0Nhcm91c2VsRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEdldFNsaWRlclJlc3BvbnNlKTogQ2Fyb3VzZWxEYXRhIHtcclxuICAgIGNvbnN0IHJlczogQ2Fyb3VzZWxEYXRhID0ge1xyXG4gICAgICBjb250YWluZXJJZDogJ2Nhcm91c2VsLXJvb3QnLFxyXG4gICAgICBjbGFzc2VzOiAnYXctaG9tZV9fY2Fyb3VzZWwtcm9vdCcsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBjb3VudDogMSxcclxuICAgICAgICBtb3ZlOiAxLFxyXG4gICAgICAgIC8vIHRvdWNoOiB0cnVlLFxyXG4gICAgICAgIC8vIG1vZGU6ICdhbGlnbicsXHJcbiAgICAgICAgYnV0dG9uczogdHJ1ZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogNDAwMCxcclxuICAgICAgICBhbmltYXRpb246IDUwMCxcclxuICAgICAgICAvLyByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgLy8gICAwOiB7IGNvdW50OiAxLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gICA0ODA6IHsgY291bnQ6IDIuNSwgYnV0dG9uczogZmFsc2UgfSxcclxuICAgICAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gICAxNDQwOiB7IGNvdW50OiA0LCB0b3VjaDogZmFsc2UgfSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzbGlkZXM6IGRhdGEubWFwKChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IGFjdGlvbjtcclxuICAgICAgICBsZXQgYmFja2dyb3VuZDtcclxuICAgICAgICBpZiAoc2xpZGUudGl0bGUpIGl0ZW1zLnB1c2goeyB0aXRsZTogc2xpZGUudGl0bGUgfSk7XHJcbiAgICAgICAgaWYgKHNsaWRlLnRleHQpIGl0ZW1zLnB1c2goeyB0ZXh0OiBzbGlkZS50ZXh0IH0pO1xyXG4gICAgICAgIGlmIChzbGlkZS5jdGFMYWJlbCAmJiBzbGlkZS5jdGFQYXlsb2FkKSB7XHJcbiAgICAgICAgICBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHNsaWRlLmN0YUxhYmVsLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBzbGlkZS5jdGFQYXlsb2FkLFxyXG4gICAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlLmJhY2tncm91bmQgJiYgc2xpZGUuYmFja2dyb3VuZC52YWx1ZSkge1xyXG4gICAgICAgICAgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ2NvbG9yJykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICAgIGltYWdlOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICAgIHZpZGVvOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGlzIG1pc3NpbmchXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==