import { AwFacetInput } from './aw-facet-input';
const RESULTS_LIMIT = 2000;
export class AwFacetInputLink extends AwFacetInput {
    transform() {
        const facetId = this.getFacetId();
        const results = [];
        let resultsCounter = 0;
        this.data.forEach(({ label, counter, hidden, value: rawValue, options: rawOptions }) => {
            if (hidden) {
                return;
            }
            resultsCounter += 1;
            if (resultsCounter > RESULTS_LIMIT) {
                return;
            }
            // normalize value
            const value = `${rawValue}`;
            const options = rawOptions || {};
            const classes = [];
            if (options.classes) {
                classes.push(options.classes);
            }
            if (this._isActive(this.facetValue, value)) {
                classes.push('is-active');
            }
            if (value === '__loading__') {
                classes.push('loader-link');
            }
            results.push({
                type: 'link',
                id: this.getId(),
                text: label,
                counter,
                payload: {
                    facetId,
                    source: 'input-link',
                    value,
                },
                icon: options.icon || null,
                classes: classes.join(' '),
                _meta: { facetId, value },
            });
        });
        // empty state control
        const itemEmpty = results.filter((item) => item.id === 'empty')[0];
        if (this.isEmpty) {
            if (itemEmpty) {
                itemEmpty.classes = 'empty-text-link';
            }
            else {
                const { label } = this.getConfig().emptyState;
                const emptyId = 'empty-link';
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
    }
    setActive(facetValue) {
        this.output.forEach((config) => {
            const isActive = this._isActive(facetValue, config._meta.value);
            let classes = config.classes ? config.classes.split(' ') : [];
            if (!isActive) {
                classes = classes.filter((className) => className !== 'is-active');
            }
            else if (classes.indexOf('is-active') === -1) {
                classes.push('is-active');
            }
            config.classes = classes.join(' ');
        });
    }
    _isActive(facetValue, value) {
        this.facetValue = facetValue;
        return ((Array.isArray(facetValue) && facetValue.indexOf(value) !== -1)
            || (facetValue === value));
    }
    clear() {
        this.facetValue = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctZmFjZXQtaW5wdXRzL2F3LWZhY2V0LWlucHV0LWxpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUUzQixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUd0QyxTQUFTO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxNQUFNLEVBQ04sS0FBSyxFQUFFLFFBQVEsRUFDZixPQUFPLEVBQUUsVUFBVSxFQUNwQixFQUFFLEVBQUU7WUFDSCxJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPO2FBQ1I7WUFDRCxjQUFjLElBQUksQ0FBQyxDQUFDO1lBRXBCLElBQUksY0FBYyxHQUFHLGFBQWEsRUFBRTtnQkFDbEMsT0FBTzthQUNSO1lBRUQsa0JBQWtCO1lBQ2xCLE1BQU0sS0FBSyxHQUFHLEdBQUcsUUFBUSxFQUFFLENBQUM7WUFDNUIsTUFBTSxPQUFPLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUVqQyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUks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QUNMLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2VBQzVELENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0ZhY2V0SW5wdXQgfSBmcm9tICcuL2F3LWZhY2V0LWlucHV0JztcclxuXHJcbmNvbnN0IFJFU1VMVFNfTElNSVQgPSAyMDAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RmFjZXRJbnB1dExpbmsgZXh0ZW5kcyBBd0ZhY2V0SW5wdXQge1xyXG4gIHByaXZhdGUgZmFjZXRWYWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XHJcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBsZXQgcmVzdWx0c0NvdW50ZXIgPSAwO1xyXG5cclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKCh7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjb3VudGVyLFxyXG4gICAgICBoaWRkZW4sXHJcbiAgICAgIHZhbHVlOiByYXdWYWx1ZSxcclxuICAgICAgb3B0aW9uczogcmF3T3B0aW9uc1xyXG4gICAgfSkgPT4ge1xyXG4gICAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHNDb3VudGVyICs9IDE7XHJcblxyXG4gICAgICBpZiAocmVzdWx0c0NvdW50ZXIgPiBSRVNVTFRTX0xJTUlUKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBub3JtYWxpemUgdmFsdWVcclxuICAgICAgY29uc3QgdmFsdWUgPSBgJHtyYXdWYWx1ZX1gO1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gcmF3T3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2xhc3NlcykgeyBjbGFzc2VzLnB1c2gob3B0aW9ucy5jbGFzc2VzKTsgfVxyXG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUodGhpcy5mYWNldFZhbHVlLCB2YWx1ZSkpIHsgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTsgfVxyXG4gICAgICBpZiAodmFsdWUgPT09ICdfX2xvYWRpbmdfXycpIHsgY2xhc3Nlcy5wdXNoKCdsb2FkZXItbGluaycpOyB9XHJcblxyXG4gICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICBpZDogdGhpcy5nZXRJZCgpLFxyXG4gICAgICAgIHRleHQ6IGxhYmVsLFxyXG4gICAgICAgIGNvdW50ZXIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgZmFjZXRJZCxcclxuICAgICAgICAgIHNvdXJjZTogJ2lucHV0LWxpbmsnLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiBvcHRpb25zLmljb24gfHwgbnVsbCxcclxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzLmpvaW4oJyAnKSxcclxuICAgICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVtcHR5IHN0YXRlIGNvbnRyb2xcclxuICAgIGNvbnN0IGl0ZW1FbXB0eSA9IHJlc3VsdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSAnZW1wdHknKVswXTtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcclxuICAgICAgaWYgKGl0ZW1FbXB0eSkge1xyXG4gICAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5nZXRDb25maWcoKS5lbXB0eVN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5SWQgPSAnZW1wdHktbGluayc7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgIGlkOiBlbXB0eUlkLFxyXG4gICAgICAgICAgdGV4dDogbGFiZWwsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnZW1wdHktdGV4dC1saW5rJyxcclxuICAgICAgICAgIF9tZXRhOiB7IGZhY2V0SWQ6IGVtcHR5SWQsIHZhbHVlOiBudWxsIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXRlbUVtcHR5KSB7XHJcbiAgICAgIGl0ZW1FbXB0eS5jbGFzc2VzID0gJ2VtcHR5LXRleHQtbGluayBpcy1oaWRkZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XHJcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZShmYWNldFZhbHVlLCBjb25maWcuX21ldGEudmFsdWUpO1xyXG4gICAgICBsZXQgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzID8gY29uZmlnLmNsYXNzZXMuc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XHJcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKChjbGFzc05hbWUpID0+IGNsYXNzTmFtZSAhPT0gJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNsYXNzZXMuaW5kZXhPZignaXMtYWN0aXZlJykgPT09IC0xKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdpcy1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25maWcuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pc0FjdGl2ZShmYWNldFZhbHVlLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5mYWNldFZhbHVlID0gZmFjZXRWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMSlcclxuICAgICAgfHwgKGZhY2V0VmFsdWUgPT09IHZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMuZmFjZXRWYWx1ZSA9IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=