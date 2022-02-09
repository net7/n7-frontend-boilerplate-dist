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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9lbnRpdGEtbWV0YWRhdGEtdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTtJQUF4RDs7UUFDUyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBVzNCLENBQUM7SUFUVyxTQUFTLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhELE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUU7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YU1ldGFkYXRhVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgaGFzRmllbGRzID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgdGhpcy5oYXNGaWVsZHMgPSAhIShBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBncm91cDogW3tcclxuICAgICAgICBpdGVtczogZGF0YSB8fCBbXVxyXG4gICAgICB9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19