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
        var baseUrls = this.configuration.get('baseUrls') || {};
        var iiifServer = baseUrls.iiifServer, iipServer = baseUrls.iipServer;
        if (Array.isArray(response === null || response === void 0 ? void 0 : response.digitalObjects)) {
            response.digitalObjects.forEach(function (digitalObject) {
                // iip config url check
                if (iipServer && digitalObject.type === 'images-iip') {
                    digitalObject.items.forEach(function (item) {
                        item.url = "" + iipServer + item.url;
                    });
                }
                // iiif config url check
                if (iiifServer && digitalObject.type === 'images-iiif') {
                    digitalObject.items.forEach(function (item) {
                        item.url = "" + iiifServer + item.url;
                    });
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUNMLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFDNUIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0M7SUFBc0Msb0NBQVk7SUFBbEQ7UUFBQSxxRUFnS0M7UUEvSlMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUErSm5ELENBQUM7SUF6SlEsaUNBQU0sR0FBYjtRQUFBLGlCQTZDQztRQTVDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFBRTt3QkFDNUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzt3QkFDcEQsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FB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Q0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUNyQixDQUFDO3dCQUNKLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTyw0Q0FBaUIsR0FBekIsVUFBMEIsUUFBUTtRQUNoQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsU0FBUyxFQUFFO1lBQ3ZCLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtvQkFBVixzQkFBUTtnQkFDcEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVU7d0JBQVIsa0JBQU07b0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFZOzRCQUFWLHNCQUFRO3dCQUN4QixVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBaEtELENBQXNDLFlBQVksR0FnS2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHtcclxuICBmb3JrSm9pbiwgZnJvbSwgb2YsIFN1YmplY3RcclxufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmluaXQnOiB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgJyc7XHJcbiAgICAgICAgICBpZiAocGFyYW1JZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuICAgICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb24ocGFyYW1JZCk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndmlld2xlYWYnKTtcclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnRvZ2dsZXNpZGViYXInOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbGxhcHNlU2lkZWJhcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29sbGFwc2VTaWRlYmFyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtZHJvcGRvd24uY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNoYW5nZURpZ2l0YWxPYmplY3QocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1JZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPSBwYXJhbUlkO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3JvdXRlY2hhbmdlZCcsIHBhcmFtSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29udGVudElzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKHBhcmFtSWQpLnBpcGUoXHJcbiAgICAgICAgICBzd2l0Y2hNYXAoKHJlc3BvbnNlKSA9PiB0aGlzLnBhcnNlRGlnaXRhbE9iamVjdHMkKHJlc3BvbnNlKSlcclxuICAgICAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2Nyb2xsIHRvcFxyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlTmF2aWdhdGlvbignQ2FyaWNhbWVudG8gaW4gY29yc28uLi4nKTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5nZXROYXZpZ2F0aW9uKCdwYXRyaW1vbmlvJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VHJlZShyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZU5hdmlnYXRpb24odGhpcy5kYXRhU291cmNlLmdldFRyZWUoKS5sYWJlbCk7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ25hdmlnYXRpb25yZXNwb25zZScsIHtcclxuICAgICAgICAgIHRyZWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCksXHJcbiAgICAgICAgICBjdXJyZW50SXRlbTogc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJzZURpZ2l0YWxPYmplY3RzJChyZXNwb25zZSkge1xyXG4gICAgY29uc3QgaWlpZk1hbmlmZXN0JCA9IHt9O1xyXG4gICAgY29uc3QgYmFzZVVybHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdiYXNlVXJscycpIHx8IHt9O1xyXG4gICAgY29uc3QgeyBpaWlmU2VydmVyLCBpaXBTZXJ2ZXIgfSA9IGJhc2VVcmxzO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2U/LmRpZ2l0YWxPYmplY3RzKSkge1xyXG4gICAgICByZXNwb25zZS5kaWdpdGFsT2JqZWN0cy5mb3JFYWNoKChkaWdpdGFsT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gaWlwIGNvbmZpZyB1cmwgY2hlY2tcclxuICAgICAgICBpZiAoaWlwU2VydmVyICYmIGRpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ2ltYWdlcy1paXAnKSB7XHJcbiAgICAgICAgICBkaWdpdGFsT2JqZWN0Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS51cmwgPSBgJHtpaXBTZXJ2ZXJ9JHtpdGVtLnVybH1gO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlpaWYgY29uZmlnIHVybCBjaGVja1xyXG4gICAgICAgIGlmIChpaWlmU2VydmVyICYmIGRpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ2ltYWdlcy1paWlmJykge1xyXG4gICAgICAgICAgZGlnaXRhbE9iamVjdC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0udXJsID0gYCR7aWlpZlNlcnZlcn0ke2l0ZW0udXJsfWA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdpbWFnZXMtaWlpZicpIHtcclxuICAgICAgICAgIGRpZ2l0YWxPYmplY3QuaXRlbXMuZm9yRWFjaCgoeyB1cmwgfSkgPT4ge1xyXG4gICAgICAgICAgICBpaWlmTWFuaWZlc3QkW3VybF0gPSBmcm9tKFxyXG4gICAgICAgICAgICAgIGZldGNoKHVybClcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGRhdGEuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgbG9hZGluZyBpaWlmIG1hbmlmZXN0ICR7dXJsfWAsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzRW1wdHkoaWlpZk1hbmlmZXN0JCkpIHtcclxuICAgICAgcmV0dXJuIGZvcmtKb2luKGlpaWZNYW5pZmVzdCQpLnBpcGUoXHJcbiAgICAgICAgc3dpdGNoTWFwKChkYXRhOiBvYmplY3QpID0+IHtcclxuICAgICAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzLmZvckVhY2goKGRpZ2l0YWxPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ2ltYWdlcy1paWlmJykge1xyXG4gICAgICAgICAgICAgIGRpZ2l0YWxPYmplY3QuaXRlbXMuZm9yRWFjaCgoaXRlbUltYWdlcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpZ2l0YWxPYmplY3QuaXRlbXNbaW5kZXhdLmlpaWZJbWFnZXMgPSB0aGlzLmdldE1hbmlmZXN0SW1hZ2VzKFxyXG4gICAgICAgICAgICAgICAgICBkYXRhW2l0ZW1JbWFnZXMudXJsXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYW5pZmVzdEltYWdlcyhtYW5pZmVzdCkge1xyXG4gICAgY29uc3QgaWlpZkltYWdlcyA9IFtdO1xyXG4gICAgaWYgKG1hbmlmZXN0Py5zZXF1ZW5jZXMpIHtcclxuICAgICAgbWFuaWZlc3Quc2VxdWVuY2VzLmZvckVhY2goKHsgY2FudmFzZXMgfSkgPT4ge1xyXG4gICAgICAgIGNhbnZhc2VzLmZvckVhY2goKHsgaW1hZ2VzIH0pID0+IHtcclxuICAgICAgICAgIGltYWdlcy5mb3JFYWNoKCh7IHJlc291cmNlIH0pID0+IHtcclxuICAgICAgICAgICAgaWlpZkltYWdlcy5wdXNoKHJlc291cmNlWydAaWQnXSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWlpZkltYWdlcztcclxuICB9XHJcbn1cclxuIl19