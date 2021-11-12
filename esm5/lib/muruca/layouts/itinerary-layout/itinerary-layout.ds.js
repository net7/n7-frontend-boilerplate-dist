import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
var MrItineraryLayoutDS = /** @class */ (function (_super) {
    __extends(MrItineraryLayoutDS, _super);
    function MrItineraryLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorTitle = _t('global#layout_error_title');
        _this.errorDescription = _t('global#layout_error_description');
        return _this;
    }
    MrItineraryLayoutDS.prototype.onInit = function (payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // add translations
        this.pageConfig.sections = this.pageConfig.sections.map(function (section) { return (__assign(__assign({}, section), { title: _t(section.title) })); });
    };
    MrItineraryLayoutDS.prototype.pageRequest$ = function (id, onError) {
        return this.communication.request$('itinerary', {
            onError: onError,
            method: 'GET',
            urlParams: id
        });
    };
    MrItineraryLayoutDS.prototype.handleResponse = function (response) {
        this.updateTitle(response);
        this.updateContent(response);
        this.updateMetadata(response);
        this.initSections(response);
        this.updateHeadTitle(response);
    };
    MrItineraryLayoutDS.prototype.updateTitle = function (_a) {
        var title = _a.title;
        this.title = title;
    };
    MrItineraryLayoutDS.prototype.updateContent = function (_a) {
        var content = _a.content;
        this.content = content;
    };
    MrItineraryLayoutDS.prototype.updateMetadata = function (response) {
        this.one('mr-static-metadata').update(response);
    };
    MrItineraryLayoutDS.prototype.initSections = function (response) {
        var _this = this;
        var sections = this.pageConfig.sections;
        sections.forEach(function (_a) {
            var id = _a.id;
            var widgetDataSource = _this.getWidgetDataSource(id);
            if (!widgetDataSource)
                return;
            var responseSection = response.sections[id];
            // set id
            widgetDataSource.id = id;
            // update data
            if (responseSection) {
                _this.one(id).update(responseSection);
            }
        });
    };
    MrItineraryLayoutDS.prototype.updateHeadTitle = function (_a) {
        var itineraryTitle = _a.title;
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle), itineraryTitle].join(' > '));
    };
    return MrItineraryLayoutDS;
}(LayoutDataSource));
export { MrItineraryLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRpbmVyYXJ5LWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9pdGluZXJhcnktbGF5b3V0L2l0aW5lcmFyeS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RDtJQUF5Qyx1Q0FBZ0I7SUFBekQ7UUFBQSxxRUFpRkM7UUFsRVEsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUFnRWxFLENBQUM7SUE5REMsb0NBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLHVCQUNoRSxPQUFPLEtBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ3hCLEVBSG1FLENBR25FLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCwwQ0FBWSxHQUFaLFVBQWEsRUFBRSxFQUFFLE9BQTJCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQzlDLE9BQU8sU0FBQTtZQUNQLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLFFBQVE7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyx5Q0FBVyxHQUFuQixVQUFvQixFQUFTO1lBQVAsZ0JBQUs7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVPLDJDQUFhLEdBQXJCLFVBQXNCLEVBQVc7WUFBVCxvQkFBTztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU8sNENBQWMsR0FBdEIsVUFBdUIsUUFBUTtRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTywwQ0FBWSxHQUFwQixVQUFxQixRQUFRO1FBQTdCLGlCQWFDO1FBWlMsSUFBQSxtQ0FBUSxDQUFxQjtRQUNyQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTTtnQkFBSixVQUFFO1lBQ3BCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsT0FBTztZQUM5QixJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLFNBQVM7WUFDVCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLGNBQWM7WUFDZCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw2Q0FBZSxHQUF2QixVQUF3QixFQUF5QjtZQUF2Qix5QkFBcUI7UUFDN0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBakZELENBQXlDLGdCQUFnQixHQWlGeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJdGluZXJhcnlMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlXHJcblxyXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBwYWdlQ29uZmlnOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBjb250ZW50OiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcclxuXHJcbiAgcHVibGljIGVycm9yRGVzY3JpcHRpb24gPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl9kZXNjcmlwdGlvbicpO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcclxuXHJcbiAgICAvLyBhZGQgdHJhbnNsYXRpb25zXHJcbiAgICB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnMgPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoe1xyXG4gICAgICAuLi5zZWN0aW9uLFxyXG4gICAgICB0aXRsZTogX3Qoc2VjdGlvbi50aXRsZSlcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHBhZ2VSZXF1ZXN0JChpZCwgb25FcnJvcjogKGVycjogYW55KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2l0aW5lcmFyeScsIHtcclxuICAgICAgb25FcnJvcixcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsUGFyYW1zOiBpZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgdGhpcy51cGRhdGVUaXRsZShyZXNwb25zZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG4gICAgdGhpcy51cGRhdGVNZXRhZGF0YShyZXNwb25zZSk7XHJcbiAgICB0aGlzLmluaXRTZWN0aW9ucyhyZXNwb25zZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZShyZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVRpdGxlKHsgdGl0bGUgfSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDb250ZW50KHsgY29udGVudCB9KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVNZXRhZGF0YShyZXNwb25zZSkge1xyXG4gICAgdGhpcy5vbmUoJ21yLXN0YXRpYy1tZXRhZGF0YScpLnVwZGF0ZShyZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRTZWN0aW9ucyhyZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaWQpO1xyXG4gICAgICBpZiAoIXdpZGdldERhdGFTb3VyY2UpIHJldHVybjtcclxuICAgICAgY29uc3QgcmVzcG9uc2VTZWN0aW9uID0gcmVzcG9uc2Uuc2VjdGlvbnNbaWRdO1xyXG4gICAgICAvLyBzZXQgaWRcclxuICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlkO1xyXG4gICAgICAvLyB1cGRhdGUgZGF0YVxyXG4gICAgICBpZiAocmVzcG9uc2VTZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShyZXNwb25zZVNlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSGVhZFRpdGxlKHsgdGl0bGU6IGl0aW5lcmFyeVRpdGxlIH0pIHtcclxuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpLCBpdGluZXJhcnlUaXRsZV0uam9pbignID4gJykpO1xyXG4gIH1cclxufVxyXG4iXX0=