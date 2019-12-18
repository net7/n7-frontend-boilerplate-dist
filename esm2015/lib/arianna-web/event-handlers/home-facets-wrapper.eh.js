/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class AwHomeFacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.changedInput$ = new Subject();
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
        this.changedInput$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            this.emitOuter('change', payload);
        }));
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
                    this.changedInput$.next(payload);
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
                case 'aw-home-layout.clearselection':
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
    /**
     * @type {?}
     * @private
     */
    AwHomeFacetsWrapperEH.prototype.changedInput$;
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.handleEyeClick;
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.updateFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFlBQVk7SUFBdkQ7O1FBRVUsa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQXlEbkQsbUJBQWM7Ozs7UUFBRyxJQUFJLENBQUMsRUFBRTtZQUN0Qjs7Y0FFRTtZQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O29CQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsZUFBZTtpQkFDeEQ7cUJBQU0sRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLGdCQUFnQjtpQkFDdkQ7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFD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Q0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDM0UsTUFBTTtnQkFDUixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0IsTUFBTTtnQkFDUixLQUFLLHlCQUF5QjtvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU87Ozs7b0JBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3RELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3lCQUNoRztvQkFDSCxDQUFDLEVBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNoRCxNQUFNO2dCQUNSO29CQUNFLHNEQUFzRDtvQkFDdEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBeUNGOzs7Ozs7SUFoR0MsOENBQW1EOztJQXlEbkQsK0NBZUM7O0lBRUQsOENBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwcml2YXRlIGNoYW5nZWRJbnB1dCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KClcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuY2hhbmdlZElucHV0JC5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUocGF5bG9hZCA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgcGF5bG9hZCk7XG4gICAgfSlcblxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAvLyB0b2dnbGUgdmlzaWJpbGl0eSBmcm9tIGZhY2V0IGhlYWRlclxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gbnVsbCkgeyAvLyBpbnRlcnJ1cHQgZXZlbnQgZm9yIGxvY2tlZCBmYWNldHNcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZUV5ZUNsaWNrKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIGNoYW5nZSBzZWFyY2ggaW5wdXQgdGV4dFxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5jaGFuZ2VkSW5wdXQkLm5leHQocGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gcHJlc3NlZCByZXR1cm4gd2hpbGUgdHlwaW5nIGluIHNlYXJjaFxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZW50ZXInLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOicsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJyZXNwb25zZSc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweU1ha2VyKHBheWxvYWQucmVzcG9uc2UsIHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5sb2NrZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMocGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uaW5jbHVkZXMocGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLnNwbGljZSh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uaW5kZXhPZihwYXlsb2FkKSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIG91dGVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRXllQ2xpY2sgPSB0eXBlID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc3RhdHVzIG9mIHRoZSBzZWxlY3RlZCBleWUsIHRoZW4gcmVsb2FkcyB0aGUgY29tcG9uZW50LlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzKSB7XG4gICAgICBsZXQgaSA9IHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLmluZGV4T2YodHlwZSlcbiAgICAgIGlmIChpID49IDApIHsgLy8gaWYgdGhlIGV5ZSB3YXMgY2xvc2VkXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLnNwbGljZShpLCAxKSAvLyBvcGVuIHRoZSBleWVcbiAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBleWUgd2FzIG9wZW5cbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMucHVzaCh0eXBlKSAvLyBjbG9zZSB0aGUgZXllXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzID0gW3R5cGVdXG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKSAvLyByZWxvYWQgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcnMgPSBzZWxlY3RlZEJ1YmJsZSA9PiB7XG4gICAgLypcbiAgICAgIEFkZHMgKG9yIHJlbW92ZXMpIHRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgYnViYmxlIGZyb20gdGhlIGFycmF5IG9mIHRoYXQgdHlwZSBvZiBlbnRpdHkuXG4gICAgICBFeGFtcGxlOlxuICAgICAgICDigKIgQ2xpY2sgb24gYnViYmxlIFwiMDI2M2E0MDctZDBkZFwiIG9mIHR5cGUgXCJvcmdcIlxuICAgICAgICDigKIgQWRkIFwiMDI2M2E0MDctZDBkZFwiIHRvIGFycmF5IFwib3JnXCIuXG4gICAgICBSZXN1bHQ6XG4gICAgICAgIOKAoiBsb2NrZWRGYWNldHMgPSB7IFwib3JnXCI6WyBcIjAyNjNhNDA3LWQwZGRcIiBdIH1cbiAgICAqL1xuICAgIHNlbGVjdGVkQnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8gL2csICctJykgLy8gZml4IGZvciBzcGFjZSBpbiBJRFxuICAgIGNvbnN0IHsgaWQsIHR5cGVPZkVudGl0eSB9ID0gc2VsZWN0ZWRCdWJibGUuZW50aXR5IC8vIHBheWxvYWQgaXMgdGhlIHNlbGVjdGVkIGJ1YmJsZVxuICAgIGlmICghdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0gPSBbXVxuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLmluY2x1ZGVzKGlkKSkge1xuICAgICAgbGV0IGkgPSB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uaW5kZXhPZihpZClcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLnB1c2goaWQpXG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKSAvLyByZWxvYWQgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgfVxufSJdfQ==