import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
var MrHomeLayoutDS = /** @class */ (function (_super) {
    __extends(MrHomeLayoutDS, _super);
    function MrHomeLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrHomeLayoutDS.prototype.onInit = function (payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        this.doRequest();
        // update head title
        this.updateHeadTitle();
    };
    MrHomeLayoutDS.prototype.doRequest = function () {
        var _this = this;
        var sections = this.pageConfig.sections;
        if (sections) {
            this.communication.request$('home', {
                method: 'POST',
                params: sections.map(function (_a) {
                    var id = _a.id;
                    return id;
                })
            }).subscribe(function (response) {
                _this.initSections(response);
            });
        }
    };
    MrHomeLayoutDS.prototype.initSections = function (response) {
        var _this = this;
        var sections = this.pageConfig.sections;
        if (sections) {
            sections.forEach(function (_a) {
                var id = _a.id;
                var widgetDataSource = _this.getWidgetDataSource(id);
                var responseData = response[id];
                // set id
                widgetDataSource.id = id;
                // update data
                if (responseData) {
                    _this.one(id).update(responseData);
                }
            });
        }
    };
    MrHomeLayoutDS.prototype.updateHeadTitle = function () {
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
    };
    return MrHomeLayoutDS;
}(LayoutDataSource));
export { MrHomeLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBSzdFO0lBQW9DLGtDQUFnQjtJQUFwRDs7SUEwREEsQ0FBQztJQS9DQywrQkFBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFBQSxpQkFVQztRQVRTLElBQUEsbUNBQVEsQ0FBcUI7UUFDckMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBTTt3QkFBSixVQUFFO29CQUFPLE9BQUEsRUFBRTtnQkFBRixDQUFFLENBQUM7YUFDckMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7Z0JBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsUUFBUTtRQUFyQixpQkFlQztRQWRTLElBQUEsbUNBQVEsQ0FBcUI7UUFFckMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTTtvQkFBSixVQUFFO2dCQUNwQixJQUFNLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEQsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxTQUFTO2dCQUNULGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLGNBQWM7Z0JBQ2QsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sd0NBQWUsR0FBdkI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTFERCxDQUFvQyxnQkFBZ0IsR0EwRG5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIHBhZ2VDb25maWc7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKSB8fCB7fTtcblxuICAgIHRoaXMuZG9SZXF1ZXN0KCk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XG4gIH1cblxuICBkb1JlcXVlc3QoKSB7XG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdob21lJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGFyYW1zOiBzZWN0aW9ucy5tYXAoKHsgaWQgfSkgPT4gaWQpXG4gICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFNlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXRTZWN0aW9ucyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IHRoaXMucGFnZUNvbmZpZztcblxuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaWQpO1xuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZVtpZF07XG4gICAgICAgIC8vIHNldCBpZFxuICAgICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaWQ7XG4gICAgICAgIC8vIHVwZGF0ZSBkYXRhXG4gICAgICAgIGlmIChyZXNwb25zZURhdGEpIHtcbiAgICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSGVhZFRpdGxlKCkge1xuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIHBhZ2VUaXRsZV0uam9pbignID4gJykpO1xuICB9XG59XG4iXX0=