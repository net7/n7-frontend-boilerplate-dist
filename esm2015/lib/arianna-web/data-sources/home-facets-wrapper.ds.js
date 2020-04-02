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
        // store the last response so the component can be rendered again with the same data
        this.lastData = {};
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
            /** @type {?} */
            const newId = id.replace(/ /g, '-');
            // create data for this facet
            if (!this.autoComplete[newId]) {
                this.autoComplete[newId] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true,
                };
                /** @type {?} */
                const ac = this.autoComplete[newId];
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
                    // target the correct this.autoComplete[id] input class
                    /** @type {?} */
                    const target = document.getElementsByClassName(newId)[1];
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
            const ac = this.autoComplete[newId];
            if (ac.tippy) {
                ac.tippy.show();
            }
        });
        this.tippyClose = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            /** @type {?} */
            const newId = id.replace(/ /g, '-');
            if (this.autoComplete[newId]) {
                /** @type {?} */
                const ac = this.autoComplete[newId];
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
        const { lockedFacets } = this;
        // locked means that the eye cannot be closed
        const { closedEyes } = this;
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
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
             The second case is managed by pushing a "LOCK_LAST" string
             to the lockedFacets array of the last
             enabled facet.
            */
            Object.keys(lockedFacets).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                /** @type {?} */
                const index = lockedFacets[key].indexOf('LOCK_LAST');
                if (index >= 0) {
                    lockedFacets[key].splice(index, 1);
                }
            }));
            if (closedEyes) {
                if (closedEyes.length === facetData.length - 1) {
                    /** @type {?} */
                    const lastFacet = facetData.find((/**
                     * @param {?} f
                     * @return {?}
                     */
                    (f) => !closedEyes.includes(f.type.replace(/ /g, '-'))));
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
            if (facet['class-name']) {
                headerClasses.push(`color-${facet['class-name']}`);
                iconClasses.push(`color-${facet['class-name']}`);
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
                                id: `${facet.type.replace(/ /g, '-')}-${j}`,
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: `${String(facet.type.replace(/ /g, '-'))}-search`,
                                iconPayload: `${String(facet.type.replace(/ /g, '-'))}-search`,
                                enterPayload: `${String(facet.type.replace(/ /g, '-'))}-search`,
                                classes: `${String(facet.type.replace(' ', '-'))}-search`,
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
        (h, i) => ({ header: h, input: inputs[i] })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFDVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQzs7UUFFdkQsaUJBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7OztRQUdoRSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjs7UUFFdkMsY0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDZDQUE2QztRQXNIN0QsZUFBVTs7OztRQUFHLENBQUMsRUFBRSxFQUFFLEVBQUU7Ozs7O2tCQUluQixLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQ25DLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRztvQkFDekIsS0FBSyxFQUFFLFNBQVM7O29CQUNoQixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDOztzQkFDSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7O3NCQUM3QixVQUFVOzs7Z0JBQUcsR0FBRyxFQUFFOzswQkFDaEIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsa0NBQWtDLENBQ25DLENBQUMsQ0FBQyxDQUFDO29CQUNK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bExDLDZDQUEwQjs7SUFFMUIsNkNBQXlCOztJQUd6Qix5Q0FBcUI7O0lBRXJCLDJDQUF1Qjs7SUFFdkIsMENBQXNCOztJQXNIdEIsMkNBd0NDOztJQUVELDJDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBhdXRvQ29tcGxldGUgPSB7fTsgLy8gYXV0b2NvbXBsZXRlIGRhdGEgZm9yIGVhY2ggZmFjZXRcblxuICBwdWJsaWMgbG9ja2VkRmFjZXRzID0ge307IC8vIGxvY2tlZCBtZWFucyB0aGF0IHRoZSBleWUgY2Fubm90IGJlIGNsb3NlZFxuXG4gIC8vIHN0b3JlIHRoZSBsYXN0IHJlc3BvbnNlIHNvIHRoZSBjb21wb25lbnQgY2FuIGJlIHJlbmRlcmVkIGFnYWluIHdpdGggdGhlIHNhbWUgZGF0YVxuICBwdWJsaWMgbGFzdERhdGEgPSB7fTtcblxuICBwdWJsaWMgY2xvc2VkRXllcyA9IFtdOyAvLyBsaXN0IG9mIGNsb3NlZCBleWVzXG5cbiAgcHVibGljIG9wZW5UaXBweSA9ICcnOyAvLyB0aXBlIG9mIGVudGl0eSBvZiB0aGUgY3VycmVudGx5IG9wZW4gdGlwcHlcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB0aGlzLmxhc3REYXRhID0gZGF0YTtcbiAgICBjb25zdCBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGlucHV0czogYW55W10gPSBbXTtcbiAgICBjb25zdCBmYWNldERhdGEgPSBkYXRhO1xuICAgIGNvbnN0IHsgbG9ja2VkRmFjZXRzIH0gPSB0aGlzOyAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcbiAgICBjb25zdCB7IGNsb3NlZEV5ZXMgfSA9IHRoaXM7IC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcblxuICAgIC8vIHdoZW4gZmFjZXQgZGF0YSBjaGFuZ2VzLCBkZXN0cm95IGV2ZXJ5IHRpcHB5IGFuZCByZXNldCBhdXRvY29tcGxldGUgZGF0YS5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmF1dG9Db21wbGV0ZSkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtpZF0gJiYgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5KSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweS5kZXN0cm95KCk7IC8vIGRlc3Ryb3lcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IHt9OyAvLyByZXNldCBkYXRhXG5cbiAgICBmYWNldERhdGEuZm9yRWFjaCgoZmFjZXQsIGopID0+IHtcbiAgICAgIC8qXG4gICAgICAgRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XG4gICAgICAgYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAtLS0vLy0tLVxuICAgICAgICMgTE9HSUM6XG4gICAgICAgRWFjaCBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIiBvciBcImVuYWJsZWRcIi5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGxvY2tlZCwgaXQgbWVhbnMgdGhhdCBpdCBjYW5ub3QgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgICBpZiBhIGZhY2V0IGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgaXQgbWVhbnMgdGhhdCB0aGUgZmlsdGVyIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cblxuICAgICAgIHRoZXJlIGFyZSAyIHdheXMgdGhhdCBhIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiXG4gICAgICAgICAxLiBXaGVuIGEgYnViYmxlIG9mIHRoZSBzYW1lIHR5cGUgaXMgc2VsZWN0ZWQgaW4gdGhlIGNoYXJ0XG4gICAgICAgICAyLiBXaGVuIHRoYXQgZmFjZXQgaXMgdGhlIG9ubHkgZW5hYmxlZCBmYWNldFxuXG4gICAgICAgVGhlIGZpcnN0IGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIHRoZSBzZWxlY3RlZCBidWJibGUncyBJRCB0byB0aGUgY29ycmVzcG9uZGluZyBhcnJheVxuICAgICAgIG9mIGxvY2tlZEZhY2V0cy5cbiAgICAgICBUaGUgc2Vjb25kIGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIGEgXCJMT0NLX0xBU1RcIiBzdHJpbmdcbiAgICAgICB0byB0aGUgbG9ja2VkRmFjZXRzIGFycmF5IG9mIHRoZSBsYXN0XG4gICAgICAgZW5hYmxlZCBmYWNldC5cbiAgICAgICovXG4gICAgICBPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAvLyBjbGVhciBhbGwgbG9ja2VkIGZhY2V0cyBhcnJheXMgZnJvbSBcIkxPQ0tfTEFTVFwiIHZhbHVlcyAocmVzZXQgYWxsIGxvY2tzKVxuICAgICAgICBjb25zdCBpbmRleCA9IGxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YoJ0xPQ0tfTEFTVCcpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGxvY2tlZEZhY2V0c1trZXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGNsb3NlZEV5ZXMpIHtcbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMubGVuZ3RoID09PSBmYWNldERhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IGxhc3RGYWNldCA9IGZhY2V0RGF0YS5maW5kKChmKSA9PiAhY2xvc2VkRXllcy5pbmNsdWRlcyhmLnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSk7XG4gICAgICAgICAgaWYgKGxhc3RGYWNldCkge1xuICAgICAgICAgICAgaWYgKGNsb3NlZEV5ZXNbbGFzdEZhY2V0LnR5cGVdKSB7XG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0ucHVzaCgnTE9DS19MQVNUJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2NrZWRGYWNldHNbbGFzdEZhY2V0LnR5cGVdID0gWydMT0NLX0xBU1QnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMuaW5jbHVkZXMoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpKSB7IC8vIGNoZWNrIGlmIHRoZSBleWVzIGFyZSBvcGVuXG4gICAgICAgICAgZmFjZXQuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5sZW5ndGgpIHsgLy8gY2hlY2sgaWYgYnViYmxlIGNoYXJ0IHdhbnRzIHRvIGxvY2sgdGhpcyBmYWNldFxuICAgICAgICBpZiAobG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdICYmIGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gaWYgYnViYmxlIGNoYXJ0IHNheSBsb2NrIHRoaXMgZmFjZXQsIGxvY2sgaXRcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGNvbnN0IGljb25DbGFzc2VzID0gW2ZhY2V0Lmljb25dO1xuICAgICAgaWYgKCFmYWNldC5lbmFibGVkKSB7IGhlYWRlckNsYXNzZXMucHVzaCgnaXMtZGlzYWJsZWQnKTsgfVxuICAgICAgaWYgKGZhY2V0WydjbGFzcy1uYW1lJ10pIHtcbiAgICAgICAgaGVhZGVyQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0WydjbGFzcy1uYW1lJ119YCk7XG4gICAgICAgIGljb25DbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXRbJ2NsYXNzLW5hbWUnXX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyxcbiAgICAgICAgY2xhc3NlczpcbiAgICAgICAgICBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKVxuICAgICAgICAgICsgKGZhY2V0LmxvY2tlZFxuICAgICAgICAgICAgPyAnIGlzLWJsb2NrZWQnXG4gICAgICAgICAgICA6ICcgbm90LWJsb2NrZWQnKSxcbiAgICAgICAgcGF5bG9hZDogZmFjZXQubG9ja2VkID09PSB0cnVlID8gbnVsbCA6IGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpLFxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogYCR7ZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJyl9LSR7an1gLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgaW5wdXRQYXlsb2FkOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpfS1zZWFyY2hgLFxuICAgICAgICAgICAgICAgIGljb25QYXlsb2FkOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpfS1zZWFyY2hgLFxuICAgICAgICAgICAgICAgIGVudGVyUGF5bG9hZDogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKX0tc2VhcmNoYCxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKCcgJywgJy0nKSl9LXNlYXJjaGAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgcmV0dXJuIGhlYWRlcnMubWFwKChoLCBpKSA9PiAoeyBoZWFkZXI6IGgsIGlucHV0OiBpbnB1dHNbaV0gfSkpO1xuICB9XG5cbiAgcHVibGljIHRpcHB5TWFrZXIgPSAoaWQpID0+IHtcbiAgICAvKlxuICAgICAgQnVpbGRzIG9yIHVwZGF0ZXMgVGlwcHkgZm9yIHRoZSBpbnB1dCBpbiB1c2UgKGlkKVxuICAgICovXG4gICAgY29uc3QgbmV3SWQgPSBpZC5yZXBsYWNlKC8gL2csICctJyk7XG4gICAgLy8gY3JlYXRlIGRhdGEgZm9yIHRoaXMgZmFjZXRcbiAgICBpZiAoIXRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXSkge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdID0ge1xuICAgICAgICB0aXBweTogdW5kZWZpbmVkLCAvLyB0aXBweSBkYXRhIC8gY29uZmlnXG4gICAgICAgIG9wZW46IHRydWUsIC8vIHNob3cgb3IgaGlkZSB0aXBweVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdO1xuICAgICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICdhdy1zaW1wbGUtYXV0b2NvbXBsZXRlX190ZW1wbGF0ZScsXG4gICAgICAgIClbMF07XG4gICAgICAgIGNvbnRlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnROb2RlO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFhYy50aXBweSkge1xuICAgICAgICAvLyB0YXJnZXQgdGhlIGNvcnJlY3QgdGhpcy5hdXRvQ29tcGxldGVbaWRdIGlucHV0IGNsYXNzXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmV3SWQpWzFdO1xuICAgICAgICBhYy50aXBweSA9IHRpcHB5KHRhcmdldCwge1xuICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoKSxcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIGF3LWhvbWVfX2ZhY2V0LXRpcHB5JyxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0pOyAvLyBhdHRhY2ggdGlwcHkgdG8gaW5wdXQgdHlwZSB0ZXh0XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdO1xuICAgIGlmIChhYy50aXBweSkge1xuICAgICAgYWMudGlwcHkuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0aXBweUNsb3NlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgbmV3SWQgPSBpZC5yZXBsYWNlKC8gL2csICctJyk7XG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXSkge1xuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF07XG4gICAgICBpZiAoYWMudGlwcHkpIHtcbiAgICAgICAgYWMudGlwcHkuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19