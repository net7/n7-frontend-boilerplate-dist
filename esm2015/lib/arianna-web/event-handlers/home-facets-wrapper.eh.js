/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-facets-wrapper.eh.ts
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
        (type) => {
            /*
              Toggles the status of the selected eye, then reloads the component.
            */
            if (this.dataSource.closedEyes) {
                /** @type {?} */
                const i = this.dataSource.closedEyes.indexOf(type);
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
        (selectedBubble) => {
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
            const { id, typeOfEntity } = selectedBubble.entity;
            if (!this.dataSource.lockedFacets[typeOfEntity]) {
                this.dataSource.lockedFacets[typeOfEntity] = [];
            }
            if (this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                /** @type {?} */
                const i = this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
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
        (payload) => {
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
                    this.dataSource.openTippy = payload.inputPayload.replace('-search', '');
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
                case 'aw-home-layout.facetswrapperrequest': // incoming autocomplete response
                    this.dataSource.tippyMaker(payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.facetswrapperclose': // incoming autocomplete response
                    this.dataSource.tippyClose(payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.facetswrapperresponse': // incoming autocomplete response
                    // this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.lockfilter':
                    this.updateFilters(payload);
                    break;
                case 'aw-home-layout.tagclick':
                    Object.keys(this.dataSource.lockedFacets).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    (key) => {
                        if (this.dataSource.lockedFacets[key].includes(payload)) {
                            this.dataSource.lockedFacets[key].splice(this.dataSource.lockedFacets[key].indexOf(payload), 1);
                        }
                    }));
                    this.dataSource.update(this.dataSource.lastData);
                    break;
                case 'aw-home-layout.clearselection':
                    this.dataSource.lockedFacets = {};
                    this.dataSource.closedEyes = [];
                    this.dataSource.update(this.dataSource.lastData);
                    break;
                case 'aw-home-layout.facetclick':
                    {
                        const { openTippy } = this.dataSource;
                        if (this.dataSource.lockedFacets[openTippy]) {
                            if (this.dataSource.lockedFacets[openTippy].indexOf(payload) === -1) {
                                this.dataSource.lockedFacets[openTippy].push(payload);
                            }
                        }
                        else {
                            this.dataSource.lockedFacets[openTippy] = [payload];
                        }
                        this.dataSource.update(this.dataSource.lastData);
                    }
                    break;
                default:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZO0lBQXZEOztRQUNVLGtCQUFhLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUE7UUE4RW5ELG1CQUFjOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4Qjs7Y0FFRTtZQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O3NCQUN4QixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtpQkFDekQ7cUJBQU0sRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDeEQ7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFB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LEdBQUcsRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2dCQUNSLEtBQUssMkJBQTJCO29CQUFFOzhCQUMxQixFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVO3dCQUNyQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzRCQUMzQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUN2RDt5QkFDRjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNyRDt3QkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDtvQkFBQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQXlDRjs7Ozs7O0lBckhDLDhDQUFtRDs7SUE4RW5ELCtDQWVDOztJQUVELDhDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgY2hhbmdlZElucHV0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKVxuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5jaGFuZ2VkSW5wdXQkLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHBheWxvYWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IGZyb20gZmFjZXQgaGVhZGVyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSBudWxsKSB7IC8vIGludGVycnVwdCBldmVudCBmb3IgbG9ja2VkIGZhY2V0c1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXllQ2xpY2socGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIGNoYW5nZSBzZWFyY2ggaW5wdXQgdGV4dFxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9wZW5UaXBweSA9IHBheWxvYWQuaW5wdXRQYXlsb2FkLnJlcGxhY2UoJy1zZWFyY2gnLCAnJyk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VkSW5wdXQkLm5leHQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIHByZXNzZWQgcmV0dXJuIHdoaWxlIHR5cGluZyBpbiBzZWFyY2hcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2VudGVyJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZTonLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVxdWVzdCc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweU1ha2VyKHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVyY2xvc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGlwcHlDbG9zZShwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRzd3JhcHBlcnJlc3BvbnNlJzogLy8gaW5jb21pbmcgYXV0b2NvbXBsZXRlIHJlc3BvbnNlXG4gICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnRpcHB5TWFrZXIocGF5bG9hZC5yZXNwb25zZSwgcGF5bG9hZC5mYWNldElkLmlucHV0UGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmxvY2tmaWx0ZXInOlxuICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVycyhwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5pbmNsdWRlcyhwYXlsb2FkKSkge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5pbmRleE9mKHBheWxvYWQpLCAxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0cyA9IHt9O1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzID0gW107XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldGNsaWNrJzoge1xuICAgICAgICAgIGNvbnN0IHsgb3BlblRpcHB5IH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5pbmRleE9mKHBheWxvYWQpID09PSAtMSkge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW29wZW5UaXBweV0ucHVzaChwYXlsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1tvcGVuVGlwcHldID0gW3BheWxvYWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFeWVDbGljayA9ICh0eXBlKSA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHN0YXR1cyBvZiB0aGUgc2VsZWN0ZWQgZXllLCB0aGVuIHJlbG9hZHMgdGhlIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcykge1xuICAgICAgY29uc3QgaSA9IHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLmluZGV4T2YodHlwZSk7XG4gICAgICBpZiAoaSA+PSAwKSB7IC8vIGlmIHRoZSBleWUgd2FzIGNsb3NlZFxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5zcGxpY2UoaSwgMSk7IC8vIG9wZW4gdGhlIGV5ZVxuICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGV5ZSB3YXMgb3BlblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5wdXNoKHR5cGUpOyAvLyBjbG9zZSB0aGUgZXllXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzID0gW3R5cGVdO1xuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7IC8vIHJlbG9hZCB0aGUgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgZGF0YVxuICB9XG5cbiAgdXBkYXRlRmlsdGVycyA9IChzZWxlY3RlZEJ1YmJsZSkgPT4ge1xuICAgIC8qXG4gICAgICBBZGRzIChvciByZW1vdmVzKSB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIGJ1YmJsZSBmcm9tIHRoZSBhcnJheSBvZiB0aGF0IHR5cGUgb2YgZW50aXR5LlxuICAgICAgRXhhbXBsZTpcbiAgICAgICAg4oCiIENsaWNrIG9uIGJ1YmJsZSBcIjAyNjNhNDA3LWQwZGRcIiBvZiB0eXBlIFwib3JnXCJcbiAgICAgICAg4oCiIEFkZCBcIjAyNjNhNDA3LWQwZGRcIiB0byBhcnJheSBcIm9yZ1wiLlxuICAgICAgUmVzdWx0OlxuICAgICAgICDigKIgbG9ja2VkRmFjZXRzID0geyBcIm9yZ1wiOlsgXCIwMjYzYTQwNy1kMGRkXCIgXSB9XG4gICAgKi9cbiAgICBzZWxlY3RlZEJ1YmJsZS5lbnRpdHkuaWQucmVwbGFjZSgvIC9nLCAnLScpOyAvLyBmaXggZm9yIHNwYWNlIGluIElEXG4gICAgY29uc3QgeyBpZCwgdHlwZU9mRW50aXR5IH0gPSBzZWxlY3RlZEJ1YmJsZS5lbnRpdHk7IC8vIHBheWxvYWQgaXMgdGhlIHNlbGVjdGVkIGJ1YmJsZVxuICAgIGlmICghdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0gPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uaW5kZXhPZihpZCk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0ucHVzaChpZCk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTsgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXG4gIH1cbn1cbiJdfQ==