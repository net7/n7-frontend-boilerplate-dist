import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { isEmpty } from 'lodash';
import { forkJoin, from, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
                _this.dataSource.loadItem(paramId).pipe(switchMap(function (response) { return _this.parseDigitalObjects$(response); })).subscribe(function (response) {
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
    AwSchedaLayoutEH.prototype.parseDigitalObjects$ = function (response) {
        var _this = this;
        var iiifManifest$ = {};
        if (Array.isArray(response === null || response === void 0 ? void 0 : response.digitalObjects)) {
            response.digitalObjects.forEach(function (digitalObject) {
                if (digitalObject.type === 'images-iiif') {
                    digitalObject.items.forEach(function (_a) {
                        var url = _a.url;
                        iiifManifest$[url] = from(fetch(url)
                            .then(function (data) {
                            if (!data.ok) {
                                throw Error(data.statusText);
                            }
                            return data.json();
                        })
                            .catch(function (err) {
                            console.warn("Error loading iiif manifest " + url, err);
                            return null;
                        }));
                    });
                }
            });
        }
        if (!isEmpty(iiifManifest$)) {
            return forkJoin(iiifManifest$).pipe(switchMap(function (data) {
                response.digitalObjects.forEach(function (digitalObject) {
                    if (digitalObject.type === 'images-iiif') {
                        digitalObject.items.forEach(function (itemImages, index) {
                            digitalObject.items[index].iiifImages = _this.getManifestImages(data[itemImages.url]);
                        });
                    }
                });
                return of(response);
            }));
        }
        return of(response);
    };
    AwSchedaLayoutEH.prototype.getManifestImages = function (manifest) {
        var iiifImages = [];
        if (manifest === null || manifest === void 0 ? void 0 : manifest.sequences) {
            manifest.sequences.forEach(function (_a) {
                var canvases = _a.canvases;
                canvases.forEach(function (_a) {
                    var images = _a.images;
                    images.forEach(function (_a) {
                        var resource = _a.resource;
                        iiifImages.push(resource['@id']);
                    });
                });
            });
        }
        return iiifImages;
    };
    return AwSchedaLayoutEH;
}(EventHandler));
export { AwSchedaLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUNMLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFDNUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFBc0Msb0NBQVk7SUFBbEQ7UUFBQSxxRUFpSkM7UUFoSlMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFnSm5ELENBQUM7SUExSVEsaUNBQU0sR0FBYjtRQUFBLGlCQTZDQztRQTVDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFBRTt3QkFDNUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzt3QkFDcEQsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FB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QixVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBakpELENBQXNDLFlBQVksR0FpSmpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBmb3JrSm9pbiwgZnJvbSwgb2YsIFN1YmplY3Rcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmluaXQnOiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgY29uc3QgcGFyYW1JZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xuICAgICAgICAgIGlmIChwYXJhbUlkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xuICAgICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb24ocGFyYW1JZCk7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3ZpZXdsZWFmJyk7XG4gICAgICAgICAgLy8gc2Nyb2xsIHRvcFxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfSBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQudG9nZ2xlc2lkZWJhcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbGxhcHNlU2lkZWJhcigpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29sbGFwc2VTaWRlYmFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1kcm9wZG93bi5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNoYW5nZURpZ2l0YWxPYmplY3QocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtSWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgaWYgKHBhcmFtSWQpIHtcbiAgICAgICAgaWYgKHBhcmFtSWQpIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncm91dGVjaGFuZ2VkJywgcGFyYW1JZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbnRlbnRJc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1JZCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKHJlc3BvbnNlKSA9PiB0aGlzLnBhcnNlRGlnaXRhbE9iamVjdHMkKHJlc3BvbnNlKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbnRlbnRJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gc2Nyb2xsIHRvcFxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTmF2aWdhdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlTmF2aWdhdGlvbignQ2FyaWNhbWVudG8gaW4gY29yc28uLi4nKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZ2V0TmF2aWdhdGlvbigncGF0cmltb25pbycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VHJlZShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVOYXZpZ2F0aW9uKHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCkubGFiZWwpO1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignbmF2aWdhdGlvbnJlc3BvbnNlJywge1xuICAgICAgICAgIHRyZWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCksXG4gICAgICAgICAgY3VycmVudEl0ZW06IHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRGlnaXRhbE9iamVjdHMkKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgaWlpZk1hbmlmZXN0JCA9IHt9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3BvbnNlPy5kaWdpdGFsT2JqZWN0cykpIHtcbiAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzLmZvckVhY2goKGRpZ2l0YWxPYmplY3QpID0+IHtcbiAgICAgICAgaWYgKGRpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ2ltYWdlcy1paWlmJykge1xuICAgICAgICAgIGRpZ2l0YWxPYmplY3QuaXRlbXMuZm9yRWFjaCgoeyB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgaWlpZk1hbmlmZXN0JFt1cmxdID0gZnJvbShcbiAgICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWRhdGEub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoZGF0YS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEVycm9yIGxvYWRpbmcgaWlpZiBtYW5pZmVzdCAke3VybH1gLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWlzRW1wdHkoaWlpZk1hbmlmZXN0JCkpIHtcbiAgICAgIHJldHVybiBmb3JrSm9pbihpaWlmTWFuaWZlc3QkKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGRhdGE6IG9iamVjdCkgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzLmZvckVhY2goKGRpZ2l0YWxPYmplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChkaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdpbWFnZXMtaWlpZicpIHtcbiAgICAgICAgICAgICAgZGlnaXRhbE9iamVjdC5pdGVtcy5mb3JFYWNoKChpdGVtSW1hZ2VzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpZ2l0YWxPYmplY3QuaXRlbXNbaW5kZXhdLmlpaWZJbWFnZXMgPSB0aGlzLmdldE1hbmlmZXN0SW1hZ2VzKFxuICAgICAgICAgICAgICAgICAgZGF0YVtpdGVtSW1hZ2VzLnVybF1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFuaWZlc3RJbWFnZXMobWFuaWZlc3QpIHtcbiAgICBjb25zdCBpaWlmSW1hZ2VzID0gW107XG4gICAgaWYgKG1hbmlmZXN0Py5zZXF1ZW5jZXMpIHtcbiAgICAgIG1hbmlmZXN0LnNlcXVlbmNlcy5mb3JFYWNoKCh7IGNhbnZhc2VzIH0pID0+IHtcbiAgICAgICAgY2FudmFzZXMuZm9yRWFjaCgoeyBpbWFnZXMgfSkgPT4ge1xuICAgICAgICAgIGltYWdlcy5mb3JFYWNoKCh7IHJlc291cmNlIH0pID0+IHtcbiAgICAgICAgICAgIGlpaWZJbWFnZXMucHVzaChyZXNvdXJjZVsnQGlkJ10pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaWlpZkltYWdlcztcbiAgfVxufVxuIl19