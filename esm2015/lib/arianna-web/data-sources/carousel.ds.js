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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2Nhcm91c2VsLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWEvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFDaEMsU0FBUyxDQUFDLElBQXVCO1FBQ3pDLE1BQU0sR0FBRyxHQUFpQjtZQUN4QixXQUFXLEVBQUUsZUFBZTtZQUM1QixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsQ0FBQztnQkFDUCxlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLEdBQUc7YUFPZjtZQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxNQUFNLENBQUM7Z0JBQ1gsSUFBSSxVQUFVLENBQUM7Z0JBQ2YsSUFBSSxLQUFLLENBQUMsS0FBSztvQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJO29CQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2pELElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO29CQUN0QyxNQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRO3dCQUNwQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVOzRCQUN0QixNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7b0JBQzlDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUNyQyxVQUFVLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSzt5QkFDOUIsQ0FBQztxQkFDSDt5QkFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDNUMsVUFBVSxHQUFHOzRCQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7eUJBQzlCLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQzVDLFVBQVUsR0FBRzs0QkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO3lCQUM5QixDQUFDO3FCQUNIO2lCQUNGO3FCQUFNO29CQUNMLDZCQUE2QjtvQkFDN0IsVUFBVSxHQUFHO3dCQUNYLEtBQUssRUFBRSxrQkFBa0I7cUJBQzFCLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxDQUFDO29CQUNOLEtBQUs7b0JBQ0wsTUFBTTtvQkFDTixVQUFVO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztTQUNILENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbnR5cGUgR2V0U2xpZGVyUmVzcG9uc2UgPSBTbGlkZURhdGFbXTtcclxudHlwZSBTbGlkZURhdGEgPSB7XHJcbiAgYmFja2dyb3VuZDogeyB0eXBlOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfCBudWxsIH07XHJcbiAgY3RhTGFiZWw6IHN0cmluZztcclxuICBjdGFQYXlsb2FkOiBzdHJpbmc7XHJcbiAgbWV0YWRhdGE6IHtrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ31bXSB8IG51bGw7XHJcbiAgcHJldGV4dDogc3RyaW5nO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXdDYXJvdXNlbERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBHZXRTbGlkZXJSZXNwb25zZSk6IENhcm91c2VsRGF0YSB7XHJcbiAgICBjb25zdCByZXM6IENhcm91c2VsRGF0YSA9IHtcclxuICAgICAgY29udGFpbmVySWQ6ICdjYXJvdXNlbC1yb290JyxcclxuICAgICAgY2xhc3NlczogJ2F3LWhvbWVfX2Nhcm91c2VsLXJvb3QnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgbW92ZTogMSxcclxuICAgICAgICAvLyB0b3VjaDogdHJ1ZSxcclxuICAgICAgICAvLyBtb2RlOiAnYWxpZ24nLFxyXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICByZXdpbmQ6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IDQwMDAsXHJcbiAgICAgICAgYW5pbWF0aW9uOiA1MDAsXHJcbiAgICAgICAgLy8gcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIC8vICAgMDogeyBjb3VudDogMS41LCBidXR0b25zOiBmYWxzZSB9LFxyXG4gICAgICAgIC8vICAgNDgwOiB7IGNvdW50OiAyLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gICA3Njg6IHsgY291bnQ6IDMsIHRvdWNoOiBmYWxzZSB9LFxyXG4gICAgICAgIC8vICAgMTQ0MDogeyBjb3VudDogNCwgdG91Y2g6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgfSxcclxuICAgICAgc2xpZGVzOiBkYXRhLm1hcCgoc2xpZGUpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGxldCBhY3Rpb247XHJcbiAgICAgICAgbGV0IGJhY2tncm91bmQ7XHJcbiAgICAgICAgaWYgKHNsaWRlLnRpdGxlKSBpdGVtcy5wdXNoKHsgdGl0bGU6IHNsaWRlLnRpdGxlIH0pO1xyXG4gICAgICAgIGlmIChzbGlkZS50ZXh0KSBpdGVtcy5wdXNoKHsgdGV4dDogc2xpZGUudGV4dCB9KTtcclxuICAgICAgICBpZiAoc2xpZGUuY3RhTGFiZWwgJiYgc2xpZGUuY3RhUGF5bG9hZCkge1xyXG4gICAgICAgICAgYWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiBzbGlkZS5jdGFMYWJlbCxcclxuICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgaHJlZjogc2xpZGUuY3RhUGF5bG9hZCxcclxuICAgICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbGlkZS5iYWNrZ3JvdW5kICYmIHNsaWRlLmJhY2tncm91bmQudmFsdWUpIHtcclxuICAgICAgICAgIGlmIChzbGlkZS5iYWNrZ3JvdW5kLnR5cGUgPT09ICdjb2xvcicpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9IHtcclxuICAgICAgICAgICAgICBjb2xvcjogc2xpZGUuYmFja2dyb3VuZC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzbGlkZS5iYWNrZ3JvdW5kLnR5cGUgPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9IHtcclxuICAgICAgICAgICAgICBpbWFnZTogc2xpZGUuYmFja2dyb3VuZC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzbGlkZS5iYWNrZ3JvdW5kLnR5cGUgPT09ICd2aWRlbycpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9IHtcclxuICAgICAgICAgICAgICB2aWRlbzogc2xpZGUuYmFja2dyb3VuZC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBUaGUgYmFja2dyb3VuZCBpcyBtaXNzaW5nIVxyXG4gICAgICAgICAgYmFja2dyb3VuZCA9IHtcclxuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgIGJhY2tncm91bmRcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxufVxyXG4iXX0=