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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXZDLGtFQUFrRTtBQUVsRTtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFxSEM7UUF4R1MsMkJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUl4QixzQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFJckIsdUJBQWlCLEdBQTBCLElBQUksT0FBTyxFQUFFLENBQUE7UUFFeEQsc0JBQWdCLEdBQXNCO1lBQzNDLEVBQUUsS0FBSyxFQUFFLHlHQUF5RyxFQUFFO1lBQ3BILEVBQUUsS0FBSyxFQUFFLGdJQUFnSSxFQUFFO1lBQzNJLEVBQUUsS0FBSyxFQUFFLDRHQUE0RyxFQUFFO1lBQ3ZILEVBQUUsS0FBSyxFQUFFLGdHQUFnRyxFQUFFO1lBQzNHLEVBQUUsS0FBSyxFQUFFLHVFQUF1RSxFQUFFO1lBQ2xGLEVBQUUsS0FBSyxFQUFFLDJHQUEyRyxFQUFFO1NBQ3ZILENBQUM7UUFFSyx1QkFBaUIsR0FBc0I7WUFDNUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRTtTQUNuSCxDQUFBO1FBRU0sWUFBTSxHQUFhO1lBQ3hCLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyxpQ0FBaUM7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QkFBRSxPQUFPO1lBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDcEQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDcEMsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLElBQUksRUFBRSxlQUFlOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLGFBQWE7NkJBQ3ZCO3lCQUNGLENBQUM7aUJBQ0g7YUFDRixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXJIRCxDQUF3QyxnQkFBZ0IsR0FxSHZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbi8vIGRlbW8gcGFnZTogaHR0cDovL2xvY2FsaG9zdDo0MjAwL3RpbWVsaW5lLzI5OTIvbWlzc2lvbmUtdmVuZXppYVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwcml2YXRlIGxvYWRlZFJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XHJcblxyXG4gIHB1YmxpYyBldmVudEhlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZURhdGE6IFRpbWVsaW5lRGF0YTtcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lTGlzdGVuZXIkOiBTdWJqZWN0PHZpcy5UaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpXHJcblxyXG4gIHB1YmxpYyBiaWJsaW9ncmFwaHlNb2NrOiBJdGVtUHJldmlld0RhdGFbXSA9IFtcclxuICAgIHsgdGl0bGU6ICdNLkouTC4gSG9ja2VyLCBCaWJsaW90aGVjYSBIZWlsc2Jyb25uZW5zaXMgc2l2ZSBDYXRhbG9ndXMgbGlicm9ydW0gb21uaXVtLi4uLCBOa2lybmJlcmcgMTczMSwgNTYgbi4gNjggJyB9LFxyXG4gICAgeyB0aXRsZTogJ0ouQy4gSXJtaXNjaGVyLCBIYW5kc2NocmlmdGVuLUthdGFsb2cgZGVyIEtnbC4gVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEZyYW5rZnVydCBhLiBNLi1FcmxhbmdlbiAxODUyLCAxOTEtMTkyIG4uIDY4NiAnIH0sXHJcbiAgICB7IHRpdGxlOiAnSC4gRmxpc2NoZXIsIERpZSBsYXRlaW5pc2NoZW4gUGFwaWVyaGFuZHNjaHJpZnRlbiBkZXIgVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEVybGFuZ2VuIDE5MzYsIDM3MSAnIH0sXHJcbiAgICB7IHRpdGxlOiAnQS4gU290dGlsaSwgSSBjb2RpY2kgZGVsIFBldHJhcmNhIG5lbGxhIEdlcm1hbmlhIE9jY2lkZW50YWxlLCBpbiDCq0lNVcK7LCBYICgxOTY3KSwgcHAuIDQ4Ni00ODcgJyB9LFxyXG4gICAgeyB0aXRsZTogJ0YuIFBldHJhcmNhLCBTZW5pbGUgViAyLCBhIGN1cmEgZGkgTS4gQmVydMOpLCBGaXJlbnplIDE5OTgsIHBwLiAzOC0zOSAnIH0sXHJcbiAgICB7IHRpdGxlOiAnSC4gRmlzY2hlciwgRGllIGxhdGVpbmlzY2hlbiBQYXBpZXJoYW5kc2NocmlmdGVuIGRlciBVbml2ZXJzaXTDoHRzYmlibGlvdGhlayBFcmxhbmdlbiwgRXJsYW5nZW4gMTkzNiwgMzcxICcgfSxcclxuICBdO1xyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkTWFwc01vY2s6IEl0ZW1QcmV2aWV3RGF0YVtdID0gW1xyXG4gICAgeyB0aXRsZTogJ0t1bnl1IFdhbmd1byBRdWFudHUnLCB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLCBpbWFnZTogJy9hc3NldHMvbW9ja3MvcGFwZXIucG5nJyB9XHJcbiAgXVxyXG5cclxuICBwdWJsaWMgaW1hZ2VzOiBzdHJpbmdbXSA9IFtcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tL1dNM0VHOWQucG5nJyxcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tL1pEUW1sblgucG5nJyxcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tL0hoS3hvWmIucG5nJyxcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tL2MzdG9uQWoucG5nJyxcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tL0VmN2l6R1AucG5nJyxcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tLzhYcHpvaWcucG5nJyxcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tL3loRjBMQ3QucG5nJyxcclxuICAgICdodHRwczovL2kuaW1ndXIuY29tL2JNZkhmRWgucG5nJyxcclxuICBdXHJcblxyXG4gIHB1YmxpYyBldmVudFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgIHRoaXMubG9jYXRpb24gPSBwYXlsb2FkLmxvY2F0aW9uO1xyXG4gICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZSh7fSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSB0aW1lbGluZVxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZScsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVsaW5lRGF0YSA9IGQ7XHJcbiAgICAgIHRoaXMub25lKCdtci10aW1lbGluZScpLnVwZGF0ZShkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJFxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh0aW1lbGluZTogdmlzLlRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZUxpc3RlbmVyJC5uZXh0KHRpbWVsaW5lKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSBkZXNjcmlwdGlvblxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZURlc2NyaXB0aW9uJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcclxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xyXG4gICAgICB0aGlzLmRlZmF1bHREZXNjcmlwdGlvbiA9IGQudGV4dDtcclxuICAgICAgdGhpcy5sb2FkRGVmYXVsdHMoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRGVmYXVsdHMobmF2aWdhdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5ldmVudEhlYWRlciA9ICcnO1xyXG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvdGltZWxpbmUvJyk7XHJcbiAgICB0aGlzLm9uZSgnbXIteWVhci1oZWFkZXInKS51cGRhdGUoe1xyXG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICdMYSB2aXRhIGRpIFBldHJhcmNhJyB9IH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvdGltZS1ldmVudHMnXHJcbiAgICAgIH1cclxuICAgIH0pLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgIGlmICghcmVzIHx8IHJlcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMuc2VjdGlvbnMuaGVhZGVyLnRpdGxlO1xyXG4gICAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSByZXMuc2VjdGlvbnMuaGVhZGVyLmNvbnRlbnQ7XHJcbiAgICAgIHRoaXMub25lKCdtci15ZWFyLWhlYWRlcicpLnVwZGF0ZSh7XHJcbiAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiByZXMudGl0bGUgfSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIHBheWxvYWQ6ICdjbG9zZWJ1dHRvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxvYWRlZFJlc291cmNlRGV0YWlscyA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19