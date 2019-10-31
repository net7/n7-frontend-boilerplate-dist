/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from "tippy.js";
var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeFacetsWrapperDS, _super);
    function AwHomeFacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoComplete = {};
        _this.tippyMaker = (/**
         * @param {?} res
         * @param {?} id
         * @return {?}
         */
        function (res, id) {
            // create data for this facet
            if (!_this.autoComplete[id]) {
                _this.autoComplete[id] = {
                    // data: [],         // array of suggestions
                    template: undefined,
                    tippy: undefined,
                    // tippy data / config
                    open: true,
                };
                /** @type {?} */
                var ac_1 = _this.autoComplete[id];
                if (!ac_1.tippy) {
                    /** @type {?} */
                    var target = '.' + id;
                    ac_1.tippy = tippy(target, {
                        content: '<span>Loading results</span>',
                        trigger: 'manual',
                        interactive: true,
                        arrow: false,
                        flip: false,
                        appendTo: 'parent',
                        theme: 'light-border aw-home__facet-tippy',
                        placement: 'bottom-start',
                        maxWidth: '100%',
                        onHidden: (/**
                         * @return {?}
                         */
                        function () {
                            ac_1.open = false;
                        }),
                        onShow: (/**
                         * @return {?}
                         */
                        function () {
                            /** @type {?} */
                            var node = document.getElementsByClassName('aw-simple-autocomplete__' + id.replace('-search', ''))[0]
                            // after I use this node, it becomes undefined
                            ;
                            // after I use this node, it becomes undefined
                            if (node) { // if I have the node, don't try to get it again
                                node.setAttribute('style', 'display: block');
                                ac_1.tippy.setContent(node);
                            }
                        }),
                    })[0];
                }
            }
            /** @type {?} */
            var ac = _this.autoComplete[id];
            if (res.totalCount > 0) {
                ac.tippy.show();
            }
            else {
                ac.tippy.hide();
            }
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    AwHomeFacetsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var facetData = _a.facetData, lockedFacets = _a.lockedFacets;
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        facetData.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
            /*
             For each facet on back-end, push a header-component
             and a facet-component (search input only) to each array.
             */
            if (lockedFacets[facet.type.id.replace('toe-', '')]) {
                // if bubble chart say lock this facet, lock it
                facet.locked = true;
            }
            else {
                facet.locked = false;
            }
            /** @type {?} */
            var headerClasses = [];
            /** @type {?} */
            var iconClasses = [facet.icon];
            if (!facet.enabled)
                headerClasses.push('is-disabled');
            if (facet.type.configKey) {
                headerClasses.push("color-" + facet.type.configKey);
                iconClasses.push("color-" + facet.type.configKey);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: headerClasses.join(' ') + (facet.locked ? ' is-blocked' : (
                // if every other facet is disabled → Lock this facet
                facetData.every((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) {
                    return !f.enabled || (f.type.id === facet.type.id);
                })) ? ' is-blocked' : ' not-blocked')),
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                sections: [{
                        inputs: [{
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type.id) + '-search',
                                iconPayload: String(facet.type.id) + '-search',
                                enterPayload: String(facet.type.id) + '-search',
                                classes: String(facet.type.id) + '-search',
                            }]
                    }]
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        /** @type {?} */
        var widgetData = [];
        headers.map((/**
         * @param {?} h
         * @param {?} i
         * @return {?}
         */
        function (h, i) {
            widgetData.push({ header: h, input: inputs[i] });
        }));
        return widgetData;
    };
    return AwHomeFacetsWrapperDS;
}(DataSource));
export { AwHomeFacetsWrapperDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeFacetsWrapperDS.prototype.autoComplete;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFBMkMsaURBQVU7SUFBckQ7UUFBQSxxRUE0R0M7UUExR1Msa0JBQVksR0FBRyxFQUFFLENBQUE7UUE4RGxCLGdCQUFVOzs7OztRQUFHLFVBQUMsR0FBRyxFQUFFLEVBQUU7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHOztvQkFFdEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLEtBQUssRUFBRSxTQUFTOztvQkFDaEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQTs7b0JBQ0ssSUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsSUFBRSxDQUFDLEtBQUssRUFBRTs7d0JBQ1AsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO29CQUN2QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ3ZCLE9BQU8sRUFBRSw4QkFBOEI7d0JBQ3ZDLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixXQUFXLEVBQUUsSUFBSTt3QkFDakIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLEtBQUs7d0JBQ1gsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLEtBQUssRUFBRSxtQ0FBbUM7d0JBQzFDLFNBQVMsRUFBRSxjQUFjO3dCQUN6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SUFDbkIsQ0FBQztJQThDSCw0QkFBQztBQUFELENBQUMsQUE1R0QsQ0FBMkMsVUFBVSxHQTRHcEQ7Ozs7Ozs7SUExR0MsNkNBQXlCOztJQThEekIsMkNBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tIFwidGlwcHkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlID0ge31cblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgZmFjZXREYXRhLCBsb2NrZWRGYWNldHMgfSkge1xuICAgIHZhciBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIHZhciBpbnB1dHM6IGFueVtdID0gW107XG5cbiAgICBmYWNldERhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvKlxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIGlmIChsb2NrZWRGYWNldHNbZmFjZXQudHlwZS5pZC5yZXBsYWNlKCd0b2UtJywgJycpXSkge1xuICAgICAgICAvLyBpZiBidWJibGUgY2hhcnQgc2F5IGxvY2sgdGhpcyBmYWNldCwgbG9jayBpdFxuICAgICAgICBmYWNldC5sb2NrZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZVxuICAgICAgfVxuICAgICAgbGV0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGxldCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgaWYgKGZhY2V0LnR5cGUuY29uZmlnS2V5KSB7XG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC50eXBlLmNvbmZpZ0tleX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC50eXBlLmNvbmZpZ0tleX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IChmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcpLFxuICAgICAgICBjbGFzc2VzOiBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKSArIChcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPyAnIGlzLWJsb2NrZWQnIDogKFxuICAgICAgICAgICAgLy8gaWYgZXZlcnkgb3RoZXIgZmFjZXQgaXMgZGlzYWJsZWQg4oaSIExvY2sgdGhpcyBmYWNldFxuICAgICAgICAgICAgZmFjZXREYXRhLmV2ZXJ5KGYgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gIWYuZW5hYmxlZCB8fCAoZi50eXBlLmlkID09PSBmYWNldC50eXBlLmlkKVxuICAgICAgICAgICAgfSkgPyAnIGlzLWJsb2NrZWQnIDogJyBub3QtYmxvY2tlZCcpKSxcbiAgICAgICAgcGF5bG9hZDogZmFjZXQudHlwZS5pZCxcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBzZWN0aW9uczogW3tcbiAgICAgICAgICBpbnB1dHM6IFt7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICFmYWNldC5lbmFibGVkLFxuICAgICAgICAgICAgaW5wdXRQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5pZCkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICBpY29uUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUuaWQpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgZW50ZXJQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5pZCkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICBjbGFzc2VzOiBTdHJpbmcoZmFjZXQudHlwZS5pZCkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgdmFyIHdpZGdldERhdGE6IGFueVtdID0gW11cbiAgICBoZWFkZXJzLm1hcCgoaCwgaSkgPT4ge1xuICAgICAgd2lkZ2V0RGF0YS5wdXNoKHsgaGVhZGVyOiBoLCBpbnB1dDogaW5wdXRzW2ldIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGFcbiAgfVxuXG4gIHB1YmxpYyB0aXBweU1ha2VyID0gKHJlcywgaWQpID0+IHtcbiAgICAvLyBjcmVhdGUgZGF0YSBmb3IgdGhpcyBmYWNldFxuICAgIGlmICghdGhpcy5hdXRvQ29tcGxldGVbaWRdKSB7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gPSB7XG4gICAgICAgIC8vIGRhdGE6IFtdLCAgICAgICAgIC8vIGFycmF5IG9mIHN1Z2dlc3Rpb25zXG4gICAgICAgIHRlbXBsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIHRpcHB5OiB1bmRlZmluZWQsIC8vIHRpcHB5IGRhdGEgLyBjb25maWdcbiAgICAgICAgb3BlbjogdHJ1ZSwgICAgICAgLy8gc2hvdyBvciBoaWRlIHRpcHB5XG4gICAgICB9XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXVxuICAgICAgaWYgKCFhYy50aXBweSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAnLicgKyBpZDsgLy8gdGFyZ2V0IHRoZSBjb3JyZWN0IHRoaXMuYXV0b0NvbXBsZXRlW2lkXSBpbnB1dCBjbGFzc1xuICAgICAgICBhYy50aXBweSA9IHRpcHB5KHRhcmdldCwge1xuICAgICAgICAgIGNvbnRlbnQ6ICc8c3Bhbj5Mb2FkaW5nIHJlc3VsdHM8L3NwYW4+JyxcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIGF3LWhvbWVfX2ZhY2V0LXRpcHB5JyxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgb25IaWRkZW46ICgpID0+IHtcbiAgICAgICAgICAgIGFjLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uU2hvdzogKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1zaW1wbGUtYXV0b2NvbXBsZXRlX18nICsgaWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKSlbMF1cbiAgICAgICAgICAgIC8vIGFmdGVyIEkgdXNlIHRoaXMgbm9kZSwgaXQgYmVjb21lcyB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChub2RlKSB7IC8vIGlmIEkgaGF2ZSB0aGUgbm9kZSwgZG9uJ3QgdHJ5IHRvIGdldCBpdCBhZ2FpblxuICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcbiAgICAgICAgICAgICAgYWMudGlwcHkuc2V0Q29udGVudChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVswXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF1cbiAgICBpZiAocmVzLnRvdGFsQ291bnQgPiAwKSB7XG4gICAgICBhYy50aXBweS5zaG93KClcbiAgICB9IGVsc2Uge1xuICAgICAgYWMudGlwcHkuaGlkZSgpXG4gICAgfVxuICB9XG59Il19