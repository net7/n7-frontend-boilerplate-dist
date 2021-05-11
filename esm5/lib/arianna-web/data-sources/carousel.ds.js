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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2Nhcm91c2VsLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFhL0M7SUFBa0MsZ0NBQVU7SUFBNUM7O0lBa0VBLENBQUM7SUFqRVcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBdUI7UUFDekMsSUFBTSxHQUFHLEdBQWlCO1lBQ3hCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxDQUFDO2dCQUNQLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsR0FBRzthQU9mO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLO2dCQUNyQixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksTUFBTSxDQUFDO2dCQUNYLElBQUksVUFBVSxDQUFDO2dCQUNmLElBQUksS0FBSyxDQUFDLEtBQUs7b0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxLQUFLLENBQUMsSUFBSTtvQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDdEMsTUFBTSxHQUFHO3dCQUNQLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUTt3QkFDcEIsTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVTs0QkFDdEIsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO29CQUM5QyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDckMsVUFBVSxHQUFHOzRCQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7eUJBQzlCLENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQzVDLFVBQVUsR0FBRzs0QkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO3lCQUM5QixDQUFDO3FCQUNIO3lCQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUM1QyxVQUFVLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSzt5QkFDOUIsQ0FBQztxQkFDSDtpQkFDRjtxQkFBTTtvQkFDTCw2QkFBNkI7b0JBQzdCLFVBQVUsR0FBRzt3QkFDWCxLQUFLLEVBQUUsa0JBQWtCO3FCQUMxQixDQUFDO2lCQUNIO2dCQUNELE9BQU8sQ0FBQztvQkFDTixLQUFLLE9BQUE7b0JBQ0wsTUFBTSxRQUFBO29CQUNOLFVBQVUsWUFBQTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbEVELENBQWtDLFVBQVUsR0FrRTNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxudHlwZSBHZXRTbGlkZXJSZXNwb25zZSA9IFNsaWRlRGF0YVtdO1xudHlwZSBTbGlkZURhdGEgPSB7XG4gIGJhY2tncm91bmQ6IHsgdHlwZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgbnVsbCB9O1xuICBjdGFMYWJlbDogc3RyaW5nO1xuICBjdGFQYXlsb2FkOiBzdHJpbmc7XG4gIG1ldGFkYXRhOiB7a2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9W10gfCBudWxsO1xuICBwcmV0ZXh0OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEF3Q2Fyb3VzZWxEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEdldFNsaWRlclJlc3BvbnNlKTogQ2Fyb3VzZWxEYXRhIHtcbiAgICBjb25zdCByZXM6IENhcm91c2VsRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiAnY2Fyb3VzZWwtcm9vdCcsXG4gICAgICBjbGFzc2VzOiAnYXctaG9tZV9fY2Fyb3VzZWwtcm9vdCcsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBtb3ZlOiAxLFxuICAgICAgICAvLyB0b3VjaDogdHJ1ZSxcbiAgICAgICAgLy8gbW9kZTogJ2FsaWduJyxcbiAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmV3aW5kOiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogNDAwMCxcbiAgICAgICAgYW5pbWF0aW9uOiA1MDAsXG4gICAgICAgIC8vIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgLy8gICAwOiB7IGNvdW50OiAxLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXG4gICAgICAgIC8vICAgNDgwOiB7IGNvdW50OiAyLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXG4gICAgICAgIC8vICAgNzY4OiB7IGNvdW50OiAzLCB0b3VjaDogZmFsc2UgfSxcbiAgICAgICAgLy8gICAxNDQwOiB7IGNvdW50OiA0LCB0b3VjaDogZmFsc2UgfSxcbiAgICAgICAgLy8gfSxcbiAgICAgIH0sXG4gICAgICBzbGlkZXM6IGRhdGEubWFwKChzbGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBsZXQgYWN0aW9uO1xuICAgICAgICBsZXQgYmFja2dyb3VuZDtcbiAgICAgICAgaWYgKHNsaWRlLnRpdGxlKSBpdGVtcy5wdXNoKHsgdGl0bGU6IHNsaWRlLnRpdGxlIH0pO1xuICAgICAgICBpZiAoc2xpZGUudGV4dCkgaXRlbXMucHVzaCh7IHRleHQ6IHNsaWRlLnRleHQgfSk7XG4gICAgICAgIGlmIChzbGlkZS5jdGFMYWJlbCAmJiBzbGlkZS5jdGFQYXlsb2FkKSB7XG4gICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgdGV4dDogc2xpZGUuY3RhTGFiZWwsXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogc2xpZGUuY3RhUGF5bG9hZCxcbiAgICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNsaWRlLmJhY2tncm91bmQgJiYgc2xpZGUuYmFja2dyb3VuZC52YWx1ZSkge1xuICAgICAgICAgIGlmIChzbGlkZS5iYWNrZ3JvdW5kLnR5cGUgPT09ICdjb2xvcicpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzbGlkZS5iYWNrZ3JvdW5kLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGUuYmFja2dyb3VuZC50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0ge1xuICAgICAgICAgICAgICBpbWFnZTogc2xpZGUuYmFja2dyb3VuZC52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlLmJhY2tncm91bmQudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgICAgdmlkZW86IHNsaWRlLmJhY2tncm91bmQudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGlzIG1pc3NpbmchXG4gICAgICAgICAgYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwKSdcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBiYWNrZ3JvdW5kXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9O1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdfQ==