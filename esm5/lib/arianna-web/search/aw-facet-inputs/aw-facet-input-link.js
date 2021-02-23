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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctZmFjZXQtaW5wdXRzL2F3LWZhY2V0LWlucHV0LWxpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFFM0I7SUFBc0Msb0NBQVk7SUFBbEQ7O0lBaUdBLENBQUM7SUE5Rlcsb0NBQVMsR0FBbkI7UUFBQSxpQkFtRUM7UUFsRUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxFQU1sQjtnQkFMQyxnQkFBSyxFQUNMLG9CQUFPLEVBQ1Asa0JBQU0sRUFDTixtQkFBZSxFQUNmLHVCQUFtQjtZQUVuQixJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPO2FBQ1I7WUFDRCxjQUFjLElBQUksQ0FBQyxDQUFDO1lBRXBCLElBQUksY0FBYyxHQUFHLGFBQWEsRUFBRTtnQkFDbEMsT0FBTzthQUNSO1lBRUQsa0JBQWtCO1lBQ2xCLElBQU0sS0FBSyxHQUFHLEtBQUcsUUFBVSxDQUFDO1lBQzVCLElBQU0sT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFFakMsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFFO1lBQ3ZELElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMs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QixPQUFPLENBQ0wsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7ZUFDNUQsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFqR0QsQ0FBc0MsWUFBWSxHQWlHakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0ZhY2V0SW5wdXQgfSBmcm9tICcuL2F3LWZhY2V0LWlucHV0JztcclxuXHJcbmNvbnN0IFJFU1VMVFNfTElNSVQgPSAyMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBBd0ZhY2V0SW5wdXQge1xyXG4gIHByaXZhdGUgZmFjZXRWYWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XHJcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBsZXQgcmVzdWx0c0NvdW50ZXIgPSAwO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKCh7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjb3VudGVyLFxyXG4gICAgICBoaWRkZW4sXHJcbiAgICAgIHZhbHVlOiByYXdWYWx1ZSxcclxuICAgICAgb3B0aW9uczogcmF3T3B0aW9uc1xyXG4gICAgfSkgPT4ge1xyXG4gICAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XHJcblxyXG4gICAgICBpZiAocmVzdWx0c0NvdW50ZXIgPiBSRVNVTFRTX0xJTUlUKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcclxuICAgICAgY29uc3QgdmFsdWUgPSBgJHtyYXdWYWx1ZX1gO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gcmF3T3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxyXG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUodGhpcy5mYWNldFZhbHVlLCB2YWx1ZSkpIHsgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTsgfVxyXG4gICAgICBpZiAodmFsdWUgPT09ICdfX2xvYWRpbmdfXycpIHsgY2xhc3Nlcy5wdXNoKCdsb2FkZXItbGluaycpOyB9XHJcblxyXG4gICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICAgIHRleHQ6IGxhYmVsLFxyXG4gICAgICAgIGNvdW50ZXIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcclxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcclxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVtcHR5IHN0YXRlIGNvbnRyb2xcclxuICAgIGNvbnN0IGl0ZW1FbXB0eSA9IHJlc3VsdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSAnZW1wdHknKVswXTtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcclxuICAgICAgaWYgKGl0ZW1FbXB0eSkge1xyXG4gICAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5nZXRDb25maWcoKS5lbXB0eVN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5SWQgPSAnZW1wdHktbGluayc7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgIGlkOiBlbXB0eUlkLFxyXG4gICAgICAgICAgdGV4dDogbGFiZWwsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcclxuICAgICAgICAgIF9tZXRhOiB7IGZhY2V0SWQ6IGVtcHR5SWQsIHZhbHVlOiBudWxsIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXRlbUVtcHR5KSB7XHJcbiAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayBpcy1oaWRkZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XHJcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZShmYWNldFZhbHVlLCBjb25maWcuX21ldGEudmFsdWUpO1xyXG4gICAgICBsZXQgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzID8gY29uZmlnLmNsYXNzZXMuc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKChjbGFzc05hbWUpID0+IGNsYXNzTmFtZSAhPT0gJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25maWcuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pc0FjdGl2ZShmYWNldFZhbHVlLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5mYWNldFZhbHVlID0gZmFjZXRWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSlcclxuICAgICAgfHwgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=