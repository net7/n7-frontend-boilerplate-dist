import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AwSearchModel } from './aw-search.model';
import * as i0 from "@angular/core";
let AwSearchService = class AwSearchService {
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
};
AwSearchService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AwSearchService_Factory() { return new AwSearchService(); }, token: AwSearchService, providedIn: "root" });
AwSearchService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AwSearchService);
export { AwSearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctc2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvc2VhcmNoL2F3LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sbUJBQW1CLENBQUM7O0FBS2xFLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFBNUI7UUFDVSxZQUFPLEdBQVEsRUFBRSxDQUFDO0tBbUIzQjtJQWpCUSxHQUFHLENBQUMsRUFBVSxFQUFFLE1BQXNCO1FBQzNDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixNQUFNLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTs7QUFwQlksZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZUFBZSxDQW9CM0I7U0FwQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXdTZWFyY2hNb2RlbCwgQXdTZWFyY2hDb25maWcgfSBmcm9tICcuL2F3LXNlYXJjaC5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9tb2RlbHM6IGFueSA9IHt9O1xyXG5cclxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogQXdTZWFyY2hDb25maWcpIHtcclxuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBTZWFyY2ggbW9kZWwgJyR7aWR9JyBhbHJlYWR5IGV4aXN0cyFgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9tb2RlbHNbaWRdID0gbmV3IEF3U2VhcmNoTW9kZWwoaWQsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9tb2RlbHNbaWRdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vZGVsKGlkOiBzdHJpbmcpOiBBd1NlYXJjaE1vZGVsIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlbHNbaWRdIHx8IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==