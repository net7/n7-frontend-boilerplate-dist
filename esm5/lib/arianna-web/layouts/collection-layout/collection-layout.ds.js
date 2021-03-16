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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLGFBQWEsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQztJQUEwQyx3Q0FBZ0I7SUFBMUQ7UUFBQSxxRUE2QkM7UUExQkMsb0JBQWMsR0FBbUI7WUFDL0IsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEVBQUU7U0FDOUMsQ0FBQTtRQUVELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUFvQnBCLENBQUM7SUFoQkMscUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFPQztRQU5DLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDWCxLQUFJLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDOUUsS0FBSSxDQUFDLGFBQWEsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFVBQUssVUFBVSxFQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUE3QkQsQ0FBMEMsZ0JBQWdCLEdBNkJ6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyVGl0bGVEYXRhLCBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgZ2V0Q29sbGVjdGlvbiBmcm9tICcuL2NvbGxlY3Rpb24tbW9ja3MnO1xuXG5leHBvcnQgY2xhc3MgQXdDb2xsZWN0aW9uTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uO1xuXG4gIGlubmVyVGl0bGVEYXRhOiBJbm5lclRpdGxlRGF0YSA9IHtcbiAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICdBcnRpY29saSByZWNlbnRpJyB9IH0sXG4gIH1cblxuICBwYWdlU2l6ZSA9IDY7XG5cbiAgY3VycmVudE9mZnNldCA9IDA7XG5cbiAgbG9hZGVkQ29sbGVjdGlvbnM6IEJlaGF2aW9yU3ViamVjdDxJdGVtUHJldmlld0RhdGFbXT47XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gICAgZ2V0Q29sbGVjdGlvbih7IGxpbWl0OiB0aGlzLnBhZ2VTaXplLCBvZmZzZXQ6IHRoaXMuY3VycmVudE9mZnNldCB9KVxuICAgICAgLnN1YnNjcmliZSgoZCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgKz0gdGhpcy5wYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5sb2FkZWRDb2xsZWN0aW9ucyA9IG5ldyBCZWhhdmlvclN1YmplY3QoZC5yZXN1bHRzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9hZE1vcmUoKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMubG9hZGVkQ29sbGVjdGlvbnMuZ2V0VmFsdWUoKTtcbiAgICBnZXRDb2xsZWN0aW9uKHsgbGltaXQ6IHRoaXMucGFnZVNpemUsIG9mZnNldDogdGhpcy5jdXJyZW50T2Zmc2V0IH0pLnN1YnNjcmliZSgoZCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50T2Zmc2V0ICs9IHRoaXMucGFnZVNpemU7XG4gICAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLm5leHQoWy4uLmNvbGxlY3Rpb24sIC4uLmQucmVzdWx0c10pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=