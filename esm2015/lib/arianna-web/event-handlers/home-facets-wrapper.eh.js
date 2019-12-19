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
                case 'aw-home-layout.facetclick':
                    this.dataSource.update(this.dataSource.lastData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFlBQVk7SUFBdkQ7O1FBRVUsa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQXlEbkQsbUJBQWM7Ozs7UUFBRyxJQUFJLENBQUMsRUFBRTtZQUN0Qjs7Y0FFRTtZQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O29CQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsZUFBZTtpQkFDeEQ7cUJBQU0sRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLGdCQUFnQjtpQkFDdkQ7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFD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Q0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDM0UsTUFBTTtnQkFDUixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0IsTUFBTTtnQkFDUixLQUFLLHlCQUF5QjtvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU87Ozs7b0JBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3RELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3lCQUNoRztvQkFDSCxDQUFDLEVBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssK0JBQStCLENBQUM7Z0JBQ3JDLEtBQUssMkJBQTJCO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNoRCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQXlDRjs7Ozs7O0lBaEdDLDhDQUFtRDs7SUF5RG5ELCtDQWVDOztJQUVELDhDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHJpdmF0ZSBjaGFuZ2VkSW5wdXQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpXG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmNoYW5nZWRJbnB1dCQucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkuc3Vic2NyaWJlKHBheWxvYWQgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHBheWxvYWQpO1xuICAgIH0pXG5cbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgLy8gdG9nZ2xlIHZpc2liaWxpdHkgZnJvbSBmYWNldCBoZWFkZXJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09IG51bGwpIHsgLy8gaW50ZXJydXB0IGV2ZW50IGZvciBsb2NrZWQgZmFjZXRzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFeWVDbGljayhwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjaGFuZ2Ugc2VhcmNoIGlucHV0IHRleHRcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuY2hhbmdlZElucHV0JC5uZXh0KHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIHByZXNzZWQgcmV0dXJuIHdoaWxlIHR5cGluZyBpbiBzZWFyY2hcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2VudGVyJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZTonLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVzcG9uc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGlwcHlNYWtlcihwYXlsb2FkLnJlc3BvbnNlLCBwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnRhZ2NsaWNrJzpcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluY2x1ZGVzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5zcGxpY2UodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YocGF5bG9hZCksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRjbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFeWVDbGljayA9IHR5cGUgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGVzIHRoZSBzdGF0dXMgb2YgdGhlIHNlbGVjdGVkIGV5ZSwgdGhlbiByZWxvYWRzIHRoZSBjb21wb25lbnQuXG4gICAgKi9cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMpIHtcbiAgICAgIGxldCBpID0gdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMuaW5kZXhPZih0eXBlKVxuICAgICAgaWYgKGkgPj0gMCkgeyAvLyBpZiB0aGUgZXllIHdhcyBjbG9zZWRcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMuc3BsaWNlKGksIDEpIC8vIG9wZW4gdGhlIGV5ZVxuICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGV5ZSB3YXMgb3BlblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5wdXNoKHR5cGUpIC8vIGNsb3NlIHRoZSBleWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMgPSBbdHlwZV1cbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpIC8vIHJlbG9hZCB0aGUgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgZGF0YVxuICB9XG5cbiAgdXBkYXRlRmlsdGVycyA9IHNlbGVjdGVkQnViYmxlID0+IHtcbiAgICAvKlxuICAgICAgQWRkcyAob3IgcmVtb3ZlcykgdGhlIElEIG9mIHRoZSBzZWxlY3RlZCBidWJibGUgZnJvbSB0aGUgYXJyYXkgb2YgdGhhdCB0eXBlIG9mIGVudGl0eS5cbiAgICAgIEV4YW1wbGU6XG4gICAgICAgIOKAoiBDbGljayBvbiBidWJibGUgXCIwMjYzYTQwNy1kMGRkXCIgb2YgdHlwZSBcIm9yZ1wiXG4gICAgICAgIOKAoiBBZGQgXCIwMjYzYTQwNy1kMGRkXCIgdG8gYXJyYXkgXCJvcmdcIi5cbiAgICAgIFJlc3VsdDpcbiAgICAgICAg4oCiIGxvY2tlZEZhY2V0cyA9IHsgXCJvcmdcIjpbIFwiMDI2M2E0MDctZDBkZFwiIF0gfVxuICAgICovXG4gICAgc2VsZWN0ZWRCdWJibGUuZW50aXR5LmlkLnJlcGxhY2UoLyAvZywgJy0nKSAvLyBmaXggZm9yIHNwYWNlIGluIElEXG4gICAgY29uc3QgeyBpZCwgdHlwZU9mRW50aXR5IH0gPSBzZWxlY3RlZEJ1YmJsZS5lbnRpdHkgLy8gcGF5bG9hZCBpcyB0aGUgc2VsZWN0ZWQgYnViYmxlXG4gICAgaWYgKCF0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0pIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XSA9IFtdXG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uaW5jbHVkZXMoaWQpKSB7XG4gICAgICBsZXQgaSA9IHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmRleE9mKGlkKVxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0ucHVzaChpZClcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpIC8vIHJlbG9hZCB0aGUgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgZGF0YVxuICB9XG59Il19