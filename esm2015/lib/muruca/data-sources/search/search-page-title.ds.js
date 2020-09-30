import { DataSource, _t } from '@n7-frontend/core';
export class MrSearchPageTitleDS extends DataSource {
    transform() {
        const { title } = this.options.config;
        return {
            title: {
                main: {
                    text: _t(title)
                }
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVTtJQUN2QyxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUV0QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztpQkFDaEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUGFnZVRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcbiAgICBjb25zdCB7IHRpdGxlIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1haW46IHtcbiAgICAgICAgICB0ZXh0OiBfdCh0aXRsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==