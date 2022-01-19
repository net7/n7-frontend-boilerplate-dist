import { DataSource } from '@n7-frontend/core';
import * as Leaflet from 'leaflet';
import { Subject } from 'rxjs';
const MARKER_ICON = Leaflet.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
const MARKER_ICON_SELECTED = Leaflet.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
export class AwMapDS extends DataSource {
    constructor() {
        super(...arguments);
        this.markerOpen$ = new Subject();
        this.markerClose$ = new Subject();
        this.transform = (data) => ({
            containerId: 'map-canvas',
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: {
                center: [0, 0],
                zoom: 13
            },
            _setInstance: (map) => {
                this.map = map;
                const bounds = new Leaflet
                    .LatLngBounds(data
                    .filter((d) => this.isValidMarker(d))
                    .map(({ lat, lon }) => [lat, lon]));
                this.map.fitBounds(bounds);
                // adding markers
                const markers = Leaflet.markerClusterGroup({
                    showCoverageOnHover: false,
                });
                data
                    // skip broken markers
                    .filter((d) => (this.isValidMarker(d)))
                    // draw markers on the map
                    .forEach(({ lat, lon, item }) => {
                    const { label } = item;
                    const marker = Leaflet.marker([lat, lon], { icon: MARKER_ICON })
                        .addTo(markers)
                        .bindPopup(label)
                        .on('click', ({ target }) => {
                        const { icon } = target.options;
                        const { className } = icon.options;
                        if (className === 'marker-icon-selected') {
                            this.markerOpen$.next(item);
                        }
                    });
                    marker.getPopup().on('remove', ({ target }) => {
                        target._source.setIcon(MARKER_ICON);
                        this.markerClose$.next();
                    });
                    marker.getPopup().on('add', ({ target }) => {
                        target._source.setIcon(MARKER_ICON_SELECTED);
                    });
                });
                this.map.addLayer(markers);
            }
        });
    }
    /**
     * Performs validation for a leaflet marker data.
     * If the data is invalid displays an error.
     *
     * @param marker data for a leaflet marker
     * @returns true if the marker data is valid
     */
    isValidMarker({ lat, lon }) {
        const test = (lat
            && lon
            && /^-?\d+\.\d*$/.test(lat)
            && /^-?\d+\.\d*$/.test(lon));
        if (test)
            return true;
        console.error(`${lat}, ${lon} is not a valid marker!`);
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9tYXAuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMvQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3JCLFNBQVMsRUFBRSxhQUFhO0NBQ3pCLENBQUMsQ0FBQztBQUVILE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUN4QyxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3JCLFNBQVMsRUFBRSxzQkFBc0I7Q0FDbEMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLE9BQVEsU0FBUSxVQUFVO0lBQXZDOztRQUdTLGdCQUFXLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0MsaUJBQVksR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxjQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQVcsRUFBRSxDQUFDLENBQUM7WUFDeEMsV0FBVyxFQUFFLFlBQVk7WUFDekIsVUFBVSxFQUFFLENBQUM7b0JBQ1gsR0FBRyxFQUFFLDhFQUE4RTtvQkFDbkYsT0FBTyxFQUFFLEVBQUU7aUJB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QUM7ZUFDeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDNUIsQ0FBQztRQUNGLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICogYXMgTGVhZmxldCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3QgTUFSS0VSX0lDT04gPSBMZWFmbGV0Lmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcclxufSk7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTl9TRUxFQ1RFRCA9IExlYWZsZXQuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uLXNlbGVjdGVkJ1xyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBd01hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIG1hcDtcclxuXHJcbiAgcHVibGljIG1hcmtlck9wZW4kOiBTdWJqZWN0PG9iamVjdD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbWFya2VyQ2xvc2UkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKTogTWFwRGF0YSA9PiAoe1xyXG4gICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcclxuICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxyXG4gICAgICBvcHRpb25zOiB7fVxyXG4gICAgfV0sXHJcbiAgICBpbml0aWFsVmlldzoge1xyXG4gICAgICBjZW50ZXI6IFswLCAwXSxcclxuICAgICAgem9vbTogMTNcclxuICAgIH0sXHJcbiAgICBfc2V0SW5zdGFuY2U6IChtYXApID0+IHtcclxuICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBMZWFmbGV0XHJcbiAgICAgICAgLkxhdExuZ0JvdW5kcyhkYXRhXHJcbiAgICAgICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmlzVmFsaWRNYXJrZXIoZCkpXHJcbiAgICAgICAgICAubWFwKCh7IGxhdCwgbG9uIH0pID0+IFtsYXQsIGxvbl0pKTtcclxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XHJcblxyXG4gICAgICAvLyBhZGRpbmcgbWFya2Vyc1xyXG4gICAgICBjb25zdCBtYXJrZXJzID0gTGVhZmxldC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xyXG4gICAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgICAgZGF0YVxyXG4gICAgICAgIC8vIHNraXAgYnJva2VuIG1hcmtlcnNcclxuICAgICAgICAuZmlsdGVyKChkKSA9PiAodGhpcy5pc1ZhbGlkTWFya2VyKGQpKSlcclxuICAgICAgICAvLyBkcmF3IG1hcmtlcnMgb24gdGhlIG1hcFxyXG4gICAgICAgIC5mb3JFYWNoKCh7IGxhdCwgbG9uLCBpdGVtIH0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IGl0ZW07XHJcbiAgICAgICAgICBjb25zdCBtYXJrZXIgPSBMZWFmbGV0Lm1hcmtlcihbbGF0LCBsb25dLCB7IGljb246IE1BUktFUl9JQ09OIH0pXHJcbiAgICAgICAgICAgIC5hZGRUbyhtYXJrZXJzKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGxhYmVsKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7IGljb24gfSA9IHRhcmdldC5vcHRpb25zO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBpY29uLm9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ21hcmtlci1pY29uLXNlbGVjdGVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJPcGVuJC5uZXh0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbWFya2VyLmdldFBvcHVwKCkub24oJ3JlbW92ZScsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT04pO1xyXG4gICAgICAgICAgICB0aGlzLm1hcmtlckNsb3NlJC5uZXh0KCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBtYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTl9TRUxFQ1RFRCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIobWFya2Vycyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlcmZvcm1zIHZhbGlkYXRpb24gZm9yIGEgbGVhZmxldCBtYXJrZXIgZGF0YS5cclxuICAgKiBJZiB0aGUgZGF0YSBpcyBpbnZhbGlkIGRpc3BsYXlzIGFuIGVycm9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1hcmtlciBkYXRhIGZvciBhIGxlYWZsZXQgbWFya2VyXHJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgbWFya2VyIGRhdGEgaXMgdmFsaWRcclxuICAgKi9cclxuICBwcml2YXRlIGlzVmFsaWRNYXJrZXIoeyBsYXQsIGxvbiB9KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB0ZXN0ID0gKFxyXG4gICAgICBsYXRcclxuICAgICAgJiYgbG9uXHJcbiAgICAgICYmIC9eLT9cXGQrXFwuXFxkKiQvLnRlc3QobGF0KVxyXG4gICAgICAmJiAvXi0/XFxkK1xcLlxcZCokLy50ZXN0KGxvbilcclxuICAgICk7XHJcbiAgICBpZiAodGVzdCkgcmV0dXJuIHRydWU7XHJcbiAgICBjb25zb2xlLmVycm9yKGAke2xhdH0sICR7bG9ufSBpcyBub3QgYSB2YWxpZCBtYXJrZXIhYCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==