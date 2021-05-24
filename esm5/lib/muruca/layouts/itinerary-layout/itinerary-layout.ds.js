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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRpbmVyYXJ5LWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9pdGluZXJhcnktbGF5b3V0L2l0aW5lcmFyeS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RDtJQUF5Qyx1Q0FBZ0I7SUFBekQ7UUFBQSxxRUFpRkM7UUFsRVEsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUFnRWxFLENBQUM7SUE5REMsb0NBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLHVCQUNoRSxPQUFPLEtBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ3hCLEVBSG1FLENBR25FLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCwwQ0FBWSxHQUFaLFVBQWEsRUFBRSxFQUFFLE9BQTJCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQzlDLE9BQU8sU0FBQTtZQUNQLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLFFBQVE7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyx5Q0FBVyxHQUFuQixVQUFvQixFQUFTO1lBQVAsZ0JBQUs7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVPLDJDQUFhLEdBQXJCLFVBQXNCLEVBQVc7WUFBVCxvQkFBTztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU8sNENBQWMsR0FBdEIsVUFBdUIsUUFBUTtRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTywwQ0FBWSxHQUFwQixVQUFxQixRQUFRO1FBQTdCLGlCQWFDO1FBWlMsSUFBQSxtQ0FBUSxDQUFxQjtRQUNyQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTTtnQkFBSixVQUFFO1lBQ3BCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsT0FBTztZQUM5QixJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLFNBQVM7WUFDVCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLGNBQWM7WUFDZCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw2Q0FBZSxHQUF2QixVQUF3QixFQUF5QjtZQUF2Qix5QkFBcUI7UUFDN0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBakZELENBQXlDLGdCQUFnQixHQWlGeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJJdGluZXJhcnlMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2VcblxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBwYWdlQ29uZmlnOiBhbnk7XG5cbiAgcHVibGljIGNvbnRlbnQ6IHN0cmluZyB8IG51bGw7XG5cbiAgcHVibGljIHRpdGxlOiBzdHJpbmcgfCBudWxsO1xuXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcblxuICBwdWJsaWMgZXJyb3JEZXNjcmlwdGlvbiA9IF90KCdnbG9iYWwjbGF5b3V0X2Vycm9yX2Rlc2NyaXB0aW9uJyk7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcblxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcbiAgICB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnMgPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiAoe1xuICAgICAgLi4uc2VjdGlvbixcbiAgICAgIHRpdGxlOiBfdChzZWN0aW9uLnRpdGxlKVxuICAgIH0pKTtcbiAgfVxuXG4gIHBhZ2VSZXF1ZXN0JChpZCwgb25FcnJvcjogKGVycjogYW55KSA9PiB2b2lkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdpdGluZXJhcnknLCB7XG4gICAgICBvbkVycm9yLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybFBhcmFtczogaWRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdGhpcy51cGRhdGVUaXRsZShyZXNwb25zZSk7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICB0aGlzLnVwZGF0ZU1ldGFkYXRhKHJlc3BvbnNlKTtcbiAgICB0aGlzLmluaXRTZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUocmVzcG9uc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUaXRsZSh7IHRpdGxlIH0pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbnRlbnQoeyBjb250ZW50IH0pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVNZXRhZGF0YShyZXNwb25zZSkge1xuICAgIHRoaXMub25lKCdtci1zdGF0aWMtbWV0YWRhdGEnKS51cGRhdGUocmVzcG9uc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U2VjdGlvbnMocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLnBhZ2VDb25maWc7XG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcbiAgICAgIGlmICghd2lkZ2V0RGF0YVNvdXJjZSkgcmV0dXJuO1xuICAgICAgY29uc3QgcmVzcG9uc2VTZWN0aW9uID0gcmVzcG9uc2Uuc2VjdGlvbnNbaWRdO1xuICAgICAgLy8gc2V0IGlkXG4gICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaWQ7XG4gICAgICAvLyB1cGRhdGUgZGF0YVxuICAgICAgaWYgKHJlc3BvbnNlU2VjdGlvbikge1xuICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKHJlc3BvbnNlU2VjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhlYWRUaXRsZSh7IHRpdGxlOiBpdGluZXJhcnlUaXRsZSB9KSB7XG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKSwgaXRpbmVyYXJ5VGl0bGVdLmpvaW4oJyA+ICcpKTtcbiAgfVxufVxuIl19