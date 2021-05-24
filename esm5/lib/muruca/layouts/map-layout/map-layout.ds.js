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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUsvQixPQUFPLHVCQUF1QixDQUFDO0FBRy9CO0lBQW1DLGlDQUFnQjtJQUFuRDtRQUFBLHFFQThLQztRQS9KUSxhQUFPLEdBQUc7WUFDZixlQUFlLEVBQUUsSUFBSTtZQUNyQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUE7UUFJTSxzQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFJckIsa0JBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFvSnBELENBQUM7SUF4SEMsOEJBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNqQyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCO1NBQ2pDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFXO2dCQUFULG9CQUFPO1lBQ3JCLElBQUksT0FBTyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVTthQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDYixTQUFTLENBQUMsVUFBQyxFQUFnQjtnQkFBZCxZQUFHLEVBQUUsb0JBQU87WUFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLFFBQWlCO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ3ZDLElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7U0FDckQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixFQUFFO1FBQXBCLGlCQW1GQztRQWxGQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDdEMsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0I7WUFDaEMsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUU7Z0JBQ04sRUFBRSxJQUFBLEVBQUUsSUFBSSxFQUFFLGNBQWM7YUFDekI7U0FDRixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBd0I7WUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSTtnQkFBRSxPQUFPO1lBQzFCLElBQUEsaUJBU1U7WUFSZCxvQkFBb0I7WUFDcEIsdUNBQWtDLEVBQ2xDLG9DQUErQixFQUMvQix3Q0FBbUMsRUFDbkMsa0NBQTZCLEVBQzdCLG9CQUFPLEVBQ1Asa0JBRWMsQ0FBQztZQUNqQixJQUFJLFVBQVUsRUFBRTtnQkFDZCxzQkFBc0I7Z0JBQ3RCLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLHVCQUF1QjthQUN4QjtZQUNELElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzthQUNuQztZQUNELElBQUksV0FBVyxFQUFFO2dCQUNmLEtBQUksQ0FBQyxxQkFBcUIsR0FBRztvQkFDM0IsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FFN0IsSUFBc0IsT0FBQSxDQUFDO3dCQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7d0JBQ3BCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7eUJBQ25CO3FCQUNGLENBQUMsRUFMcUIsQ0FLckIsQ0FBQztvQkFDSCxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07aUJBQzNCLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxLQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsS0FBSyxFQUFFO2dCQUNwQixLQUFJLENBQUMsbUJBQW1CLEdBQUc7b0JBQ3pCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtvQkFDeEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBb0IsSUFBSyxPQUFBLENBQUM7d0JBQ3BELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt5QkFDaEIsQ0FBQyxDQUFDLENBQUMsU0FBUzt3QkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7cUJBQ2hCLENBQUMsRUFQbUQsQ0FPbkQsQ0FBQztpQkFDSixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQzthQUN0QztZQUNELElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQzthQUN4QztZQUNELElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3BDLE9BQU8sRUFBRTt3QkFDUCxPQUFPLEVBQUUsQ0FBQztnQ0FDUixJQUFJLEVBQUUsRUFBRTtnQ0FDUixJQUFJLEVBQUUsZUFBZTtnQ0FDckIsTUFBTSxFQUFFO29DQUNOLE9BQU8sRUFBRSxhQUFhO2lDQUN2Qjs2QkFDRixDQUFDO3FCQUNIO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTlLRCxDQUFtQyxnQkFBZ0IsR0E4S2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtLCBHZXRSZXNvdXJjZVJlc3BvbnNlIH0gZnJvbSAnLi9tYXAtbGF5b3V0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIE1yTWFwTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIHBhZ2VDb25maWc7XG5cbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XG5cbiAgcHVibGljIGxvYWRpbmcgPSB7XG4gICAgcmVzb3VyY2VEZXRhaWxzOiB0cnVlLFxuICAgIHRpbWVsaW5lOiB0cnVlLFxuICB9XG5cbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XG5cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnJ1xuXG4gIHB1YmxpYyByb3V0ZTtcblxuICBwdWJsaWMgbWFwTGlzdGVuZXIkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBiaWJsaW9ncmFwaHlEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczoge1xuICAgICAgcGF5bG9hZD86IHtcbiAgICAgICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIH07XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIH1bXTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xsZWN0aW9uV29ya3NEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XG4gIH1cblxuICBwdWJsaWMgY29sbGVjdGlvbldpdG5lc3NEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XG4gIH07XG5cbiAgcHVibGljIGNvbGxlY3Rpb25HYWxsZXJ5RGF0YTtcblxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcblxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkgfHwge307XG5cbiAgICAvLyB1cGRhdGUgdGhlIG1hcFxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnbWFwJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXG4gICAgfSkuc3Vic2NyaWJlKCh7IGRhdGFTZXQgfSkgPT4ge1xuICAgICAgaWYgKGRhdGFTZXQpIHsgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShkYXRhU2V0KTsgfVxuICAgIH0pO1xuICAgIHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnbXItbWFwJykubWFwTG9hZGVkJFxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgbWFwLCBtYXJrZXJzIH0pID0+IHtcbiAgICAgICAgdGhpcy5tYXBMaXN0ZW5lciQubmV4dCh7IG1hcCwgbWFya2VycyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gX3QodGhpcy5wYWdlQ29uZmlnLmRlZmF1bHRUZXh0KTtcbiAgICB0aGlzLmV2ZW50SGVhZGVyID0gJyc7XG4gICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICBpZiAobmF2aWdhdGUpIHRoaXMubG9jYXRpb24uZ28oJy9tYXAvJyk7XG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogX3QodGhpcy5wYWdlQ29uZmlnLnRpdGxlKSB9IH0sXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQYWdlRGV0YWlscyhpZCkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvcGxhY2VzJ1xuICAgICAgfVxuICAgIH0pLnN1YnNjcmliZSgocmVzOiBHZXRSZXNvdXJjZVJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlcyB8fCByZXMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgY29uc3Qge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICAnY29sbGVjdGlvbi1iaWJsaW9ncmFwaHknOiBiaWJEYXRhLFxuICAgICAgICAnY29sbGVjdGlvbi1wbGFjZXMnOiBwbGFjZXNEYXRhLFxuICAgICAgICAnY29sbGVjdGlvbi13aXRuZXNzZXMnOiB3aXRuZXNzRGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24td29ya3MnOiB3b3Jrc0RhdGEsXG4gICAgICAgIGdhbGxlcnksXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgfSA9IHJlcy5zZWN0aW9ucztcbiAgICAgIGlmIChwbGFjZXNEYXRhKSB7XG4gICAgICAgIC8vIHRoaXMuaGFzTWFwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShwbGFjZXNEYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMuaGFzTWFwID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYmliRGF0YSkge1xuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSBiaWJEYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHdpdG5lc3NEYXRhKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0ge1xuICAgICAgICAgIGl0ZW1zOiB3aXRuZXNzRGF0YS5pdGVtcy5tYXAoKHdpdG5lc3M6IHtcbiAgICAgICAgICAgIGxpbms6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgdHlwZTogc3RyaW5nO1xuICAgICAgICAgIH0pOiBJdGVtUHJldmlld0RhdGEgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiB3aXRuZXNzLnRpdGxlLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIGhyZWY6IHdpdG5lc3MubGluayxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSksXG4gICAgICAgICAgaGVhZGVyOiB3aXRuZXNzRGF0YS5oZWFkZXJcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHdvcmtzRGF0YT8uaXRlbXMpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0ge1xuICAgICAgICAgIGhlYWRlcjogd29ya3NEYXRhLmhlYWRlcixcbiAgICAgICAgICBpdGVtczogd29ya3NEYXRhLml0ZW1zLm1hcCgoaXRlbTogQ29sbGVjdGlvbkl0ZW0pID0+ICh7XG4gICAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgYW5jaG9yOiBpdGVtLmxpbmsgPyB7XG4gICAgICAgICAgICAgIGhyZWY6IGl0ZW0ubGluayxcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXG4gICAgICAgICAgfSkpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoZ2FsbGVyeSkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IGdhbGxlcnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gaGVhZGVyLmNvbnRlbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMudGl0bGU7XG4gICAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiByZXMudGl0bGUgfSB9LFxuICAgICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nLnJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=