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
                text: `È collegato a ${count} oggetti culturali`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7SUFDbEMsU0FBUyxDQUFDLElBQUk7UUFDdEIscUJBQXFCO1FBQ3JCLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ25DLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5QyxxQkFBcUI7UUFDckIsTUFBTSxTQUFTLEdBQVUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3pDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sRUFDSixFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQ2xDLEdBQUcsTUFBTSxDQUFDO1lBQ1gsT0FBTztnQkFDTCxFQUFFO2dCQUNGLFVBQVU7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLGlCQUFpQixLQUFLLG9CQUFvQjtnQkFDaEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2lCQUNuRDtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLEtBQUssRUFBRSxRQUFRO2lCQUNoQjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgLy8gPT09PT09IERBVEEgPT09PT09XHJcbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCB0ZW1wbGF0ZXM6IGFueVtdID0gYnViYmxlcy5tYXAoKGIpID0+IHtcclxuICAgICAgY29uc3QgeyBjb3VudCwgZW50aXR5IH0gPSBiO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgaWQsIGxhYmVsLCByZWxhdGlvbiwgcmVsYXRpb25OYW1lXHJcbiAgICAgIH0gPSBlbnRpdHk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgc2VsZWN0YWJsZSxcclxuICAgICAgICB0aXRsZTogbGFiZWwsXHJcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IG9nZ2V0dGkgY3VsdHVyYWxpYCxcclxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXHJcbiAgICAgICAgYW5jaG9yRGF0YToge1xyXG4gICAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWxhdGlvbjoge1xyXG4gICAgICAgICAga2V5OiByZWxhdGlvbk5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogcmVsYXRpb24sXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xyXG4gIH1cclxufVxyXG4iXX0=