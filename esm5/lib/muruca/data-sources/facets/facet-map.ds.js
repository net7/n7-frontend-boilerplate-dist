import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
var ACTIVE_CLASS = 'is-active';
var MARKER_ICON = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
var MARKER_ICON_UNAVAILABLE = L.icon({
    iconUrl: '/assets/pin-unavailable.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
var MARKER_ICON_SELECTED = L.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
var FacetMapDS = /** @class */ (function (_super) {
    __extends(FacetMapDS, _super);
    function FacetMapDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = [];
        _this.markerEvents$ = new Subject();
        _this.isUpdate = false;
        _this.getIcon = function (id, counter) {
            if (_this.value.includes(id))
                return MARKER_ICON_SELECTED;
            if (counter > 0)
                return MARKER_ICON;
            return MARKER_ICON_UNAVAILABLE;
        };
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetMapDS.prototype.transform = function (_a) {
        var _this = this;
        var links = _a.links;
        var markers = links
            .filter(function (d) { var _a, _b; return ((_a = d.args) === null || _a === void 0 ? void 0 : _a.lat) && ((_b = d.args) === null || _b === void 0 ? void 0 : _b.lon); })
            .map(function (d) { return ({
            coords: [+d.args.lat, +d.args.lon],
            template: d.text,
            title: d.text,
            id: d.payload,
            slug: d.payload,
            counter: d.counter,
        }); });
        return {
            containerId: 'map-canvas',
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {
                        attribution: 'Hello, world',
                    },
                }],
            initialView: {
                center: [46.49, 11.33],
                zoom: 8
            },
            _setInstance: function (map) {
                _this.mapInstance = map;
                _this.buildMarkers(markers);
            },
        };
    };
    /**
     * Builds markers with a custom icon and adds them to the map.
     * @param markers an array of markers
     */
    FacetMapDS.prototype.buildMarkers = function (markers) {
        var _this = this;
        if (!markers)
            return;
        // remove all existing markers
        if (this.markerLayer) {
            this.markerLayer.clearLayers();
            this.mapInstance.removeLayer(this.markerLayer);
        }
        var markerGroup = L.markerClusterGroup();
        markers.forEach(function (_a) {
            var coords = _a.coords, template = _a.template, id = _a.id, slug = _a.slug, counter = _a.counter;
            // create custom icon marker
            var newMarker = L.marker(coords, { icon: _this.getIcon(id, counter) });
            if (id && slug) {
                newMarker.id = id;
                newMarker.counter = counter;
                newMarker.slug = slug;
            }
            newMarker
                // add the marker to the group
                .addTo(markerGroup)
                // add the on-click tooltip
                .bindPopup(template);
            newMarker.on('click', function (_a) {
                var target = _a.target;
                _this.markerEvents$.next({
                    type: 'marker.click',
                    id: target.id
                });
            });
            newMarker.on('mouseover', function (_a) {
                var target = _a.target;
                target.openPopup();
            });
            newMarker.on('mouseout', function (_a) {
                var target = _a.target;
                target.closePopup();
            });
        });
        // add the markers to the map instance
        this.mapInstance.addLayer(markerGroup);
        // update the marker layer instance
        this.markerLayer = markerGroup;
    };
    FacetMapDS.prototype.setValue = function (value, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        // prevent the search service from assigning a plain string
        // eslint-disable-next-line no-param-reassign
        if (typeof value === 'string')
            value = [value];
        if (this.value !== value) {
            this.value = value;
        }
        this.isUpdate = update || this.value === [];
        if (update && this.input) {
            var links_1 = this.input.links;
            var updatedLinks = links_1.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value.includes(link.payload) ? ACTIVE_CLASS : '' })); });
            // update marker icons
            if (this.markerLayer) {
                this.markerLayer.eachLayer(function (marker) {
                    var _a;
                    var id = marker.id;
                    var counter = ((_a = links_1.find(function (_a) {
                        var payload = _a.payload;
                        return payload === id;
                    })) === null || _a === void 0 ? void 0 : _a.counter) || 0;
                    marker.getPopup()._source.setIcon(_this.getIcon(id, counter));
                });
            }
            // ---
            this.update(__assign(__assign({}, this.input), { links: updatedLinks }));
        }
    };
    FacetMapDS.prototype.toggleValue = function (value) {
        var exists = this.value.includes(value);
        if (!exists) {
            this.value.push(value);
        }
        else if (exists) {
            this.value.splice(this.value.indexOf(value), 1);
        }
        // update
        this.setValue(this.value, true);
    };
    FacetMapDS.prototype.clear = function () {
        this.value = [];
    };
    return FacetMapDS;
}(DataSource));
export { FacetMapDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LW1hcC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUF5QmpDLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQWdDLDhCQUFVO0lBQTFDO1FB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R0FBWCxVQUFZLEtBQWE7UUFDdkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFFRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFJRCwwQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQW5KRCxDQUFnQyxVQUFVLEdBbUp6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IE1hcERhdGEsIE1hcmtlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xyXG4vLyBsZWFmbGV0IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgd2luZG93LFxyXG4vLyBhIGRvdWJsZSBpbXBvcnQgcmVzdWx0cyBpbiBlcnJvcnMgd2l0aCB0b29sdGlwcy5cclxuZGVjbGFyZSBjb25zdCBMO1xyXG5cclxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XHJcblxyXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nW107XHJcblxyXG50eXBlIENhZGFzdHJhbFVuaXQgPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IHN0cmluZztcclxuICBjb3VudGVyOiBudW1iZXI7XHJcbiAgYXJnczoge1xyXG4gICAgbGF0OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbG9uOiBzdHJpbmcgfCBudWxsO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRXZlbnQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFya2VyV2l0aElEIGV4dGVuZHMgTWFya2VyRGF0YSB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgY291bnRlcjogbnVtYmVyO1xyXG4gIHNsdWc6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTUFSS0VSX0lDT04gPSBMLmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcclxufSk7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTl9VTkFWQUlMQUJMRSA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXVuYXZhaWxhYmxlLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xyXG59KTtcclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4tc2VsZWN0ZWQucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24tc2VsZWN0ZWQnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0TWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSBbXTtcclxuXHJcbiAgbWFwSW5zdGFuY2U7XHJcblxyXG4gIG1hcmtlckxheWVyO1xyXG5cclxuICBtYXJrZXJFdmVudHMkID0gbmV3IFN1YmplY3Q8TWFya2VyRXZlbnQ+KCk7XHJcblxyXG4gIGlzVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBsaW5rcyB9OiB7IGxpbmtzOiBDYWRhc3RyYWxVbml0W10gfSk6IE1hcERhdGEge1xyXG4gICAgY29uc3QgbWFya2VycyA9IGxpbmtzXHJcbiAgICAgIC5maWx0ZXIoKGQpID0+IGQuYXJncz8ubGF0ICYmIGQuYXJncz8ubG9uKVxyXG4gICAgICAubWFwKChkKSA9PiAoe1xyXG4gICAgICAgIGNvb3JkczogWytkLmFyZ3MubGF0LCArZC5hcmdzLmxvbl0gYXMgW251bWJlciwgbnVtYmVyXSxcclxuICAgICAgICB0ZW1wbGF0ZTogZC50ZXh0LFxyXG4gICAgICAgIHRpdGxlOiBkLnRleHQsXHJcbiAgICAgICAgaWQ6IGQucGF5bG9hZCxcclxuICAgICAgICBzbHVnOiBkLnBheWxvYWQsXHJcbiAgICAgICAgY291bnRlcjogZC5jb3VudGVyLFxyXG4gICAgICB9KSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgICB0aWxlTGF5ZXJzOiBbe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGF0dHJpYnV0aW9uOiAnSGVsbG8sIHdvcmxkJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXc6IHtcclxuICAgICAgICBjZW50ZXI6IFs0Ni40OSwgMTEuMzNdLFxyXG4gICAgICAgIHpvb206IDhcclxuICAgICAgfSxcclxuICAgICAgX3NldEluc3RhbmNlOiAobWFwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IG1hcDtcclxuICAgICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgbWFya2VycyB3aXRoIGEgY3VzdG9tIGljb24gYW5kIGFkZHMgdGhlbSB0byB0aGUgbWFwLlxyXG4gICAqIEBwYXJhbSBtYXJrZXJzIGFuIGFycmF5IG9mIG1hcmtlcnNcclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJXaXRoSURbXSkge1xyXG4gICAgaWYgKCFtYXJrZXJzKSByZXR1cm47XHJcbiAgICAvLyByZW1vdmUgYWxsIGV4aXN0aW5nIG1hcmtlcnNcclxuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtlckdyb3VwID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoKTtcclxuICAgIG1hcmtlcnMuZm9yRWFjaCgoe1xyXG4gICAgICBjb29yZHMsIHRlbXBsYXRlLCBpZCwgc2x1ZywgY291bnRlclxyXG4gICAgfSkgPT4ge1xyXG4gICAgICAvLyBjcmVhdGUgY3VzdG9tIGljb24gbWFya2VyXHJcbiAgICAgIGNvbnN0IG5ld01hcmtlciA9IEwubWFya2VyKGNvb3JkcywgeyBpY29uOiB0aGlzLmdldEljb24oaWQsIGNvdW50ZXIpIH0pO1xyXG4gICAgICBpZiAoaWQgJiYgc2x1Zykge1xyXG4gICAgICAgIG5ld01hcmtlci5pZCA9IGlkO1xyXG4gICAgICAgIG5ld01hcmtlci5jb3VudGVyID0gY291bnRlcjtcclxuICAgICAgICBuZXdNYXJrZXIuc2x1ZyA9IHNsdWc7XHJcbiAgICAgIH1cclxuICAgICAgbmV3TWFya2VyXHJcbiAgICAgICAgLy8gYWRkIHRoZSBtYXJrZXIgdG8gdGhlIGdyb3VwXHJcbiAgICAgICAgLmFkZFRvKG1hcmtlckdyb3VwKVxyXG4gICAgICAgIC8vIGFkZCB0aGUgb24tY2xpY2sgdG9vbHRpcFxyXG4gICAgICAgIC5iaW5kUG9wdXAodGVtcGxhdGUpO1xyXG5cclxuICAgICAgbmV3TWFya2VyLm9uKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJFdmVudHMkLm5leHQoe1xyXG4gICAgICAgICAgdHlwZTogJ21hcmtlci5jbGljaycsXHJcbiAgICAgICAgICBpZDogdGFyZ2V0LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbmV3TWFya2VyLm9uKCdtb3VzZW92ZXInLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5vcGVuUG9wdXAoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIub24oJ21vdXNlb3V0JywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuY2xvc2VQb3B1cCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gYWRkIHRoZSBtYXJrZXJzIHRvIHRoZSBtYXAgaW5zdGFuY2VcclxuICAgIHRoaXMubWFwSW5zdGFuY2UuYWRkTGF5ZXIobWFya2VyR3JvdXApO1xyXG4gICAgLy8gdXBkYXRlIHRoZSBtYXJrZXIgbGF5ZXIgaW5zdGFuY2VcclxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBtYXJrZXJHcm91cDtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcclxuICAgIC8vIHByZXZlbnQgdGhlIHNlYXJjaCBzZXJ2aWNlIGZyb20gYXNzaWduaW5nIGEgcGxhaW4gc3RyaW5nXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IFt2YWx1ZV07XHJcblxyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNVcGRhdGUgPSB1cGRhdGUgfHwgdGhpcy52YWx1ZSA9PT0gW107XHJcblxyXG4gICAgaWYgKHVwZGF0ZSAmJiB0aGlzLmlucHV0KSB7XHJcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluazogQ2FkYXN0cmFsVW5pdCkgPT4gKHtcclxuICAgICAgICAuLi5saW5rLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMudmFsdWUuaW5jbHVkZXMobGluay5wYXlsb2FkKSA/IEFDVElWRV9DTEFTUyA6ICcnXHJcbiAgICAgIH0pKTtcclxuICAgICAgLy8gdXBkYXRlIG1hcmtlciBpY29uc1xyXG4gICAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xyXG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIuZWFjaExheWVyKChtYXJrZXIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IG1hcmtlcjtcclxuICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBsaW5rcy5maW5kKCh7IHBheWxvYWQgfSkgPT4gcGF5bG9hZCA9PT0gaWQpPy5jb3VudGVyIHx8IDA7XHJcbiAgICAgICAgICBtYXJrZXIuZ2V0UG9wdXAoKS5fc291cmNlLnNldEljb24odGhpcy5nZXRJY29uKGlkLCBjb3VudGVyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gLS0tXHJcbiAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAuLi50aGlzLmlucHV0LFxyXG4gICAgICAgIGxpbmtzOiB1cGRhdGVkTGlua3NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJY29uID0gKGlkOiBzdHJpbmcsIGNvdW50ZXI6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHRoaXMudmFsdWUuaW5jbHVkZXMoaWQpKSByZXR1cm4gTUFSS0VSX0lDT05fU0VMRUNURUQ7XHJcbiAgICBpZiAoY291bnRlciA+IDApIHJldHVybiBNQVJLRVJfSUNPTjtcclxuICAgIHJldHVybiBNQVJLRVJfSUNPTl9VTkFWQUlMQUJMRTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMudmFsdWUuaW5jbHVkZXModmFsdWUpO1xyXG4gICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAoZXhpc3RzKSB7XHJcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZVxyXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=