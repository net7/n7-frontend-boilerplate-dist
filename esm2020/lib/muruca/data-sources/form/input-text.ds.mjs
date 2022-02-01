import { DataSource, _t } from '@n7-frontend/core';
export class MrInputTextDS extends DataSource {
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
        return {
            ...data,
            placeholder: _t(data.placeholder)
        };
    }
    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        };
        this.refresh();
    }
    clear() {
        this.setState({ value: null });
    }
    refresh() {
        const { value, hidden, disabled } = this.state;
        // render value
        this.output.value = value;
        // fix element update
        const el = document.getElementById(this.id);
        if (el) {
            el.value = value;
        }
        // render disabled
        this.output.disabled = disabled;
        // render hidden
        this.output.classes = hidden ? 'is-hidden' : '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsTUFBTSxPQUFPLGFBQWMsU0FBUSxVQUFVO0lBQTdDOztRQUdTLFVBQUssR0FBdUM7WUFDakQsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQztRQVNGLGFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBK0I5QixDQUFDO0lBdENXLFNBQVMsQ0FBQyxJQUFtQjtRQUNyQyxPQUFPO1lBQ0wsR0FBRyxJQUFJO1lBQ1AsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBSUQsUUFBUSxDQUFDLFFBQTRDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2IsR0FBRyxRQUFRO1NBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFL0MsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQixxQkFBcUI7UUFDckIsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFxQixDQUFDO1FBQ2hFLElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbEI7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRWhDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRUZXh0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE1yRm9ybUlucHV0U3RhdGUsIE1ySW5wdXREYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XG5cbmV4cG9ydCB0eXBlIE1ySW5wdXRUZXh0VmFsdWUgPSBzdHJpbmcgfCBudWxsO1xuXG5leHBvcnQgY2xhc3MgTXJJbnB1dFRleHREUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBNcklucHV0RGF0YVNvdXJjZTxNcklucHV0VGV4dFZhbHVlPiB7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGF0ZTogTXJGb3JtSW5wdXRTdGF0ZTxNcklucHV0VGV4dFZhbHVlPiA9IHtcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgfTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0VGV4dERhdGEpOiBJbnB1dFRleHREYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHBsYWNlaG9sZGVyOiBfdChkYXRhLnBsYWNlaG9sZGVyKVxuICAgIH07XG4gIH1cblxuICBnZXRTdGF0ZSA9ICgpID0+IHRoaXMuc3RhdGU7XG5cbiAgc2V0U3RhdGUobmV3U3RhdGU6IE1yRm9ybUlucHV0U3RhdGU8TXJJbnB1dFRleHRWYWx1ZT4pIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIC4uLm5ld1N0YXRlXG4gICAgfTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbnVsbCB9KTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgaGlkZGVuLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIC8vIHJlbmRlciB2YWx1ZVxuICAgIHRoaXMub3V0cHV0LnZhbHVlID0gdmFsdWU7XG4gICAgLy8gZml4IGVsZW1lbnQgdXBkYXRlXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChlbCkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyByZW5kZXIgZGlzYWJsZWRcbiAgICB0aGlzLm91dHB1dC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgLy8gcmVuZGVyIGhpZGRlblxuICAgIHRoaXMub3V0cHV0LmNsYXNzZXMgPSBoaWRkZW4gPyAnaXMtaGlkZGVuJyA6ICcnO1xuICB9XG59XG4iXX0=