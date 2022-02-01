import { DataSource } from '@n7-frontend/core';
export class AwEntitaMetadataViewerDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasFields = false;
    }
    transform(data) {
        this.hasFields = !!(Array.isArray(data) && data.length);
        return {
            group: [{
                    items: data || []
                }]
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9lbnRpdGEtbWV0YWRhdGEtdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTtJQUF4RDs7UUFDUyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBVzNCLENBQUM7SUFUVyxTQUFTLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhELE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUU7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgaGFzRmllbGRzID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5oYXNGaWVsZHMgPSAhIShBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBncm91cDogW3tcbiAgICAgICAgaXRlbXM6IGRhdGEgfHwgW11cbiAgICAgIH1dXG4gICAgfTtcbiAgfVxufVxuIl19