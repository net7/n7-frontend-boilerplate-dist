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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC1jaGFydC1pdGVtLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9jYXJkLWl0ZW1zL2FwZXgtY2hhcnQtaXRlbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzdELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFPbkMsU0FBUyxDQUFDLElBQWU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQTBCO1FBQy9CLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDMUMsSUFBSSxFQUFFLE9BQU87WUFDYixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNMLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgYXBleEhhbmRsZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBleC9hcGV4LWhhbmRsZXInO1xyXG5pbXBvcnQgeyBDaGFydFJlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzL3Jlc3BvbnNlLnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGV4Q2hhcnRJdGVtRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIGluc3RhbmNlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogQ2hhcnREYXRhKTogQ2hhcnREYXRhIHtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKG5ld0RhdGE6IENoYXJ0UmVzcG9uc2VEYXRhKSB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gYXBleEhhbmRsZXIudHJhbnNmb3JtKHtcclxuICAgICAgZGF0YTogbmV3RGF0YSxcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAvLyBsaWIgYXBpIHVwZGF0ZVxyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZU9wdGlvbnMoZm9ybWF0dGVkRGF0YS5saWJPcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1hdHRlZERhdGEuc2V0Q2hhcnQgPSAoY2hhcnQpID0+IHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gY2hhcnQ7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucnVuKGZvcm1hdHRlZERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=