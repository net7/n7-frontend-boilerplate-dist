import { __extends } from "tslib";
import { AwFacetInput } from './aw-facet-input';
var RESULTS_LIMIT = 2000;
var AwFacetInputLink = /** @class */ (function (_super) {
    __extends(AwFacetInputLink, _super);
    function AwFacetInputLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwFacetInputLink.prototype.transform = function () {
        var _this = this;
        var facetId = this.getFacetId();
        var results = [];
        var resultsCounter = 0;
        this.data.forEach(function (_a) {
            var label = _a.label, counter = _a.counter, hidden = _a.hidden, rawValue = _a.value, rawOptions = _a.options;
            if (hidden) {
                return;
            }
            resultsCounter += 1;
            if (resultsCounter > RESULTS_LIMIT) {
                return;
            }
            // normalize value
            var value = "" + rawValue;
            var options = rawOptions || {};
            var classes = [];
            if (options.classes) {
                classes.push(options.classes);
            }
            if (_this._isActive(_this.facetValue, value)) {
                classes.push('is-active');
            }
            if (value === '__loading__') {
                classes.push('loader-link');
            }
            results.push({
                type: 'link',
                id: _this.getId(),
                text: label,
                counter: counter,
                payload: {
                    facetId: facetId,
                    source: 'input-link',
                    value: value,
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId: facetId, value: value },
            });
        });
        // empty state control
        var itemEmpty = results.filter(function (item) { return item.id === 'empty'; })[0];
        if (this.isEmpty) {
            if (itemEmpty) {
                itemEmpty.classes = 'empty-text-link';
            }
            else {
                var label = this.getConfig().emptyState.label;
                var emptyId = 'empty-link';
                results.push({
                    type: 'link',
                    id: emptyId,
                    text: label,
                    classes: 'empty-text-link',
                    _meta: { facetId: emptyId, value: null },
                });
            }
        }
        else if (itemEmpty) {
            itemEmpty.classes = 'empty-text-link is-hidden';
        }
        return results;
    };
    AwFacetInputLink.prototype.setActive = function (facetValue) {
        var _this = this;
        this.output.forEach(function (config) {
            var isActive = _this._isActive(facetValue, config._meta.value);
            var classes = config.classes ? config.classes.split(' ') : [];
            if (!isActive) {
                classes = classes.filter(function (className) { return className !== 'is-active'; });
            }
            else if (classes.indexOf('is-active') === -1) {
                classes.push('is-active');
            }
            config.classes = classes.join(' ');
        });
    };
    AwFacetInputLink.prototype._isActive = function (facetValue, value) {
        this.facetValue = facetValue;
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1)
            || (facetValue === value));
    };
    AwFacetInputLink.prototype.clear = function () {
        this.facetValue = [];
    };
    return AwFacetInputLink;
}(AwFacetInput));
export { AwFacetInputLink };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctZmFjZXQtaW5wdXRzL2F3LWZhY2V0LWlucHV0LWxpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFFM0I7SUFBc0Msb0NBQVk7SUFBbEQ7O0lBaUdBLENBQUM7SUE5Rlcsb0NBQVMsR0FBbkI7UUFBQSxpQkFtRUM7UUFsRUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxFQU1sQjtnQkFMQyxnQkFBSyxFQUNMLG9CQUFPLEVBQ1Asa0JBQU0sRUFDTixtQkFBZSxFQUNmLHVCQUFtQjtZQUVuQixJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPO2FBQ1I7WUFDRCxjQUFjLElBQUksQ0FBQyxDQUFDO1lBRXBCLElBQUksY0FBYyxHQUFHLGFBQWEsRUFBRTtnQkFDbEMsT0FBTzthQUNSO1lBRUQsa0JBQWtCO1lBQ2xCLElBQU0sS0FBSyxHQUFHLEtBQUcsUUFBVSxDQUFDO1lBQzVCLElBQU0sT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFFakMsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFFO1lBQ3ZELElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMs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QixPQUFPLENBQ0wsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7ZUFDNUQsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFqR0QsQ0FBc0MsWUFBWSxHQWlHakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0ZhY2V0SW5wdXQgfSBmcm9tICcuL2F3LWZhY2V0LWlucHV0JztcblxuY29uc3QgUkVTVUxUU19MSU1JVCA9IDIwMDA7XG5cbmV4cG9ydCBjbGFzcyBBd0ZhY2V0SW5wdXRMaW5rIGV4dGVuZHMgQXdGYWNldElucHV0IHtcbiAgcHJpdmF0ZSBmYWNldFZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgbGV0IHJlc3VsdHNDb3VudGVyID0gMDtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKCh7XG4gICAgICBsYWJlbCxcbiAgICAgIGNvdW50ZXIsXG4gICAgICBoaWRkZW4sXG4gICAgICB2YWx1ZTogcmF3VmFsdWUsXG4gICAgICBvcHRpb25zOiByYXdPcHRpb25zXG4gICAgfSkgPT4ge1xuICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXN1bHRzQ291bnRlciArPSAxO1xuXG4gICAgICBpZiAocmVzdWx0c0NvdW50ZXIgPiBSRVNVTFRTX0xJTUlUKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlXG4gICAgICBjb25zdCB2YWx1ZSA9IGAke3Jhd1ZhbHVlfWA7XG4gICAgICBjb25zdCBvcHRpb25zID0gcmF3T3B0aW9ucyB8fCB7fTtcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxuICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKHRoaXMuZmFjZXRWYWx1ZSwgdmFsdWUpKSB7IGNsYXNzZXMucHVzaCgnaXMtYWN0aXZlJyk7IH1cbiAgICAgIGlmICh2YWx1ZSA9PT0gJ19fbG9hZGluZ19fJykgeyBjbGFzc2VzLnB1c2goJ2xvYWRlci1saW5rJyk7IH1cblxuICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgY291bnRlcixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGZhY2V0SWQsXG4gICAgICAgICAgc291cmNlOiAnaW5wdXQtbGluaycsXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IG9wdGlvbnMuaWNvbiB8fCBudWxsLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgX21ldGE6IHsgZmFjZXRJZCwgdmFsdWUgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZW1wdHkgc3RhdGUgY29udHJvbFxuICAgIGNvbnN0IGl0ZW1FbXB0eSA9IHJlc3VsdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSAnZW1wdHknKVswXTtcbiAgICBpZiAodGhpcy5pc0VtcHR5KSB7XG4gICAgICBpZiAoaXRlbUVtcHR5KSB7XG4gICAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLmdldENvbmZpZygpLmVtcHR5U3RhdGU7XG4gICAgICAgIGNvbnN0IGVtcHR5SWQgPSAnZW1wdHktbGluayc7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGlkOiBlbXB0eUlkLFxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgIGNsYXNzZXM6ICdlbXB0eS10ZXh0LWxpbmsnLFxuICAgICAgICAgIF9tZXRhOiB7IGZhY2V0SWQ6IGVtcHR5SWQsIHZhbHVlOiBudWxsIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbUVtcHR5KSB7XG4gICAgICBpdGVtRW1wdHkuY2xhc3NlcyA9ICdlbXB0eS10ZXh0LWxpbmsgaXMtaGlkZGVuJztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmUoZmFjZXRWYWx1ZSkge1xuICAgIHRoaXMub3V0cHV0LmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZShmYWNldFZhbHVlLCBjb25maWcuX21ldGEudmFsdWUpO1xuICAgICAgbGV0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcyA/IGNvbmZpZy5jbGFzc2VzLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKChjbGFzc05hbWUpID0+IGNsYXNzTmFtZSAhPT0gJ2lzLWFjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmIChjbGFzc2VzLmluZGV4T2YoJ2lzLWFjdGl2ZScpID09PSAtMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgICAgY29uZmlnLmNsYXNzZXMgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlKGZhY2V0VmFsdWUsIHZhbHVlKSB7XG4gICAgdGhpcy5mYWNldFZhbHVlID0gZmFjZXRWYWx1ZTtcblxuICAgIHJldHVybiAoXG4gICAgICAoQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSlcbiAgICAgIHx8IChmYWNldFZhbHVlID09PSB2YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=