import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { merge } from 'lodash';
var MapItemDS = /** @class */ (function (_super) {
    __extends(MapItemDS, _super);
    function MapItemDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapItemDS.prototype.transform = function (data) {
        return data;
    };
    MapItemDS.prototype.update = function (newData) {
        var _this = this;
        if (!this.instance) {
            var formattedData = merge({
                containerId: "map-" + this.id,
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
            formattedData._setInstance = function (map) {
                _this.instance = map;
            };
            this.run(formattedData);
        }
        else {
            console.warn("\n        Map " + this.id + " instance update is delegated on project.\n        Try using the datasource instance property (ds.instance)\n      ");
        }
    };
    return MapItemDS;
}(DataSource));
export { MapItemDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWl0ZW0uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2NhcmQtaXRlbXMvbWFwLWl0ZW0uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9CO0lBQStCLDZCQUFVO0lBQXpDOztJQXNDQSxDQUFDO0lBL0JXLDZCQUFTLEdBQW5CLFVBQW9CLElBQWU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLE9BQXlCO1FBQWhDLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFNLGFBQWEsR0FBcUIsS0FBSyxDQUFDO2dCQUM1QyxXQUFXLEVBQUUsU0FBTyxJQUFJLENBQUMsRUFBSTtnQkFDN0IsVUFBVSxFQUFFO29CQUNWLGtCQUFrQixFQUFFLEtBQUs7aUJBQzFCO2dCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNYLEdBQUcsRUFBRSw4RUFBOEU7d0JBQ25GLE9BQU8sRUFBRSxFQUFFO3FCQUNaLENBQUM7Z0JBQ0YsV0FBVyxFQUFFO29CQUNYLE1BQU0sRUFBRSxFQUFFO2lCQUNYO2dCQUNELE9BQU8sRUFBRSxFQUFFO2FBQ1osRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNaLGFBQWEsQ0FBQyxZQUFZLEdBQUcsVUFBQyxHQUFHO2dCQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUNMLElBQUksQ0FBQyxFQUFFLHdIQUVkLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUErQixVQUFVLEdBc0N4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0RGF0YSwgTWFwRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcEl0ZW1EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHR5cGU6IHN0cmluZztcclxuXHJcbiAgaW5zdGFuY2U6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBDaGFydERhdGEpOiBDaGFydERhdGEge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmV3RGF0YTogUGFydGlhbDxNYXBEYXRhPikge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGE6IFBhcnRpYWw8TWFwRGF0YT4gPSBtZXJnZSh7XHJcbiAgICAgICAgY29udGFpbmVySWQ6IGBtYXAtJHt0aGlzLmlkfWAsXHJcbiAgICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgaW5pdGlhbFZpZXc6IHtcclxuICAgICAgICAgIGNlbnRlcjogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmtlcnM6IFtdXHJcbiAgICAgIH0sIG5ld0RhdGEpO1xyXG4gICAgICBmb3JtYXR0ZWREYXRhLl9zZXRJbnN0YW5jZSA9IChtYXApID0+IHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbWFwO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJ1bihmb3JtYXR0ZWREYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgXHJcbiAgICAgICAgTWFwICR7dGhpcy5pZH0gaW5zdGFuY2UgdXBkYXRlIGlzIGRlbGVnYXRlZCBvbiBwcm9qZWN0LlxyXG4gICAgICAgIFRyeSB1c2luZyB0aGUgZGF0YXNvdXJjZSBpbnN0YW5jZSBwcm9wZXJ0eSAoZHMuaW5zdGFuY2UpXHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=