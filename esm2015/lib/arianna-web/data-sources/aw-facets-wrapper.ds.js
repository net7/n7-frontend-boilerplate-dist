import { DataSource } from '@n7-frontend/core';
import entityLinksHelper from '../search/entity-links.helper';
const HEADER_ICON_OPEN = 'n7-icon-angle-down';
const HEADER_ICON_CLOSE = 'n7-icon-angle-right';
export class AwFacetsWrapperDS extends DataSource {
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
            entityLinksHelper.initPagination(this.searchModel);
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
        if (!this.searchModel) {
            return;
        }
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
        if (!this.searchModel) {
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2F3LWZhY2V0cy13cmFwcGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxPQUFPLGlCQUFpQixNQUFNLCtCQUErQixDQUFDO0FBRTlELE1BQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7QUFDOUMsTUFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQztBQUVoRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUFqRDs7UUF1SVMscUJBQWdCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdELHlCQUFvQixHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5GLGlDQUE0QixHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUE7UUFFTSxzQkFBaUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3RSxpQkFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFBO1FBRU0sNEJBQXVCLEdBQUcsR0FBRyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztR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RUFBRSxNQUFNLENBQUMsS0FBSztZQUNsQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLEVBQUUsRUFBRSxHQUFHLE9BQU8sU0FBUztnQkFDdkIsT0FBTzthQUNSO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxHQUFHLE9BQU8sU0FBUzthQUN4QjtTQUNGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEF3U2VhcmNoTW9kZWwgfSBmcm9tICcuLi9zZWFyY2gvYXctc2VhcmNoLm1vZGVsJztcclxuaW1wb3J0IGVudGl0eUxpbmtzSGVscGVyIGZyb20gJy4uL3NlYXJjaC9lbnRpdHktbGlua3MuaGVscGVyJztcclxuXHJcbmNvbnN0IEhFQURFUl9JQ09OX09QRU4gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcclxuY29uc3QgSEVBREVSX0lDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgc2VhcmNoTW9kZWw6IEF3U2VhcmNoTW9kZWw7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgaWYgKCF0aGlzLnNlYXJjaE1vZGVsKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwgPSBkYXRhLnNlYXJjaE1vZGVsO1xyXG4gICAgICBlbnRpdHlMaW5rc0hlbHBlci5pbml0UGFnaW5hdGlvbih0aGlzLnNlYXJjaE1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKTtcclxuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmllbGRzKCk7XHJcblxyXG4gICAgY29uc3QgZ3JvdXBzID0gW107XHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkQ29uZmlnLCBmaWVsZEluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBgZ3JvdXAtJHtpZH0tJHtmaWVsZEluZGV4fWA7XHJcblxyXG4gICAgICAvLyBoZWFkZXIgY29uZmlnXHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuX2hlYWRlckNvbmZpZyhmaWVsZENvbmZpZy5oZWFkZXIsIGdyb3VwSWQpO1xyXG5cclxuICAgICAgLy8gaW5wdXRzIGNvbmZpZ1xyXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXHJcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFNlY3Rpb25JbmRleCgpID09PSBmaWVsZEluZGV4KVxyXG4gICAgICAgIC5tYXAoKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmdldEZhY2V0SWQoKSxcclxuICAgICAgICAgICAgdHlwZTogaW5wdXQuZ2V0VHlwZSgpLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IGlucHV0LmdldE91dHB1dCgpLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mb3JFYWNoKCh7IHR5cGUsIG91dHB1dCwgZmFjZXRJZCB9KSA9PiB7XHJcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgY2xhc3NlczogdGhpcy5fZ2V0U2VjdGlvbkNsYXNzZXModHlwZSksXHJcbiAgICAgICAgICAgIGlucHV0czogQXJyYXkuaXNBcnJheShvdXRwdXQpID8gb3V0cHV0IDogW291dHB1dF0sXHJcbiAgICAgICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICBmYWNldDogeyBzZWN0aW9ucyB9LFxyXG4gICAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHtncm91cElkfWAsXHJcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICBncm91cElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JvdXBzLFxyXG4gICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7dGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpfWAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUdyb3VwKHsgZXZlbnRQYXlsb2FkIH0pIHtcclxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICBpZiAoZ3JvdXAuX21ldGEuZ3JvdXBJZCA9PT0gZXZlbnRQYXlsb2FkLmdyb3VwSWQpIHtcclxuICAgICAgICBncm91cC5pc09wZW4gPSAhZ3JvdXAuaXNPcGVuO1xyXG4gICAgICAgIGdyb3VwLmhlYWRlci5pY29uUmlnaHQgPSBncm91cC5pc09wZW4gPyBIRUFERVJfSUNPTl9PUEVOIDogSEVBREVSX0lDT05fQ0xPU0U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmFjZXRDaGFuZ2UoeyBldmVudFBheWxvYWQgfSkge1xyXG4gICAgY29uc3QgeyBmYWNldElkLCBzb3VyY2UsIHRyaWdnZXIgfSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZClbMF0gfHwgeyB2YWx1ZTogbnVsbCB9O1xyXG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBmaWx0ZXIudmFsdWU7XHJcblxyXG4gICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xyXG4gICAgbGV0IHZhbHVlOiBhbnkgPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLnZhbHVlIHx8IGV2ZW50UGF5bG9hZC52YWx1ZTtcclxuXHJcbiAgICAvLyBub3JtYWxpemVcclxuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcclxuXHJcbiAgICAvLyByZW1vdmUgY29udHJvbFxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKSB7XHJcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlID09PSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnB1dCB0ZXh0IGNvbnRyb2xcclxuICAgIC8vIFRPRE86IGdlc3RpcmUgaSBjYXNpIGVudGVyIC8gaWNvbiBjbGljayBuZWwgaW5wdXQgdGV4dFxyXG4gICAgaWYgKHNvdXJjZSA9PT0gJ2lucHV0LXRleHQnICYmIFsnZW50ZXInLCAnaWNvbiddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZSk7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgICBpZiAoIXRoaXMuc2VhcmNoTW9kZWwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHRhcmdldCk7XHJcbiAgICB0aGlzLm91dHB1dC5ncm91cHNcclxuICAgICAgLm1hcCgoZ3JvdXApID0+IGdyb3VwLmZhY2V0KVxyXG4gICAgICAubWFwKChmYWNldCkgPT4gZmFjZXQuc2VjdGlvbnMpXHJcbiAgICAgIC5mb3JFYWNoKChzZWN0aW9ucykgPT4ge1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgIGlmIChzZWN0aW9uLl9tZXRhLmZhY2V0SWQgPT09IHRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVJbnB1dExpbmtzKCkge1xyXG4gICAgaWYgKCF0aGlzLnNlYXJjaE1vZGVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpbmtzRmFjZXRJZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXHJcbiAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC5nZXRUeXBlKCkgPT09ICdsaW5rJylcclxuICAgICAgLm1hcCgoaW5wdXQpID0+IGlucHV0LmdldEZhY2V0SWQoKSk7XHJcblxyXG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXHJcbiAgICAgIC5tYXAoKGdyb3VwKSA9PiBncm91cC5mYWNldClcclxuICAgICAgLm1hcCgoZmFjZXQpID0+IGZhY2V0LnNlY3Rpb25zKVxyXG4gICAgICAuZm9yRWFjaCgoc2VjdGlvbnMpID0+IHtcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBpZiAobGlua3NGYWNldElkcy5pbmRleE9mKHNlY3Rpb24uX21ldGEuZmFjZXRJZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChzZWN0aW9uLl9tZXRhLmZhY2V0SWQpO1xyXG4gICAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcyA9ICgpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xyXG5cclxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMgPSAoZmlsdGVycykgPT4gdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMgPSAocXVlcnlQYXJhbXMpID0+IHtcclxuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQgPSAoZmFjZXRJZCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKTtcclxuXHJcbiAgcHVibGljIGZpbHRlclRhcmdldCA9ICh0YXJnZXQpID0+IHtcclxuICAgIHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzTWFwID0ge1xyXG4gICAgICB0ZXh0OiAndGV4dCcsXHJcbiAgICAgIGNoZWNrYm94OiAnY2hlY2tib3hlcycsXHJcbiAgICAgIGxpbms6ICdsaW5rcycsXHJcbiAgICAgIHNlbGVjdDogJ3NlbGVjdCcsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtJHtjbGFzc2VzTWFwW3R5cGVdfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oZWFkZXJDb25maWcoaGVhZGVyLCBncm91cElkKSB7XHJcbiAgICByZXR1cm4gaGVhZGVyID8ge1xyXG4gICAgICB0ZXh0OiBoZWFkZXIubGFiZWwsXHJcbiAgICAgIGljb25SaWdodDogSEVBREVSX0lDT05fT1BFTixcclxuICAgICAgY2xhc3NlczogaGVhZGVyLmNsYXNzZXMsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBzb3VyY2U6ICdncm91cC1oZWFkZXInLFxyXG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxyXG4gICAgICAgIGdyb3VwSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXHJcbiAgICAgIH0sXHJcbiAgICB9IDogbnVsbDtcclxuICB9XHJcbn1cclxuIl19