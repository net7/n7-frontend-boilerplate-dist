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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxPQUFPLHVCQUF1QixDQUFDO0FBRy9CLGtFQUFrRTtBQUVsRTtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFzTUM7UUF2TFEsYUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWYsZUFBUyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXJDLHVCQUFpQixHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFBOztJQW9LN0QsQ0FBQztJQXhJQyxtQ0FBTSxHQUFOLFVBQU8sT0FBTztRQUFkLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFB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Q0FDUixJQUFJLEVBQUUsZUFBZTtnQ0FDckIsTUFBTSxFQUFFO29DQUNOLE9BQU8sRUFBRSxhQUFhO2lDQUN2Qjs2QkFDRixDQUFDO3FCQUNIO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXRNRCxDQUF3QyxnQkFBZ0IsR0FzTXZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAndmlzLXRpbWVsaW5lJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgR2V0UmVzb3VyY2VSZXNwb25zZSB9IGZyb20gJy4vdGltZWxpbmUtbGF5b3V0LnR5cGVzJztcclxuXHJcbi8vIGRlbW8gcGFnZTogaHR0cDovL2xvY2FsaG9zdDo0MjAwL3RpbWVsaW5lLzI5OTIvbWlzc2lvbmUtdmVuZXppYVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHBhZ2VDb25maWc7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwdWJsaWMgbG9hZGluZyA9IHtcclxuICAgIHJlc291cmNlRGV0YWlsczogdHJ1ZSxcclxuICAgIHRpbWVsaW5lOiB0cnVlLFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlZmF1bHREZXNjcmlwdGlvbiA9ICcnO1xyXG5cclxuICBwdWJsaWMgZXZlbnRIZWFkZXI6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnJ1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVEYXRhOiBUaW1lbGluZURhdGE7XHJcblxyXG4gIHB1YmxpYyBoYXNNYXAgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHJvdXRlO1xyXG5cclxuICBwdWJsaWMgbWFwSGVhZGVyID0gX3QoJ3RpbWVsaW5lI21hcGhlYWRlcicpO1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8VGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKVxyXG5cclxuICBwdWJsaWMgYmlibGlvZ3JhcGh5RGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiB7XHJcbiAgICAgIHBheWxvYWQ/OiB7XHJcbiAgICAgICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICAgIH07XHJcbiAgICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICB9W107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbldvcmtzRGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uV2l0bmVzc0RhdGE6IHtcclxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nIH07XHJcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25HYWxsZXJ5RGF0YTtcclxuXHJcbiAgcHVibGljIGV2ZW50VGl0bGU6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XHJcblxyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgdGltZWxpbmVcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXHJcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcclxuICAgICAgdGhpcy50aW1lbGluZURhdGEgPSBkO1xyXG4gICAgICB0aGlzLmxvYWRpbmcudGltZWxpbmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5vbmUoJ21yLXRpbWVsaW5lJykudXBkYXRlKGQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLXRpbWVsaW5lJykudGltZWxpbmVMb2FkZWQkXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHRpbWVsaW5lOiBUaW1lbGluZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMaXN0ZW5lciQubmV4dCh0aW1lbGluZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb25cclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmVEZXNjcmlwdGlvbicsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXHJcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcclxuICAgICAgdGhpcy5kZWZhdWx0RGVzY3JpcHRpb24gPSBkLnRleHQ7XHJcbiAgICAgIHRoaXMubG9hZERlZmF1bHRzKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZERlZmF1bHRzKG5hdmlnYXRlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB0aW1lbGluZUluc3RhbmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lIGFzIFRpbWVsaW5lO1xyXG4gICAgaWYgKHRpbWVsaW5lSW5zdGFuY2UpIHtcclxuICAgICAgdGltZWxpbmVJbnN0YW5jZS5zZXRTZWxlY3Rpb24oW10pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gdGhpcy5kZWZhdWx0RGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmV2ZW50SGVhZGVyID0gJyc7XHJcbiAgICB0aGlzLmhhc01hcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChuYXZpZ2F0ZSkgdGhpcy5sb2NhdGlvbi5nbygnL3RpbWVsaW5lLycpO1xyXG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcclxuICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBfdCh0aGlzLnBhZ2VDb25maWcudGl0bGUpIH0gfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFnZURldGFpbHMoaWQpIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy90aW1lLWV2ZW50cydcclxuICAgICAgfVxyXG4gICAgfSkuc3Vic2NyaWJlKChyZXM6IEdldFJlc291cmNlUmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXMgfHwgcmVzID09IG51bGwpIHJldHVybjtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24tYmlibGlvZ3JhcGh5JzogYmliRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi1wbGFjZXMnOiBwbGFjZXNEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXdpdG5lc3Nlcyc6IHdpdG5lc3NEYXRhLFxyXG4gICAgICAgICdjb2xsZWN0aW9uLXdvcmtzJzogd29ya3NEYXRhLFxyXG4gICAgICAgIGdhbGxlcnksXHJcbiAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgICAgfSA9IHJlcy5zZWN0aW9ucztcclxuICAgICAgaWYgKHBsYWNlc0RhdGEpIHtcclxuICAgICAgICB0aGlzLmhhc01hcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZShwbGFjZXNEYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhhc01hcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChiaWJEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gYmliRGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdpdG5lc3NEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB7XHJcbiAgICAgICAgICBpdGVtczogd2l0bmVzc0RhdGEuaXRlbXMubWFwKCh3aXRuZXNzOiB7XHJcbiAgICAgICAgICAgIGxpbms6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgdHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgfSk6IEl0ZW1QcmV2aWV3RGF0YSA9PiAoe1xyXG4gICAgICAgICAgICB0aXRsZTogd2l0bmVzcy50aXRsZSxcclxuICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgaHJlZjogd2l0bmVzcy5saW5rLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSksXHJcbiAgICAgICAgICBoZWFkZXI6IHdpdG5lc3NEYXRhLmhlYWRlclxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdvcmtzRGF0YT8uaXRlbXMpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB7XHJcbiAgICAgICAgICBoZWFkZXI6IHdvcmtzRGF0YS5oZWFkZXIsXHJcbiAgICAgICAgICBpdGVtczogd29ya3NEYXRhLml0ZW1zLm1hcCgoaXRlbTogQ29sbGVjdGlvbkl0ZW0pID0+ICh7XHJcbiAgICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgYW5jaG9yOiBpdGVtLmxpbmsgPyB7XHJcbiAgICAgICAgICAgICAgaHJlZjogaXRlbS5saW5rLFxyXG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ2FsbGVyeSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gZ2FsbGVyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gaGVhZGVyLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5ldmVudEhlYWRlciA9IHJlcy50aXRsZTtcclxuICAgICAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xyXG4gICAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiBoZWFkZXIudGl0bGUgfSB9LFxyXG4gICAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkaW5nLnJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==