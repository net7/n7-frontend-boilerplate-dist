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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBR3pDLGdCQUFnQixHQUFHLG9CQUFvQjs7SUFDdkMsaUJBQWlCLEdBQUcscUJBQXFCO0FBRS9DO0lBQXFDLDJDQUFVO0lBQS9DO1FBQUEscUVBa0tDO1FBakNRLHNCQUFnQjs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBbkMsQ0FBbUMsRUFBQztRQUM3RCwwQkFBb0I7Ozs7UUFBRyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDLEVBQUM7UUFDbkYsa0NBQTRCOzs7O1FBQUcsVUFBQyxXQUFXLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxFQUExRCxDQUEwRCxFQUFDO1FBQzNHLHVCQUFpQjs7OztRQUFHLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBM0MsQ0FBMkMsRUFBQztRQUM3RSxrQkFBWTs7OztRQUFHLFVBQUMsTUFBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQXJDLENBQXFDLEVBQUM7UUFDakUsNkJBQXVCOzs7UUFBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxFQUExQyxDQUEwQyxFQUFDOztJQTRCcEYsQ0FBQzs7Ozs7O0lBL0pXLG1DQUFTOzs7OztJQUFu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Q0gsc0JBQUM7QUFBRCxDQUFDLEFBbEtELENBQXFDLFVBQVUsR0FrSzlDOzs7O0lBaktDLHNDQUFnQzs7SUFnSWhDLDJDQUFvRTs7SUFDcEUsK0NBQTBGOztJQUMxRix1REFBa0g7O0lBQ2xILDRDQUFvRjs7SUFDcEYsdUNBQXdFOztJQUN4RSxrREFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwsIFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmNvbnN0IEhFQURFUl9JQ09OX09QRU4gPSAnbjctaWNvbi1hbmdsZS1kb3duJztcbmNvbnN0IEhFQURFUl9JQ09OX0NMT1NFID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG5cbiAgICBpZighdGhpcy5zZWFyY2hNb2RlbCkge1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbCA9IGRhdGEuc2VhcmNoTW9kZWw7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElkKCksXG4gICAgICBmaWVsZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpZWxkcygpO1xuXG4gICAgbGV0IGdyb3VwcyA9IFtdO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkQ29uZmlnLCBmaWVsZEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gYGdyb3VwLSR7aWR9LSR7ZmllbGRJbmRleH1gO1xuXG4gICAgICAvLyBoZWFkZXIgY29uZmlnXG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLl9oZWFkZXJDb25maWcoZmllbGRDb25maWcuaGVhZGVyLCBncm91cElkKTtcblxuICAgICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAgIC5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuZ2V0U2VjdGlvbkluZGV4KCkgPT09IGZpZWxkSW5kZXgpXG4gICAgICAgIC5tYXAoaW5wdXQgPT4ge1xuICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYWNldElkOiBpbnB1dC5nZXRGYWNldElkKCksXG4gICAgICAgICAgICB0eXBlOiBpbnB1dC5nZXRUeXBlKCksXG4gICAgICAgICAgICBvdXRwdXQ6IGlucHV0LmdldE91dHB1dCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaCgoeyB0eXBlLCBvdXRwdXQsIGZhY2V0SWQgfSkgPT4ge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgY2xhc3NlczogdGhpcy5fZ2V0U2VjdGlvbkNsYXNzZXModHlwZSksXG4gICAgICAgICAgICBpbnB1dHM6IEFycmF5LmlzQXJyYXkob3V0cHV0KSA/IG91dHB1dCA6IFtvdXRwdXRdLFxuICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgZmFjZXRJZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGZhY2V0OiB7IHNlY3Rpb25zIH0sXG4gICAgICAgIGNsYXNzZXM6IGBuNy1mYWNldHMtd3JhcHBlcl9fJHtncm91cElkfWAsXG4gICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICBncm91cElkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXBzLFxuICAgICAgY2xhc3NlczogYG43LWZhY2V0cy13cmFwcGVyX18ke3RoaXMuc2VhcmNoTW9kZWwuZ2V0SWQoKX1gXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVHcm91cCh7IGV2ZW50UGF5bG9hZCB9KXtcbiAgICB0aGlzLm91dHB1dC5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBpZihncm91cC5fbWV0YS5ncm91cElkID09PSBldmVudFBheWxvYWQuZ3JvdXBJZCkge1xuICAgICAgICBncm91cC5pc09wZW4gPSAhZ3JvdXAuaXNPcGVuO1xuICAgICAgICBncm91cC5oZWFkZXIuaWNvblJpZ2h0ID0gZ3JvdXAuaXNPcGVuID8gSEVBREVSX0lDT05fT1BFTiA6IEhFQURFUl9JQ09OX0NMT1NFO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRmFjZXRDaGFuZ2UoeyBldmVudFBheWxvYWQgfSl7XG4gICAgY29uc3QgeyBmYWNldElkLCBzb3VyY2UsIHRyaWdnZXIgfSA9IGV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQsXG4gICAgICBmaWx0ZXIgPSB0aGlzLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoZmFjZXRJZClbMF0gfHwge30sXG4gICAgICBmaWx0ZXJWYWx1ZSA9IGZpbHRlclsndmFsdWUnXTtcblxuICAgIGxldCByZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgIHZhbHVlOiBhbnkgPSBldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLnZhbHVlIHx8IGV2ZW50UGF5bG9hZC52YWx1ZTtcblxuICAgIC8vIG5vcm1hbGl6ZVxuICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcblxuICAgIC8vIHJlbW92ZSBjb250cm9sXG4gICAgaWYoQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkpe1xuICAgICAgcmVtb3ZlID0gZmlsdGVyVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUgPSBmaWx0ZXJWYWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaW5wdXQgdGV4dCBjb250cm9sXG4gICAgLy8gVE9ETzogZ2VzdGlyZSBpIGNhc2kgZW50ZXIgLyBpY29uIGNsaWNrIG5lbCBpbnB1dCB0ZXh0XG4gICAgaWYoc291cmNlID09PSAnaW5wdXQtdGV4dCcgJiYgWydlbnRlcicsICdpY29uJ10uaW5kZXhPZih0cmlnZ2VyKSAhPT0gLTEpIHJldHVybjtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyKGZhY2V0SWQsIHZhbHVlLCByZW1vdmUpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJlZFRhcmdldCh0YXJnZXQpe1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZCh0YXJnZXQpO1xuICAgIHRoaXMub3V0cHV0Lmdyb3Vwc1xuICAgICAgLm1hcChncm91cCA9PiBncm91cC5mYWNldClcbiAgICAgIC5tYXAoZmFjZXQgPT4gZmFjZXQuc2VjdGlvbnMpXG4gICAgICAubWFwKHNlY3Rpb25zID0+IHtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICBpZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQgPT09IHRhcmdldCl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE91dHB1dCA9IGlucHV0LmdldE91dHB1dCgpO1xuICAgICAgICAgICAgc2VjdGlvbi5pbnB1dHMgPSBBcnJheS5pc0FycmF5KGlucHV0T3V0cHV0KSA/IGlucHV0T3V0cHV0IDogW2lucHV0T3V0cHV0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW5wdXRMaW5rcygpe1xuICAgIGNvbnN0IGxpbmtzRmFjZXRJZHMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldElucHV0cygpXG4gICAgICAuZmlsdGVyKGlucHV0ID0+IGlucHV0LmdldFR5cGUoKSA9PT0gJ2xpbmsnKVxuICAgICAgLm1hcChpbnB1dCA9PiBpbnB1dC5nZXRGYWNldElkKCkpO1xuXG4gICAgdGhpcy5vdXRwdXQuZ3JvdXBzXG4gICAgICAubWFwKGdyb3VwID0+IGdyb3VwLmZhY2V0KVxuICAgICAgLm1hcChmYWNldCA9PiBmYWNldC5zZWN0aW9ucylcbiAgICAgIC5tYXAoc2VjdGlvbnMgPT4ge1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIGlmKGxpbmtzRmFjZXRJZHMuaW5kZXhPZihzZWN0aW9uLl9tZXRhLmZhY2V0SWQpICE9PSAtMSl7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoc2VjdGlvbi5fbWV0YS5mYWNldElkKTtcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRPdXRwdXQgPSBpbnB1dC5nZXRPdXRwdXQoKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaW5wdXRzID0gQXJyYXkuaXNBcnJheShpbnB1dE91dHB1dCkgPyBpbnB1dE91dHB1dCA6IFtpbnB1dE91dHB1dF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFJlcXVlc3RQYXJhbXMgPSAoKSA9PiB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgcHVibGljIGZpbHRlcnNBc1F1ZXJ5UGFyYW1zID0gKGZpbHRlcnMpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMoZmlsdGVycyk7XG4gIHB1YmxpYyB1cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zID0gKHF1ZXJ5UGFyYW1zKSA9PiB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBwdWJsaWMgZ2V0SW5wdXRCeUZhY2V0SWQgPSAoZmFjZXRJZCkgPT4gdGhpcy5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKTtcbiAgcHVibGljIGZpbHRlclRhcmdldCA9ICh0YXJnZXQpID0+IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XG4gIHB1YmxpYyB1cGRhdGVJbnB1dHNGcm9tRmlsdGVycyA9ICgpID0+IHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcblxuICBwcml2YXRlIF9nZXRTZWN0aW9uQ2xhc3Nlcyh0eXBlKXtcbiAgICBjb25zdCBjbGFzc2VzTWFwID0ge1xuICAgICAgJ3RleHQnOiAndGV4dCcsXG4gICAgICAnY2hlY2tib3gnOiAnY2hlY2tib3hlcycsXG4gICAgICAnbGluayc6ICdsaW5rcycsXG4gICAgICAnc2VsZWN0JzogJ3NlbGVjdCdcbiAgICB9O1xuXG4gICAgcmV0dXJuIGBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC0ke2NsYXNzZXNNYXBbdHlwZV19YDtcbiAgfVxuXG4gIHByaXZhdGUgX2hlYWRlckNvbmZpZyhoZWFkZXIsIGdyb3VwSWQpe1xuICAgIHJldHVybiBoZWFkZXIgPyB7XG4gICAgICB0ZXh0OiBoZWFkZXIubGFiZWwsXG4gICAgICBpY29uUmlnaHQ6IEhFQURFUl9JQ09OX09QRU4sXG4gICAgICBjbGFzc2VzOiBoZWFkZXIuY2xhc3NlcyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc291cmNlOiAnZ3JvdXAtaGVhZGVyJyxcbiAgICAgICAgaWQ6IGAke2dyb3VwSWR9LWhlYWRlcmAsXG4gICAgICAgIGdyb3VwSWQ6IGdyb3VwSWRcbiAgICAgIH0sXG4gICAgICBfbWV0YToge1xuICAgICAgICBpZDogYCR7Z3JvdXBJZH0taGVhZGVyYFxuICAgICAgfVxuICAgIH06IG51bGw7XG4gIH1cbn0iXX0=