import { DataSource } from '@n7-frontend/core';
export class AwRelatedEntitiesDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (data) => {
            const basePath = this.options.config.get('paths').entitaBasePath;
            const configKeys = this.options.config.get('config-keys');
            const { title } = this.options;
            const previews = data ? data.map((d) => ({
                title: d.entity.label,
                anchor: {
                    href: `${basePath}${d.entity.id}/${d.entity.label}`,
                },
                classes: (configKeys[d.entity.typeOfEntity])
                    ? `is-${configKeys[d.entity.typeOfEntity]['class-name']}`
                    : null,
                metadata: [{
                        items: [{
                                label: 'Tipo di entità',
                                value: (configKeys[d.entity.typeOfEntity])
                                    ? configKeys[d.entity.typeOfEntity].label
                                    : d.entity.typeOfEntity,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7O1FBQ1ksY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFtQyxFQUFFO1lBQzlELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDakUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQy9CLE1BQU0sUUFBUSxHQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzFELEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7aUJBQ3BEO2dCQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDekQsQ0FBQyxDQUFDLElBQUk7Z0JBQ1IsUUFBUSxFQUFFLENBQUM7d0JBQ1QsS0FBSyxFQUFFLENBQUM7Z0NBQ04sS0FBSyxFQUFFLGdCQUFnQjtnQ0FDdkIsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0NBQ3hDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLO29DQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZOzZCQUMxQixDQUFDO3FCQUNILENBQUM7Z0JBQ0YsaUVBQWlFO2dCQUNqRSxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksS0FBSztvQkFDNUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7aUJBQ2pDO2FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdSZWxhdGVkRW50aXRpZXNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSk6IHsgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdIH0gPT4ge1xyXG4gICAgY29uc3QgYmFzZVBhdGggPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aDtcclxuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnY29uZmlnLWtleXMnKTtcclxuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHByZXZpZXdzOiBJdGVtUHJldmlld0RhdGFbXSA9IGRhdGEgPyBkYXRhLm1hcCgoZCkgPT4gKHtcclxuICAgICAgdGl0bGU6IGQuZW50aXR5LmxhYmVsLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2QuZW50aXR5LmlkfS8ke2QuZW50aXR5LmxhYmVsfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsYXNzZXM6IChjb25maWdLZXlzW2QuZW50aXR5LnR5cGVPZkVudGl0eV0pXHJcbiAgICAgICAgPyBgaXMtJHtjb25maWdLZXlzW2QuZW50aXR5LnR5cGVPZkVudGl0eV1bJ2NsYXNzLW5hbWUnXX1gXHJcbiAgICAgICAgOiBudWxsLCAvLyBhZGRzIGNvbG9yIHRvIHRoZSB0aXRsZVxyXG4gICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICBpdGVtczogW3tcclxuICAgICAgICAgIGxhYmVsOiAnVGlwbyBkaSBlbnRpdMOgJyxcclxuICAgICAgICAgIHZhbHVlOiAoY29uZmlnS2V5c1tkLmVudGl0eS50eXBlT2ZFbnRpdHldKVxyXG4gICAgICAgICAgICA/IGNvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XS5sYWJlbFxyXG4gICAgICAgICAgICA6IGQuZW50aXR5LnR5cGVPZkVudGl0eSxcclxuICAgICAgICB9XSxcclxuICAgICAgfV0sXHJcbiAgICAgIC8vIEEgc3BlY2lhbCBraW5kIG9mIG1ldGFkYXRhLCBub3QgdG8gYmUgdmlld2VkIGFzIG90aGVyIG1ldGFkYXRhXHJcbiAgICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAga2V5OiBkLnJlbGF0aW9uTmFtZSB8fCB0aXRsZSxcclxuICAgICAgICB2YWx1ZTogZC5lbnRpdHkucmVsYXRpb24gfHwgbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSkpIDogW107XHJcbiAgICByZXR1cm4geyBwcmV2aWV3cyB9O1xyXG4gIH07XHJcbn1cclxuIl19