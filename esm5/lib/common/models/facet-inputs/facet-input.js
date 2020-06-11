var FacetInput = /** @class */ (function () {
    function FacetInput(config) {
        var _this = this;
        this.isEmpty = false;
        this.update = function () { _this.output = _this.transform(); };
        this.getId = function () { return _this.id; };
        this.getData = function () { return _this.data; };
        this.getConfig = function () { return _this.config; };
        this.getFacetId = function () { return _this.config.facetId; };
        this.getInputIndex = function () { return _this.config.inputIndex; };
        this.getSectionIndex = function () { return _this.config.sectionIndex; };
        this.getContext = function () { return _this.config.filterConfig.context || 'external'; };
        this.getTarget = function () { return _this.config.filterConfig.target || null; };
        this.getSearchIn = function () { return _this.config.filterConfig.searchIn || null; };
        this.getType = function () { return _this.config.type; };
        this.getOutput = function () { return _this.output; };
        this.setIsEmpty = function (empty) {
            _this.isEmpty = empty;
        };
        this.setData = function (newData) { _this.data = newData; };
        this.config = config;
        this._setId();
        FacetInput.index += 1;
    }
    FacetInput.prototype.clear = function () { return null; };
    FacetInput.prototype._setId = function () {
        this.id = "facet-input-" + this.getType() + "-" + FacetInput.index;
    };
    FacetInput.index = 0;
    return FacetInput;
}());
export { FacetInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL21vZGVscy9mYWNldC1pbnB1dHMvZmFjZXQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7SUFhRSxvQkFBWSxNQUFNO1FBQWxCLGlCQUtDO1FBUFMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQWFuQixXQUFNLEdBQUcsY0FBUSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVsRCxVQUFLLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxDQUFDO1FBRXRCLFlBQU8sR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBVCxDQUFTLENBQUM7UUFFMUIsY0FBUyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFYLENBQVcsQ0FBQztRQUU5QixlQUFVLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFuQixDQUFtQixDQUFDO1FBRXZDLGtCQUFhLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUF0QixDQUFzQixDQUFDO1FBRTdDLG9CQUFlLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUF4QixDQUF3QixDQUFDO1FBRWpELGVBQVUsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBOUMsQ0FBOEMsQ0FBQztRQUVsRSxjQUFTLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQXZDLENBQXVDLENBQUM7UUFFMUQsZ0JBQVcsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksRUFBekMsQ0FBeUMsQ0FBQztRQUU5RCxZQUFPLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFoQixDQUFnQixDQUFDO1FBRWpDLGNBQVMsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLENBQUM7UUFJOUIsZUFBVSxHQUFHLFVBQUMsS0FBYztZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUE7UUFFTSxZQUFPLEdBQUcsVUFBQyxPQUF5QixJQUFPLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBeEN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBOEJNLDBCQUFLLEdBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBUXZCLDJCQUFNLEdBQWQ7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLGlCQUFlLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxVQUFVLENBQUMsS0FBTyxDQUFDO0lBQ2hFLENBQUM7SUF6RE0sZ0JBQUssR0FBRyxDQUFDLENBQUM7SUEwRG5CLGlCQUFDO0NBQUEsQUEzREQsSUEyREM7U0EzRHFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgRmFjZXRJbnB1dERhdGEge1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBjb3VudGVyOiBudW1iZXI7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIG9wdGlvbnM/OiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWNldElucHV0IHtcbiAgc3RhdGljIGluZGV4ID0gMDtcblxuICBwcml2YXRlIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuXG4gIHByb3RlY3RlZCBvdXRwdXQ6IGFueTtcblxuICBwcm90ZWN0ZWQgZGF0YTogRmFjZXRJbnB1dERhdGFbXTtcblxuICBwcm90ZWN0ZWQgaXNFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX3NldElkKCk7XG5cbiAgICBGYWNldElucHV0LmluZGV4ICs9IDE7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0QWN0aXZlKGZhY2V0VmFsdWU6IGFueSk6IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRyYW5zZm9ybSgpOiBhbnk7XG5cbiAgcHVibGljIHVwZGF0ZSA9ICgpID0+IHsgdGhpcy5vdXRwdXQgPSB0aGlzLnRyYW5zZm9ybSgpOyB9XG5cbiAgcHVibGljIGdldElkID0gKCkgPT4gdGhpcy5pZDtcblxuICBwdWJsaWMgZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcblxuICBwdWJsaWMgZ2V0Q29uZmlnID0gKCkgPT4gdGhpcy5jb25maWc7XG5cbiAgcHVibGljIGdldEZhY2V0SWQgPSAoKSA9PiB0aGlzLmNvbmZpZy5mYWNldElkO1xuXG4gIHB1YmxpYyBnZXRJbnB1dEluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuaW5wdXRJbmRleDtcblxuICBwdWJsaWMgZ2V0U2VjdGlvbkluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuc2VjdGlvbkluZGV4O1xuXG4gIHB1YmxpYyBnZXRDb250ZXh0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLmNvbnRleHQgfHwgJ2V4dGVybmFsJztcblxuICBwdWJsaWMgZ2V0VGFyZ2V0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnRhcmdldCB8fCBudWxsO1xuXG4gIHB1YmxpYyBnZXRTZWFyY2hJbiA9ICgpID0+IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5zZWFyY2hJbiB8fCBudWxsO1xuXG4gIHB1YmxpYyBnZXRUeXBlID0gKCkgPT4gdGhpcy5jb25maWcudHlwZTtcblxuICBwdWJsaWMgZ2V0T3V0cHV0ID0gKCkgPT4gdGhpcy5vdXRwdXQ7XG5cbiAgcHVibGljIGNsZWFyKCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHB1YmxpYyBzZXRJc0VtcHR5ID0gKGVtcHR5OiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5pc0VtcHR5ID0gZW1wdHk7XG4gIH1cblxuICBwdWJsaWMgc2V0RGF0YSA9IChuZXdEYXRhOiBGYWNldElucHV0RGF0YVtdKSA9PiB7IHRoaXMuZGF0YSA9IG5ld0RhdGE7IH1cblxuICBwcml2YXRlIF9zZXRJZCgpIHtcbiAgICB0aGlzLmlkID0gYGZhY2V0LWlucHV0LSR7dGhpcy5nZXRUeXBlKCl9LSR7RmFjZXRJbnB1dC5pbmRleH1gO1xuICB9XG59XG4iXX0=