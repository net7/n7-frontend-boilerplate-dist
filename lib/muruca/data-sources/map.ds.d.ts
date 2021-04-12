import { MapData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
interface Coords {
    lat: number;
    lng: number;
}
interface Marker extends Coords {
    label: string;
    default_label: string;
}
declare type TimelineResponse = {
    title: string;
    slug: string;
    zoom: number;
    map_center: Coords;
    markers: Marker[];
}[];
export declare class MrMapDS extends DataSource {
    id: string;
    mapInstance: any;
    markerLayer: any;
    protected transform(data: TimelineResponse): MapData;
    private fitMapToBounds;
}
export {};
