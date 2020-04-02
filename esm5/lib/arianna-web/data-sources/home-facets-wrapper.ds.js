/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeFacetsWrapperDS, _super);
    function AwHomeFacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoComplete = {}; // autocomplete data for each facet
        // autocomplete data for each facet
        _this.lockedFacets = {}; // locked means that the eye cannot be closed
        // locked means that the eye cannot be closed
        // store the last response so the component can be rendered again with the same data
        _this.lastData = {};
        _this.closedEyes = []; // list of closed eyes
        // list of closed eyes
        _this.openTippy = ''; // tipe of entity of the currently open tippy
        _this.tippyMaker = (/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /*
                  Builds or updates Tippy for the input in use (id)
                */
            /** @type {?} */
            var newId = id.replace(/ /g, '-');
            // create data for this facet
            if (!_this.autoComplete[newId]) {
                _this.autoComplete[newId] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true,
                };
                /** @type {?} */
                var ac_1 = _this.autoComplete[newId];
                /** @type {?} */
                var getContent = (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                });
                if (!ac_1.tippy) {
                    // target the correct this.autoComplete[id] input class
                    /** @type {?} */
                    var target = document.getElementsByClassName(newId)[1];
                    ac_1.tippy = tippy(target, {
                        content: getContent(),
                        trigger: 'manual',
                        interactive: true,
                        arrow: false,
                        flip: false,
                        appendTo: 'parent',
                        theme: 'light-border aw-home__facet-tippy',
                        placement: 'bottom-start',
                        maxWidth: '100%',
                    }); // attach tippy to input type text
                }
            }
            /** @type {?} */
            var ac = _this.autoComplete[newId];
            if (ac.tippy) {
                ac.tippy.show();
            }
        });
        _this.tippyClose = (/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var newId = id.replace(/ /g, '-');
            if (_this.autoComplete[newId]) {
                /** @type {?} */
                var ac = _this.autoComplete[newId];
                if (ac.tippy) {
                    ac.tippy.hide();
                }
            }
        });
        return _this;
    }
    // tipe of entity of the currently open tippy
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeFacetsWrapperDS.prototype.transform = 
    // tipe of entity of the currently open tippy
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.lastData = data;
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        /** @type {?} */
        var facetData = data;
        var lockedFacets = this.lockedFacets;
        // locked means that the eye cannot be closed
        var closedEyes = this.closedEyes;
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.autoComplete[id] && _this.autoComplete[id].tippy) {
                _this.autoComplete[id].tippy.destroy(); // destroy
            }
        }));
        this.autoComplete = {}; // reset data
        facetData.forEach((/**
         * @param {?} facet
         * @param {?} j
         * @return {?}
         */
        function (facet, j) {
            /*
             For each facet on back-end, push a header-component
             and a facet-component (search input only) to each array.
             ---//---
             # LOGIC:
             Each facet can be "locked" or "enabled".
             if a facet is locked, it means that it cannot be enabled or disabled.
             if a facet is enabled or disabled it means that the filter is active or inactive.
      
             there are 2 ways that a facet can be "locked"
               1. When a bubble of the same type is selected in the chart
               2. When that facet is the only enabled facet
      
             The first case is managed by pushing the selected bubble's ID to the corresponding array
             of lockedFacets.
             The second case is managed by pushing a "LOCK_LAST" string
             to the lockedFacets array of the last
             enabled facet.
            */
            Object.keys(lockedFacets).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                /** @type {?} */
                var index = lockedFacets[key].indexOf('LOCK_LAST');
                if (index >= 0) {
                    lockedFacets[key].splice(index, 1);
                }
            }));
            if (closedEyes) {
                if (closedEyes.length === facetData.length - 1) {
                    /** @type {?} */
                    var lastFacet = facetData.find((/**
                     * @param {?} f
                     * @return {?}
                     */
                    function (f) { return !closedEyes.includes(f.type.replace(/ /g, '-')); }));
                    if (lastFacet) {
                        if (closedEyes[lastFacet.type]) {
                            lockedFacets[lastFacet.type].push('LOCK_LAST');
                        }
                        else {
                            lockedFacets[lastFacet.type] = ['LOCK_LAST'];
                        }
                    }
                }
                if (closedEyes.includes(facet.type.replace(/ /g, '-'))) { // check if the eyes are open
                    facet.enabled = false;
                }
                else {
                    facet.enabled = true;
                }
            }
            if (Object.keys(lockedFacets).length) { // check if bubble chart wants to lock this facet
                if (lockedFacets[facet.type] && lockedFacets[facet.type].length > 0) {
                    // if bubble chart say lock this facet, lock it
                    facet.locked = true;
                }
                else {
                    facet.locked = false;
                }
            }
            else {
                facet.locked = false;
            }
            /** @type {?} */
            var headerClasses = [];
            /** @type {?} */
            var iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet['class-name']) {
                headerClasses.push("color-" + facet['class-name']);
                iconClasses.push("color-" + facet['class-name']);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash',
                classes: headerClasses.join(' ')
                    + (facet.locked
                        ? ' is-blocked'
                        : ' not-blocked'),
                payload: facet.locked === true ? null : facet.type.replace(/ /g, '-'),
            });
            // make array of inputs data
            inputs.push({
                sections: [
                    {
                        inputs: [
                            {
                                id: facet.type.replace(/ /g, '-') + "-" + j,
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                iconPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                enterPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                classes: String(facet.type.replace(' ', '-')) + "-search",
                            },
                        ],
                    },
                ],
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        return headers.map((/**
         * @param {?} h
         * @param {?} i
         * @return {?}
         */
        function (h, i) { return ({ header: h, input: inputs[i] }); }));
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
    AwHomeFacetsWrapperDS.prototype.lockedFacets;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.lastData;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.closedEyes;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.openTippy;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyClose;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFBMkMsaURBQVU7SUFBckQ7UUFBQSxxRUFtTEM7UUFsTFMsa0JBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7O1FBRXZELGtCQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsNkNBQTZDOzs7UUFHaEUsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGdCQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsc0JBQXNCOztRQUV2QyxlQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsNkNBQTZDO1FBc0g3RCxnQkFBVTs7OztRQUFHLFVBQUMsRUFBRTs7Ozs7Z0JBSWYsS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUNuQyw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUc7b0JBQ3pCLEtBQUssRUFBRSxTQUFTOztvQkFDaEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQzs7b0JBQ0ksSUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDOztvQkFDN0IsVUFBVTs7O2dCQUFHOzt3QkFDWCxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUNqRCxrQ0FBa0MsQ0FDbkMsQ0FBQyxDQUFDLENBQUM7b0JBQ0osV0FBVyxDQUFDLFlBQVksQ0FBQyxP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QXVCOztJQUV2QiwwQ0FBc0I7O0lBc0h0QiwyQ0F3Q0M7O0lBRUQsMkNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGF1dG9Db21wbGV0ZSA9IHt9OyAvLyBhdXRvY29tcGxldGUgZGF0YSBmb3IgZWFjaCBmYWNldFxuXG4gIHB1YmxpYyBsb2NrZWRGYWNldHMgPSB7fTsgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXG5cbiAgLy8gc3RvcmUgdGhlIGxhc3QgcmVzcG9uc2Ugc28gdGhlIGNvbXBvbmVudCBjYW4gYmUgcmVuZGVyZWQgYWdhaW4gd2l0aCB0aGUgc2FtZSBkYXRhXG4gIHB1YmxpYyBsYXN0RGF0YSA9IHt9O1xuXG4gIHB1YmxpYyBjbG9zZWRFeWVzID0gW107IC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcblxuICBwdWJsaWMgb3BlblRpcHB5ID0gJyc7IC8vIHRpcGUgb2YgZW50aXR5IG9mIHRoZSBjdXJyZW50bHkgb3BlbiB0aXBweVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHRoaXMubGFzdERhdGEgPSBkYXRhO1xuICAgIGNvbnN0IGhlYWRlcnM6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5wdXRzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGZhY2V0RGF0YSA9IGRhdGE7XG4gICAgY29uc3QgeyBsb2NrZWRGYWNldHMgfSA9IHRoaXM7IC8vIGxvY2tlZCBtZWFucyB0aGF0IHRoZSBleWUgY2Fubm90IGJlIGNsb3NlZFxuICAgIGNvbnN0IHsgY2xvc2VkRXllcyB9ID0gdGhpczsgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xuXG4gICAgLy8gd2hlbiBmYWNldCBkYXRhIGNoYW5nZXMsIGRlc3Ryb3kgZXZlcnkgdGlwcHkgYW5kIHJlc2V0IGF1dG9jb21wbGV0ZSBkYXRhLlxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXV0b0NvbXBsZXRlKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW2lkXSAmJiB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkpIHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5LmRlc3Ryb3koKTsgLy8gZGVzdHJveVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlID0ge307IC8vIHJlc2V0IGRhdGFcblxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKChmYWNldCwgaikgPT4ge1xuICAgICAgLypcbiAgICAgICBGb3IgZWFjaCBmYWNldCBvbiBiYWNrLWVuZCwgcHVzaCBhIGhlYWRlci1jb21wb25lbnRcbiAgICAgICBhbmQgYSBmYWNldC1jb21wb25lbnQgKHNlYXJjaCBpbnB1dCBvbmx5KSB0byBlYWNoIGFycmF5LlxuICAgICAgIC0tLS8vLS0tXG4gICAgICAgIyBMT0dJQzpcbiAgICAgICBFYWNoIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiIG9yIFwiZW5hYmxlZFwiLlxuICAgICAgIGlmIGEgZmFjZXQgaXMgbG9ja2VkLCBpdCBtZWFucyB0aGF0IGl0IGNhbm5vdCBiZSBlbmFibGVkIG9yIGRpc2FibGVkLlxuICAgICAgIGlmIGEgZmFjZXQgaXMgZW5hYmxlZCBvciBkaXNhYmxlZCBpdCBtZWFucyB0aGF0IHRoZSBmaWx0ZXIgaXMgYWN0aXZlIG9yIGluYWN0aXZlLlxuXG4gICAgICAgdGhlcmUgYXJlIDIgd2F5cyB0aGF0IGEgZmFjZXQgY2FuIGJlIFwibG9ja2VkXCJcbiAgICAgICAgIDEuIFdoZW4gYSBidWJibGUgb2YgdGhlIHNhbWUgdHlwZSBpcyBzZWxlY3RlZCBpbiB0aGUgY2hhcnRcbiAgICAgICAgIDIuIFdoZW4gdGhhdCBmYWNldCBpcyB0aGUgb25seSBlbmFibGVkIGZhY2V0XG5cbiAgICAgICBUaGUgZmlyc3QgY2FzZSBpcyBtYW5hZ2VkIGJ5IHB1c2hpbmcgdGhlIHNlbGVjdGVkIGJ1YmJsZSdzIElEIHRvIHRoZSBjb3JyZXNwb25kaW5nIGFycmF5XG4gICAgICAgb2YgbG9ja2VkRmFjZXRzLlxuICAgICAgIFRoZSBzZWNvbmQgY2FzZSBpcyBtYW5hZ2VkIGJ5IHB1c2hpbmcgYSBcIkxPQ0tfTEFTVFwiIHN0cmluZ1xuICAgICAgIHRvIHRoZSBsb2NrZWRGYWNldHMgYXJyYXkgb2YgdGhlIGxhc3RcbiAgICAgICBlbmFibGVkIGZhY2V0LlxuICAgICAgKi9cbiAgICAgIE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIGFsbCBsb2NrZWQgZmFjZXRzIGFycmF5cyBmcm9tIFwiTE9DS19MQVNUXCIgdmFsdWVzIChyZXNldCBhbGwgbG9ja3MpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbG9ja2VkRmFjZXRzW2tleV0uaW5kZXhPZignTE9DS19MQVNUJyk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgbG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoY2xvc2VkRXllcykge1xuICAgICAgICBpZiAoY2xvc2VkRXllcy5sZW5ndGggPT09IGZhY2V0RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgbGFzdEZhY2V0ID0gZmFjZXREYXRhLmZpbmQoKGYpID0+ICFjbG9zZWRFeWVzLmluY2x1ZGVzKGYudHlwZS5yZXBsYWNlKC8gL2csICctJykpKTtcbiAgICAgICAgICBpZiAobGFzdEZhY2V0KSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VkRXllc1tsYXN0RmFjZXQudHlwZV0pIHtcbiAgICAgICAgICAgICAgbG9ja2VkRmFjZXRzW2xhc3RGYWNldC50eXBlXS5wdXNoKCdMT0NLX0xBU1QnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0gPSBbJ0xPQ0tfTEFTVCddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VkRXllcy5pbmNsdWRlcyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpIHsgLy8gY2hlY2sgaWYgdGhlIGV5ZXMgYXJlIG9wZW5cbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFjZXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmxlbmd0aCkgeyAvLyBjaGVjayBpZiBidWJibGUgY2hhcnQgd2FudHMgdG8gbG9jayB0aGlzIGZhY2V0XG4gICAgICAgIGlmIChsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0gJiYgbG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBpZiBidWJibGUgY2hhcnQgc2F5IGxvY2sgdGhpcyBmYWNldCwgbG9jayBpdFxuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVyQ2xhc3NlcyA9IFtdO1xuICAgICAgY29uc3QgaWNvbkNsYXNzZXMgPSBbZmFjZXQuaWNvbl07XG4gICAgICBpZiAoIWZhY2V0LmVuYWJsZWQpIHsgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpOyB9XG4gICAgICBpZiAoZmFjZXRbJ2NsYXNzLW5hbWUnXSkge1xuICAgICAgICBoZWFkZXJDbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXRbJ2NsYXNzLW5hbWUnXX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldFsnY2xhc3MtbmFtZSddfWApO1xuICAgICAgfVxuICAgICAgLy8gbWFrZSBhcnJheSBvZiBoZWFkZXJzIGRhdGFcbiAgICAgIGhlYWRlcnMucHVzaCh7XG4gICAgICAgIGljb25MZWZ0OiBpY29uQ2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHRleHQ6IGZhY2V0LmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogZmFjZXQuZW5hYmxlZCA/ICduNy1pY29uLWV5ZScgOiAnbjctaWNvbi1leWUtc2xhc2gnLFxuICAgICAgICBjbGFzc2VzOlxuICAgICAgICAgIGhlYWRlckNsYXNzZXMuam9pbignICcpXG4gICAgICAgICAgKyAoZmFjZXQubG9ja2VkXG4gICAgICAgICAgICA/ICcgaXMtYmxvY2tlZCdcbiAgICAgICAgICAgIDogJyBub3QtYmxvY2tlZCcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC5sb2NrZWQgPT09IHRydWUgPyBudWxsIDogZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJyksXG4gICAgICB9KTtcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaW5wdXRzIGRhdGFcbiAgICAgIGlucHV0cy5wdXNoKHtcbiAgICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBgJHtmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKX0tJHtqfWAsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmYWNldFsnaW5wdXQtcGxhY2Vob2xkZXInXSxcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhZmFjZXQuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICBpbnB1dFBheWxvYWQ6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSl9LXNlYXJjaGAsXG4gICAgICAgICAgICAgICAgaWNvblBheWxvYWQ6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSl9LXNlYXJjaGAsXG4gICAgICAgICAgICAgICAgZW50ZXJQYXlsb2FkOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpfS1zZWFyY2hgLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoJyAnLCAnLScpKX0tc2VhcmNoYCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gemlwcGluZyBhcnJheXMgdG8gcmVuZGVyIHdpZGdldHMgd2l0aCBzZXBhcmF0ZSBkYXRhIChzZWUgaG9tZS1sYXlvdXQuaHRtbClcbiAgICByZXR1cm4gaGVhZGVycy5tYXAoKGgsIGkpID0+ICh7IGhlYWRlcjogaCwgaW5wdXQ6IGlucHV0c1tpXSB9KSk7XG4gIH1cblxuICBwdWJsaWMgdGlwcHlNYWtlciA9IChpZCkgPT4ge1xuICAgIC8qXG4gICAgICBCdWlsZHMgb3IgdXBkYXRlcyBUaXBweSBmb3IgdGhlIGlucHV0IGluIHVzZSAoaWQpXG4gICAgKi9cbiAgICBjb25zdCBuZXdJZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKTtcbiAgICAvLyBjcmVhdGUgZGF0YSBmb3IgdGhpcyBmYWNldFxuICAgIGlmICghdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdKSB7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF0gPSB7XG4gICAgICAgIHRpcHB5OiB1bmRlZmluZWQsIC8vIHRpcHB5IGRhdGEgLyBjb25maWdcbiAgICAgICAgb3BlbjogdHJ1ZSwgLy8gc2hvdyBvciBoaWRlIHRpcHB5XG4gICAgICB9O1xuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF07XG4gICAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgJ2F3LXNpbXBsZS1hdXRvY29tcGxldGVfX3RlbXBsYXRlJyxcbiAgICAgICAgKVswXTtcbiAgICAgICAgY29udGVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xuICAgICAgICByZXR1cm4gY29udGVudE5vZGU7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWFjLnRpcHB5KSB7XG4gICAgICAgIC8vIHRhcmdldCB0aGUgY29ycmVjdCB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gaW5wdXQgY2xhc3NcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuZXdJZClbMV07XG4gICAgICAgIGFjLnRpcHB5ID0gdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgYXctaG9tZV9fZmFjZXQtdGlwcHknLFxuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSk7IC8vIGF0dGFjaCB0aXBweSB0byBpbnB1dCB0eXBlIHRleHRcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF07XG4gICAgaWYgKGFjLnRpcHB5KSB7XG4gICAgICBhYy50aXBweS5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRpcHB5Q2xvc2UgPSAoaWQpID0+IHtcbiAgICBjb25zdCBuZXdJZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKTtcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdKSB7XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXTtcbiAgICAgIGlmIChhYy50aXBweSkge1xuICAgICAgICBhYy50aXBweS5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=