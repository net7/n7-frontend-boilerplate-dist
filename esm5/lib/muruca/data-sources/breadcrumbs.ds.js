import { __extends, __read, __spread } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrBreadcrumbsDS = /** @class */ (function (_super) {
    __extends(MrBreadcrumbsDS, _super);
    function MrBreadcrumbsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrBreadcrumbsDS.prototype.transform = function (data) {
        if (!data)
            return null;
        var items = [];
        if (Array.isArray(data) && data.length) {
            var base = (this.options || {}).base;
            base = Array.isArray(base) ? base : [];
            items = __spread(base.map(function (_a) {
                var link = _a.link, title = _a.title;
                return ({
                    label: _t(title),
                    anchor: { href: link }
                });
            }), data.map(function (_a) {
                var link = _a.link, title = _a.title;
                return ({
                    label: title,
                    anchor: { href: link }
                });
            }));
        }
        // remove last link
        if (items.length) {
            items[items.length - 1].anchor = null;
        }
        return { items: items };
    };
    return MrBreadcrumbsDS;
}(DataSource));
export { MrBreadcrumbsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRDtJQUFxQyxtQ0FBVTtJQUEvQzs7SUF5QkEsQ0FBQztJQXhCVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBQSxnQ0FBSSxDQUF3QjtZQUNsQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkMsS0FBSyxZQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFBTyxPQUFBLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2lCQUN2QixDQUFDO1lBSCtCLENBRy9CLENBQUMsRUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxDQUFDO29CQUNoQyxLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2lCQUN2QixDQUFDO1lBSCtCLENBRy9CLENBQUMsQ0FDSixDQUFDO1NBQ0g7UUFFRCxtQkFBbUI7UUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkM7UUFDRCxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBekJELENBQXFDLFVBQVUsR0F5QjlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1ic0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBNckJyZWFkY3J1bWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBCcmVhZGNydW1ic0RhdGEge1xuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGl0ZW1zID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIGxldCB7IGJhc2UgfSA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICAgIGJhc2UgPSBBcnJheS5pc0FycmF5KGJhc2UpID8gYmFzZSA6IFtdO1xuICAgICAgaXRlbXMgPSBbXG4gICAgICAgIC4uLmJhc2UubWFwKCh7IGxpbmssIHRpdGxlIH0pID0+ICh7XG4gICAgICAgICAgbGFiZWw6IF90KHRpdGxlKSxcbiAgICAgICAgICBhbmNob3I6IHsgaHJlZjogbGluayB9XG4gICAgICAgIH0pKSxcbiAgICAgICAgLi4uZGF0YS5tYXAoKHsgbGluaywgdGl0bGUgfSkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogdGl0bGUsXG4gICAgICAgICAgYW5jaG9yOiB7IGhyZWY6IGxpbmsgfVxuICAgICAgICB9KSlcbiAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGxhc3QgbGlua1xuICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmFuY2hvciA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7IGl0ZW1zIH07XG4gIH1cbn1cbiJdfQ==