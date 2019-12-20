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
         * @param {?} res
         * @param {?} id
         * @return {?}
         */
        function (res, id) {
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
            if (res.results.length > 0 && ac.tippy) {
                ac.tippy.show();
            }
            else {
                ac.tippy.hide();
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
            if (facet.configKey) {
                headerClasses.push("color-" + facet.configKey);
                iconClasses.push("color-" + facet.configKey);
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFBMkMsaURBQVU7SUFBckQ7UUFBQSxxRUF3S0M7UUF2S1Msa0JBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7O1FBQ3ZELGtCQUFZLEdBQUcsRUFBRSxDQUFBLENBQUcsNkNBQTZDOztRQUNqRSxjQUFRLEdBQUcsRUFBRSxDQUFBLENBQU8sb0ZBQW9GOztRQUN4RyxnQkFBVSxHQUFHLEVBQUUsQ0FBQSxDQUFLLHNCQUFzQjs7UUFDMUMsZUFBUyxHQUFHLEVBQUUsQ0FBQSxDQUFNLDZDQUE2QztRQXlIakUsZ0JBQVU7Ozs7O1FBQUcsVUFBQyxHQUFHLEVBQUUsRUFBRTtZQUMxQjs7Y0FFRTtZQUNGLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUMxQiw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUc7b0JBQ3RCLEtBQUssRUFBRSxTQUFTOztvQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxxQkFBcUI7aUJBQ2pDLENBQUM7O29CQUNJLElBQUUsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQzs7b0JBQzFCLFVBQVU7OztnQkFBRzs7d0JBQ1gsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsa0NBQWtD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QiwyQ0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGF1dG9Db21wbGV0ZSA9IHt9OyAvLyBhdXRvY29tcGxldGUgZGF0YSBmb3IgZWFjaCBmYWNldFxuICBwdWJsaWMgbG9ja2VkRmFjZXRzID0ge30gICAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcbiAgcHVibGljIGxhc3REYXRhID0ge30gICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgcmVzcG9uc2Ugc28gdGhlIGNvbXBvbmVudCBjYW4gYmUgcmVuZGVyZWQgYWdhaW4gd2l0aCB0aGUgc2FtZSBkYXRhXG4gIHB1YmxpYyBjbG9zZWRFeWVzID0gW10gICAgIC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcbiAgcHVibGljIG9wZW5UaXBweSA9ICcnICAgICAgLy8gdGlwZSBvZiBlbnRpdHkgb2YgdGhlIGN1cnJlbnRseSBvcGVuIHRpcHB5XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5sYXN0RGF0YSA9IGRhdGFcbiAgICBjb25zdCBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGlucHV0czogYW55W10gPSBbXTtcbiAgICBjb25zdCBmYWNldERhdGEgPSBkYXRhXG4gICAgY29uc3QgbG9ja2VkRmFjZXRzID0gdGhpcy5sb2NrZWRGYWNldHMgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXG4gICAgY29uc3QgY2xvc2VkRXllcyA9IHRoaXMuY2xvc2VkRXllcyAgICAgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xuXG4gICAgLy8gd2hlbiBmYWNldCBkYXRhIGNoYW5nZXMsIGRlc3Ryb3kgZXZlcnkgdGlwcHkgYW5kIHJlc2V0IGF1dG9jb21wbGV0ZSBkYXRhLlxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXV0b0NvbXBsZXRlKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtpZF0gJiYgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5KSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweS5kZXN0cm95KCkgLy8gZGVzdHJveVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5hdXRvQ29tcGxldGUgPSB7fSAvLyByZXNldCBkYXRhXG5cbiAgICBmYWNldERhdGEuZm9yRWFjaCgoZmFjZXQsIGopID0+IHtcbiAgICAgIC8qXG4gICAgICAgRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XG4gICAgICAgYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAtLS0vLy0tLVxuICAgICAgICMgTE9HSUM6XG4gICAgICAgRWFjaCBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIiBvciBcImVuYWJsZWRcIi5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGxvY2tlZCwgaXQgbWVhbnMgdGhhdCBpdCBjYW5ub3QgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgaXQgbWVhbnMgdGhhdCB0aGUgZmlsdGVyIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cblxuICAgICAgIHRoZXJlIGFyZSAyIHdheXMgdGhhdCBhIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiXG4gICAgICAgICAxLiBXaGVuIGEgYnViYmxlIG9mIHRoZSBzYW1lIHR5cGUgaXMgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0XG4gICAgICAgICAyLiBXaGVuIHRoYXQgZmFjZXQgaXMgdGhlIG9ubHkgZW5hYmxlZCBmYWNldFxuXG4gICAgICAgVGhlIGZpcnN0IGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIHRoZSBzZWxlY3RlZCBidWJibGUncyBJRCB0byB0aGUgY29ycmVzcG9uZGluZyBhcnJheVxuICAgICAgIG9mIGxvY2tlZEZhY2V0cy5cbiAgICAgICBUaGUgc2Vjb25kIGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIGEgXCJMT0NLX0xBU1RcIiBzdHJpbmcgdG8gdGhlIGxvY2tlZEZhY2V0cyBhcnJheSBvZiB0aGUgbGFzdFxuICAgICAgIGVuYWJsZWQgZmFjZXQuXG4gICAgICAqL1xuICAgICAgT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIGFsbCBsb2NrZWQgZmFjZXRzIGFycmF5cyBmcm9tIFwiTE9DS19MQVNUXCIgdmFsdWVzIChyZXNldCBhbGwgbG9ja3MpXG4gICAgICAgIGxldCBpbmRleCA9IGxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YoJ0xPQ0tfTEFTVCcpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgbG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNsb3NlZEV5ZXMpIHtcbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMubGVuZ3RoID09IGZhY2V0RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbGV0IGxhc3RGYWNldCA9IGZhY2V0RGF0YS5maW5kKGYgPT4gIWNsb3NlZEV5ZXMuaW5jbHVkZXMoZi50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgICAgICAgaWYgKGxhc3RGYWNldCkge1xuICAgICAgICAgICAgaWYgKGNsb3NlZEV5ZXNbbGFzdEZhY2V0LnR5cGVdKSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0ucHVzaCgnTE9DS19MQVNUJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0gPSBbJ0xPQ0tfTEFTVCddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmluY2x1ZGVzKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSkgeyAvLyBjaGVjayBpZiB0aGUgZXllcyBhcmUgb3BlblxuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykubGVuZ3RoKSB7IC8vIGNoZWNrIGlmIGJ1YmJsZSBjaGFydCB3YW50cyB0byBsb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSAmJiBsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFjZXQubG9ja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBoZWFkZXJDbGFzc2VzID0gW107XG4gICAgICBjb25zdCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgeyBoZWFkZXJDbGFzc2VzLnB1c2goJ2lzLWRpc2FibGVkJyk7IH1cbiAgICAgIGlmIChmYWNldC5jb25maWdLZXkpIHtcbiAgICAgICAgaGVhZGVyQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LmNvbmZpZ0tleX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC5jb25maWdLZXl9YCk7XG4gICAgICB9XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGljb25DbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgdGV4dDogZmFjZXQubGFiZWwsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBmYWNldC5jb3VudCxcbiAgICAgICAgaWNvblJpZ2h0OiBmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcsXG4gICAgICAgIGNsYXNzZXM6XG4gICAgICAgICAgaGVhZGVyQ2xhc3Nlcy5qb2luKCcgJykgK1xuICAgICAgICAgIChmYWNldC5sb2NrZWRcbiAgICAgICAgICAgID8gJyBpcy1ibG9ja2VkJ1xuICAgICAgICAgICAgOiAnIG5vdC1ibG9ja2VkJyksXG4gICAgICAgIHBheWxvYWQ6IGZhY2V0LmxvY2tlZCA9PT0gdHJ1ZSA/IG51bGwgOiBmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogYCR7ZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJyl9LSR7an1gLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgaW5wdXRQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGljb25QYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGVudGVyUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKCcgJywgJy0nKSkgKyAnLXNlYXJjaCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB6aXBwaW5nIGFycmF5cyB0byByZW5kZXIgd2lkZ2V0cyB3aXRoIHNlcGFyYXRlIGRhdGEgKHNlZSBob21lLWxheW91dC5odG1sKVxuICAgIGNvbnN0IHdpZGdldERhdGE6IGFueVtdID0gW107XG4gICAgaGVhZGVycy5tYXAoKGgsIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCh7IGhlYWRlcjogaCwgaW5wdXQ6IGlucHV0c1tpXSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gd2lkZ2V0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyB0aXBweU1ha2VyID0gKHJlcywgaWQpID0+IHtcbiAgICAvKlxuICAgICAgQnVpbGRzIG9yIHVwZGF0ZXMgVGlwcHkgZm9yIHRoZSBpbnB1dCBpbiB1c2UgKGlkKVxuICAgICovXG4gICAgaWQgPSBpZC5yZXBsYWNlKC8gL2csICctJylcbiAgICAvLyBjcmVhdGUgZGF0YSBmb3IgdGhpcyBmYWNldFxuICAgIGlmICghdGhpcy5hdXRvQ29tcGxldGVbaWRdKSB7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gPSB7XG4gICAgICAgIHRpcHB5OiB1bmRlZmluZWQsIC8vIHRpcHB5IGRhdGEgLyBjb25maWdcbiAgICAgICAgb3BlbjogdHJ1ZSAvLyBzaG93IG9yIGhpZGUgdGlwcHlcbiAgICAgIH07XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXTtcbiAgICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAnYXctc2ltcGxlLWF1dG9jb21wbGV0ZV9fdGVtcGxhdGUnXG4gICAgICAgIClbMF07XG4gICAgICAgIGNvbnRlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjLnRpcHB5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaWQpWzFdOyAvLyB0YXJnZXQgdGhlIGNvcnJlY3QgdGhpcy5hdXRvQ29tcGxldGVbaWRdIGlucHV0IGNsYXNzXG4gICAgICAgIGFjLnRpcHB5ID0gdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgYXctaG9tZV9fZmFjZXQtdGlwcHknLFxuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSk7IC8vIGF0dGFjaCB0aXBweSB0byBpbnB1dCB0eXBlIHRleHRcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF07XG4gICAgaWYgKHJlcy5yZXN1bHRzLmxlbmd0aCA+IDAgJiYgYWMudGlwcHkpIHtcbiAgICAgIGFjLnRpcHB5LnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWMudGlwcHkuaGlkZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==