import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AwSearchModel } from './aw-search.model';
import * as i0 from "@angular/core";
var AwSearchService = /** @class */ (function () {
    function AwSearchService() {
        this._models = {};
    }
    AwSearchService.prototype.add = function (id, config) {
        if (this._models[id]) {
            throw Error("Search model '" + id + "' already exists!");
        }
        this._models[id] = new AwSearchModel(id, config);
    };
    AwSearchService.prototype.remove = function (id) {
        if (this._models[id]) {
            delete this._models[id];
        }
    };
    AwSearchService.prototype.model = function (id) {
        return this._models[id] || null;
    };
    AwSearchService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AwSearchService_Factory() { return new AwSearchService(); }, token: AwSearchService, providedIn: "root" });
    AwSearchService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AwSearchService);
    return AwSearchService;
}());
export { AwSearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctc2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvc2VhcmNoL2F3LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sbUJBQW1CLENBQUM7O0FBS2xFO0lBQUE7UUFDVSxZQUFPLEdBQVEsRUFBRSxDQUFDO0tBbUIzQjtJQWpCUSw2QkFBRyxHQUFWLFVBQVcsRUFBVSxFQUFFLE1BQXNCO1FBQzNDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixNQUFNLEtBQUssQ0FBQyxtQkFBaUIsRUFBRSxzQkFBbUIsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU0sK0JBQUssR0FBWixVQUFhLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDOztJQW5CVSxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBb0IzQjswQkExQkQ7Q0EwQkMsQUFwQkQsSUFvQkM7U0FwQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF3U2VhcmNoTW9kZWwsIEF3U2VhcmNoQ29uZmlnIH0gZnJvbSAnLi9hdy1zZWFyY2gubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbW9kZWxzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIGNvbmZpZzogQXdTZWFyY2hDb25maWcpIHtcbiAgICBpZiAodGhpcy5fbW9kZWxzW2lkXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFNlYXJjaCBtb2RlbCAnJHtpZH0nIGFscmVhZHkgZXhpc3RzIWApO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGVsc1tpZF0gPSBuZXcgQXdTZWFyY2hNb2RlbChpZCwgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9tb2RlbHNbaWRdKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW2lkXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbW9kZWwoaWQ6IHN0cmluZyk6IEF3U2VhcmNoTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbHNbaWRdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==