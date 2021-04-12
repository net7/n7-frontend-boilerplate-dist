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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFVBQVU7SUFBeEQ7O1FBQ1MsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVczQixDQUFDO0lBVFcsU0FBUyxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RCxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ04sS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFO2lCQUNsQixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFNZXRhZGF0YVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIGhhc0ZpZWxkcyA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIHRoaXMuaGFzRmllbGRzID0gISEoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JvdXA6IFt7XHJcbiAgICAgICAgaXRlbXM6IGRhdGEgfHwgW11cclxuICAgICAgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==