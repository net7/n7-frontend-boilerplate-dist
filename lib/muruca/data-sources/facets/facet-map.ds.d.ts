import { DataSource } from '@n7-frontend/core';
import { MapData } from '@n7-frontend/components';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string[];
declare type CadastralUnit = {
    text: string;
    payload: string;
    counter: number;
    args: {
        lat: string | null;
        lon: string | null;
    };
};
export interface MarkerEvent {
    type: string;
    id: string;
}
export declare class FacetMapDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    mapInstance: any;
    markerLayer: any;
    markerEvents$: Subject<MarkerEvent>;
    isUpdate: boolean;
    protected transform({ links }: {
        links: CadastralUnit[];
    }): MapData;
    /**
     * Builds markers with a custom icon and adds them to the map.
     * @param markers an array of markers
     */
    private buildMarkers;
    setValue(value: FACET_VALUE, update?: boolean): void;
    getIcon: (id: string, counter: number) => any;
    getZindex: (id: string, counter: number) => 19999 | 9999;
    toggleValue(value: string): void;
    getValue: () => FACET_VALUE;
    clear(): void;
}
export {};
