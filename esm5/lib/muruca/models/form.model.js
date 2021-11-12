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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbW9kZWxzL2Zvcm0ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTzdFO0lBQUE7UUFBQSxpQkE4R0M7UUEzR1EsWUFBTyxHQUEyQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRXRELFdBQU0sR0FNVCxFQUFFLENBQUM7UUFFQyxlQUFVLEdBS2Q7WUFDRixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLEVBQUUsRUFBRSxhQUFhO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxlQUFlO2dCQUNuQixFQUFFLEVBQUUsZUFBZTthQUNwQjtZQUNELFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixFQUFFLEVBQUUsaUJBQWlCO2FBQ3RCO1NBQ0YsQ0FBQztRQUVGLGFBQVEsR0FBNkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVluRCxhQUFRLEdBQUcsVUFBQyxFQUFVLElBQTZCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQWxCLENBQWtCLENBQUM7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Z0JBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUc7b0JBQ2hCLEVBQUUsRUFBRSxVQUFVO29CQUNkLEVBQUUsRUFBRSxVQUFVO29CQUNkLElBQUksRUFBRSxVQUFDLENBQVMsRUFBRSxDQUFNLElBQUssT0FBQSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBMUIsQ0FBMEI7aUJBQ3hELENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTlHRCxJQThHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJJbnB1dFRleHREUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcy9mb3JtL2lucHV0LXRleHQuZHMnO1xyXG5pbXBvcnQgeyBNcklucHV0VGV4dEVIIH0gZnJvbSAnLi4vZXZlbnQtaGFuZGxlcnMvZm9ybS9pbnB1dC10ZXh0LmVoJztcclxuaW1wb3J0IHsgTXJJbnB1dFNlbGVjdERTIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtc2VsZWN0LmRzJztcclxuaW1wb3J0IHsgTXJJbnB1dFNlbGVjdEVIIH0gZnJvbSAnLi4vZXZlbnQtaGFuZGxlcnMvZm9ybS9pbnB1dC1zZWxlY3QuZWgnO1xyXG5pbXBvcnQgeyBNcklucHV0Q2hlY2tib3hEUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcy9mb3JtL2lucHV0LWNoZWNrYm94LmRzJztcclxuaW1wb3J0IHsgTXJJbnB1dENoZWNrYm94RUggfSBmcm9tICcuLi9ldmVudC1oYW5kbGVycy9mb3JtL2lucHV0LWNoZWNrYm94LmVoJztcclxuaW1wb3J0IHtcclxuICBNckNoYW5nZWRQYXJhbXMsXHJcbiAgTXJJbnB1dERhdGFTb3VyY2UsXHJcbiAgTXJGb3JtQ29uZmlnLFxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yRm9ybU1vZGVsIHtcclxuICBwdWJsaWMgY29uZmlnOiBNckZvcm1Db25maWc7XHJcblxyXG4gIHB1YmxpYyBsb2FkZWQkOiBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGlucHV0czoge1xyXG4gICAgW2lkOiBzdHJpbmddOiB7XHJcbiAgICAgIGRzOiBhbnk7XHJcbiAgICAgIGVoOiBhbnk7XHJcbiAgICAgIGVtaXQ6ICh0OiBzdHJpbmcsIHA6IGFueSkgPT4gRnVuY3Rpb247XHJcbiAgICB9O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBpbnB1dFR5cGVzOiB7XHJcbiAgICBbaWQ6IHN0cmluZ106IHtcclxuICAgICAgZHM6IGFueTtcclxuICAgICAgZWg6IGFueTtcclxuICAgIH07XHJcbiAgfSA9IHtcclxuICAgIHRleHQ6IHtcclxuICAgICAgZHM6IE1ySW5wdXRUZXh0RFMsXHJcbiAgICAgIGVoOiBNcklucHV0VGV4dEVIXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGRzOiBNcklucHV0U2VsZWN0RFMsXHJcbiAgICAgIGVoOiBNcklucHV0U2VsZWN0RUhcclxuICAgIH0sXHJcbiAgICBjaGVja2JveDoge1xyXG4gICAgICBkczogTXJJbnB1dENoZWNrYm94RFMsXHJcbiAgICAgIGVoOiBNcklucHV0Q2hlY2tib3hFSFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNoYW5nZWQkOiBTdWJqZWN0PE1yQ2hhbmdlZFBhcmFtcz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBpbml0KGNvbmZpZzogTXJGb3JtQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAvLyBpbml0IGlucHV0c1xyXG4gICAgdGhpcy5pbml0SW5wdXRzKCk7XHJcblxyXG4gICAgLy8gZW1pdCBzaWduYWxcclxuICAgIHRoaXMubG9hZGVkJC5uZXh0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXQgPSAoaWQ6IHN0cmluZyk6IE1ySW5wdXREYXRhU291cmNlPGFueT4gPT4gdGhpcy5pbnB1dHNbaWRdLmRzO1xyXG5cclxuICBnZXRJbnB1dHMgPSAoKToge1xyXG4gICAgW2lkOiBzdHJpbmddOiBNcklucHV0RGF0YVNvdXJjZTxhbnk+O1xyXG4gIH0gPT4ge1xyXG4gICAgY29uc3QgaW5wdXRzID0ge307XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmlucHV0cykuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgaW5wdXRzW2lkXSA9IHRoaXMuZ2V0SW5wdXQoaWQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5wdXRzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnB1dHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBzdGF0ZVtrZXldID0gdGhpcy5pbnB1dHNba2V5XS5kcy5nZXRTdGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBhZGRJbnB1dFR5cGUodHlwZTogc3RyaW5nLCBkczogYW55LCBlaDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFR5cGVzW3R5cGVdKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBpbnB1dCB0eXBlICR7dHlwZX0gYWxyZWFkeSBleGlzdHMhYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dFR5cGVzW3R5cGVdID0geyBkcywgZWggfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdElucHV0cygpIHtcclxuICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IHRoaXMuY29uZmlnO1xyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKCh7XHJcbiAgICAgICAgaWQsIHR5cGUsIG9wdGlvbnMsIHN0YXRlLCBkYXRhXHJcbiAgICAgIH0pID0+IHtcclxuICAgICAgICBjb25zdCBEU0NsYXNzID0gdGhpcy5pbnB1dFR5cGVzW3R5cGVdLmRzO1xyXG4gICAgICAgIGNvbnN0IEVIQ2xhc3MgPSB0aGlzLmlucHV0VHlwZXNbdHlwZV0uZWg7XHJcbiAgICAgICAgY29uc3QgRFNJbnN0YW5jZSA9IG5ldyBEU0NsYXNzKG9wdGlvbnMgfHwge30pO1xyXG4gICAgICAgIGNvbnN0IEVISW5zdGFuY2UgPSBuZXcgRUhDbGFzcygpO1xyXG4gICAgICAgIC8vIHNldCBkYXRhc291cmNlIGlkXHJcbiAgICAgICAgRFNJbnN0YW5jZS5pZCA9IGlkO1xyXG4gICAgICAgIC8vIHNldCBpbml0aWFsIGRhdGFcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgRFNJbnN0YW5jZS51cGRhdGUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBzdGF0ZVxyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgRFNJbnN0YW5jZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBldmVudGhhbmRsZXIgaG9zdGlkXHJcbiAgICAgICAgRUhJbnN0YW5jZS5ob3N0SWQgPSBpZDtcclxuICAgICAgICAvLyBhdHRhY2ggZGF0YXNvdXJjZSB0byBldmVudGhhbmRsZXJcclxuICAgICAgICBFSEluc3RhbmNlLmRhdGFTb3VyY2UgPSBEU0luc3RhbmNlO1xyXG4gICAgICAgIC8vIGF0dGFjaCBjaGFuZ2VkJCB0byBldmVudGhhbmRsZXJcclxuICAgICAgICBFSEluc3RhbmNlLmNoYW5nZWQkID0gdGhpcy5jaGFuZ2VkJDtcclxuICAgICAgICAvLyBsaXN0ZW4gdG8gaW5wdXQgZXZlbnRzXHJcbiAgICAgICAgRUhJbnN0YW5jZS5saXN0ZW4oKTtcclxuICAgICAgICAvLyBzYXZlIGl0IHRvIGlucHV0XHJcbiAgICAgICAgdGhpcy5pbnB1dHNbaWRdID0ge1xyXG4gICAgICAgICAgZHM6IERTSW5zdGFuY2UsXHJcbiAgICAgICAgICBlaDogRUhJbnN0YW5jZSxcclxuICAgICAgICAgIGVtaXQ6ICh0OiBzdHJpbmcsIHA6IGFueSkgPT4gRUhJbnN0YW5jZS5lbWl0SW5uZXIodCwgcClcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=