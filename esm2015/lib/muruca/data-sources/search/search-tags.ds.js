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
                        var _a;
                        let text = value;
                        if (facets[id]) {
                            text = (_a = facets[id].values.find(({ payload }) => payload === value)) === null || _a === void 0 ? void 0 : _a.text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTtJQUE5Qzs7UUFDUyxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBb0M1QixDQUFDO0lBbENXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoQixnQkFBZ0I7UUFDaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDM0MsTUFBTTtpQkFDSCxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUM7aUJBQ3RDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ2IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxNQUFNO3lCQUNILE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOzt3QkFDakIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO3dCQUNqQixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDZCxJQUFJLFNBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLDBDQUFFLElBQUksQ0FBQzt5QkFDekU7d0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDUixJQUFJOzRCQUNKLElBQUksRUFBRSxlQUFlOzRCQUNyQixPQUFPLEVBQUU7Z0NBQ1AsRUFBRTtnQ0FDRixLQUFLOzZCQUNOO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgaGFzRmlsdGVycyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IFRhZ0RhdGFbXSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgbGlua3NSZXNwb25zZSwgZmFjZXRzQ29uZmlnIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSBsaW5rc1Jlc3BvbnNlO1xuICAgIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgIC8vIGlucHV0cyBjb25maWdcbiAgICBmYWNldHNDb25maWcuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgaW5wdXRzXG4gICAgICAgIC5maWx0ZXIoKHsgcXVlcnlQYXJhbSB9KSA9PiBxdWVyeVBhcmFtKVxuICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlW2lkXSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0ZVtpZF0pID8gc3RhdGVbaWRdIDogW3N0YXRlW2lkXV07XG4gICAgICAgICAgICB2YWx1ZXNcbiAgICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZmFjZXRzW2lkXSkge1xuICAgICAgICAgICAgICAgICAgdGV4dCA9IGZhY2V0c1tpZF0udmFsdWVzLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSB2YWx1ZSk/LnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaGFzRmlsdGVycyA9ICEhdGFncy5sZW5ndGg7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH1cbn1cbiJdfQ==