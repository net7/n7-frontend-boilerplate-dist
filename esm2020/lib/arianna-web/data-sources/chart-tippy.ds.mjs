import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwChartTippyDS extends DataSource {
    transform(data) {
        // ====== DATA ======
        const { bubbles, selected } = data;
        const { basePath, selectable } = this.options;
        // ==================
        const templates = bubbles.map((b) => {
            const { count, entity } = b;
            const { id, label, relation, relationName } = entity;
            return {
                id,
                selectable,
                title: label,
                text: `È collegato a ${count} risultati`,
                isSelected: selected.includes(id),
                anchorData: {
                    href: `${basePath}${id}/${helpers.slugify(label)}`,
                },
                relation: {
                    key: relationName,
                    value: relation,
                }
            };
        });
        return templates;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvY2hhcnQtdGlwcHkuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTtJQUNsQyxTQUFTLENBQUMsSUFBSTtRQUN0QixxQkFBcUI7UUFDckIsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDbkMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlDLHFCQUFxQjtRQUNyQixNQUFNLFNBQVMsR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDekMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUIsTUFBTSxFQUNKLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFDbEMsR0FBRyxNQUFNLENBQUM7WUFDWCxPQUFPO2dCQUNMLEVBQUU7Z0JBQ0YsVUFBVTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsaUJBQWlCLEtBQUssWUFBWTtnQkFDeEMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2lCQUNuRDtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLEtBQUssRUFBRSxRQUFRO2lCQUNoQjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgLy8gPT09PT09IERBVEEgPT09PT09XHJcbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCB0ZW1wbGF0ZXM6IGFueVtdID0gYnViYmxlcy5tYXAoKGIpID0+IHtcclxuICAgICAgY29uc3QgeyBjb3VudCwgZW50aXR5IH0gPSBiO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgaWQsIGxhYmVsLCByZWxhdGlvbiwgcmVsYXRpb25OYW1lXHJcbiAgICAgIH0gPSBlbnRpdHk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgc2VsZWN0YWJsZSxcclxuICAgICAgICB0aXRsZTogbGFiZWwsXHJcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IHJpc3VsdGF0aWAsXHJcbiAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLFxyXG4gICAgICAgIGFuY2hvckRhdGE6IHtcclxuICAgICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVsYXRpb246IHtcclxuICAgICAgICAgIGtleTogcmVsYXRpb25OYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHJlbGF0aW9uLFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlcztcclxuICB9XHJcbn1cclxuIl19