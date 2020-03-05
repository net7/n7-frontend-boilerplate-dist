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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZO0lBQXZEOztRQUNVLGtCQUFhLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUE7UUE4RW5ELG1CQUFjOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4Qjs7Y0FFRTtZQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O3NCQUN4QixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtpQkFDekQ7cUJBQU0sRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDeEQ7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFB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LEdBQUcsRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2dCQUNSLEtBQUssMkJBQTJCO29CQUFFOzhCQUMxQixFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVO3dCQUNyQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzRCQUMzQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUN2RDt5QkFDRjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNyRDt3QkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDtvQkFBQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQXlDRjs7Ozs7O0lBckhDLDhDQUFtRDs7SUE4RW5ELCtDQWVDOztJQUVELDhDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIGNoYW5nZWRJbnB1dCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KClcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuY2hhbmdlZElucHV0JC5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcclxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHBheWxvYWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAvLyB0b2dnbGUgdmlzaWJpbGl0eSBmcm9tIGZhY2V0IGhlYWRlclxyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09IG51bGwpIHsgLy8gaW50ZXJydXB0IGV2ZW50IGZvciBsb2NrZWQgZmFjZXRzXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUV5ZUNsaWNrKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gY2hhbmdlIHNlYXJjaCBpbnB1dCB0ZXh0XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9wZW5UaXBweSA9IHBheWxvYWQuaW5wdXRQYXlsb2FkLnJlcGxhY2UoJy1zZWFyY2gnLCAnJyk7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZWRJbnB1dCQubmV4dChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHByZXNzZWQgcmV0dXJuIHdoaWxlIHR5cGluZyBpbiBzZWFyY2hcclxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdlbnRlcicsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGU6JywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVxdWVzdCc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpcHB5TWFrZXIocGF5bG9hZC5mYWNldElkLmlucHV0UGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVyY2xvc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweUNsb3NlKHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRzd3JhcHBlcnJlc3BvbnNlJzogLy8gaW5jb21pbmcgYXV0b2NvbXBsZXRlIHJlc3BvbnNlXHJcbiAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UudGlwcHlNYWtlcihwYXlsb2FkLnJlc3BvbnNlLCBwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmxvY2tmaWx0ZXInOlxyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxyXG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0cykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uaW5jbHVkZXMocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YocGF5bG9hZCksIDFcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHMgPSB7fTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzID0gW107XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldGNsaWNrJzoge1xyXG4gICAgICAgICAgY29uc3QgeyBvcGVuVGlwcHkgfSA9IHRoaXMuZGF0YVNvdXJjZTtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW29wZW5UaXBweV0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5pbmRleE9mKHBheWxvYWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5wdXNoKHBheWxvYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW29wZW5UaXBweV0gPSBbcGF5bG9hZF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXllQ2xpY2sgPSAodHlwZSkgPT4ge1xyXG4gICAgLypcclxuICAgICAgVG9nZ2xlcyB0aGUgc3RhdHVzIG9mIHRoZSBzZWxlY3RlZCBleWUsIHRoZW4gcmVsb2FkcyB0aGUgY29tcG9uZW50LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcykge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMuaW5kZXhPZih0eXBlKTtcclxuICAgICAgaWYgKGkgPj0gMCkgeyAvLyBpZiB0aGUgZXllIHdhcyBjbG9zZWRcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5zcGxpY2UoaSwgMSk7IC8vIG9wZW4gdGhlIGV5ZVxyXG4gICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgZXllIHdhcyBvcGVuXHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMucHVzaCh0eXBlKTsgLy8gY2xvc2UgdGhlIGV5ZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcyA9IFt0eXBlXTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTsgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWx0ZXJzID0gKHNlbGVjdGVkQnViYmxlKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBBZGRzIChvciByZW1vdmVzKSB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIGJ1YmJsZSBmcm9tIHRoZSBhcnJheSBvZiB0aGF0IHR5cGUgb2YgZW50aXR5LlxyXG4gICAgICBFeGFtcGxlOlxyXG4gICAgICAgIOKAoiBDbGljayBvbiBidWJibGUgXCIwMjYzYTQwNy1kMGRkXCIgb2YgdHlwZSBcIm9yZ1wiXHJcbiAgICAgICAg4oCiIEFkZCBcIjAyNjNhNDA3LWQwZGRcIiB0byBhcnJheSBcIm9yZ1wiLlxyXG4gICAgICBSZXN1bHQ6XHJcbiAgICAgICAg4oCiIGxvY2tlZEZhY2V0cyA9IHsgXCJvcmdcIjpbIFwiMDI2M2E0MDctZDBkZFwiIF0gfVxyXG4gICAgKi9cclxuICAgIHNlbGVjdGVkQnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8gL2csICctJyk7IC8vIGZpeCBmb3Igc3BhY2UgaW4gSURcclxuICAgIGNvbnN0IHsgaWQsIHR5cGVPZkVudGl0eSB9ID0gc2VsZWN0ZWRCdWJibGUuZW50aXR5OyAvLyBwYXlsb2FkIGlzIHRoZSBzZWxlY3RlZCBidWJibGVcclxuICAgIGlmICghdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmRleE9mKGlkKTtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLnNwbGljZShpLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5wdXNoKGlkKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTsgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXHJcbiAgfVxyXG59XHJcbiJdfQ==