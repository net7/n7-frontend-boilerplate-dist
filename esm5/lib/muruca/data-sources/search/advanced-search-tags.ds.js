import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrAdvancedSearchTagsDS = /** @class */ (function (_super) {
    __extends(MrAdvancedSearchTagsDS, _super);
    function MrAdvancedSearchTagsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrAdvancedSearchTagsDS.prototype.transform = function (data) {
        var labels = this.options.labels;
        return Object.keys(data).map(function (key) { return ({
            text: (labels[key] || key) + ": " + _t(data[key])
        }); });
    };
    return MrAdvancedSearchTagsDS;
}(DataSource));
export { MrAdvancedSearchTagsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvYWR2YW5jZWQtc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQ7SUFBNEMsMENBQVU7SUFBdEQ7O0lBT0EsQ0FBQztJQU5XLDBDQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLDRCQUFNLENBQWtCO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDO1lBQ3JDLElBQUksRUFBRSxDQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLFdBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRztTQUNoRCxDQUFDLEVBRm9DLENBRXBDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFQRCxDQUE0QyxVQUFVLEdBT3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBUYWdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xuICAgIGNvbnN0IHsgbGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgdGV4dDogYCR7bGFiZWxzW2tleV0gfHwga2V5fTogJHtfdChkYXRhW2tleV0pfWBcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==