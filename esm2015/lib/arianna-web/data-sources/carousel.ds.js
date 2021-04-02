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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2Nhcm91c2VsLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWEvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFDaEMsU0FBUyxDQUFDLElBQXVCO1FBQ3pDLE1BQU0sR0FBRyxHQUFpQjtZQUN4QixXQUFXLEVBQUUsZUFBZTtZQUM1QixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsQ0FBQztnQkFDUCxlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLEdBQUc7YUFPZjtZQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxNQUFNLENBQUM7Z0JBQ1gsSUFBSSxVQUFVLENBQUM7Z0JBQ2YsSUFBSSxLQUFLLENBQUMsS0FBSztvQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJO29CQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2pELElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO29CQUN0QyxNQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRO3dCQUNwQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVOzRCQUN0QixNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7b0JBQzlDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUNyQyxVQUFVLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSzt5QkFDOUIsQ0FBQztxQkFDSDt5QkFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDNUMsVUFBVSxHQUFHOzRCQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7eUJBQzlCLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQzVDLFVBQVUsR0FBRzs0QkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO3lCQUM5QixDQUFDO3FCQUNIO2lCQUNGO3FCQUFNO29CQUNMLDZCQUE2QjtvQkFDN0IsVUFBVSxHQUFHO3dCQUNYLEtBQUssRUFBRSxrQkFBa0I7cUJBQzFCLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxDQUFDO29CQUNOLEtBQUs7b0JBQ0wsTUFBTTtvQkFDTixVQUFVO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztTQUNILENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbnR5cGUgR2V0U2xpZGVyUmVzcG9uc2UgPSBTbGlkZURhdGFbXTtcbnR5cGUgU2xpZGVEYXRhID0ge1xuICBiYWNrZ3JvdW5kOiB7IHR5cGU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bGwgfTtcbiAgY3RhTGFiZWw6IHN0cmluZztcbiAgY3RhUGF5bG9hZDogc3RyaW5nO1xuICBtZXRhZGF0YToge2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfVtdIHwgbnVsbDtcbiAgcHJldGV4dDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBd0Nhcm91c2VsRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBHZXRTbGlkZXJSZXNwb25zZSk6IENhcm91c2VsRGF0YSB7XG4gICAgY29uc3QgcmVzOiBDYXJvdXNlbERhdGEgPSB7XG4gICAgICBjb250YWluZXJJZDogJ2Nhcm91c2VsLXJvb3QnLFxuICAgICAgY2xhc3NlczogJ2F3LWhvbWVfX2Nhcm91c2VsLXJvb3QnLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgbW92ZTogMSxcbiAgICAgICAgLy8gdG91Y2g6IHRydWUsXG4gICAgICAgIC8vIG1vZGU6ICdhbGlnbicsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHJld2luZDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IDQwMDAsXG4gICAgICAgIGFuaW1hdGlvbjogNTAwLFxuICAgICAgICAvLyByZXNwb25zaXZlOiB7XG4gICAgICAgIC8vICAgMDogeyBjb3VudDogMS41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgICAgICAvLyAgIDQ4MDogeyBjb3VudDogMi41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgICAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXG4gICAgICAgIC8vICAgMTQ0MDogeyBjb3VudDogNCwgdG91Y2g6IGZhbHNlIH0sXG4gICAgICAgIC8vIH0sXG4gICAgICB9LFxuICAgICAgc2xpZGVzOiBkYXRhLm1hcCgoc2xpZGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IGFjdGlvbjtcbiAgICAgICAgbGV0IGJhY2tncm91bmQ7XG4gICAgICAgIGlmIChzbGlkZS50aXRsZSkgaXRlbXMucHVzaCh7IHRpdGxlOiBzbGlkZS50aXRsZSB9KTtcbiAgICAgICAgaWYgKHNsaWRlLnRleHQpIGl0ZW1zLnB1c2goeyB0ZXh0OiBzbGlkZS50ZXh0IH0pO1xuICAgICAgICBpZiAoc2xpZGUuY3RhTGFiZWwgJiYgc2xpZGUuY3RhUGF5bG9hZCkge1xuICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgIHRleHQ6IHNsaWRlLmN0YUxhYmVsLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIGhyZWY6IHNsaWRlLmN0YVBheWxvYWQsXG4gICAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZS5iYWNrZ3JvdW5kICYmIHNsaWRlLmJhY2tncm91bmQudmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2xpZGUuYmFja2dyb3VuZC50eXBlID09PSAnY29sb3InKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xuICAgICAgICAgICAgICBjb2xvcjogc2xpZGUuYmFja2dyb3VuZC52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgICAgaW1hZ2U6IHNsaWRlLmJhY2tncm91bmQudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChzbGlkZS5iYWNrZ3JvdW5kLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICAgIHZpZGVvOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGUgYmFja2dyb3VuZCBpcyBtaXNzaW5nIVxuICAgICAgICAgIGJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgYmFja2dyb3VuZFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iXX0=