import { __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'leaflet.markercluster';
var MrMapLayoutDS = /** @class */ (function (_super) {
    __extends(MrMapLayoutDS, _super);
    function MrMapLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = {
            resourceDetails: true,
            timeline: true,
        };
        _this.eventDescription = '';
        _this.mapListener$ = new Subject();
        return _this;
    }
    MrMapLayoutDS.prototype.onInit = function (payload) {
        var _this = this;
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        // update the map
        this.communication.request$('map', {
            method: 'GET',
            onError: function (e) { return console.error(e); }
        }).subscribe(function (_a) {
            var dataSet = _a.dataSet;
            if (dataSet) {
                _this.one('mr-map').update(dataSet);
            }
        });
        this.getWidgetDataSource('mr-map').mapLoaded$
            .pipe(first())
            .subscribe(function (_a) {
            var map = _a.map, markers = _a.markers;
            _this.mapListener$.next({ map: map, markers: markers });
        });
    };
    MrMapLayoutDS.prototype.loadDefaults = function (navigate) {
        this.eventDescription = _t(this.pageConfig.defaultText);
        this.eventHeader = '';
        this.bibliographyData = undefined;
        this.collectionWitnessData = undefined;
        this.collectionWorksData = undefined;
        this.collectionGalleryData = undefined;
        if (navigate)
            this.location.go('/map/');
        this.one('mr-year-header').update({
            title: { main: { text: _t(this.pageConfig.title) } },
        });
    };
    MrMapLayoutDS.prototype.updatePageDetails = function (id) {
        var _this = this;
        this.communication.request$('resource', {
            onError: function (e) { return console.error(e); },
            method: 'POST',
            params: {
                id: id, type: 'views/places'
            }
        }).subscribe(function (res) {
            if (!res || res == null)
                return;
            var _a = res.sections, 
            /* eslint-disable */
            bibData = _a["collection-bibliography"], placesData = _a["collection-places"], witnessData = _a["collection-witnesses"], worksData = _a["collection-works"], gallery = _a.gallery, header = _a.header;
            if (placesData) {
                // this.hasMap = true;
                _this.one('mr-map').update(placesData);
            }
            else {
                // this.hasMap = false;
            }
            if (bibData) {
                _this.bibliographyData = bibData;
            }
            else {
                _this.bibliographyData = undefined;
            }
            if (witnessData) {
                _this.collectionWitnessData = {
                    items: witnessData.items.map(function (witness) { return ({
                        title: witness.title,
                        anchor: {
                            href: witness.link,
                        }
                    }); }),
                    header: witnessData.header
                };
            }
            else {
                _this.collectionWitnessData = undefined;
            }
            if (worksData === null || worksData === void 0 ? void 0 : worksData.items) {
                _this.collectionWorksData = {
                    header: worksData.header,
                    items: worksData.items.map(function (item) { return ({
                        image: item.image,
                        title: item.title,
                        anchor: item.link ? {
                            href: item.link,
                        } : undefined,
                        text: item.text,
                    }); })
                };
            }
            else {
                _this.collectionWorksData = undefined;
            }
            if (gallery) {
                _this.collectionGalleryData = gallery;
            }
            else {
                _this.collectionGalleryData = undefined;
            }
            if (header) {
                _this.eventDescription = header.content;
                _this.eventHeader = res.title;
                _this.one('mr-year-header').update({
                    title: { main: { text: res.title } },
                    actions: {
                        buttons: [{
                                text: '',
                                icon: 'n7-icon-close',
                                anchor: {
                                    payload: 'closebutton'
                                }
                            }]
                    }
                });
            }
            _this.loading.resourceDetails = false;
        });
    };
    return MrMapLayoutDS;
}(LayoutDataSource));
export { MrMapLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUsvQixPQUFPLHVCQUF1QixDQUFDO0FBRy9CO0lBQW1DLGlDQUFnQjtJQUFuRDtRQUFBLHFFQThLQztRQS9KUSxhQUFPLEdBQUc7WUFDZixlQUFlLEVBQUUsSUFBSTtZQUNyQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUE7UUFJTSxzQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFJckIsa0JBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFvSnBELENBQUM7SUF4SEMsOEJBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUQsaUJBQWlCO1FBQ2pCLElBQUksQ0FB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LEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDUCxPQUFPLEVBQUUsQ0FBQztnQ0FDUixJQUFJLEVBQUUsRUFBRTtnQ0FDUixJQUFJLEVBQUUsZUFBZTtnQ0FDckIsTUFBTSxFQUFFO29DQUNOLE9BQU8sRUFBRSxhQUFhO2lDQUN2Qjs2QkFDRixDQUFDO3FCQUNIO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTlLRCxDQUFtQyxnQkFBZ0IsR0E4S2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXAgfSBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgR2V0UmVzb3VyY2VSZXNwb25zZSB9IGZyb20gJy4vbWFwLWxheW91dC50eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHBhZ2VDb25maWc7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwdWJsaWMgbG9hZGluZyA9IHtcclxuICAgIHJlc291cmNlRGV0YWlsczogdHJ1ZSxcclxuICAgIHRpbWVsaW5lOiB0cnVlLFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBldmVudERlc2NyaXB0aW9uID0gJydcclxuXHJcbiAgcHVibGljIHJvdXRlO1xyXG5cclxuICBwdWJsaWMgbWFwTGlzdGVuZXIkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgYmlibGlvZ3JhcGh5RGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIHBheWxvYWQ/OiB7XHJcbiAgICAgICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICAgIH07XHJcbiAgICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbldvcmtzRGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uV2l0bmVzc0RhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25HYWxsZXJ5RGF0YTtcclxuXHJcbiAgcHVibGljIGV2ZW50VGl0bGU6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XHJcblxyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgbWFwXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ21hcCcsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH0pLnN1YnNjcmliZSgoeyBkYXRhU2V0IH0pID0+IHtcclxuICAgICAgaWYgKGRhdGFTZXQpIHsgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShkYXRhU2V0KTsgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLW1hcCcpLm1hcExvYWRlZCRcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSgoeyBtYXAsIG1hcmtlcnMgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFwTGlzdGVuZXIkLm5leHQoeyBtYXAsIG1hcmtlcnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBfdCh0aGlzLnBhZ2VDb25maWcuZGVmYXVsdFRleHQpO1xyXG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xyXG4gICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL21hcC8nKTtcclxuICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogX3QodGhpcy5wYWdlQ29uZmlnLnRpdGxlKSB9IH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvcGxhY2VzJ1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlczogR2V0UmVzb3VyY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoIXJlcyB8fCByZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgICAgICAnY29sbGVjdGlvbi1iaWJsaW9ncmFwaHknOiBiaWJEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXBsYWNlcyc6IHBsYWNlc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td2l0bmVzc2VzJzogd2l0bmVzc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td29ya3MnOiB3b3Jrc0RhdGEsXHJcbiAgICAgICAgZ2FsbGVyeSxcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgICB9ID0gcmVzLnNlY3Rpb25zO1xyXG4gICAgICBpZiAocGxhY2VzRGF0YSkge1xyXG4gICAgICAgIC8vIHRoaXMuaGFzTWFwID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHBsYWNlc0RhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMuaGFzTWFwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJpYkRhdGEpIHtcclxuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSBiaWJEYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAod2l0bmVzc0RhdGEpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHtcclxuICAgICAgICAgIGl0ZW1zOiB3aXRuZXNzRGF0YS5pdGVtcy5tYXAoKHdpdG5lc3M6IHtcclxuICAgICAgICAgICAgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyB0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICB9KTogSXRlbVByZXZpZXdEYXRhID0+ICh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB3aXRuZXNzLnRpdGxlLFxyXG4gICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICBocmVmOiB3aXRuZXNzLmxpbmssXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICAgIGhlYWRlcjogd2l0bmVzc0RhdGEuaGVhZGVyXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAod29ya3NEYXRhPy5pdGVtcykge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHtcclxuICAgICAgICAgIGhlYWRlcjogd29ya3NEYXRhLmhlYWRlcixcclxuICAgICAgICAgIGl0ZW1zOiB3b3Jrc0RhdGEuaXRlbXMubWFwKChpdGVtOiBDb2xsZWN0aW9uSXRlbSkgPT4gKHtcclxuICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICBhbmNob3I6IGl0ZW0ubGluayA/IHtcclxuICAgICAgICAgICAgICBocmVmOiBpdGVtLmxpbmssXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChnYWxsZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSBnYWxsZXJ5O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBoZWFkZXIuY29udGVudDtcclxuICAgICAgICB0aGlzLmV2ZW50SGVhZGVyID0gcmVzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XHJcbiAgICAgICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IHJlcy50aXRsZSB9IH0sXHJcbiAgICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ2Nsb3NlYnV0dG9uJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWRpbmcucmVzb3VyY2VEZXRhaWxzID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19