import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var AwHomeFacetsWrapperEH = /** @class */ (function (_super) {
    __extends(AwHomeFacetsWrapperEH, _super);
    function AwHomeFacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changedInput$ = new Subject();
        _this.handleEyeClick = function (type) {
            /*
              Toggles the status of the selected eye, then reloads the component.
            */
            if (_this.dataSource.closedEyes) {
                var i = _this.dataSource.closedEyes.indexOf(type);
                if (i >= 0) { // if the eye was closed
                    _this.dataSource.closedEyes.splice(i, 1); // open the eye
                }
                else { // if the eye was open
                    _this.dataSource.closedEyes.push(type); // close the eye
                }
            }
            else {
                _this.dataSource.closedEyes = [type];
            }
            _this.dataSource.update(_this.dataSource.lastData); // reload the component with the same data
        };
        _this.updateFilters = function (selectedBubble) {
            /*
              Adds (or removes) the ID of the selected bubble from the array of that type of entity.
              Example:
                • Click on bubble "0263a407-d0dd" of type "org"
                • Add "0263a407-d0dd" to array "org".
              Result:
                • lockedFacets = { "org":[ "0263a407-d0dd" ] }
            */
            selectedBubble.entity.id.replace(/ /g, '-'); // fix for space in ID
            var _a = selectedBubble.entity, id = _a.id, typeOfEntity = _a.typeOfEntity; // payload is the selected bubble
            if (!_this.dataSource.lockedFacets[typeOfEntity]) {
                _this.dataSource.lockedFacets[typeOfEntity] = [];
            }
            if (_this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                var i = _this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                _this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
            }
            else {
                _this.dataSource.lockedFacets[typeOfEntity].push(id);
            }
            _this.dataSource.update(_this.dataSource.lastData); // reload the component with the same data
        };
        return _this;
    }
    AwHomeFacetsWrapperEH.prototype.listen = function () {
        var _this = this;
        this.changedInput$.pipe(debounceTime(500)).subscribe(function (payload) {
            _this.emitOuter('change', payload);
        });
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                // toggle visibility from facet header
                case 'aw-home-facets-wrapper.click':
                    if (payload === null) { // interrupt event for locked facets
                        break;
                    }
                    _this.emitOuter('click', payload);
                    _this.handleEyeClick(payload);
                    break;
                // change search input text
                case 'aw-home-facets-wrapper.change':
                    _this.dataSource.openTippy = payload.inputPayload.replace('-search', '');
                    _this.changedInput$.next(payload);
                    break;
                // pressed return while typing in search
                case 'aw-home-facets-wrapper.enter':
                    _this.emitOuter('enter', payload);
                    break;
                default:
                    console.warn('unhandled inner event of type:', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.facetswrapperrequest': // incoming autocomplete response
                    _this.dataSource.tippyMaker(payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.facetswrapperclose': // incoming autocomplete response
                    _this.dataSource.tippyClose(payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.facetswrapperresponse': // incoming autocomplete response
                    // this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
                    break;
                case 'aw-home-layout.lockfilter':
                    _this.updateFilters(payload);
                    break;
                case 'aw-home-layout.tagclick':
                    Object.keys(_this.dataSource.lockedFacets).forEach(function (key) {
                        if (_this.dataSource.lockedFacets[key].includes(payload)) {
                            _this.dataSource.lockedFacets[key].splice(_this.dataSource.lockedFacets[key].indexOf(payload), 1);
                        }
                    });
                    _this.dataSource.update(_this.dataSource.lastData);
                    break;
                case 'aw-home-layout.clearselection':
                    _this.dataSource.lockedFacets = {};
                    _this.dataSource.closedEyes = [];
                    _this.dataSource.update(_this.dataSource.lastData);
                    break;
                case 'aw-home-layout.facetclick':
                    {
                        var openTippy = _this.dataSource.openTippy;
                        if (_this.dataSource.lockedFacets[openTippy]) {
                            if (_this.dataSource.lockedFacets[openTippy].indexOf(payload) === -1) {
                                _this.dataSource.lockedFacets[openTippy].push(payload);
                            }
                        }
                        else {
                            _this.dataSource.lockedFacets[openTippy] = [payload];
                        }
                        _this.dataSource.update(_this.dataSource.lastData);
                    }
                    break;
                default:
                    break;
            }
        });
    };
    return AwHomeFacetsWrapperEH;
}(EventHandler));
export { AwHomeFacetsWrapperEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUM7SUFBMkMseUNBQVk7SUFBdkQ7UUFBQSxxRUFzSEM7UUFySFMsbUJBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQThFbkQsb0JBQWMsR0FBRyxVQUFDLElBQUk7WUFDcEI7O2NBRUU7WUFDRixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUM5QixJQUFNLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLHdCQUF3QjtvQkFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7aUJBQ3pEO3FCQUFNLEVBQUUsc0JBQXNCO29CQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7aUJBQ3hEO2FBQ0Y7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQztZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFV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QUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1IsS0FBSywyQkFBMkI7b0JBQUU7d0JBQ3hCLElBQUEsc0NBQVMsQ0FBcUI7d0JBQ3RDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7NEJBQzNDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dDQUNuRSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7NkJBQ3ZEO3lCQUNGOzZCQUFNOzRCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3JEO3dCQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2xEO29CQUFDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeUNILDRCQUFDO0FBQUQsQ0FBQyxBQXRIRCxDQUEyQyxZQUFZLEdBc0h0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIGNoYW5nZWRJbnB1dCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KClcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuY2hhbmdlZElucHV0JC5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcclxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHBheWxvYWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAvLyB0b2dnbGUgdmlzaWJpbGl0eSBmcm9tIGZhY2V0IGhlYWRlclxyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09IG51bGwpIHsgLy8gaW50ZXJydXB0IGV2ZW50IGZvciBsb2NrZWQgZmFjZXRzXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUV5ZUNsaWNrKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gY2hhbmdlIHNlYXJjaCBpbnB1dCB0ZXh0XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9wZW5UaXBweSA9IHBheWxvYWQuaW5wdXRQYXlsb2FkLnJlcGxhY2UoJy1zZWFyY2gnLCAnJyk7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZWRJbnB1dCQubmV4dChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHByZXNzZWQgcmV0dXJuIHdoaWxlIHR5cGluZyBpbiBzZWFyY2hcclxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdlbnRlcicsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGU6JywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVxdWVzdCc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpcHB5TWFrZXIocGF5bG9hZC5mYWNldElkLmlucHV0UGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVyY2xvc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweUNsb3NlKHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRzd3JhcHBlcnJlc3BvbnNlJzogLy8gaW5jb21pbmcgYXV0b2NvbXBsZXRlIHJlc3BvbnNlXHJcbiAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UudGlwcHlNYWtlcihwYXlsb2FkLnJlc3BvbnNlLCBwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmxvY2tmaWx0ZXInOlxyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxyXG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0cykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uaW5jbHVkZXMocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW2tleV0uc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YocGF5bG9hZCksIDFcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHMgPSB7fTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzID0gW107XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldGNsaWNrJzoge1xyXG4gICAgICAgICAgY29uc3QgeyBvcGVuVGlwcHkgfSA9IHRoaXMuZGF0YVNvdXJjZTtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW29wZW5UaXBweV0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5pbmRleE9mKHBheWxvYWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5wdXNoKHBheWxvYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW29wZW5UaXBweV0gPSBbcGF5bG9hZF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXllQ2xpY2sgPSAodHlwZSkgPT4ge1xyXG4gICAgLypcclxuICAgICAgVG9nZ2xlcyB0aGUgc3RhdHVzIG9mIHRoZSBzZWxlY3RlZCBleWUsIHRoZW4gcmVsb2FkcyB0aGUgY29tcG9uZW50LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcykge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMuaW5kZXhPZih0eXBlKTtcclxuICAgICAgaWYgKGkgPj0gMCkgeyAvLyBpZiB0aGUgZXllIHdhcyBjbG9zZWRcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5zcGxpY2UoaSwgMSk7IC8vIG9wZW4gdGhlIGV5ZVxyXG4gICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgZXllIHdhcyBvcGVuXHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMucHVzaCh0eXBlKTsgLy8gY2xvc2UgdGhlIGV5ZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcyA9IFt0eXBlXTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTsgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWx0ZXJzID0gKHNlbGVjdGVkQnViYmxlKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBBZGRzIChvciByZW1vdmVzKSB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIGJ1YmJsZSBmcm9tIHRoZSBhcnJheSBvZiB0aGF0IHR5cGUgb2YgZW50aXR5LlxyXG4gICAgICBFeGFtcGxlOlxyXG4gICAgICAgIOKAoiBDbGljayBvbiBidWJibGUgXCIwMjYzYTQwNy1kMGRkXCIgb2YgdHlwZSBcIm9yZ1wiXHJcbiAgICAgICAg4oCiIEFkZCBcIjAyNjNhNDA3LWQwZGRcIiB0byBhcnJheSBcIm9yZ1wiLlxyXG4gICAgICBSZXN1bHQ6XHJcbiAgICAgICAg4oCiIGxvY2tlZEZhY2V0cyA9IHsgXCJvcmdcIjpbIFwiMDI2M2E0MDctZDBkZFwiIF0gfVxyXG4gICAgKi9cclxuICAgIHNlbGVjdGVkQnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8gL2csICctJyk7IC8vIGZpeCBmb3Igc3BhY2UgaW4gSURcclxuICAgIGNvbnN0IHsgaWQsIHR5cGVPZkVudGl0eSB9ID0gc2VsZWN0ZWRCdWJibGUuZW50aXR5OyAvLyBwYXlsb2FkIGlzIHRoZSBzZWxlY3RlZCBidWJibGVcclxuICAgIGlmICghdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmRleE9mKGlkKTtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLnNwbGljZShpLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5wdXNoKGlkKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTsgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXHJcbiAgfVxyXG59XHJcbiJdfQ==