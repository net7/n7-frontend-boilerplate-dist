import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import 'leaflet.markercluster';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
var MrTimelineLayoutDS = /** @class */ (function (_super) {
    __extends(MrTimelineLayoutDS, _super);
    function MrTimelineLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadedResourceDetails = false;
        _this.defaultDescription = '';
        _this.eventDescription = '';
        _this.hasMap = false;
        _this.timelineListener$ = new Subject();
        _this.bibliographyMock = [
            { title: 'M.J.L. Hocker, Bibliotheca Heilsbronnensis sive Catalogus librorum omnium..., Nkirnberg 1731, 56 n. 68 ' },
            { title: 'J.C. Irmischer, Handschriften-Katalog der Kgl. Universitàtsbibliothek Erlangen, Frankfurt a. M.-Erlangen 1852, 191-192 n. 686 ' },
            { title: 'H. Flischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
            { title: 'A. Sottili, I codici del Petrarca nella Germania Occidentale, in «IMU», X (1967), pp. 486-487 ' },
            { title: 'F. Petrarca, Senile V 2, a cura di M. Berté, Firenze 1998, pp. 38-39 ' },
            { title: 'H. Fischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
        ];
        _this.connectedMapsMock = [
            { title: 'Kunyu Wanguo Quantu', text: 'Complete Map of all mountains and seas', image: '/assets/mocks/paper.png' }
        ];
        _this.images = [
            'https://i.imgur.com/WM3EG9d.png',
            'https://i.imgur.com/ZDQmlnX.png',
            'https://i.imgur.com/HhKxoZb.png',
            'https://i.imgur.com/c3tonAj.png',
            'https://i.imgur.com/Ef7izGP.png',
            'https://i.imgur.com/8Xpzoig.png',
            'https://i.imgur.com/yhF0LCt.png',
            'https://i.imgur.com/bMfHfEh.png',
        ];
        return _this;
    }
    MrTimelineLayoutDS.prototype.onInit = function (payload) {
        var _this = this;
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        // update the timeline
        this.communication.request$('timeline', {
            method: 'GET',
            onError: function (e) { return console.error(e); }
        }).subscribe(function (d) {
            _this.timelineData = d;
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
        if (navigate)
            this.location.go('/timeline/');
        this.one('mr-year-header').update({
            title: { main: { text: 'La vita di Petrarca' } },
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
            bibliographyData = _a["collection-bibliography"], placesData = _a["collection-places"], witnessData = _a["collection-witnesses"], worksData = _a["collection-works"], 
            /* eslint-enable */
            header = _a.header, title = _a.title;
            if (placesData) {
                _this.hasMap = true;
                _this.one('mr-map').update(placesData);
            }
            else {
                _this.hasMap = false;
            }
            _this.eventHeader = header.title;
            _this.eventDescription = header.content;
            _this.one('mr-year-header').update({
                title: { main: { text: title } },
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
            _this.loadedResourceDetails = true;
        });
    };
    return MrTimelineLayoutDS;
}(LayoutDataSource));
export { MrTimelineLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3ZDLE9BQU8sdUJBQXVCLENBQUM7QUFFL0Isa0VBQWtFO0FBRWxFO0lBQXdDLHNDQUFnQjtJQUF4RDtRQUFBLHFFQXNJQztRQXpIUywyQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFFL0Isd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsdUJBQWlCLEdBQTBCLElBQUksT0FBTyxFQUFFLENBQUE7UUFFeEQsc0JBQWdCLEdBQXNCO1lBQzNDLEVBQUUsS0FBSyxFQUFFLHlHQUF5RyxFQUFFO1lBQ3BILEVBQUUsS0FBSyxFQUFFLGdJQUFnSSxFQUFFO1lBQzNJLEVBQUUsS0FBSyxFQUFFLDRHQUE0RyxFQUFFO1lBQ3ZILEVBQUUsS0FBSyxFQUFFLGdHQUFnRyxFQUFFO1lBQzNHLEVBQUUsS0FBSyxFQUFFLHVFQUF1RSxFQUFFO1lBQ2xGLEVBQUUsS0FBSyxFQUFFLDJHQUEyRyxFQUFFO1NBQ3ZILENBQUM7UUFFSyx1QkFBaUIsR0FBc0I7WUFDNUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtTQUNuSCxDQUFBO1FBRU0sWUFBTSxHQUFhO1lBQ3hCLGlDQUFpQztZQUNq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QUEsaUJBU1U7WUFSZCxvQkFBb0I7WUFDcEIsZ0RBQTJDLEVBQzNDLG9DQUErQixFQUMvQix3Q0FBbUMsRUFDbkMsa0NBQTZCO1lBQzdCLG1CQUFtQjtZQUNuQixrQkFBTSxFQUNOLGdCQUNjLENBQUM7WUFDakIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDaEMsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLElBQUksRUFBRSxlQUFlOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLGFBQWE7NkJBQ3ZCO3lCQUNGLENBQUM7aUJBQ0g7YUFDRixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXRJRCxDQUF3QyxnQkFBZ0IsR0FzSXZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lL2RlY2xhcmF0aW9ucyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcclxuXHJcbi8vIGRlbW8gcGFnZTogaHR0cDovL2xvY2FsaG9zdDo0MjAwL3RpbWVsaW5lLzI5OTIvbWlzc2lvbmUtdmVuZXppYVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwcml2YXRlIGxvYWRlZFJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XHJcblxyXG4gIHB1YmxpYyBldmVudEhlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZURhdGE6IFRpbWVsaW5lRGF0YTtcclxuXHJcbiAgcHVibGljIGhhc01hcCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8dmlzLlRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KClcclxuXHJcbiAgcHVibGljIGJpYmxpb2dyYXBoeU1vY2s6IEl0ZW1QcmV2aWV3RGF0YVtdID0gW1xyXG4gICAgeyB0aXRsZTogJ00uSi5MLiBIb2NrZXIsIEJpYmxpb3RoZWNhIEhlaWxzYnJvbm5lbnNpcyBzaXZlIENhdGFsb2d1cyBsaWJyb3J1bSBvbW5pdW0uLi4sIE5raXJuYmVyZyAxNzMxLCA1NiBuLiA2OCAnIH0sXHJcbiAgICB7IHRpdGxlOiAnSi5DLiBJcm1pc2NoZXIsIEhhbmRzY2hyaWZ0ZW4tS2F0YWxvZyBkZXIgS2dsLiBVbml2ZXJzaXTDoHRzYmlibGlvdGhlayBFcmxhbmdlbiwgRnJhbmtmdXJ0IGEuIE0uLUVybGFuZ2VuIDE4NTIsIDE5MS0xOTIgbi4gNjg2ICcgfSxcclxuICAgIHsgdGl0bGU6ICdILiBGbGlzY2hlciwgRGllIGxhdGVpbmlzY2hlbiBQYXBpZXJoYW5kc2NocmlmdGVuIGRlciBVbml2ZXJzaXTDoHRzYmlibGlvdGhlayBFcmxhbmdlbiwgRXJsYW5nZW4gMTkzNiwgMzcxICcgfSxcclxuICAgIHsgdGl0bGU6ICdBLiBTb3R0aWxpLCBJIGNvZGljaSBkZWwgUGV0cmFyY2EgbmVsbGEgR2VybWFuaWEgT2NjaWRlbnRhbGUsIGluIMKrSU1VwrssIFggKDE5NjcpLCBwcC4gNDg2LTQ4NyAnIH0sXHJcbiAgICB7IHRpdGxlOiAnRi4gUGV0cmFyY2EsIFNlbmlsZSBWIDIsIGEgY3VyYSBkaSBNLiBCZXJ0w6ksIEZpcmVuemUgMTk5OCwgcHAuIDM4LTM5ICcgfSxcclxuICAgIHsgdGl0bGU6ICdILiBGaXNjaGVyLCBEaWUgbGF0ZWluaXNjaGVuIFBhcGllcmhhbmRzY2hyaWZ0ZW4gZGVyIFVuaXZlcnNpdMOgdHNiaWJsaW90aGVrIEVybGFuZ2VuLCBFcmxhbmdlbiAxOTM2LCAzNzEgJyB9LFxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRNYXBzTW9jazogSXRlbVByZXZpZXdEYXRhW10gPSBbXHJcbiAgICB7IHRpdGxlOiAnS3VueXUgV2FuZ3VvIFF1YW50dScsIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsIGltYWdlOiAnL2Fzc2V0cy9tb2Nrcy9wYXBlci5wbmcnIH1cclxuICBdXHJcblxyXG4gIHB1YmxpYyBpbWFnZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vV00zRUc5ZC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vWkRRbWxuWC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vSGhLeG9aYi5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vYzN0b25Bai5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vRWY3aXpHUC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vOFhwem9pZy5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20veWhGMExDdC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vYk1mSGZFaC5wbmcnLFxyXG4gIF1cclxuXHJcbiAgcHVibGljIGV2ZW50VGl0bGU6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSB0aW1lbGluZVxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZScsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVsaW5lRGF0YSA9IGQ7XHJcbiAgICAgIHRoaXMub25lKCdtci10aW1lbGluZScpLnVwZGF0ZShkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJFxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh0aW1lbGluZTogdmlzLlRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZUxpc3RlbmVyJC5uZXh0KHRpbWVsaW5lKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSBkZXNjcmlwdGlvblxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZURlc2NyaXB0aW9uJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcclxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xyXG4gICAgICB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbiA9IGQudGV4dDtcclxuICAgICAgdGhpcy5sb2FkRGVmYXVsdHMoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRGVmYXVsdHMobmF2aWdhdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xyXG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvdGltZWxpbmUvJyk7XHJcbiAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xyXG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICdMYSB2aXRhIGRpIFBldHJhcmNhJyB9IH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvdGltZS1ldmVudHMnXHJcbiAgICAgIH1cclxuICAgIH0pLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgIGlmICghcmVzIHx8IHJlcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgICAgICdjb2xsZWN0aW9uLWJpYmxpb2dyYXBoeSc6IGJpYmxpb2dyYXBoeURhdGEsXHJcbiAgICAgICAgJ2NvbGxlY3Rpb24tcGxhY2VzJzogcGxhY2VzRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi13aXRuZXNzZXMnOiB3aXRuZXNzRGF0YSxcclxuICAgICAgICAnY29sbGVjdGlvbi13b3Jrcyc6IHdvcmtzRGF0YSxcclxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbiAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICB9ID0gcmVzLnNlY3Rpb25zO1xyXG4gICAgICBpZiAocGxhY2VzRGF0YSkge1xyXG4gICAgICAgIHRoaXMuaGFzTWFwID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHBsYWNlc0RhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFzTWFwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ldmVudEhlYWRlciA9IGhlYWRlci50aXRsZTtcclxuICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gaGVhZGVyLmNvbnRlbnQ7XHJcbiAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiB0aXRsZSB9IH0sXHJcbiAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcclxuICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogJ2Nsb3NlYnV0dG9uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubG9hZGVkUmVzb3VyY2VEZXRhaWxzID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=