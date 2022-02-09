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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWl0ZW0uZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9kYXRhLXNvdXJjZXMvY2FyZC1pdGVtcy9tYXAtaXRlbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUvQixNQUFNLE9BQU8sU0FBVSxTQUFRLFVBQVU7SUFPN0IsU0FBUyxDQUFDLElBQWU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQXlCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sYUFBYSxHQUFxQixLQUFLLENBQUM7Z0JBQzVDLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLFVBQVUsRUFBRTtvQkFDVixrQkFBa0IsRUFBRSxLQUFLO2lCQUMxQjtnQkFDRCxVQUFVLEVBQUUsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsOEVBQThFO3dCQUNuRixPQUFPLEVBQUUsRUFBRTtxQkFDWixDQUFDO2dCQUNGLFdBQVcsRUFBRTtvQkFDWCxNQUFNLEVBQUUsRUFBRTtpQkFDWDtnQkFDRCxPQUFPLEVBQUUsRUFBRTthQUNaLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDWixhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUM7Y0FDTCxJQUFJLENBQUMsRUFBRTs7T0FFZCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0RGF0YSwgTWFwRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcEl0ZW1EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHR5cGU6IHN0cmluZztcclxuXHJcbiAgaW5zdGFuY2U6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBDaGFydERhdGEpOiBDaGFydERhdGEge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmV3RGF0YTogUGFydGlhbDxNYXBEYXRhPikge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGE6IFBhcnRpYWw8TWFwRGF0YT4gPSBtZXJnZSh7XHJcbiAgICAgICAgY29udGFpbmVySWQ6IGBtYXAtJHt0aGlzLmlkfWAsXHJcbiAgICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgaW5pdGlhbFZpZXc6IHtcclxuICAgICAgICAgIGNlbnRlcjogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmtlcnM6IFtdXHJcbiAgICAgIH0sIG5ld0RhdGEpO1xyXG4gICAgICBmb3JtYXR0ZWREYXRhLl9zZXRJbnN0YW5jZSA9IChtYXApID0+IHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbWFwO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJ1bihmb3JtYXR0ZWREYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgXHJcbiAgICAgICAgTWFwICR7dGhpcy5pZH0gaW5zdGFuY2UgdXBkYXRlIGlzIGRlbGVnYXRlZCBvbiBwcm9qZWN0LlxyXG4gICAgICAgIFRyeSB1c2luZyB0aGUgZGF0YXNvdXJjZSBpbnN0YW5jZSBwcm9wZXJ0eSAoZHMuaW5zdGFuY2UpXHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=