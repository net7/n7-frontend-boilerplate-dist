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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9tYXAuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBNkVDO1FBMUVRLGlCQUFXLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Msa0JBQVksR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxlQUFTLEdBQUcsVUFBQyxJQUFJLElBQWMsT0FBQSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENB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QUksQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFJLEdBQUcsVUFBSyxHQUFHLDRCQUF5QixDQUFDLENBQUM7UUFDdkQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE3RUQsQ0FBNkIsVUFBVSxHQTZFdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBMZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTiA9IExlYWZsZXQuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xyXG59KTtcclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTGVhZmxldC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4tc2VsZWN0ZWQucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24tc2VsZWN0ZWQnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3TWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgbWFwO1xyXG5cclxuICBwdWJsaWMgbWFya2VyT3BlbiQ6IFN1YmplY3Q8b2JqZWN0PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBtYXJrZXJDbG9zZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpOiBNYXBEYXRhID0+ICh7XHJcbiAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgdGlsZUxheWVyczogW3tcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXHJcbiAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICB9XSxcclxuICAgIGluaXRpYWxWaWV3OiB7XHJcbiAgICAgIGNlbnRlcjogWzAsIDBdLFxyXG4gICAgICB6b29tOiAxM1xyXG4gICAgfSxcclxuICAgIF9zZXRJbnN0YW5jZTogKG1hcCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgY29uc3QgYm91bmRzID0gbmV3IExlYWZsZXRcclxuICAgICAgICAuTGF0TG5nQm91bmRzKGRhdGFcclxuICAgICAgICAgIC5maWx0ZXIoKGQpID0+IHRoaXMuaXNWYWxpZE1hcmtlcihkKSlcclxuICAgICAgICAgIC5tYXAoKHsgbGF0LCBsb24gfSkgPT4gW2xhdCwgbG9uXSkpO1xyXG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcclxuXHJcbiAgICAgIC8vIGFkZGluZyBtYXJrZXJzXHJcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBMZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCh7XHJcbiAgICAgICAgc2hvd0NvdmVyYWdlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLy8gc2tpcCBicm9rZW4gbWFya2Vyc1xyXG4gICAgICAgIC5maWx0ZXIoKGQpID0+ICh0aGlzLmlzVmFsaWRNYXJrZXIoZCkpKVxyXG4gICAgICAgIC8vIGRyYXcgbWFya2VycyBvbiB0aGUgbWFwXHJcbiAgICAgICAgLmZvckVhY2goKHsgbGF0LCBsb24sIGl0ZW0gfSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gaXRlbTtcclxuICAgICAgICAgIGNvbnN0IG1hcmtlciA9IExlYWZsZXQubWFya2VyKFtsYXQsIGxvbl0sIHsgaWNvbjogTUFSS0VSX0lDT04gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcmtlcnMpXHJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAobGFiZWwpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgaWNvbiB9ID0gdGFyZ2V0Lm9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IGljb24ub3B0aW9ucztcclxuICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnbWFya2VyLWljb24tc2VsZWN0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlck9wZW4kLm5leHQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBtYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTik7XHJcbiAgICAgICAgICAgIHRoaXMubWFya2VyQ2xvc2UkLm5leHQoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIG1hcmtlci5nZXRQb3B1cCgpLm9uKCdhZGQnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLm1hcC5hZGRMYXllcihtYXJrZXJzKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybXMgdmFsaWRhdGlvbiBmb3IgYSBsZWFmbGV0IG1hcmtlciBkYXRhLlxyXG4gICAqIElmIHRoZSBkYXRhIGlzIGludmFsaWQgZGlzcGxheXMgYW4gZXJyb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWFya2VyIGRhdGEgZm9yIGEgbGVhZmxldCBtYXJrZXJcclxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBtYXJrZXIgZGF0YSBpcyB2YWxpZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaXNWYWxpZE1hcmtlcih7IGxhdCwgbG9uIH0pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRlc3QgPSAoXHJcbiAgICAgIGxhdFxyXG4gICAgICAmJiBsb25cclxuICAgICAgJiYgL14tP1xcZCtcXC5cXGQqJC8udGVzdChsYXQpXHJcbiAgICAgICYmIC9eLT9cXGQrXFwuXFxkKiQvLnRlc3QobG9uKVxyXG4gICAgKTtcclxuICAgIGlmICh0ZXN0KSByZXR1cm4gdHJ1ZTtcclxuICAgIGNvbnNvbGUuZXJyb3IoYCR7bGF0fSwgJHtsb259IGlzIG5vdCBhIHZhbGlkIG1hcmtlciFgKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19