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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7O1FBQ1ksY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFtQyxFQUFFO1lBQzlELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDakUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQy9CLE1BQU0sUUFBUSxHQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzFELEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7aUJBQ3BEO2dCQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMsTUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDekQsQ0FBQyxDQUFDLElBQUk7Z0JBQ1IsUUFBUSxFQUFFLENBQUM7d0JBQ1QsS0FBSyxFQUFFLENBQUM7Z0NBQ04sS0FBSyxFQUFFLGdCQUFnQjtnQ0FDdkIsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0NBQ3hDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLO29DQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZOzZCQUMxQixDQUFDO3FCQUNILENBQUM7Z0JBQ0YsaUVBQWlFO2dCQUNqRSxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksS0FBSztvQkFDNUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7aUJBQ2pDO2FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdSZWxhdGVkRW50aXRpZXNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpOiB7IHByZXZpZXdzOiBJdGVtUHJldmlld0RhdGFbXSB9ID0+IHtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoO1xuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnY29uZmlnLWtleXMnKTtcbiAgICBjb25zdCB7IHRpdGxlIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdID0gZGF0YSA/IGRhdGEubWFwKChkKSA9PiAoe1xuICAgICAgdGl0bGU6IGQuZW50aXR5LmxhYmVsLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7ZC5lbnRpdHkuaWR9LyR7ZC5lbnRpdHkubGFiZWx9YCxcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiAoY29uZmlnS2V5c1tkLmVudGl0eS50eXBlT2ZFbnRpdHldKVxuICAgICAgICA/IGBpcy0ke2NvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XVsnY2xhc3MtbmFtZSddfWBcbiAgICAgICAgOiBudWxsLCAvLyBhZGRzIGNvbG9yIHRvIHRoZSB0aXRsZVxuICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgIGxhYmVsOiAnVGlwbyBkaSBlbnRpdMOgJyxcbiAgICAgICAgICB2YWx1ZTogKGNvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XSlcbiAgICAgICAgICAgID8gY29uZmlnS2V5c1tkLmVudGl0eS50eXBlT2ZFbnRpdHldLmxhYmVsXG4gICAgICAgICAgICA6IGQuZW50aXR5LnR5cGVPZkVudGl0eSxcbiAgICAgICAgfV0sXG4gICAgICB9XSxcbiAgICAgIC8vIEEgc3BlY2lhbCBraW5kIG9mIG1ldGFkYXRhLCBub3QgdG8gYmUgdmlld2VkIGFzIG90aGVyIG1ldGFkYXRhXG4gICAgICByZWxhdGlvbjoge1xuICAgICAgICBrZXk6IGQucmVsYXRpb25OYW1lIHx8IHRpdGxlLFxuICAgICAgICB2YWx1ZTogZC5lbnRpdHkucmVsYXRpb24gfHwgbnVsbFxuICAgICAgfSxcbiAgICB9KSkgOiBbXTtcbiAgICByZXR1cm4geyBwcmV2aWV3cyB9O1xuICB9O1xufVxuIl19