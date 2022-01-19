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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUErSEM7UUE1R1EsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUEwR2xFLENBQUM7SUF4R0MsbUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELGNBQWM7UUFDZCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJ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QUF3QixFQUF3QjtZQUF0Qix3QkFBb0I7UUFDNUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBL0hELENBQXdDLGdCQUFnQixHQStIdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcGFnZUNvbmZpZzogYW55O1xyXG5cclxuICBwdWJsaWMgdGFiQ29uZmlnOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdGFiOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzbHVnOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcclxuXHJcbiAgcHVibGljIGVycm9yRGVzY3JpcHRpb24gPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl9kZXNjcmlwdGlvbicpO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcclxuXHJcbiAgICAvLyB0YWJzIGNvbmZpZ1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3RhYnMnKTtcclxuICAgIGNvbnN0IHBhZ2VUYWJzID0gdGhpcy5wYWdlQ29uZmlnLnRhYnM7XHJcbiAgICBpZiAodGFicyAmJiBwYWdlVGFicykge1xyXG4gICAgICB0aGlzLnRhYkNvbmZpZyA9IHRhYnNbcGFnZVRhYnNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcclxuICAgIFsndG9wJywgJ2NvbnRlbnQnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICAgIHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXS5tYXAoKHNlY3Rpb24pID0+ICh7XHJcbiAgICAgICAgLi4uc2VjdGlvbixcclxuICAgICAgICB0aXRsZTogX3Qoc2VjdGlvbi50aXRsZSlcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVxdWVzdCB0aGUgY29uZmlndXJlZCB3aWRnZXRzIGRhdGEgKi9cclxuICBwYWdlUmVxdWVzdCQoaWQsIG9uRXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zO1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XHJcbiAgICAgIG9uRXJyb3IsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0eXBlOiB0aGlzLnBhZ2VDb25maWcudHlwZSxcclxuICAgICAgICBzZWN0aW9uczogc2VjdGlvbnMubWFwKChzKSA9PiBzLmlkKSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgdGhpcy5pbml0U2VjdGlvbnMocmVzcG9uc2UpO1xyXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIExvYWQgYWxsIHRoZSBjb25maWd1cmVkIHdpZGdldHMgKi9cclxuICBwcml2YXRlIGluaXRTZWN0aW9ucyhyZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9ucztcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQsIHR5cGUsIHRvb2xzIH0pID0+IHtcclxuICAgICAgLy8gdXBkYXRlIHNlY3Rpb24gZGF0YXNvdXJjZVxyXG4gICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcclxuICAgICAgaWYgKCF3aWRnZXREYXRhU291cmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlU2VjdGlvbiA9IHJlc3BvbnNlLnNlY3Rpb25zW2lkXTtcclxuICAgICAgLy8gc2V0IGlkXHJcbiAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpZDtcclxuICAgICAgLy8gY2hlY2sgdmlld2VyIHRvb2xzXHJcbiAgICAgIGlmICh0eXBlID09PSAndmlld2VyJykge1xyXG4gICAgICAgIC8vIHVwZGF0ZSBpbWFnZSB2aWV3ZXIgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKHsgdG9vbHMgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIHVwZGF0ZSBkYXRhXHJcbiAgICAgIGlmIChyZXNwb25zZVNlY3Rpb24gJiYgIWhlbHBlcnMuaXNFbXB0eShyZXNwb25zZVNlY3Rpb24pKSB7XHJcbiAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShyZXNwb25zZVNlY3Rpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHVubG9hZCB0aGUgY29tcG9uZW50IHdpdGhvdXQgZGF0YVxyXG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGUodW5kZWZpbmVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaW1hZ2Ugdmlld2VyIHRvb2xzIGNoZWNrXHJcbiAgICAgIGlmICh0eXBlID09PSAndmlld2VyJyAmJiB0b29scykge1xyXG4gICAgICAgIGNvbnN0IHRvb2xzSWQgPSBgJHtpZH0tdG9vbHNgO1xyXG4gICAgICAgIC8vIHVwZGF0ZSBpbWFnZSB2aWV3ZXIgdG9vbHMgZGF0YXNvdXJjZVxyXG4gICAgICAgIGNvbnN0IHdpZGdldFRvb2xzRGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZSh0b29sc0lkKTtcclxuICAgICAgICBpZiAoIXdpZGdldFRvb2xzRGF0YVNvdXJjZSkgcmV0dXJuO1xyXG4gICAgICAgIC8vIHNldCBpZFxyXG4gICAgICAgIHdpZGdldFRvb2xzRGF0YVNvdXJjZS5pZCA9IHRvb2xzSWQ7XHJcbiAgICAgICAgLy8gdXBkYXRlIGRhdGFcclxuICAgICAgICBpZiAocmVzcG9uc2VTZWN0aW9uICYmICFoZWxwZXJzLmlzRW1wdHkocmVzcG9uc2VTZWN0aW9uKSkge1xyXG4gICAgICAgICAgdGhpcy5vbmUodG9vbHNJZCkudXBkYXRlKHJlc3BvbnNlU2VjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHVubG9hZCB0aGUgY29tcG9uZW50IHdpdGhvdXQgZGF0YVxyXG4gICAgICAgICAgdGhpcy5vbmUodG9vbHNJZCkudXBkYXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGFic1xyXG4gICAgaWYgKHRoaXMudGFiQ29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IHRhYlNlY3Rpb24gPSBzZWN0aW9ucy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gJ3RhYnMnKTtcclxuICAgICAgdGhpcy5vbmUodGFiU2VjdGlvbi5pZCkudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgcm9vdDogdGhpcy5wYWdlQ29uZmlnLnRhYnMsXHJcbiAgICAgICAgc2x1ZzogdGhpcy5zbHVnLFxyXG4gICAgICAgIGN1cnJlbnRUYWI6IHRoaXMudGFiXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uZSh0YWJTZWN0aW9uLmlkKS51cGRhdGUodGhpcy50YWJDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVIZWFkVGl0bGUoeyB0aXRsZTogcmVzb3VyY2VUaXRsZSB9KSB7XHJcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKSwgcmVzb3VyY2VUaXRsZV0uam9pbignID4gJykpO1xyXG4gIH1cclxufVxyXG4iXX0=