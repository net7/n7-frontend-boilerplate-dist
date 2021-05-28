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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F3LWZhY2V0cy13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsT0FBTyxpQkFBaUIsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxJQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO0FBQzlDLElBQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUM7QUFFaEQ7SUFBdUMscUNBQVU7SUFBakQ7UUFBQSxxRUFtTEM7UUE1Q1Esc0JBQWdCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBbkMsQ0FBbUMsQ0FBQztRQUU3RCwwQkFBb0IsR0FBRyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDLENBQUM7UUFFbkYsa0NBQTRCLEdBQUcsVUFBQyxXQUFXO1lBQ2hELEtBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFBO1FBRU0sdUJBQWlCLEdBQUcsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO1FBRTdFLGtCQUFZLEdBQUcsVUFBQyxNQUFNO1lBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQTtRQUVNLDZCQUF1QixHQUFHO1lBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUE7O0lBNEJILENBQUM7SUFoTFcscUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFzREM7UUFyREMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFNUMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUFXLEVBQUUsVUFBVTtZQUNyQyxJQUFNLE9BQU8sR0FBRyxXQUFTLEVBQUUsU0FBSSxVQUFZLENBQUM7WUFFNUMsZ0JBQWdCO1lBQ2hCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUvRCxnQkFBZ0I7WUFDaEIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2lCQUN6QixNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssVUFBVSxFQUF0QyxDQUFzQyxDQUFDO2lCQUN6RCxHQUFHLENBQUMsVUFBQyxLQUFLO2dCQUNULEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZixPQUFPO29CQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFO29CQUMzQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUU7aUJBQzFCLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsT0FBTyxDQUFDLFVBQUMsRUFBeUI7b0JBQXZCLGNBQUksRUFBRSxrQkFBTSxFQUFFLG9CQUFPO2dCQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNaLE9BQU8sRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO29CQUN0QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDakQsS0FBSyxFQUFFO3dCQUNMLE9BQU8sU0FBQTtxQkFDUjtpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVMLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsTUFBTSxRQUFBO2dCQUNOLEtBQUssRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsd0JBQXNCLE9BQVM7Z0JBQ3hDLE1BQU0sRUFBRSxJQUFJO2dCQUNaLEtBQUssRUFBRTtvQkFDTCxPQUFPLFNBQUE7aUJBQ1I7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxNQUFNLFFBQUE7WUFDTixPQUFPLEVBQUUsd0JBQXNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFJO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsRUFBZ0I7WUFBZCw4QkFBWTtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQy9CLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDaEQsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQzthQUM5RTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHlDQUFhLEdBQXBCLFVBQXFCLEVBQWdCO1lBQWQsOEJBQVk7UUFDM0IsSUFBQSw4QkFBd0QsRUFBdEQsb0JBQU8sRUFBRSxrQkFBTSxFQUFFLG9CQUFxQyxDQUFDO1FBQy9ELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDbkYsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxLQUFLLEdBQVEsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQztRQUV2RSxZQUFZO1FBQ1osS0FBSyxHQUFHLEtBQUcsS0FBTyxDQUFDO1FBRW5CLGlCQUFpQjtRQUNqQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLE1BQU0sR0FBRyxXQUFXLEtBQUssS0FBSyxDQUFDO1NBQ2hDO1FBRUQscUJBQXFCO1FBQ3JCLHlEQUF5RDtRQUN6RCxJQUFJLE1BQU0sS0FBSyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU87UUFFakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLGdEQUFvQixHQUEzQixVQUE0QixNQUFNO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2YsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUM7YUFDM0IsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjLENBQUM7YUFDOUIsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUNoQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDdkIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7b0JBQ3BDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzNFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0Q0FBZ0IsR0FBdkI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7YUFDL0MsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLE1BQU0sRUFBMUIsQ0FBMEIsQ0FBQzthQUM3QyxHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQzthQUMzQixHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWMsQ0FBQzthQUM5QixPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ2hCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUN2QixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdkQsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4RSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2YsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN0QyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDM0U7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW9CTyw4Q0FBa0IsR0FBMUIsVUFBMkIsSUFBSTtRQUM3QixJQUFNLFVBQVUsR0FBRztZQUNqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztRQUVGLE9BQU8sNkJBQTJCLFVBQVUsQ0FBQyxJQUFJLENBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRU8seUNBQWEsR0FBckIsVUFBc0IsTUFBTSxFQUFFLE9BQU87UUFDbkMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsY0FBYztnQkFDdEIsRUFBRSxFQUFLLE9BQU8sWUFBUztnQkFDdkIsT0FBTyxTQUFBO2FBQ1I7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFLLE9BQU8sWUFBUzthQUN4QjtTQUNGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFuTEQsQ0FBdUMsVUFBVSxHQW1MaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBBd1NlYXJjaE1vZGVsIH0gZnJvbSAnLi4vc2VhcmNoL2F3LXNlYXJjaC5tb2RlbCc7XHJcbmltcG9ydCBlbnRpdHlMaW5rc0hlbHBlciBmcm9tICcuLi9zZWFyY2gvZW50aXR5LWxpbmtzLmhlbHBlcic7XHJcblxyXG5jb25zdCBIRUFERVJfSUNPTl9PUEVOID0gJ243LWljb24tYW5nbGUtZG93bic7XHJcbmNvbnN0IEhFQURFUl9JQ09OX0NMT1NFID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIHNlYXJjaE1vZGVsOiBBd1NlYXJjaE1vZGVsO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGlmICghdGhpcy5zZWFyY2hNb2RlbCkge1xyXG4gICAgICB0aGlzLnNlYXJjaE1vZGVsID0gZGF0YS5zZWFyY2hNb2RlbDtcclxuICAgICAgZW50aXR5TGlua3NIZWxwZXIuaW5pdFBhZ2luYXRpb24odGhpcy5zZWFyY2hNb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElkKCk7XHJcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpZWxkcygpO1xyXG5cclxuICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xyXG5cclxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZENvbmZpZywgZmllbGRJbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBncm91cElkID0gYGdyb3VwLSR7aWR9LSR7ZmllbGRJbmRleH1gO1xyXG5cclxuICAgICAgLy8gaGVhZGVyIGNvbmZpZ1xyXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLl9oZWFkZXJDb25maWcoZmllbGRDb25maWcuaGVhZGVyLCBncm91cElkKTtcclxuXHJcbiAgICAgIC8vIGlucHV0cyBjb25maWdcclxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxyXG4gICAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRTZWN0aW9uSW5kZXgoKSA9PT0gZmllbGRJbmRleClcclxuICAgICAgICAubWFwKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgaW5wdXQudXBkYXRlKCk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmYWNldElkOiBpbnB1dC5nZXRGYWNldElkKCksXHJcbiAgICAgICAgICAgIHR5cGU6IGlucHV0LmdldFR5cGUoKSxcclxuICAgICAgICAgICAgb3V0cHV0OiBpbnB1dC5nZXRPdXRwdXQoKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZm9yRWFjaCgoeyB0eXBlLCBvdXRwdXQsIGZhY2V0SWQgfSkgPT4ge1xyXG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGNsYXNzZXM6IHRoaXMuX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpLFxyXG4gICAgICAgICAgICBpbnB1dHM6IEFycmF5LmlzQXJyYXkob3V0cHV0KSA/IG91dHB1dCA6IFtvdXRwdXRdLFxyXG4gICAgICAgICAgICBfbWV0YToge1xyXG4gICAgICAgICAgICAgIGZhY2V0SWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgZmFjZXQ6IHsgc2VjdGlvbnMgfSxcclxuICAgICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7Z3JvdXBJZH1gLFxyXG4gICAgICAgIGlzT3BlbjogdHJ1ZSxcclxuICAgICAgICBfbWV0YToge1xyXG4gICAgICAgICAgZ3JvdXBJZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyb3VwcyxcclxuICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke3RoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKX1gLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVHcm91cCh7IGV2ZW50UGF5bG9hZCB9KSB7XHJcbiAgICB0aGlzLm91dHB1dC5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcclxuICAgICAgaWYgKGdyb3VwLl9tZXRhLmdyb3VwSWQgPT09IGV2ZW50UGF5bG9hZC5ncm91cElkKSB7XHJcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gIWdyb3VwLmlzT3BlbjtcclxuICAgICAgICBncm91cC5oZWFkZXIuaWNvblJpZ2h0ID0gZ3JvdXAuaXNPcGVuID8gSEVBREVSX0lDT05fT1BFTiA6IEhFQURFUl9JQ09OX0NMT1NFO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZhY2V0Q2hhbmdlKHsgZXZlbnRQYXlsb2FkIH0pIHtcclxuICAgIGNvbnN0IHsgZmFjZXRJZCwgc291cmNlLCB0cmlnZ2VyIH0gPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkO1xyXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpWzBdIHx8IHsgdmFsdWU6IG51bGwgfTtcclxuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZmlsdGVyLnZhbHVlO1xyXG5cclxuICAgIGxldCByZW1vdmUgPSBmYWxzZTtcclxuICAgIGxldCB2YWx1ZTogYW55ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZC52YWx1ZSB8fCBldmVudFBheWxvYWQudmFsdWU7XHJcblxyXG4gICAgLy8gbm9ybWFsaXplXHJcbiAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGNvbnRyb2xcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSkge1xyXG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZSA9PT0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5wdXQgdGV4dCBjb250cm9sXHJcbiAgICAvLyBUT0RPOiBnZXN0aXJlIGkgY2FzaSBlbnRlciAvIGljb24gY2xpY2sgbmVsIGlucHV0IHRleHRcclxuICAgIGlmIChzb3VyY2UgPT09ICdpbnB1dC10ZXh0JyAmJiBbJ2VudGVyJywgJ2ljb24nXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmUpO1xyXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCkge1xyXG4gICAgaWYgKCF0aGlzLnNlYXJjaE1vZGVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xyXG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXHJcbiAgICAgIC5tYXAoKGdyb3VwKSA9PiBncm91cC5mYWNldClcclxuICAgICAgLm1hcCgoZmFjZXQpID0+IGZhY2V0LnNlY3Rpb25zKVxyXG4gICAgICAuZm9yRWFjaCgoc2VjdGlvbnMpID0+IHtcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VjdGlvbi5fbWV0YS5mYWNldElkID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlSW5wdXRMaW5rcygpIHtcclxuICAgIGlmICghdGhpcy5zZWFyY2hNb2RlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaW5rc0ZhY2V0SWRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxyXG4gICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0VHlwZSgpID09PSAnbGluaycpXHJcbiAgICAgIC5tYXAoKGlucHV0KSA9PiBpbnB1dC5nZXRGYWNldElkKCkpO1xyXG5cclxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xyXG4gICAgICAubWFwKChncm91cCkgPT4gZ3JvdXAuZmFjZXQpXHJcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcclxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGxpbmtzRmFjZXRJZHMuaW5kZXhPZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoc2VjdGlvbi5fbWV0YS5mYWNldElkKTtcclxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMgPSAoKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcclxuXHJcbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElucHV0QnlGYWNldElkID0gKGZhY2V0SWQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlclRhcmdldCh0YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0U2VjdGlvbkNsYXNzZXModHlwZSkge1xyXG4gICAgY29uc3QgY2xhc3Nlc01hcCA9IHtcclxuICAgICAgdGV4dDogJ3RleHQnLFxyXG4gICAgICBjaGVja2JveDogJ2NoZWNrYm94ZXMnLFxyXG4gICAgICBsaW5rOiAnbGlua3MnLFxyXG4gICAgICBzZWxlY3Q6ICdzZWxlY3QnLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYG43LWZhY2V0X19zZWN0aW9uLWlucHV0LSR7Y2xhc3Nlc01hcFt0eXBlXX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGVhZGVyQ29uZmlnKGhlYWRlciwgZ3JvdXBJZCkge1xyXG4gICAgcmV0dXJuIGhlYWRlciA/IHtcclxuICAgICAgdGV4dDogaGVhZGVyLmxhYmVsLFxyXG4gICAgICBpY29uUmlnaHQ6IEhFQURFUl9JQ09OX09QRU4sXHJcbiAgICAgIGNsYXNzZXM6IGhlYWRlci5jbGFzc2VzLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgc291cmNlOiAnZ3JvdXAtaGVhZGVyJyxcclxuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcclxuICAgICAgICBncm91cElkLFxyXG4gICAgICB9LFxyXG4gICAgICBfbWV0YToge1xyXG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxyXG4gICAgICB9LFxyXG4gICAgfSA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==