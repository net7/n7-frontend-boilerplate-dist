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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFHekMsZ0JBQWdCLEdBQUcsb0JBQW9COztJQUN2QyxpQkFBaUIsR0FBRyxxQkFBcUI7QUFHL0M7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUE0S0M7UUE1Q1Esc0JBQWdCOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFuQyxDQUFtQyxFQUFDO1FBRTdELDBCQUFvQjs7OztRQUFHLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBOUMsQ0FBOEMsRUFBQztRQUVuRixrQ0FBNEI7Ozs7UUFBRyxVQUFDLFdBQVc7WUFDaEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQUE7UUFFTSx1QkFBaUI7Ozs7UUFBRyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQTNDLENBQTJDLEVBQUM7UUFFN0Usa0JBQVk7Ozs7UUFBRyxVQUFDLE1BQU07WUFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFBO1FBRU0sNkJBQXVCOzs7UUFBRztZQUMvQixLQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDN0MsQ0FBQyxFQUFBOztJQTRCSCxDQUFDOzs7Ozs7SUF6S1csbUNBQVM7Ozs7O0lBQW5CLFVB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O0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBNUtELENBQXFDLFVBQVUsR0E0SzlDOzs7O0lBM0tDLHNDQUFnQzs7SUErSGhDLDJDQUFvRTs7SUFFcEUsK0NBQTBGOztJQUUxRix1REFFQzs7SUFFRCw0Q0FBb0Y7O0lBRXBGLHVDQUVDOztJQUVELGtEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSAnLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5jb25zdCBIRUFERVJfSUNPTl9PUEVOID0gJ243LWljb24tYW5nbGUtZG93bic7XG5jb25zdCBIRUFERVJfSUNPTl9DTE9TRSA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcblxuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaE1vZGVsKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsID0gZGF0YS5zZWFyY2hNb2RlbDtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKTtcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpZWxkcygpO1xuXG4gICAgY29uc3QgZ3JvdXBzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGRDb25maWcsIGZpZWxkSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBgZ3JvdXAtJHtpZH0tJHtmaWVsZEluZGV4fWA7XG5cbiAgICAgIC8vIGhlYWRlciBjb25maWdcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuX2hlYWRlckNvbmZpZyhmaWVsZENvbmZpZy5oZWFkZXIsIGdyb3VwSWQpO1xuXG4gICAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0U2VjdGlvbkluZGV4KCkgPT09IGZpZWxkSW5kZXgpXG4gICAgICAgIC5tYXAoKGlucHV0KSA9PiB7XG4gICAgICAgICAgaW5wdXQudXBkYXRlKCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmdldEZhY2V0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6IGlucHV0LmdldFR5cGUoKSxcbiAgICAgICAgICAgIG91dHB1dDogaW5wdXQuZ2V0T3V0cHV0KCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goKHsgdHlwZSwgb3V0cHV0LCBmYWNldElkIH0pID0+IHtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIGNsYXNzZXM6IHRoaXMuX2dldFNlY3Rpb25DbGFzc2VzKHR5cGUpLFxuICAgICAgICAgICAgaW5wdXRzOiBBcnJheS5pc0FycmF5KG91dHB1dCkgPyBvdXRwdXQgOiBbb3V0cHV0XSxcbiAgICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGZhY2V0OiB7IHNlY3Rpb25zIH0sXG4gICAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHtncm91cElkfWAsXG4gICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICBncm91cElkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXBzLFxuICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke3RoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKX1gLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlR3JvdXAoeyBldmVudFBheWxvYWQgfSkge1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgaWYgKGdyb3VwLl9tZXRhLmdyb3VwSWQgPT09IGV2ZW50UGF5bG9hZC5ncm91cElkKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9ICFncm91cC5pc09wZW47XG4gICAgICAgIGdyb3VwLmhlYWRlci5pY29uUmlnaHQgPSBncm91cC5pc09wZW4gPyBIRUFERVJfSUNPTl9PUEVOIDogSEVBREVSX0lDT05fQ0xPU0U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25GYWNldENoYW5nZSh7IGV2ZW50UGF5bG9hZCB9KSB7XG4gICAgY29uc3QgeyBmYWNldElkLCBzb3VyY2UsIHRyaWdnZXIgfSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKGZhY2V0SWQpWzBdIHx8IHsgdmFsdWU6IG51bGwgfTtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGZpbHRlci52YWx1ZTtcblxuICAgIGxldCByZW1vdmUgPSBmYWxzZTtcbiAgICBsZXQgdmFsdWU6IGFueSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQudmFsdWUgfHwgZXZlbnRQYXlsb2FkLnZhbHVlO1xuXG4gICAgLy8gbm9ybWFsaXplXG4gICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuXG4gICAgLy8gcmVtb3ZlIGNvbnRyb2xcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkpIHtcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGlucHV0IHRleHQgY29udHJvbFxuICAgIC8vIFRPRE86IGdlc3RpcmUgaSBjYXNpIGVudGVyIC8gaWNvbiBjbGljayBuZWwgaW5wdXQgdGV4dFxuICAgIGlmIChzb3VyY2UgPT09ICdpbnB1dC10ZXh0JyAmJiBbJ2VudGVyJywgJ2ljb24nXS5pbmRleE9mKHRyaWdnZXIpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCkge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcCgoZ3JvdXApID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcCgoZmFjZXQpID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgICBpZiAoc2VjdGlvbi5fbWV0YS5mYWNldElkID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XG4gICAgICAgICAgICBzZWN0aW9uLmlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRPdXRwdXQpID8gaW5wdXRPdXRwdXQgOiBbaW5wdXRPdXRwdXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbnB1dExpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzRmFjZXRJZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0VHlwZSgpID09PSAnbGluaycpXG4gICAgICAubWFwKChpbnB1dCkgPT4gaW5wdXQuZ2V0RmFjZXRJZCgpKTtcblxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcCgoZ3JvdXApID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcCgoZmFjZXQpID0+IGZhY2V0LnNlY3Rpb25zKVxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgICBpZiAobGlua3NGYWNldElkcy5pbmRleE9mKHNlY3Rpb24uX21ldGEuZmFjZXRJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoc2VjdGlvbi5fbWV0YS5mYWNldElkKTtcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMgPSAoKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcblxuICBwdWJsaWMgZmlsdGVyc0FzUXVlcnlQYXJhbXMgPSAoZmlsdGVycykgPT4gdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhmaWx0ZXJzKTtcblxuICBwdWJsaWMgdXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyA9IChxdWVyeVBhcmFtcykgPT4ge1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQgPSAoZmFjZXRJZCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKTtcblxuICBwdWJsaWMgZmlsdGVyVGFyZ2V0ID0gKHRhcmdldCkgPT4ge1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U2VjdGlvbkNsYXNzZXModHlwZSkge1xuICAgIGNvbnN0IGNsYXNzZXNNYXAgPSB7XG4gICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICBjaGVja2JveDogJ2NoZWNrYm94ZXMnLFxuICAgICAgbGluazogJ2xpbmtzJyxcbiAgICAgIHNlbGVjdDogJ3NlbGVjdCcsXG4gICAgfTtcblxuICAgIHJldHVybiBgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtJHtjbGFzc2VzTWFwW3R5cGVdfWA7XG4gIH1cblxuICBwcml2YXRlIF9oZWFkZXJDb25maWcoaGVhZGVyLCBncm91cElkKSB7XG4gICAgcmV0dXJuIGhlYWRlciA/IHtcbiAgICAgIHRleHQ6IGhlYWRlci5sYWJlbCxcbiAgICAgIGljb25SaWdodDogSEVBREVSX0lDT05fT1BFTixcbiAgICAgIGNsYXNzZXM6IGhlYWRlci5jbGFzc2VzLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzb3VyY2U6ICdncm91cC1oZWFkZXInLFxuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcbiAgICAgICAgZ3JvdXBJZCxcbiAgICAgIH0sXG4gICAgICBfbWV0YToge1xuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcbiAgICAgIH0sXG4gICAgfSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==