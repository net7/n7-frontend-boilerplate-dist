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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFFTCxtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLDRCQUE0QixHQUM3QixNQUFNLCtCQUErQixDQUFDO0FBTXZDO0lBQTBDLHdDQUFZO0lBQXREO1FBQUEscUVBaUdDO1FBaEdDLGNBQVEsR0FBb0IsRUFBRSxDQUFDO1FBRXZCLGdCQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBOEZ2RCxDQUFDO0lBMUZRLHFDQUFNLEdBQWI7UUFBQSxpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsWUFBWTtvQkFDWixLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsT0FBTztvQkFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMs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Q0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUMxQixNQUFNLENBQUMsVUFBQyxFQUFlO2dCQUFiLDRCQUFXO1lBQU8sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFBckMsQ0FBcUMsQ0FBQyxDQUNuRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQXNCO2dCQUFwQiw0QkFBVyxFQUFFLGdCQUFLO1lBQy9CLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFFTCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDO2FBQ2xFLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDWCxJQUFBLHdCQUFNLENBQWM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO2dCQUNyQixJQUFBLG1DQUF1QixDQUFnQjtnQkFDL0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFVLEVBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWpHRCxDQUEwQyxZQUFZLEdBaUdyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIE1yU2VhcmNoU2VydmljZSxcclxuICBJTlBVVF9TVEFURV9DT05URVhULFxyXG4gIEZBQ0VUX1NUQVRFX0NPTlRFWFQsXHJcbiAgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCxcclxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbmdlZFN1YmplY3RzIHtcclxuICBba2V5OiBzdHJpbmddOiBTdWJqZWN0PGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgY2hhbmdlZCQ6IENoYW5nZWRTdWJqZWN0cyA9IHt9O1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XHJcbiAgICAgICAgICAvLyBsaXN0ZW5lcnNcclxuICAgICAgICAgIHRoaXMuaW5pdENoYW5nZWRMaXN0ZW5lcih0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCkpO1xyXG4gICAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgLy8gaW5pdFxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ2NoYW5nZScpKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtwYXlsb2FkLmlkXS5uZXh0KHBheWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRDaGFuZ2VkTGlzdGVuZXIoeyBmYWNldHMgfSkge1xyXG4gICAgZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qgc291cmNlczoge1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICAgICAgZGVsYXk6IG51bWJlcjtcclxuICAgICAgfVtdID0gW107XHJcblxyXG4gICAgICBpZiAoc2VjdGlvbi5oZWFkZXIpIHtcclxuICAgICAgICBjb25zdCB7IGlkLCBkZWxheSB9ID0gc2VjdGlvbi5oZWFkZXI7XHJcbiAgICAgICAgc291cmNlcy5wdXNoKHsgaWQsIGRlbGF5IH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKHsgaWQsIGRlbGF5IH0pID0+IHtcclxuICAgICAgICBzb3VyY2VzLnB1c2goeyBpZCwgZGVsYXkgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZCRbc291cmNlLmlkXSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtzb3VyY2UuaWRdLnBpcGUoXHJcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoc291cmNlLmRlbGF5IHx8IDEpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKHsgaWQsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRTdGF0ZShJTlBVVF9TVEFURV9DT05URVhULCBpZCwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdFN0YXRlTGlzdGVuZXIoKSB7XHJcbiAgICAvLyBsaXN0ZW5lciBmb3IgaW5wdXQgdXBkYXRlc1xyXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5kYXRhU291cmNlLmlucHV0c0RTW2xhc3RVcGRhdGVkXSlcclxuICAgICAgKS5zdWJzY3JpYmUoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbGVhcklucHV0KGxhc3RVcGRhdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0VmFsdWUobGFzdFVwZGF0ZWQsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIGxpc3RlbmVyIGZvciBmYWNldCB1cGRhdGVzXHJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKEZBQ0VUX1NUQVRFX0NPTlRFWFQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLmRhdGFTb3VyY2UuaW5wdXRzRFNbbGFzdFVwZGF0ZWRdKVxyXG4gICAgICApLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBzdGF0ZVtsYXN0VXBkYXRlZF07XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0RGF0YShsYXN0VXBkYXRlZCwgbmV3RGF0YSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIGxpc3RlbmVyIGZvciBmYWNldCBoZWFkZXIgdXBkYXRlc1xyXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXHJcbiAgICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcclxuICAgICAgICBPYmplY3Qua2V5cyhmYWNldHMpLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IHRvdGFsX2NvdW50OiB0b3RhbENvdW50IH0gPSBmYWNldHNbaWRdO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0VmFsdWUoYGhlYWRlci0ke2lkfWAsIHRvdGFsQ291bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19