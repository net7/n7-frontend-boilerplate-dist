import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { INPUT_STATE_CONTEXT, FACET_STATE_CONTEXT, FACETS_REQUEST_STATE_CONTEXT, } from '../../services/search.service';
var SearchFacetsLayoutEH = /** @class */ (function (_super) {
    __extends(SearchFacetsLayoutEH, _super);
    function SearchFacetsLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changed$ = {};
        _this.destroyed$ = new Subject();
        return _this;
    }
    SearchFacetsLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-search-facets-layout.init':
                    _this.searchService = payload.searchService;
                    // listeners
                    _this.initChangedListener(_this.searchService.getConfig());
                    _this.initStateListener();
                    // init
                    _this.dataSource.onInit(payload);
                    _this.emitOuter('facetloaded');
                    break;
                case 'mr-search-facets-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type.indexOf('change')) {
                _this.changed$[payload.id].next(payload);
            }
        });
    };
    SearchFacetsLayoutEH.prototype.initChangedListener = function (_a) {
        var _this = this;
        var facets = _a.facets;
        facets.sections.forEach(function (section) {
            var sources = [];
            if (section.header) {
                var _a = section.header, id = _a.id, delay = _a.delay;
                sources.push({ id: id, delay: delay });
            }
            section.inputs.forEach(function (_a) {
                var id = _a.id, delay = _a.delay;
                sources.push({ id: id, delay: delay });
            });
            sources.forEach(function (source) {
                _this.changed$[source.id] = new Subject();
                _this.changed$[source.id].pipe(debounceTime(source.delay || 1)).subscribe(function (_a) {
                    var id = _a.id, value = _a.value;
                    _this.searchService.setState(INPUT_STATE_CONTEXT, id, value);
                });
            });
        });
    };
    SearchFacetsLayoutEH.prototype.initStateListener = function () {
        var _this = this;
        // listener for input updates
        this.searchService.getState$(INPUT_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter(function (_a) {
            var lastUpdated = _a.lastUpdated;
            return _this.dataSource.inputsDS[lastUpdated];
        })).subscribe(function (_a) {
            var lastUpdated = _a.lastUpdated, state = _a.state;
            var newValue = state[lastUpdated];
            if (newValue === null) {
                _this.dataSource.clearInput(lastUpdated);
            }
            else {
                _this.dataSource.updateInputValue(lastUpdated, newValue);
            }
        });
        // listener for facet updates
        this.searchService.getState$(FACET_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter(function (_a) {
            var lastUpdated = _a.lastUpdated;
            return _this.dataSource.inputsDS[lastUpdated];
        })).subscribe(function (_a) {
            var lastUpdated = _a.lastUpdated, state = _a.state;
            var newData = state[lastUpdated];
            _this.dataSource.updateInputData(lastUpdated, newData);
        });
        // listener for facet header updates
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success')
            .pipe(takeUntil(this.destroyed$)).subscribe(function (response) {
            var facets = response.facets;
            Object.keys(facets).forEach(function (id) {
                var totalCount = facets[id].total_count;
                _this.dataSource.updateInputValue("header-" + id, totalCount);
            });
        });
    };
    return SearchFacetsLayoutEH;
}(EventHandler));
export { SearchFacetsLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFFTCxtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLDRCQUE0QixHQUM3QixNQUFNLCtCQUErQixDQUFDO0FBTXZDO0lBQTBDLHdDQUFZO0lBQXREO1FBQUEscUVBa0dDO1FBakdDLGNBQVEsR0FBb0IsRUFBRSxDQUFDO1FBRXZCLGdCQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBK0Z2RCxDQUFDO0lBM0ZRLHFDQUFNLEdBQWI7UUFBQSxpQkEyQkM7UUExQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsWUFBWTtvQkFDWixLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsT0FBTztvQkFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMs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QUFhLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO2FBQzlDLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUMxQixNQUFNLENBQUMsVUFBQyxFQUFlO2dCQUFiLDRCQUFXO1lBQU8sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFBckMsQ0FBcUMsQ0FBQyxDQUNuRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQXNCO2dCQUFwQiw0QkFBVyxFQUFFLGdCQUFLO1lBQy9CLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFFTCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDO2FBQ2xFLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDWCxJQUFBLHdCQUFNLENBQWM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO2dCQUNyQixJQUFBLG1DQUF1QixDQUFnQjtnQkFDL0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFVLEVBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWxHRCxDQUEwQyxZQUFZLEdBa0dyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIE1yU2VhcmNoU2VydmljZSxcclxuICBJTlBVVF9TVEFURV9DT05URVhULFxyXG4gIEZBQ0VUX1NUQVRFX0NPTlRFWFQsXHJcbiAgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCxcclxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbmdlZFN1YmplY3RzIHtcclxuICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgY2hhbmdlZCQ6IENoYW5nZWRTdWJqZWN0cyA9IHt9O1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XHJcbiAgICAgICAgICAvLyBsaXN0ZW5lcnNcclxuICAgICAgICAgIHRoaXMuaW5pdENoYW5nZWRMaXN0ZW5lcih0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCkpO1xyXG4gICAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgLy8gaW5pdFxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldGxvYWRlZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgaWYgKHR5cGUuaW5kZXhPZignY2hhbmdlJykpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZWQkW3BheWxvYWQuaWRdLm5leHQocGF5bG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdENoYW5nZWRMaXN0ZW5lcih7IGZhY2V0cyB9KSB7XHJcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzb3VyY2VzOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZztcclxuICAgICAgICBkZWxheTogbnVtYmVyO1xyXG4gICAgICB9W10gPSBbXTtcclxuXHJcbiAgICAgIGlmIChzZWN0aW9uLmhlYWRlcikge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIGRlbGF5IH0gPSBzZWN0aW9uLmhlYWRlcjtcclxuICAgICAgICBzb3VyY2VzLnB1c2goeyBpZCwgZGVsYXkgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoeyBpZCwgZGVsYXkgfSkgPT4ge1xyXG4gICAgICAgIHNvdXJjZXMucHVzaCh7IGlkLCBkZWxheSB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNvdXJjZXMuZm9yRWFjaCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtzb3VyY2UuaWRdID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0ucGlwZShcclxuICAgICAgICAgIGRlYm91bmNlVGltZShzb3VyY2UuZGVsYXkgfHwgMSlcclxuICAgICAgICApLnN1YnNjcmliZSgoeyBpZCwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0U3RhdGVMaXN0ZW5lcigpIHtcclxuICAgIC8vIGxpc3RlbmVyIGZvciBpbnB1dCB1cGRhdGVzXHJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLmRhdGFTb3VyY2UuaW5wdXRzRFNbbGFzdFVwZGF0ZWRdKVxyXG4gICAgICApLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc3RhdGVbbGFzdFVwZGF0ZWRdO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsZWFySW5wdXQobGFzdFVwZGF0ZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRWYWx1ZShsYXN0VXBkYXRlZCwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gbGlzdGVuZXIgZm9yIGZhY2V0IHVwZGF0ZXNcclxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoRkFDRVRfU1RBVEVfQ09OVEVYVClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXHJcbiAgICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMuZGF0YVNvdXJjZS5pbnB1dHNEU1tsYXN0VXBkYXRlZF0pXHJcbiAgICAgICkuc3Vic2NyaWJlKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXREYXRhKGxhc3RVcGRhdGVkLCBuZXdEYXRhKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gbGlzdGVuZXIgZm9yIGZhY2V0IGhlYWRlciB1cGRhdGVzXHJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcclxuICAgICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBmYWNldHMgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGZhY2V0cykuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgdG90YWxfY291bnQ6IHRvdGFsQ291bnQgfSA9IGZhY2V0c1tpZF07XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRWYWx1ZShgaGVhZGVyLSR7aWR9YCwgdG90YWxDb3VudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=