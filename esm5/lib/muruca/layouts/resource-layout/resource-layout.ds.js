import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
var MrResourceLayoutDS = /** @class */ (function (_super) {
    __extends(MrResourceLayoutDS, _super);
    function MrResourceLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Stores "max height" for the read-more-wrapper from configuration */
        _this.readMoreConfig = {
            limit: 130,
            label: _t('readmore#label')
        };
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
        this.readMoreConfig.limit = this.configuration.get(this.configId).maxHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUF3R0M7UUFyRkMsdUVBQXVFO1FBQ2hFLG9CQUFjLEdBR2pCO1lBQ0YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUE7UUFFTSxnQkFBVSxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRTdDLHNCQUFnQixHQUFHLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDOztJQTBFbEUsQ0FBQztJQXhFQyxtQ0FBTSxHQUFOLFVBQU8sT0FBTztRQUFkLGlCQWdCQztRQWZDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFD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QUFJLENBQUMsR0FBRzthQUNyQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVPLDRDQUFlLEdBQXZCLFVBQXdCLEVBQXdCO1lBQXRCLHdCQUFvQjtRQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUF4R0QsQ0FBd0MsZ0JBQWdCLEdBd0d2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlXG5cbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcGFnZUNvbmZpZzogYW55O1xuXG4gIHB1YmxpYyB0YWJDb25maWc6IGFueTtcblxuICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICBwdWJsaWMgdGFiOiBzdHJpbmc7XG5cbiAgcHVibGljIHNsdWc6IHN0cmluZztcblxuICAvKiogU3RvcmVzIFwibWF4IGhlaWdodFwiIGZvciB0aGUgcmVhZC1tb3JlLXdyYXBwZXIgZnJvbSBjb25maWd1cmF0aW9uICovXG4gIHB1YmxpYyByZWFkTW9yZUNvbmZpZzoge1xuICAgIGxpbWl0OiBudW1iZXI7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgfSA9IHtcbiAgICBsaW1pdDogMTMwLCAvLyBkZWZhdWx0IGxpbWl0XG4gICAgbGFiZWw6IF90KCdyZWFkbW9yZSNsYWJlbCcpXG4gIH1cblxuICBwdWJsaWMgZXJyb3JUaXRsZSA9IF90KCdnbG9iYWwjbGF5b3V0X2Vycm9yX3RpdGxlJyk7XG5cbiAgcHVibGljIGVycm9yRGVzY3JpcHRpb24gPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl9kZXNjcmlwdGlvbicpO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XG4gICAgdGhpcy50YWJDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCd0YWJzJylbdGhpcy5wYWdlQ29uZmlnLnRhYnNdO1xuICAgIHRoaXMucmVhZE1vcmVDb25maWcubGltaXQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpLm1heEhlaWdodDtcblxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcbiAgICBbJ3RvcCcsICdjb250ZW50J10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zW3R5cGVdID0gdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zW3R5cGVdLm1hcCgoc2VjdGlvbikgPT4gKHtcbiAgICAgICAgLi4uc2VjdGlvbixcbiAgICAgICAgdGl0bGU6IF90KHNlY3Rpb24udGl0bGUpXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUmVxdWVzdCB0aGUgY29uZmlndXJlZCB3aWRnZXRzIGRhdGEgKi9cbiAgcGFnZVJlcXVlc3QkKGlkLCBvbkVycm9yOiAoZXJyOiBhbnkpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHsgdG9wLCBjb250ZW50IH0gPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Jlc291cmNlJywge1xuICAgICAgb25FcnJvcixcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlOiB0aGlzLnBhZ2VDb25maWcudHlwZSxcbiAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLm1hcCgocykgPT4gcy5pZCksXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHRoaXMuaW5pdFNlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZShyZXNwb25zZSk7XG4gIH1cblxuICAvKiogTG9hZCBhbGwgdGhlIGNvbmZpZ3VyZWQgd2lkZ2V0cyAqL1xuICBwcml2YXRlIGluaXRTZWN0aW9ucyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgdG9wLCBjb250ZW50IH0gPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgICBpZiAoIXdpZGdldERhdGFTb3VyY2UpIHJldHVybjtcbiAgICAgIGNvbnN0IHJlc3BvbnNlU2VjdGlvbiA9IHJlc3BvbnNlLnNlY3Rpb25zW2lkXTtcbiAgICAgIC8vIHNldCBpZFxuICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlkO1xuICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgIGlmIChyZXNwb25zZVNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShyZXNwb25zZVNlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHRhYnNcbiAgICBpZiAodGhpcy50YWJDb25maWcpIHtcbiAgICAgIGNvbnN0IHRhYlNlY3Rpb24gPSBzZWN0aW9ucy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ3RhYnMnKTtcbiAgICAgIHRoaXMub25lKHRhYlNlY3Rpb24uaWQpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgcm9vdDogdGhpcy5wYWdlQ29uZmlnLnRhYnMsXG4gICAgICAgIHNsdWc6IHRoaXMuc2x1ZyxcbiAgICAgICAgY3VycmVudFRhYjogdGhpcy50YWJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUodGFiU2VjdGlvbi5pZCkudXBkYXRlKHRoaXMudGFiQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhlYWRUaXRsZSh7IHRpdGxlOiByZXNvdXJjZVRpdGxlIH0pIHtcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpLCByZXNvdXJjZVRpdGxlXS5qb2luKCcgPiAnKSk7XG4gIH1cbn1cbiJdfQ==