import { DataSource } from '@n7-frontend/core';
export class MrSearchTagsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasFilters = false;
    }
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
                    values
                        .forEach((value) => {
                        var _a;
                        let text = value;
                        if (linkInputs[id]) {
                            text = (_a = linkInputs[id].find(({ payload }) => payload === value)) === null || _a === void 0 ? void 0 : _a.text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTtJQUE5Qzs7UUFDUyxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBb0M1QixDQUFDO0lBbENXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwRCxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLGFBQWEsQ0FBQztRQUM3QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsZ0JBQWdCO1FBQ2hCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQzNDLE1BQU07aUJBQ0gsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUN0QyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQ2xCLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUNiLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsTUFBTTt5QkFDSCxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7d0JBQ2pCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQzt3QkFDakIsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksU0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQywwQ0FBRSxJQUFJLENBQUM7eUJBQ3RFO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSTs0QkFDSixJQUFJLEVBQUUsZUFBZTs0QkFDckIsT0FBTyxFQUFFO2dDQUNQLEVBQUU7Z0NBQ0YsS0FBSzs2QkFDTjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBUYWdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hUYWdzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGhhc0ZpbHRlcnMgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xuICAgIGNvbnN0IHsgc3RhdGUsIGxpbmtzUmVzcG9uc2UsIGZhY2V0c0NvbmZpZyB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGlucHV0czogbGlua0lucHV0cyB9ID0gbGlua3NSZXNwb25zZTtcbiAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlucHV0c1xuICAgICAgICAuZmlsdGVyKCh7IHF1ZXJ5UGFyYW0gfSkgPT4gcXVlcnlQYXJhbSlcbiAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0ZVtpZF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGVbaWRdKSA/IHN0YXRlW2lkXSA6IFtzdGF0ZVtpZF1dO1xuICAgICAgICAgICAgdmFsdWVzXG4gICAgICAgICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtJbnB1dHNbaWRdKSB7XG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gbGlua0lucHV0c1tpZF0uZmluZCgoeyBwYXlsb2FkIH0pID0+IHBheWxvYWQgPT09IHZhbHVlKT8udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5oYXNGaWx0ZXJzID0gISF0YWdzLmxlbmd0aDtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuIl19