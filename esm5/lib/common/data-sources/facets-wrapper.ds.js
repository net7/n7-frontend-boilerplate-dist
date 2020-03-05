/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/facets-wrapper.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBR3pDLGdCQUFnQixHQUFHLG9CQUFvQjs7SUFDdkMsaUJBQWlCLEdBQUcscUJBQXFCO0FBRS9DO0lBQXFDLDJDQUFVO0lBQS9DO1FBQUEscUVBNEtDO1FBNUNRLHNCQUFnQjs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBbkMsQ0FBbUMsRUFBQztRQUU3RCwwQkFBb0I7Ozs7UUFBRyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDLEVBQUM7UUFFbkYsa0NBQTRCOzs7O1FBQUcsVUFBQyxXQUFXO1lBQ2hELEtBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFBO1FBRU0sdUJBQWlCOzs7O1FBQUcsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUEzQyxDQUEyQyxFQUFDO1FBRTdFLGtCQUFZOzs7O1FBQUcsVUFBQyxNQUFNO1lBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQTtRQUVNLDZCQUF1Qjs7O1FBQUc7WUFDL0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzdDLENBQUMsRUFBQTs7SUE0QkgsQ0FBQzs7Ozs7O0lBektXLG1DQUFTOzs7OztJQUFuQixV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QztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTVLRCxDQUFxQyxVQUFVLEdBNEs5Qzs7OztJQTNLQyxzQ0FBZ0M7O0lBK0hoQywyQ0FBb0U7O0lBRXBFLCtDQUEwRjs7SUFFMUYsdURBRUM7O0lBRUQsNENBQW9GOztJQUVwRix1Q0FFQzs7SUFFRCxrREFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSAnLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgSEVBREVSX0lDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLWRvd24nO1xyXG5jb25zdCBIRUFERVJfSUNPTl9DTE9TRSA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGlmICghdGhpcy5zZWFyY2hNb2RlbCkge1xyXG4gICAgICB0aGlzLnNlYXJjaE1vZGVsID0gZGF0YS5zZWFyY2hNb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpZCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKTtcclxuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0RmllbGRzKCk7XHJcblxyXG4gICAgY29uc3QgZ3JvdXBzID0gW107XHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkQ29uZmlnLCBmaWVsZEluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBgZ3JvdXAtJHtpZH0tJHtmaWVsZEluZGV4fWA7XHJcblxyXG4gICAgICAvLyBoZWFkZXIgY29uZmlnXHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuX2hlYWRlckNvbmZpZyhmaWVsZENvbmZpZy5oZWFkZXIsIGdyb3VwSWQpO1xyXG5cclxuICAgICAgLy8gaW5wdXRzIGNvbmZpZ1xyXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXHJcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LmdldFNlY3Rpb25JbmRleCgpID09PSBmaWVsZEluZGV4KVxyXG4gICAgICAgIC5tYXAoKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICBpbnB1dC51cGRhdGUoKTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZhY2V0SWQ6IGlucHV0LmdldEZhY2V0SWQoKSxcclxuICAgICAgICAgICAgdHlwZTogaW5wdXQuZ2V0VHlwZSgpLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IGlucHV0LmdldE91dHB1dCgpLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mb3JFYWNoKCh7IHR5cGUsIG91dHB1dCwgZmFjZXRJZCB9KSA9PiB7XHJcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgY2xhc3NlczogdGhpcy5fZ2V0U2VjdGlvbkNsYXNzZXModHlwZSksXHJcbiAgICAgICAgICAgIGlucHV0czogQXJyYXkuaXNBcnJheShvdXRwdXQpID8gb3V0cHV0IDogW291dHB1dF0sXHJcbiAgICAgICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICBmYWNldDogeyBzZWN0aW9ucyB9LFxyXG4gICAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHtncm91cElkfWAsXHJcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICBncm91cElkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JvdXBzLFxyXG4gICAgICBjbGFzc2VzOiBgbjctZmFjZXRzLXdyYXBwZXJfXyR7dGhpcy5zZWFyY2hNb2RlbC5nZXRJZCgpfWAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUdyb3VwKHsgZXZlbnRQYXlsb2FkIH0pIHtcclxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICBpZiAoZ3JvdXAuX21ldGEuZ3JvdXBJZCA9PT0gZXZlbnRQYXlsb2FkLmdyb3VwSWQpIHtcclxuICAgICAgICBncm91cC5pc09wZW4gPSAhZ3JvdXAuaXNPcGVuO1xyXG4gICAgICAgIGdyb3VwLmhlYWRlci5pY29uUmlnaHQgPSBncm91cC5pc09wZW4gPyBIRUFERVJfSUNPTl9PUEVOIDogSEVBREVSX0lDT05fQ0xPU0U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmFjZXRDaGFuZ2UoeyBldmVudFBheWxvYWQgfSkge1xyXG4gICAgY29uc3QgeyBmYWNldElkLCBzb3VyY2UsIHRyaWdnZXIgfSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZClbMF0gfHwgeyB2YWx1ZTogbnVsbCB9O1xyXG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBmaWx0ZXIudmFsdWU7XHJcblxyXG4gICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xyXG4gICAgbGV0IHZhbHVlOiBhbnkgPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLnZhbHVlIHx8IGV2ZW50UGF5bG9hZC52YWx1ZTtcclxuXHJcbiAgICAvLyBub3JtYWxpemVcclxuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcclxuXHJcbiAgICAvLyByZW1vdmUgY29udHJvbFxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKSB7XHJcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbW92ZSA9IGZpbHRlclZhbHVlID09PSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnB1dCB0ZXh0IGNvbnRyb2xcclxuICAgIC8vIFRPRE86IGdlc3RpcmUgaSBjYXNpIGVudGVyIC8gaWNvbiBjbGljayBuZWwgaW5wdXQgdGV4dFxyXG4gICAgaWYgKHNvdXJjZSA9PT0gJ2lucHV0LXRleHQnICYmIFsnZW50ZXInLCAnaWNvbiddLmluZGV4T2YodHJpZ2dlcikgIT09IC0xKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXIoZmFjZXRJZCwgdmFsdWUsIHJlbW92ZSk7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQodGFyZ2V0KTtcclxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xyXG4gICAgICAubWFwKChncm91cCkgPT4gZ3JvdXAuZmFjZXQpXHJcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcclxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgaWYgKHNlY3Rpb24uX21ldGEuZmFjZXRJZCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUlucHV0TGlua3MoKSB7XHJcbiAgICBjb25zdCBsaW5rc0ZhY2V0SWRzID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dHMoKVxyXG4gICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQuZ2V0VHlwZSgpID09PSAnbGluaycpXHJcbiAgICAgIC5tYXAoKGlucHV0KSA9PiBpbnB1dC5nZXRGYWNldElkKCkpO1xyXG5cclxuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xyXG4gICAgICAubWFwKChncm91cCkgPT4gZ3JvdXAuZmFjZXQpXHJcbiAgICAgIC5tYXAoKGZhY2V0KSA9PiBmYWNldC5zZWN0aW9ucylcclxuICAgICAgLmZvckVhY2goKHNlY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGxpbmtzRmFjZXRJZHMuaW5kZXhPZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoc2VjdGlvbi5fbWV0YS5mYWNldElkKTtcclxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0T3V0cHV0ID0gaW5wdXQuZ2V0T3V0cHV0KCk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMgPSAoKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcclxuXHJcbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElucHV0QnlGYWNldElkID0gKGZhY2V0SWQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJUYXJnZXQgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlclRhcmdldCh0YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0U2VjdGlvbkNsYXNzZXModHlwZSkge1xyXG4gICAgY29uc3QgY2xhc3Nlc01hcCA9IHtcclxuICAgICAgdGV4dDogJ3RleHQnLFxyXG4gICAgICBjaGVja2JveDogJ2NoZWNrYm94ZXMnLFxyXG4gICAgICBsaW5rOiAnbGlua3MnLFxyXG4gICAgICBzZWxlY3Q6ICdzZWxlY3QnLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYG43LWZhY2V0X19zZWN0aW9uLWlucHV0LSR7Y2xhc3Nlc01hcFt0eXBlXX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGVhZGVyQ29uZmlnKGhlYWRlciwgZ3JvdXBJZCkge1xyXG4gICAgcmV0dXJuIGhlYWRlciA/IHtcclxuICAgICAgdGV4dDogaGVhZGVyLmxhYmVsLFxyXG4gICAgICBpY29uUmlnaHQ6IEhFQURFUl9JQ09OX09QRU4sXHJcbiAgICAgIGNsYXNzZXM6IGhlYWRlci5jbGFzc2VzLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgc291cmNlOiAnZ3JvdXAtaGVhZGVyJyxcclxuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYCxcclxuICAgICAgICBncm91cElkLFxyXG4gICAgICB9LFxyXG4gICAgICBfbWV0YToge1xyXG4gICAgICAgIGlkOiBgJHtncm91cElkfS1oZWFkZXJgLFxyXG4gICAgICB9LFxyXG4gICAgfSA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==