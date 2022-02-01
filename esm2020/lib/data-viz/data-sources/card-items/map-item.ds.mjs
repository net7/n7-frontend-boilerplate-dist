import { DataSource } from '@n7-frontend/core';
import { merge } from 'lodash';
export class MapItemDS extends DataSource {
    transform(data) {
        return data;
    }
    update(newData) {
        if (!this.instance) {
            const formattedData = merge({
                containerId: `map-${this.id}`,
                libOptions: {
                    attributionControl: false,
                },
                tileLayers: [{
                        url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                        options: {}
                    }],
                initialView: {
                    center: []
                },
                markers: []
            }, newData);
            formattedData._setInstance = (map) => {
                this.instance = map;
            };
            this.run(formattedData);
        }
        else {
            console.warn(`
        Map ${this.id} instance update is delegated on project.
        Try using the datasource instance property (ds.instance)
      `);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWl0ZW0uZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9kYXRhLXNvdXJjZXMvY2FyZC1pdGVtcy9tYXAtaXRlbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUvQixNQUFNLE9BQU8sU0FBVSxTQUFRLFVBQVU7SUFPN0IsU0FBUyxDQUFDLElBQWU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQXlCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sYUFBYSxHQUFxQixLQUFLLENBQUM7Z0JBQzVDLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLFVBQVUsRUFBRTtvQkFDVixrQkFBa0IsRUFBRSxLQUFLO2lCQUMxQjtnQkFDRCxVQUFVLEVBQUUsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsOEVBQThFO3dCQUNuRixPQUFPLEVBQUUsRUFBRTtxQkFDWixDQUFDO2dCQUNGLFdBQVcsRUFBRTtvQkFDWCxNQUFNLEVBQUUsRUFBRTtpQkFDWDtnQkFDRCxPQUFPLEVBQUUsRUFBRTthQUNaLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDWixhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUM7Y0FDTCxJQUFJLENBQUMsRUFBRTs7T0FFZCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0RGF0YSwgTWFwRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBNYXBJdGVtRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB0eXBlOiBzdHJpbmc7XG5cbiAgaW5zdGFuY2U6IGFueTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IENoYXJ0RGF0YSk6IENoYXJ0RGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB1cGRhdGUobmV3RGF0YTogUGFydGlhbDxNYXBEYXRhPikge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YTogUGFydGlhbDxNYXBEYXRhPiA9IG1lcmdlKHtcbiAgICAgICAgY29udGFpbmVySWQ6IGBtYXAtJHt0aGlzLmlkfWAsXG4gICAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0aWxlTGF5ZXJzOiBbe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgICAgIG9wdGlvbnM6IHt9XG4gICAgICAgIH1dLFxuICAgICAgICBpbml0aWFsVmlldzoge1xuICAgICAgICAgIGNlbnRlcjogW11cbiAgICAgICAgfSxcbiAgICAgICAgbWFya2VyczogW11cbiAgICAgIH0sIG5ld0RhdGEpO1xuICAgICAgZm9ybWF0dGVkRGF0YS5fc2V0SW5zdGFuY2UgPSAobWFwKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBtYXA7XG4gICAgICB9O1xuICAgICAgdGhpcy5ydW4oZm9ybWF0dGVkRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihgXG4gICAgICAgIE1hcCAke3RoaXMuaWR9IGluc3RhbmNlIHVwZGF0ZSBpcyBkZWxlZ2F0ZWQgb24gcHJvamVjdC5cbiAgICAgICAgVHJ5IHVzaW5nIHRoZSBkYXRhc291cmNlIGluc3RhbmNlIHByb3BlcnR5IChkcy5pbnN0YW5jZSlcbiAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19