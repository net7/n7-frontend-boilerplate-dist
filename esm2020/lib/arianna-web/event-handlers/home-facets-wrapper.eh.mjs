import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class AwHomeFacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.changedInput$ = new Subject();
        this.handleEyeClick = (type) => {
            /*
              Toggles the status of the selected eye, then reloads the component.
            */
            if (this.dataSource.closedEyes) {
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
        };
        this.updateFilters = (selectedBubble) => {
            /*
              Adds (or removes) the ID of the selected bubble from the array of that type of entity.
              Example:
                • Click on bubble "0263a407-d0dd" of type "org"
                • Add "0263a407-d0dd" to array "org".
              Result:
                • lockedFacets = { "org":[ "0263a407-d0dd" ] }
            */
            selectedBubble.entity.id.replace(/ /g, '-'); // fix for space in ID
            const { id, typeOfEntity } = selectedBubble.entity; // payload is the selected bubble
            if (!this.dataSource.lockedFacets[typeOfEntity]) {
                this.dataSource.lockedFacets[typeOfEntity] = [];
            }
            if (this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                const i = this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
            }
            else {
                this.dataSource.lockedFacets[typeOfEntity].push(id);
            }
            this.dataSource.update(this.dataSource.lastData); // reload the component with the same data
        };
    }
    listen() {
        this.changedInput$.pipe(debounceTime(500)).subscribe((payload) => {
            this.emitOuter('change', payload);
        });
        this.innerEvents$.subscribe(({ type, payload }) => {
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
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
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
                    Object.keys(this.dataSource.lockedFacets).forEach((key) => {
                        if (this.dataSource.lockedFacets[key].includes(payload)) {
                            this.dataSource.lockedFacets[key].splice(this.dataSource.lockedFacets[key].indexOf(payload), 1);
                        }
                    });
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
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2hvbWUtZmFjZXRzLXdyYXBwZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZO0lBQXZEOztRQUNVLGtCQUFhLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUE7UUE4RW5ELG1CQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4Qjs7Y0FFRTtZQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtpQkFDekQ7cUJBQU0sRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDeEQ7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLFVB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b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLDJCQUEyQjtvQkFBRTt3QkFDaEMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7NEJBQzNDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dDQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7NkJBQ3ZEO3lCQUNGOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3JEO3dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2xEO29CQUFDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBeUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgY2hhbmdlZElucHV0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKVxyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VkSW5wdXQkLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgcGF5bG9hZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IGZyb20gZmFjZXQgaGVhZGVyXHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gbnVsbCkgeyAvLyBpbnRlcnJ1cHQgZXZlbnQgZm9yIGxvY2tlZCBmYWNldHNcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXllQ2xpY2socGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBjaGFuZ2Ugc2VhcmNoIGlucHV0IHRleHRcclxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub3BlblRpcHB5ID0gcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKTtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlZElucHV0JC5uZXh0KHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcHJlc3NlZCByZXR1cm4gd2hpbGUgdHlwaW5nIGluIHNlYXJjaFxyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuZW50ZXInOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2VudGVyJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZTonLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJyZXF1ZXN0JzogLy8gaW5jb21pbmcgYXV0b2NvbXBsZXRlIHJlc3BvbnNlXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGlwcHlNYWtlcihwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJjbG9zZSc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpcHB5Q2xvc2UocGF5bG9hZC5mYWNldElkLmlucHV0UGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVzcG9uc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcclxuICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS50aXBweU1ha2VyKHBheWxvYWQucmVzcG9uc2UsIHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQubG9ja2ZpbHRlcic6XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlcnMocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50YWdjbGljayc6XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5pbmNsdWRlcyhwYXlsb2FkKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uaW5kZXhPZihwYXlsb2FkKSwgMVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0cyA9IHt9O1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMgPSBbXTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOiB7XHJcbiAgICAgICAgICBjb25zdCB7IG9wZW5UaXBweSB9ID0gdGhpcy5kYXRhU291cmNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1tvcGVuVGlwcHldLmluZGV4T2YocGF5bG9hZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1tvcGVuVGlwcHldLnB1c2gocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XSA9IFtwYXlsb2FkXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFeWVDbGljayA9ICh0eXBlKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBUb2dnbGVzIHRoZSBzdGF0dXMgb2YgdGhlIHNlbGVjdGVkIGV5ZSwgdGhlbiByZWxvYWRzIHRoZSBjb21wb25lbnQuXHJcbiAgICAqL1xyXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzKSB7XHJcbiAgICAgIGNvbnN0IGkgPSB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5pbmRleE9mKHR5cGUpO1xyXG4gICAgICBpZiAoaSA+PSAwKSB7IC8vIGlmIHRoZSBleWUgd2FzIGNsb3NlZFxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLnNwbGljZShpLCAxKTsgLy8gb3BlbiB0aGUgZXllXHJcbiAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBleWUgd2FzIG9wZW5cclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5wdXNoKHR5cGUpOyAvLyBjbG9zZSB0aGUgZXllXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzID0gW3R5cGVdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpOyAvLyByZWxvYWQgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIGRhdGFcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZpbHRlcnMgPSAoc2VsZWN0ZWRCdWJibGUpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIEFkZHMgKG9yIHJlbW92ZXMpIHRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgYnViYmxlIGZyb20gdGhlIGFycmF5IG9mIHRoYXQgdHlwZSBvZiBlbnRpdHkuXHJcbiAgICAgIEV4YW1wbGU6XHJcbiAgICAgICAg4oCiIENsaWNrIG9uIGJ1YmJsZSBcIjAyNjNhNDA3LWQwZGRcIiBvZiB0eXBlIFwib3JnXCJcclxuICAgICAgICDigKIgQWRkIFwiMDI2M2E0MDctZDBkZFwiIHRvIGFycmF5IFwib3JnXCIuXHJcbiAgICAgIFJlc3VsdDpcclxuICAgICAgICDigKIgbG9ja2VkRmFjZXRzID0geyBcIm9yZ1wiOlsgXCIwMjYzYTQwNy1kMGRkXCIgXSB9XHJcbiAgICAqL1xyXG4gICAgc2VsZWN0ZWRCdWJibGUuZW50aXR5LmlkLnJlcGxhY2UoLyAvZywgJy0nKTsgLy8gZml4IGZvciBzcGFjZSBpbiBJRFxyXG4gICAgY29uc3QgeyBpZCwgdHlwZU9mRW50aXR5IH0gPSBzZWxlY3RlZEJ1YmJsZS5lbnRpdHk7IC8vIHBheWxvYWQgaXMgdGhlIHNlbGVjdGVkIGJ1YmJsZVxyXG4gICAgaWYgKCF0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0pIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLmluZGV4T2YoaWQpO1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uc3BsaWNlKGksIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLnB1c2goaWQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpOyAvLyByZWxvYWQgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIGRhdGFcclxuICB9XHJcbn1cclxuIl19