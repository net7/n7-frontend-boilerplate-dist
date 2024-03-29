import { isObject } from 'lodash';
var getSeries = function (series) { return series.map(function (_a) {
    var id = _a.id, name = _a.name, data = _a.data;
    return ({
        id: id,
        name: name,
        data: data.map(function (point) { return (isObject(point) ? point.value : point); })
    });
}); };
var ɵ0 = getSeries;
var getSeriesMetadata = function (series) { return series.map(function (_a) {
    var data = _a.data;
    var serieMetadata = [];
    data.forEach(function (point) {
        if (isObject(point)) {
            serieMetadata.push((point === null || point === void 0 ? void 0 : point.metadata) || null);
        }
        else {
            serieMetadata.push(null);
        }
    });
    return serieMetadata;
}); };
var ɵ1 = getSeriesMetadata;
export default {
    getContainerId: function (id) { return "chart-" + id; },
    getSeries: getSeries,
    getSeriesMetadata: getSeriesMetadata
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L21vZGVscy9hcGV4L2FwZXgtaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR2xDLElBQU0sU0FBUyxHQUFHLFVBQ2hCLE1BQTZCLElBQ0wsT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBa0I7UUFBaEIsVUFBRSxFQUFFLGNBQUksRUFBRSxjQUFJO0lBQU8sT0FBQSxDQUFDO1FBQzVELEVBQUUsSUFBQTtRQUNGLElBQUksTUFBQTtRQUNKLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO0tBQ25FLENBQUM7QUFKMkQsQ0FJM0QsQ0FBQyxFQUp1QixDQUl2QixDQUFDOztBQUVKLElBQU0saUJBQWlCLEdBQUcsVUFDeEIsTUFBNkIsSUFDaEIsT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUTtRQUFOLGNBQUk7SUFDL0IsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1FBQ2pCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSxLQUFJLElBQUksQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUMsRUFWYSxDQVViLENBQUM7O0FBRUgsZUFBZTtJQUNiLGNBQWMsRUFBRSxVQUFDLEVBQVUsSUFBSyxPQUFBLFdBQVMsRUFBSSxFQUFiLENBQWE7SUFDN0MsU0FBUyxXQUFBO0lBQ1QsaUJBQWlCLG1CQUFBO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IENoYXJ0UmVzcG9uc2VTZXJpZXMgfSBmcm9tICcuLi8uLi90eXBlcy9yZXNwb25zZS50eXBlcyc7XHJcblxyXG5jb25zdCBnZXRTZXJpZXMgPSAoXHJcbiAgc2VyaWVzOiBDaGFydFJlc3BvbnNlU2VyaWVzW11cclxuKTogQXBleEF4aXNDaGFydFNlcmllcyA9PiBzZXJpZXMubWFwKCh7IGlkLCBuYW1lLCBkYXRhIH0pID0+ICh7XHJcbiAgaWQsXHJcbiAgbmFtZSxcclxuICBkYXRhOiBkYXRhLm1hcCgocG9pbnQpID0+IChpc09iamVjdChwb2ludCkgPyBwb2ludC52YWx1ZSA6IHBvaW50KSlcclxufSkpO1xyXG5cclxuY29uc3QgZ2V0U2VyaWVzTWV0YWRhdGEgPSAoXHJcbiAgc2VyaWVzOiBDaGFydFJlc3BvbnNlU2VyaWVzW11cclxuKTogb2JqZWN0W10gPT4gc2VyaWVzLm1hcCgoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBzZXJpZU1ldGFkYXRhID0gW107XHJcbiAgZGF0YS5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgaWYgKGlzT2JqZWN0KHBvaW50KSkge1xyXG4gICAgICBzZXJpZU1ldGFkYXRhLnB1c2gocG9pbnQ/Lm1ldGFkYXRhIHx8IG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VyaWVNZXRhZGF0YS5wdXNoKG51bGwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBzZXJpZU1ldGFkYXRhO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRDb250YWluZXJJZDogKGlkOiBzdHJpbmcpID0+IGBjaGFydC0ke2lkfWAsXHJcbiAgZ2V0U2VyaWVzLFxyXG4gIGdldFNlcmllc01ldGFkYXRhXHJcbn07XHJcbiJdfQ==