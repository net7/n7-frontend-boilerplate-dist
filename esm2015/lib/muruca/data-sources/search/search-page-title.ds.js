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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVTtJQUN2QyxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFtQjtZQUMzQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRztnQkFDYixPQUFPLEVBQUUsQ0FBQzt3QkFDUixJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7d0JBQ2hDLE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsUUFBUTt5QkFDbEI7cUJBQ0YsQ0FBQzthQUNILENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUGFnZVRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpOiBJbm5lclRpdGxlRGF0YSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNlYXJjaElkIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICAgIGNvbnN0IGRhdGE6IElubmVyVGl0bGVEYXRhID0ge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgIHRleHQ6IF90KHRpdGxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbi5idXR0b25UZXh0KSB7XG4gICAgICBkYXRhLmFjdGlvbnMgPSB7XG4gICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgdGV4dDogX3QoZGVzY3JpcHRpb24uYnV0dG9uVGV4dCksXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBwYXlsb2FkOiBzZWFyY2hJZFxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJdfQ==