/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-facets-wrapper.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0IsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFBckQ7O1FBQ1UsaUJBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7O1FBRXZELGlCQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsNkNBQTZDOzs7UUFHaEUsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7O1FBRXZDLGNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7UUFzSDdELGVBQVU7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxFQUFFOzs7OztrQkFJbkIsS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUNuQyw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUc7b0JBQ3pCLEtBQUssRUFBRSxTQUFTOztvQkFDaEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQzs7c0JBQ0ksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDOztzQkFDN0IsVUFBVTs7O2dCQUFHLEdBQUcsRUFBRTs7MEJBQ2hCLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ2pELGtDQUFrQyxDQUNuQyxDQUFDLENBQUMsQ0FBQztvQkFD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QWxMQyw2Q0FBMEI7O0lBRTFCLDZDQUF5Qjs7SUFHekIseUNBQXFCOztJQUVyQiwyQ0FBdUI7O0lBRXZCLDBDQUFzQjs7SUFzSHRCLDJDQXdDQzs7SUFFRCwyQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlID0ge307IC8vIGF1dG9jb21wbGV0ZSBkYXRhIGZvciBlYWNoIGZhY2V0XG5cbiAgcHVibGljIGxvY2tlZEZhY2V0cyA9IHt9OyAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcblxuICAvLyBzdG9yZSB0aGUgbGFzdCByZXNwb25zZSBzbyB0aGUgY29tcG9uZW50IGNhbiBiZSByZW5kZXJlZCBhZ2FpbiB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgcHVibGljIGxhc3REYXRhID0ge307XG5cbiAgcHVibGljIGNsb3NlZEV5ZXMgPSBbXTsgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xuXG4gIHB1YmxpYyBvcGVuVGlwcHkgPSAnJzsgLy8gdGlwZSBvZiBlbnRpdHkgb2YgdGhlIGN1cnJlbnRseSBvcGVuIHRpcHB5XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5sYXN0RGF0YSA9IGRhdGE7XG4gICAgY29uc3QgaGVhZGVyczogYW55W10gPSBbXTtcbiAgICBjb25zdCBpbnB1dHM6IGFueVtdID0gW107XG4gICAgY29uc3QgZmFjZXREYXRhID0gZGF0YTtcbiAgICBjb25zdCB7IGxvY2tlZEZhY2V0cyB9ID0gdGhpczsgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXG4gICAgY29uc3QgeyBjbG9zZWRFeWVzIH0gPSB0aGlzOyAvLyBsaXN0IG9mIGNsb3NlZCBleWVzXG5cbiAgICAvLyB3aGVuIGZhY2V0IGRhdGEgY2hhbmdlcywgZGVzdHJveSBldmVyeSB0aXBweSBhbmQgcmVzZXQgYXV0b2NvbXBsZXRlIGRhdGEuXG4gICAgT2JqZWN0LmtleXModGhpcy5hdXRvQ29tcGxldGUpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBpZiAodGhpcy5hdXRvQ29tcGxldGVbaWRdICYmIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweSkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkuZGVzdHJveSgpOyAvLyBkZXN0cm95XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUgPSB7fTsgLy8gcmVzZXQgZGF0YVxuXG4gICAgZmFjZXREYXRhLmZvckVhY2goKGZhY2V0LCBqKSA9PiB7XG4gICAgICAvKlxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgLS0tLy8tLS1cbiAgICAgICAjIExPR0lDOlxuICAgICAgIEVhY2ggZmFjZXQgY2FuIGJlIFwibG9ja2VkXCIgb3IgXCJlbmFibGVkXCIuXG4gICAgICAgaWYgYSBmYWNldCBpcyBsb2NrZWQsIGl0IG1lYW5zIHRoYXQgaXQgY2Fubm90IGJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAgICAgaWYgYSBmYWNldCBpcyBlbmFibGVkIG9yIGRpc2FibGVkIGl0IG1lYW5zIHRoYXQgdGhlIGZpbHRlciBpcyBhY3RpdmUgb3IgaW5hY3RpdmUuXG5cbiAgICAgICB0aGVyZSBhcmUgMiB3YXlzIHRoYXQgYSBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIlxuICAgICAgICAgMS4gV2hlbiBhIGJ1YmJsZSBvZiB0aGUgc2FtZSB0eXBlIGlzIHNlbGVjdGVkIGluIHRoZSBjaGFydFxuICAgICAgICAgMi4gV2hlbiB0aGF0IGZhY2V0IGlzIHRoZSBvbmx5IGVuYWJsZWQgZmFjZXRcblxuICAgICAgIFRoZSBmaXJzdCBjYXNlIGlzIG1hbmFnZWQgYnkgcHVzaGluZyB0aGUgc2VsZWN0ZWQgYnViYmxlJ3MgSUQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgYXJyYXlcbiAgICAgICBvZiBsb2NrZWRGYWNldHMuXG4gICAgICAgVGhlIHNlY29uZCBjYXNlIGlzIG1hbmFnZWQgYnkgcHVzaGluZyBhIFwiTE9DS19MQVNUXCIgc3RyaW5nXG4gICAgICAgdG8gdGhlIGxvY2tlZEZhY2V0cyBhcnJheSBvZiB0aGUgbGFzdFxuICAgICAgIGVuYWJsZWQgZmFjZXQuXG4gICAgICAqL1xuICAgICAgT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgLy8gY2xlYXIgYWxsIGxvY2tlZCBmYWNldHMgYXJyYXlzIGZyb20gXCJMT0NLX0xBU1RcIiB2YWx1ZXMgKHJlc2V0IGFsbCBsb2NrcylcbiAgICAgICAgY29uc3QgaW5kZXggPSBsb2NrZWRGYWNldHNba2V5XS5pbmRleE9mKCdMT0NLX0xBU1QnKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBsb2NrZWRGYWNldHNba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChjbG9zZWRFeWVzKSB7XG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmxlbmd0aCA9PT0gZmFjZXREYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zdCBsYXN0RmFjZXQgPSBmYWNldERhdGEuZmluZCgoZikgPT4gIWNsb3NlZEV5ZXMuaW5jbHVkZXMoZi50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpO1xuICAgICAgICAgIGlmIChsYXN0RmFjZXQpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZWRFeWVzW2xhc3RGYWNldC50eXBlXSkge1xuICAgICAgICAgICAgICBsb2NrZWRGYWNldHNbbGFzdEZhY2V0LnR5cGVdLnB1c2goJ0xPQ0tfTEFTVCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9ja2VkRmFjZXRzW2xhc3RGYWNldC50eXBlXSA9IFsnTE9DS19MQVNUJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmluY2x1ZGVzKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSkgeyAvLyBjaGVjayBpZiB0aGUgZXllcyBhcmUgb3BlblxuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykubGVuZ3RoKSB7IC8vIGNoZWNrIGlmIGJ1YmJsZSBjaGFydCB3YW50cyB0byBsb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSAmJiBsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFjZXQubG9ja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBoZWFkZXJDbGFzc2VzID0gW107XG4gICAgICBjb25zdCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgeyBoZWFkZXJDbGFzc2VzLnB1c2goJ2lzLWRpc2FibGVkJyk7IH1cbiAgICAgIGlmIChmYWNldFsnY2xhc3MtbmFtZSddKSB7XG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldFsnY2xhc3MtbmFtZSddfWApO1xuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0WydjbGFzcy1uYW1lJ119YCk7XG4gICAgICB9XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGljb25DbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgdGV4dDogZmFjZXQubGFiZWwsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBmYWNldC5jb3VudCxcbiAgICAgICAgaWNvblJpZ2h0OiBmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcsXG4gICAgICAgIGNsYXNzZXM6XG4gICAgICAgICAgaGVhZGVyQ2xhc3Nlcy5qb2luKCcgJylcbiAgICAgICAgICArIChmYWNldC5sb2NrZWRcbiAgICAgICAgICAgID8gJyBpcy1ibG9ja2VkJ1xuICAgICAgICAgICAgOiAnIG5vdC1ibG9ja2VkJyksXG4gICAgICAgIHBheWxvYWQ6IGZhY2V0LmxvY2tlZCA9PT0gdHJ1ZSA/IG51bGwgOiBmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSxcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGAke2ZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpfS0ke2p9YCxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZhY2V0WydpbnB1dC1wbGFjZWhvbGRlciddLFxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFmYWNldC5lbmFibGVkLFxuICAgICAgICAgICAgICAgIGlucHV0UGF5bG9hZDogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKX0tc2VhcmNoYCxcbiAgICAgICAgICAgICAgICBpY29uUGF5bG9hZDogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKX0tc2VhcmNoYCxcbiAgICAgICAgICAgICAgICBlbnRlclBheWxvYWQ6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSl9LXNlYXJjaGAsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgnICcsICctJykpfS1zZWFyY2hgLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB6aXBwaW5nIGFycmF5cyB0byByZW5kZXIgd2lkZ2V0cyB3aXRoIHNlcGFyYXRlIGRhdGEgKHNlZSBob21lLWxheW91dC5odG1sKVxuICAgIHJldHVybiBoZWFkZXJzLm1hcCgoaCwgaSkgPT4gKHsgaGVhZGVyOiBoLCBpbnB1dDogaW5wdXRzW2ldIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyB0aXBweU1ha2VyID0gKGlkKSA9PiB7XG4gICAgLypcbiAgICAgIEJ1aWxkcyBvciB1cGRhdGVzIFRpcHB5IGZvciB0aGUgaW5wdXQgaW4gdXNlIChpZClcbiAgICAqL1xuICAgIGNvbnN0IG5ld0lkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpO1xuICAgIC8vIGNyZWF0ZSBkYXRhIGZvciB0aGlzIGZhY2V0XG4gICAgaWYgKCF0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF0pIHtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXSA9IHtcbiAgICAgICAgdGlwcHk6IHVuZGVmaW5lZCwgLy8gdGlwcHkgZGF0YSAvIGNvbmZpZ1xuICAgICAgICBvcGVuOiB0cnVlLCAvLyBzaG93IG9yIGhpZGUgdGlwcHlcbiAgICAgIH07XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXTtcbiAgICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAnYXctc2ltcGxlLWF1dG9jb21wbGV0ZV9fdGVtcGxhdGUnLFxuICAgICAgICApWzBdO1xuICAgICAgICBjb250ZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG4gICAgICAgIHJldHVybiBjb250ZW50Tm9kZTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghYWMudGlwcHkpIHtcbiAgICAgICAgLy8gdGFyZ2V0IHRoZSBjb3JyZWN0IHRoaXMuYXV0b0NvbXBsZXRlW2lkXSBpbnB1dCBjbGFzc1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5ld0lkKVsxXTtcbiAgICAgICAgYWMudGlwcHkgPSB0aXBweSh0YXJnZXQsIHtcbiAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBhdy1ob21lX19mYWNldC10aXBweScsXG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB9KTsgLy8gYXR0YWNoIHRpcHB5IHRvIGlucHV0IHR5cGUgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXTtcbiAgICBpZiAoYWMudGlwcHkpIHtcbiAgICAgIGFjLnRpcHB5LnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGlwcHlDbG9zZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG5ld0lkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpO1xuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF0pIHtcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdO1xuICAgICAgaWYgKGFjLnRpcHB5KSB7XG4gICAgICAgIGFjLnRpcHB5LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==