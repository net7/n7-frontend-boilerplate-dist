/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
var HEADER_ICON_OPEN = 'n7-icon-angle-down';
/** @type {?} */
var HEADER_ICON_CLOSE = 'n7-icon-angle-right';
var FacetsWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetsWrapperDS, _super);
    function FacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRequestParams = (/**
         * @return {?}
         */
        function () { return _this.searchModel.getRequestParams(); });
        _this.filtersAsQueryParams = (/**
         * @param {?} filters
         * @return {?}
         */
        function (filters) { return _this.searchModel.filtersAsQueryParams(filters); });
        _this.updateFiltersFromQueryParams = (/**
         * @param {?} queryParams
         * @return {?}
         */
        function (queryParams) {
            _this.searchModel.updateFiltersFromQueryParams(queryParams);
        });
        _this.getInputByFacetId = (/**
         * @param {?} facetId
         * @return {?}
         */
        function (facetId) { return _this.searchModel.getInputByFacetId(facetId); });
        _this.filterTarget = (/**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            _this.searchModel.filterTarget(target);
        });
        _this.updateInputsFromFilters = (/**
         * @return {?}
         */
        function () {
            _this.searchModel.updateInputsFromFilters();
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    FacetsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!this.searchModel) {
            this.searchModel = data.searchModel;
        }
        /** @type {?} */
        var id = this.searchModel.getId();
        /** @type {?} */
        var fields = this.searchModel.getFields();
        /** @type {?} */
        var groups = [];
        fields.forEach((/**
         * @param {?} fieldConfig
         * @param {?} fieldIndex
         * @return {?}
         */
        function (fieldConfig, fieldIndex) {
            /** @type {?} */
            var groupId = "group-" + id + "-" + fieldIndex;
            // header config
            /** @type {?} */
            var header = _this._headerConfig(fieldConfig.header, groupId);
            // inputs config
            /** @type {?} */
            var sections = [];
            _this.searchModel.getInputs()
                .filter((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return input.getSectionIndex() === fieldIndex; }))
                .map((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                input.update();
                return {
                    facetId: input.getFacetId(),
                    type: input.getType(),
                    output: input.getOutput(),
                };
            }))
                .forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, output = _a.output, facetId = _a.facetId;
                sections.push({
                    classes: _this._getSectionClasses(type),
                    inputs: Array.isArray(output) ? output : [output],
                    _meta: {
                        facetId: facetId,
                    },
                });
            }));
            groups.push({
                header: header,
                facet: { sections: sections },
                classes: "n7-facets-wrapper__" + groupId,
                isOpen: true,
                _meta: {
                    groupId: groupId,
                },
            });
        }));
        return {
            groups: groups,
            classes: "n7-facets-wrapper__" + this.searchModel.getId(),
        };
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    FacetsWrapperDS.prototype.toggleGroup = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var eventPayload = _a.eventPayload;
        this.output.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            if (group._meta.groupId === eventPayload.groupId) {
                group.isOpen = !group.isOpen;
                group.header.iconRight = group.isOpen ? HEADER_ICON_OPEN : HEADER_ICON_CLOSE;
            }
        }));
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    FacetsWrapperDS.prototype.onFacetChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var eventPayload = _a.eventPayload;
        var _b = eventPayload.inputPayload, facetId = _b.facetId, source = _b.source, trigger = _b.trigger;
        /** @type {?} */
        var filter = this.searchModel.getFiltersByFacetId(facetId)[0] || { value: null };
        /** @type {?} */
        var filterValue = filter.value;
        /** @type {?} */
        var remove = false;
        /** @type {?} */
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
    /**
     * @param {?} target
     * @return {?}
     */
    FacetsWrapperDS.prototype.updateFilteredTarget = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var input = this.searchModel.getInputByFacetId(target);
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        function (group) { return group.facet; }))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.sections; }))
            .forEach((/**
         * @param {?} sections
         * @return {?}
         */
        function (sections) {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                if (section._meta.facetId === target) {
                    /** @type {?} */
                    var inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    FacetsWrapperDS.prototype.updateInputLinks = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var linksFacetIds = this.searchModel.getInputs()
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getType() === 'link'; }))
            .map((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.getFacetId(); }));
        this.output.groups
            .map((/**
         * @param {?} group
         * @return {?}
         */
        function (group) { return group.facet; }))
            .map((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.sections; }))
            .forEach((/**
         * @param {?} sections
         * @return {?}
         */
        function (sections) {
            sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                if (linksFacetIds.indexOf(section._meta.facetId) !== -1) {
                    /** @type {?} */
                    var input = _this.searchModel.getInputByFacetId(section._meta.facetId);
                    input.update();
                    /** @type {?} */
                    var inputOutput = input.getOutput();
                    section.inputs = Array.isArray(inputOutput) ? inputOutput : [inputOutput];
                }
            }));
        }));
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    FacetsWrapperDS.prototype._getSectionClasses = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var classesMap = {
            text: 'text',
            checkbox: 'checkboxes',
            link: 'links',
            select: 'select',
        };
        return "n7-facet__section-input-" + classesMap[type];
    };
    /**
     * @private
     * @param {?} header
     * @param {?} groupId
     * @return {?}
     */
    FacetsWrapperDS.prototype._headerConfig = /**
     * @private
     * @param {?} header
     * @param {?} groupId
     * @return {?}
     */
    function (header, groupId) {
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
if (false) {
    /** @type {?} */
    FacetsWrapperDS.prototype.searchModel;
    /** @type {?} */
    FacetsWrapperDS.prototype.getRequestParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.filtersAsQueryParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.updateFiltersFromQueryParams;
    /** @type {?} */
    FacetsWrapperDS.prototype.getInputByFacetId;
    /** @type {?} */
    FacetsWrapperDS.prototype.filterTarget;
    /** @type {?} */
    FacetsWrapperDS.prototype.updateInputsFromFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFHekMsZ0JBQWdCLEdBQUcsb0JBQW9COztJQUN2QyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFFL0M7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUE0S0M7UUE1Q1Esc0JBQWdCOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFuQyxDQUFtQyxFQUFDO1FBRTdELDBCQUFvQjs7OztRQUFHLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBOUMsQ0FBOEMsRUFBQztRQUVuRixrQ0FBNEI7Ozs7UUFBRyxVQUFDLFdBQVc7WUFDaEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQUE7UUFFTSx1QkFBaUI7Ozs7UUFBRyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQTNDLENBQTJDLEVBQUM7UUFFN0Usa0JBQVk7Ozs7UUFBRyxVQUFDLE1BQU07WUFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFBO1FBRU0sNkJBQXVCOzs7UUFBRztZQUMvQixLQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDN0MsQ0FBQyxFQUFBOztJQTRCSCxDQUFDOzs7Ozs7SUF6S1csbUNBQVM7Ozs7O0lBQW5CLFVB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O0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBNUtELENBQXFDLFVBQVUsR0E0SzlDOzs7O0lBM0tDLHNDQUFnQzs7SUErSGhDLDJDQUFvRTs7SUFFcEUsK0NBQTBGOztJQUUxRix1REFFQzs7SUFFRCw0Q0FBb0Y7O0lBRXBGLHVDQUVDOztJQUVELGtEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSAnLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5jb25zdCBIRUFERVJfSUNPTl9PUEVOID0gJ243LWljb24tYW5nbGUtZG93bic7XG5jb25zdCBIRUFERVJfSUNPTl9DTE9TRSA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcblxuZXhwb3J0IGNsYXNzIEZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGlmICghdGhpcy5zZWFyY2hNb2RlbCkge1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbCA9IGRhdGEuc2VhcmNoTW9kZWw7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElkKCk7XG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRGaWVsZHMoKTtcblxuICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkQ29uZmlnLCBmaWVsZEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gYGdyb3VwLSR7aWR9LSR7ZmllbGRJbmRleH1gO1xuXG4gICAgICAvLyBoZWFkZXIgY29uZmlnXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLl9oZWFkZXJDb25maWcoZmllbGRDb25maWcuaGVhZGVyLCBncm91cElkKTtcblxuICAgICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRzKClcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFNlY3Rpb25JbmRleCgpID09PSBmaWVsZEluZGV4KVxuICAgICAgICAubWFwKChpbnB1dCkgPT4ge1xuICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYWNldElkOiBpbnB1dC5nZXRGYWNldElkKCksXG4gICAgICAgICAgICB0eXBlOiBpbnB1dC5nZXRUeXBlKCksXG4gICAgICAgICAgICBvdXRwdXQ6IGlucHV0LmdldE91dHB1dCgpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKCh7IHR5cGUsIG91dHB1dCwgZmFjZXRJZCB9KSA9PiB7XG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBjbGFzc2VzOiB0aGlzLl9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKSxcbiAgICAgICAgICAgIGlucHV0czogQXJyYXkuaXNBcnJheShvdXRwdXQpID8gb3V0cHV0IDogW291dHB1dF0sXG4gICAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgICBmYWNldElkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBmYWNldDogeyBzZWN0aW9ucyB9LFxuICAgICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7Z3JvdXBJZH1gLFxuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgZ3JvdXBJZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwcyxcbiAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHt0aGlzLnNlYXJjaE1vZGVsLmdldElkKCl9YCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUdyb3VwKHsgZXZlbnRQYXlsb2FkIH0pIHtcbiAgICB0aGlzLm91dHB1dC5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGlmIChncm91cC5fbWV0YS5ncm91cElkID09PSBldmVudFBheWxvYWQuZ3JvdXBJZCkge1xuICAgICAgICBncm91cC5pc09wZW4gPSAhZ3JvdXAuaXNPcGVuO1xuICAgICAgICBncm91cC5oZWFkZXIuaWNvblJpZ2h0ID0gZ3JvdXAuaXNPcGVuID8gSEVBREVSX0lDT05fT1BFTiA6IEhFQURFUl9JQ09OX0NMT1NFO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRmFjZXRDaGFuZ2UoeyBldmVudFBheWxvYWQgfSkge1xuICAgIGNvbnN0IHsgZmFjZXRJZCwgc291cmNlLCB0cmlnZ2VyIH0gPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkO1xuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKVswXSB8fCB7IHZhbHVlOiBudWxsIH07XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBmaWx0ZXIudmFsdWU7XG5cbiAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlOiBhbnkgPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLnZhbHVlIHx8IGV2ZW50UGF5bG9hZC52YWx1ZTtcblxuICAgIC8vIG5vcm1hbGl6ZVxuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcblxuICAgIC8vIHJlbW92ZSBjb250cm9sXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKSB7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBpbnB1dCB0ZXh0IGNvbnRyb2xcbiAgICAvLyBUT0RPOiBnZXN0aXJlIGkgY2FzaSBlbnRlciAvIGljb24gY2xpY2sgbmVsIGlucHV0IHRleHRcbiAgICBpZiAoc291cmNlID09PSAnaW5wdXQtdGV4dCcgJiYgWydlbnRlcicsICdpY29uJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTEpIHJldHVybjtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmUpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJlZFRhcmdldCh0YXJnZXQpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoKGdyb3VwKSA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5mb3JFYWNoKChzZWN0aW9ucykgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHNlY3Rpb24uX21ldGEuZmFjZXRJZCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rc0ZhY2V0SWRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxuICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFR5cGUoKSA9PT0gJ2xpbmsnKVxuICAgICAgLm1hcCgoaW5wdXQpID0+IGlucHV0LmdldEZhY2V0SWQoKSk7XG5cbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoKGdyb3VwKSA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5mb3JFYWNoKChzZWN0aW9ucykgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKGxpbmtzRmFjZXRJZHMuaW5kZXhPZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHNlY3Rpb24uX21ldGEuZmFjZXRJZCk7XG4gICAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1ZXN0UGFyYW1zID0gKCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG5cbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMgPSAocXVlcnlQYXJhbXMpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlGYWNldElkID0gKGZhY2V0SWQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XG5cbiAgcHVibGljIGZpbHRlclRhcmdldCA9ICh0YXJnZXQpID0+IHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpIHtcbiAgICBjb25zdCBjbGFzc2VzTWFwID0ge1xuICAgICAgdGV4dDogJ3RleHQnLFxuICAgICAgY2hlY2tib3g6ICdjaGVja2JveGVzJyxcbiAgICAgIGxpbms6ICdsaW5rcycsXG4gICAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIH07XG5cbiAgICByZXR1cm4gYG43LWZhY2V0X19zZWN0aW9uLWlucHV0LSR7Y2xhc3Nlc01hcFt0eXBlXX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGVhZGVyQ29uZmlnKGhlYWRlciwgZ3JvdXBJZCkge1xuICAgIHJldHVybiBoZWFkZXIgPyB7XG4gICAgICB0ZXh0OiBoZWFkZXIubGFiZWwsXG4gICAgICBpY29uUmlnaHQ6IEhFQURFUl9JQ09OX09QRU4sXG4gICAgICBjbGFzc2VzOiBoZWFkZXIuY2xhc3NlcyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc291cmNlOiAnZ3JvdXAtaGVhZGVyJyxcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXG4gICAgICAgIGdyb3VwSWQsXG4gICAgICB9LFxuICAgICAgX21ldGE6IHtcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXG4gICAgICB9LFxuICAgIH0gOiBudWxsO1xuICB9XG59XG4iXX0=