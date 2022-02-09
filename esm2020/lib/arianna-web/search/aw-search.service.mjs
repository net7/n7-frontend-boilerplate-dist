import { Injectable } from '@angular/core';
import { AwSearchModel } from './aw-search.model';
import * as i0 from "@angular/core";
export class AwSearchService {
    constructor() {
        this._models = {};
    }
    add(id, config) {
        if (this._models[id]) {
            throw Error(`Search model '${id}' already exists!`);
        }
        this._models[id] = new AwSearchModel(id, config);
    }
    remove(id) {
        if (this._models[id]) {
            delete this._models[id];
        }
    }
    model(id) {
        return this._models[id] || null;
    }
}
AwSearchService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: AwSearchService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AwSearchService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: AwSearchService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: AwSearchService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctc2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFrQixNQUFNLG1CQUFtQixDQUFDOztBQUtsRSxNQUFNLE9BQU8sZUFBZTtJQUg1QjtRQUlVLFlBQU8sR0FBUSxFQUFFLENBQUM7S0FtQjNCO0lBakJRLEdBQUcsQ0FBQyxFQUFVLEVBQUUsTUFBc0I7UUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sTUFBTSxDQUFDLEVBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7OzRHQW5CVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBd1NlYXJjaE1vZGVsLCBBd1NlYXJjaENvbmZpZyB9IGZyb20gJy4vYXctc2VhcmNoLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBd1NlYXJjaFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX21vZGVsczogYW55ID0ge307XHJcblxyXG4gIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgY29uZmlnOiBBd1NlYXJjaENvbmZpZykge1xyXG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCAnJHtpZH0nIGFscmVhZHkgZXhpc3RzIWApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgQXdTZWFyY2hNb2RlbChpZCwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX21vZGVsc1tpZF0pIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX21vZGVsc1tpZF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IEF3U2VhcmNoTW9kZWwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGVsc1tpZF0gfHwgbnVsbDtcclxuICB9XHJcbn1cclxuIl19