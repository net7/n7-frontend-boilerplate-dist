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
        _this.defaultDescription = '';
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
        this.eventDescription = this.defaultDescription;
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
                    title: { main: { text: header.title } },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUsvQixPQUFPLHVCQUF1QixDQUFDO0FBRy9CO0lBQW1DLGlDQUFnQjtJQUFuRDtRQUFBLHFFQWdMQztRQWpLUSxhQUFPLEdBQUc7WUFDZixlQUFlLEVBQUUsSUFBSTtZQUNyQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUE7UUFFTSx3QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFJeEIsc0JBQWdCLEdBQUcsRUFBRSxDQUFBO1FBSXJCLGtCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBb0pwRCxDQUFDO0lBeEhDLDhCQUFNLEdBQU4sVUFBTyxPQUFPO1FBQWQsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFD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Z0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdkMsT0FBTyxFQUFFO3dCQUNQLE9BQU8sRUFBRSxDQUFDO2dDQUNSLElBQUksRUFBRSxFQUFFO2dDQUNSLElBQUksRUFBRSxlQUFlO2dDQUNyQixNQUFNLEVBQUU7b0NBQ04sT0FBTyxFQUFFLGFBQWE7aUNBQ3ZCOzZCQUNGLENBQUM7cUJBQ0g7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBaExELENBQW1DLGdCQUFnQixHQWdMbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtLCBHZXRSZXNvdXJjZVJlc3BvbnNlIH0gZnJvbSAnLi9tYXAtbGF5b3V0LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNck1hcExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcGFnZUNvbmZpZztcclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XHJcblxyXG4gIHB1YmxpYyBsb2FkaW5nID0ge1xyXG4gICAgcmVzb3VyY2VEZXRhaWxzOiB0cnVlLFxyXG4gICAgdGltZWxpbmU6IHRydWUsXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XHJcblxyXG4gIHB1YmxpYyBldmVudEhlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXHJcblxyXG4gIHB1YmxpYyByb3V0ZTtcclxuXHJcbiAgcHVibGljIG1hcExpc3RlbmVyJDogU3ViamVjdDxNYXA+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGJpYmxpb2dyYXBoeURhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczoge1xyXG4gICAgICBwYXlsb2FkPzoge1xyXG4gICAgICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgdHlwZTogc3RyaW5nO1xyXG4gICAgICB9O1xyXG4gICAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25Xb3Jrc0RhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbldpdG5lc3NEYXRhOiB7XHJcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xyXG4gICAgaXRlbXM6IEl0ZW1QcmV2aWV3RGF0YVtdO1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uR2FsbGVyeURhdGE7XHJcblxyXG4gIHB1YmxpYyBldmVudFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgIHRoaXMubG9jYXRpb24gPSBwYXlsb2FkLmxvY2F0aW9uO1xyXG5cclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKSB8fCB7fTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhlIG1hcFxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdtYXAnLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXHJcbiAgICB9KS5zdWJzY3JpYmUoKHsgZGF0YVNldCB9KSA9PiB7XHJcbiAgICAgIGlmIChkYXRhU2V0KSB7IHRoaXMub25lKCdtci1tYXAnKS51cGRhdGUoZGF0YVNldCk7IH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci1tYXAnKS5tYXBMb2FkZWQkXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHsgbWFwLCBtYXJrZXJzIH0pID0+IHtcclxuICAgICAgICB0aGlzLm1hcExpc3RlbmVyJC5uZXh0KHsgbWFwLCBtYXJrZXJzIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWREZWZhdWx0cyhuYXZpZ2F0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gdGhpcy5kZWZhdWx0RGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmV2ZW50SGVhZGVyID0gJyc7XHJcbiAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvbWFwLycpO1xyXG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBfdCh0aGlzLnBhZ2VDb25maWcudGl0bGUpIH0gfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFnZURldGFpbHMoaWQpIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy9wbGFjZXMnXHJcbiAgICAgIH1cclxuICAgIH0pLnN1YnNjcmliZSgocmVzOiBHZXRSZXNvdXJjZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmICghcmVzIHx8IHJlcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgICdjb2xsZWN0aW9uLWJpYmxpb2dyYXBoeSc6IGJpYkRhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24tcGxhY2VzJzogcGxhY2VzRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi13aXRuZXNzZXMnOiB3aXRuZXNzRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi13b3Jrcyc6IHdvcmtzRGF0YSxcclxuICAgICAgICBnYWxsZXJ5LFxyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbiAgICAgIH0gPSByZXMuc2VjdGlvbnM7XHJcbiAgICAgIGlmIChwbGFjZXNEYXRhKSB7XHJcbiAgICAgICAgLy8gdGhpcy5oYXNNYXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25lKCdtci1tYXAnKS51cGRhdGUocGxhY2VzRGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhpcy5oYXNNYXAgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYmliRGF0YSkge1xyXG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IGJpYkRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aXRuZXNzRGF0YSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0ge1xyXG4gICAgICAgICAgaXRlbXM6IHdpdG5lc3NEYXRhLml0ZW1zLm1hcCgod2l0bmVzczoge1xyXG4gICAgICAgICAgICBsaW5rOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHR5cGU6IHN0cmluZztcclxuICAgICAgICAgIH0pOiBJdGVtUHJldmlld0RhdGEgPT4gKHtcclxuICAgICAgICAgICAgdGl0bGU6IHdpdG5lc3MudGl0bGUsXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIGhyZWY6IHdpdG5lc3MubGluayxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgaGVhZGVyOiB3aXRuZXNzRGF0YS5oZWFkZXJcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3b3Jrc0RhdGE/Lml0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0ge1xyXG4gICAgICAgICAgaGVhZGVyOiB3b3Jrc0RhdGEuaGVhZGVyLFxyXG4gICAgICAgICAgaXRlbXM6IHdvcmtzRGF0YS5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xyXG4gICAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIGFuY2hvcjogaXRlbS5saW5rID8ge1xyXG4gICAgICAgICAgICAgIGhyZWY6IGl0ZW0ubGluayxcclxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdhbGxlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IGdhbGxlcnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IGhlYWRlci5jb250ZW50O1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcclxuICAgICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogaGVhZGVyLnRpdGxlIH0gfSxcclxuICAgICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAnY2xvc2VidXR0b24nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZGluZy5yZXNvdXJjZURldGFpbHMgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=