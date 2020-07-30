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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7O1FBQ1ksY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFtQyxFQUFFO1lBQzlELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDakUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0IsTUFBTSxRQUFRLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtpQkFDcEQ7Z0JBQ0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RDLFFBQVEsRUFBRSxDQUFDO3dCQUNULEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxnQkFBZ0I7Z0NBQ3ZCLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7NkJBQzdCLENBQUM7cUJBQ0gsQ0FBQztnQkFDRixpRUFBaUU7Z0JBQ2pFLFFBQVEsRUFBRTtvQkFDUixHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxLQUFLO29CQUM1QixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtpQkFDakM7YUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1JlbGF0ZWRFbnRpdGllc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSk6IHsgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdIH0gPT4ge1xuICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGg7XG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHByZXZpZXdzOiBJdGVtUHJldmlld0RhdGFbXSA9IGRhdGEgPyBkYXRhLm1hcCgoZCkgPT4gKHtcbiAgICAgIHRpdGxlOiBkLmVudGl0eS5sYWJlbCxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2QuZW50aXR5LmlkfS8ke2QuZW50aXR5LmxhYmVsfWAsXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogYGlzLSR7ZC5lbnRpdHkudHlwZU9mRW50aXR5fWAsIC8vIGFkZHMgY29sb3IgdG8gdGhlIHRpdGxlXG4gICAgICBtZXRhZGF0YTogW3tcbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgbGFiZWw6ICdUaXBvIGRpIGVudGl0w6AnLFxuICAgICAgICAgIHZhbHVlOiBkLmVudGl0eS50eXBlT2ZFbnRpdHksXG4gICAgICAgIH1dLFxuICAgICAgfV0sXG4gICAgICAvLyBBIHNwZWNpYWwga2luZCBvZiBtZXRhZGF0YSwgbm90IHRvIGJlIHZpZXdlZCBhcyBvdGhlciBtZXRhZGF0YVxuICAgICAgcmVsYXRpb246IHtcbiAgICAgICAga2V5OiBkLnJlbGF0aW9uTmFtZSB8fCB0aXRsZSxcbiAgICAgICAgdmFsdWU6IGQuZW50aXR5LnJlbGF0aW9uIHx8IG51bGxcbiAgICAgIH0sXG4gICAgfSkpIDogW107XG4gICAgcmV0dXJuIHsgcHJldmlld3MgfTtcbiAgfTtcbn1cbiJdfQ==