/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwHomeFacetsWrapperEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeFacetsWrapperEH, _super);
    function AwHomeFacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
                    _this.emitOuter('change', payload);
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
                case 'aw-home-layout.facetswrapperresponse': // incoming autocomplete response
                    _this.dataSource.tippyMaker(payload.response, payload.facetId.inputPayload);
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
                default:
                    // console.warn('unhandled outer event of type', type)
                    break;
            }
        }));
    };
    return AwHomeFacetsWrapperEH;
}(EventHandler));
export { AwHomeFacetsWrapperEH };
if (false) {
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.handleEyeClick;
    /** @type {?} */
    AwHomeFacetsWrapperEH.prototype.updateFilters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQTJDLGlEQUFZO0lBQXZEO1FBQUEscUVBeUZDO1FBdkNDLG9CQUFjOzs7O1FBQUcsVUFBQSxJQUFJO1lBQ25COztjQUVFO1lBQ0YsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs7b0JBQzFCLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSx3QkFBd0I7b0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxlQUFlO2lCQUN4RDtxQkFBTSxFQUFFLHNCQUFzQjtvQkFDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsZ0JBQWdCO2lCQUN2RDthQUNGO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDcEM7WUFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUMsMENBQTBDO1FBQzdGLENBQUMsRUFBQTtRQUVELG1CQUFhOzs7O1FBQUcsVUFBQSxjQUFjO1lBQzVCOzs7Ozs7O2NBT0U7WUFDRixjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUs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QUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3lCQUNoRztvQkFDSCxDQUFDLEVBQUMsQ0FBQztvQkFDSCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNoRCxNQUFNO2dCQUNSO29CQUNFLHNEQUFzRDtvQkFDdEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBeUNILDRCQUFDO0FBQUQsQ0FBQyxBQXpGRCxDQUEyQyxZQUFZLEdBeUZ0RDs7OztJQXZDQywrQ0FlQzs7SUFFRCw4Q0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IGZyb20gZmFjZXQgaGVhZGVyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSBudWxsKSB7IC8vIGludGVycnVwdCBldmVudCBmb3IgbG9ja2VkIGZhY2V0c1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXllQ2xpY2socGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gY2hhbmdlIHNlYXJjaCBpbnB1dCB0ZXh0XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIHByZXNzZWQgcmV0dXJuIHdoaWxlIHR5cGluZyBpbiBzZWFyY2hcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2VudGVyJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZTonLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldHN3cmFwcGVycmVzcG9uc2UnOiAvLyBpbmNvbWluZyBhdXRvY29tcGxldGUgcmVzcG9uc2VcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGlwcHlNYWtlcihwYXlsb2FkLnJlc3BvbnNlLCBwYXlsb2FkLmZhY2V0SWQuaW5wdXRQYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJzKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnRhZ2NsaWNrJzpcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluY2x1ZGVzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNba2V5XS5zcGxpY2UodGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YocGF5bG9hZCksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgb3V0ZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFeWVDbGljayA9IHR5cGUgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGVzIHRoZSBzdGF0dXMgb2YgdGhlIHNlbGVjdGVkIGV5ZSwgdGhlbiByZWxvYWRzIHRoZSBjb21wb25lbnQuXG4gICAgKi9cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMpIHtcbiAgICAgIGxldCBpID0gdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMuaW5kZXhPZih0eXBlKVxuICAgICAgaWYgKGkgPj0gMCkgeyAvLyBpZiB0aGUgZXllIHdhcyBjbG9zZWRcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMuc3BsaWNlKGksIDEpIC8vIG9wZW4gdGhlIGV5ZVxuICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGV5ZSB3YXMgb3BlblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xvc2VkRXllcy5wdXNoKHR5cGUpIC8vIGNsb3NlIHRoZSBleWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlZEV5ZXMgPSBbdHlwZV1cbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpIC8vIHJlbG9hZCB0aGUgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgZGF0YVxuICB9XG5cbiAgdXBkYXRlRmlsdGVycyA9IHNlbGVjdGVkQnViYmxlID0+IHtcbiAgICAvKlxuICAgICAgQWRkcyAob3IgcmVtb3ZlcykgdGhlIElEIG9mIHRoZSBzZWxlY3RlZCBidWJibGUgZnJvbSB0aGUgYXJyYXkgb2YgdGhhdCB0eXBlIG9mIGVudGl0eS5cbiAgICAgIEV4YW1wbGU6XG4gICAgICAgIOKAoiBDbGljayBvbiBidWJibGUgXCIwMjYzYTQwNy1kMGRkXCIgb2YgdHlwZSBcIm9yZ1wiXG4gICAgICAgIOKAoiBBZGQgXCIwMjYzYTQwNy1kMGRkXCIgdG8gYXJyYXkgXCJvcmdcIi5cbiAgICAgIFJlc3VsdDpcbiAgICAgICAg4oCiIGxvY2tlZEZhY2V0cyA9IHsgXCJvcmdcIjpbIFwiMDI2M2E0MDctZDBkZFwiIF0gfVxuICAgICovXG4gICAgc2VsZWN0ZWRCdWJibGUuZW50aXR5LmlkLnJlcGxhY2UoLyAvZywgJy0nKSAvLyBmaXggZm9yIHNwYWNlIGluIElEXG4gICAgY29uc3QgeyBpZCwgdHlwZU9mRW50aXR5IH0gPSBzZWxlY3RlZEJ1YmJsZS5lbnRpdHkgLy8gcGF5bG9hZCBpcyB0aGUgc2VsZWN0ZWQgYnViYmxlXG4gICAgaWYgKCF0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0pIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XSA9IFtdXG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0uaW5jbHVkZXMoaWQpKSB7XG4gICAgICBsZXQgaSA9IHRoaXMuZGF0YVNvdXJjZS5sb2NrZWRGYWNldHNbdHlwZU9mRW50aXR5XS5pbmRleE9mKGlkKVxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvY2tlZEZhY2V0c1t0eXBlT2ZFbnRpdHldLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9ja2VkRmFjZXRzW3R5cGVPZkVudGl0eV0ucHVzaChpZClcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZSh0aGlzLmRhdGFTb3VyY2UubGFzdERhdGEpIC8vIHJlbG9hZCB0aGUgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgZGF0YVxuICB9XG59Il19