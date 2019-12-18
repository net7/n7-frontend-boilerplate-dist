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
        this.tippyMaker = (/**
         * @param {?} res
         * @param {?} id
         * @return {?}
         */
        (res, id) => {
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
            if (res.results.length > 0 && ac.tippy) {
                ac.tippy.show();
            }
            else {
                ac.tippy.hide();
            }
        });
    }
    // list of closed eyes
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
         * @return {?}
         */
        facet => {
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
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFDVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQzs7UUFDdkQsaUJBQVksR0FBRyxFQUFFLENBQUEsQ0FBRyw2Q0FBNkM7O1FBQ2pFLGFBQVEsR0FBRyxFQUFFLENBQUEsQ0FBTyxvRkFBb0Y7O1FBQ3hHLGVBQVUsR0FBRyxFQUFFLENBQUEsQ0FBSyxzQkFBc0I7UUFzSDFDLGVBQVU7Ozs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDOUI7O2NBRUU7WUFDRixFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUN0QixLQUFLLEVBQUUsU0FBUzs7b0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCO2lCQUNqQyxDQUFDOztzQkFDSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7O3NCQUMxQixVQUFVOzs7Z0JBQUcsR0FBRyxFQUFFOzswQkFDaEIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsa0NBQWtDLENBQ25DLENBQUMsQ0FBQyxD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QUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTO2dDQUMvRCxXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVM7Z0NBQzlELFlBQVksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUztnQ0FDL0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTOzZCQUMxRDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDOzs7Y0FHRyxVQUFVLEdBQVUsRUFBRTtRQUM1QixPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0E0Q0Y7Ozs7OztJQW5LQyw2Q0FBMEI7O0lBQzFCLDZDQUF3Qjs7SUFDeEIseUNBQW9COztJQUNwQiwyQ0FBc0I7O0lBc0h0QiwyQ0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGF1dG9Db21wbGV0ZSA9IHt9OyAvLyBhdXRvY29tcGxldGUgZGF0YSBmb3IgZWFjaCBmYWNldFxuICBwdWJsaWMgbG9ja2VkRmFjZXRzID0ge30gICAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcbiAgcHVibGljIGxhc3REYXRhID0ge30gICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgcmVzcG9uc2Ugc28gdGhlIGNvbXBvbmVudCBjYW4gYmUgcmVuZGVyZWQgYWdhaW4gd2l0aCB0aGUgc2FtZSBkYXRhXG4gIHB1YmxpYyBjbG9zZWRFeWVzID0gW10gICAgIC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLmxhc3REYXRhID0gZGF0YVxuICAgIGNvbnN0IGhlYWRlcnM6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5wdXRzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGZhY2V0RGF0YSA9IGRhdGFcbiAgICBjb25zdCBsb2NrZWRGYWNldHMgPSB0aGlzLmxvY2tlZEZhY2V0cyAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcbiAgICBjb25zdCBjbG9zZWRFeWVzID0gdGhpcy5jbG9zZWRFeWVzICAgICAvLyBsaXN0IG9mIGNsb3NlZCBleWVzXG5cbiAgICAvLyB3aGVuIGZhY2V0IGRhdGEgY2hhbmdlcywgZGVzdHJveSBldmVyeSB0aXBweSBhbmQgcmVzZXQgYXV0b2NvbXBsZXRlIGRhdGEuXG4gICAgT2JqZWN0LmtleXModGhpcy5hdXRvQ29tcGxldGUpLmZvckVhY2goaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW2lkXSAmJiB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkpIHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5LmRlc3Ryb3koKSAvLyBkZXN0cm95XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IHt9IC8vIHJlc2V0IGRhdGFcblxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKGZhY2V0ID0+IHtcbiAgICAgIC8qXG4gICAgICAgRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XG4gICAgICAgYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAtLS0vLy0tLVxuICAgICAgICMgTE9HSUM6XG4gICAgICAgRWFjaCBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIiBvciBcImVuYWJsZWRcIi5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGxvY2tlZCwgaXQgbWVhbnMgdGhhdCBpdCBjYW5ub3QgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgaXQgbWVhbnMgdGhhdCB0aGUgZmlsdGVyIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cblxuICAgICAgIHRoZXJlIGFyZSAyIHdheXMgdGhhdCBhIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiXG4gICAgICAgICAxLiBXaGVuIGEgYnViYmxlIG9mIHRoZSBzYW1lIHR5cGUgaXMgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0XG4gICAgICAgICAyLiBXaGVuIHRoYXQgZmFjZXQgaXMgdGhlIG9ubHkgZW5hYmxlZCBmYWNldFxuXG4gICAgICAgVGhlIGZpcnN0IGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIHRoZSBzZWxlY3RlZCBidWJibGUncyBJRCB0byB0aGUgY29ycmVzcG9uZGluZyBhcnJheVxuICAgICAgIG9mIGxvY2tlZEZhY2V0cy5cbiAgICAgICBUaGUgc2Vjb25kIGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIGEgXCJMT0NLX0xBU1RcIiBzdHJpbmcgdG8gdGhlIGxvY2tlZEZhY2V0cyBhcnJheSBvZiB0aGUgbGFzdFxuICAgICAgIGVuYWJsZWQgZmFjZXQuXG4gICAgICAqL1xuICAgICAgT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIGFsbCBsb2NrZWQgZmFjZXRzIGFycmF5cyBmcm9tIFwiTE9DS19MQVNUXCIgdmFsdWVzIChyZXNldCBhbGwgbG9ja3MpXG4gICAgICAgIGxldCBpbmRleCA9IGxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YoJ0xPQ0tfTEFTVCcpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgbG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNsb3NlZEV5ZXMpIHtcbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMubGVuZ3RoID09IGZhY2V0RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbGV0IGxhc3RGYWNldCA9IGZhY2V0RGF0YS5maW5kKGYgPT4gIWNsb3NlZEV5ZXMuaW5jbHVkZXMoZi50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgICAgICAgaWYgKGxhc3RGYWNldCkge1xuICAgICAgICAgICAgaWYgKGNsb3NlZEV5ZXNbbGFzdEZhY2V0LnR5cGVdKSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0ucHVzaCgnTE9DS19MQVNUJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0gPSBbJ0xPQ0tfTEFTVCddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmluY2x1ZGVzKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSkgeyAvLyBjaGVjayBpZiB0aGUgZXllcyBhcmUgb3BlblxuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykubGVuZ3RoKSB7IC8vIGNoZWNrIGlmIGJ1YmJsZSBjaGFydCB3YW50cyB0byBsb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSAmJiBsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVyQ2xhc3NlcyA9IFtdO1xuICAgICAgY29uc3QgaWNvbkNsYXNzZXMgPSBbZmFjZXQuaWNvbl07XG4gICAgICBpZiAoIWZhY2V0LmVuYWJsZWQpIHsgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpOyB9XG4gICAgICBpZiAoZmFjZXQuY29uZmlnS2V5KSB7XG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC5jb25maWdLZXl9YCk7XG4gICAgICAgIGljb25DbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXQuY29uZmlnS2V5fWApO1xuICAgICAgfVxuICAgICAgLy8gbWFrZSBhcnJheSBvZiBoZWFkZXJzIGRhdGFcbiAgICAgIGhlYWRlcnMucHVzaCh7XG4gICAgICAgIGljb25MZWZ0OiBpY29uQ2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHRleHQ6IGZhY2V0LmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogZmFjZXQuZW5hYmxlZCA/ICduNy1pY29uLWV5ZScgOiAnbjctaWNvbi1leWUtc2xhc2gnLFxuICAgICAgICBjbGFzc2VzOlxuICAgICAgICAgIGhlYWRlckNsYXNzZXMuam9pbignICcpICtcbiAgICAgICAgICAoZmFjZXQubG9ja2VkXG4gICAgICAgICAgICA/ICcgaXMtYmxvY2tlZCdcbiAgICAgICAgICAgIDogJyBub3QtYmxvY2tlZCcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC5sb2NrZWQgPT09IHRydWUgPyBudWxsIDogZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJylcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmYWNldFsnaW5wdXQtcGxhY2Vob2xkZXInXSxcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhZmFjZXQuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICBpbnB1dFBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgaWNvblBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgZW50ZXJQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoJyAnLCAnLScpKSArICctc2VhcmNoJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgY29uc3Qgd2lkZ2V0RGF0YTogYW55W10gPSBbXTtcbiAgICBoZWFkZXJzLm1hcCgoaCwgaSkgPT4ge1xuICAgICAgd2lkZ2V0RGF0YS5wdXNoKHsgaGVhZGVyOiBoLCBpbnB1dDogaW5wdXRzW2ldIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB3aWRnZXREYXRhO1xuICB9XG5cbiAgcHVibGljIHRpcHB5TWFrZXIgPSAocmVzLCBpZCkgPT4ge1xuICAgIC8qXG4gICAgICBCdWlsZHMgb3IgdXBkYXRlcyBUaXBweSBmb3IgdGhlIGlucHV0IGluIHVzZSAoaWQpXG4gICAgKi9cbiAgICBpZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgIC8vIGNyZWF0ZSBkYXRhIGZvciB0aGlzIGZhY2V0XG4gICAgaWYgKCF0aGlzLmF1dG9Db21wbGV0ZVtpZF0pIHtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXSA9IHtcbiAgICAgICAgdGlwcHk6IHVuZGVmaW5lZCwgLy8gdGlwcHkgZGF0YSAvIGNvbmZpZ1xuICAgICAgICBvcGVuOiB0cnVlIC8vIHNob3cgb3IgaGlkZSB0aXBweVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdO1xuICAgICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICdhdy1zaW1wbGUtYXV0b2NvbXBsZXRlX190ZW1wbGF0ZSdcbiAgICAgICAgKVswXTtcbiAgICAgICAgY29udGVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xuICAgICAgICByZXR1cm4gY29udGVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWMudGlwcHkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpZClbMV07IC8vIHRhcmdldCB0aGUgY29ycmVjdCB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gaW5wdXQgY2xhc3NcbiAgICAgICAgYWMudGlwcHkgPSB0aXBweSh0YXJnZXQsIHtcbiAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBhdy1ob21lX19mYWNldC10aXBweScsXG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB9KTsgLy8gYXR0YWNoIHRpcHB5IHRvIGlucHV0IHR5cGUgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXTtcbiAgICBpZiAocmVzLnJlc3VsdHMubGVuZ3RoID4gMCAmJiBhYy50aXBweSkge1xuICAgICAgYWMudGlwcHkuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhYy50aXBweS5oaWRlKCk7XG4gICAgfVxuICB9XG59Il19