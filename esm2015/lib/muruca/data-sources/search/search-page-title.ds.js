import { DataSource, _t } from '@n7-frontend/core';
export class MrSearchPageTitleDS extends DataSource {
    transform() {
        const { title, description, searchId } = this.options.config;
        const data = {
            title: {
                main: {
                    text: _t(title)
                }
            }
        };
        if (description && description.buttonText) {
            data.actions = {
                buttons: [{
                        text: _t(description.buttonText),
                        anchor: {
                            payload: searchId
                        }
                    }]
            };
        }
        return data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVTtJQUN2QyxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFtQjtZQUMzQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRztnQkFDYixPQUFPLEVBQUUsQ0FBQzt3QkFDUixJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7d0JBQ2hDLE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsUUFBUTt5QkFDbEI7cUJBQ0YsQ0FBQzthQUNILENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUGFnZVRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCk6IElubmVyVGl0bGVEYXRhIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzZWFyY2hJZCB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcclxuICAgIGNvbnN0IGRhdGE6IElubmVyVGl0bGVEYXRhID0ge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIG1haW46IHtcclxuICAgICAgICAgIHRleHQ6IF90KHRpdGxlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24uYnV0dG9uVGV4dCkge1xyXG4gICAgICBkYXRhLmFjdGlvbnMgPSB7XHJcbiAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgIHRleHQ6IF90KGRlc2NyaXB0aW9uLmJ1dHRvblRleHQpLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHNlYXJjaElkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIl19