import { DataSource } from '@n7-frontend/core';
export class MrSearchTagsDS extends DataSource {
    transform(data) {
        const { state, linksResponse, facetsConfig } = data;
        const { inputs: linkInputs } = linksResponse;
        const tags = [];
        // inputs config
        facetsConfig.sections.forEach(({ inputs }) => {
            inputs
                .filter(({ queryParam }) => queryParam)
                .forEach(({ id }) => {
                if (state[id]) {
                    const values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values.forEach((value) => {
                        let text = value;
                        if (linkInputs[id]) {
                            text = linkInputs[id].find(({ payload }) => payload === value).text;
                        }
                        tags.push({
                            text,
                            icon: 'n7-icon-close',
                            payload: {
                                id,
                                value
                            }
                        });
                    });
                }
            });
        });
        return tags;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTtJQUNsQyxTQUFTLENBQUMsSUFBSTtRQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEQsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxhQUFhLENBQUM7UUFDN0MsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGdCQUFnQjtRQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUMzQyxNQUFNO2lCQUNILE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDdEMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNsQixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDYixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDdkIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO3dCQUNqQixJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDbEIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO3lCQUNyRTt3QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDOzRCQUNSLElBQUk7NEJBQ0osSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLE9BQU8sRUFBRTtnQ0FDUCxFQUFFO2dDQUNGLEtBQUs7NkJBQ047eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xuICAgIGNvbnN0IHsgc3RhdGUsIGxpbmtzUmVzcG9uc2UsIGZhY2V0c0NvbmZpZyB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGlucHV0czogbGlua0lucHV0cyB9ID0gbGlua3NSZXNwb25zZTtcbiAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlucHV0c1xuICAgICAgICAuZmlsdGVyKCh7IHF1ZXJ5UGFyYW0gfSkgPT4gcXVlcnlQYXJhbSlcbiAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0ZVtpZF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGVbaWRdKSA/IHN0YXRlW2lkXSA6IFtzdGF0ZVtpZF1dO1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB0ZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmIChsaW5rSW5wdXRzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRleHQgPSBsaW5rSW5wdXRzW2lkXS5maW5kKCh7IHBheWxvYWQgfSkgPT4gcGF5bG9hZCA9PT0gdmFsdWUpLnRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH1cbn1cbiJdfQ==