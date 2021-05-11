import { __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import 'leaflet.markercluster';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
var MrTimelineLayoutDS = /** @class */ (function (_super) {
    __extends(MrTimelineLayoutDS, _super);
    function MrTimelineLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = {
            resourceDetails: true,
            timeline: true,
        };
        _this.defaultDescription = '';
        _this.eventDescription = '';
        _this.hasMap = false;
        _this.mapHeader = _t('timeline#mapheader');
        _this.timelineListener$ = new Subject();
        return _this;
    }
    MrTimelineLayoutDS.prototype.onInit = function (payload) {
        var _this = this;
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        // update the timeline
        this.communication.request$('timeline', {
            method: 'GET',
            onError: function (e) { return console.error(e); }
        }).subscribe(function (d) {
            _this.timelineData = d;
            _this.loading.timeline = false;
            _this.one('mr-timeline').update(d);
        });
        this.getWidgetDataSource('mr-timeline').timelineLoaded$
            .pipe(first())
            .subscribe(function (timeline) {
            _this.timelineListener$.next(timeline);
        });
        // update the description
        this.communication.request$('timelineDescription', {
            method: 'GET',
            onError: function (e) { return console.error(e); },
        }).subscribe(function (d) {
            _this.defaultDescription = d.text;
            _this.loadDefaults(false);
        });
    };
    MrTimelineLayoutDS.prototype.loadDefaults = function (navigate) {
        var timelineInstance = this.getWidgetDataSource('mr-timeline').timeline;
        if (timelineInstance) {
            timelineInstance.setSelection([]);
        }
        this.eventDescription = this.defaultDescription;
        this.eventHeader = '';
        this.hasMap = false;
        this.bibliographyData = undefined;
        this.collectionWitnessData = undefined;
        this.collectionWorksData = undefined;
        this.collectionGalleryData = undefined;
        if (navigate)
            this.location.go('/timeline/');
        this.one('mr-year-header').update({
            title: { main: { text: _t(this.pageConfig.title) } },
        });
    };
    MrTimelineLayoutDS.prototype.updatePageDetails = function (id) {
        var _this = this;
        this.communication.request$('resource', {
            onError: function (e) { return console.error(e); },
            method: 'POST',
            params: {
                id: id, type: 'views/time-events'
            }
        }).subscribe(function (res) {
            if (!res || res == null)
                return;
            var _a = res.sections, 
            /* eslint-disable */
            bibData = _a["collection-bibliography"], placesData = _a["collection-places"], witnessData = _a["collection-witnesses"], worksData = _a["collection-works"], gallery = _a.gallery, header = _a.header;
            if (placesData) {
                _this.hasMap = true;
                _this.one('mr-map').update(placesData);
            }
            else {
                _this.hasMap = false;
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
    return MrTimelineLayoutDS;
}(LayoutDataSource));
export { MrTimelineLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxPQUFPLHVCQUF1QixDQUFDO0FBRy9CLGtFQUFrRTtBQUVsRTtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFzTUM7UUF2TFEsYUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWYsZUFBUyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXJDLHVCQUFpQixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFBOztJQW9LN0QsQ0FBQztJQXhJQyxtQ0FBTSxHQUFOLFVBQU8sT0FBTztRQUFkLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFB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Q0FDUixJQUFJLEVBQUUsZUFBZTtnQ0FDckIsTUFBTSxFQUFFO29DQUNOLE9BQU8sRUFBRSxhQUFhO2lDQUN2Qjs2QkFDRixDQUFDO3FCQUNIO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXRNRCxDQUF3QyxnQkFBZ0IsR0FzTXZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEsIFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAndmlzLXRpbWVsaW5lJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtLCBHZXRSZXNvdXJjZVJlc3BvbnNlIH0gZnJvbSAnLi90aW1lbGluZS1sYXlvdXQudHlwZXMnO1xuXG4vLyBkZW1vIHBhZ2U6IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC90aW1lbGluZS8yOTkyL21pc3Npb25lLXZlbmV6aWFcblxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcGFnZUNvbmZpZztcblxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcblxuICBwdWJsaWMgbG9hZGluZyA9IHtcbiAgICByZXNvdXJjZURldGFpbHM6IHRydWUsXG4gICAgdGltZWxpbmU6IHRydWUsXG4gIH1cblxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XG5cbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XG5cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnJ1xuXG4gIHB1YmxpYyB0aW1lbGluZURhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBwdWJsaWMgaGFzTWFwID0gZmFsc2U7XG5cbiAgcHVibGljIHJvdXRlO1xuXG4gIHB1YmxpYyBtYXBIZWFkZXIgPSBfdCgndGltZWxpbmUjbWFwaGVhZGVyJyk7XG5cbiAgcHVibGljIHRpbWVsaW5lTGlzdGVuZXIkOiBTdWJqZWN0PFRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KClcblxuICBwdWJsaWMgYmlibGlvZ3JhcGh5RGF0YToge1xuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XG4gICAgaXRlbXM6IHtcbiAgICAgIHBheWxvYWQ/OiB7XG4gICAgICAgIGFjdGlvbjogc3RyaW5nO1xuICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICB9O1xuICAgICAgdGV4dD86IHN0cmluZztcbiAgICB9W107XG4gIH1cblxuICBwdWJsaWMgY29sbGVjdGlvbldvcmtzRGF0YToge1xuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XG4gICAgaXRlbXM6IEl0ZW1QcmV2aWV3RGF0YVtdO1xuICB9XG5cbiAgcHVibGljIGNvbGxlY3Rpb25XaXRuZXNzRGF0YToge1xuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XG4gICAgaXRlbXM6IEl0ZW1QcmV2aWV3RGF0YVtdO1xuICB9O1xuXG4gIHB1YmxpYyBjb2xsZWN0aW9uR2FsbGVyeURhdGE7XG5cbiAgcHVibGljIGV2ZW50VGl0bGU6IHN0cmluZztcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XG5cbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xuXG4gICAgLy8gdXBkYXRlIHRoZSB0aW1lbGluZVxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmUnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcbiAgICAgIHRoaXMudGltZWxpbmVEYXRhID0gZDtcbiAgICAgIHRoaXMubG9hZGluZy50aW1lbGluZSA9IGZhbHNlO1xuICAgICAgdGhpcy5vbmUoJ21yLXRpbWVsaW5lJykudXBkYXRlKGQpO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnbXItdGltZWxpbmUnKS50aW1lbGluZUxvYWRlZCRcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKCh0aW1lbGluZTogVGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZUxpc3RlbmVyJC5uZXh0KHRpbWVsaW5lKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBkZXNjcmlwdGlvblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmVEZXNjcmlwdGlvbicsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcbiAgICAgIHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uID0gZC50ZXh0O1xuICAgICAgdGhpcy5sb2FkRGVmYXVsdHMoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdGltZWxpbmVJbnN0YW5jZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnbXItdGltZWxpbmUnKS50aW1lbGluZSBhcyBUaW1lbGluZTtcbiAgICBpZiAodGltZWxpbmVJbnN0YW5jZSkge1xuICAgICAgdGltZWxpbmVJbnN0YW5jZS5zZXRTZWxlY3Rpb24oW10pO1xuICAgIH1cbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbjtcbiAgICB0aGlzLmV2ZW50SGVhZGVyID0gJyc7XG4gICAgdGhpcy5oYXNNYXAgPSBmYWxzZTtcbiAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL3RpbWVsaW5lLycpO1xuICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IF90KHRoaXMucGFnZUNvbmZpZy50aXRsZSkgfSB9LFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFnZURldGFpbHMoaWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZCwgdHlwZTogJ3ZpZXdzL3RpbWUtZXZlbnRzJ1xuICAgICAgfVxuICAgIH0pLnN1YnNjcmliZSgocmVzOiBHZXRSZXNvdXJjZVJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlcyB8fCByZXMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgY29uc3Qge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICAnY29sbGVjdGlvbi1iaWJsaW9ncmFwaHknOiBiaWJEYXRhLFxuICAgICAgICAnY29sbGVjdGlvbi1wbGFjZXMnOiBwbGFjZXNEYXRhLFxuICAgICAgICAnY29sbGVjdGlvbi13aXRuZXNzZXMnOiB3aXRuZXNzRGF0YSxcbiAgICAgICAgJ2NvbGxlY3Rpb24td29ya3MnOiB3b3Jrc0RhdGEsXG4gICAgICAgIGdhbGxlcnksXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgfSA9IHJlcy5zZWN0aW9ucztcbiAgICAgIGlmIChwbGFjZXNEYXRhKSB7XG4gICAgICAgIHRoaXMuaGFzTWFwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShwbGFjZXNEYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFzTWFwID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYmliRGF0YSkge1xuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSBiaWJEYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHdpdG5lc3NEYXRhKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0ge1xuICAgICAgICAgIGl0ZW1zOiB3aXRuZXNzRGF0YS5pdGVtcy5tYXAoKHdpdG5lc3M6IHtcbiAgICAgICAgICAgIGxpbms6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgdHlwZTogc3RyaW5nO1xuICAgICAgICAgIH0pOiBJdGVtUHJldmlld0RhdGEgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiB3aXRuZXNzLnRpdGxlLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIGhyZWY6IHdpdG5lc3MubGluayxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSksXG4gICAgICAgICAgaGVhZGVyOiB3aXRuZXNzRGF0YS5oZWFkZXJcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHdvcmtzRGF0YT8uaXRlbXMpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0ge1xuICAgICAgICAgIGhlYWRlcjogd29ya3NEYXRhLmhlYWRlcixcbiAgICAgICAgICBpdGVtczogd29ya3NEYXRhLml0ZW1zLm1hcCgoaXRlbTogQ29sbGVjdGlvbkl0ZW0pID0+ICh7XG4gICAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgYW5jaG9yOiBpdGVtLmxpbmsgPyB7XG4gICAgICAgICAgICAgIGhyZWY6IGl0ZW0ubGluayxcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXG4gICAgICAgICAgfSkpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoZ2FsbGVyeSkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IGdhbGxlcnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gaGVhZGVyLmNvbnRlbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMudGl0bGU7XG4gICAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBoZWFkZXIudGl0bGUgfSB9LFxuICAgICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nLnJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=