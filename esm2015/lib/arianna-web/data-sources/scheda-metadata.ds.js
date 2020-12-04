import { DataSource } from '@n7-frontend/core';
export class AwSchedaMetadataDS extends DataSource {
    transform(data) {
        return {
            group: [{
                    items: data || []
                }]
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBQ3RDLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUU7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYU1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyb3VwOiBbe1xyXG4gICAgICAgIGl0ZW1zOiBkYXRhIHx8IFtdXHJcbiAgICAgIH1dXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=