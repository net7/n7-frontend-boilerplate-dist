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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9yZWxhdGVkLWVudGl0aWVzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVTtJQUFuRDs7UUFDWSxjQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQW1DLEVBQUU7WUFDOUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNqRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0IsTUFBTSxRQUFRLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtpQkFDcEQ7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFDLENBQUMsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUN6RCxDQUFDLENBQUMsSUFBSTtnQkFDUixRQUFRLEVBQUUsQ0FBQzt3QkFDVCxLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsZ0JBQWdCO2dDQUN2QixLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQ0FDeEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUs7b0NBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7NkJBQzFCLENBQUM7cUJBQ0gsQ0FBQztnQkFDRixpRUFBaUU7Z0JBQ2pFLFFBQVEsRUFBRTtvQkFDUixHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxLQUFLO29CQUM1QixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSTtpQkFDakM7YUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1JlbGF0ZWRFbnRpdGllc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKTogeyBwcmV2aWV3czogSXRlbVByZXZpZXdEYXRhW10gfSA9PiB7XHJcbiAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoO1xyXG4gICAgY29uc3QgY29uZmlnS2V5cyA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdjb25maWcta2V5cycpO1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdID0gZGF0YSA/IGRhdGEubWFwKChkKSA9PiAoe1xyXG4gICAgICB0aXRsZTogZC5lbnRpdHkubGFiZWwsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7ZC5lbnRpdHkuaWR9LyR7ZC5lbnRpdHkubGFiZWx9YCxcclxuICAgICAgfSxcclxuICAgICAgY2xhc3NlczogKGNvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XSlcclxuICAgICAgICA/IGBpcy0ke2NvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XVsnY2xhc3MtbmFtZSddfWBcclxuICAgICAgICA6IG51bGwsIC8vIGFkZHMgY29sb3IgdG8gdGhlIHRpdGxlXHJcbiAgICAgIG1ldGFkYXRhOiBbe1xyXG4gICAgICAgIGl0ZW1zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdUaXBvIGRpIGVudGl0w6AnLFxyXG4gICAgICAgICAgdmFsdWU6IChjb25maWdLZXlzW2QuZW50aXR5LnR5cGVPZkVudGl0eV0pXHJcbiAgICAgICAgICAgID8gY29uZmlnS2V5c1tkLmVudGl0eS50eXBlT2ZFbnRpdHldLmxhYmVsXHJcbiAgICAgICAgICAgIDogZC5lbnRpdHkudHlwZU9mRW50aXR5LFxyXG4gICAgICAgIH1dLFxyXG4gICAgICB9XSxcclxuICAgICAgLy8gQSBzcGVjaWFsIGtpbmQgb2YgbWV0YWRhdGEsIG5vdCB0byBiZSB2aWV3ZWQgYXMgb3RoZXIgbWV0YWRhdGFcclxuICAgICAgcmVsYXRpb246IHtcclxuICAgICAgICBrZXk6IGQucmVsYXRpb25OYW1lIHx8IHRpdGxlLFxyXG4gICAgICAgIHZhbHVlOiBkLmVudGl0eS5yZWxhdGlvbiB8fCBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9KSkgOiBbXTtcclxuICAgIHJldHVybiB7IHByZXZpZXdzIH07XHJcbiAgfTtcclxufVxyXG4iXX0=