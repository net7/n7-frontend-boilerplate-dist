import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import entityLinksHelper from '../search/entity-links.helper';
var HEADER_ICON_OPEN = 'n7-icon-angle-down';
var HEADER_ICON_CLOSE = 'n7-icon-angle-right';
var AwFacetsWrapperDS = /** @class */ (function (_super) {
    __extends(AwFacetsWrapperDS, _super);
    function AwFacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRequestParams = function () { return _this.searchModel.getRequestParams(); };
        _this.filtersAsQueryParams = function (filters) { return _this.searchModel.filtersAsQueryParams(filters); };
        _this.updateFiltersFromQueryParams = function (queryParams) {
            _this.searchModel.updateFiltersFromQueryParams(queryParams);
        };
        _this.getInputByFacetId = function (facetId) { return _this.searchModel.getInputByFacetId(facetId); };
        _this.filterTarget = function (target) {
            _this.searchModel.filterTarget(target);
        };
        _this.updateInputsFromFilters = function () {
            _this.searchModel.updateInputsFromFilters();
        };
        return _this;
    }
    AwFacetsWrapperDS.prototype.transform = function (data) {
        var _this = this;
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
            entityLinksHelper.initPagination(this.searchModel);
        }
        var id = this.searchModel.getId();
        var fields = this.searchModel.getFields();
        var groups = [];
        fields.forEach(function (fieldConfig, fieldIndex) {
            var groupId = "group-" + id + "-" + fieldIndex;
            // header config
            var header = _this._headerConfig(fieldConfig.header, groupId);
            // inputs config
            var sections = [];
            _this.searchModel.getInputs()
                .filter(function (input) { return input.getSectionIndex() === fieldIndex; })
                .map(function (input) {
                input.update();
                return {
                    facetId: input.getFacetId(),
                    type: input.getType(),
                    output: input.getOutput(),
                };
            })
                .forEach(function (_a) {
                var type = _a.type, output = _a.output, facetId = _a.facetId;
                sections.push({
                    classes: _this._getSectionClasses(type),
                    inputs: Array.isArray(output) ? output : [output],
                    _meta: {
                        facetId: facetId,
                    },
                });
            });
            groups.push({
                header: header,
                facet: { sections: sections },
                classes: "n7-facets-wrapper__" + groupId,
                isOpen: true,
                _meta: {
                    groupId: groupId,
                },
            });
        });
        return {
            groups: groups,
            classes: "n7-facets-wrapper__" + this.searchModel.getId(),
        };
    };
    AwFacetsWrapperDS.prototype.toggleGroup = function (_a) {
        var eventPayload = _a.eventPayload;
        this.output.groups.forEach(function (group) {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        });
    };
    AwFacetsWrapperDS.prototype.onFacetChange = function (_a) {
        var eventPayload = _a.eventPayload;
        var _b = eventPayload.inputPayload, facetId = _b.facetId, source = _b.source, trigger = _b.trigger;
        var filter = this.searchModel.getFiltersByFacetId(facetId)[0] || { value: null };
        var filterValue = filter.value;
        var remove = false;
        var value = eventPayload.inputPayload.value || eventPayload.value;
        // normalize
        value = "" + value;
        // remove control
        if (Array.isArray(filterValue)) {
            remove = filterValue.indexOf(value) !== -1;
        }
        else {
            remove = filterValue === value;
        }
        // input text control
        // TODO: gestire i casi enter / icon click nel input text
        if (source === 'input-text' && ['enter', 'icon'].indexOf(trigger) !== -1)
            return;
        this.searchModel.updateFilter(facetId, value, remove);
        this.searchModel.updateInputsFromFilters();
    };
    AwFacetsWrapperDS.prototype.updateFilteredTarget = function (target) {
        if (!this.searchModel) {
            return;
        }
        var input = this.searchModel.getInputByFacetId(target);
        this.output.groups
            .map(function (group) { return group.facet; })
            .map(function (facet) { return facet.sections; })
            .forEach(function (sections) {
            sections.forEach(function (section) {
                if (section._meta.facetId === target) {
                    var inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            });
        });
    };
    AwFacetsWrapperDS.prototype.updateInputLinks = function () {
        var _this = this;
        if (!this.searchModel) {
            return;
        }
        var linksFacetIds = this.searchModel.getInputs()
            .filter(function (input) { return input.getType() === 'link'; })
            .map(function (input) { return input.getFacetId(); });
        this.output.groups
            .map(function (group) { return group.facet; })
            .map(function (facet) { return facet.sections; })
            .forEach(function (sections) {
            sections.forEach(function (section) {
                if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                    var input = _this.searchModel.getInputByFacetId(section._meta.facetId);
                    input.update();
                    var inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            });
        });
    };
    AwFacetsWrapperDS.prototype._getSectionClasses = function (type) {
        var classesMap = {
            text: 'text',
            checkbox: 'checkboxes',
            link: 'links',
            select: 'select',
        };
        return "n7-facet__section-input-" + classesMap[type];
    };
    AwFacetsWrapperDS.prototype._headerConfig = function (header, groupId) {
        return header ? {
            text: header.label,
            iconRight: HEADER_ICON_OPEN,
            classes: header.classes,
            payload: {
                source: 'group-header',
                id: groupId + "-header",
                groupId: groupId,
            },
            _meta: {
                id: groupId + "-header",
            },
        } : null;
    };
    return AwFacetsWrapperDS;
}(DataSource));
export { AwFacetsWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F3LWZhY2V0cy13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsT0FBTyxpQkFBaUIsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxJQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO0FBQzlDLElBQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUM7QUFFaEQ7SUFBdUMscUNBQVU7SUFBakQ7UUFBQSxxRUFtTEM7UUE1Q1Esc0JBQWdCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBbkMsQ0FBbUMsQ0FBQztRQUU3RCwwQkFBb0IsR0FBRyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDLENBQUM7UUFFbkYsa0NBQTRCLEdBQUcsVUFBQyxXQUFXO1lBQ2hELEtBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFBO1FBRU0sdUJBQWlCLEdBQUcsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO1FBRTdFLGtCQUFZLEdBQUcsVUFBQyxNQUFNO1lBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQTtRQUVNLDZCQUF1QixHQUFHO1lBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENB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QUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsY0FBYztnQkFDdEIsRUFBRSxFQUFLLE9BQU8sWUFBUztnQkFDdkIsT0FBTyxTQUFBO2FBQ1I7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFLLE9BQU8sWUFBUzthQUN4QjtTQUNGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFuTEQsQ0FBdUMsVUFBVSxHQW1MaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQXdTZWFyY2hNb2RlbCB9IGZyb20gJy4uL3NlYXJjaC9hdy1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IGVudGl0eUxpbmtzSGVscGVyIGZyb20gJy4uL3NlYXJjaC9lbnRpdHktbGlua3MuaGVscGVyJztcblxuY29uc3QgSEVBREVSX0lDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuY29uc3QgSEVBREVSX0lDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG5cbmV4cG9ydCBjbGFzcyBBd0ZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgc2VhcmNoTW9kZWw6IEF3U2VhcmNoTW9kZWw7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaE1vZGVsKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsID0gZGF0YS5zZWFyY2hNb2RlbDtcbiAgICAgIGVudGl0eUxpbmtzSGVscGVyLmluaXRQYWdpbmF0aW9uKHRoaXMuc2VhcmNoTW9kZWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpO1xuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmllbGRzKCk7XG5cbiAgICBjb25zdCBncm91cHMgPSBbXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZENvbmZpZywgZmllbGRJbmRleCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBJZCA9IGBncm91cC0ke2lkfS0ke2ZpZWxkSW5kZXh9YDtcblxuICAgICAgLy8gaGVhZGVyIGNvbmZpZ1xuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5faGVhZGVyQ29uZmlnKGZpZWxkQ29uZmlnLmhlYWRlciwgZ3JvdXBJZCk7XG5cbiAgICAgIC8vIGlucHV0cyBjb25maWdcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRTZWN0aW9uSW5kZXgoKSA9PT0gZmllbGRJbmRleClcbiAgICAgICAgLm1hcCgoaW5wdXQpID0+IHtcbiAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFjZXRJZDogaW5wdXQuZ2V0RmFjZXRJZCgpLFxuICAgICAgICAgICAgdHlwZTogaW5wdXQuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgb3V0cHV0OiBpbnB1dC5nZXRPdXRwdXQoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgoeyB0eXBlLCBvdXRwdXQsIGZhY2V0SWQgfSkgPT4ge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgY2xhc3NlczogdGhpcy5fZ2V0U2VjdGlvbkNsYXNzZXModHlwZSksXG4gICAgICAgICAgICBpbnB1dHM6IEFycmF5LmlzQXJyYXkob3V0cHV0KSA/IG91dHB1dCA6IFtvdXRwdXRdLFxuICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBncm91cHMucHVzaCh7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgZmFjZXQ6IHsgc2VjdGlvbnMgfSxcbiAgICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke2dyb3VwSWR9YCxcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICBfbWV0YToge1xuICAgICAgICAgIGdyb3VwSWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBncm91cHMsXG4gICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7dGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpfWAsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVHcm91cCh7IGV2ZW50UGF5bG9hZCB9KSB7XG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBpZiAoZ3JvdXAuX21ldGEuZ3JvdXBJZCA9PT0gZXZlbnRQYXlsb2FkLmdyb3VwSWQpIHtcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gIWdyb3VwLmlzT3BlbjtcbiAgICAgICAgZ3JvdXAuaGVhZGVyLmljb25SaWdodCA9IGdyb3VwLmlzT3BlbiA/IEhFQURFUl9JQ09OX09QRU4gOiBIRUFERVJfSUNPTl9DTE9TRTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZhY2V0Q2hhbmdlKHsgZXZlbnRQYXlsb2FkIH0pIHtcbiAgICBjb25zdCB7IGZhY2V0SWQsIHNvdXJjZSwgdHJpZ2dlciB9ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZDtcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZClbMF0gfHwgeyB2YWx1ZTogbnVsbCB9O1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZmlsdGVyLnZhbHVlO1xuXG4gICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xuICAgIGxldCB2YWx1ZTogYW55ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZC52YWx1ZSB8fCBldmVudFBheWxvYWQudmFsdWU7XG5cbiAgICAvLyBub3JtYWxpemVcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cbiAgICAvLyByZW1vdmUgY29udHJvbFxuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSkge1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaW5wdXQgdGV4dCBjb250cm9sXG4gICAgLy8gVE9ETzogZ2VzdGlyZSBpIGNhc2kgZW50ZXIgLyBpY29uIGNsaWNrIG5lbCBpbnB1dCB0ZXh0XG4gICAgaWYgKHNvdXJjZSA9PT0gJ2lucHV0LXRleHQnICYmIFsnZW50ZXInLCAnaWNvbiddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xKSByZXR1cm47XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaE1vZGVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcCgoZ3JvdXApID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcCgoZmFjZXQpID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgICBpZiAoc2VjdGlvbi5fbWV0YS5mYWNldElkID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dExpbmtzKCkge1xuICAgIGlmICghdGhpcy5zZWFyY2hNb2RlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsaW5rc0ZhY2V0SWRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxuICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFR5cGUoKSA9PT0gJ2xpbmsnKVxuICAgICAgLm1hcCgoaW5wdXQpID0+IGlucHV0LmdldEZhY2V0SWQoKSk7XG5cbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoKGdyb3VwKSA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5mb3JFYWNoKChzZWN0aW9ucykgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKGxpbmtzRmFjZXRJZHMuaW5kZXhPZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHNlY3Rpb24uX21ldGEuZmFjZXRJZCk7XG4gICAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zID0gKCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG5cbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMgPSAocXVlcnlQYXJhbXMpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkID0gKGZhY2V0SWQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XG5cbiAgcHVibGljIGZpbHRlclRhcmdldCA9ICh0YXJnZXQpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpIHtcbiAgICBjb25zdCBjbGFzc2VzTWFwID0ge1xuICAgICAgdGV4dDogJ3RleHQnLFxuICAgICAgY2hlY2tib3g6ICdjaGVja2JveGVzJyxcbiAgICAgIGxpbms6ICdsaW5rcycsXG4gICAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIH07XG5cbiAgICByZXR1cm4gYG43LWZhY2V0X19zZWN0aW9uLWlucHV0LSR7Y2xhc3Nlc01hcFt0eXBlXX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGVhZGVyQ29uZmlnKGhlYWRlciwgZ3JvdXBJZCkge1xuICAgIHJldHVybiBoZWFkZXIgPyB7XG4gICAgICB0ZXh0OiBoZWFkZXIubGFiZWwsXG4gICAgICBpY29uUmlnaHQ6IEhFQURFUl9JQ09OX09QRU4sXG4gICAgICBjbGFzc2VzOiBoZWFkZXIuY2xhc3NlcyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc291cmNlOiAnZ3JvdXAtaGVhZGVyJyxcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXG4gICAgICAgIGdyb3VwSWQsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHtcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXG4gICAgICB9LFxuICAgIH0gOiBudWxsO1xuICB9XG59XG4iXX0=