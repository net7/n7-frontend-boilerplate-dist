import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
var MrResourceLayoutDS = /** @class */ (function (_super) {
    __extends(MrResourceLayoutDS, _super);
    function MrResourceLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorTitle = _t('global#layout_error_title');
        _this.errorDescription = _t('global#layout_error_description');
        return _this;
    }
    MrResourceLayoutDS.prototype.onInit = function (payload) {
        var _this = this;
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        this.tabConfig = this.configuration.get('tabs')[this.pageConfig.tabs];
        // add translations
        ['top', 'content'].forEach(function (type) {
            _this.pageConfig.sections[type] = _this.pageConfig.sections[type].map(function (section) { return (__assign(__assign({}, section), { title: _t(section.title) })); });
        });
    };
    /** Request the configured widgets data */
    MrResourceLayoutDS.prototype.pageRequest$ = function (id, onError) {
        var _a = this.pageConfig.sections, top = _a.top, content = _a.content;
        var sections = top.concat(content);
        return this.communication.request$('resource', {
            onError: onError,
            method: 'POST',
            params: {
                id: id,
                type: this.pageConfig.type,
                sections: sections.map(function (s) { return s.id; }),
            }
        });
    };
    MrResourceLayoutDS.prototype.handleResponse = function (response) {
        this.initSections(response);
        this.updateHeadTitle(response);
    };
    /** Load all the configured widgets */
    MrResourceLayoutDS.prototype.initSections = function (response) {
        var _this = this;
        var _a = this.pageConfig.sections, top = _a.top, content = _a.content;
        var sections = top.concat(content);
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
        // update tabs
        if (this.tabConfig) {
            var tabSection = sections.find(function (_a) {
                var type = _a.type;
                return type === 'tabs';
            });
            this.one(tabSection.id).updateOptions({
                id: this.id,
                root: this.pageConfig.tabs,
                slug: this.slug,
                currentTab: this.tab
            });
            this.one(tabSection.id).update(this.tabConfig);
        }
    };
    MrResourceLayoutDS.prototype.updateHeadTitle = function (_a) {
        var resourceTitle = _a.title;
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle), resourceTitle].join(' > '));
    };
    return MrResourceLayoutDS;
}(LayoutDataSource));
export { MrResourceLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUE4RkM7UUEzRVEsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUF5RWxFLENBQUM7SUF2RUMsbUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFlQztRQWRDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEUsbUJBQW1CO1FBQ25CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFD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QUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBOUZELENBQXdDLGdCQUFnQixHQThGdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZVxuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIHBhZ2VDb25maWc6IGFueTtcblxuICBwdWJsaWMgdGFiQ29uZmlnOiBhbnk7XG5cbiAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgcHVibGljIHRhYjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzbHVnOiBzdHJpbmc7XG5cbiAgcHVibGljIGVycm9yVGl0bGUgPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl90aXRsZScpO1xuXG4gIHB1YmxpYyBlcnJvckRlc2NyaXB0aW9uID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfZGVzY3JpcHRpb24nKTtcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuICAgIHRoaXMudGFiQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgndGFicycpW3RoaXMucGFnZUNvbmZpZy50YWJzXTtcblxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcbiAgICBbJ3RvcCcsICdjb250ZW50J10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zW3R5cGVdID0gdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zW3R5cGVdLm1hcCgoc2VjdGlvbikgPT4gKHtcbiAgICAgICAgLi4uc2VjdGlvbixcbiAgICAgICAgdGl0bGU6IF90KHNlY3Rpb24udGl0bGUpXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVxdWVzdCB0aGUgY29uZmlndXJlZCB3aWRnZXRzIGRhdGEgKi9cbiAgcGFnZVJlcXVlc3QkKGlkLCBvbkVycm9yOiAoZXJyOiBhbnkpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHsgdG9wLCBjb250ZW50IH0gPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xuICAgICAgb25FcnJvcixcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlOiB0aGlzLnBhZ2VDb25maWcudHlwZSxcbiAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLm1hcCgocykgPT4gcy5pZCksXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHRoaXMuaW5pdFNlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZShyZXNwb25zZSk7XG4gIH1cblxuICAvKiogTG9hZCBhbGwgdGhlIGNvbmZpZ3VyZWQgd2lkZ2V0cyAqL1xuICBwcml2YXRlIGluaXRTZWN0aW9ucyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgdG9wLCBjb250ZW50IH0gPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgICBpZiAoIXdpZGdldERhdGFTb3VyY2UpIHJldHVybjtcbiAgICAgIGNvbnN0IHJlc3BvbnNlU2VjdGlvbiA9IHJlc3BvbnNlLnNlY3Rpb25zW2lkXTtcbiAgICAgIC8vIHNldCBpZFxuICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlkO1xuICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgIGlmIChyZXNwb25zZVNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShyZXNwb25zZVNlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHRhYnNcbiAgICBpZiAodGhpcy50YWJDb25maWcpIHtcbiAgICAgIGNvbnN0IHRhYlNlY3Rpb24gPSBzZWN0aW9ucy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ3RhYnMnKTtcbiAgICAgIHRoaXMub25lKHRhYlNlY3Rpb24uaWQpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgcm9vdDogdGhpcy5wYWdlQ29uZmlnLnRhYnMsXG4gICAgICAgIHNsdWc6IHRoaXMuc2x1ZyxcbiAgICAgICAgY3VycmVudFRhYjogdGhpcy50YWJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUodGFiU2VjdGlvbi5pZCkudXBkYXRlKHRoaXMudGFiQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhlYWRUaXRsZSh7IHRpdGxlOiByZXNvdXJjZVRpdGxlIH0pIHtcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpLCByZXNvdXJjZVRpdGxlXS5qb2luKCcgPiAnKSk7XG4gIH1cbn1cbiJdfQ==