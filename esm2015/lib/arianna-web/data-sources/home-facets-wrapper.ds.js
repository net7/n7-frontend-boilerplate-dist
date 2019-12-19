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
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFDVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQzs7UUFDdkQsaUJBQVksR0FBRyxFQUFFLENBQUEsQ0FBRyw2Q0FBNkM7O1FBQ2pFLGFBQVEsR0FBRyxFQUFFLENBQUEsQ0FBTyxvRkFBb0Y7O1FBQ3hHLGVBQVUsR0FBRyxFQUFFLENBQUEsQ0FBSyxzQkFBc0I7UUF1SDFDLGVBQVU7Ozs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDOUI7O2NBRUU7WUFDRixFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUN0QixLQUFLLEVBQUUsU0FBUzs7b0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCO2lCQUNqQyxDQUFDOztzQkFDSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7O3NCQUMxQixVQUFVOzs7Z0JBQUcsR0FBRyxFQUFFOzswQkFDaEIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsa0NBQWtDLENBQ25DLENBQUMsQ0FBQyxD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Q0FDdkMsSUFBSSxFQUFFLGdCQUFnQjtnQ0FDdEIsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87Z0NBQ3hCLFlBQVksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUztnQ0FDL0QsV0FBVyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTO2dDQUM5RCxZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVM7Z0NBQy9ELE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUzs2QkFDMUQ7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQzs7O2NBR0csVUFBVSxHQUFVLEVBQUU7UUFDNUIsT0FBTyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBNENGOzs7Ozs7SUFwS0MsNkNBQTBCOztJQUMxQiw2Q0FBd0I7O0lBQ3hCLHlDQUFvQjs7SUFDcEIsMkNBQXNCOztJQXVIdEIsMkNBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBhdXRvQ29tcGxldGUgPSB7fTsgLy8gYXV0b2NvbXBsZXRlIGRhdGEgZm9yIGVhY2ggZmFjZXRcbiAgcHVibGljIGxvY2tlZEZhY2V0cyA9IHt9ICAgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXG4gIHB1YmxpYyBsYXN0RGF0YSA9IHt9ICAgICAgIC8vIHN0b3JlIHRoZSBsYXN0IHJlc3BvbnNlIHNvIHRoZSBjb21wb25lbnQgY2FuIGJlIHJlbmRlcmVkIGFnYWluIHdpdGggdGhlIHNhbWUgZGF0YVxuICBwdWJsaWMgY2xvc2VkRXllcyA9IFtdICAgICAvLyBsaXN0IG9mIGNsb3NlZCBleWVzXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5sYXN0RGF0YSA9IGRhdGFcbiAgICBjb25zdCBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGlucHV0czogYW55W10gPSBbXTtcbiAgICBjb25zdCBmYWNldERhdGEgPSBkYXRhXG4gICAgY29uc3QgbG9ja2VkRmFjZXRzID0gdGhpcy5sb2NrZWRGYWNldHMgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXG4gICAgY29uc3QgY2xvc2VkRXllcyA9IHRoaXMuY2xvc2VkRXllcyAgICAgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xuXG4gICAgLy8gd2hlbiBmYWNldCBkYXRhIGNoYW5nZXMsIGRlc3Ryb3kgZXZlcnkgdGlwcHkgYW5kIHJlc2V0IGF1dG9jb21wbGV0ZSBkYXRhLlxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXV0b0NvbXBsZXRlKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtpZF0gJiYgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5KSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweS5kZXN0cm95KCkgLy8gZGVzdHJveVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5hdXRvQ29tcGxldGUgPSB7fSAvLyByZXNldCBkYXRhXG5cbiAgICBmYWNldERhdGEuZm9yRWFjaCgoZmFjZXQsIGopID0+IHtcbiAgICAgIC8qXG4gICAgICAgRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XG4gICAgICAgYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAtLS0vLy0tLVxuICAgICAgICMgTE9HSUM6XG4gICAgICAgRWFjaCBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIiBvciBcImVuYWJsZWRcIi5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGxvY2tlZCwgaXQgbWVhbnMgdGhhdCBpdCBjYW5ub3QgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgaXQgbWVhbnMgdGhhdCB0aGUgZmlsdGVyIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cblxuICAgICAgIHRoZXJlIGFyZSAyIHdheXMgdGhhdCBhIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiXG4gICAgICAgICAxLiBXaGVuIGEgYnViYmxlIG9mIHRoZSBzYW1lIHR5cGUgaXMgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0XG4gICAgICAgICAyLiBXaGVuIHRoYXQgZmFjZXQgaXMgdGhlIG9ubHkgZW5hYmxlZCBmYWNldFxuXG4gICAgICAgVGhlIGZpcnN0IGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIHRoZSBzZWxlY3RlZCBidWJibGUncyBJRCB0byB0aGUgY29ycmVzcG9uZGluZyBhcnJheVxuICAgICAgIG9mIGxvY2tlZEZhY2V0cy5cbiAgICAgICBUaGUgc2Vjb25kIGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIGEgXCJMT0NLX0xBU1RcIiBzdHJpbmcgdG8gdGhlIGxvY2tlZEZhY2V0cyBhcnJheSBvZiB0aGUgbGFzdFxuICAgICAgIGVuYWJsZWQgZmFjZXQuXG4gICAgICAqL1xuICAgICAgT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIGFsbCBsb2NrZWQgZmFjZXRzIGFycmF5cyBmcm9tIFwiTE9DS19MQVNUXCIgdmFsdWVzIChyZXNldCBhbGwgbG9ja3MpXG4gICAgICAgIGxldCBpbmRleCA9IGxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YoJ0xPQ0tfTEFTVCcpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgbG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGNsb3NlZEV5ZXMpIHtcbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMubGVuZ3RoID09IGZhY2V0RGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbGV0IGxhc3RGYWNldCA9IGZhY2V0RGF0YS5maW5kKGYgPT4gIWNsb3NlZEV5ZXMuaW5jbHVkZXMoZi50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgICAgICAgaWYgKGxhc3RGYWNldCkge1xuICAgICAgICAgICAgaWYgKGNsb3NlZEV5ZXNbbGFzdEZhY2V0LnR5cGVdKSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0ucHVzaCgnTE9DS19MQVNUJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0gPSBbJ0xPQ0tfTEFTVCddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmluY2x1ZGVzKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSkgeyAvLyBjaGVjayBpZiB0aGUgZXllcyBhcmUgb3BlblxuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykubGVuZ3RoKSB7IC8vIGNoZWNrIGlmIGJ1YmJsZSBjaGFydCB3YW50cyB0byBsb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSAmJiBsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVyQ2xhc3NlcyA9IFtdO1xuICAgICAgY29uc3QgaWNvbkNsYXNzZXMgPSBbZmFjZXQuaWNvbl07XG4gICAgICBpZiAoIWZhY2V0LmVuYWJsZWQpIHsgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpOyB9XG4gICAgICBpZiAoZmFjZXQuY29uZmlnS2V5KSB7XG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC5jb25maWdLZXl9YCk7XG4gICAgICAgIGljb25DbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXQuY29uZmlnS2V5fWApO1xuICAgICAgfVxuICAgICAgLy8gbWFrZSBhcnJheSBvZiBoZWFkZXJzIGRhdGFcbiAgICAgIGhlYWRlcnMucHVzaCh7XG4gICAgICAgIGljb25MZWZ0OiBpY29uQ2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHRleHQ6IGZhY2V0LmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogZmFjZXQuZW5hYmxlZCA/ICduNy1pY29uLWV5ZScgOiAnbjctaWNvbi1leWUtc2xhc2gnLFxuICAgICAgICBjbGFzc2VzOlxuICAgICAgICAgIGhlYWRlckNsYXNzZXMuam9pbignICcpICtcbiAgICAgICAgICAoZmFjZXQubG9ja2VkXG4gICAgICAgICAgICA/ICcgaXMtYmxvY2tlZCdcbiAgICAgICAgICAgIDogJyBub3QtYmxvY2tlZCcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC5sb2NrZWQgPT09IHRydWUgPyBudWxsIDogZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJylcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGAke2ZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpfS0ke2p9YCxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZhY2V0WydpbnB1dC1wbGFjZWhvbGRlciddLFxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFmYWNldC5lbmFibGVkLFxuICAgICAgICAgICAgICAgIGlucHV0UGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBpY29uUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBlbnRlclBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgnICcsICctJykpICsgJy1zZWFyY2gnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gemlwcGluZyBhcnJheXMgdG8gcmVuZGVyIHdpZGdldHMgd2l0aCBzZXBhcmF0ZSBkYXRhIChzZWUgaG9tZS1sYXlvdXQuaHRtbClcbiAgICBjb25zdCB3aWRnZXREYXRhOiBhbnlbXSA9IFtdO1xuICAgIGhlYWRlcnMubWFwKChoLCBpKSA9PiB7XG4gICAgICB3aWRnZXREYXRhLnB1c2goeyBoZWFkZXI6IGgsIGlucHV0OiBpbnB1dHNbaV0gfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGE7XG4gIH1cblxuICBwdWJsaWMgdGlwcHlNYWtlciA9IChyZXMsIGlkKSA9PiB7XG4gICAgLypcbiAgICAgIEJ1aWxkcyBvciB1cGRhdGVzIFRpcHB5IGZvciB0aGUgaW5wdXQgaW4gdXNlIChpZClcbiAgICAqL1xuICAgIGlkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgLy8gY3JlYXRlIGRhdGEgZm9yIHRoaXMgZmFjZXRcbiAgICBpZiAoIXRoaXMuYXV0b0NvbXBsZXRlW2lkXSkge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdID0ge1xuICAgICAgICB0aXBweTogdW5kZWZpbmVkLCAvLyB0aXBweSBkYXRhIC8gY29uZmlnXG4gICAgICAgIG9wZW46IHRydWUgLy8gc2hvdyBvciBoaWRlIHRpcHB5XG4gICAgICB9O1xuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF07XG4gICAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgJ2F3LXNpbXBsZS1hdXRvY29tcGxldGVfX3RlbXBsYXRlJ1xuICAgICAgICApWzBdO1xuICAgICAgICBjb250ZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG4gICAgICAgIHJldHVybiBjb250ZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhYy50aXBweSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGlkKVsxXTsgLy8gdGFyZ2V0IHRoZSBjb3JyZWN0IHRoaXMuYXV0b0NvbXBsZXRlW2lkXSBpbnB1dCBjbGFzc1xuICAgICAgICBhYy50aXBweSA9IHRpcHB5KHRhcmdldCwge1xuICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoKSxcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIGF3LWhvbWVfX2ZhY2V0LXRpcHB5JyxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0pOyAvLyBhdHRhY2ggdGlwcHkgdG8gaW5wdXQgdHlwZSB0ZXh0XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdO1xuICAgIGlmIChyZXMucmVzdWx0cy5sZW5ndGggPiAwICYmIGFjLnRpcHB5KSB7XG4gICAgICBhYy50aXBweS5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjLnRpcHB5LmhpZGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=