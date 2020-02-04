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
        function (queryParams) { return _this.searchModel.updateFiltersFromQueryParams(queryParams); });
        _this.getInputByFacetId = (/**
         * @param {?} facetId
         * @return {?}
         */
        function (facetId) { return _this.searchModel.getInputByFacetId(facetId); });
        _this.filterTarget = (/**
         * @param {?} target
         * @return {?}
         */
        function (target) { return _this.searchModel.filterTarget(target); });
        _this.updateInputsFromFilters = (/**
         * @return {?}
         */
        function () { return _this.searchModel.updateInputsFromFilters(); });
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
                    output: input.getOutput()
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
                        facetId: facetId
                    }
                });
            }));
            groups.push({
                header: header,
                facet: { sections: sections },
                classes: "n7-facets-wrapper__" + groupId,
                isOpen: true,
                _meta: {
                    groupId: groupId
                }
            });
        }));
        return {
            groups: groups,
            classes: "n7-facets-wrapper__" + this.searchModel.getId()
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
        var filter = this.searchModel.getFiltersByFacetId(facetId)[0] || {};
        /** @type {?} */
        var filterValue = filter['value'];
        /** @type {?} */
        var remove = false;
        /** @type {?} */
        var value = eventPayload.inputPayload.value || eventPayload.value;
        // normalize
        value = '' + value;
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
            .map((/**
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
            .map((/**
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
            'text': 'text',
            'checkbox': 'checkboxes',
            'link': 'links',
            'select': 'select'
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
                groupId: groupId
            },
            _meta: {
                id: groupId + "-header"
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFHekMsZ0JBQWdCLEdBQUcsb0JBQW9COztJQUN2QyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFFL0M7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUFrS0M7UUFqQ1Esc0JBQWdCOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFuQyxDQUFtQyxFQUFDO1FBQzdELDBCQUFvQjs7OztRQUFHLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBOUMsQ0FBOEMsRUFBQztRQUNuRixrQ0FBNEI7Ozs7UUFBRyxVQUFDLFdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLEVBQTFELENBQTBELEVBQUM7UUFDM0csdUJBQWlCOzs7O1FBQUcsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUEzQyxDQUEyQyxFQUFDO1FBQzdFLGtCQUFZOzs7O1FBQUcsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBckMsQ0FBcUMsRUFBQztRQUNqRSw2QkFBdUI7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLEVBQTFDLENBQTBDLEVBQUM7O0lBNEJwRixDQUFDOzs7Ozs7SUEvSlcsbUNBQVM7Ozs7O0lBQW5C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SCxzQkFBQztBQUFELENBQUMsQUFsS0QsQ0FBcUMsVUFBVSxHQWtLOUM7Ozs7SUFqS0Msc0NBQWdDOztJQWdJaEMsMkNBQW9FOztJQUNwRSwrQ0FBMEY7O0lBQzFGLHVEQUFrSDs7SUFDbEgsNENBQW9GOztJQUNwRix1Q0FBd0U7O0lBQ3hFLGtEQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCwgU2VhcmNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuY29uc3QgSEVBREVSX0lDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xuY29uc3QgSEVBREVSX0lDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1yaWdodCc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcblxuICAgIGlmKCF0aGlzLnNlYXJjaE1vZGVsKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsID0gZGF0YS5zZWFyY2hNb2RlbDtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKSxcbiAgICAgIGZpZWxkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmllbGRzKCk7XG5cbiAgICBsZXQgZ3JvdXBzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGRDb25maWcsIGZpZWxkSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBgZ3JvdXAtJHtpZH0tJHtmaWVsZEluZGV4fWA7XG5cbiAgICAgIC8vIGhlYWRlciBjb25maWdcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuX2hlYWRlckNvbmZpZyhmaWVsZENvbmZpZy5oZWFkZXIsIGdyb3VwSWQpO1xuXG4gICAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgICBsZXQgc2VjdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRzKClcbiAgICAgICAgLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5nZXRTZWN0aW9uSW5kZXgoKSA9PT0gZmllbGRJbmRleClcbiAgICAgICAgLm1hcChpbnB1dCA9PiB7XG4gICAgICAgICAgaW5wdXQudXBkYXRlKCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmdldEZhY2V0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6IGlucHV0LmdldFR5cGUoKSxcbiAgICAgICAgICAgIG91dHB1dDogaW5wdXQuZ2V0T3V0cHV0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKCh7IHR5cGUsIG91dHB1dCwgZmFjZXRJZCB9KSA9PiB7XG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBjbGFzc2VzOiB0aGlzLl9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKSxcbiAgICAgICAgICAgIGlucHV0czogQXJyYXkuaXNBcnJheShvdXRwdXQpID8gb3V0cHV0IDogW291dHB1dF0sXG4gICAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgICBmYWNldElkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBncm91cHMucHVzaCh7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgZmFjZXQ6IHsgc2VjdGlvbnMgfSxcbiAgICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke2dyb3VwSWR9YCxcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICBfbWV0YToge1xuICAgICAgICAgIGdyb3VwSWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBncm91cHMsXG4gICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7dGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpfWBcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUdyb3VwKHsgZXZlbnRQYXlsb2FkIH0pe1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGlmKGdyb3VwLl9tZXRhLmdyb3VwSWQgPT09IGV2ZW50UGF5bG9hZC5ncm91cElkKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9ICFncm91cC5pc09wZW47XG4gICAgICAgIGdyb3VwLmhlYWRlci5pY29uUmlnaHQgPSBncm91cC5pc09wZW4gPyBIRUFERVJfSUNPTl9PUEVOIDogSEVBREVSX0lDT05fQ0xPU0U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25GYWNldENoYW5nZSh7IGV2ZW50UGF5bG9hZCB9KXtcbiAgICBjb25zdCB7IGZhY2V0SWQsIHNvdXJjZSwgdHJpZ2dlciB9ID0gZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCxcbiAgICAgIGZpbHRlciA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZChmYWNldElkKVswXSB8fCB7fSxcbiAgICAgIGZpbHRlclZhbHVlID0gZmlsdGVyWyd2YWx1ZSddO1xuXG4gICAgbGV0IHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgdmFsdWU6IGFueSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQudmFsdWUgfHwgZXZlbnRQYXlsb2FkLnZhbHVlO1xuXG4gICAgLy8gbm9ybWFsaXplXG4gICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuXG4gICAgLy8gcmVtb3ZlIGNvbnRyb2xcbiAgICBpZihBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSl7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBpbnB1dCB0ZXh0IGNvbnRyb2xcbiAgICAvLyBUT0RPOiBnZXN0aXJlIGkgY2FzaSBlbnRlciAvIGljb24gY2xpY2sgbmVsIGlucHV0IHRleHRcbiAgICBpZihzb3VyY2UgPT09ICdpbnB1dC10ZXh0JyAmJiBbJ2VudGVyJywgJ2ljb24nXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCl7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKHRhcmdldCk7XG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXG4gICAgICAubWFwKGdyb3VwID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcChmYWNldCA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5tYXAoc2VjdGlvbnMgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIGlmKHNlY3Rpb24uX21ldGEuZmFjZXRJZCA9PT0gdGFyZ2V0KXtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dExpbmtzKCl7XG4gICAgY29uc3QgbGlua3NGYWNldElkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRzKClcbiAgICAgIC5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0VHlwZSgpID09PSAnbGluaycpXG4gICAgICAubWFwKGlucHV0ID0+IGlucHV0LmdldEZhY2V0SWQoKSk7XG5cbiAgICB0aGlzLm91dHB1dC5ncm91cHNcbiAgICAgIC5tYXAoZ3JvdXAgPT4gZ3JvdXAuZmFjZXQpXG4gICAgICAubWFwKGZhY2V0ID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLm1hcChzZWN0aW9ucyA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgaWYobGlua3NGYWNldElkcy5pbmRleE9mKHNlY3Rpb24uX21ldGEuZmFjZXRJZCkgIT09IC0xKXtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChzZWN0aW9uLl9tZXRhLmZhY2V0SWQpO1xuICAgICAgICAgICAgaW5wdXQudXBkYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVxdWVzdFBhcmFtcyA9ICgpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMgPSAoZmlsdGVycykgPT4gdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKTtcbiAgcHVibGljIHVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMgPSAocXVlcnlQYXJhbXMpID0+IHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gIHB1YmxpYyBnZXRJbnB1dEJ5RmFjZXRJZCA9IChmYWNldElkKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpO1xuICBwdWJsaWMgZmlsdGVyVGFyZ2V0ID0gKHRhcmdldCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJUYXJnZXQodGFyZ2V0KTtcbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzID0gKCkgPT4gdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuXG4gIHByaXZhdGUgX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpe1xuICAgIGNvbnN0IGNsYXNzZXNNYXAgPSB7XG4gICAgICAndGV4dCc6ICd0ZXh0JyxcbiAgICAgICdjaGVja2JveCc6ICdjaGVja2JveGVzJyxcbiAgICAgICdsaW5rJzogJ2xpbmtzJyxcbiAgICAgICdzZWxlY3QnOiAnc2VsZWN0J1xuICAgIH07XG5cbiAgICByZXR1cm4gYG43LWZhY2V0X19zZWN0aW9uLWlucHV0LSR7Y2xhc3Nlc01hcFt0eXBlXX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGVhZGVyQ29uZmlnKGhlYWRlciwgZ3JvdXBJZCl7XG4gICAgcmV0dXJuIGhlYWRlciA/IHtcbiAgICAgIHRleHQ6IGhlYWRlci5sYWJlbCxcbiAgICAgIGljb25SaWdodDogSEVBREVSX0lDT05fT1BFTixcbiAgICAgIGNsYXNzZXM6IGhlYWRlci5jbGFzc2VzLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzb3VyY2U6ICdncm91cC1oZWFkZXInLFxuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcbiAgICAgICAgZ3JvdXBJZDogZ3JvdXBJZFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7XG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgXG4gICAgICB9XG4gICAgfTogbnVsbDtcbiAgfVxufSJdfQ==