import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var FacetsDS = /** @class */ (function (_super) {
    __extends(FacetsDS, _super);
    function FacetsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetsDS.prototype.transform = function (_a) {
        var fields = _a.fields;
        var searchModel = this.options.searchModel;
        this.searchModel = searchModel;
        return fields;
    };
    return FacetsDS;
}(DataSource));
export { FacetsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvZmFjZXRzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBOEIsNEJBQVU7SUFBeEM7O0lBU0EsQ0FBQztJQU5XLDRCQUFTLEdBQW5CLFVBQW9CLEVBQVU7WUFBUixrQkFBTTtRQUNsQixJQUFBLHNDQUFXLENBQWtCO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRS9CLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVRELENBQThCLFVBQVUsR0FTdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIHNlYXJjaE1vZGVsOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBmaWVsZHMgfSkge1xyXG4gICAgY29uc3QgeyBzZWFyY2hNb2RlbCB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHNlYXJjaE1vZGVsO1xyXG5cclxuICAgIHJldHVybiBmaWVsZHM7XHJcbiAgfVxyXG59XHJcbiJdfQ==