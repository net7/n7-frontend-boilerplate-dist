import { __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
import { isEmpty } from 'lodash';
import { LayoutState } from '../../services/layout-state.service';
var MrHomeLayoutDS = /** @class */ (function (_super) {
    __extends(MrHomeLayoutDS, _super);
    function MrHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorTitle = _t('global#layout_error_title');
        _this.errorDescription = _t('global#layout_error_description');
        return _this;
    }
    MrHomeLayoutDS.prototype.onInit = function (payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.layoutState = payload.layoutState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        this.doRequest();
        // update head title
        this.updateHeadTitle();
    };
    MrHomeLayoutDS.prototype.doRequest = function () {
        var _this = this;
        var sections = this.pageConfig.sections;
        if (!isEmpty(sections)) {
            this.layoutState.set('content', LayoutState.LOADING);
            this.communication.request$('home', {
                method: 'POST',
                params: sections.map(function (_a) {
                    var id = _a.id;
                    return id;
                }),
                onError: function (err) {
                    console.warn("Error loading " + _this.configId + " sections", err.message);
                    _this.layoutState.set('content', LayoutState.ERROR);
                }
            }).subscribe(function (response) {
                _this.layoutState.set('content', LayoutState.SUCCESS);
                _this.initSections(response);
            });
        }
        else {
            console.warn("There are no sections configured for " + this.configId + " layout");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBSWpDLE9BQU8sRUFBd0IsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFeEY7SUFBb0Msa0NBQWdCO0lBQXBEO1FBQUEscUVBeUVDO1FBNURRLGdCQUFVLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFN0Msc0JBQWdCLEdBQUcsRUFBRSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7O0lBMERsRSxDQUFDO0lBeERDLCtCQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFBQSxpQkFrQkM7UUFqQlMsSUFBQSxtQ0FBUSxDQUFxQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQU07d0JBQUosVUFBRTtvQkFBTyxPQUFBLEVBQUU7Z0JBQUYsQ0FBRSxDQUFDO2dCQUNwQyxPQUFPLEVBQUUsVUFBQyxHQUFHO29CQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQWlCLEtBQUksQ0FBQyxRQUFRLGNBQVcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JFLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELENBQUM7YUFDRixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDBDQUF3QyxJQUFJLENBQUMsUUFBUSxZQUFTLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsUUFBUTtRQUFyQixpQkFlQztRQWRTLElBQUEsbUNBQVEsQ0FBcUI7UUFFckMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBTTtvQkFBSixVQUFFO2dCQUNwQixJQUFNLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEQsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxTQUFTO2dCQUNULGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLGNBQWM7Z0JBQ2QsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sd0NBQWUsR0FBdkI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXpFRCxDQUFvQyxnQkFBZ0IsR0F5RW5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLCBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckhvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHBhZ2VDb25maWc7XHJcblxyXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcclxuXHJcbiAgcHVibGljIGVycm9yRGVzY3JpcHRpb24gPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl9kZXNjcmlwdGlvbicpO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcclxuICAgIHRoaXMubGF5b3V0U3RhdGUgPSBwYXlsb2FkLmxheW91dFN0YXRlO1xyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xyXG5cclxuICAgIHRoaXMuZG9SZXF1ZXN0KCk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XHJcbiAgfVxyXG5cclxuICBkb1JlcXVlc3QoKSB7XHJcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcbiAgICBpZiAoIWlzRW1wdHkoc2VjdGlvbnMpKSB7XHJcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuTE9BRElORyk7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnaG9tZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBwYXJhbXM6IHNlY3Rpb25zLm1hcCgoeyBpZCB9KSA9PiBpZCksXHJcbiAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nICR7dGhpcy5jb25maWdJZH0gc2VjdGlvbnNgLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkVSUk9SKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNlY3Rpb25zKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFRoZXJlIGFyZSBubyBzZWN0aW9ucyBjb25maWd1cmVkIGZvciAke3RoaXMuY29uZmlnSWR9IGxheW91dGApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFNlY3Rpb25zKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcblxyXG4gICAgaWYgKHNlY3Rpb25zKSB7XHJcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlW2lkXTtcclxuICAgICAgICAvLyBzZXQgaWRcclxuICAgICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaWQ7XHJcbiAgICAgICAgLy8gdXBkYXRlIGRhdGFcclxuICAgICAgICBpZiAocmVzcG9uc2VEYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSGVhZFRpdGxlKCkge1xyXG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcclxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIHBhZ2VUaXRsZV0uam9pbignID4gJykpO1xyXG4gIH1cclxufVxyXG4iXX0=