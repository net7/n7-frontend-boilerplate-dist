import { DataSource } from '@n7-frontend/core';
const HEADER_ICON_OPEN = 'n7-icon-angle-down';
const HEADER_ICON_CLOSE = 'n7-icon-angle-right';
export class FacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getRequestParams = () => this.searchModel.getRequestParams();
        this.filtersAsQueryParams = (filters) => this.searchModel.filtersAsQueryParams(filters);
        this.updateFiltersFromQueryParams = (queryParams) => {
            this.searchModel.updateFiltersFromQueryParams(queryParams);
        };
        this.getInputByFacetId = (facetId) => this.searchModel.getInputByFacetId(facetId);
        this.filterTarget = (target) => {
            this.searchModel.filterTarget(target);
        };
        this.updateInputsFromFilters = () => {
            this.searchModel.updateInputsFromFilters();
        };
    }
    transform(data) {
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
        }
        const id = this.searchModel.getId();
        const fields = this.searchModel.getFields();
        const groups = [];
        fields.forEach((fieldConfig, fieldIndex) => {
            const groupId = `group-${id}-${fieldIndex}`;
            // header config
            const header = this._headerConfig(fieldConfig.header, groupId);
            // inputs config
            const sections = [];
            this.searchModel.getInputs()
                .filter((input) => input.getSectionIndex() === fieldIndex)
                .map((input) => {
                input.update();
                return {
                    facetId: input.getFacetId(),
                    type: input.getType(),
                    output: input.getOutput(),
                };
            })
                .forEach(({ type, output, facetId }) => {
                sections.push({
                    classes: this._getSectionClasses(type),
                    inputs: Array.isArray(output) ? output : [output],
                    _meta: {
                        facetId,
                    },
                });
            });
            groups.push({
                header,
                facet: { sections },
                classes: `n7-facets-wrapper__${groupId}`,
                isOpen: true,
                _meta: {
                    groupId,
                },
            });
        });
        return {
            groups,
            classes: `n7-facets-wrapper__${this.searchModel.getId()}`,
        };
    }
    toggleGroup({ eventPayload }) {
        this.output.groups.forEach((group) => {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        });
    }
    onFacetChange({ eventPayload }) {
        const { facetId, source, trigger } = eventPayload.inputPayload;
        const filter = this.searchModel.getFiltersByFacetId(facetId)[0] || { value: null };
        const filterValue = filter.value;
        let remove = false;
        let value = eventPayload.inputPayload.value || eventPayload.value;
        // normalize
        value = `${value}`;
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
    }
    updateFilteredTarget(target) {
        const input = this.searchModel.getInputByFacetId(target);
        this.output.groups
            .map((group) => group.facet)
            .map((facet) => facet.sections)
            .forEach((sections) => {
            sections.forEach((section) => {
                if (section._meta.facetId === target) {
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            });
        });
    }
    updateInputLinks() {
        const linksFacetIds = this.searchModel.getInputs()
            .filter((input) => input.getType() === 'link')
            .map((input) => input.getFacetId());
        this.output.groups
            .map((group) => group.facet)
            .map((facet) => facet.sections)
            .forEach((sections) => {
            sections.forEach((section) => {
                if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                    const input = this.searchModel.getInputByFacetId(section._meta.facetId);
                    input.update();
                    const inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            });
        });
    }
    _getSectionClasses(type) {
        const classesMap = {
            text: 'text',
            checkbox: 'checkboxes',
            link: 'links',
            select: 'select',
        };
        return `n7-facet__section-input-${classesMap[type]}`;
    }
    _headerConfig(header, groupId) {
        return header ? {
            text: header.label,
            iconRight: HEADER_ICON_OPEN,
            classes: header.classes,
            payload: {
                source: 'group-header',
                id: `${groupId}-header`,
                groupId,
            },
            _meta: {
                id: `${groupId}-header`,
            },
        } : null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztBQUM5QyxNQUFNLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO0FBR2hELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBZ0lTLHFCQUFnQixHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3RCx5QkFBb0IsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRixpQ0FBNEIsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFBO1FBRU0sc0JBQWlCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0UsaUJBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQTtRQUVNLDRCQUF1QixHQUFHLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDN0MsQ0FBQyxDQUFBO0lBNEJILENBQUM7SUF6S1csU0FBUyxDQUFDLElBQUk7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QUFTO2FBQ3hCO1NBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSAnLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5jb25zdCBIRUFERVJfSUNPTl9PUEVOID0gJ243LWljb24tYW5nbGUtZG93bic7XG5jb25zdCBIRUFERVJfSUNPTl9DTE9TRSA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcblxuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaE1vZGVsKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsID0gZGF0YS5zZWFyY2hNb2RlbDtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKTtcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpZWxkcygpO1xuXG4gICAgY29uc3QgZ3JvdXBzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGRDb25maWcsIGZpZWxkSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBgZ3JvdXAtJHtpZH0tJHtmaWVsZEluZGV4fWA7XG5cbiAgICAgIC8vIGhlYWRlciBjb25maWdcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuX2hlYWRlckNvbmZpZyhmaWVsZENvbmZpZy5oZWFkZXIsIGdyb3VwSWQpO1xuXG4gICAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0U2VjdGlvbkluZGV4KCkgPT09IGZpZWxkSW5kZXgpXG4gICAgICAgIC5tYXAoKGlucHV0KSA9PiB7XG4gICAgICAgICAgaW5wdXQudXBkYXRlKCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmdldEZhY2V0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6IGlucHV0LmdldFR5cGUoKSxcbiAgICAgICAgICAgIG91dHB1dDogaW5wdXQuZ2V0T3V0cHV0KCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goKHsgdHlwZSwgb3V0cHV0LCBmYWNldElkIH0pID0+IHtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIGNsYXNzZXM6IHRoaXMuX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpLFxuICAgICAgICAgICAgaW5wdXRzOiBBcnJheS5pc0FycmF5KG91dHB1dCkgPyBvdXRwdXQgOiBbb3V0cHV0XSxcbiAgICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGZhY2V0OiB7IHNlY3Rpb25zIH0sXG4gICAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHtncm91cElkfWAsXG4gICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICBncm91cElkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXBzLFxuICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke3RoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKX1gLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlR3JvdXAoeyBldmVudFBheWxvYWQgfSkge1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgaWYgKGdyb3VwLl9tZXRhLmdyb3VwSWQgPT09IGV2ZW50UGF5bG9hZC5ncm91cElkKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9ICFncm91cC5pc09wZW47XG4gICAgICAgIGdyb3VwLmhlYWRlci5pY29uUmlnaHQgPSBncm91cC5pc09wZW4gPyBIRUFERVJfSUNPTl9PUEVOIDogSEVBREVSX0lDT05fQ0xPU0U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25GYWNldENoYW5nZSh7IGV2ZW50UGF5bG9hZCB9KSB7XG4gICAgY29uc3QgeyBmYWNldElkLCBzb3VyY2UsIHRyaWdnZXIgfSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpWzBdIHx8IHsgdmFsdWU6IG51bGwgfTtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGZpbHRlci52YWx1ZTtcblxuICAgIGxldCByZW1vdmUgPSBmYWxzZTtcbiAgICBsZXQgdmFsdWU6IGFueSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQudmFsdWUgfHwgZXZlbnRQYXlsb2FkLnZhbHVlO1xuXG4gICAgLy8gbm9ybWFsaXplXG4gICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuXG4gICAgLy8gcmVtb3ZlIGNvbnRyb2xcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkpIHtcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGlucHV0IHRleHQgY29udHJvbFxuICAgIC8vIFRPRE86IGdlc3RpcmUgaSBjYXNpIGVudGVyIC8gaWNvbiBjbGljayBuZWwgaW5wdXQgdGV4dFxuICAgIGlmIChzb3VyY2UgPT09ICdpbnB1dC10ZXh0JyAmJiBbJ2VudGVyJywgJ2ljb24nXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcCgoZ3JvdXApID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcCgoZmFjZXQpID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgICBpZiAoc2VjdGlvbi5fbWV0YS5mYWNldElkID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dExpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzRmFjZXRJZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0VHlwZSgpID09PSAnbGluaycpXG4gICAgICAubWFwKChpbnB1dCkgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpKTtcblxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcCgoZ3JvdXApID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcCgoZmFjZXQpID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgICBpZiAobGlua3NGYWNldElkcy5pbmRleE9mKHNlY3Rpb24uX21ldGEuZmFjZXRJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoc2VjdGlvbi5fbWV0YS5mYWNldElkKTtcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMgPSAoKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMgPSAoZmlsdGVycykgPT4gdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKTtcblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyA9IChxdWVyeVBhcmFtcykgPT4ge1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQgPSAoZmFjZXRJZCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKTtcblxuICBwdWJsaWMgZmlsdGVyVGFyZ2V0ID0gKHRhcmdldCkgPT4ge1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U2VjdGlvbkNsYXNzZXModHlwZSkge1xuICAgIGNvbnN0IGNsYXNzZXNNYXAgPSB7XG4gICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICBjaGVja2JveDogJ2NoZWNrYm94ZXMnLFxuICAgICAgbGluazogJ2xpbmtzJyxcbiAgICAgIHNlbGVjdDogJ3NlbGVjdCcsXG4gICAgfTtcblxuICAgIHJldHVybiBgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtJHtjbGFzc2VzTWFwW3R5cGVdfWA7XG4gIH1cblxuICBwcml2YXRlIF9oZWFkZXJDb25maWcoaGVhZGVyLCBncm91cElkKSB7XG4gICAgcmV0dXJuIGhlYWRlciA/IHtcbiAgICAgIHRleHQ6IGhlYWRlci5sYWJlbCxcbiAgICAgIGljb25SaWdodDogSEVBREVSX0lDT05fT1BFTixcbiAgICAgIGNsYXNzZXM6IGhlYWRlci5jbGFzc2VzLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzb3VyY2U6ICdncm91cC1oZWFkZXInLFxuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcbiAgICAgICAgZ3JvdXBJZCxcbiAgICAgIH0sXG4gICAgICBfbWV0YToge1xuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcbiAgICAgIH0sXG4gICAgfSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==