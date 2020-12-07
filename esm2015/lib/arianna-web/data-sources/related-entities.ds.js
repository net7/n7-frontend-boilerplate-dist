import { DataSource } from '@n7-frontend/core';
export class AwRelatedEntitiesDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (data) => {
            const basePath = this.options.config.get('paths').entitaBasePath;
            const { title } = this.options;
            const previews = data ? data.map((d) => ({
                title: d.entity.label,
                anchor: {
                    href: `${basePath}${d.entity.id}/${d.entity.label}`,
                },
                classes: `is-${d.entity.typeOfEntity}`,
                metadata: [{
                        items: [{
                                label: 'Tipo di entità',
                                value: d.entity.typeOfEntity,
                            }],
                    }],
                // A special kind of metadata, not to be viewed as other metadata
                relation: {
                    key: d.relationName || title,
                    value: d.entity.relation || null
                },
            })) : [];
            return { previews };
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7O1FBQ1ksY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFtQyxFQUFFO1lBQzlELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDakUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0IsTUFBTSxRQUFRLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtpQkFDcEQ7Z0JBQ0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RDLFFBQVEsRUFBRSxDQUFDO3dCQUNULEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxnQkFBZ0I7Z0NBQ3ZCLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7NkJBQzdCLENBQUM7cUJBQ0gsQ0FBQztnQkFDRixpRUFBaUU7Z0JBQ2pFLFFBQVEsRUFBRTtvQkFDUixHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxLQUFLO29CQUM1QixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtpQkFDakM7YUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1JlbGF0ZWRFbnRpdGllc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKTogeyBwcmV2aWV3czogSXRlbVByZXZpZXdEYXRhW10gfSA9PiB7XHJcbiAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoO1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdID0gZGF0YSA/IGRhdGEubWFwKChkKSA9PiAoe1xyXG4gICAgICB0aXRsZTogZC5lbnRpdHkubGFiZWwsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7ZC5lbnRpdHkuaWR9LyR7ZC5lbnRpdHkubGFiZWx9YCxcclxuICAgICAgfSxcclxuICAgICAgY2xhc3NlczogYGlzLSR7ZC5lbnRpdHkudHlwZU9mRW50aXR5fWAsIC8vIGFkZHMgY29sb3IgdG8gdGhlIHRpdGxlXHJcbiAgICAgIG1ldGFkYXRhOiBbe1xyXG4gICAgICAgIGl0ZW1zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdUaXBvIGRpIGVudGl0w6AnLFxyXG4gICAgICAgICAgdmFsdWU6IGQuZW50aXR5LnR5cGVPZkVudGl0eSxcclxuICAgICAgICB9XSxcclxuICAgICAgfV0sXHJcbiAgICAgIC8vIEEgc3BlY2lhbCBraW5kIG9mIG1ldGFkYXRhLCBub3QgdG8gYmUgdmlld2VkIGFzIG90aGVyIG1ldGFkYXRhXHJcbiAgICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAga2V5OiBkLnJlbGF0aW9uTmFtZSB8fCB0aXRsZSxcclxuICAgICAgICB2YWx1ZTogZC5lbnRpdHkucmVsYXRpb24gfHwgbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSkpIDogW107XHJcbiAgICByZXR1cm4geyBwcmV2aWV3cyB9O1xyXG4gIH07XHJcbn1cclxuIl19