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
            if (gallery) {
                _this.collectionGalleryData = gallery;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxPQUFPLHVCQUF1QixDQUFDO0FBRy9CLGtFQUFrRTtBQUVsRTtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUEwTEM7UUEzS1EsYUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWYsZUFBUyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXJDLHVCQUFpQixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFBOztJQXdKN0QsQ0FBQztJQTVIQyxtQ0FBTSxHQUFOLFVBQU8sT0FBTztRQUFkLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFB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LENBQUMsS0FBSzt3QkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7eUJBQ2hCLENBQUMsQ0FBQyxDQUFDLFNBQVM7d0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3FCQUNoQixDQUFDLEVBUG1ELENBT25ELENBQUM7aUJBQ0osQ0FBQzthQUNIO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQzthQUN0QztZQUNELElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3ZDLE9BQU8sRUFBRTt3QkFDUCxPQUFPLEVBQUUsQ0FBQztnQ0FDUixJQUFJLEVBQUUsRUFBRTtnQ0FDUixJQUFJLEVBQUUsZUFBZTtnQ0FDckIsTUFBTSxFQUFFO29DQUNOLE9BQU8sRUFBRSxhQUFhO2lDQUN2Qjs2QkFDRixDQUFDO3FCQUNIO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTFMRCxDQUF3QyxnQkFBZ0IsR0EwTHZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAndmlzLXRpbWVsaW5lJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgR2V0UmVzb3VyY2VSZXNwb25zZSB9IGZyb20gJy4vdGltZWxpbmUtbGF5b3V0LnR5cGVzJztcclxuXHJcbi8vIGRlbW8gcGFnZTogaHR0cDovL2xvY2FsaG9zdDo0MjAwL3RpbWVsaW5lLzI5OTIvbWlzc2lvbmUtdmVuZXppYVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHBhZ2VDb25maWc7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwdWJsaWMgbG9hZGluZyA9IHtcclxuICAgIHJlc291cmNlRGV0YWlsczogdHJ1ZSxcclxuICAgIHRpbWVsaW5lOiB0cnVlLFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlZmF1bHREZXNjcmlwdGlvbiA9ICcnO1xyXG5cclxuICBwdWJsaWMgZXZlbnRIZWFkZXI6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnJ1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVEYXRhOiBUaW1lbGluZURhdGE7XHJcblxyXG4gIHB1YmxpYyBoYXNNYXAgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHJvdXRlO1xyXG5cclxuICBwdWJsaWMgbWFwSGVhZGVyID0gX3QoJ3RpbWVsaW5lI21hcGhlYWRlcicpO1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8VGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKVxyXG5cclxuICBwdWJsaWMgYmlibGlvZ3JhcGh5RGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIHBheWxvYWQ/OiB7XHJcbiAgICAgICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICAgIH07XHJcbiAgICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbldvcmtzRGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uV2l0bmVzc0RhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25HYWxsZXJ5RGF0YTtcclxuXHJcbiAgcHVibGljIGV2ZW50VGl0bGU6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XHJcblxyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgdGltZWxpbmVcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXHJcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcclxuICAgICAgdGhpcy50aW1lbGluZURhdGEgPSBkO1xyXG4gICAgICB0aGlzLmxvYWRpbmcudGltZWxpbmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5vbmUoJ21yLXRpbWVsaW5lJykudXBkYXRlKGQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLXRpbWVsaW5lJykudGltZWxpbmVMb2FkZWQkXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHRpbWVsaW5lOiBUaW1lbGluZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMaXN0ZW5lciQubmV4dCh0aW1lbGluZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb25cclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmVEZXNjcmlwdGlvbicsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXHJcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcclxuICAgICAgdGhpcy5kZWZhdWx0RGVzY3JpcHRpb24gPSBkLnRleHQ7XHJcbiAgICAgIHRoaXMubG9hZERlZmF1bHRzKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZXZlbnRIZWFkZXIgPSAnJztcclxuICAgIHRoaXMuaGFzTWFwID0gZmFsc2U7XHJcbiAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvdGltZWxpbmUvJyk7XHJcbiAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xyXG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IF90KHRoaXMucGFnZUNvbmZpZy50aXRsZSkgfSB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYWdlRGV0YWlscyhpZCkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCwgdHlwZTogJ3ZpZXdzL3RpbWUtZXZlbnRzJ1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlczogR2V0UmVzb3VyY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoIXJlcyB8fCByZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgICAgICAnY29sbGVjdGlvbi1iaWJsaW9ncmFwaHknOiBiaWJEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXBsYWNlcyc6IHBsYWNlc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td2l0bmVzc2VzJzogd2l0bmVzc0RhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24td29ya3MnOiB3b3Jrc0RhdGEsXHJcbiAgICAgICAgZ2FsbGVyeSxcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgICB9ID0gcmVzLnNlY3Rpb25zO1xyXG4gICAgICBpZiAocGxhY2VzRGF0YSkge1xyXG4gICAgICAgIHRoaXMuaGFzTWFwID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHBsYWNlc0RhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFzTWFwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJpYkRhdGEpIHtcclxuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSBiaWJEYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aXRuZXNzRGF0YSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0ge1xyXG4gICAgICAgICAgaXRlbXM6IHdpdG5lc3NEYXRhLml0ZW1zLm1hcCgod2l0bmVzczoge1xyXG4gICAgICAgICAgICBsaW5rOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHR5cGU6IHN0cmluZztcclxuICAgICAgICAgIH0pOiBJdGVtUHJldmlld0RhdGEgPT4gKHtcclxuICAgICAgICAgICAgdGl0bGU6IHdpdG5lc3MudGl0bGUsXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIGhyZWY6IHdpdG5lc3MubGluayxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgaGVhZGVyOiB3aXRuZXNzRGF0YS5oZWFkZXJcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3b3Jrc0RhdGE/Lml0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0ge1xyXG4gICAgICAgICAgaGVhZGVyOiB3b3Jrc0RhdGEuaGVhZGVyLFxyXG4gICAgICAgICAgaXRlbXM6IHdvcmtzRGF0YS5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xyXG4gICAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIGFuY2hvcjogaXRlbS5saW5rID8ge1xyXG4gICAgICAgICAgICAgIGhyZWY6IGl0ZW0ubGluayxcclxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ2FsbGVyeSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gZ2FsbGVyeTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gaGVhZGVyLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlYWRlciA9IHJlcy50aXRsZTtcclxuICAgICAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xyXG4gICAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBoZWFkZXIudGl0bGUgfSB9LFxyXG4gICAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkaW5nLnJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==