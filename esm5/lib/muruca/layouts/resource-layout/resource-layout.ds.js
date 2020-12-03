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
        // tabs config
        var tabs = this.configuration.get('tabs');
        var pageTabs = this.pageConfig.tabs;
        if (tabs && pageTabs) {
            this.tabConfig = tabs[pageTabs];
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUFvR0M7UUFqRlEsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUErRWxFLENBQUM7SUE3RUMsbUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELGNBQWM7UUFDZCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakM7UUFF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SUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVPLDRDQUFlLEdBQXZCLFVBQXdCLEVBQXdCO1lBQXRCLHdCQUFvQjtRQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFwR0QsQ0FBd0MsZ0JBQWdCLEdBb0d2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcGFnZUNvbmZpZzogYW55O1xyXG5cclxuICBwdWJsaWMgdGFiQ29uZmlnOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdGFiOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzbHVnOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcclxuXHJcbiAgcHVibGljIGVycm9yRGVzY3JpcHRpb24gPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl9kZXNjcmlwdGlvbicpO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcclxuXHJcbiAgICAvLyB0YWJzIGNvbmZpZ1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3RhYnMnKTtcclxuICAgIGNvbnN0IHBhZ2VUYWJzID0gdGhpcy5wYWdlQ29uZmlnLnRhYnM7XHJcbiAgICBpZiAodGFicyAmJiBwYWdlVGFicykge1xyXG4gICAgICB0aGlzLnRhYkNvbmZpZyA9IHRhYnNbcGFnZVRhYnNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcclxuICAgIFsndG9wJywgJ2NvbnRlbnQnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICAgIHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXS5tYXAoKHNlY3Rpb24pID0+ICh7XHJcbiAgICAgICAgLi4uc2VjdGlvbixcclxuICAgICAgICB0aXRsZTogX3Qoc2VjdGlvbi50aXRsZSlcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVxdWVzdCB0aGUgY29uZmlndXJlZCB3aWRnZXRzIGRhdGEgKi9cclxuICBwYWdlUmVxdWVzdCQoaWQsIG9uRXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zO1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XHJcbiAgICAgIG9uRXJyb3IsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0eXBlOiB0aGlzLnBhZ2VDb25maWcudHlwZSxcclxuICAgICAgICBzZWN0aW9uczogc2VjdGlvbnMubWFwKChzKSA9PiBzLmlkKSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgdGhpcy5pbml0U2VjdGlvbnMocmVzcG9uc2UpO1xyXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIExvYWQgYWxsIHRoZSBjb25maWd1cmVkIHdpZGdldHMgKi9cclxuICBwcml2YXRlIGluaXRTZWN0aW9ucyhyZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9ucztcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcclxuICAgICAgaWYgKCF3aWRnZXREYXRhU291cmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlU2VjdGlvbiA9IHJlc3BvbnNlLnNlY3Rpb25zW2lkXTtcclxuICAgICAgLy8gc2V0IGlkXHJcbiAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpZDtcclxuICAgICAgLy8gdXBkYXRlIGRhdGFcclxuICAgICAgaWYgKHJlc3BvbnNlU2VjdGlvbikge1xyXG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGUocmVzcG9uc2VTZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRhYnNcclxuICAgIGlmICh0aGlzLnRhYkNvbmZpZykge1xyXG4gICAgICBjb25zdCB0YWJTZWN0aW9uID0gc2VjdGlvbnMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09ICd0YWJzJyk7XHJcbiAgICAgIHRoaXMub25lKHRhYlNlY3Rpb24uaWQpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIHJvb3Q6IHRoaXMucGFnZUNvbmZpZy50YWJzLFxyXG4gICAgICAgIHNsdWc6IHRoaXMuc2x1ZyxcclxuICAgICAgICBjdXJyZW50VGFiOiB0aGlzLnRhYlxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbmUodGFiU2VjdGlvbi5pZCkudXBkYXRlKHRoaXMudGFiQ29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSGVhZFRpdGxlKHsgdGl0bGU6IHJlc291cmNlVGl0bGUgfSkge1xyXG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcclxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIF90KHBhZ2VUaXRsZSksIHJlc291cmNlVGl0bGVdLmpvaW4oJyA+ICcpKTtcclxuICB9XHJcbn1cclxuIl19