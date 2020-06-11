import { DataSource } from '@n7-frontend/core';
export class MrSearchResultsTitleDS extends DataSource {
    transform(data) {
        const { totalResultsText, sort } = this.options.config;
        const { totalCount, sort: currentSort } = data;
        return {
            title: {
                main: {
                    text: totalCount
                },
                secondary: {
                    text: totalResultsText[totalCount === 1 ? 1 : 0]
                }
            },
            actions: {
                select: {
                    label: sort.label,
                    options: sort.options.map(({ label, value, selected }) => ({
                        value,
                        selected: currentSort ? value === currentSort : selected,
                        text: label
                    })),
                    payload: 'sort'
                }
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxVQUFVO0lBQzFDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFDSixnQkFBZ0IsRUFDaEIsSUFBSSxFQUNMLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEIsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRS9DLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDekQsS0FBSzt3QkFDTCxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRO3dCQUN4RCxJQUFJLEVBQUUsS0FBSztxQkFDWixDQUFDLENBQUM7b0JBQ0gsT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUmVzdWx0c1RpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxSZXN1bHRzVGV4dCxcbiAgICAgIHNvcnRcbiAgICB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcbiAgICBjb25zdCB7IHRvdGFsQ291bnQsIHNvcnQ6IGN1cnJlbnRTb3J0IH0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1haW46IHtcbiAgICAgICAgICB0ZXh0OiB0b3RhbENvdW50XG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIHRleHQ6IHRvdGFsUmVzdWx0c1RleHRbdG90YWxDb3VudCA9PT0gMSA/IDEgOiAwXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWN0aW9uczoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBsYWJlbDogc29ydC5sYWJlbCxcbiAgICAgICAgICBvcHRpb25zOiBzb3J0Lm9wdGlvbnMubWFwKCh7IGxhYmVsLCB2YWx1ZSwgc2VsZWN0ZWQgfSkgPT4gKHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGN1cnJlbnRTb3J0ID8gdmFsdWUgPT09IGN1cnJlbnRTb3J0IDogc2VsZWN0ZWQsXG4gICAgICAgICAgICB0ZXh0OiBsYWJlbFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBwYXlsb2FkOiAnc29ydCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==