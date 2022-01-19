import transformers from './transformers';
var ApexHandler = /** @class */ (function () {
    function ApexHandler() {
    }
    ApexHandler.prototype.transform = function (_a) {
        var id = _a.id, type = _a.type, data = _a.data, options = _a.options;
        if (!transformers[type]) {
            throw Error("Apex transformer " + type + " does not exists");
        }
        return transformers[type].run(id, data, options);
    };
    return ApexHandler;
}());
export { ApexHandler };
// exports
export var apexHandler = new ApexHandler();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L21vZGVscy9hcGV4L2FwZXgtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQztJQUFBO0lBU0EsQ0FBQztJQVJDLCtCQUFTLEdBQVQsVUFBVSxFQUVUO1lBREMsVUFBRSxFQUFFLGNBQUksRUFBRSxjQUFJLEVBQUUsb0JBQU87UUFFdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixNQUFNLEtBQUssQ0FBQyxzQkFBb0IsSUFBSSxxQkFBa0IsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7O0FBRUQsVUFBVTtBQUNWLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgdHJhbnNmb3JtZXJzIGZyb20gJy4vdHJhbnNmb3JtZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGV4SGFuZGxlciB7XHJcbiAgdHJhbnNmb3JtKHtcclxuICAgIGlkLCB0eXBlLCBkYXRhLCBvcHRpb25zXHJcbiAgfSk6IENoYXJ0RGF0YSB7XHJcbiAgICBpZiAoIXRyYW5zZm9ybWVyc1t0eXBlXSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgQXBleCB0cmFuc2Zvcm1lciAke3R5cGV9IGRvZXMgbm90IGV4aXN0c2ApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVyc1t0eXBlXS5ydW4oaWQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0c1xyXG5leHBvcnQgY29uc3QgYXBleEhhbmRsZXIgPSBuZXcgQXBleEhhbmRsZXIoKTtcclxuIl19