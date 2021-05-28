import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var AwSchedaLayoutEH = /** @class */ (function (_super) {
    __extends(AwSchedaLayoutEH, _super);
    function AwSchedaLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    AwSchedaLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-scheda-layout.init':
                    {
                        _this.dataSource.onInit(payload);
                        _this.configuration = payload.configuration;
                        _this.route = payload.route;
                        var paramId = _this.route.snapshot.params.id || '';
                        if (paramId) {
                            _this.dataSource.currentId = paramId;
                        }
                        _this.listenRoute();
                        _this.loadNavigation(paramId);
                        _this.emitOuter('viewleaf');
                        // scroll top
                        window.scrollTo(0, 0);
                    }
                    break;
                case 'aw-scheda-layout.destroy':
                    _this.destroyed$.next();
                    _this.dataSource.onDestroy();
                    break;
                case 'aw-scheda-layout.togglesidebar':
                    _this.dataSource.collapseSidebar();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-sidebar-header.click':
                    _this.dataSource.collapseSidebar();
                    break;
                case 'aw-scheda-dropdown.click':
                    _this.dataSource.changeDigitalObject(payload);
                    break;
                default:
                    break;
            }
        });
    };
    AwSchedaLayoutEH.prototype.listenRoute = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var paramId = params.get('id');
            if (paramId) {
                if (paramId) {
                    _this.dataSource.currentId = paramId;
                    _this.emitOuter('routechanged', paramId);
                }
                _this.dataSource.contentIsLoading = true;
                _this.dataSource.loadItem(paramId).subscribe(function (response) {
                    _this.dataSource.contentIsLoading = false;
                    if (response)
                        _this.dataSource.loadContent(response);
                });
            }
            // scroll top
            window.scrollTo(0, 0);
        });
    };
    AwSchedaLayoutEH.prototype.loadNavigation = function (selectedItem) {
        var _this = this;
        this.dataSource.updateNavigation('Caricamento in corso...');
        this.dataSource.getNavigation('patrimonio').subscribe(function (response) {
            if (response) {
                _this.dataSource.setTree(response);
                _this.dataSource.updateNavigation(_this.dataSource.getTree().label);
                _this.emitOuter('navigationresponse', {
                    tree: _this.dataSource.getTree(),
                    currentItem: selectedItem,
                    basePath: _this.configuration.get('paths').schedaBasePath,
                });
            }
        });
    };
    return AwSchedaLayoutEH;
}(EventHandler));
export { AwSchedaLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBc0Msb0NBQVk7SUFBbEQ7UUFBQSxxRUF1RkM7UUF0RlMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFzRm5ELENBQUM7SUFoRlEsaUNBQU0sR0FBYjtRQUFBLGlCQTZDQztRQTVDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFBRTt3QkFDNUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzt3QkFDcEQsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO3lCQUNyQzt3QkFDRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ25CLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMs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QUFPLENBQUMsQ0FBQyxjQUFjO2lCQUN6RCxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXZGRCxDQUFzQyxZQUFZLEdBdUZqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IGFueTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5pbml0Jzoge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1JZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xyXG4gICAgICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uKHBhcmFtSWQpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3ZpZXdsZWFmJyk7XHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgfSBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC50b2dnbGVzaWRlYmFyJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb2xsYXBzZVNpZGViYXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbGxhcHNlU2lkZWJhcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWRyb3Bkb3duLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGFuZ2VEaWdpdGFsT2JqZWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtSWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICBpZiAocGFyYW1JZCkge1xyXG4gICAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdyb3V0ZWNoYW5nZWQnLCBwYXJhbUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbnRlbnRJc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbUlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29udGVudElzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZU5hdmlnYXRpb24oJ0NhcmljYW1lbnRvIGluIGNvcnNvLi4uJyk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZ2V0TmF2aWdhdGlvbigncGF0cmltb25pbycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFRyZWUocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVOYXZpZ2F0aW9uKHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCkubGFiZWwpO1xyXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCduYXZpZ2F0aW9ucmVzcG9uc2UnLCB7XHJcbiAgICAgICAgICB0cmVlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0VHJlZSgpLFxyXG4gICAgICAgICAgY3VycmVudEl0ZW06IHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19