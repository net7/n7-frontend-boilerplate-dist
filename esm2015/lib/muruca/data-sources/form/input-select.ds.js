import { DataSource, _t } from '@n7-frontend/core';
export class MrInputSelectDS extends DataSource {
    constructor() {
        super(...arguments);
        this.state = {
            value: null,
            disabled: false,
            hidden: false,
        };
        this.getState = () => this.state;
    }
    transform(data) {
        return Object.assign(Object.assign({}, data), { options: this.getOptions(data.options) });
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.refresh();
    }
    clear() {
        this.setState({ value: null });
    }
    refresh() {
        const { hidden, disabled } = this.state;
        // render value
        this.output.options = this.getOptions(this.output.options);
        // render disabled
        this.output.disabled = disabled;
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    }
    getOptions(options) {
        const { value } = this.state;
        return options.map((option) => (Object.assign(Object.assign({}, option), { label: _t(option.label), selected: value === option.value })));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC1zZWxlY3QuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1uRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUdTLFVBQUssR0FBeUM7WUFDbkQsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQztRQVNGLGFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBbUM5QixDQUFDO0lBMUNXLFNBQVMsQ0FBQyxJQUFxQjtRQUN2Qyx1Q0FDSyxJQUFJLEtBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUN0QztJQUNKLENBQUM7SUFJRCxRQUFRLENBQUMsUUFBOEM7UUFDckQsSUFBSSxDQUFDLEtBQUssbUNBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixRQUFRLENBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4QyxlQUFlO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNELGtCQUFrQjtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFaEMsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVPLFVBQVUsQ0FBQyxPQUFPO1FBQ3hCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsaUNBQzFCLE1BQU0sS0FDVCxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDdkIsUUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxJQUNoQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRTZWxlY3REYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBNckZvcm1JbnB1dFN0YXRlLCBNcklucHV0RGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xyXG5cclxudHlwZSBNcklucHV0U2VsZWN0VmFsdWUgPSBzdHJpbmcgfCBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW5wdXRTZWxlY3REUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBNcklucHV0RGF0YVNvdXJjZTxNcklucHV0U2VsZWN0VmFsdWU+IHtcclxuICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHN0YXRlOiBNckZvcm1JbnB1dFN0YXRlPE1ySW5wdXRTZWxlY3RWYWx1ZT4gPSB7XHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGhpZGRlbjogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dFNlbGVjdERhdGEpOiBJbnB1dFNlbGVjdERhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgb3B0aW9uczogdGhpcy5nZXRPcHRpb25zKGRhdGEub3B0aW9ucylcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZSA9ICgpID0+IHRoaXMuc3RhdGU7XHJcblxyXG4gIHNldFN0YXRlKG5ld1N0YXRlOiBNckZvcm1JbnB1dFN0YXRlPE1ySW5wdXRTZWxlY3RWYWx1ZT4pIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIC4uLm5ld1N0YXRlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbnVsbCB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICBjb25zdCB7IGhpZGRlbiwgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gcmVuZGVyIHZhbHVlXHJcbiAgICB0aGlzLm91dHB1dC5vcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHRoaXMub3V0cHV0Lm9wdGlvbnMpO1xyXG5cclxuICAgIC8vIHJlbmRlciBkaXNhYmxlZFxyXG4gICAgdGhpcy5vdXRwdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuXHJcbiAgICAvLyByZW5kZXIgaGlkZGVuXHJcbiAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gaGlkZGVuID8gJ2lzLWhpZGRlbicgOiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XHJcbiAgICAgIC4uLm9wdGlvbixcclxuICAgICAgbGFiZWw6IF90KG9wdGlvbi5sYWJlbCksXHJcbiAgICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlXHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==