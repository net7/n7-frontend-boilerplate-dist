import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwCarouselDS = /** @class */ (function (_super) {
    __extends(AwCarouselDS, _super);
    function AwCarouselDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwCarouselDS.prototype.transform = function (data) {
        var res = {
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
            slides: data.map(function (slide) {
                var items = [];
                var action;
                var background;
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
                    items: items,
                    action: action,
                    background: background
                });
            })
        };
        return res;
    };
    return AwCarouselDS;
}(DataSource));
export { AwCarouselDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2Nhcm91c2VsLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFhL0M7SUFBa0MsZ0NBQVU7SUFBNUM7O0lBa0VBLENBQUM7SUFqRVcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBdUI7UUFDekMsSUFBTSxHQUFHLEdBQWlCO1lBQ3hCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxDQUFDO2dCQUNQLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsR0FBRzthQU9mO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO2dCQUNyQixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksTUFBTSxDQUFDO2dCQUNYLElBQUksVUFBVSxDQUFDO2dCQUNmLElBQUksS0FBSyxDQUFDLEtBQUs7b0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxLQUFLLENBQUMsSUFBSTtvQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDdEMsTUFBTSxHQUFHO3dCQUNQLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUTt3QkFDcEIsTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVTs0QkFDdEIsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO29CQUM5QyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDckMsVUFBVSxHQUFHOzRCQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7eUJBQzlCLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQzVDLFVBQVUsR0FBRzs0QkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO3lCQUM5QixDQUFDO3FCQUNIO3lCQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUM1QyxVQUFVLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSzt5QkFDOUIsQ0FBQztxQkFDSDtpQkFDRjtxQkFBTTtvQkFDTCw2QkFBNkI7b0JBQzdCLFVBQVUsR0FBRzt3QkFDWCxLQUFLLEVBQUUsa0JBQWtCO3FCQUMxQixDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQztvQkFDTixLQUFLLE9BQUE7b0JBQ0wsTUFBTSxRQUFBO29CQUNOLFVBQVUsWUFBQTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbEVELENBQWtDLFVBQVUsR0FrRTNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxudHlwZSBHZXRTbGlkZXJSZXNwb25zZSA9IFNsaWRlRGF0YVtdO1xyXG50eXBlIFNsaWRlRGF0YSA9IHtcclxuICBiYWNrZ3JvdW5kOiB7IHR5cGU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bGwgfTtcclxuICBjdGFMYWJlbDogc3RyaW5nO1xyXG4gIGN0YVBheWxvYWQ6IHN0cmluZztcclxuICBtZXRhZGF0YToge2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfVtdIHwgbnVsbDtcclxuICBwcmV0ZXh0OiBzdHJpbmc7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBd0Nhcm91c2VsRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEdldFNsaWRlclJlc3BvbnNlKTogQ2Fyb3VzZWxEYXRhIHtcclxuICAgIGNvbnN0IHJlczogQ2Fyb3VzZWxEYXRhID0ge1xyXG4gICAgICBjb250YWluZXJJZDogJ2Nhcm91c2VsLXJvb3QnLFxyXG4gICAgICBjbGFzc2VzOiAnYXctaG9tZV9fY2Fyb3VzZWwtcm9vdCcsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBjb3VudDogMSxcclxuICAgICAgICBtb3ZlOiAxLFxyXG4gICAgICAgIC8vIHRvdWNoOiB0cnVlLFxyXG4gICAgICAgIC8vIG1vZGU6ICdhbGlnbicsXHJcbiAgICAgICAgYnV0dG9uczogdHJ1ZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogNDAwMCxcclxuICAgICAgICBhbmltYXRpb246IDUwMCxcclxuICAgICAgICAvLyByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgLy8gICAwOiB7IGNvdW50OiAxLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gICA0ODA6IHsgY291bnQ6IDIuNSwgYnV0dG9uczogZmFsc2UgfSxcclxuICAgICAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gICAxNDQwOiB7IGNvdW50OiA0LCB0b3VjaDogZmFsc2UgfSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzbGlkZXM6IGRhdGEubWFwKChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IGFjdGlvbjtcclxuICAgICAgICBsZXQgYmFja2dyb3VuZDtcclxuICAgICAgICBpZiAoc2xpZGUudGl0bGUpIGl0ZW1zLnB1c2goeyB0aXRsZTogc2xpZGUudGl0bGUgfSk7XHJcbiAgICAgICAgaWYgKHNsaWRlLnRleHQpIGl0ZW1zLnB1c2goeyB0ZXh0OiBzbGlkZS50ZXh0IH0pO1xyXG4gICAgICAgIGlmIChzbGlkZS5jdGFMYWJlbCAmJiBzbGlkZS5jdGFQYXlsb2FkKSB7XHJcbiAgICAgICAgICBhY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHNsaWRlLmN0YUxhYmVsLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiBzbGlkZS5jdGFQYXlsb2FkLFxyXG4gICAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsaWRlLmJhY2tncm91bmQgJiYgc2xpZGUuYmFja2dyb3VuZC52YWx1ZSkge1xyXG4gICAgICAgICAgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ2NvbG9yJykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICAgIGltYWdlOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICAgIHZpZGVvOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGlzIG1pc3NpbmchXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xyXG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==