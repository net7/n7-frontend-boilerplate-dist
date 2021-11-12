import { __assign, __extends } from "tslib";
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
            _this.one('mr-timeline').updateOptions({ libOptions: _this.pageConfig.libOptions });
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
        // set map header
        this.mapHeader = _t(this.pageConfig.mapHeader);
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
                _this.bibliographyData = {
                    header: bibData.header,
                    items: bibData.items.map(function (item) { return (__assign(__assign({}, item), { anchor: {
                            payload: item.payload
                        }, classes: 'mr-item-preview-bibliography' })); })
                };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxPQUFPLHVCQUF1QixDQUFDO0FBRy9CLGtFQUFrRTtBQUVsRTtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFtTkM7UUFwTVEsYUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWYsdUJBQWlCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUE7O0lBaUw3RCxDQUFDO0lBckpDLG1DQUFNLEdBQU4sVUFBTyxPQUFPO1FBQWQsaUJBb0NDO1FBbkNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMs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QUN0QztpQkFBTTtnQkFDTCxLQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdkMsT0FBTyxFQUFFO3dCQUNQLE9BQU8sRUFBRSxDQUFDO2dDQUNSLElBQUksRUFBRSxFQUFFO2dDQUNSLElBQUksRUFBRSxlQUFlO2dDQUNyQixNQUFNLEVBQUU7b0NBQ04sT0FBTyxFQUFFLGFBQWE7aUNBQ3ZCOzZCQUNGLENBQUM7cUJBQ0g7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBbk5ELENBQXdDLGdCQUFnQixHQW1OdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICd2aXMtdGltZWxpbmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtLCBHZXRSZXNvdXJjZVJlc3BvbnNlIH0gZnJvbSAnLi90aW1lbGluZS1sYXlvdXQudHlwZXMnO1xyXG5cclxuLy8gZGVtbyBwYWdlOiBodHRwOi8vbG9jYWxob3N0OjQyMDAvdGltZWxpbmUvMjk5Mi9taXNzaW9uZS12ZW5lemlhXHJcblxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcGFnZUNvbmZpZztcclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XHJcblxyXG4gIHB1YmxpYyBsb2FkaW5nID0ge1xyXG4gICAgcmVzb3VyY2VEZXRhaWxzOiB0cnVlLFxyXG4gICAgdGltZWxpbmU6IHRydWUsXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XHJcblxyXG4gIHB1YmxpYyBldmVudEhlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZURhdGE6IFRpbWVsaW5lRGF0YTtcclxuXHJcbiAgcHVibGljIGhhc01hcCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcm91dGU7XHJcblxyXG4gIHB1YmxpYyBtYXBIZWFkZXI7XHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZUxpc3RlbmVyJDogU3ViamVjdDxUaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpXHJcblxyXG4gIHB1YmxpYyBiaWJsaW9ncmFwaHlEYXRhOiB7XHJcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xyXG4gICAgaXRlbXM6IHtcclxuICAgICAgcGF5bG9hZD86IHtcclxuICAgICAgICBhY3Rpb246IHN0cmluZztcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgfTtcclxuICAgICAgdGV4dD86IHN0cmluZztcclxuICAgIH1bXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uV29ya3NEYXRhOiB7XHJcbiAgICBoZWFkZXI6IHsgdGl0bGU6IHN0cmluZyB9O1xyXG4gICAgaXRlbXM6IEl0ZW1QcmV2aWV3RGF0YVtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25XaXRuZXNzRGF0YToge1xyXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcclxuICAgIGl0ZW1zOiBJdGVtUHJldmlld0RhdGFbXTtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbkdhbGxlcnlEYXRhO1xyXG5cclxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcclxuXHJcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcclxuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkgfHwge307XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSB0aW1lbGluZVxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZScsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVsaW5lRGF0YSA9IGQ7XHJcbiAgICAgIHRoaXMubG9hZGluZy50aW1lbGluZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm9uZSgnbXItdGltZWxpbmUnKS51cGRhdGVPcHRpb25zKHsgbGliT3B0aW9uczogdGhpcy5wYWdlQ29uZmlnLmxpYk9wdGlvbnMgfSk7XHJcbiAgICAgIHRoaXMub25lKCdtci10aW1lbGluZScpLnVwZGF0ZShkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJFxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh0aW1lbGluZTogVGltZWxpbmUpID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lTGlzdGVuZXIkLm5leHQodGltZWxpbmUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uXHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lRGVzY3JpcHRpb24nLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxyXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uID0gZC50ZXh0O1xyXG4gICAgICB0aGlzLmxvYWREZWZhdWx0cyhmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZXQgbWFwIGhlYWRlclxyXG4gICAgdGhpcy5tYXBIZWFkZXIgPSBfdCh0aGlzLnBhZ2VDb25maWcubWFwSGVhZGVyKTtcclxuICB9XHJcblxyXG4gIGxvYWREZWZhdWx0cyhuYXZpZ2F0ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdGltZWxpbmVJbnN0YW5jZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSgnbXItdGltZWxpbmUnKS50aW1lbGluZSBhcyBUaW1lbGluZTtcclxuICAgIGlmICh0aW1lbGluZUluc3RhbmNlKSB7XHJcbiAgICAgIHRpbWVsaW5lSW5zdGFuY2Uuc2V0U2VsZWN0aW9uKFtdKTtcclxuICAgIH1cclxuICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xyXG4gICAgdGhpcy5oYXNNYXAgPSBmYWxzZTtcclxuICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAobmF2aWdhdGUpIHRoaXMubG9jYXRpb24uZ28oJy90aW1lbGluZS8nKTtcclxuICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogX3QodGhpcy5wYWdlQ29uZmlnLnRpdGxlKSB9IH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvdGltZS1ldmVudHMnXHJcbiAgICAgIH1cclxuICAgIH0pLnN1YnNjcmliZSgocmVzOiBHZXRSZXNvdXJjZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmICghcmVzIHx8IHJlcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgICdjb2xsZWN0aW9uLWJpYmxpb2dyYXBoeSc6IGJpYkRhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24tcGxhY2VzJzogcGxhY2VzRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi13aXRuZXNzZXMnOiB3aXRuZXNzRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi13b3Jrcyc6IHdvcmtzRGF0YSxcclxuICAgICAgICBnYWxsZXJ5LFxyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbiAgICAgIH0gPSByZXMuc2VjdGlvbnM7XHJcbiAgICAgIGlmIChwbGFjZXNEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5oYXNNYXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25lKCdtci1tYXAnKS51cGRhdGUocGxhY2VzRGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYXNNYXAgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYmliRGF0YSkge1xyXG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHtcclxuICAgICAgICAgIGhlYWRlcjogYmliRGF0YS5oZWFkZXIsXHJcbiAgICAgICAgICBpdGVtczogYmliRGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IGl0ZW0ucGF5bG9hZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGFzc2VzOiAnbXItaXRlbS1wcmV2aWV3LWJpYmxpb2dyYXBoeSdcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5iaWJsaW9ncmFwaHlEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3aXRuZXNzRGF0YSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0ge1xyXG4gICAgICAgICAgaXRlbXM6IHdpdG5lc3NEYXRhLml0ZW1zLm1hcCgod2l0bmVzczoge1xyXG4gICAgICAgICAgICBsaW5rOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHR5cGU6IHN0cmluZztcclxuICAgICAgICAgIH0pOiBJdGVtUHJldmlld0RhdGEgPT4gKHtcclxuICAgICAgICAgICAgdGl0bGU6IHdpdG5lc3MudGl0bGUsXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIGhyZWY6IHdpdG5lc3MubGluayxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgaGVhZGVyOiB3aXRuZXNzRGF0YS5oZWFkZXJcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldpdG5lc3NEYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh3b3Jrc0RhdGE/Lml0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV29ya3NEYXRhID0ge1xyXG4gICAgICAgICAgaGVhZGVyOiB3b3Jrc0RhdGEuaGVhZGVyLFxyXG4gICAgICAgICAgaXRlbXM6IHdvcmtzRGF0YS5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xyXG4gICAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcclxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgIGFuY2hvcjogaXRlbS5saW5rID8ge1xyXG4gICAgICAgICAgICAgIGhyZWY6IGl0ZW0ubGluayxcclxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdhbGxlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25HYWxsZXJ5RGF0YSA9IGdhbGxlcnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IGhlYWRlci5jb250ZW50O1xyXG4gICAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcclxuICAgICAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogaGVhZGVyLnRpdGxlIH0gfSxcclxuICAgICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAnY2xvc2VidXR0b24nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZGluZy5yZXNvdXJjZURldGFpbHMgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=