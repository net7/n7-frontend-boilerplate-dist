import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaMetadataDS = /** @class */ (function (_super) {
    __extends(AwSchedaMetadataDS, _super);
    function AwSchedaMetadataDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaMetadataDS.prototype.transform = function (data) {
        return {
            group: [{
                    items: data || []
                }]
        };
    };
    return AwSchedaMetadataDS;
}(DataSource));
export { AwSchedaMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF3QyxzQ0FBVTtJQUFsRDs7SUFRQSxDQUFDO0lBUFcsc0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ04sS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFO2lCQUNsQixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFSRCxDQUF3QyxVQUFVLEdBUWpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYU1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyb3VwOiBbe1xyXG4gICAgICAgIGl0ZW1zOiBkYXRhIHx8IFtdXHJcbiAgICAgIH1dXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=