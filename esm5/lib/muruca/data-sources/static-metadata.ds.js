import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
import dateHelper from '../helpers/date-helper';
var MrStaticMetadataDS = /** @class */ (function (_super) {
    __extends(MrStaticMetadataDS, _super);
    function MrStaticMetadataDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrStaticMetadataDS.prototype.transform = function (data) {
        var items = ['authors', 'date', 'time_to_read']
            .filter(function (metakey) { return data[metakey]; })
            .map(function (metakey) {
            var itemValue = metakey === 'date' ? dateHelper.format(data[metakey], _t('global#date_human')) : data[metakey];
            return {
                label: _t("resource#" + metakey),
                value: itemValue
            };
        });
        return { group: [{ items: items }] };
    };
    return MrStaticMetadataDS;
}(DataSource));
export { MrStaticMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvc3RhdGljLW1ldGFkYXRhLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sVUFBVSxNQUFNLHdCQUF3QixDQUFDO0FBRWhEO0lBQXdDLHNDQUFVO0lBQWxEOztJQWNBLENBQUM7SUFiVyxzQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQU0sS0FBSyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUM7YUFDOUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFiLENBQWEsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQyxPQUFPO1lBQ1gsSUFBTSxTQUFTLEdBQUcsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pILE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFZLE9BQVMsQ0FBQztnQkFDaEMsS0FBSyxFQUFFLFNBQVM7YUFDakIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUwsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWRELENBQXdDLFVBQVUsR0FjakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IGRhdGVIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9kYXRlLWhlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTdGF0aWNNZXRhZGF0YURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBbJ2F1dGhvcnMnLCAnZGF0ZScsICd0aW1lX3RvX3JlYWQnXVxyXG4gICAgICAuZmlsdGVyKChtZXRha2V5KSA9PiBkYXRhW21ldGFrZXldKVxyXG4gICAgICAubWFwKChtZXRha2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gbWV0YWtleSA9PT0gJ2RhdGUnID8gZGF0ZUhlbHBlci5mb3JtYXQoZGF0YVttZXRha2V5XSwgX3QoJ2dsb2JhbCNkYXRlX2h1bWFuJykpIDogZGF0YVttZXRha2V5XTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGFiZWw6IF90KGByZXNvdXJjZSMke21ldGFrZXl9YCksXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbVZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZ3JvdXA6IFt7IGl0ZW1zIH1dIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==