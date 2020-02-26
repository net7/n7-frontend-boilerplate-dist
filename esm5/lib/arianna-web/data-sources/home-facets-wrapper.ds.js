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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCO0lBQTJDLGlEQUFVO0lBQXJEO1FBQUEscUVBZ0xDO1FBL0tTLGtCQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DOztRQUN2RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQSxDQUFHLDZDQUE2Qzs7UUFDakUsY0FBUSxHQUFHLEVBQUUsQ0FBQSxDQUFPLG9GQUFvRjs7UUFDeEcsZ0JBQVUsR0FBRyxFQUFFLENBQUEsQ0FBSyxzQkFBc0I7O1FBQzFDLGVBQVMsR0FBRyxFQUFFLENBQUEsQ0FBTSw2Q0FBNkM7UUF5SGpFLGdCQUFVOzs7O1FBQUcsVUFBQyxFQUFFO1lBQ3JCOztjQUVFO1lBQ0YsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRztvQkFDdEIsS0FBSyxFQUFFLFNBQVM7O29CQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtpQkFDakMsQ0FBQzs7b0JBQ0ksSUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOztvQkFDMUIsVUFBVTs7O2dCQUFHOzt3QkFDWCxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUNqRCxrQ0FBa0MsQ0FDbkMsQ0FB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LEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQW9ESCw0QkFBQztBQUFELENBQUMsQUFoTEQsQ0FBMkMsVUFBVSxHQWdMcEQ7Ozs7Ozs7SUEvS0MsNkNBQTBCOztJQUMxQiw2Q0FBd0I7O0lBQ3hCLHlDQUFvQjs7SUFDcEIsMkNBQXNCOztJQUN0QiwwQ0FBcUI7O0lBeUhyQiwyQ0F1Q0M7O0lBRUQsMkNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGF1dG9Db21wbGV0ZSA9IHt9OyAvLyBhdXRvY29tcGxldGUgZGF0YSBmb3IgZWFjaCBmYWNldFxuICBwdWJsaWMgbG9ja2VkRmFjZXRzID0ge30gICAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcbiAgcHVibGljIGxhc3REYXRhID0ge30gICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgcmVzcG9uc2Ugc28gdGhlIGNvbXBvbmVudCBjYW4gYmUgcmVuZGVyZWQgYWdhaW4gd2l0aCB0aGUgc2FtZSBkYXRhXG4gIHB1YmxpYyBjbG9zZWRFeWVzID0gW10gICAgIC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcbiAgcHVibGljIG9wZW5UaXBweSA9ICcnICAgICAgLy8gdGlwZSBvZiBlbnRpdHkgb2YgdGhlIGN1cnJlbnRseSBvcGVuIHRpcHB5XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5sYXN0RGF0YSA9IGRhdGFcbiAgICBjb25zdCBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGlucHV0czogYW55W10gPSBbXTtcbiAgICBjb25zdCBmYWNldERhdGEgPSBkYXRhO1xuICAgIGNvbnN0IGxvY2tlZEZhY2V0cyA9IHRoaXMubG9ja2VkRmFjZXRzIC8vIGxvY2tlZCBtZWFucyB0aGF0IHRoZSBleWUgY2Fubm90IGJlIGNsb3NlZFxuICAgIGNvbnN0IGNsb3NlZEV5ZXMgPSB0aGlzLmNsb3NlZEV5ZXMgICAgIC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcblxuICAgIC8vIHdoZW4gZmFjZXQgZGF0YSBjaGFuZ2VzLCBkZXN0cm95IGV2ZXJ5IHRpcHB5IGFuZCByZXNldCBhdXRvY29tcGxldGUgZGF0YS5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmF1dG9Db21wbGV0ZSkuZm9yRWFjaChpZCA9PiB7XG4gICAgICBpZiAodGhpcy5hdXRvQ29tcGxldGVbaWRdICYmIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweSkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkuZGVzdHJveSgpIC8vIGRlc3Ryb3lcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuYXV0b0NvbXBsZXRlID0ge30gLy8gcmVzZXQgZGF0YVxuXG4gICAgZmFjZXREYXRhLmZvckVhY2goKGZhY2V0LCBqKSA9PiB7XG4gICAgICAvKlxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgLS0tLy8tLS1cbiAgICAgICAjIExPR0lDOlxuICAgICAgIEVhY2ggZmFjZXQgY2FuIGJlIFwibG9ja2VkXCIgb3IgXCJlbmFibGVkXCIuXG4gICAgICAgaWYgYSBmYWNldCBpcyBsb2NrZWQsIGl0IG1lYW5zIHRoYXQgaXQgY2Fubm90IGJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAgICAgaWYgYSBmYWNldCBpcyBlbmFibGVkIG9yIGRpc2FibGVkIGl0IG1lYW5zIHRoYXQgdGhlIGZpbHRlciBpcyBhY3RpdmUgb3IgaW5hY3RpdmUuXG5cbiAgICAgICB0aGVyZSBhcmUgMiB3YXlzIHRoYXQgYSBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIlxuICAgICAgICAgMS4gV2hlbiBhIGJ1YmJsZSBvZiB0aGUgc2FtZSB0eXBlIGlzIHNlbGVjdGVkIGluIHRoZSBjaGFydFxuICAgICAgICAgMi4gV2hlbiB0aGF0IGZhY2V0IGlzIHRoZSBvbmx5IGVuYWJsZWQgZmFjZXRcblxuICAgICAgIFRoZSBmaXJzdCBjYXNlIGlzIG1hbmFnZWQgYnkgcHVzaGluZyB0aGUgc2VsZWN0ZWQgYnViYmxlJ3MgSUQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgYXJyYXlcbiAgICAgICBvZiBsb2NrZWRGYWNldHMuXG4gICAgICAgVGhlIHNlY29uZCBjYXNlIGlzIG1hbmFnZWQgYnkgcHVzaGluZyBhIFwiTE9DS19MQVNUXCIgc3RyaW5nIHRvIHRoZSBsb2NrZWRGYWNldHMgYXJyYXkgb2YgdGhlIGxhc3RcbiAgICAgICBlbmFibGVkIGZhY2V0LlxuICAgICAgKi9cbiAgICAgIE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAvLyBjbGVhciBhbGwgbG9ja2VkIGZhY2V0cyBhcnJheXMgZnJvbSBcIkxPQ0tfTEFTVFwiIHZhbHVlcyAocmVzZXQgYWxsIGxvY2tzKVxuICAgICAgICBsZXQgaW5kZXggPSBsb2NrZWRGYWNldHNba2V5XS5pbmRleE9mKCdMT0NLX0xBU1QnKVxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGxvY2tlZEZhY2V0c1trZXldLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChjbG9zZWRFeWVzKSB7XG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmxlbmd0aCA9PSBmYWNldERhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGxldCBsYXN0RmFjZXQgPSBmYWNldERhdGEuZmluZChmID0+ICFjbG9zZWRFeWVzLmluY2x1ZGVzKGYudHlwZS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgICAgICAgIGlmIChsYXN0RmFjZXQpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZWRFeWVzW2xhc3RGYWNldC50eXBlXSkge1xuICAgICAgICAgICAgICBsb2NrZWRGYWNldHNbbGFzdEZhY2V0LnR5cGVdLnB1c2goJ0xPQ0tfTEFTVCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2NrZWRGYWNldHNbbGFzdEZhY2V0LnR5cGVdID0gWydMT0NLX0xBU1QnXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VkRXllcy5pbmNsdWRlcyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpIHsgLy8gY2hlY2sgaWYgdGhlIGV5ZXMgYXJlIG9wZW5cbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFjZXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmxlbmd0aCkgeyAvLyBjaGVjayBpZiBidWJibGUgY2hhcnQgd2FudHMgdG8gbG9jayB0aGlzIGZhY2V0XG4gICAgICAgIGlmIChsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0gJiYgbG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBpZiBidWJibGUgY2hhcnQgc2F5IGxvY2sgdGhpcyBmYWNldCwgbG9jayBpdFxuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVyQ2xhc3NlcyA9IFtdO1xuICAgICAgY29uc3QgaWNvbkNsYXNzZXMgPSBbZmFjZXQuaWNvbl07XG4gICAgICBpZiAoIWZhY2V0LmVuYWJsZWQpIHsgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpOyB9XG4gICAgICBpZiAoZmFjZXRbJ2NsYXNzLW5hbWUnXSkge1xuICAgICAgICBoZWFkZXJDbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXRbJ2NsYXNzLW5hbWUnXX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldFsnY2xhc3MtbmFtZSddfWApO1xuICAgICAgfVxuICAgICAgLy8gbWFrZSBhcnJheSBvZiBoZWFkZXJzIGRhdGFcbiAgICAgIGhlYWRlcnMucHVzaCh7XG4gICAgICAgIGljb25MZWZ0OiBpY29uQ2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHRleHQ6IGZhY2V0LmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogZmFjZXQuZW5hYmxlZCA/ICduNy1pY29uLWV5ZScgOiAnbjctaWNvbi1leWUtc2xhc2gnLFxuICAgICAgICBjbGFzc2VzOlxuICAgICAgICAgIGhlYWRlckNsYXNzZXMuam9pbignICcpICtcbiAgICAgICAgICAoZmFjZXQubG9ja2VkXG4gICAgICAgICAgICA/ICcgaXMtYmxvY2tlZCdcbiAgICAgICAgICAgIDogJyBub3QtYmxvY2tlZCcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC5sb2NrZWQgPT09IHRydWUgPyBudWxsIDogZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJylcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGAke2ZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpfS0ke2p9YCxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZhY2V0WydpbnB1dC1wbGFjZWhvbGRlciddLFxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFmYWNldC5lbmFibGVkLFxuICAgICAgICAgICAgICAgIGlucHV0UGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBpY29uUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBlbnRlclBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgnICcsICctJykpICsgJy1zZWFyY2gnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gemlwcGluZyBhcnJheXMgdG8gcmVuZGVyIHdpZGdldHMgd2l0aCBzZXBhcmF0ZSBkYXRhIChzZWUgaG9tZS1sYXlvdXQuaHRtbClcbiAgICBjb25zdCB3aWRnZXREYXRhOiBhbnlbXSA9IFtdO1xuICAgIGhlYWRlcnMubWFwKChoLCBpKSA9PiB7XG4gICAgICB3aWRnZXREYXRhLnB1c2goeyBoZWFkZXI6IGgsIGlucHV0OiBpbnB1dHNbaV0gfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGE7XG4gIH1cblxuICBwdWJsaWMgdGlwcHlNYWtlciA9IChpZCkgPT4ge1xuICAgIC8qXG4gICAgICBCdWlsZHMgb3IgdXBkYXRlcyBUaXBweSBmb3IgdGhlIGlucHV0IGluIHVzZSAoaWQpXG4gICAgKi9cbiAgICBpZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgIC8vIGNyZWF0ZSBkYXRhIGZvciB0aGlzIGZhY2V0XG4gICAgaWYgKCF0aGlzLmF1dG9Db21wbGV0ZVtpZF0pIHtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXSA9IHtcbiAgICAgICAgdGlwcHk6IHVuZGVmaW5lZCwgLy8gdGlwcHkgZGF0YSAvIGNvbmZpZ1xuICAgICAgICBvcGVuOiB0cnVlIC8vIHNob3cgb3IgaGlkZSB0aXBweVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdO1xuICAgICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICdhdy1zaW1wbGUtYXV0b2NvbXBsZXRlX190ZW1wbGF0ZSdcbiAgICAgICAgKVswXTtcbiAgICAgICAgY29udGVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xuICAgICAgICByZXR1cm4gY29udGVudE5vZGU7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWFjLnRpcHB5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaWQpWzFdOyAvLyB0YXJnZXQgdGhlIGNvcnJlY3QgdGhpcy5hdXRvQ29tcGxldGVbaWRdIGlucHV0IGNsYXNzXG4gICAgICAgIGFjLnRpcHB5ID0gdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgYXctaG9tZV9fZmFjZXQtdGlwcHknLFxuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSk7IC8vIGF0dGFjaCB0aXBweSB0byBpbnB1dCB0eXBlIHRleHRcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF07XG4gICAgaWYgKGFjLnRpcHB5KSB7XG4gICAgICBhYy50aXBweS5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRpcHB5Q2xvc2UgPSAoaWQpID0+IHtcbiAgICBpZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKTtcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGVbaWRdKSB7XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXTtcbiAgICAgIGlmIChhYy50aXBweSkge1xuICAgICAgICBhYy50aXBweS5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=