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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWl0ZW0uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2NhcmQtaXRlbXMvbWFwLWl0ZW0uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9CO0lBQStCLDZCQUFVO0lBQXpDOztJQXNDQSxDQUFDO0lBL0JXLDZCQUFTLEdBQW5CLFVBQW9CLElBQWU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLE9BQXlCO1FBQWhDLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFNLGFBQWEsR0FBcUIsS0FBSyxDQUFDO2dCQUM1QyxXQUFXLEVBQUUsU0FBTyxJQUFJLENBQUMsRUFBSTtnQkFDN0IsVUFBVSxFQUFFO29CQUNWLGtCQUFrQixFQUFFLEtBQUs7aUJBQzFCO2dCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNYLEdBQUcsRUFBRSw4RUFBOEU7d0JBQ25GLE9BQU8sRUFBRSxFQUFFO3FCQUNaLENBQUM7Z0JBQ0YsV0FBVyxFQUFFO29CQUNYLE1BQU0sRUFBRSxFQUFFO2lCQUNYO2dCQUNELE9BQU8sRUFBRSxFQUFFO2FBQ1osRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNaLGFBQWEsQ0FBQyxZQUFZLEdBQUcsVUFBQyxHQUFHO2dCQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUNMLElBQUksQ0FBQyxFQUFFLHdIQUVkLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUErQixVQUFVLEdBc0N4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0RGF0YSwgTWFwRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBNYXBJdGVtRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB0eXBlOiBzdHJpbmc7XG5cbiAgaW5zdGFuY2U6IGFueTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IENoYXJ0RGF0YSk6IENoYXJ0RGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB1cGRhdGUobmV3RGF0YTogUGFydGlhbDxNYXBEYXRhPikge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YTogUGFydGlhbDxNYXBEYXRhPiA9IG1lcmdlKHtcbiAgICAgICAgY29udGFpbmVySWQ6IGBtYXAtJHt0aGlzLmlkfWAsXG4gICAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0aWxlTGF5ZXJzOiBbe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgICAgIG9wdGlvbnM6IHt9XG4gICAgICAgIH1dLFxuICAgICAgICBpbml0aWFsVmlldzoge1xuICAgICAgICAgIGNlbnRlcjogW11cbiAgICAgICAgfSxcbiAgICAgICAgbWFya2VyczogW11cbiAgICAgIH0sIG5ld0RhdGEpO1xuICAgICAgZm9ybWF0dGVkRGF0YS5fc2V0SW5zdGFuY2UgPSAobWFwKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBtYXA7XG4gICAgICB9O1xuICAgICAgdGhpcy5ydW4oZm9ybWF0dGVkRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihgXG4gICAgICAgIE1hcCAke3RoaXMuaWR9IGluc3RhbmNlIHVwZGF0ZSBpcyBkZWxlZ2F0ZWQgb24gcHJvamVjdC5cbiAgICAgICAgVHJ5IHVzaW5nIHRoZSBkYXRhc291cmNlIGluc3RhbmNlIHByb3BlcnR5IChkcy5pbnN0YW5jZSlcbiAgICAgIGApO1xuICAgIH1cbiAgfVxufVxuIl19