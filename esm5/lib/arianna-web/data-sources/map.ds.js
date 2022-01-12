import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import * as Leaflet from 'leaflet';
import { Subject } from 'rxjs';
var MARKER_ICON = Leaflet.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
var MARKER_ICON_SELECTED = Leaflet.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
var AwMapDS = /** @class */ (function (_super) {
    __extends(AwMapDS, _super);
    function AwMapDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.markerOpen$ = new Subject();
        _this.markerClose$ = new Subject();
        _this.transform = function (data) { return ({
            containerId: 'map-canvas',
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: {
                center: [0, 0],
                zoom: 13
            },
            _setInstance: function (map) {
                _this.map = map;
                var bounds = new Leaflet
                    .LatLngBounds(data
                    .filter(function (d) { return _this.isValidMarker(d); })
                    .map(function (_a) {
                    var lat = _a.lat, lon = _a.lon;
                    return [lat, lon];
                }));
                _this.map.fitBounds(bounds);
                // adding markers
                var markers = Leaflet.markerClusterGroup({
                    showCoverageOnHover: false,
                });
                data
                    // skip broken markers
                    .filter(function (d) { return (_this.isValidMarker(d)); })
                    // draw markers on the map
                    .forEach(function (_a) {
                    var lat = _a.lat, lon = _a.lon, item = _a.item;
                    var label = item.label;
                    var marker = Leaflet.marker([lat, lon], { icon: MARKER_ICON })
                        .addTo(markers)
                        .bindPopup(label)
                        .on('click', function (_a) {
                        var target = _a.target;
                        var icon = target.options.icon;
                        var className = icon.options.className;
                        if (className === 'marker-icon-selected') {
                            _this.markerOpen$.next(item);
                        }
                    });
                    marker.getPopup().on('remove', function (_a) {
                        var target = _a.target;
                        target._source.setIcon(MARKER_ICON);
                        _this.markerClose$.next();
                    });
                    marker.getPopup().on('add', function (_a) {
                        var target = _a.target;
                        target._source.setIcon(MARKER_ICON_SELECTED);
                    });
                });
                _this.map.addLayer(markers);
            }
        }); };
        return _this;
    }
    /**
     * Performs validation for a leaflet marker data.
     * If the data is invalid displays an error.
     *
     * @param marker data for a leaflet marker
     * @returns true if the marker data is valid
     */
    AwMapDS.prototype.isValidMarker = function (_a) {
        var lat = _a.lat, lon = _a.lon;
        var test = (lat
            && lon
            && /^-?\d+\.\d*$/.test(lat)
            && /^-?\d+\.\d*$/.test(lon));
        if (test)
            return true;
        console.error(lat + ", " + lon + " is not a valid marker!");
        return false;
    };
    return AwMapDS;
}(DataSource));
export { AwMapDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9tYXAuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBNkVDO1FBMUVRLGlCQUFXLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Msa0JBQVksR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxlQUFTLEdBQUcsVUFBQyxJQUFJLElBQWMsT0FBQSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENB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QUksQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFJLEdBQUcsVUFBSyxHQUFHLDRCQUF5QixDQUFDLENBQUM7UUFDdkQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE3RUQsQ0FBNkIsVUFBVSxHQTZFdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAqIGFzIExlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IE1BUktFUl9JQ09OID0gTGVhZmxldC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xufSk7XG5cbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTGVhZmxldC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uLXNlbGVjdGVkJ1xufSk7XG5cbmV4cG9ydCBjbGFzcyBBd01hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBtYXA7XG5cbiAgcHVibGljIG1hcmtlck9wZW4kOiBTdWJqZWN0PG9iamVjdD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBtYXJrZXJDbG9zZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSk6IE1hcERhdGEgPT4gKHtcbiAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxuICAgIHRpbGVMYXllcnM6IFt7XG4gICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgIG9wdGlvbnM6IHt9XG4gICAgfV0sXG4gICAgaW5pdGlhbFZpZXc6IHtcbiAgICAgIGNlbnRlcjogWzAsIDBdLFxuICAgICAgem9vbTogMTNcbiAgICB9LFxuICAgIF9zZXRJbnN0YW5jZTogKG1hcCkgPT4ge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICBjb25zdCBib3VuZHMgPSBuZXcgTGVhZmxldFxuICAgICAgICAuTGF0TG5nQm91bmRzKGRhdGFcbiAgICAgICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmlzVmFsaWRNYXJrZXIoZCkpXG4gICAgICAgICAgLm1hcCgoeyBsYXQsIGxvbiB9KSA9PiBbbGF0LCBsb25dKSk7XG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcblxuICAgICAgLy8gYWRkaW5nIG1hcmtlcnNcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBMZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCh7XG4gICAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBkYXRhXG4gICAgICAgIC8vIHNraXAgYnJva2VuIG1hcmtlcnNcbiAgICAgICAgLmZpbHRlcigoZCkgPT4gKHRoaXMuaXNWYWxpZE1hcmtlcihkKSkpXG4gICAgICAgIC8vIGRyYXcgbWFya2VycyBvbiB0aGUgbWFwXG4gICAgICAgIC5mb3JFYWNoKCh7IGxhdCwgbG9uLCBpdGVtIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGxhYmVsIH0gPSBpdGVtO1xuICAgICAgICAgIGNvbnN0IG1hcmtlciA9IExlYWZsZXQubWFya2VyKFtsYXQsIGxvbl0sIHsgaWNvbjogTUFSS0VSX0lDT04gfSlcbiAgICAgICAgICAgIC5hZGRUbyhtYXJrZXJzKVxuICAgICAgICAgICAgLmJpbmRQb3B1cChsYWJlbClcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IGljb24gfSA9IHRhcmdldC5vcHRpb25zO1xuICAgICAgICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gaWNvbi5vcHRpb25zO1xuICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnbWFya2VyLWljb24tc2VsZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJPcGVuJC5uZXh0KGl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcmtlci5nZXRQb3B1cCgpLm9uKCdyZW1vdmUnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTik7XG4gICAgICAgICAgICB0aGlzLm1hcmtlckNsb3NlJC5uZXh0KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBtYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT05fU0VMRUNURUQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKG1hcmtlcnMpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIHZhbGlkYXRpb24gZm9yIGEgbGVhZmxldCBtYXJrZXIgZGF0YS5cbiAgICogSWYgdGhlIGRhdGEgaXMgaW52YWxpZCBkaXNwbGF5cyBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIG1hcmtlciBkYXRhIGZvciBhIGxlYWZsZXQgbWFya2VyXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIG1hcmtlciBkYXRhIGlzIHZhbGlkXG4gICAqL1xuICBwcml2YXRlIGlzVmFsaWRNYXJrZXIoeyBsYXQsIGxvbiB9KTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGVzdCA9IChcbiAgICAgIGxhdFxuICAgICAgJiYgbG9uXG4gICAgICAmJiAvXi0/XFxkK1xcLlxcZCokLy50ZXN0KGxhdClcbiAgICAgICYmIC9eLT9cXGQrXFwuXFxkKiQvLnRlc3QobG9uKVxuICAgICk7XG4gICAgaWYgKHRlc3QpIHJldHVybiB0cnVlO1xuICAgIGNvbnNvbGUuZXJyb3IoYCR7bGF0fSwgJHtsb259IGlzIG5vdCBhIHZhbGlkIG1hcmtlciFgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==