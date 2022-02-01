import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export var LayoutState;
(function (LayoutState) {
    LayoutState["IDLE"] = "IDLE";
    LayoutState["LOADING"] = "LOADING";
    LayoutState["SUCCESS"] = "SUCCESS";
    LayoutState["EMPTY"] = "EMPTY";
    LayoutState["ERROR"] = "ERROR";
})(LayoutState || (LayoutState = {}));
export class MrLayoutStateService {
    constructor() {
        this.stateContainers = {};
    }
    add(id) {
        const ids = Array.isArray(id) ? id : [id];
        ids.forEach((key) => {
            this.stateContainers[key] = new ReplaySubject();
            // initial state
            this.stateContainers[key].next(LayoutState.IDLE);
        });
    }
    get$(id) {
        if (!this.stateContainers[id]) {
            throw Error(`Layout state id '${id}' does not exists`);
        }
        return this.stateContainers[id];
    }
    set(id, newState) {
        if (!this.stateContainers[id]) {
            throw Error(`Layout state id '${id}' does not exists`);
        }
        this.stateContainers[id].next(newState);
    }
}
MrLayoutStateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrLayoutStateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MrLayoutStateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrLayoutStateService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrLayoutStateService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2Evc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVyQyxNQUFNLENBQU4sSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ3JCLDRCQUFhLENBQUE7SUFDYixrQ0FBbUIsQ0FBQTtJQUNuQixrQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBZSxDQUFBO0lBQ2YsOEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTlcsV0FBVyxLQUFYLFdBQVcsUUFNdEI7QUFHRCxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBRVUsb0JBQWUsR0FFbkIsRUFBRSxDQUFDO0tBd0JSO0lBdEJDLEdBQUcsQ0FBQyxFQUFxQjtRQUN2QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNoRCxnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxLQUFLLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsR0FBRyxDQUFDLEVBQVUsRUFBRSxRQUFxQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM3QixNQUFNLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7aUhBMUJVLG9CQUFvQjtxSEFBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIExheW91dFN0YXRlIHtcbiAgSURMRSA9ICdJRExFJyxcbiAgTE9BRElORyA9ICdMT0FESU5HJyxcbiAgU1VDQ0VTUyA9ICdTVUNDRVNTJyxcbiAgRU1QVFkgPSAnRU1QVFknLFxuICBFUlJPUiA9ICdFUlJPUicsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNckxheW91dFN0YXRlU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGVDb250YWluZXJzOiB7XG4gICAgW2tleTogc3RyaW5nXTogUmVwbGF5U3ViamVjdDxMYXlvdXRTdGF0ZT47XG4gIH0gPSB7fTtcblxuICBhZGQoaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShpZCkgPyBpZCA6IFtpZF07XG4gICAgaWRzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZUNvbnRhaW5lcnNba2V5XSA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG4gICAgICAvLyBpbml0aWFsIHN0YXRlXG4gICAgICB0aGlzLnN0YXRlQ29udGFpbmVyc1trZXldLm5leHQoTGF5b3V0U3RhdGUuSURMRSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQkKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVDb250YWluZXJzW2lkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYExheW91dCBzdGF0ZSBpZCAnJHtpZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZUNvbnRhaW5lcnNbaWRdO1xuICB9XG5cbiAgc2V0KGlkOiBzdHJpbmcsIG5ld1N0YXRlOiBMYXlvdXRTdGF0ZSkge1xuICAgIGlmICghdGhpcy5zdGF0ZUNvbnRhaW5lcnNbaWRdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgTGF5b3V0IHN0YXRlIGlkICcke2lkfScgZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGVDb250YWluZXJzW2lkXS5uZXh0KG5ld1N0YXRlKTtcbiAgfVxufVxuIl19