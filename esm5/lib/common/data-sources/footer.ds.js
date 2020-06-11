import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var FooterDS = /** @class */ (function (_super) {
    __extends(FooterDS, _super);
    function FooterDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterDS.prototype.transform = function (data) {
        if (!data) {
            return null;
        }
        return data.items;
    };
    return FooterDS;
}(DataSource));
export { FooterDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvZm9vdGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBOEIsNEJBQVU7SUFBeEM7O0lBT0EsQ0FBQztJQU5XLDRCQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBOEIsVUFBVSxHQU92QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBhbnkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLml0ZW1zO1xuICB9XG59XG4iXX0=