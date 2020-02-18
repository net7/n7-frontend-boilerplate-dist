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
        _this.lastData = {}; // store the last response so the component can be rendered again with the same data
        // store the last response so the component can be rendered again with the same data
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
            id = id.replace(/ /g, '-');
            // create data for this facet
            if (!_this.autoComplete[id]) {
                _this.autoComplete[id] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true // show or hide tippy
                };
                /** @type {?} */
                var ac_1 = _this.autoComplete[id];
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
                    /** @type {?} */
                    var target = document.getElementsByClassName(id)[1];
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
            var ac = _this.autoComplete[id];
            if (ac.tippy) {
                ac.tippy.show();
            }
        });
        _this.tippyClose = (/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            id = id.replace(/ /g, '-');
            if (_this.autoComplete[id]) {
                /** @type {?} */
                var ac = _this.autoComplete[id];
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
        /** @type {?} */
        var lockedFacets = this.lockedFacets // locked means that the eye cannot be closed
        ;
        // locked means that the eye cannot be closed
        /** @type {?} */
        var closedEyes = this.closedEyes // list of closed eyes
        // when facet data changes, destroy every tippy and reset autocomplete data.
        ;
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
             The second case is managed by pushing a "LOCK_LAST" string to the lockedFacets array of the last
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
                if (closedEyes.length == facetData.length - 1) {
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
                classes: headerClasses.join(' ') +
                    (facet.locked
                        ? ' is-blocked'
                        : ' not-blocked'),
                payload: facet.locked === true ? null : facet.type.replace(/ /g, '-')
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
                                inputPayload: String(facet.type.replace(/ /g, '-')) + '-search',
                                iconPayload: String(facet.type.replace(/ /g, '-')) + '-search',
                                enterPayload: String(facet.type.replace(/ /g, '-')) + '-search',
                                classes: String(facet.type.replace(' ', '-')) + '-search'
                            }
                        ]
                    }
                ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFBMkMsaURBQVU7SUFBckQ7UUFBQSxxRUFnTEM7UUEvS1Msa0JBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7O1FBQ3ZELGtCQUFZLEdBQUcsRUFBRSxDQUFBLENBQUcsNkNBQTZDOztRQUNqRSxjQUFRLEdBQUcsRUFBRSxDQUFBLENBQU8sb0ZBQW9GOztRQUN4RyxnQkFBVSxHQUFHLEVBQUUsQ0FBQSxDQUFLLHNCQUFzQjs7UUFDMUMsZUFBUyxHQUFHLEVBQUUsQ0FBQSxDQUFNLDZDQUE2QztRQXlIakUsZ0JBQVU7Ozs7UUFBRyxVQUFDLEVBQUU7WUFDckI7O2NBRUU7WUFDRixFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUN0QixLQUFLLEVBQUUsU0FBUzs7b0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCO2lCQUNqQyxDQUFDOztvQkFDSSxJQUFFLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7O29CQUMxQixVQUFVOzs7Z0JBQUc7O3dCQUNYLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ2pELGtDQUFrQyxDQUNuQyxDQUFD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RUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBb0RILDRCQUFDO0FBQUQsQ0FBQyxBQWhMRCxDQUEyQyxVQUFVLEdBZ0xwRDs7Ozs7OztJQS9LQyw2Q0FBMEI7O0lBQzFCLDZDQUF3Qjs7SUFDeEIseUNBQW9COztJQUNwQiwyQ0FBc0I7O0lBQ3RCLDBDQUFxQjs7SUF5SHJCLDJDQXVDQzs7SUFFRCwyQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlID0ge307IC8vIGF1dG9jb21wbGV0ZSBkYXRhIGZvciBlYWNoIGZhY2V0XG4gIHB1YmxpYyBsb2NrZWRGYWNldHMgPSB7fSAgIC8vIGxvY2tlZCBtZWFucyB0aGF0IHRoZSBleWUgY2Fubm90IGJlIGNsb3NlZFxuICBwdWJsaWMgbGFzdERhdGEgPSB7fSAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCByZXNwb25zZSBzbyB0aGUgY29tcG9uZW50IGNhbiBiZSByZW5kZXJlZCBhZ2FpbiB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgcHVibGljIGNsb3NlZEV5ZXMgPSBbXSAgICAgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xuICBwdWJsaWMgb3BlblRpcHB5ID0gJycgICAgICAvLyB0aXBlIG9mIGVudGl0eSBvZiB0aGUgY3VycmVudGx5IG9wZW4gdGlwcHlcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLmxhc3REYXRhID0gZGF0YVxuICAgIGNvbnN0IGhlYWRlcnM6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5wdXRzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGZhY2V0RGF0YSA9IGRhdGE7XG4gICAgY29uc3QgbG9ja2VkRmFjZXRzID0gdGhpcy5sb2NrZWRGYWNldHMgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXG4gICAgY29uc3QgY2xvc2VkRXllcyA9IHRoaXMuY2xvc2VkRXllcyAgICAgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xuXG4gICAgLy8gd2hlbiBmYWNldCBkYXRhIGNoYW5nZXMsIGRlc3Ryb3kgZXZlcnkgdGlwcHkgYW5kIHJlc2V0IGF1dG9jb21wbGV0ZSBkYXRhLlxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXV0b0NvbXBsZXRlKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtpZF0gJiYgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5KSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweS5kZXN0cm95KCkgLy8gZGVzdHJveVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5hdXRvQ29tcGxldGUgPSB7fSAvLyByZXNldCBkYXRhXG5cbiAgICBmYWNldERhdGEuZm9yRWFjaCgoZmFjZXQsIGopID0+IHtcbiAgICAgIC8qXG4gICAgICAgRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XG4gICAgICAgYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAtLS0vLy0tLVxuICAgICAgICMgTE9HSUM6XG4gICAgICAgRWFjaCBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIiBvciBcImVuYWJsZWRcIi5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGxvY2tlZCwgaXQgbWVhbnMgdGhhdCBpdCBjYW5ub3QgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgaXQgbWVhbnMgdGhhdCB0aGUgZmlsdGVyIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cblxuICAgICAgIHRoZXJlIGFyZSAyIHdheXMgdGhhdCBhIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiXG4gICAgICAgICAxLiBXaGVuIGEgYnViYmxlIG9mIHRoZSBzYW1lIHR5cGUgaXMgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0XG4gICAgICAgICAyLiBXaGVuIHRoYXQgZmFjZXQgaXMgdGhlIG9ubHkgZW5hYmxlZCBmYWNldFxuXG4gICAgICAgVGhlIGZpcnN0IGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIHRoZSBzZWxlY3RlZCBidWJibGUncyBJRCB0byB0aGUgY29ycmVzcG9uZGluZyBhcnJheVxuICAgICAgIG9mIGxvY2tlZEZhY2V0cy5cbiAgICAgICBUaGUgc2Vjb25kIGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIGEgXCJMT0NLX0xBU1RcIiBzdHJpbmcgdG8gdGhlIGxvY2tlZEZhY2V0cyBhcnJheSBvZiB0aGUgbGFzdFxuICAgICAgIGVuYWJsZWQgZmFjZXQuXG4gICAgICAqL1xuICAgICAgT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIGFsbCBsb2NrZWQgZmFjZXRzIGFycmF5cyBmcm9tIFwiTE9DS19MQVNUXCIgdmFsdWVzIChyZXNldCBhbGwgbG9ja3MpXG4gICAgICAgIGxldCBpbmRleCA9IGxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YoJ0xPQ0tfTEFTVCcpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgbG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNsb3NlZEV5ZXMpIHtcbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMubGVuZ3RoID09IGZhY2V0RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbGV0IGxhc3RGYWNldCA9IGZhY2V0RGF0YS5maW5kKGYgPT4gIWNsb3NlZEV5ZXMuaW5jbHVkZXMoZi50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgICAgICAgaWYgKGxhc3RGYWNldCkge1xuICAgICAgICAgICAgaWYgKGNsb3NlZEV5ZXNbbGFzdEZhY2V0LnR5cGVdKSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0ucHVzaCgnTE9DS19MQVNUJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0gPSBbJ0xPQ0tfTEFTVCddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmluY2x1ZGVzKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSkgeyAvLyBjaGVjayBpZiB0aGUgZXllcyBhcmUgb3BlblxuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykubGVuZ3RoKSB7IC8vIGNoZWNrIGlmIGJ1YmJsZSBjaGFydCB3YW50cyB0byBsb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSAmJiBsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFjZXQubG9ja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBoZWFkZXJDbGFzc2VzID0gW107XG4gICAgICBjb25zdCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgeyBoZWFkZXJDbGFzc2VzLnB1c2goJ2lzLWRpc2FibGVkJyk7IH1cbiAgICAgIGlmIChmYWNldFsnY2xhc3MtbmFtZSddKSB7XG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldFsnY2xhc3MtbmFtZSddfWApO1xuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0WydjbGFzcy1uYW1lJ119YCk7XG4gICAgICB9XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGljb25DbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgdGV4dDogZmFjZXQubGFiZWwsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBmYWNldC5jb3VudCxcbiAgICAgICAgaWNvblJpZ2h0OiBmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcsXG4gICAgICAgIGNsYXNzZXM6XG4gICAgICAgICAgaGVhZGVyQ2xhc3Nlcy5qb2luKCcgJykgK1xuICAgICAgICAgIChmYWNldC5sb2NrZWRcbiAgICAgICAgICAgID8gJyBpcy1ibG9ja2VkJ1xuICAgICAgICAgICAgOiAnIG5vdC1ibG9ja2VkJyksXG4gICAgICAgIHBheWxvYWQ6IGZhY2V0LmxvY2tlZCA9PT0gdHJ1ZSA/IG51bGwgOiBmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogYCR7ZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJyl9LSR7an1gLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgaW5wdXRQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGljb25QYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGVudGVyUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKCcgJywgJy0nKSkgKyAnLXNlYXJjaCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB6aXBwaW5nIGFycmF5cyB0byByZW5kZXIgd2lkZ2V0cyB3aXRoIHNlcGFyYXRlIGRhdGEgKHNlZSBob21lLWxheW91dC5odG1sKVxuICAgIGNvbnN0IHdpZGdldERhdGE6IGFueVtdID0gW107XG4gICAgaGVhZGVycy5tYXAoKGgsIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCh7IGhlYWRlcjogaCwgaW5wdXQ6IGlucHV0c1tpXSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gd2lkZ2V0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyB0aXBweU1ha2VyID0gKGlkKSA9PiB7XG4gICAgLypcbiAgICAgIEJ1aWxkcyBvciB1cGRhdGVzIFRpcHB5IGZvciB0aGUgaW5wdXQgaW4gdXNlIChpZClcbiAgICAqL1xuICAgIGlkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgLy8gY3JlYXRlIGRhdGEgZm9yIHRoaXMgZmFjZXRcbiAgICBpZiAoIXRoaXMuYXV0b0NvbXBsZXRlW2lkXSkge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdID0ge1xuICAgICAgICB0aXBweTogdW5kZWZpbmVkLCAvLyB0aXBweSBkYXRhIC8gY29uZmlnXG4gICAgICAgIG9wZW46IHRydWUgLy8gc2hvdyBvciBoaWRlIHRpcHB5XG4gICAgICB9O1xuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF07XG4gICAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgJ2F3LXNpbXBsZS1hdXRvY29tcGxldGVfX3RlbXBsYXRlJ1xuICAgICAgICApWzBdO1xuICAgICAgICBjb250ZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG4gICAgICAgIHJldHVybiBjb250ZW50Tm9kZTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghYWMudGlwcHkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpZClbMV07IC8vIHRhcmdldCB0aGUgY29ycmVjdCB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gaW5wdXQgY2xhc3NcbiAgICAgICAgYWMudGlwcHkgPSB0aXBweSh0YXJnZXQsIHtcbiAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBhdy1ob21lX19mYWNldC10aXBweScsXG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB9KTsgLy8gYXR0YWNoIHRpcHB5IHRvIGlucHV0IHR5cGUgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXTtcbiAgICBpZiAoYWMudGlwcHkpIHtcbiAgICAgIGFjLnRpcHB5LnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGlwcHlDbG9zZSA9IChpZCkgPT4ge1xuICAgIGlkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpO1xuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtpZF0pIHtcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdO1xuICAgICAgaWYgKGFjLnRpcHB5KSB7XG4gICAgICAgIGFjLnRpcHB5LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==