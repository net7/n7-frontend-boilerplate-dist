import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
import helpers from '../../../common/helpers';
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
            var id = _a.id, type = _a.type, tools = _a.tools;
            // update section datasource
            var widgetDataSource = _this.getWidgetDataSource(id);
            if (!widgetDataSource)
                return;
            var responseSection = response.sections[id];
            // set id
            widgetDataSource.id = id;
            // check viewer tools
            if (type === 'viewer') {
                // update image viewer options
                _this.one(id).updateOptions({ tools: tools });
            }
            // update data
            if (responseSection && !helpers.isEmpty(responseSection)) {
                _this.one(id).update(responseSection);
            }
            else {
                // unload the component without data
                _this.one(id).update(undefined);
            }
            // image viewer tools check
            if (type === 'viewer' && tools) {
                var toolsId = id + "-tools";
                // update image viewer tools datasource
                var widgetToolsDataSource = _this.getWidgetDataSource(toolsId);
                if (!widgetToolsDataSource)
                    return;
                // set id
                widgetToolsDataSource.id = toolsId;
                // update data
                if (responseSection && !helpers.isEmpty(responseSection)) {
                    _this.one(toolsId).update(responseSection);
                }
                else {
                    // unload the component without data
                    _this.one(toolsId).update(undefined);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUErSEM7UUE1R1EsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUEwR2xFLENBQUM7SUF4R0MsbUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELGNBQWM7UUFDZCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJ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QUF3QixFQUF3QjtZQUF0Qix3QkFBb0I7UUFDNUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBL0hELENBQXdDLGdCQUFnQixHQStIdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZVxuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIHBhZ2VDb25maWc6IGFueTtcblxuICBwdWJsaWMgdGFiQ29uZmlnOiBhbnk7XG5cbiAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgcHVibGljIHRhYjogc3RyaW5nO1xuXG4gIHB1YmxpYyBzbHVnOiBzdHJpbmc7XG5cbiAgcHVibGljIGVycm9yVGl0bGUgPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl90aXRsZScpO1xuXG4gIHB1YmxpYyBlcnJvckRlc2NyaXB0aW9uID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfZGVzY3JpcHRpb24nKTtcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gdGFicyBjb25maWdcbiAgICBjb25zdCB0YWJzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgndGFicycpO1xuICAgIGNvbnN0IHBhZ2VUYWJzID0gdGhpcy5wYWdlQ29uZmlnLnRhYnM7XG4gICAgaWYgKHRhYnMgJiYgcGFnZVRhYnMpIHtcbiAgICAgIHRoaXMudGFiQ29uZmlnID0gdGFic1twYWdlVGFic107XG4gICAgfVxuXG4gICAgLy8gYWRkIHRyYW5zbGF0aW9uc1xuICAgIFsndG9wJywgJ2NvbnRlbnQnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnNbdHlwZV0gPSB0aGlzLnBhZ2VDb25maWcuc2VjdGlvbnNbdHlwZV0ubWFwKChzZWN0aW9uKSA9PiAoe1xuICAgICAgICAuLi5zZWN0aW9uLFxuICAgICAgICB0aXRsZTogX3Qoc2VjdGlvbi50aXRsZSlcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXF1ZXN0IHRoZSBjb25maWd1cmVkIHdpZGdldHMgZGF0YSAqL1xuICBwYWdlUmVxdWVzdCQoaWQsIG9uRXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9ucztcbiAgICBjb25zdCBzZWN0aW9ucyA9IHRvcC5jb25jYXQoY29udGVudCk7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XG4gICAgICBvbkVycm9yLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGU6IHRoaXMucGFnZUNvbmZpZy50eXBlLFxuICAgICAgICBzZWN0aW9uczogc2VjdGlvbnMubWFwKChzKSA9PiBzLmlkKSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5pbml0U2VjdGlvbnMocmVzcG9uc2UpO1xuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKHJlc3BvbnNlKTtcbiAgfVxuXG4gIC8qKiBMb2FkIGFsbCB0aGUgY29uZmlndXJlZCB3aWRnZXRzICovXG4gIHByaXZhdGUgaW5pdFNlY3Rpb25zKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9ucztcbiAgICBjb25zdCBzZWN0aW9ucyA9IHRvcC5jb25jYXQoY29udGVudCk7XG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCwgdHlwZSwgdG9vbHMgfSkgPT4ge1xuICAgICAgLy8gdXBkYXRlIHNlY3Rpb24gZGF0YXNvdXJjZVxuICAgICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgICBpZiAoIXdpZGdldERhdGFTb3VyY2UpIHJldHVybjtcbiAgICAgIGNvbnN0IHJlc3BvbnNlU2VjdGlvbiA9IHJlc3BvbnNlLnNlY3Rpb25zW2lkXTtcbiAgICAgIC8vIHNldCBpZFxuICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlkO1xuICAgICAgLy8gY2hlY2sgdmlld2VyIHRvb2xzXG4gICAgICBpZiAodHlwZSA9PT0gJ3ZpZXdlcicpIHtcbiAgICAgICAgLy8gdXBkYXRlIGltYWdlIHZpZXdlciBvcHRpb25zXG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKHsgdG9vbHMgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIHVwZGF0ZSBkYXRhXG4gICAgICBpZiAocmVzcG9uc2VTZWN0aW9uICYmICFoZWxwZXJzLmlzRW1wdHkocmVzcG9uc2VTZWN0aW9uKSkge1xuICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKHJlc3BvbnNlU2VjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1bmxvYWQgdGhlIGNvbXBvbmVudCB3aXRob3V0IGRhdGFcbiAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZSh1bmRlZmluZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBpbWFnZSB2aWV3ZXIgdG9vbHMgY2hlY2tcbiAgICAgIGlmICh0eXBlID09PSAndmlld2VyJyAmJiB0b29scykge1xuICAgICAgICBjb25zdCB0b29sc0lkID0gYCR7aWR9LXRvb2xzYDtcbiAgICAgICAgLy8gdXBkYXRlIGltYWdlIHZpZXdlciB0b29scyBkYXRhc291cmNlXG4gICAgICAgIGNvbnN0IHdpZGdldFRvb2xzRGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSh0b29sc0lkKTtcbiAgICAgICAgaWYgKCF3aWRnZXRUb29sc0RhdGFTb3VyY2UpIHJldHVybjtcbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIHdpZGdldFRvb2xzRGF0YVNvdXJjZS5pZCA9IHRvb2xzSWQ7XG4gICAgICAgIC8vIHVwZGF0ZSBkYXRhXG4gICAgICAgIGlmIChyZXNwb25zZVNlY3Rpb24gJiYgIWhlbHBlcnMuaXNFbXB0eShyZXNwb25zZVNlY3Rpb24pKSB7XG4gICAgICAgICAgdGhpcy5vbmUodG9vbHNJZCkudXBkYXRlKHJlc3BvbnNlU2VjdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdW5sb2FkIHRoZSBjb21wb25lbnQgd2l0aG91dCBkYXRhXG4gICAgICAgICAgdGhpcy5vbmUodG9vbHNJZCkudXBkYXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSB0YWJzXG4gICAgaWYgKHRoaXMudGFiQ29uZmlnKSB7XG4gICAgICBjb25zdCB0YWJTZWN0aW9uID0gc2VjdGlvbnMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09ICd0YWJzJyk7XG4gICAgICB0aGlzLm9uZSh0YWJTZWN0aW9uLmlkKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHJvb3Q6IHRoaXMucGFnZUNvbmZpZy50YWJzLFxuICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXG4gICAgICAgIGN1cnJlbnRUYWI6IHRoaXMudGFiXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKHRhYlNlY3Rpb24uaWQpLnVwZGF0ZSh0aGlzLnRhYkNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIZWFkVGl0bGUoeyB0aXRsZTogcmVzb3VyY2VUaXRsZSB9KSB7XG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKSwgcmVzb3VyY2VUaXRsZV0uam9pbignID4gJykpO1xuICB9XG59XG4iXX0=