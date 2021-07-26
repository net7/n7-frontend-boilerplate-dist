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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUE4SEM7UUEzR1EsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUF5R2xFLENBQUM7SUF2R0MsbUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELGNBQWM7UUFDZCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJ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QUF3QixFQUF3QjtZQUF0Qix3QkFBb0I7UUFDNUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBOUhELENBQXdDLGdCQUFnQixHQThIdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgcGFnZUNvbmZpZzogYW55O1xyXG5cclxuICBwdWJsaWMgdGFiQ29uZmlnOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdGFiOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzbHVnOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcclxuXHJcbiAgcHVibGljIGVycm9yRGVzY3JpcHRpb24gPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl9kZXNjcmlwdGlvbicpO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcclxuXHJcbiAgICAvLyB0YWJzIGNvbmZpZ1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3RhYnMnKTtcclxuICAgIGNvbnN0IHBhZ2VUYWJzID0gdGhpcy5wYWdlQ29uZmlnLnRhYnM7XHJcbiAgICBpZiAodGFicyAmJiBwYWdlVGFicykge1xyXG4gICAgICB0aGlzLnRhYkNvbmZpZyA9IHRhYnNbcGFnZVRhYnNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCB0cmFuc2xhdGlvbnNcclxuICAgIFsndG9wJywgJ2NvbnRlbnQnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICAgIHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9uc1t0eXBlXS5tYXAoKHNlY3Rpb24pID0+ICh7XHJcbiAgICAgICAgLi4uc2VjdGlvbixcclxuICAgICAgICB0aXRsZTogX3Qoc2VjdGlvbi50aXRsZSlcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVxdWVzdCB0aGUgY29uZmlndXJlZCB3aWRnZXRzIGRhdGEgKi9cclxuICBwYWdlUmVxdWVzdCQoaWQsIG9uRXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB7IHRvcCwgY29udGVudCB9ID0gdGhpcy5wYWdlQ29uZmlnLnNlY3Rpb25zO1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XHJcbiAgICAgIG9uRXJyb3IsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0eXBlOiB0aGlzLnBhZ2VDb25maWcudHlwZSxcclxuICAgICAgICBzZWN0aW9uczogc2VjdGlvbnMubWFwKChzKSA9PiBzLmlkKSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgdGhpcy5pbml0U2VjdGlvbnMocmVzcG9uc2UpO1xyXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIExvYWQgYWxsIHRoZSBjb25maWd1cmVkIHdpZGdldHMgKi9cclxuICBwcml2YXRlIGluaXRTZWN0aW9ucyhyZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMucGFnZUNvbmZpZy5zZWN0aW9ucztcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQsIHR5cGUsIHRvb2xzIH0pID0+IHtcclxuICAgICAgLy8gdXBkYXRlIHNlY3Rpb24gZGF0YXNvdXJjZVxyXG4gICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcclxuICAgICAgaWYgKCF3aWRnZXREYXRhU291cmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlU2VjdGlvbiA9IHJlc3BvbnNlLnNlY3Rpb25zW2lkXTtcclxuICAgICAgLy8gc2V0IGlkXHJcbiAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpZDtcclxuICAgICAgLy8gY2hlY2sgdmlld2VyIHRvb2xzXHJcbiAgICAgIGlmICh0eXBlID09PSAndmlld2VyJykge1xyXG4gICAgICAgIC8vIHVwZGF0ZSBpbWFnZSB2aWV3ZXIgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKHsgdG9vbHMgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXBkYXRlIGRhdGFcclxuICAgICAgaWYgKHJlc3BvbnNlU2VjdGlvbiAmJiAhaGVscGVycy5pc0VtcHR5KHJlc3BvbnNlU2VjdGlvbikpIHtcclxuICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKHJlc3BvbnNlU2VjdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdW5sb2FkIHRoZSBjb21wb25lbnQgd2l0aG91dCBkYXRhXHJcbiAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpbWFnZSB2aWV3ZXIgdG9vbHMgY2hlY2tcclxuICAgICAgaWYgKHR5cGUgPT09ICd2aWV3ZXInICYmIHRvb2xzKSB7XHJcbiAgICAgICAgY29uc3QgdG9vbHNJZCA9IGAke2lkfS10b29sc2A7XHJcbiAgICAgICAgLy8gdXBkYXRlIGltYWdlIHZpZXdlciB0b29scyBkYXRhc291cmNlXHJcbiAgICAgICAgY29uc3Qgd2lkZ2V0VG9vbHNEYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKHRvb2xzSWQpO1xyXG4gICAgICAgIGlmICghd2lkZ2V0VG9vbHNEYXRhU291cmNlKSByZXR1cm47XHJcbiAgICAgICAgLy8gc2V0IGlkXHJcbiAgICAgICAgd2lkZ2V0VG9vbHNEYXRhU291cmNlLmlkID0gdG9vbHNJZDtcclxuICAgICAgICAvLyB1cGRhdGUgZGF0YVxyXG4gICAgICAgIGlmIChyZXNwb25zZVNlY3Rpb24gJiYgIWhlbHBlcnMuaXNFbXB0eShyZXNwb25zZVNlY3Rpb24pKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZSh0b29sc0lkKS51cGRhdGUocmVzcG9uc2VTZWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gdW5sb2FkIHRoZSBjb21wb25lbnQgd2l0aG91dCBkYXRhXHJcbiAgICAgICAgICB0aGlzLm9uZSh0b29sc0lkKS51cGRhdGUodW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0YWJzXHJcbiAgICBpZiAodGhpcy50YWJDb25maWcpIHtcclxuICAgICAgY29uc3QgdGFiU2VjdGlvbiA9IHNlY3Rpb25zLmZpbmQoKHsgdHlwZSB9KSA9PiB0eXBlID09PSAndGFicycpO1xyXG4gICAgICB0aGlzLm9uZSh0YWJTZWN0aW9uLmlkKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICByb290OiB0aGlzLnBhZ2VDb25maWcudGFicyxcclxuICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXHJcbiAgICAgICAgY3VycmVudFRhYjogdGhpcy50YWJcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25lKHRhYlNlY3Rpb24uaWQpLnVwZGF0ZSh0aGlzLnRhYkNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUhlYWRUaXRsZSh7IHRpdGxlOiByZXNvdXJjZVRpdGxlIH0pIHtcclxuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpLCByZXNvdXJjZVRpdGxlXS5qb2luKCcgPiAnKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==