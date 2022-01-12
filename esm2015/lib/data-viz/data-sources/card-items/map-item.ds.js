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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWl0ZW0uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2NhcmQtaXRlbXMvbWFwLWl0ZW0uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFL0IsTUFBTSxPQUFPLFNBQVUsU0FBUSxVQUFVO0lBTzdCLFNBQVMsQ0FBQyxJQUFlO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUF5QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixNQUFNLGFBQWEsR0FBcUIsS0FBSyxDQUFDO2dCQUM1QyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUM3QixVQUFVLEVBQUU7b0JBQ1Ysa0JBQWtCLEVBQUUsS0FBSztpQkFDMUI7Z0JBQ0QsVUFBVSxFQUFFLENBQUM7d0JBQ1gsR0FBRyxFQUFFLDhFQUE4RTt3QkFDbkYsT0FBTyxFQUFFLEVBQUU7cUJBQ1osQ0FBQztnQkFDRixXQUFXLEVBQUU7b0JBQ1gsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7YUFDWixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ1osYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDO2NBQ0wsSUFBSSxDQUFDLEVBQUU7O09BRWQsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEsIE1hcERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgTWFwSXRlbURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdHlwZTogc3RyaW5nO1xuXG4gIGluc3RhbmNlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBDaGFydERhdGEpOiBDaGFydERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdXBkYXRlKG5ld0RhdGE6IFBhcnRpYWw8TWFwRGF0YT4pIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGE6IFBhcnRpYWw8TWFwRGF0YT4gPSBtZXJnZSh7XG4gICAgICAgIGNvbnRhaW5lcklkOiBgbWFwLSR7dGhpcy5pZH1gLFxuICAgICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGlsZUxheWVyczogW3tcbiAgICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICB9XSxcbiAgICAgICAgaW5pdGlhbFZpZXc6IHtcbiAgICAgICAgICBjZW50ZXI6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIG1hcmtlcnM6IFtdXG4gICAgICB9LCBuZXdEYXRhKTtcbiAgICAgIGZvcm1hdHRlZERhdGEuX3NldEluc3RhbmNlID0gKG1hcCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gbWFwO1xuICAgICAgfTtcbiAgICAgIHRoaXMucnVuKGZvcm1hdHRlZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oYFxuICAgICAgICBNYXAgJHt0aGlzLmlkfSBpbnN0YW5jZSB1cGRhdGUgaXMgZGVsZWdhdGVkIG9uIHByb2plY3QuXG4gICAgICAgIFRyeSB1c2luZyB0aGUgZGF0YXNvdXJjZSBpbnN0YW5jZSBwcm9wZXJ0eSAoZHMuaW5zdGFuY2UpXG4gICAgICBgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==