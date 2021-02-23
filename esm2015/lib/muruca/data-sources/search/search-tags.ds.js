import { DataSource } from '@n7-frontend/core';
export class MrSearchTagsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasFilters = false;
    }
    transform(data) {
        const { state, linksResponse, facetsConfig } = data;
        const { facets } = linksResponse;
        const tags = [];
        // inputs config
        facetsConfig.sections.forEach(({ inputs }) => {
            inputs
                .filter(({ queryParam }) => queryParam)
                .forEach(({ id }) => {
                if (state[id]) {
                    const values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values
                        .forEach((value) => {
                        let text = value;
                        if (facets[id]) {
                            const selectedFacet = facets[id].values.find(({ payload }) => payload === value);
                            if (selectedFacet) {
                                text = selectedFacet.text;
                            }
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
        this.hasFilters = !!tags.length;
        return tags;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTtJQUE5Qzs7UUFDUyxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBdUM1QixDQUFDO0lBckNXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoQixnQkFBZ0I7UUFDaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDM0MsTUFBTTtpQkFDSCxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUM7aUJBQ3RDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ2IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxNQUFNO3lCQUNILE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUNqQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7d0JBQ2pCLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUNkLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDOzRCQUNqRixJQUFJLGFBQWEsRUFBRTtnQ0FDakIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7NkJBQzNCO3lCQUNGO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSTs0QkFDSixJQUFJLEVBQUUsZUFBZTs0QkFDckIsT0FBTyxFQUFFO2dDQUNQLEVBQUU7Z0NBQ0YsS0FBSzs2QkFDTjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hUYWdzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgaGFzRmlsdGVycyA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xyXG4gICAgY29uc3QgeyBzdGF0ZSwgbGlua3NSZXNwb25zZSwgZmFjZXRzQ29uZmlnIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBmYWNldHMgfSA9IGxpbmtzUmVzcG9uc2U7XHJcbiAgICBjb25zdCB0YWdzID0gW107XHJcblxyXG4gICAgLy8gaW5wdXRzIGNvbmZpZ1xyXG4gICAgZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcclxuICAgICAgaW5wdXRzXHJcbiAgICAgICAgLmZpbHRlcigoeyBxdWVyeVBhcmFtIH0pID0+IHF1ZXJ5UGFyYW0pXHJcbiAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHN0YXRlW2lkXSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0YXRlW2lkXSkgPyBzdGF0ZVtpZF0gOiBbc3RhdGVbaWRdXTtcclxuICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhY2V0c1tpZF0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGYWNldCA9IGZhY2V0c1tpZF0udmFsdWVzLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEZhY2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHNlbGVjdGVkRmFjZXQudGV4dDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxyXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmhhc0ZpbHRlcnMgPSAhIXRhZ3MubGVuZ3RoO1xyXG4gICAgcmV0dXJuIHRhZ3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==