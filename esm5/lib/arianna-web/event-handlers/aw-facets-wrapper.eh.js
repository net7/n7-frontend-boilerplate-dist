import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var AwFacetsWrapperEH = /** @class */ (function (_super) {
    __extends(AwFacetsWrapperEH, _super);
    function AwFacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.internalFacetsChange$ = new Subject();
        _this.externalFacetsChange$ = new Subject();
        return _this;
    }
    AwFacetsWrapperEH.prototype.listen = function () {
        var _this = this;
        // listen to inner (widget) events
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facet':
                    {
                        // empty payload control
                        if (!payload.eventPayload.inputPayload) {
                            return;
                        }
                        var _b = payload.eventPayload.inputPayload, facetId = _b.facetId, value = _b.value;
                        if (value === '__loading__') {
                            return;
                        }
                        var input = _this.dataSource.getInputByFacetId(facetId);
                        var context = input.getContext();
                        // update
                        _this.dataSource.onFacetChange(payload);
                        // internal
                        if (context === 'internal') {
                            _this.internalFacetsChange$.next(input.getTarget());
                            // external
                        }
                        else {
                            _this.externalFacetsChange$.next(facetId);
                        }
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    _this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type.indexOf('queryparamschange') !== -1 && _this.dataSource.searchModel) {
                _this.dataSource.updateFiltersFromQueryParams(payload);
                _this.dataSource.updateInputsFromFilters();
            }
        });
        // listen to global events
        EventHandler.globalEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'global.searchresponse':
                    if (_this.dataSource.searchModel && _this.dataSource.searchModel.getId() === payload) {
                        _this.dataSource.updateInputLinks();
                        var internalFilters = _this.dataSource.searchModel.getInternalFilters();
                        internalFilters.forEach(function (filter) {
                            var input = _this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                            var target = input.getTarget();
                            // this.dataSource.filterTarget(target);
                            _this.dataSource.updateFilteredTarget(target);
                        });
                    }
                    break;
                default:
                    break;
            }
        });
        // internal facets change
        this.externalFacetsChange$.pipe(debounceTime(500)).subscribe(function (facetId) {
            var requestParams = _this.dataSource.getRequestParams();
            var queryParams = _this.dataSource.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach(function (key) { queryParams[key] = queryParams[key] || null; });
            // signal
            _this.emitOuter('facetschange', { facetId: facetId });
            // reset page
            queryParams.page = 1;
            // router signal
            _this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams: queryParams,
            });
        });
    };
    return AwFacetsWrapperEH;
}(EventHandler));
export { AwFacetsWrapperEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvYXctZmFjZXRzLXdyYXBwZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUF1QyxxQ0FBWTtJQUFuRDtRQUFBLHFFQThGQztRQTdGUSwyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwRCwyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUEyRjdELENBQUM7SUF6RlEsa0NBQU0sR0FBYjtRQUFBLGlCQXdGQztRQXZGQyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0I7b0JBQUU7d0JBQzNCLHdCQUF3Qjt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFOzRCQUN0QyxPQUFPO3lCQUNSO3dCQUNLLElBQUEsc0NBQXNELEVBQXBELG9CQUFPLEVBQUUsZ0JBQTJDLENBQUM7d0JBQzdELElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRTs0QkFDM0IsT0FBTzt5QkFDUjt3QkFDRCxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6RCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBRW5DLFNBQVM7d0JB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QVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLGdCQUFnQjtZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2dCQUNSLFdBQVcsYUFBQTthQUNaLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTlGRCxDQUF1QyxZQUFZLEdBOEZsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBpbnRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBleHRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICAvLyBsaXN0ZW4gdG8gaW5uZXIgKHdpZGdldCkgZXZlbnRzXHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0Jzoge1xyXG4gICAgICAgICAgLy8gZW1wdHkgcGF5bG9hZCBjb250cm9sXHJcbiAgICAgICAgICBpZiAoIXBheWxvYWQuZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCB7IGZhY2V0SWQsIHZhbHVlIH0gPSBwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPT09ICdfX2xvYWRpbmdfXycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gaW5wdXQuZ2V0Q29udGV4dCgpO1xyXG5cclxuICAgICAgICAgIC8vIHVwZGF0ZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRmFjZXRDaGFuZ2UocGF5bG9hZCk7XHJcblxyXG4gICAgICAgICAgLy8gaW50ZXJuYWxcclxuICAgICAgICAgIGlmIChjb250ZXh0ID09PSAnaW50ZXJuYWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGYWNldHNDaGFuZ2UkLm5leHQoaW5wdXQuZ2V0VGFyZ2V0KCkpO1xyXG4gICAgICAgICAgICAvLyBleHRlcm5hbFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQubmV4dChmYWNldElkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdxdWVyeXBhcmFtc2NoYW5nZScpICE9PSAtMSAmJiB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhwYXlsb2FkKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcclxuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZ2xvYmFsLnNlYXJjaHJlc3BvbnNlJzpcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwgJiYgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElkKCkgPT09IHBheWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0TGlua3MoKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxGaWx0ZXJzID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEludGVybmFsRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgaW50ZXJuYWxGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZpbHRlci5mYWNldElkKTtcclxuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbnB1dC5nZXRUYXJnZXQoKTtcclxuICAgICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgZmFjZXRzIGNoYW5nZVxyXG4gICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICApLnN1YnNjcmliZSgoZmFjZXRJZCkgPT4ge1xyXG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmdldFJlcXVlc3RQYXJhbXMoKTtcclxuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHsgcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbDsgfSk7XHJcbiAgICAgIC8vIHNpZ25hbFxyXG4gICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzY2hhbmdlJywgeyBmYWNldElkIH0pO1xyXG5cclxuICAgICAgLy8gcmVzZXQgcGFnZVxyXG4gICAgICBxdWVyeVBhcmFtcy5wYWdlID0gMTtcclxuXHJcbiAgICAgIC8vIHJvdXRlciBzaWduYWxcclxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICBwYXRoOiBbXSxcclxuICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19