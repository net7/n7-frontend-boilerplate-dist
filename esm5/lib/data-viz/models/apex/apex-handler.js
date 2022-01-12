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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L21vZGVscy9hcGV4L2FwZXgtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQztJQUFBO0lBU0EsQ0FBQztJQVJDLCtCQUFTLEdBQVQsVUFBVSxFQUVUO1lBREMsVUFBRSxFQUFFLGNBQUksRUFBRSxjQUFJLEVBQUUsb0JBQU87UUFFdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixNQUFNLEtBQUssQ0FBQyxzQkFBb0IsSUFBSSxxQkFBa0IsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7O0FBRUQsVUFBVTtBQUNWLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHRyYW5zZm9ybWVycyBmcm9tICcuL3RyYW5zZm9ybWVycyc7XG5cbmV4cG9ydCBjbGFzcyBBcGV4SGFuZGxlciB7XG4gIHRyYW5zZm9ybSh7XG4gICAgaWQsIHR5cGUsIGRhdGEsIG9wdGlvbnNcbiAgfSk6IENoYXJ0RGF0YSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1lcnNbdHlwZV0pIHtcbiAgICAgIHRocm93IEVycm9yKGBBcGV4IHRyYW5zZm9ybWVyICR7dHlwZX0gZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1lcnNbdHlwZV0ucnVuKGlkLCBkYXRhLCBvcHRpb25zKTtcbiAgfVxufVxuXG4vLyBleHBvcnRzXG5leHBvcnQgY29uc3QgYXBleEhhbmRsZXIgPSBuZXcgQXBleEhhbmRsZXIoKTtcbiJdfQ==