import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var HEADER_ICON_OPEN = 'n7-icon-angle-down';
var HEADER_ICON_CLOSE = 'n7-icon-angle-right';
var FacetsWrapperDS = /** @class */ (function (_super) {
    __extends(FacetsWrapperDS, _super);
    function FacetsWrapperDS() {
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
    FacetsWrapperDS.prototype.transform = function (data) {
        var _this = this;
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
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
    FacetsWrapperDS.prototype.toggleGroup = function (_a) {
        var eventPayload = _a.eventPayload;
        this.output.groups.forEach(function (group) {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        });
    };
    FacetsWrapperDS.prototype.onFacetChange = function (_a) {
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
    FacetsWrapperDS.prototype.updateFilteredTarget = function (target) {
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
    FacetsWrapperDS.prototype.updateInputLinks = function () {
        var _this = this;
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
    FacetsWrapperDS.prototype._getSectionClasses = function (type) {
        var classesMap = {
            text: 'text',
            checkbox: 'checkboxes',
            link: 'links',
            select: 'select',
        };
        return "n7-facet__section-input-" + classesMap[type];
    };
    FacetsWrapperDS.prototype._headerConfig = function (header, groupId) {
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
    return FacetsWrapperDS;
}(DataSource));
export { FacetsWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLElBQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7QUFDOUMsSUFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQztBQUdoRDtJQUFxQyxtQ0FBVTtJQUEvQztRQUFBLHFFQTRLQztRQTVDUSxzQkFBZ0IsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFuQyxDQUFtQyxDQUFDO1FBRTdELDBCQUFvQixHQUFHLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQztRQUVuRixrQ0FBNEIsR0FBRyxVQUFDLFdBQVc7WUFDaEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUE7UUFFTSx1QkFBaUIsR0FBRyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQTNDLENBQTJDLENBQUM7UUFFN0Usa0JBQVksR0FBRyxVQUFDLE1BQU07WUFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFBO1FBRU0sNkJBQXVCLEdBQUc7WUFDL0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQTs7SUE0QkgsQ0FBQztJQXpLVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFJO1FB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Q0wsRUFBRSxFQUFLLE9BQU8sWUFBUzthQUN4QjtTQUNGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE1S0QsQ0FBcUMsVUFBVSxHQTRLOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmNvbnN0IEhFQURFUl9JQ09OX09QRU4gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbmNvbnN0IEhFQURFUl9JQ09OX0NMT1NFID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoTW9kZWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwgPSBkYXRhLnNlYXJjaE1vZGVsO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpO1xuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmllbGRzKCk7XG5cbiAgICBjb25zdCBncm91cHMgPSBbXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZENvbmZpZywgZmllbGRJbmRleCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBJZCA9IGBncm91cC0ke2lkfS0ke2ZpZWxkSW5kZXh9YDtcblxuICAgICAgLy8gaGVhZGVyIGNvbmZpZ1xuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5faGVhZGVyQ29uZmlnKGZpZWxkQ29uZmlnLmhlYWRlciwgZ3JvdXBJZCk7XG5cbiAgICAgIC8vIGlucHV0cyBjb25maWdcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRTZWN0aW9uSW5kZXgoKSA9PT0gZmllbGRJbmRleClcbiAgICAgICAgLm1hcCgoaW5wdXQpID0+IHtcbiAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFjZXRJZDogaW5wdXQuZ2V0RmFjZXRJZCgpLFxuICAgICAgICAgICAgdHlwZTogaW5wdXQuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgb3V0cHV0OiBpbnB1dC5nZXRPdXRwdXQoKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgoeyB0eXBlLCBvdXRwdXQsIGZhY2V0SWQgfSkgPT4ge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgY2xhc3NlczogdGhpcy5fZ2V0U2VjdGlvbkNsYXNzZXModHlwZSksXG4gICAgICAgICAgICBpbnB1dHM6IEFycmF5LmlzQXJyYXkob3V0cHV0KSA/IG91dHB1dCA6IFtvdXRwdXRdLFxuICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgZmFjZXRJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBncm91cHMucHVzaCh7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgZmFjZXQ6IHsgc2VjdGlvbnMgfSxcbiAgICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke2dyb3VwSWR9YCxcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICBfbWV0YToge1xuICAgICAgICAgIGdyb3VwSWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBncm91cHMsXG4gICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7dGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpfWAsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVHcm91cCh7IGV2ZW50UGF5bG9hZCB9KSB7XG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBpZiAoZ3JvdXAuX21ldGEuZ3JvdXBJZCA9PT0gZXZlbnRQYXlsb2FkLmdyb3VwSWQpIHtcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gIWdyb3VwLmlzT3BlbjtcbiAgICAgICAgZ3JvdXAuaGVhZGVyLmljb25SaWdodCA9IGdyb3VwLmlzT3BlbiA/IEhFQURFUl9JQ09OX09QRU4gOiBIRUFERVJfSUNPTl9DTE9TRTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZhY2V0Q2hhbmdlKHsgZXZlbnRQYXlsb2FkIH0pIHtcbiAgICBjb25zdCB7IGZhY2V0SWQsIHNvdXJjZSwgdHJpZ2dlciB9ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZDtcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZClbMF0gfHwgeyB2YWx1ZTogbnVsbCB9O1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZmlsdGVyLnZhbHVlO1xuXG4gICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xuICAgIGxldCB2YWx1ZTogYW55ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZC52YWx1ZSB8fCBldmVudFBheWxvYWQudmFsdWU7XG5cbiAgICAvLyBub3JtYWxpemVcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cbiAgICAvLyByZW1vdmUgY29udHJvbFxuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSkge1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaW5wdXQgdGV4dCBjb250cm9sXG4gICAgLy8gVE9ETzogZ2VzdGlyZSBpIGNhc2kgZW50ZXIgLyBpY29uIGNsaWNrIG5lbCBpbnB1dCB0ZXh0XG4gICAgaWYgKHNvdXJjZSA9PT0gJ2lucHV0LXRleHQnICYmIFsnZW50ZXInLCAnaWNvbiddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xKSByZXR1cm47XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcihmYWNldElkLCB2YWx1ZSwgcmVtb3ZlKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHRhcmdldCk7XG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXG4gICAgICAubWFwKChncm91cCkgPT4gZ3JvdXAuZmFjZXQpXG4gICAgICAubWFwKChmYWNldCkgPT4gZmFjZXQuc2VjdGlvbnMpXG4gICAgICAuZm9yRWFjaCgoc2VjdGlvbnMpID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChzZWN0aW9uLl9tZXRhLmZhY2V0SWQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0TGlua3MoKSB7XG4gICAgY29uc3QgbGlua3NGYWNldElkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRzKClcbiAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRUeXBlKCkgPT09ICdsaW5rJylcbiAgICAgIC5tYXAoKGlucHV0KSA9PiBpbnB1dC5nZXRGYWNldElkKCkpO1xuXG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXG4gICAgICAubWFwKChncm91cCkgPT4gZ3JvdXAuZmFjZXQpXG4gICAgICAubWFwKChmYWNldCkgPT4gZmFjZXQuc2VjdGlvbnMpXG4gICAgICAuZm9yRWFjaCgoc2VjdGlvbnMpID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChsaW5rc0ZhY2V0SWRzLmluZGV4T2Yoc2VjdGlvbi5fbWV0YS5mYWNldElkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChzZWN0aW9uLl9tZXRhLmZhY2V0SWQpO1xuICAgICAgICAgICAgaW5wdXQudXBkYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcyA9ICgpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuXG4gIHB1YmxpYyBmaWx0ZXJzQXNRdWVyeVBhcmFtcyA9IChmaWx0ZXJzKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKGZpbHRlcnMpO1xuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZCA9IChmYWNldElkKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpO1xuXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJUYXJnZXQodGFyZ2V0KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycyA9ICgpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKSB7XG4gICAgY29uc3QgY2xhc3Nlc01hcCA9IHtcbiAgICAgIHRleHQ6ICd0ZXh0JyxcbiAgICAgIGNoZWNrYm94OiAnY2hlY2tib3hlcycsXG4gICAgICBsaW5rOiAnbGlua3MnLFxuICAgICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC0ke2NsYXNzZXNNYXBbdHlwZV19YDtcbiAgfVxuXG4gIHByaXZhdGUgX2hlYWRlckNvbmZpZyhoZWFkZXIsIGdyb3VwSWQpIHtcbiAgICByZXR1cm4gaGVhZGVyID8ge1xuICAgICAgdGV4dDogaGVhZGVyLmxhYmVsLFxuICAgICAgaWNvblJpZ2h0OiBIRUFERVJfSUNPTl9PUEVOLFxuICAgICAgY2xhc3NlczogaGVhZGVyLmNsYXNzZXMsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNvdXJjZTogJ2dyb3VwLWhlYWRlcicsXG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxuICAgICAgICBncm91cElkLFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7XG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxuICAgICAgfSxcbiAgICB9IDogbnVsbDtcbiAgfVxufVxuIl19