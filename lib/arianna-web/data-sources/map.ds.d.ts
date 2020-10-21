import { MapData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export declare class AwMapDS extends DataSource {
    map: any;
    markerOpen$: Subject<object>;
    markerClose$: Subject<void>;
    protected transform: (data: any) => MapData;
}
