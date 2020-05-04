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
            var _a = selectedBubble.entity, id = _a.id, typeOfEntity = _a.typeOfEntity;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUEyQyxpREFBWTtJQUF2RDtRQUFBLHFFQXNIQztRQXJIUyxtQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFBO1FBOEVuRCxvQkFBYzs7OztRQUFHLFVBQUMsSUFBSTtZQUNwQjs7Y0FFRTtZQUNGLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O29CQUN4QixDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtpQkFDekQ7cUJBQU0sRUFBRSxzQkFBc0I7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDeEQ7YUFDRjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUs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QU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2dCQUNSLEtBQUssMkJBQTJCO29CQUFFO3dCQUN4QixJQUFBLHNDQUFTO3dCQUNqQixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzRCQUMzQyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDbkUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUN2RDt5QkFDRjs2QkFBTTs0QkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNyRDt3QkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDtvQkFBQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQXlDSCw0QkFBQztBQUFELENBQUMsQUF0SEQsQ0FBMkMsWUFBWSxHQXNIdEQ7Ozs7Ozs7SUFySEMsOENBQW1EOztJQThFbkQsK0NBZUM7O0lBRUQsOENBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBjaGFuZ2VkSW5wdXQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpXG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmNoYW5nZWRJbnB1dCQucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkuc3Vic2NyaWJlKChwYXlsb2FkKSA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgcGF5bG9hZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgLy8gdG9nZ2xlIHZpc2liaWxpdHkgZnJvbSBmYWNldCBoZWFkZXJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09IG51bGwpIHsgLy8gaW50ZXJydXB0IGV2ZW50IGZvciBsb2NrZWQgZmFjZXRzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFeWVDbGljayhwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gY2hhbmdlIHNlYXJjaCBpbnB1dCB0ZXh0XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub3BlblRpcHB5ID0gcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZWRJbnB1dCQubmV4dChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gcHJlc3NlZCByZXR1cm4gd2hpbGUgdHlwaW5nIGluIHNlYXJjaFxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZW50ZXInLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOicsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJyZXF1ZXN0JzogLy8gaW5jb21pbmcgYXV0b2NvbXBsZXRlIHJlc3BvbnNlXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpcHB5TWFrZXIocGF5bG9hZC5mYWNldElkLmlucHV0UGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0c3dyYXBwZXJjbG9zZSc6IC8vIGluY29taW5nIGF1dG9jb21wbGV0ZSByZXNwb25zZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweUNsb3NlKHBheWxvYWQuZmFjZXRJZC5pbnB1dFBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVzcG9uc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcbiAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UudGlwcHlNYWtlcihwYXlsb2FkLnJlc3BvbnNlLCBwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50YWdjbGljayc6XG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluY2x1ZGVzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YocGF5bG9hZCksIDFcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzID0ge307XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMgPSBbXTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHRoaXMuZGF0YVNvdXJjZS5sYXN0RGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOiB7XG4gICAgICAgICAgY29uc3QgeyBvcGVuVGlwcHkgfSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1tvcGVuVGlwcHldKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1tvcGVuVGlwcHldLmluZGV4T2YocGF5bG9hZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbb3BlblRpcHB5XS5wdXNoKHBheWxvYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW29wZW5UaXBweV0gPSBbcGF5bG9hZF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUV5ZUNsaWNrID0gKHR5cGUpID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc3RhdHVzIG9mIHRoZSBzZWxlY3RlZCBleWUsIHRoZW4gcmVsb2FkcyB0aGUgY29tcG9uZW50LlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzKSB7XG4gICAgICBjb25zdCBpID0gdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMuaW5kZXhPZih0eXBlKTtcbiAgICAgIGlmIChpID49IDApIHsgLy8gaWYgdGhlIGV5ZSB3YXMgY2xvc2VkXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLnNwbGljZShpLCAxKTsgLy8gb3BlbiB0aGUgZXllXG4gICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgZXllIHdhcyBvcGVuXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbG9zZWRFeWVzLnB1c2godHlwZSk7IC8vIGNsb3NlIHRoZSBleWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMgPSBbdHlwZV07XG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUodGhpcy5kYXRhU291cmNlLmxhc3REYXRhKTsgLy8gcmVsb2FkIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBkYXRhXG4gIH1cblxuICB1cGRhdGVGaWx0ZXJzID0gKHNlbGVjdGVkQnViYmxlKSA9PiB7XG4gICAgLypcbiAgICAgIEFkZHMgKG9yIHJlbW92ZXMpIHRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgYnViYmxlIGZyb20gdGhlIGFycmF5IG9mIHRoYXQgdHlwZSBvZiBlbnRpdHkuXG4gICAgICBFeGFtcGxlOlxuICAgICAgICDigKIgQ2xpY2sgb24gYnViYmxlIFwiMDI2M2E0MDctZDBkZFwiIG9mIHR5cGUgXCJvcmdcIlxuICAgICAgICDigKIgQWRkIFwiMDI2M2E0MDctZDBkZFwiIHRvIGFycmF5IFwib3JnXCIuXG4gICAgICBSZXN1bHQ6XG4gICAgICAgIOKAoiBsb2NrZWRGYWNldHMgPSB7IFwib3JnXCI6WyBcIjAyNjNhNDA3LWQwZGRcIiBdIH1cbiAgICAqL1xuICAgIHNlbGVjdGVkQnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8gL2csICctJyk7IC8vIGZpeCBmb3Igc3BhY2UgaW4gSURcbiAgICBjb25zdCB7IGlkLCB0eXBlT2ZFbnRpdHkgfSA9IHNlbGVjdGVkQnViYmxlLmVudGl0eTsgLy8gcGF5bG9hZCBpcyB0aGUgc2VsZWN0ZWQgYnViYmxlXG4gICAgaWYgKCF0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0pIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XSA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLmluY2x1ZGVzKGlkKSkge1xuICAgICAgY29uc3QgaSA9IHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmRleE9mKGlkKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5wdXNoKGlkKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpOyAvLyByZWxvYWQgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgfVxufVxuIl19