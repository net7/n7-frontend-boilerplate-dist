import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
var MrTimelineLayoutDS = /** @class */ (function (_super) {
    __extends(MrTimelineLayoutDS, _super);
    function MrTimelineLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadedResourceDetails = false;
        _this.defaultDescription = '';
        _this.eventDescription = '';
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
        this.one('mr-map').update({});
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
            _this.eventHeader = res.sections.header.title;
            _this.eventDescription = res.sections.header.content;
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
            _this.loadedResourceDetails = true;
        });
    };
    return MrTimelineLayoutDS;
}(LayoutDataSource));
export { MrTimelineLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXZDLGtFQUFrRTtBQUVsRTtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFxSEM7UUF4R1MsMkJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUl4QixzQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFJckIsdUJBQWlCLEdBQTBCLElBQUksT0FBTyxFQUFFLENBQUE7UUFFeEQsc0JBQWdCLEdBQXNCO1lBQzNDLEVBQUUsS0FBSyxFQUFFLHlHQUF5RyxFQUFFO1lBQ3BILEVBQUUsS0FBSyxFQUFFLGdJQUFnSSxFQUFFO1lBQzNJLEVBQUUsS0FBSyxFQUFFLDRHQUE0RyxFQUFFO1lBQ3ZILEVBQUUsS0FBSyxFQUFFLGdHQUFnRyxFQUFFO1lBQzNHLEVBQUUsS0FBSyxFQUFFLHVFQUF1RSxFQUFFO1lBQ2xGLEVBQUUsS0FBSyxFQUFFLDJHQUEyRyxFQUFFO1NBQ3ZILENBQUM7UUFFSyx1QkFBaUIsR0FBc0I7WUFDNUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtTQUNuSCxDQUFBO1FBRU0sWUFBTSxHQUFhO1lBQ3hCLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyxpQ0FBaUM7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QkFBRSxPQUFPO1lBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDcEQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDcEMsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLElBQUksRUFBRSxlQUFlOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLGFBQWE7NkJBQ3ZCO3lCQUNGLENBQUM7aUJBQ0g7YUFDRixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXJIRCxDQUF3QyxnQkFBZ0IsR0FxSHZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5cbi8vIGRlbW8gcGFnZTogaHR0cDovL2xvY2FsaG9zdDo0MjAwL3RpbWVsaW5lLzI5OTIvbWlzc2lvbmUtdmVuZXppYVxuXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcblxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcblxuICBwcml2YXRlIGxvYWRlZFJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBkZWZhdWx0RGVzY3JpcHRpb24gPSAnJztcblxuICBwdWJsaWMgZXZlbnRIZWFkZXI6IHN0cmluZztcblxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXG5cbiAgcHVibGljIHRpbWVsaW5lRGF0YTogVGltZWxpbmVEYXRhO1xuXG4gIHB1YmxpYyB0aW1lbGluZUxpc3RlbmVyJDogU3ViamVjdDx2aXMuVGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKVxuXG4gIHB1YmxpYyBiaWJsaW9ncmFwaHlNb2NrOiBJdGVtUHJldmlld0RhdGFbXSA9IFtcbiAgICB7IHRpdGxlOiAnTS5KLkwuIEhvY2tlciwgQmlibGlvdGhlY2EgSGVpbHNicm9ubmVuc2lzIHNpdmUgQ2F0YWxvZ3VzIGxpYnJvcnVtIG9tbml1bS4uLiwgTmtpcm5iZXJnIDE3MzEsIDU2IG4uIDY4ICcgfSxcbiAgICB7IHRpdGxlOiAnSi5DLiBJcm1pc2NoZXIsIEhhbmRzY2hyaWZ0ZW4tS2F0YWxvZyBkZXIgS2dsLiBVbml2ZXJzaXTDoHRzYmlibGlvdGhlayBFcmxhbmdlbiwgRnJhbmtmdXJ0IGEuIE0uLUVybGFuZ2VuIDE4NTIsIDE5MS0xOTIgbi4gNjg2ICcgfSxcbiAgICB7IHRpdGxlOiAnSC4gRmxpc2NoZXIsIERpZSBsYXRlaW5pc2NoZW4gUGFwaWVyaGFuZHNjaHJpZnRlbiBkZXIgVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEVybGFuZ2VuIDE5MzYsIDM3MSAnIH0sXG4gICAgeyB0aXRsZTogJ0EuIFNvdHRpbGksIEkgY29kaWNpIGRlbCBQZXRyYXJjYSBuZWxsYSBHZXJtYW5pYSBPY2NpZGVudGFsZSwgaW4gwqtJTVXCuywgWCAoMTk2NyksIHBwLiA0ODYtNDg3ICcgfSxcbiAgICB7IHRpdGxlOiAnRi4gUGV0cmFyY2EsIFNlbmlsZSBWIDIsIGEgY3VyYSBkaSBNLiBCZXJ0w6ksIEZpcmVuemUgMTk5OCwgcHAuIDM4LTM5ICcgfSxcbiAgICB7IHRpdGxlOiAnSC4gRmlzY2hlciwgRGllIGxhdGVpbmlzY2hlbiBQYXBpZXJoYW5kc2NocmlmdGVuIGRlciBVbml2ZXJzaXTDoHRzYmlibGlvdGhlayBFcmxhbmdlbiwgRXJsYW5nZW4gMTkzNiwgMzcxICcgfSxcbiAgXTtcblxuICBwdWJsaWMgY29ubmVjdGVkTWFwc01vY2s6IEl0ZW1QcmV2aWV3RGF0YVtdID0gW1xuICAgIHsgdGl0bGU6ICdLdW55dSBXYW5ndW8gUXVhbnR1JywgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJywgaW1hZ2U6ICcvYXNzZXRzL21vY2tzL3BhcGVyLnBuZycgfVxuICBdXG5cbiAgcHVibGljIGltYWdlczogc3RyaW5nW10gPSBbXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vV00zRUc5ZC5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL1pEUW1sblgucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9IaEt4b1piLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vYzN0b25Bai5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL0VmN2l6R1AucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS84WHB6b2lnLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20veWhGMExDdC5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL2JNZkhmRWgucG5nJyxcbiAgXVxuXG4gIHB1YmxpYyBldmVudFRpdGxlOiBzdHJpbmc7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgIHRoaXMubG9jYXRpb24gPSBwYXlsb2FkLmxvY2F0aW9uO1xuICAgIHRoaXMub25lKCdtci1tYXAnKS51cGRhdGUoe30pO1xuXG4gICAgLy8gdXBkYXRlIHRoZSB0aW1lbGluZVxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgndGltZWxpbmUnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9KS5zdWJzY3JpYmUoKGQpID0+IHtcbiAgICAgIHRoaXMudGltZWxpbmVEYXRhID0gZDtcbiAgICAgIHRoaXMub25lKCdtci10aW1lbGluZScpLnVwZGF0ZShkKTtcbiAgICB9KTtcbiAgICB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ21yLXRpbWVsaW5lJykudGltZWxpbmVMb2FkZWQkXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgodGltZWxpbmU6IHZpcy5UaW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lTGlzdGVuZXIkLm5leHQodGltZWxpbmUpO1xuICAgICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZURlc2NyaXB0aW9uJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xuICAgICAgdGhpcy5kZWZhdWx0RGVzY3JpcHRpb24gPSBkLnRleHQ7XG4gICAgICB0aGlzLmxvYWREZWZhdWx0cyhmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkRGVmYXVsdHMobmF2aWdhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbjtcbiAgICB0aGlzLmV2ZW50SGVhZGVyID0gJyc7XG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvdGltZWxpbmUvJyk7XG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogJ0xhIHZpdGEgZGkgUGV0cmFyY2EnIH0gfSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy90aW1lLWV2ZW50cydcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMgfHwgcmVzID09IG51bGwpIHJldHVybjtcbiAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMuc2VjdGlvbnMuaGVhZGVyLnRpdGxlO1xuICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gcmVzLnNlY3Rpb25zLmhlYWRlci5jb250ZW50O1xuICAgICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcbiAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiByZXMudGl0bGUgfSB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGVkUmVzb3VyY2VEZXRhaWxzID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufVxuIl19