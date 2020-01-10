/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
export class AwHomeFacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.autoComplete = {}; // autocomplete data for each facet
        // autocomplete data for each facet
        this.lockedFacets = {}; // locked means that the eye cannot be closed
        // locked means that the eye cannot be closed
        this.lastData = {}; // store the last response so the component can be rendered again with the same data
        // store the last response so the component can be rendered again with the same data
        this.closedEyes = []; // list of closed eyes
        // list of closed eyes
        this.openTippy = ''; // tipe of entity of the currently open tippy
        this.tippyMaker = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            /*
              Builds or updates Tippy for the input in use (id)
            */
            id = id.replace(/ /g, '-');
            // create data for this facet
            if (!this.autoComplete[id]) {
                this.autoComplete[id] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true // show or hide tippy
                };
                /** @type {?} */
                const ac = this.autoComplete[id];
                /** @type {?} */
                const getContent = (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                });
                if (!ac.tippy) {
                    /** @type {?} */
                    const target = document.getElementsByClassName(id)[1];
                    ac.tippy = tippy(target, {
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
            const ac = this.autoComplete[id];
            if (ac.tippy) {
                ac.tippy.show();
            }
        });
        this.tippyClose = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            id = id.replace(/ /g, '-');
            if (this.autoComplete[id]) {
                /** @type {?} */
                const ac = this.autoComplete[id];
                if (ac.tippy) {
                    ac.tippy.hide();
                }
            }
        });
    }
    // tipe of entity of the currently open tippy
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        this.lastData = data;
        /** @type {?} */
        const headers = [];
        /** @type {?} */
        const inputs = [];
        /** @type {?} */
        const facetData = data;
        /** @type {?} */
        const lockedFacets = this.lockedFacets // locked means that the eye cannot be closed
        ;
        // locked means that the eye cannot be closed
        /** @type {?} */
        const closedEyes = this.closedEyes // list of closed eyes
        // when facet data changes, destroy every tippy and reset autocomplete data.
        ;
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            if (this.autoComplete[id] && this.autoComplete[id].tippy) {
                this.autoComplete[id].tippy.destroy(); // destroy
            }
        }));
        this.autoComplete = {}; // reset data
        facetData.forEach((/**
         * @param {?} facet
         * @param {?} j
         * @return {?}
         */
        (facet, j) => {
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
            key => {
                // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                /** @type {?} */
                let index = lockedFacets[key].indexOf('LOCK_LAST');
                if (index >= 0) {
                    lockedFacets[key].splice(index, 1);
                }
            }));
            if (closedEyes) {
                if (closedEyes.length == facetData.length - 1) {
                    /** @type {?} */
                    let lastFacet = facetData.find((/**
                     * @param {?} f
                     * @return {?}
                     */
                    f => !closedEyes.includes(f.type.replace(/ /g, '-'))));
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
            const headerClasses = [];
            /** @type {?} */
            const iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet.configKey) {
                headerClasses.push(`color-${facet.configKey}`);
                iconClasses.push(`color-${facet.configKey}`);
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
                                id: `${facet.type.replace(/ /g, '-')}-${j}`,
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
        const widgetData = [];
        headers.map((/**
         * @param {?} h
         * @param {?} i
         * @return {?}
         */
        (h, i) => {
            widgetData.push({ header: h, input: inputs[i] });
        }));
        return widgetData;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFDVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQzs7UUFDdkQsaUJBQVksR0FBRyxFQUFFLENBQUEsQ0FBRyw2Q0FBNkM7O1FBQ2pFLGFBQVEsR0FBRyxFQUFFLENBQUEsQ0FBTyxvRkFBb0Y7O1FBQ3hHLGVBQVUsR0FBRyxFQUFFLENBQUEsQ0FBSyxzQkFBc0I7O1FBQzFDLGNBQVMsR0FBRyxFQUFFLENBQUEsQ0FBTSw2Q0FBNkM7UUF5SGpFLGVBQVU7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3pCOztjQUVFO1lBQ0YsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRztvQkFDdEIsS0FBSyxFQUFFLFNBQVM7O29CQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtpQkFDakMsQ0FBQzs7c0JBQ0ksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOztzQkFDMUIsVUFBVTs7O2dCQUFHLEdBQUcsRUFBRTs7MEJBQ2hCLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENB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LEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FvREY7Ozs7OztJQS9LQyw2Q0FBMEI7O0lBQzFCLDZDQUF3Qjs7SUFDeEIseUNBQW9COztJQUNwQiwyQ0FBc0I7O0lBQ3RCLDBDQUFxQjs7SUF5SHJCLDJDQXVDQzs7SUFFRCwyQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlID0ge307IC8vIGF1dG9jb21wbGV0ZSBkYXRhIGZvciBlYWNoIGZhY2V0XG4gIHB1YmxpYyBsb2NrZWRGYWNldHMgPSB7fSAgIC8vIGxvY2tlZCBtZWFucyB0aGF0IHRoZSBleWUgY2Fubm90IGJlIGNsb3NlZFxuICBwdWJsaWMgbGFzdERhdGEgPSB7fSAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCByZXNwb25zZSBzbyB0aGUgY29tcG9uZW50IGNhbiBiZSByZW5kZXJlZCBhZ2FpbiB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgcHVibGljIGNsb3NlZEV5ZXMgPSBbXSAgICAgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xuICBwdWJsaWMgb3BlblRpcHB5ID0gJycgICAgICAvLyB0aXBlIG9mIGVudGl0eSBvZiB0aGUgY3VycmVudGx5IG9wZW4gdGlwcHlcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLmxhc3REYXRhID0gZGF0YVxuICAgIGNvbnN0IGhlYWRlcnM6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5wdXRzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGZhY2V0RGF0YSA9IGRhdGFcbiAgICBjb25zdCBsb2NrZWRGYWNldHMgPSB0aGlzLmxvY2tlZEZhY2V0cyAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcbiAgICBjb25zdCBjbG9zZWRFeWVzID0gdGhpcy5jbG9zZWRFeWVzICAgICAvLyBsaXN0IG9mIGNsb3NlZCBleWVzXG5cbiAgICAvLyB3aGVuIGZhY2V0IGRhdGEgY2hhbmdlcywgZGVzdHJveSBldmVyeSB0aXBweSBhbmQgcmVzZXQgYXV0b2NvbXBsZXRlIGRhdGEuXG4gICAgT2JqZWN0LmtleXModGhpcy5hdXRvQ29tcGxldGUpLmZvckVhY2goaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW2lkXSAmJiB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkpIHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5LmRlc3Ryb3koKSAvLyBkZXN0cm95XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IHt9IC8vIHJlc2V0IGRhdGFcblxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKChmYWNldCwgaikgPT4ge1xuICAgICAgLypcbiAgICAgICBGb3IgZWFjaCBmYWNldCBvbiBiYWNrLWVuZCwgcHVzaCBhIGhlYWRlci1jb21wb25lbnRcbiAgICAgICBhbmQgYSBmYWNldC1jb21wb25lbnQgKHNlYXJjaCBpbnB1dCBvbmx5KSB0byBlYWNoIGFycmF5LlxuICAgICAgIC0tLS8vLS0tXG4gICAgICAgIyBMT0dJQzpcbiAgICAgICBFYWNoIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiIG9yIFwiZW5hYmxlZFwiLlxuICAgICAgIGlmIGEgZmFjZXQgaXMgbG9ja2VkLCBpdCBtZWFucyB0aGF0IGl0IGNhbm5vdCBiZSBlbmFibGVkIG9yIGRpc2FibGVkLlxuICAgICAgIGlmIGEgZmFjZXQgaXMgZW5hYmxlZCBvciBkaXNhYmxlZCBpdCBtZWFucyB0aGF0IHRoZSBmaWx0ZXIgaXMgYWN0aXZlIG9yIGluYWN0aXZlLlxuXG4gICAgICAgdGhlcmUgYXJlIDIgd2F5cyB0aGF0IGEgZmFjZXQgY2FuIGJlIFwibG9ja2VkXCJcbiAgICAgICAgIDEuIFdoZW4gYSBidWJibGUgb2YgdGhlIHNhbWUgdHlwZSBpcyBzZWxlY3RlZCBpbiB0aGUgY2hhcnRcbiAgICAgICAgIDIuIFdoZW4gdGhhdCBmYWNldCBpcyB0aGUgb25seSBlbmFibGVkIGZhY2V0XG5cbiAgICAgICBUaGUgZmlyc3QgY2FzZSBpcyBtYW5hZ2VkIGJ5IHB1c2hpbmcgdGhlIHNlbGVjdGVkIGJ1YmJsZSdzIElEIHRvIHRoZSBjb3JyZXNwb25kaW5nIGFycmF5XG4gICAgICAgb2YgbG9ja2VkRmFjZXRzLlxuICAgICAgIFRoZSBzZWNvbmQgY2FzZSBpcyBtYW5hZ2VkIGJ5IHB1c2hpbmcgYSBcIkxPQ0tfTEFTVFwiIHN0cmluZyB0byB0aGUgbG9ja2VkRmFjZXRzIGFycmF5IG9mIHRoZSBsYXN0XG4gICAgICAgZW5hYmxlZCBmYWNldC5cbiAgICAgICovXG4gICAgICBPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgLy8gY2xlYXIgYWxsIGxvY2tlZCBmYWNldHMgYXJyYXlzIGZyb20gXCJMT0NLX0xBU1RcIiB2YWx1ZXMgKHJlc2V0IGFsbCBsb2NrcylcbiAgICAgICAgbGV0IGluZGV4ID0gbG9ja2VkRmFjZXRzW2tleV0uaW5kZXhPZignTE9DS19MQVNUJylcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBsb2NrZWRGYWNldHNba2V5XS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAoY2xvc2VkRXllcykge1xuICAgICAgICBpZiAoY2xvc2VkRXllcy5sZW5ndGggPT0gZmFjZXREYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBsZXQgbGFzdEZhY2V0ID0gZmFjZXREYXRhLmZpbmQoZiA9PiAhY2xvc2VkRXllcy5pbmNsdWRlcyhmLnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICAgICAgICBpZiAobGFzdEZhY2V0KSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VkRXllc1tsYXN0RmFjZXQudHlwZV0pIHtcbiAgICAgICAgICAgICAgbG9ja2VkRmFjZXRzW2xhc3RGYWNldC50eXBlXS5wdXNoKCdMT0NLX0xBU1QnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9ja2VkRmFjZXRzW2xhc3RGYWNldC50eXBlXSA9IFsnTE9DS19MQVNUJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMuaW5jbHVkZXMoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpKSB7IC8vIGNoZWNrIGlmIHRoZSBleWVzIGFyZSBvcGVuXG4gICAgICAgICAgZmFjZXQuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5sZW5ndGgpIHsgLy8gY2hlY2sgaWYgYnViYmxlIGNoYXJ0IHdhbnRzIHRvIGxvY2sgdGhpcyBmYWNldFxuICAgICAgICBpZiAobG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdICYmIGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gaWYgYnViYmxlIGNoYXJ0IHNheSBsb2NrIHRoaXMgZmFjZXQsIGxvY2sgaXRcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGNvbnN0IGljb25DbGFzc2VzID0gW2ZhY2V0Lmljb25dO1xuICAgICAgaWYgKCFmYWNldC5lbmFibGVkKSB7IGhlYWRlckNsYXNzZXMucHVzaCgnaXMtZGlzYWJsZWQnKTsgfVxuICAgICAgaWYgKGZhY2V0LmNvbmZpZ0tleSkge1xuICAgICAgICBoZWFkZXJDbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXQuY29uZmlnS2V5fWApO1xuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LmNvbmZpZ0tleX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyxcbiAgICAgICAgY2xhc3NlczpcbiAgICAgICAgICBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKSArXG4gICAgICAgICAgKGZhY2V0LmxvY2tlZFxuICAgICAgICAgICAgPyAnIGlzLWJsb2NrZWQnXG4gICAgICAgICAgICA6ICcgbm90LWJsb2NrZWQnKSxcbiAgICAgICAgcGF5bG9hZDogZmFjZXQubG9ja2VkID09PSB0cnVlID8gbnVsbCA6IGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgICB9KTtcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaW5wdXRzIGRhdGFcbiAgICAgIGlucHV0cy5wdXNoKHtcbiAgICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBgJHtmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKX0tJHtqfWAsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmYWNldFsnaW5wdXQtcGxhY2Vob2xkZXInXSxcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhZmFjZXQuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICBpbnB1dFBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgaWNvblBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgZW50ZXJQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoJyAnLCAnLScpKSArICctc2VhcmNoJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgY29uc3Qgd2lkZ2V0RGF0YTogYW55W10gPSBbXTtcbiAgICBoZWFkZXJzLm1hcCgoaCwgaSkgPT4ge1xuICAgICAgd2lkZ2V0RGF0YS5wdXNoKHsgaGVhZGVyOiBoLCBpbnB1dDogaW5wdXRzW2ldIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB3aWRnZXREYXRhO1xuICB9XG5cbiAgcHVibGljIHRpcHB5TWFrZXIgPSAoaWQpID0+IHtcbiAgICAvKlxuICAgICAgQnVpbGRzIG9yIHVwZGF0ZXMgVGlwcHkgZm9yIHRoZSBpbnB1dCBpbiB1c2UgKGlkKVxuICAgICovXG4gICAgaWQgPSBpZC5yZXBsYWNlKC8gL2csICctJylcbiAgICAvLyBjcmVhdGUgZGF0YSBmb3IgdGhpcyBmYWNldFxuICAgIGlmICghdGhpcy5hdXRvQ29tcGxldGVbaWRdKSB7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gPSB7XG4gICAgICAgIHRpcHB5OiB1bmRlZmluZWQsIC8vIHRpcHB5IGRhdGEgLyBjb25maWdcbiAgICAgICAgb3BlbjogdHJ1ZSAvLyBzaG93IG9yIGhpZGUgdGlwcHlcbiAgICAgIH07XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXTtcbiAgICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAnYXctc2ltcGxlLWF1dG9jb21wbGV0ZV9fdGVtcGxhdGUnXG4gICAgICAgIClbMF07XG4gICAgICAgIGNvbnRlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnROb2RlO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFhYy50aXBweSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGlkKVsxXTsgLy8gdGFyZ2V0IHRoZSBjb3JyZWN0IHRoaXMuYXV0b0NvbXBsZXRlW2lkXSBpbnB1dCBjbGFzc1xuICAgICAgICBhYy50aXBweSA9IHRpcHB5KHRhcmdldCwge1xuICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoKSxcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIGF3LWhvbWVfX2ZhY2V0LXRpcHB5JyxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0pOyAvLyBhdHRhY2ggdGlwcHkgdG8gaW5wdXQgdHlwZSB0ZXh0XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdO1xuICAgIGlmIChhYy50aXBweSkge1xuICAgICAgYWMudGlwcHkuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0aXBweUNsb3NlID0gKGlkKSA9PiB7XG4gICAgaWQgPSBpZC5yZXBsYWNlKC8gL2csICctJyk7XG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW2lkXSkge1xuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF07XG4gICAgICBpZiAoYWMudGlwcHkpIHtcbiAgICAgICAgYWMudGlwcHkuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19