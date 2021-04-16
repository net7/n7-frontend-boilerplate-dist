import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
export var LayoutState;
(function (LayoutState) {
    LayoutState["IDLE"] = "IDLE";
    LayoutState["LOADING"] = "LOADING";
    LayoutState["SUCCESS"] = "SUCCESS";
    LayoutState["EMPTY"] = "EMPTY";
    LayoutState["ERROR"] = "ERROR";
})(LayoutState || (LayoutState = {}));
var MrLayoutStateService = /** @class */ (function () {
    function MrLayoutStateService() {
        this.stateContainers = {};
    }
    MrLayoutStateService.prototype.add = function (id) {
        var _this = this;
        var ids = Array.isArray(id) ? id : [id];
        ids.forEach(function (key) {
            _this.stateContainers[key] = new ReplaySubject();
            // initial state
            _this.stateContainers[key].next(LayoutState.IDLE);
        });
    };
    MrLayoutStateService.prototype.get$ = function (id) {
        if (!this.stateContainers[id]) {
            throw Error("Layout state id '" + id + "' does not exists");
        }
        return this.stateContainers[id];
    };
    MrLayoutStateService.prototype.set = function (id, newState) {
        if (!this.stateContainers[id]) {
            throw Error("Layout state id '" + id + "' does not exists");
        }
        this.stateContainers[id].next(newState);
    };
    MrLayoutStateService = __decorate([
        Injectable()
    ], MrLayoutStateService);
    return MrLayoutStateService;
}());
export { MrLayoutStateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsTUFBTSxDQUFOLElBQVksV0FNWDtBQU5ELFdBQVksV0FBVztJQUNyQiw0QkFBYSxDQUFBO0lBQ2Isa0NBQW1CLENBQUE7SUFDbkIsa0NBQW1CLENBQUE7SUFDbkIsOEJBQWUsQ0FBQTtJQUNmLDhCQUFlLENBQUE7QUFDakIsQ0FBQyxFQU5XLFdBQVcsS0FBWCxXQUFXLFFBTXRCO0FBR0Q7SUFBQTtRQUNVLG9CQUFlLEdBRW5CLEVBQUUsQ0FBQztJQXdCVCxDQUFDO0lBdEJDLGtDQUFHLEdBQUgsVUFBSSxFQUFxQjtRQUF6QixpQkFPQztRQU5DLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNkLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNoRCxnQkFBZ0I7WUFDaEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxLQUFLLENBQUMsc0JBQW9CLEVBQUUsc0JBQW1CLENBQUMsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0NBQUcsR0FBSCxVQUFJLEVBQVUsRUFBRSxRQUFxQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM3QixNQUFNLEtBQUssQ0FBQyxzQkFBb0IsRUFBRSxzQkFBbUIsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQTFCVSxvQkFBb0I7UUFEaEMsVUFBVSxFQUFFO09BQ0Esb0JBQW9CLENBMkJoQztJQUFELDJCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0EzQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZW51bSBMYXlvdXRTdGF0ZSB7XHJcbiAgSURMRSA9ICdJRExFJyxcclxuICBMT0FESU5HID0gJ0xPQURJTkcnLFxyXG4gIFNVQ0NFU1MgPSAnU1VDQ0VTUycsXHJcbiAgRU1QVFkgPSAnRU1QVFknLFxyXG4gIEVSUk9SID0gJ0VSUk9SJyxcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXJMYXlvdXRTdGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGVDb250YWluZXJzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBSZXBsYXlTdWJqZWN0PExheW91dFN0YXRlPjtcclxuICB9ID0ge307XHJcblxyXG4gIGFkZChpZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IGlkcyA9IEFycmF5LmlzQXJyYXkoaWQpID8gaWQgOiBbaWRdO1xyXG4gICAgaWRzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlQ29udGFpbmVyc1trZXldID0gbmV3IFJlcGxheVN1YmplY3QoKTtcclxuICAgICAgLy8gaW5pdGlhbCBzdGF0ZVxyXG4gICAgICB0aGlzLnN0YXRlQ29udGFpbmVyc1trZXldLm5leHQoTGF5b3V0U3RhdGUuSURMRSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCQoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlQ29udGFpbmVyc1tpZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYExheW91dCBzdGF0ZSBpZCAnJHtpZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVDb250YWluZXJzW2lkXTtcclxuICB9XHJcblxyXG4gIHNldChpZDogc3RyaW5nLCBuZXdTdGF0ZTogTGF5b3V0U3RhdGUpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZUNvbnRhaW5lcnNbaWRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBMYXlvdXQgc3RhdGUgaWQgJyR7aWR9JyBkb2VzIG5vdCBleGlzdHNgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGVDb250YWluZXJzW2lkXS5uZXh0KG5ld1N0YXRlKTtcclxuICB9XHJcbn1cclxuIl19