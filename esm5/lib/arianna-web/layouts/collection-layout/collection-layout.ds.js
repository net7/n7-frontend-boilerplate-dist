import { __extends, __read, __spread } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
import getCollection from './collection-mocks';
var AwCollectionLayoutDS = /** @class */ (function (_super) {
    __extends(AwCollectionLayoutDS, _super);
    function AwCollectionLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.innerTitleData = {
            title: { main: { text: 'Articoli recenti' } },
        };
        _this.pageSize = 6;
        _this.currentOffset = 0;
        return _this;
    }
    AwCollectionLayoutDS.prototype.onInit = function (payload) {
        var _this = this;
        this.communication = payload.communication;
        getCollection({ limit: this.pageSize, offset: this.currentOffset })
            .subscribe(function (d) {
            _this.currentOffset += _this.pageSize;
            _this.loadedCollections = new BehaviorSubject(d.results);
        });
    };
    AwCollectionLayoutDS.prototype.loadMore = function () {
        var _this = this;
        var collection = this.loadedCollections.getValue();
        getCollection({ limit: this.pageSize, offset: this.currentOffset }).subscribe(function (d) {
            _this.currentOffset += _this.pageSize;
            _this.loadedCollections.next(__spread(collection, d.results));
        });
    };
    return AwCollectionLayoutDS;
}(LayoutDataSource));
export { AwCollectionLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLGFBQWEsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQztJQUEwQyx3Q0FBZ0I7SUFBMUQ7UUFBQSxxRUE2QkM7UUExQkMsb0JBQWMsR0FBbUI7WUFDL0IsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEVBQUU7U0FDOUMsQ0FBQTtRQUVELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUFvQnBCLENBQUM7SUFoQkMscUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFPQztRQU5DLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDWCxLQUFJLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDOUUsS0FBSSxDQUFDLGFBQWEsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFVBQUssVUFBVSxFQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUE3QkQsQ0FBMEMsZ0JBQWdCLEdBNkJ6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyVGl0bGVEYXRhLCBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgZ2V0Q29sbGVjdGlvbiBmcm9tICcuL2NvbGxlY3Rpb24tbW9ja3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3Q29sbGVjdGlvbkxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uO1xyXG5cclxuICBpbm5lclRpdGxlRGF0YTogSW5uZXJUaXRsZURhdGEgPSB7XHJcbiAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICdBcnRpY29saSByZWNlbnRpJyB9IH0sXHJcbiAgfVxyXG5cclxuICBwYWdlU2l6ZSA9IDY7XHJcblxyXG4gIGN1cnJlbnRPZmZzZXQgPSAwO1xyXG5cclxuICBsb2FkZWRDb2xsZWN0aW9uczogQmVoYXZpb3JTdWJqZWN0PEl0ZW1QcmV2aWV3RGF0YVtdPjtcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIGdldENvbGxlY3Rpb24oeyBsaW1pdDogdGhpcy5wYWdlU2l6ZSwgb2Zmc2V0OiB0aGlzLmN1cnJlbnRPZmZzZXQgfSlcclxuICAgICAgLnN1YnNjcmliZSgoZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9mZnNldCArPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQ29sbGVjdGlvbnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGQucmVzdWx0cyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUoKSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5sb2FkZWRDb2xsZWN0aW9ucy5nZXRWYWx1ZSgpO1xyXG4gICAgZ2V0Q29sbGVjdGlvbih7IGxpbWl0OiB0aGlzLnBhZ2VTaXplLCBvZmZzZXQ6IHRoaXMuY3VycmVudE9mZnNldCB9KS5zdWJzY3JpYmUoKGQpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50T2Zmc2V0ICs9IHRoaXMucGFnZVNpemU7XHJcbiAgICAgIHRoaXMubG9hZGVkQ29sbGVjdGlvbnMubmV4dChbLi4uY29sbGVjdGlvbiwgLi4uZC5yZXN1bHRzXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19