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
            if (Object.keys(lockedFacets).length) {
                if (lockedFacets[facet.type]) {
                    // if bubble chart say lock this facet, lock it
                    facet.locked = true;
                }
                else {
                    facet.locked = false;
                }
            }
            /** @type {?} */
            var headerClasses = [];
            /** @type {?} */
            var iconClasses = [facet.icon];
            if (!facet.enabled)
                headerClasses.push('is-disabled');
            if (facet.configKey) {
                headerClasses.push("color-" + facet.configKey);
                iconClasses.push("color-" + facet.configKey);
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
                    return !f.enabled || (f.type === facet.type);
                })) ? ' is-blocked' : ' not-blocked')),
                payload: facet.type,
            });
            // make array of inputs data
            inputs.push({
                sections: [{
                        inputs: [{
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type) + '-search',
                                iconPayload: String(facet.type) + '-search',
                                enterPayload: String(facet.type) + '-search',
                                classes: String(facet.type) + '-search',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFBMkMsaURBQVU7SUFBckQ7UUFBQSxxRUErR0M7UUE3R1Msa0JBQVksR0FBRyxFQUFFLENBQUE7UUFpRWxCLGdCQUFVOzs7OztRQUFHLFVBQUMsR0FBRyxFQUFFLEVBQUU7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHOztvQkFFdEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLEtBQUssRUFBRSxTQUFTOztvQkFDaEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQTs7b0JBQ0ssSUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsSUFBRSxDQUFDLEtBQUssRUFBRTs7d0JBQ1AsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO29CQUN2QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ3ZCLE9BQU8sRUFBRSw4QkFBOEI7d0JBQ3ZDLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixXQUFXLEVBQUUsSUFBSTt3QkFDakIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLEtBQUs7d0JBQ1gsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLEtBQUssRUFBRSxtQ0FBbUM7d0JBQzFDLFNBQVMsRUFBRSxjQUFjO3dCQUN6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ekIsMkNBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tIFwidGlwcHkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlID0ge31cblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgZmFjZXREYXRhLCBsb2NrZWRGYWNldHMgfSkge1xuICAgIHZhciBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIHZhciBpbnB1dHM6IGFueVtdID0gW107XG5cbiAgICBmYWNldERhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvKlxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIGlmKE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykubGVuZ3RoKSB7XG4gICAgICAgIGlmIChsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0pIHtcbiAgICAgICAgICAvLyBpZiBidWJibGUgY2hhcnQgc2F5IGxvY2sgdGhpcyBmYWNldCwgbG9jayBpdFxuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJDbGFzc2VzID0gW107XG4gICAgICBsZXQgaWNvbkNsYXNzZXMgPSBbZmFjZXQuaWNvbl07XG4gICAgICBpZiAoIWZhY2V0LmVuYWJsZWQpIGhlYWRlckNsYXNzZXMucHVzaCgnaXMtZGlzYWJsZWQnKTtcbiAgICAgIGlmIChmYWNldC5jb25maWdLZXkpIHtcbiAgICAgICAgaGVhZGVyQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LmNvbmZpZ0tleX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC5jb25maWdLZXl9YCk7XG4gICAgICB9XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGljb25DbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgdGV4dDogZmFjZXQubGFiZWwsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBmYWNldC5jb3VudCxcbiAgICAgICAgaWNvblJpZ2h0OiAoZmFjZXQuZW5hYmxlZCA/ICduNy1pY29uLWV5ZScgOiAnbjctaWNvbi1leWUtc2xhc2gnKSxcbiAgICAgICAgY2xhc3NlczogaGVhZGVyQ2xhc3Nlcy5qb2luKCcgJykgKyAoXG4gICAgICAgICAgZmFjZXQubG9ja2VkID8gJyBpcy1ibG9ja2VkJyA6IChcbiAgICAgICAgICAgIC8vIGlmIGV2ZXJ5IG90aGVyIGZhY2V0IGlzIGRpc2FibGVkIOKGkiBMb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgICAgIGZhY2V0RGF0YS5ldmVyeShmID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICFmLmVuYWJsZWQgfHwgKGYudHlwZSA9PT0gZmFjZXQudHlwZSlcbiAgICAgICAgICAgIH0pID8gJyBpcy1ibG9ja2VkJyA6ICcgbm90LWJsb2NrZWQnKSksXG4gICAgICAgIHBheWxvYWQ6IGZhY2V0LnR5cGUsXG4gICAgICB9KTtcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaW5wdXRzIGRhdGFcbiAgICAgIGlucHV0cy5wdXNoKHtcbiAgICAgICAgc2VjdGlvbnM6IFt7XG4gICAgICAgICAgaW5wdXRzOiBbe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZhY2V0WydpbnB1dC1wbGFjZWhvbGRlciddLFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiAhZmFjZXQuZW5hYmxlZCxcbiAgICAgICAgICAgIGlucHV0UGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgaWNvblBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgIGVudGVyUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgY2xhc3NlczogU3RyaW5nKGZhY2V0LnR5cGUpICsgJy1zZWFyY2gnLFxuICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB6aXBwaW5nIGFycmF5cyB0byByZW5kZXIgd2lkZ2V0cyB3aXRoIHNlcGFyYXRlIGRhdGEgKHNlZSBob21lLWxheW91dC5odG1sKVxuICAgIHZhciB3aWRnZXREYXRhOiBhbnlbXSA9IFtdXG4gICAgaGVhZGVycy5tYXAoKGgsIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCh7IGhlYWRlcjogaCwgaW5wdXQ6IGlucHV0c1tpXSB9KVxuICAgIH0pO1xuICAgIHJldHVybiB3aWRnZXREYXRhXG4gIH1cblxuICBwdWJsaWMgdGlwcHlNYWtlciA9IChyZXMsIGlkKSA9PiB7XG4gICAgLy8gY3JlYXRlIGRhdGEgZm9yIHRoaXMgZmFjZXRcbiAgICBpZiAoIXRoaXMuYXV0b0NvbXBsZXRlW2lkXSkge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdID0ge1xuICAgICAgICAvLyBkYXRhOiBbXSwgICAgICAgICAvLyBhcnJheSBvZiBzdWdnZXN0aW9uc1xuICAgICAgICB0ZW1wbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICB0aXBweTogdW5kZWZpbmVkLCAvLyB0aXBweSBkYXRhIC8gY29uZmlnXG4gICAgICAgIG9wZW46IHRydWUsICAgICAgIC8vIHNob3cgb3IgaGlkZSB0aXBweVxuICAgICAgfVxuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF1cbiAgICAgIGlmICghYWMudGlwcHkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJy4nICsgaWQ7IC8vIHRhcmdldCB0aGUgY29ycmVjdCB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gaW5wdXQgY2xhc3NcbiAgICAgICAgYWMudGlwcHkgPSB0aXBweSh0YXJnZXQsIHtcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4+TG9hZGluZyByZXN1bHRzPC9zcGFuPicsXG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBhdy1ob21lX19mYWNldC10aXBweScsXG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIG9uSGlkZGVuOiAoKSA9PiB7XG4gICAgICAgICAgICBhYy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblNob3c6ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctc2ltcGxlLWF1dG9jb21wbGV0ZV9fJyArIGlkLnJlcGxhY2UoJy1zZWFyY2gnLCAnJykpWzBdXG4gICAgICAgICAgICAvLyBhZnRlciBJIHVzZSB0aGlzIG5vZGUsIGl0IGJlY29tZXMgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAobm9kZSkgeyAvLyBpZiBJIGhhdmUgdGhlIG5vZGUsIGRvbid0IHRyeSB0byBnZXQgaXQgYWdhaW5cbiAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG4gICAgICAgICAgICAgIGFjLnRpcHB5LnNldENvbnRlbnQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdXG4gICAgaWYgKHJlcy50b3RhbENvdW50ID4gMCkge1xuICAgICAgYWMudGlwcHkuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjLnRpcHB5LmhpZGUoKVxuICAgIH1cbiAgfVxufSJdfQ==