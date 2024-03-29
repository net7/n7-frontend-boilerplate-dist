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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NjaGVkYS1tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFDdEMsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTztZQUNMLEtBQUssRUFBRSxDQUFDO29CQUNOLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRTtpQkFDbEIsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JvdXA6IFt7XHJcbiAgICAgICAgaXRlbXM6IGRhdGEgfHwgW11cclxuICAgICAgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==