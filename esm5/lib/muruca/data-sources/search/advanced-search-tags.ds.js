import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrAdvancedSearchTagsDS = /** @class */ (function (_super) {
    __extends(MrAdvancedSearchTagsDS, _super);
    function MrAdvancedSearchTagsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrAdvancedSearchTagsDS.prototype.transform = function (data) {
        var labels = this.options.labels;
        return Object.keys(data).map(function (key) { return ({
            text: (labels[key] || key) + ": " + data[key]
        }); });
    };
    return MrAdvancedSearchTagsDS;
}(DataSource));
export { MrAdvancedSearchTagsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvYWR2YW5jZWQtc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUE0QywwQ0FBVTtJQUF0RDs7SUFPQSxDQUFDO0lBTlcsMENBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsNEJBQU0sQ0FBa0I7UUFDaEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUM7WUFDckMsSUFBSSxFQUFFLENBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFHO1NBQzVDLENBQUMsRUFGb0MsQ0FFcEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQVBELENBQTRDLFVBQVUsR0FPckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgVGFnRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRTZWFyY2hUYWdzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogVGFnRGF0YVtdIHtcbiAgICBjb25zdCB7IGxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4gKHtcbiAgICAgIHRleHQ6IGAke2xhYmVsc1trZXldIHx8IGtleX06ICR7ZGF0YVtrZXldfWBcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==