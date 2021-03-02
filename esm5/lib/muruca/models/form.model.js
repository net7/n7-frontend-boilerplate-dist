import { Subject, ReplaySubject } from 'rxjs';
import { MrInputTextDS } from '../data-sources/form/input-text.ds';
import { MrInputTextEH } from '../event-handlers/form/input-text.eh';
import { MrInputSelectDS } from '../data-sources/form/input-select.ds';
import { MrInputSelectEH } from '../event-handlers/form/input-select.eh';
import { MrInputCheckboxDS } from '../data-sources/form/input-checkbox.ds';
import { MrInputCheckboxEH } from '../event-handlers/form/input-checkbox.eh';
var MrFormModel = /** @class */ (function () {
    function MrFormModel() {
        var _this = this;
        this.loaded$ = new ReplaySubject();
        this.inputs = {};
        this.inputTypes = {
            text: {
                ds: MrInputTextDS,
                eh: MrInputTextEH
            },
            select: {
                ds: MrInputSelectDS,
                eh: MrInputSelectEH
            },
            checkbox: {
                ds: MrInputCheckboxDS,
                eh: MrInputCheckboxEH
            }
        };
        this.changed$ = new Subject();
        this.getInput = function (id) { return _this.inputs[id].ds; };
        this.getInputs = function () {
            var inputs = {};
            Object.keys(_this.inputs).forEach(function (id) {
                inputs[id] = _this.getInput(id);
            });
            return inputs;
        };
    }
    MrFormModel.prototype.init = function (config) {
        this.config = config;
        // init inputs
        this.initInputs();
        // emit signal
        this.loaded$.next(true);
    };
    MrFormModel.prototype.getState = function () {
        var _this = this;
        var state = {};
        Object.keys(this.inputs).forEach(function (key) {
            state[key] = _this.inputs[key].ds.getState();
        });
        return state;
    };
    MrFormModel.prototype.addInputType = function (type, ds, eh) {
        if (this.inputTypes[type]) {
            throw Error("input type " + type + " already exists!");
        }
        this.inputTypes[type] = { ds: ds, eh: eh };
    };
    MrFormModel.prototype.initInputs = function () {
        var _this = this;
        var sections = this.config.sections;
        sections.forEach(function (section) {
            section.inputs.forEach(function (_a) {
                var id = _a.id, type = _a.type, options = _a.options, state = _a.state, data = _a.data;
                var DSClass = _this.inputTypes[type].ds;
                var EHClass = _this.inputTypes[type].eh;
                var DSInstance = new DSClass(options || {});
                var EHInstance = new EHClass();
                // set datasource id
                DSInstance.id = id;
                // set initial data
                if (data) {
                    DSInstance.update(data);
                }
                // set state
                if (state) {
                    DSInstance.setState(state);
                }
                // set eventhandler hostid
                EHInstance.hostId = id;
                // attach datasource to eventhandler
                EHInstance.dataSource = DSInstance;
                // attach changed$ to eventhandler
                EHInstance.changed$ = _this.changed$;
                // listen to input events
                EHInstance.listen();
                // save it to input
                _this.inputs[id] = {
                    ds: DSInstance,
                    eh: EHInstance,
                    emit: function (t, p) { return EHInstance.emitInner(t, p); }
                };
            });
        });
    };
    return MrFormModel;
}());
export { MrFormModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbW9kZWxzL2Zvcm0ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTzdFO0lBQUE7UUFBQSxpQkE4R0M7UUEzR1EsWUFBTyxHQUEyQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRXRELFdBQU0sR0FNVCxFQUFFLENBQUM7UUFFQyxlQUFVLEdBS2Q7WUFDRixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLEVBQUUsRUFBRSxhQUFhO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxlQUFlO2dCQUNuQixFQUFFLEVBQUUsZUFBZTthQUNwQjtZQUNELFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixFQUFFLEVBQUUsaUJBQWlCO2FBQ3RCO1NBQ0YsQ0FBQztRQUVGLGFBQVEsR0FBNkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVluRCxhQUFRLEdBQUcsVUFBQyxFQUFVLElBQTZCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQWxCLENBQWtCLENBQUM7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Z0JBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUc7b0JBQ2hCLEVBQUUsRUFBRSxVQUFVO29CQUNkLEVBQUUsRUFBRSxVQUFVO29CQUNkLElBQUksRUFBRSxVQUFDLENBQVMsRUFBRSxDQUFNLElBQUssT0FBQSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBMUIsQ0FBMEI7aUJBQ3hELENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTlHRCxJQThHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1ySW5wdXRUZXh0RFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC10ZXh0LmRzJztcbmltcG9ydCB7IE1ySW5wdXRUZXh0RUggfSBmcm9tICcuLi9ldmVudC1oYW5kbGVycy9mb3JtL2lucHV0LXRleHQuZWgnO1xuaW1wb3J0IHsgTXJJbnB1dFNlbGVjdERTIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtc2VsZWN0LmRzJztcbmltcG9ydCB7IE1ySW5wdXRTZWxlY3RFSCB9IGZyb20gJy4uL2V2ZW50LWhhbmRsZXJzL2Zvcm0vaW5wdXQtc2VsZWN0LmVoJztcbmltcG9ydCB7IE1ySW5wdXRDaGVja2JveERTIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtY2hlY2tib3guZHMnO1xuaW1wb3J0IHsgTXJJbnB1dENoZWNrYm94RUggfSBmcm9tICcuLi9ldmVudC1oYW5kbGVycy9mb3JtL2lucHV0LWNoZWNrYm94LmVoJztcbmltcG9ydCB7XG4gIE1yQ2hhbmdlZFBhcmFtcyxcbiAgTXJJbnB1dERhdGFTb3VyY2UsXG4gIE1yRm9ybUNvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNckZvcm1Nb2RlbCB7XG4gIHB1YmxpYyBjb25maWc6IE1yRm9ybUNvbmZpZztcblxuICBwdWJsaWMgbG9hZGVkJDogUmVwbGF5U3ViamVjdDxib29sZWFuPiA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG5cbiAgcHVibGljIGlucHV0czoge1xuICAgIFtpZDogc3RyaW5nXToge1xuICAgICAgZHM6IGFueTtcbiAgICAgIGVoOiBhbnk7XG4gICAgICBlbWl0OiAodDogc3RyaW5nLCBwOiBhbnkpID0+IEZ1bmN0aW9uO1xuICAgIH07XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGlucHV0VHlwZXM6IHtcbiAgICBbaWQ6IHN0cmluZ106IHtcbiAgICAgIGRzOiBhbnk7XG4gICAgICBlaDogYW55O1xuICAgIH07XG4gIH0gPSB7XG4gICAgdGV4dDoge1xuICAgICAgZHM6IE1ySW5wdXRUZXh0RFMsXG4gICAgICBlaDogTXJJbnB1dFRleHRFSFxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBkczogTXJJbnB1dFNlbGVjdERTLFxuICAgICAgZWg6IE1ySW5wdXRTZWxlY3RFSFxuICAgIH0sXG4gICAgY2hlY2tib3g6IHtcbiAgICAgIGRzOiBNcklucHV0Q2hlY2tib3hEUyxcbiAgICAgIGVoOiBNcklucHV0Q2hlY2tib3hFSFxuICAgIH1cbiAgfTtcblxuICBjaGFuZ2VkJDogU3ViamVjdDxNckNoYW5nZWRQYXJhbXM+ID0gbmV3IFN1YmplY3QoKTtcblxuICBpbml0KGNvbmZpZzogTXJGb3JtQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG5cbiAgICAvLyBpbml0IGlucHV0c1xuICAgIHRoaXMuaW5pdElucHV0cygpO1xuXG4gICAgLy8gZW1pdCBzaWduYWxcbiAgICB0aGlzLmxvYWRlZCQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGdldElucHV0ID0gKGlkOiBzdHJpbmcpOiBNcklucHV0RGF0YVNvdXJjZTxhbnk+ID0+IHRoaXMuaW5wdXRzW2lkXS5kcztcblxuICBnZXRJbnB1dHMgPSAoKToge1xuICAgIFtpZDogc3RyaW5nXTogTXJJbnB1dERhdGFTb3VyY2U8YW55PjtcbiAgfSA9PiB7XG4gICAgY29uc3QgaW5wdXRzID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5pbnB1dHMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBpbnB1dHNbaWRdID0gdGhpcy5nZXRJbnB1dChpZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0cztcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5pbnB1dHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgc3RhdGVba2V5XSA9IHRoaXMuaW5wdXRzW2tleV0uZHMuZ2V0U3RhdGUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBhZGRJbnB1dFR5cGUodHlwZTogc3RyaW5nLCBkczogYW55LCBlaDogYW55KSB7XG4gICAgaWYgKHRoaXMuaW5wdXRUeXBlc1t0eXBlXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYGlucHV0IHR5cGUgJHt0eXBlfSBhbHJlYWR5IGV4aXN0cyFgKTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0VHlwZXNbdHlwZV0gPSB7IGRzLCBlaCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0SW5wdXRzKCkge1xuICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IHRoaXMuY29uZmlnO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKHtcbiAgICAgICAgaWQsIHR5cGUsIG9wdGlvbnMsIHN0YXRlLCBkYXRhXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IERTQ2xhc3MgPSB0aGlzLmlucHV0VHlwZXNbdHlwZV0uZHM7XG4gICAgICAgIGNvbnN0IEVIQ2xhc3MgPSB0aGlzLmlucHV0VHlwZXNbdHlwZV0uZWg7XG4gICAgICAgIGNvbnN0IERTSW5zdGFuY2UgPSBuZXcgRFNDbGFzcyhvcHRpb25zIHx8IHt9KTtcbiAgICAgICAgY29uc3QgRUhJbnN0YW5jZSA9IG5ldyBFSENsYXNzKCk7XG4gICAgICAgIC8vIHNldCBkYXRhc291cmNlIGlkXG4gICAgICAgIERTSW5zdGFuY2UuaWQgPSBpZDtcbiAgICAgICAgLy8gc2V0IGluaXRpYWwgZGF0YVxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIERTSW5zdGFuY2UudXBkYXRlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBzdGF0ZVxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICBEU0luc3RhbmNlLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZXZlbnRoYW5kbGVyIGhvc3RpZFxuICAgICAgICBFSEluc3RhbmNlLmhvc3RJZCA9IGlkO1xuICAgICAgICAvLyBhdHRhY2ggZGF0YXNvdXJjZSB0byBldmVudGhhbmRsZXJcbiAgICAgICAgRUhJbnN0YW5jZS5kYXRhU291cmNlID0gRFNJbnN0YW5jZTtcbiAgICAgICAgLy8gYXR0YWNoIGNoYW5nZWQkIHRvIGV2ZW50aGFuZGxlclxuICAgICAgICBFSEluc3RhbmNlLmNoYW5nZWQkID0gdGhpcy5jaGFuZ2VkJDtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGlucHV0IGV2ZW50c1xuICAgICAgICBFSEluc3RhbmNlLmxpc3RlbigpO1xuICAgICAgICAvLyBzYXZlIGl0IHRvIGlucHV0XG4gICAgICAgIHRoaXMuaW5wdXRzW2lkXSA9IHtcbiAgICAgICAgICBkczogRFNJbnN0YW5jZSxcbiAgICAgICAgICBlaDogRUhJbnN0YW5jZSxcbiAgICAgICAgICBlbWl0OiAodDogc3RyaW5nLCBwOiBhbnkpID0+IEVISW5zdGFuY2UuZW1pdElubmVyKHQsIHApXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19