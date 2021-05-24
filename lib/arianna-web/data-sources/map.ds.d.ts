import { MapData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export declare class AwMapDS extends DataSource {
    map: any;
    markerOpen$: Subject<object>;
    markerClose$: Subject<void>;
    protected transform: (data: any) => MapData;
    /**
     * Performs validation for a leaflet marker data.
     * If the data is invalid displays an error.
     *
     * @param marker data for a leaflet marker
     * @returns true if the marker data is valid
     */
    private isValidMarker;
}
