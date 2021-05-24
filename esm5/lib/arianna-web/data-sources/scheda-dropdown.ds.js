import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaDropdownDS = /** @class */ (function (_super) {
    __extends(AwSchedaDropdownDS, _super);
    function AwSchedaDropdownDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaDropdownDS.prototype.transform = function (response) {
        var digitalObjects = response.digitalObjects;
        var firstObject = digitalObjects[0];
        return {
            header: {
                label: firstObject.label,
                icon: {
                    id: 'n7-icon-caret-down'
                },
                payload: 'toggle',
            },
            items: digitalObjects.map(function (_a, index) {
                var label = _a.label, type = _a.type;
                return ({
                    label: label,
                    type: type,
                    payload: index,
                    selected: index === 0,
                });
            })
        };
    };
    AwSchedaDropdownDS.prototype.toggle = function () {
        var classes = this.output.classes;
        this.output.classes = classes ? null : 'is-open';
    };
    AwSchedaDropdownDS.prototype.onChange = function (payload) {
        var _this = this;
        // link check
        if (this.output.items[payload].type !== 'external') {
            this.output.items.forEach(function (item) {
                item.selected = item.payload === payload;
                if (item.selected) {
                    _this.output.header.label = item.label;
                }
            });
        }
        // close
        this.toggle();
    };
    return AwSchedaDropdownDS;
}(DataSource));
export { AwSchedaDropdownDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtZHJvcGRvd24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUF3QyxzQ0FBVTtJQUFsRDs7SUF1Q0EsQ0FBQztJQXRDVyxzQ0FBUyxHQUFuQixVQUFvQixRQUFRO1FBQ2xCLElBQUEsd0NBQWMsQ0FBYztRQUNwQyxJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTztZQUNMLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSixFQUFFLEVBQUUsb0JBQW9CO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsUUFBUTthQUNsQjtZQUNELEtBQUssRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBZSxFQUFFLEtBQUs7b0JBQXBCLGdCQUFLLEVBQUUsY0FBSTtnQkFBYyxPQUFBLENBQUM7b0JBQ3JELEtBQUssT0FBQTtvQkFDTCxJQUFJLE1BQUE7b0JBQ0osT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDO2lCQUN0QixDQUFDO1lBTG9ELENBS3BELENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDVSxJQUFBLDZCQUFPLENBQWlCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxPQUFPO1FBQWhCLGlCQVlDO1FBWEMsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN2QztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxRQUFRO1FBQ1IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUF2Q0QsQ0FBd0MsVUFBVSxHQXVDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2NoZWRhRHJvcGRvd25EYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYURyb3Bkb3duRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShyZXNwb25zZSk6IFNjaGVkYURyb3Bkb3duRGF0YSB7XG4gICAgY29uc3QgeyBkaWdpdGFsT2JqZWN0cyB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgZmlyc3RPYmplY3QgPSBkaWdpdGFsT2JqZWN0c1swXTtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGxhYmVsOiBmaXJzdE9iamVjdC5sYWJlbCxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIGlkOiAnbjctaWNvbi1jYXJldC1kb3duJ1xuICAgICAgICB9LFxuICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcbiAgICAgIH0sXG4gICAgICBpdGVtczogZGlnaXRhbE9iamVjdHMubWFwKCh7IGxhYmVsLCB0eXBlIH0sIGluZGV4KSA9PiAoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgcGF5bG9hZDogaW5kZXgsXG4gICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PT0gMCxcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLm91dHB1dDtcbiAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gY2xhc3NlcyA/IG51bGwgOiAnaXMtb3Blbic7XG4gIH1cblxuICBvbkNoYW5nZShwYXlsb2FkKSB7XG4gICAgLy8gbGluayBjaGVja1xuICAgIGlmICh0aGlzLm91dHB1dC5pdGVtc1twYXlsb2FkXS50eXBlICE9PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLm91dHB1dC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtLnBheWxvYWQgPT09IHBheWxvYWQ7XG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5vdXRwdXQuaGVhZGVyLmxhYmVsID0gaXRlbS5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNsb3NlXG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxufVxuIl19