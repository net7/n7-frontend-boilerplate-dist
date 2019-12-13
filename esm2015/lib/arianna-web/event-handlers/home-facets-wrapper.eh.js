/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwHomeFacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.handleEyeClick = (/**
         * @param {?} type
         * @return {?}
         */
        type => {
            /*
              Toggles the status of the selected eye, then reloads the component.
            */
            if (this.dataSource.closedEyes) {
                /** @type {?} */
                let i = this.dataSource.closedEyes.indexOf(type);
                if (i >= 0) { // if the eye was closed
                    this.dataSource.closedEyes.splice(i, 1); // open the eye
                }
                else { // if the eye was open
                    this.dataSource.closedEyes.push(type); // close the eye
                }
            }
            else {
                this.dataSource.closedEyes = [type];
            }
            this.dataSource.update(this.dataSource.lastData); // reload the component with the same data
        });
        this.updateFilters = (/**
         * @param {?} selectedBubble
         * @return {?}
         */
        selectedBubble => {
            /*
              Adds (or removes) the ID of the selected bubble from the array of that type of entity.
              Example:
                • Click on bubble "0263a407-d0dd" of type "org"
                • Add "0263a407-d0dd" to array "org".
              Result:
                • lockedFacets = { "org":[ "0263a407-d0dd" ] }
            */
            selectedBubble.entity.id.replace(/ /g, '-'); // fix for space in ID
            // fix for space in ID
            const { id, typeOfEntity } = selectedBubble.entity // payload is the selected bubble
            ;
            if (!this.dataSource.lockedFacets[typeOfEntity]) {
                this.dataSource.lockedFacets[typeOfEntity] = [];
            }
            if (this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                /** @type {?} */
                let i = this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
            }
            else {
                this.dataSource.lockedFacets[typeOfEntity].push(id);
            }
            this.dataSource.update(this.dataSource.lastData); // reload the component with the same data
        });
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                // toggle visibility from facet header
                case 'aw-home-facets-wrapper.click':
                    if (payload === null) { // interrupt event for locked facets
                        break;
                    }
                    this.emitOuter('click', payload);
                    this.handleEyeClick(payload);
                    break;
                // change search input text
                case 'aw-home-facets-wrapper.change':
                    this.emitOuter('change', payload);
                    break;
                // pressed return while typing in search
                case 'aw-home-facets-wrapper.enter':
                    this.emitOuter('enter', payload);
                    break;
                default:
                    console.warn('unhandled inner event of type:', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.facetswrapperresponse': // incoming autocomplete response
                    this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.lockfilter':
                    this.updateFilters(payload);
                    break;
                case 'aw-home-layout.tagclick':
                    Object.keys(this.dataSource.lockedFacets).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    key => {
                        if (this.dataSource.lockedFacets[key].includes(payload)) {
                            this.dataSource.lockedFacets[key].splice(this.dataSource.lockedFacets[key].indexOf(payload), 1);
                        }
                    }));
                    this.dataSource.update(this.dataSource.lastData);
                    break;
                default:
                    // console.warn('unhandled outer event of type', type)
                    break;
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.handleEyeClick;
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.updateFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFlBQVk7SUFBdkQ7O1FBa0RFLG1CQUFjOzs7O1FBQUcsSUFBSSxDQUFDLEVBQUU7WUFDdEI7O2NBRUU7WUFDRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFOztvQkFDMUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLHdCQUF3QjtvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLGVBQWU7aUJBQ3hEO3FCQUFNLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxnQkFBZ0I7aUJBQ3ZEO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNwQztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQywwQ0FBMEM7UUFDN0YsQ0FBQyxFQUFBO1FBRUQsa0JBQWE7Ozs7UUFBRyxjQUFjLENBQUMsRUFBRTtZQUMvQjs7Ozs7OztjQU9FO1lBQ0YsY0FBYyxDQUFDLE1B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QUMsRUFBRTs0QkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTt5QkFDaEc7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDaEQsTUFBTTtnQkFDUjtvQkFDRSxzREFBc0Q7b0JBQ3RELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQXlDRjs7O0lBdkNDLCtDQWVDOztJQUVELDhDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgLy8gdG9nZ2xlIHZpc2liaWxpdHkgZnJvbSBmYWNldCBoZWFkZXJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09IG51bGwpIHsgLy8gaW50ZXJydXB0IGV2ZW50IGZvciBsb2NrZWQgZmFjZXRzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFeWVDbGljayhwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjaGFuZ2Ugc2VhcmNoIGlucHV0IHRleHRcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gcHJlc3NlZCByZXR1cm4gd2hpbGUgdHlwaW5nIGluIHNlYXJjaFxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZW50ZXInLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOicsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJyZXNwb25zZSc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweU1ha2VyKHBheWxvYWQucmVzcG9uc2UsIHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5sb2NrZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMocGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uaW5jbHVkZXMocGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLnNwbGljZSh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uaW5kZXhPZihwYXlsb2FkKSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBvdXRlciBldmVudCBvZiB0eXBlJywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUV5ZUNsaWNrID0gdHlwZSA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHN0YXR1cyBvZiB0aGUgc2VsZWN0ZWQgZXllLCB0aGVuIHJlbG9hZHMgdGhlIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcykge1xuICAgICAgbGV0IGkgPSB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5pbmRleE9mKHR5cGUpXG4gICAgICBpZiAoaSA+PSAwKSB7IC8vIGlmIHRoZSBleWUgd2FzIGNsb3NlZFxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5zcGxpY2UoaSwgMSkgLy8gb3BlbiB0aGUgZXllXG4gICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgZXllIHdhcyBvcGVuXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLnB1c2godHlwZSkgLy8gY2xvc2UgdGhlIGV5ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcyA9IFt0eXBlXVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSkgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzID0gc2VsZWN0ZWRCdWJibGUgPT4ge1xuICAgIC8qXG4gICAgICBBZGRzIChvciByZW1vdmVzKSB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIGJ1YmJsZSBmcm9tIHRoZSBhcnJheSBvZiB0aGF0IHR5cGUgb2YgZW50aXR5LlxuICAgICAgRXhhbXBsZTpcbiAgICAgICAg4oCiIENsaWNrIG9uIGJ1YmJsZSBcIjAyNjNhNDA3LWQwZGRcIiBvZiB0eXBlIFwib3JnXCJcbiAgICAgICAg4oCiIEFkZCBcIjAyNjNhNDA3LWQwZGRcIiB0byBhcnJheSBcIm9yZ1wiLlxuICAgICAgUmVzdWx0OlxuICAgICAgICDigKIgbG9ja2VkRmFjZXRzID0geyBcIm9yZ1wiOlsgXCIwMjYzYTQwNy1kMGRkXCIgXSB9XG4gICAgKi9cbiAgICBzZWxlY3RlZEJ1YmJsZS5lbnRpdHkuaWQucmVwbGFjZSgvIC9nLCAnLScpIC8vIGZpeCBmb3Igc3BhY2UgaW4gSURcbiAgICBjb25zdCB7IGlkLCB0eXBlT2ZFbnRpdHkgfSA9IHNlbGVjdGVkQnViYmxlLmVudGl0eSAvLyBwYXlsb2FkIGlzIHRoZSBzZWxlY3RlZCBidWJibGVcbiAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldID0gW11cbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGxldCBpID0gdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLmluZGV4T2YoaWQpXG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5wdXNoKGlkKVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSkgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXG4gIH1cbn0iXX0=