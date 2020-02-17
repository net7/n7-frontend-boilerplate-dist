/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-facets-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var AwHomeFacetsWrapperEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeFacetsWrapperEH, _super);
    function AwHomeFacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changedInput$ = new Subject();
        _this.handleEyeClick = (/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /*
              Toggles the status of the selected eye, then reloads the component.
            */
            if (_this.dataSource.closedEyes) {
                /** @type {?} */
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
        });
        _this.updateFilters = (/**
         * @param {?} selectedBubble
         * @return {?}
         */
        function (selectedBubble) {
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
            var _a = selectedBubble.entity // payload is the selected bubble
            , id = _a.id, typeOfEntity = _a.typeOfEntity;
            if (!_this.dataSource.lockedFacets[typeOfEntity]) {
                _this.dataSource.lockedFacets[typeOfEntity] = [];
            }
            if (_this.dataSource.lockedFacets[typeOfEntity].includes(id)) {
                /** @type {?} */
                var i = _this.dataSource.lockedFacets[typeOfEntity].indexOf(id);
                _this.dataSource.lockedFacets[typeOfEntity].splice(i, 1);
            }
            else {
                _this.dataSource.lockedFacets[typeOfEntity].push(id);
            }
            _this.dataSource.update(_this.dataSource.lastData); // reload the component with the same data
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwHomeFacetsWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changedInput$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            _this.emitOuter('change', payload);
        }));
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
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
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
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
                    Object.keys(_this.dataSource.lockedFacets).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        if (_this.dataSource.lockedFacets[key].includes(payload)) {
                            _this.dataSource.lockedFacets[key].splice(_this.dataSource.lockedFacets[key].indexOf(payload), 1);
                        }
                    }));
                    _this.dataSource.update(_this.dataSource.lastData);
                    break;
                case 'aw-home-layout.clearselection':
                    _this.dataSource.lockedFacets = {};
                    _this.dataSource.closedEyes = [];
                    _this.dataSource.update(_this.dataSource.lastData);
                    break;
                case 'aw-home-layout.facetclick':
                    var openTippy = _this.dataSource.openTippy;
                    if (_this.dataSource.lockedFacets[openTippy]) {
                        if (_this.dataSource.lockedFacets[openTippy].indexOf(payload) == -1) {
                            _this.dataSource.lockedFacets[openTippy].push(payload);
                        }
                    }
                    else {
                        _this.dataSource.lockedFacets[openTippy] = [payload];
                    }
                    _this.dataSource.update(_this.dataSource.lastData);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwHomeFacetsWrapperEH;
}(EventHandler));
export { AwHomeFacetsWrapperEH };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUEyQyxpREFBWTtJQUF2RDtRQUFBLHFFQXFIQztRQW5IUyxtQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFBO1FBNEVuRCxvQkFBYzs7OztRQUFHLFVBQUEsSUFBSTtZQUNuQjs7Y0FFRTtZQUNGLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O29CQUMxQixDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsZUFBZTtpQkFDeEQ7cUJBQU0sRUFBRSxzQkFBc0I7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLGdCQUFnQjtpQkFDdkQ7YUFDRjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3BDO1lBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUs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QUFVLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQ2hELE1BQU07Z0JBQ1IsS0FBSywyQkFBMkI7b0JBQ3hCLElBQUEsc0NBQVM7b0JBQ2YsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDM0MsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7NEJBQ2xFLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTt5QkFDdEQ7cUJBQ0Y7eUJBQU07d0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtxQkFDcEQ7b0JBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDaEQsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUF5Q0gsNEJBQUM7QUFBRCxDQUFDLEFBckhELENBQTJDLFlBQVksR0FxSHREOzs7Ozs7O0lBbkhDLDhDQUFtRDs7SUE0RW5ELCtDQWVDOztJQUVELDhDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHJpdmF0ZSBjaGFuZ2VkSW5wdXQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpXG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmNoYW5nZWRJbnB1dCQucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkuc3Vic2NyaWJlKHBheWxvYWQgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHBheWxvYWQpO1xuICAgIH0pXG5cbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgLy8gdG9nZ2xlIHZpc2liaWxpdHkgZnJvbSBmYWNldCBoZWFkZXJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09IG51bGwpIHsgLy8gaW50ZXJydXB0IGV2ZW50IGZvciBsb2NrZWQgZmFjZXRzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFeWVDbGljayhwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjaGFuZ2Ugc2VhcmNoIGlucHV0IHRleHRcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vcGVuVGlwcHkgPSBwYXlsb2FkLmlucHV0UGF5bG9hZC5yZXBsYWNlKCctc2VhcmNoJywgJycpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VkSW5wdXQkLm5leHQocGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gcHJlc3NlZCByZXR1cm4gd2hpbGUgdHlwaW5nIGluIHNlYXJjaFxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZW50ZXInLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOicsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJyZXF1ZXN0JzogLy8gaW5jb21pbmcgYXV0b2NvbXBsZXRlIHJlc3BvbnNlXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpcHB5TWFrZXIocGF5bG9hZC5mYWNldElkLmlucHV0UGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJjbG9zZSc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweUNsb3NlKHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVzcG9uc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcbiAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UudGlwcHlNYWtlcihwYXlsb2FkLnJlc3BvbnNlLCBwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnRhZ2NsaWNrJzpcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluY2x1ZGVzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5zcGxpY2UodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YocGF5bG9hZCksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzID0ge31cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcyA9IFtdXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOlxuICAgICAgICAgIGxldCB7IG9wZW5UaXBweSB9ID0gdGhpcy5kYXRhU291cmNlXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5pbmRleE9mKHBheWxvYWQpID09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5wdXNoKHBheWxvYWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XSA9IFtwYXlsb2FkXVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUV5ZUNsaWNrID0gdHlwZSA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHN0YXR1cyBvZiB0aGUgc2VsZWN0ZWQgZXllLCB0aGVuIHJlbG9hZHMgdGhlIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcykge1xuICAgICAgbGV0IGkgPSB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5pbmRleE9mKHR5cGUpXG4gICAgICBpZiAoaSA+PSAwKSB7IC8vIGlmIHRoZSBleWUgd2FzIGNsb3NlZFxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5zcGxpY2UoaSwgMSkgLy8gb3BlbiB0aGUgZXllXG4gICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgZXllIHdhcyBvcGVuXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLnB1c2godHlwZSkgLy8gY2xvc2UgdGhlIGV5ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcyA9IFt0eXBlXVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSkgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzID0gc2VsZWN0ZWRCdWJibGUgPT4ge1xuICAgIC8qXG4gICAgICBBZGRzIChvciByZW1vdmVzKSB0aGUgSUQgb2YgdGhlIHNlbGVjdGVkIGJ1YmJsZSBmcm9tIHRoZSBhcnJheSBvZiB0aGF0IHR5cGUgb2YgZW50aXR5LlxuICAgICAgRXhhbXBsZTpcbiAgICAgICAg4oCiIENsaWNrIG9uIGJ1YmJsZSBcIjAyNjNhNDA3LWQwZGRcIiBvZiB0eXBlIFwib3JnXCJcbiAgICAgICAg4oCiIEFkZCBcIjAyNjNhNDA3LWQwZGRcIiB0byBhcnJheSBcIm9yZ1wiLlxuICAgICAgUmVzdWx0OlxuICAgICAgICDigKIgbG9ja2VkRmFjZXRzID0geyBcIm9yZ1wiOlsgXCIwMjYzYTQwNy1kMGRkXCIgXSB9XG4gICAgKi9cbiAgICBzZWxlY3RlZEJ1YmJsZS5lbnRpdHkuaWQucmVwbGFjZSgvIC9nLCAnLScpIC8vIGZpeCBmb3Igc3BhY2UgaW4gSURcbiAgICBjb25zdCB7IGlkLCB0eXBlT2ZFbnRpdHkgfSA9IHNlbGVjdGVkQnViYmxlLmVudGl0eSAvLyBwYXlsb2FkIGlzIHRoZSBzZWxlY3RlZCBidWJibGVcbiAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldID0gW11cbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGxldCBpID0gdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLmluZGV4T2YoaWQpXG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5wdXNoKGlkKVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSkgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXG4gIH1cbn0iXX0=