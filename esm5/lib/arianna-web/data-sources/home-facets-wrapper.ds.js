/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-facets-wrapper.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCO0lBQTJDLGlEQUFVO0lBQXJEO1FBQUEscUVBbUxDO1FBbExTLGtCQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DOztRQUV2RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDZDQUE2Qzs7O1FBR2hFLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxnQkFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjs7UUFFdkMsZUFBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDZDQUE2QztRQXNIN0QsZ0JBQVU7Ozs7UUFBRyxVQUFDLEVBQUU7Ozs7O2dCQUlmLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7WUFDbkMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHO29CQUN6QixLQUFLLEVBQUUsU0FBUzs7b0JBQ2hCLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUM7O29CQUNJLElBQUUsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs7b0JBQzdCLFVBQVU7OztnQkFBRzs7d0JBQ1gsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsa0NBQWtDLENBQ25DLENBQUMsQ0FBQyxDQUFDO29CQUNKLFdBQVcsQ0FBQyxZQUFZLENBQUMs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QUF1Qjs7SUFFdkIsMENBQXNCOztJQXNIdEIsMkNBd0NDOztJQUVELDJDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcml2YXRlIGF1dG9Db21wbGV0ZSA9IHt9OyAvLyBhdXRvY29tcGxldGUgZGF0YSBmb3IgZWFjaCBmYWNldFxyXG5cclxuICBwdWJsaWMgbG9ja2VkRmFjZXRzID0ge307IC8vIGxvY2tlZCBtZWFucyB0aGF0IHRoZSBleWUgY2Fubm90IGJlIGNsb3NlZFxyXG5cclxuICAvLyBzdG9yZSB0aGUgbGFzdCByZXNwb25zZSBzbyB0aGUgY29tcG9uZW50IGNhbiBiZSByZW5kZXJlZCBhZ2FpbiB3aXRoIHRoZSBzYW1lIGRhdGFcclxuICBwdWJsaWMgbGFzdERhdGEgPSB7fTtcclxuXHJcbiAgcHVibGljIGNsb3NlZEV5ZXMgPSBbXTsgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xyXG5cclxuICBwdWJsaWMgb3BlblRpcHB5ID0gJyc7IC8vIHRpcGUgb2YgZW50aXR5IG9mIHRoZSBjdXJyZW50bHkgb3BlbiB0aXBweVxyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIHRoaXMubGFzdERhdGEgPSBkYXRhO1xyXG4gICAgY29uc3QgaGVhZGVyczogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGlucHV0czogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGZhY2V0RGF0YSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IGxvY2tlZEZhY2V0cyB9ID0gdGhpczsgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXHJcbiAgICBjb25zdCB7IGNsb3NlZEV5ZXMgfSA9IHRoaXM7IC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcclxuXHJcbiAgICAvLyB3aGVuIGZhY2V0IGRhdGEgY2hhbmdlcywgZGVzdHJveSBldmVyeSB0aXBweSBhbmQgcmVzZXQgYXV0b2NvbXBsZXRlIGRhdGEuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmF1dG9Db21wbGV0ZSkuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW2lkXSAmJiB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkpIHtcclxuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkuZGVzdHJveSgpOyAvLyBkZXN0cm95XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5hdXRvQ29tcGxldGUgPSB7fTsgLy8gcmVzZXQgZGF0YVxyXG5cclxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKChmYWNldCwgaikgPT4ge1xyXG4gICAgICAvKlxyXG4gICAgICAgRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XHJcbiAgICAgICBhbmQgYSBmYWNldC1jb21wb25lbnQgKHNlYXJjaCBpbnB1dCBvbmx5KSB0byBlYWNoIGFycmF5LlxyXG4gICAgICAgLS0tLy8tLS1cclxuICAgICAgICMgTE9HSUM6XHJcbiAgICAgICBFYWNoIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiIG9yIFwiZW5hYmxlZFwiLlxyXG4gICAgICAgaWYgYSBmYWNldCBpcyBsb2NrZWQsIGl0IG1lYW5zIHRoYXQgaXQgY2Fubm90IGJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXHJcbiAgICAgICBpZiBhIGZhY2V0IGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgaXQgbWVhbnMgdGhhdCB0aGUgZmlsdGVyIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cclxuXHJcbiAgICAgICB0aGVyZSBhcmUgMiB3YXlzIHRoYXQgYSBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIlxyXG4gICAgICAgICAxLiBXaGVuIGEgYnViYmxlIG9mIHRoZSBzYW1lIHR5cGUgaXMgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0XHJcbiAgICAgICAgIDIuIFdoZW4gdGhhdCBmYWNldCBpcyB0aGUgb25seSBlbmFibGVkIGZhY2V0XHJcblxyXG4gICAgICAgVGhlIGZpcnN0IGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIHRoZSBzZWxlY3RlZCBidWJibGUncyBJRCB0byB0aGUgY29ycmVzcG9uZGluZyBhcnJheVxyXG4gICAgICAgb2YgbG9ja2VkRmFjZXRzLlxyXG4gICAgICAgVGhlIHNlY29uZCBjYXNlIGlzIG1hbmFnZWQgYnkgcHVzaGluZyBhIFwiTE9DS19MQVNUXCIgc3RyaW5nXHJcbiAgICAgICB0byB0aGUgbG9ja2VkRmFjZXRzIGFycmF5IG9mIHRoZSBsYXN0XHJcbiAgICAgICBlbmFibGVkIGZhY2V0LlxyXG4gICAgICAqL1xyXG4gICAgICBPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIC8vIGNsZWFyIGFsbCBsb2NrZWQgZmFjZXRzIGFycmF5cyBmcm9tIFwiTE9DS19MQVNUXCIgdmFsdWVzIChyZXNldCBhbGwgbG9ja3MpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBsb2NrZWRGYWNldHNba2V5XS5pbmRleE9mKCdMT0NLX0xBU1QnKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgbG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoY2xvc2VkRXllcykge1xyXG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmxlbmd0aCA9PT0gZmFjZXREYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RGYWNldCA9IGZhY2V0RGF0YS5maW5kKChmKSA9PiAhY2xvc2VkRXllcy5pbmNsdWRlcyhmLnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSk7XHJcbiAgICAgICAgICBpZiAobGFzdEZhY2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZWRFeWVzW2xhc3RGYWNldC50eXBlXSkge1xyXG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0ucHVzaCgnTE9DS19MQVNUJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbG9ja2VkRmFjZXRzW2xhc3RGYWNldC50eXBlXSA9IFsnTE9DS19MQVNUJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMuaW5jbHVkZXMoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpKSB7IC8vIGNoZWNrIGlmIHRoZSBleWVzIGFyZSBvcGVuXHJcbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5sZW5ndGgpIHsgLy8gY2hlY2sgaWYgYnViYmxlIGNoYXJ0IHdhbnRzIHRvIGxvY2sgdGhpcyBmYWNldFxyXG4gICAgICAgIGlmIChsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0gJiYgbG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XHJcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFjZXQubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGVhZGVyQ2xhc3NlcyA9IFtdO1xyXG4gICAgICBjb25zdCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcclxuICAgICAgaWYgKCFmYWNldC5lbmFibGVkKSB7IGhlYWRlckNsYXNzZXMucHVzaCgnaXMtZGlzYWJsZWQnKTsgfVxyXG4gICAgICBpZiAoZmFjZXRbJ2NsYXNzLW5hbWUnXSkge1xyXG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldFsnY2xhc3MtbmFtZSddfWApO1xyXG4gICAgICAgIGljb25DbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXRbJ2NsYXNzLW5hbWUnXX1gKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxyXG4gICAgICBoZWFkZXJzLnB1c2goe1xyXG4gICAgICAgIGljb25MZWZ0OiBpY29uQ2xhc3Nlcy5qb2luKCcgJyksXHJcbiAgICAgICAgdGV4dDogZmFjZXQubGFiZWwsXHJcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxyXG4gICAgICAgIGljb25SaWdodDogZmFjZXQuZW5hYmxlZCA/ICduNy1pY29uLWV5ZScgOiAnbjctaWNvbi1leWUtc2xhc2gnLFxyXG4gICAgICAgIGNsYXNzZXM6XHJcbiAgICAgICAgICBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKVxyXG4gICAgICAgICAgKyAoZmFjZXQubG9ja2VkXHJcbiAgICAgICAgICAgID8gJyBpcy1ibG9ja2VkJ1xyXG4gICAgICAgICAgICA6ICcgbm90LWJsb2NrZWQnKSxcclxuICAgICAgICBwYXlsb2FkOiBmYWNldC5sb2NrZWQgPT09IHRydWUgPyBudWxsIDogZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJyksXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXHJcbiAgICAgIGlucHV0cy5wdXNoKHtcclxuICAgICAgICBzZWN0aW9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbnB1dHM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogYCR7ZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJyl9LSR7an1gLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZhY2V0WydpbnB1dC1wbGFjZWhvbGRlciddLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhZmFjZXQuZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgIGlucHV0UGF5bG9hZDogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKX0tc2VhcmNoYCxcclxuICAgICAgICAgICAgICAgIGljb25QYXlsb2FkOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpfS1zZWFyY2hgLFxyXG4gICAgICAgICAgICAgICAgZW50ZXJQYXlsb2FkOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpfS1zZWFyY2hgLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NlczogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgnICcsICctJykpfS1zZWFyY2hgLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gemlwcGluZyBhcnJheXMgdG8gcmVuZGVyIHdpZGdldHMgd2l0aCBzZXBhcmF0ZSBkYXRhIChzZWUgaG9tZS1sYXlvdXQuaHRtbClcclxuICAgIHJldHVybiBoZWFkZXJzLm1hcCgoaCwgaSkgPT4gKHsgaGVhZGVyOiBoLCBpbnB1dDogaW5wdXRzW2ldIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0aXBweU1ha2VyID0gKGlkKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBCdWlsZHMgb3IgdXBkYXRlcyBUaXBweSBmb3IgdGhlIGlucHV0IGluIHVzZSAoaWQpXHJcbiAgICAqL1xyXG4gICAgY29uc3QgbmV3SWQgPSBpZC5yZXBsYWNlKC8gL2csICctJyk7XHJcbiAgICAvLyBjcmVhdGUgZGF0YSBmb3IgdGhpcyBmYWNldFxyXG4gICAgaWYgKCF0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF0pIHtcclxuICAgICAgdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdID0ge1xyXG4gICAgICAgIHRpcHB5OiB1bmRlZmluZWQsIC8vIHRpcHB5IGRhdGEgLyBjb25maWdcclxuICAgICAgICBvcGVuOiB0cnVlLCAvLyBzaG93IG9yIGhpZGUgdGlwcHlcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF07XHJcbiAgICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgJ2F3LXNpbXBsZS1hdXRvY29tcGxldGVfX3RlbXBsYXRlJyxcclxuICAgICAgICApWzBdO1xyXG4gICAgICAgIGNvbnRlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcclxuICAgICAgICByZXR1cm4gY29udGVudE5vZGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoIWFjLnRpcHB5KSB7XHJcbiAgICAgICAgLy8gdGFyZ2V0IHRoZSBjb3JyZWN0IHRoaXMuYXV0b0NvbXBsZXRlW2lkXSBpbnB1dCBjbGFzc1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmV3SWQpWzFdO1xyXG4gICAgICAgIGFjLnRpcHB5ID0gdGlwcHkodGFyZ2V0LCB7XHJcbiAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCksXHJcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcclxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgYXJyb3c6IGZhbHNlLFxyXG4gICAgICAgICAgZmxpcDogZmFsc2UsXHJcbiAgICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXHJcbiAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBhdy1ob21lX19mYWNldC10aXBweScsXHJcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICB9KTsgLy8gYXR0YWNoIHRpcHB5IHRvIGlucHV0IHR5cGUgdGV4dFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXTtcclxuICAgIGlmIChhYy50aXBweSkge1xyXG4gICAgICBhYy50aXBweS5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGlwcHlDbG9zZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3SWQgPSBpZC5yZXBsYWNlKC8gL2csICctJyk7XHJcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdKSB7XHJcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdO1xyXG4gICAgICBpZiAoYWMudGlwcHkpIHtcclxuICAgICAgICBhYy50aXBweS5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19