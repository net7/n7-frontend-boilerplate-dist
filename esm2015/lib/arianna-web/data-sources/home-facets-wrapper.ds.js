import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
export class AwHomeFacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.autoComplete = {}; // autocomplete data for each facet
        this.lockedFacets = {}; // locked means that the eye cannot be closed
        // store the last response so the component can be rendered again with the same data
        this.lastData = {};
        this.closedEyes = []; // list of closed eyes
        this.openTippy = ''; // tipe of entity of the currently open tippy
        this.tippyMaker = (id) => {
            /*
              Builds or updates Tippy for the input in use (id)
            */
            const newId = id.replace(/ /g, '-');
            // create data for this facet
            if (!this.autoComplete[newId]) {
                this.autoComplete[newId] = {
                    tippy: undefined,
                    open: true,
                };
                const ac = this.autoComplete[newId];
                const getContent = () => {
                    const contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                };
                if (!ac.tippy) {
                    // target the correct this.autoComplete[id] input class
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
            const ac = this.autoComplete[newId];
            if (ac.tippy) {
                ac.tippy.show();
            }
        };
        this.tippyClose = (id) => {
            const newId = id.replace(/ /g, '-');
            if (this.autoComplete[newId]) {
                const ac = this.autoComplete[newId];
                if (ac.tippy) {
                    ac.tippy.hide();
                }
            }
        };
    }
    transform(data) {
        this.lastData = data;
        const headers = [];
        const inputs = [];
        const facetData = data;
        const { lockedFacets } = this; // locked means that the eye cannot be closed
        const { closedEyes } = this; // list of closed eyes
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((id) => {
            if (this.autoComplete[id] && this.autoComplete[id].tippy) {
                this.autoComplete[id].tippy.destroy(); // destroy
            }
        });
        this.autoComplete = {}; // reset data
        facetData.forEach((facet, j) => {
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
            Object.keys(lockedFacets).forEach((key) => {
                // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                const index = lockedFacets[key].indexOf('LOCK_LAST');
                if (index >= 0) {
                    lockedFacets[key].splice(index, 1);
                }
            });
            if (closedEyes) {
                if (closedEyes.length === facetData.length - 1) {
                    const lastFacet = facetData.find((f) => !closedEyes.includes(f.type.replace(/ /g, '-')));
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
            const headerClasses = [];
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
        });
        // zipping arrays to render widgets with separate data (see home-layout.html)
        return headers.map((h, i) => ({ header: h, input: inputs[i] }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxVQUFVO0lBQXJEOztRQUNVLGlCQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DO1FBRXZELGlCQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsNkNBQTZDO1FBRXZFLG9GQUFvRjtRQUM3RSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjtRQUV2QyxjQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsNkNBQTZDO1FBc0g3RCxlQUFVLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUN6Qjs7Y0FFRTtZQUNGLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRztvQkFDekIsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUM7Z0JBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO29CQUN0QixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ2pELGtD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QTZFO1FBQzdFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQXFERiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBhdXRvQ29tcGxldGUgPSB7fTsgLy8gYXV0b2NvbXBsZXRlIGRhdGEgZm9yIGVhY2ggZmFjZXRcclxuXHJcbiAgcHVibGljIGxvY2tlZEZhY2V0cyA9IHt9OyAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcclxuXHJcbiAgLy8gc3RvcmUgdGhlIGxhc3QgcmVzcG9uc2Ugc28gdGhlIGNvbXBvbmVudCBjYW4gYmUgcmVuZGVyZWQgYWdhaW4gd2l0aCB0aGUgc2FtZSBkYXRhXHJcbiAgcHVibGljIGxhc3REYXRhID0ge307XHJcblxyXG4gIHB1YmxpYyBjbG9zZWRFeWVzID0gW107IC8vIGxpc3Qgb2YgY2xvc2VkIGV5ZXNcclxuXHJcbiAgcHVibGljIG9wZW5UaXBweSA9ICcnOyAvLyB0aXBlIG9mIGVudGl0eSBvZiB0aGUgY3VycmVudGx5IG9wZW4gdGlwcHlcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICB0aGlzLmxhc3REYXRhID0gZGF0YTtcclxuICAgIGNvbnN0IGhlYWRlcnM6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBpbnB1dHM6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBmYWNldERhdGEgPSBkYXRhO1xyXG4gICAgY29uc3QgeyBsb2NrZWRGYWNldHMgfSA9IHRoaXM7IC8vIGxvY2tlZCBtZWFucyB0aGF0IHRoZSBleWUgY2Fubm90IGJlIGNsb3NlZFxyXG4gICAgY29uc3QgeyBjbG9zZWRFeWVzIH0gPSB0aGlzOyAvLyBsaXN0IG9mIGNsb3NlZCBleWVzXHJcblxyXG4gICAgLy8gd2hlbiBmYWNldCBkYXRhIGNoYW5nZXMsIGRlc3Ryb3kgZXZlcnkgdGlwcHkgYW5kIHJlc2V0IGF1dG9jb21wbGV0ZSBkYXRhLlxyXG4gICAgT2JqZWN0LmtleXModGhpcy5hdXRvQ29tcGxldGUpLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtpZF0gJiYgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5KSB7XHJcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5LmRlc3Ryb3koKTsgLy8gZGVzdHJveVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXV0b0NvbXBsZXRlID0ge307IC8vIHJlc2V0IGRhdGFcclxuXHJcbiAgICBmYWNldERhdGEuZm9yRWFjaCgoZmFjZXQsIGopID0+IHtcclxuICAgICAgLypcclxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxyXG4gICAgICAgYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cclxuICAgICAgIC0tLS8vLS0tXHJcbiAgICAgICAjIExPR0lDOlxyXG4gICAgICAgRWFjaCBmYWNldCBjYW4gYmUgXCJsb2NrZWRcIiBvciBcImVuYWJsZWRcIi5cclxuICAgICAgIGlmIGEgZmFjZXQgaXMgbG9ja2VkLCBpdCBtZWFucyB0aGF0IGl0IGNhbm5vdCBiZSBlbmFibGVkIG9yIGRpc2FibGVkLlxyXG4gICAgICAgaWYgYSBmYWNldCBpcyBlbmFibGVkIG9yIGRpc2FibGVkIGl0IG1lYW5zIHRoYXQgdGhlIGZpbHRlciBpcyBhY3RpdmUgb3IgaW5hY3RpdmUuXHJcblxyXG4gICAgICAgdGhlcmUgYXJlIDIgd2F5cyB0aGF0IGEgZmFjZXQgY2FuIGJlIFwibG9ja2VkXCJcclxuICAgICAgICAgMS4gV2hlbiBhIGJ1YmJsZSBvZiB0aGUgc2FtZSB0eXBlIGlzIHNlbGVjdGVkIGluIHRoZSBjaGFydFxyXG4gICAgICAgICAyLiBXaGVuIHRoYXQgZmFjZXQgaXMgdGhlIG9ubHkgZW5hYmxlZCBmYWNldFxyXG5cclxuICAgICAgIFRoZSBmaXJzdCBjYXNlIGlzIG1hbmFnZWQgYnkgcHVzaGluZyB0aGUgc2VsZWN0ZWQgYnViYmxlJ3MgSUQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgYXJyYXlcclxuICAgICAgIG9mIGxvY2tlZEZhY2V0cy5cclxuICAgICAgIFRoZSBzZWNvbmQgY2FzZSBpcyBtYW5hZ2VkIGJ5IHB1c2hpbmcgYSBcIkxPQ0tfTEFTVFwiIHN0cmluZ1xyXG4gICAgICAgdG8gdGhlIGxvY2tlZEZhY2V0cyBhcnJheSBvZiB0aGUgbGFzdFxyXG4gICAgICAgZW5hYmxlZCBmYWNldC5cclxuICAgICAgKi9cclxuICAgICAgT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAvLyBjbGVhciBhbGwgbG9ja2VkIGZhY2V0cyBhcnJheXMgZnJvbSBcIkxPQ0tfTEFTVFwiIHZhbHVlcyAocmVzZXQgYWxsIGxvY2tzKVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbG9ja2VkRmFjZXRzW2tleV0uaW5kZXhPZignTE9DS19MQVNUJyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgIGxvY2tlZEZhY2V0c1trZXldLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGNsb3NlZEV5ZXMpIHtcclxuICAgICAgICBpZiAoY2xvc2VkRXllcy5sZW5ndGggPT09IGZhY2V0RGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0RmFjZXQgPSBmYWNldERhdGEuZmluZCgoZikgPT4gIWNsb3NlZEV5ZXMuaW5jbHVkZXMoZi50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpO1xyXG4gICAgICAgICAgaWYgKGxhc3RGYWNldCkge1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VkRXllc1tsYXN0RmFjZXQudHlwZV0pIHtcclxuICAgICAgICAgICAgICBsb2NrZWRGYWNldHNbbGFzdEZhY2V0LnR5cGVdLnB1c2goJ0xPQ0tfTEFTVCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGxvY2tlZEZhY2V0c1tsYXN0RmFjZXQudHlwZV0gPSBbJ0xPQ0tfTEFTVCddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbG9zZWRFeWVzLmluY2x1ZGVzKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKSkgeyAvLyBjaGVjayBpZiB0aGUgZXllcyBhcmUgb3BlblxyXG4gICAgICAgICAgZmFjZXQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmYWNldC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykubGVuZ3RoKSB7IC8vIGNoZWNrIGlmIGJ1YmJsZSBjaGFydCB3YW50cyB0byBsb2NrIHRoaXMgZmFjZXRcclxuICAgICAgICBpZiAobG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdICYmIGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBpZiBidWJibGUgY2hhcnQgc2F5IGxvY2sgdGhpcyBmYWNldCwgbG9jayBpdFxyXG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhlYWRlckNsYXNzZXMgPSBbXTtcclxuICAgICAgY29uc3QgaWNvbkNsYXNzZXMgPSBbZmFjZXQuaWNvbl07XHJcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgeyBoZWFkZXJDbGFzc2VzLnB1c2goJ2lzLWRpc2FibGVkJyk7IH1cclxuICAgICAgaWYgKGZhY2V0WydjbGFzcy1uYW1lJ10pIHtcclxuICAgICAgICBoZWFkZXJDbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXRbJ2NsYXNzLW5hbWUnXX1gKTtcclxuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0WydjbGFzcy1uYW1lJ119YCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gbWFrZSBhcnJheSBvZiBoZWFkZXJzIGRhdGFcclxuICAgICAgaGVhZGVycy5wdXNoKHtcclxuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxyXG4gICAgICAgIHRleHQ6IGZhY2V0LmxhYmVsLFxyXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBmYWNldC5jb3VudCxcclxuICAgICAgICBpY29uUmlnaHQ6IGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyxcclxuICAgICAgICBjbGFzc2VzOlxyXG4gICAgICAgICAgaGVhZGVyQ2xhc3Nlcy5qb2luKCcgJylcclxuICAgICAgICAgICsgKGZhY2V0LmxvY2tlZFxyXG4gICAgICAgICAgICA/ICcgaXMtYmxvY2tlZCdcclxuICAgICAgICAgICAgOiAnIG5vdC1ibG9ja2VkJyksXHJcbiAgICAgICAgcGF5bG9hZDogZmFjZXQubG9ja2VkID09PSB0cnVlID8gbnVsbCA6IGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxyXG4gICAgICBpbnB1dHMucHVzaCh7XHJcbiAgICAgICAgc2VjdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW5wdXRzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGAke2ZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpfS0ke2p9YCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmYWNldFsnaW5wdXQtcGxhY2Vob2xkZXInXSxcclxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFBheWxvYWQ6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSl9LXNlYXJjaGAsXHJcbiAgICAgICAgICAgICAgICBpY29uUGF5bG9hZDogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKX0tc2VhcmNoYCxcclxuICAgICAgICAgICAgICAgIGVudGVyUGF5bG9hZDogYCR7U3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgvIC9nLCAnLScpKX0tc2VhcmNoYCxcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoJyAnLCAnLScpKX0tc2VhcmNoYCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXHJcbiAgICByZXR1cm4gaGVhZGVycy5tYXAoKGgsIGkpID0+ICh7IGhlYWRlcjogaCwgaW5wdXQ6IGlucHV0c1tpXSB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGlwcHlNYWtlciA9IChpZCkgPT4ge1xyXG4gICAgLypcclxuICAgICAgQnVpbGRzIG9yIHVwZGF0ZXMgVGlwcHkgZm9yIHRoZSBpbnB1dCBpbiB1c2UgKGlkKVxyXG4gICAgKi9cclxuICAgIGNvbnN0IG5ld0lkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpO1xyXG4gICAgLy8gY3JlYXRlIGRhdGEgZm9yIHRoaXMgZmFjZXRcclxuICAgIGlmICghdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXSA9IHtcclxuICAgICAgICB0aXBweTogdW5kZWZpbmVkLCAvLyB0aXBweSBkYXRhIC8gY29uZmlnXHJcbiAgICAgICAgb3BlbjogdHJ1ZSwgLy8gc2hvdyBvciBoaWRlIHRpcHB5XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdO1xyXG4gICAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgICdhdy1zaW1wbGUtYXV0b2NvbXBsZXRlX190ZW1wbGF0ZScsXHJcbiAgICAgICAgKVswXTtcclxuICAgICAgICBjb250ZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnROb2RlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKCFhYy50aXBweSkge1xyXG4gICAgICAgIC8vIHRhcmdldCB0aGUgY29ycmVjdCB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gaW5wdXQgY2xhc3NcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG5ld0lkKVsxXTtcclxuICAgICAgICBhYy50aXBweSA9IHRpcHB5KHRhcmdldCwge1xyXG4gICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXHJcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIGFycm93OiBmYWxzZSxcclxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxyXG4gICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxyXG4gICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgYXctaG9tZV9fZmFjZXQtdGlwcHknLFxyXG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgfSk7IC8vIGF0dGFjaCB0aXBweSB0byBpbnB1dCB0eXBlIHRleHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF07XHJcbiAgICBpZiAoYWMudGlwcHkpIHtcclxuICAgICAgYWMudGlwcHkuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRpcHB5Q2xvc2UgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld0lkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpO1xyXG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXSkge1xyXG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXTtcclxuICAgICAgaWYgKGFjLnRpcHB5KSB7XHJcbiAgICAgICAgYWMudGlwcHkuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==