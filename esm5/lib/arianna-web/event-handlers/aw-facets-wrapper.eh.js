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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvYXctZmFjZXRzLXdyYXBwZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUF1QyxxQ0FBWTtJQUFuRDtRQUFBLHFFQThGQztRQTdGUSwyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwRCwyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUEyRjdELENBQUM7SUF6RlEsa0NBQU0sR0FBYjtRQUFBLGlCQXdGQztRQXZGQyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0I7b0JBQUU7d0JBQzNCLHdCQUF3Qjt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFOzRCQUN0QyxPQUFPO3lCQUNSO3dCQUNLLElBQUEsc0NBQXNELEVBQXBELG9CQUFPLEVBQUUsZ0JBQTJDLENBQUM7d0JBQzdELElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRTs0QkFDM0IsT0FBTzt5QkFDUjt3QkFDRCxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6RCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBRW5DLFNBQVM7d0JB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QVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLGdCQUFnQjtZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2dCQUNSLFdBQVcsYUFBQTthQUNaLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTlGRCxDQUF1QyxZQUFZLEdBOEZsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3RmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGludGVybmFsRmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgZXh0ZXJuYWxGYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgLy8gbGlzdGVuIHRvIGlubmVyICh3aWRnZXQpIGV2ZW50c1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldCc6IHtcbiAgICAgICAgICAvLyBlbXB0eSBwYXlsb2FkIGNvbnRyb2xcbiAgICAgICAgICBpZiAoIXBheWxvYWQuZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IGZhY2V0SWQsIHZhbHVlIH0gPSBwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSAnX19sb2FkaW5nX18nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5kYXRhU291cmNlLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpO1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBpbnB1dC5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25GYWNldENoYW5nZShwYXlsb2FkKTtcblxuICAgICAgICAgIC8vIGludGVybmFsXG4gICAgICAgICAgaWYgKGNvbnRleHQgPT09ICdpbnRlcm5hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGYWNldHNDaGFuZ2UkLm5leHQoaW5wdXQuZ2V0VGFyZ2V0KCkpO1xuICAgICAgICAgICAgLy8gZXh0ZXJuYWxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQubmV4dChmYWNldElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldGhlYWRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdxdWVyeXBhcmFtc2NoYW5nZScpICE9PSAtMSAmJiB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocGF5bG9hZCk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcbiAgICBFdmVudEhhbmRsZXIuZ2xvYmFsRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZ2xvYmFsLnNlYXJjaHJlc3BvbnNlJzpcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsICYmIHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRJZCgpID09PSBwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRMaW5rcygpO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxGaWx0ZXJzID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEludGVybmFsRmlsdGVycygpO1xuXG4gICAgICAgICAgICBpbnRlcm5hbEZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZpbHRlci5mYWNldElkKTtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gaW5wdXQuZ2V0VGFyZ2V0KCk7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJUYXJnZXQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGludGVybmFsIGZhY2V0cyBjaGFuZ2VcbiAgICB0aGlzLmV4dGVybmFsRmFjZXRzQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgKS5zdWJzY3JpYmUoKGZhY2V0SWQpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4geyBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsOyB9KTtcbiAgICAgIC8vIHNpZ25hbFxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c2NoYW5nZScsIHsgZmFjZXRJZCB9KTtcblxuICAgICAgLy8gcmVzZXQgcGFnZVxuICAgICAgcXVlcnlQYXJhbXMucGFnZSA9IDE7XG5cbiAgICAgIC8vIHJvdXRlciBzaWduYWxcbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19