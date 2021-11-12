var AwFacetInput = /** @class */ (function () {
    function AwFacetInput(config) {
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
        AwFacetInput.index += 1;
    }
    AwFacetInput.prototype.clear = function () { return null; };
    AwFacetInput.prototype._setId = function () {
        this.id = "facet-input-" + this.getType() + "-" + AwFacetInput.index;
    };
    AwFacetInput.index = 0;
    return AwFacetInput;
}());
export { AwFacetInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvc2VhcmNoL2F3LWZhY2V0LWlucHV0cy9hdy1mYWNldC1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtJQWFFLHNCQUFZLE1BQU07UUFBbEIsaUJBS0M7UUFQUyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBYW5CLFdBQU0sR0FBRyxjQUFRLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRWxELFVBQUssR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsRUFBUCxDQUFPLENBQUM7UUFFdEIsWUFBTyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFULENBQVMsQ0FBQztRQUUxQixjQUFTLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxDQUFDO1FBRTlCLGVBQVUsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQW5CLENBQW1CLENBQUM7UUFFdkMsa0JBQWEsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQXRCLENBQXNCLENBQUM7UUFFN0Msb0JBQWUsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQXhCLENBQXdCLENBQUM7UUFFakQsZUFBVSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksVUFBVSxFQUE5QyxDQUE4QyxDQUFDO1FBRWxFLGNBQVMsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLElBQUksRUFBdkMsQ0FBdUMsQ0FBQztRQUUxRCxnQkFBVyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUF6QyxDQUF5QyxDQUFDO1FBRTlELFlBQU8sR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQWhCLENBQWdCLENBQUM7UUFFakMsY0FBUyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFYLENBQVcsQ0FBQztRQUk5QixlQUFVLEdBQUcsVUFBQyxLQUFjO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQTtRQUVNLFlBQU8sR0FBRyxVQUFDLE9BQXlCLElBQU8sS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUF4Q3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUE4Qk0sNEJBQUssR0FBWixjQUFpQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFRdkIsNkJBQU0sR0FBZDtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQWUsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFJLFlBQVksQ0FBQyxLQUFPLENBQUM7SUFDbEUsQ0FBQztJQXpETSxrQkFBSyxHQUFHLENBQUMsQ0FBQztJQTBEbkIsbUJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTNEcUIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBGYWNldElucHV0RGF0YSB7XHJcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGNvdW50ZXI6IG51bWJlcjtcclxuICBoaWRkZW4/OiBib29sZWFuO1xyXG4gIG9wdGlvbnM/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBd0ZhY2V0SW5wdXQge1xyXG4gIHN0YXRpYyBpbmRleCA9IDA7XHJcblxyXG4gIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgb3V0cHV0OiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBkYXRhOiBGYWNldElucHV0RGF0YVtdO1xyXG5cclxuICBwcm90ZWN0ZWQgaXNFbXB0eSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy5fc2V0SWQoKTtcclxuXHJcbiAgICBBd0ZhY2V0SW5wdXQuaW5kZXggKz0gMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBzZXRBY3RpdmUoZmFjZXRWYWx1ZTogYW55KTogdm9pZDtcclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRyYW5zZm9ybSgpOiBhbnk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7IHRoaXMub3V0cHV0ID0gdGhpcy50cmFuc2Zvcm0oKTsgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWQgPSAoKSA9PiB0aGlzLmlkO1xyXG5cclxuICBwdWJsaWMgZ2V0RGF0YSA9ICgpID0+IHRoaXMuZGF0YTtcclxuXHJcbiAgcHVibGljIGdldENvbmZpZyA9ICgpID0+IHRoaXMuY29uZmlnO1xyXG5cclxuICBwdWJsaWMgZ2V0RmFjZXRJZCA9ICgpID0+IHRoaXMuY29uZmlnLmZhY2V0SWQ7XHJcblxyXG4gIHB1YmxpYyBnZXRJbnB1dEluZGV4ID0gKCkgPT4gdGhpcy5jb25maWcuaW5wdXRJbmRleDtcclxuXHJcbiAgcHVibGljIGdldFNlY3Rpb25JbmRleCA9ICgpID0+IHRoaXMuY29uZmlnLnNlY3Rpb25JbmRleDtcclxuXHJcbiAgcHVibGljIGdldENvbnRleHQgPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuY29udGV4dCB8fCAnZXh0ZXJuYWwnO1xyXG5cclxuICBwdWJsaWMgZ2V0VGFyZ2V0ID0gKCkgPT4gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnRhcmdldCB8fCBudWxsO1xyXG5cclxuICBwdWJsaWMgZ2V0U2VhcmNoSW4gPSAoKSA9PiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcuc2VhcmNoSW4gfHwgbnVsbDtcclxuXHJcbiAgcHVibGljIGdldFR5cGUgPSAoKSA9PiB0aGlzLmNvbmZpZy50eXBlO1xyXG5cclxuICBwdWJsaWMgZ2V0T3V0cHV0ID0gKCkgPT4gdGhpcy5vdXRwdXQ7XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgcHVibGljIHNldElzRW1wdHkgPSAoZW1wdHk6IGJvb2xlYW4pID0+IHtcclxuICAgIHRoaXMuaXNFbXB0eSA9IGVtcHR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERhdGEgPSAobmV3RGF0YTogRmFjZXRJbnB1dERhdGFbXSkgPT4geyB0aGlzLmRhdGEgPSBuZXdEYXRhOyB9XHJcblxyXG4gIHByaXZhdGUgX3NldElkKCkge1xyXG4gICAgdGhpcy5pZCA9IGBmYWNldC1pbnB1dC0ke3RoaXMuZ2V0VHlwZSgpfS0ke0F3RmFjZXRJbnB1dC5pbmRleH1gO1xyXG4gIH1cclxufVxyXG4iXX0=