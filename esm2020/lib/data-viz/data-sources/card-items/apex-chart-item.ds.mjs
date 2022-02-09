import { DataSource } from '@n7-frontend/core';
import { apexHandler } from '../../models/apex/apex-handler';
export class ApexChartItemDS extends DataSource {
    transform(data) {
        return data;
    }
    update(newData) {
        const formattedData = apexHandler.transform({
            data: newData,
            id: this.id,
            type: this.type,
            options: this.options,
        });
        if (this.instance) {
            // lib api update
            this.instance.updateOptions(formattedData.libOptions);
        }
        else {
            formattedData.setChart = (chart) => {
                this.instance = chart;
            };
            this.run(formattedData);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC1jaGFydC1pdGVtLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2NhcmQtaXRlbXMvYXBleC1jaGFydC1pdGVtLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQU9uQyxTQUFTLENBQUMsSUFBZTtRQUNqQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMEI7UUFDL0IsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsT0FBTztZQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2RDthQUFNO1lBQ0wsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBhcGV4SGFuZGxlciB9IGZyb20gJy4uLy4uL21vZGVscy9hcGV4L2FwZXgtaGFuZGxlcic7XHJcbmltcG9ydCB7IENoYXJ0UmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMvcmVzcG9uc2UudHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwZXhDaGFydEl0ZW1EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHR5cGU6IHN0cmluZztcclxuXHJcbiAgaW5zdGFuY2U6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBDaGFydERhdGEpOiBDaGFydERhdGEge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmV3RGF0YTogQ2hhcnRSZXNwb25zZURhdGEpIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBhcGV4SGFuZGxlci50cmFuc2Zvcm0oe1xyXG4gICAgICBkYXRhOiBuZXdEYXRhLFxyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIC8vIGxpYiBhcGkgdXBkYXRlXHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlT3B0aW9ucyhmb3JtYXR0ZWREYXRhLmxpYk9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybWF0dGVkRGF0YS5zZXRDaGFydCA9IChjaGFydCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBjaGFydDtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5ydW4oZm9ybWF0dGVkRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==