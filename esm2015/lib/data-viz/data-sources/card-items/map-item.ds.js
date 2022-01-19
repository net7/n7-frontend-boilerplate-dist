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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWl0ZW0uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2NhcmQtaXRlbXMvbWFwLWl0ZW0uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFL0IsTUFBTSxPQUFPLFNBQVUsU0FBUSxVQUFVO0lBTzdCLFNBQVMsQ0FBQyxJQUFlO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUF5QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixNQUFNLGFBQWEsR0FBcUIsS0FBSyxDQUFDO2dCQUM1QyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUM3QixVQUFVLEVBQUU7b0JBQ1Ysa0JBQWtCLEVBQUUsS0FBSztpQkFDMUI7Z0JBQ0QsVUFBVSxFQUFFLENBQUM7d0JBQ1gsR0FBRyxFQUFFLDhFQUE4RTt3QkFDbkYsT0FBTyxFQUFFLEVBQUU7cUJBQ1osQ0FBQztnQkFDRixXQUFXLEVBQUU7b0JBQ1gsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7YUFDWixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ1osYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDO2NBQ0wsSUFBSSxDQUFDLEVBQUU7O09BRWQsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEsIE1hcERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBJdGVtRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIGluc3RhbmNlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogQ2hhcnREYXRhKTogQ2hhcnREYXRhIHtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKG5ld0RhdGE6IFBhcnRpYWw8TWFwRGF0YT4pIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRhOiBQYXJ0aWFsPE1hcERhdGE+ID0gbWVyZ2Uoe1xyXG4gICAgICAgIGNvbnRhaW5lcklkOiBgbWFwLSR7dGhpcy5pZH1gLFxyXG4gICAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICAgIGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWxlTGF5ZXJzOiBbe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXHJcbiAgICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGluaXRpYWxWaWV3OiB7XHJcbiAgICAgICAgICBjZW50ZXI6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXJrZXJzOiBbXVxyXG4gICAgICB9LCBuZXdEYXRhKTtcclxuICAgICAgZm9ybWF0dGVkRGF0YS5fc2V0SW5zdGFuY2UgPSAobWFwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG1hcDtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5ydW4oZm9ybWF0dGVkRGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFxyXG4gICAgICAgIE1hcCAke3RoaXMuaWR9IGluc3RhbmNlIHVwZGF0ZSBpcyBkZWxlZ2F0ZWQgb24gcHJvamVjdC5cclxuICAgICAgICBUcnkgdXNpbmcgdGhlIGRhdGFzb3VyY2UgaW5zdGFuY2UgcHJvcGVydHkgKGRzLmluc3RhbmNlKVxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19