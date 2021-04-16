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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvYWR2YW5jZWQtc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQ7SUFBNEMsMENBQVU7SUFBdEQ7O0lBT0EsQ0FBQztJQU5XLDBDQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLDRCQUFNLENBQWtCO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDO1lBQ3JDLElBQUksRUFBRSxDQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLFdBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRztTQUNoRCxDQUFDLEVBRm9DLENBRXBDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFQRCxDQUE0QyxVQUFVLEdBT3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IFRhZ0RhdGFbXSB7XHJcbiAgICBjb25zdCB7IGxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICB0ZXh0OiBgJHtsYWJlbHNba2V5XSB8fCBrZXl9OiAke190KGRhdGFba2V5XSl9YFxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=