import { MapData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
import { Map } from 'leaflet';
interface Coords {
    lat: number;
    lng: number;
}
interface Marker extends Coords {
    label: string;
    default_label: string;
}
declare type TimelineResponse = {
    id?: number;
    title: string;
    slug: string;
    zoom: number;
    map_center: Coords;
    markers: Marker[];
}[];
export declare class MrMapDS extends DataSource {
    id: string;
    /** Instance of the leaflet map */
    mapInstance: any;
    /** Instance of the marker layerGroup */
    markerLayer: any;
    mapLoaded$: Subject<Map>;
    protected transform(data: TimelineResponse): MapData;
    private fitMapToBounds;
    /**
     * Builds markers with a custom icon and adds them to the map.
     * @param markers an array of markers
     */
    private buildMarkers;
}
export {};
