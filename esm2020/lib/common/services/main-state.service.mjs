import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class MainStateService {
    constructor() {
        // custom streams
        this.custom = {};
        // default streams
        this.default = {
            headTitle: new ReplaySubject(),
            pageTitle: new ReplaySubject(),
            subnav: new ReplaySubject(),
            breadcrumbs: new ReplaySubject(),
            filters: new ReplaySubject(),
            header: new ReplaySubject(),
        };
        this.get$ = (key) => this._get('default', key);
        this.getCustom$ = (key) => this._get('custom', key);
        this.update = (key, newValue) => this._update('default', key, newValue);
        this.updateCustom = (key, newValue) => this._update('custom', key, newValue);
        this.has = (key) => !!this.default[key];
        this.hasCustom = (key) => !!this.custom[key];
    }
    addCustom(key, stream$) {
        if (this.custom[key])
            throw Error(`custom stream ${key} exists!`);
        this.custom[key] = stream$;
    }
    _update(type, key, newValue) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        this[type][key].next(newValue);
    }
    _get(type, key) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        return this[type][key];
    }
}
MainStateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MainStateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MainStateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MainStateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MainStateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3JDLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFJRSxpQkFBaUI7UUFDVCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGtCQUFrQjtRQUNWLFlBQU8sR0FPWDtZQUNGLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDNUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1NBQzVCLENBQUM7UUFFSyxTQUFJLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxELGVBQVUsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdkQsV0FBTSxHQUFHLENBQUMsR0FBVyxFQUFFLFFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWhGLGlCQUFZLEdBQUcsQ0FBQyxHQUFXLEVBQUUsUUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFckYsUUFBRyxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQyxjQUFTLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBcUJ4RDtJQW5CUSxTQUFTLENBQUMsR0FBVyxFQUFFLE9BQTJCO1FBQ3ZELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBRU8sT0FBTyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLElBQUksQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OzZHQW5EVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQixjQUZmLE1BQU07MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5TdGF0ZVNlcnZpY2Uge1xyXG4gIC8vIGN1c3RvbSBzdHJlYW1zXHJcbiAgcHJpdmF0ZSBjdXN0b206IGFueSA9IHt9O1xyXG5cclxuICAvLyBkZWZhdWx0IHN0cmVhbXNcclxuICBwcml2YXRlIGRlZmF1bHQ6IHtcclxuICAgIGhlYWRUaXRsZTogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gICAgcGFnZVRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBzdWJuYXY6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIGJyZWFkY3J1bWJzOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBmaWx0ZXJzOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBoZWFkZXI6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICB9ID0ge1xyXG4gICAgaGVhZFRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgcGFnZVRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgc3VibmF2OiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgYnJlYWRjcnVtYnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBmaWx0ZXJzOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgaGVhZGVyOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBnZXQkID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2RlZmF1bHQnLCBrZXkpO1xyXG5cclxuICBwdWJsaWMgZ2V0Q3VzdG9tJCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy5fZ2V0KCdjdXN0b20nLCBrZXkpO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2RlZmF1bHQnLCBrZXksIG5ld1ZhbHVlKTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZUN1c3RvbSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdjdXN0b20nLCBrZXksIG5ld1ZhbHVlKTtcclxuXHJcbiAgcHVibGljIGhhcyA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmRlZmF1bHRba2V5XTtcclxuXHJcbiAgcHVibGljIGhhc0N1c3RvbSA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmN1c3RvbVtrZXldO1xyXG5cclxuICBwdWJsaWMgYWRkQ3VzdG9tKGtleTogc3RyaW5nLCBzdHJlYW0kOiBSZXBsYXlTdWJqZWN0PGFueT4pIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbVtrZXldKSB0aHJvdyBFcnJvcihgY3VzdG9tIHN0cmVhbSAke2tleX0gZXhpc3RzIWApO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tW2tleV0gPSBzdHJlYW0kO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIGlmICghdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcclxuICAgIGlmICghdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcclxuXHJcbiAgICB0aGlzW3R5cGVdW2tleV0ubmV4dChuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xyXG5cclxuICAgIHJldHVybiB0aGlzW3R5cGVdW2tleV07XHJcbiAgfVxyXG59XHJcbiJdfQ==