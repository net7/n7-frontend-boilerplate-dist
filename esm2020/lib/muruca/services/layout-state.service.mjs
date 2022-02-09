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
MrLayoutStateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrLayoutStateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MrLayoutStateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrLayoutStateService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrLayoutStateService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2Evc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVyQyxNQUFNLENBQU4sSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ3JCLDRCQUFhLENBQUE7SUFDYixrQ0FBbUIsQ0FBQTtJQUNuQixrQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBZSxDQUFBO0lBQ2YsOEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTlcsV0FBVyxLQUFYLFdBQVcsUUFNdEI7QUFHRCxNQUFNLE9BQU8sb0JBQW9CO0lBRGpDO1FBRVUsb0JBQWUsR0FFbkIsRUFBRSxDQUFDO0tBd0JSO0lBdEJDLEdBQUcsQ0FBQyxFQUFxQjtRQUN2QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNoRCxnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxLQUFLLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsR0FBRyxDQUFDLEVBQVUsRUFBRSxRQUFxQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM3QixNQUFNLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7aUhBMUJVLG9CQUFvQjtxSEFBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBlbnVtIExheW91dFN0YXRlIHtcclxuICBJRExFID0gJ0lETEUnLFxyXG4gIExPQURJTkcgPSAnTE9BRElORycsXHJcbiAgU1VDQ0VTUyA9ICdTVUNDRVNTJyxcclxuICBFTVBUWSA9ICdFTVBUWScsXHJcbiAgRVJST1IgPSAnRVJST1InLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNckxheW91dFN0YXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdGF0ZUNvbnRhaW5lcnM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IFJlcGxheVN1YmplY3Q8TGF5b3V0U3RhdGU+O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgYWRkKGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuaXNBcnJheShpZCkgPyBpZCA6IFtpZF07XHJcbiAgICBpZHMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGVDb250YWluZXJzW2tleV0gPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xyXG4gICAgICAvLyBpbml0aWFsIHN0YXRlXHJcbiAgICAgIHRoaXMuc3RhdGVDb250YWluZXJzW2tleV0ubmV4dChMYXlvdXRTdGF0ZS5JRExFKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0JChpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGVDb250YWluZXJzW2lkXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgTGF5b3V0IHN0YXRlIGlkICcke2lkfScgZG9lcyBub3QgZXhpc3RzYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZUNvbnRhaW5lcnNbaWRdO1xyXG4gIH1cclxuXHJcbiAgc2V0KGlkOiBzdHJpbmcsIG5ld1N0YXRlOiBMYXlvdXRTdGF0ZSkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlQ29udGFpbmVyc1tpZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYExheW91dCBzdGF0ZSBpZCAnJHtpZH0nIGRvZXMgbm90IGV4aXN0c2ApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZUNvbnRhaW5lcnNbaWRdLm5leHQobmV3U3RhdGUpO1xyXG4gIH1cclxufVxyXG4iXX0=