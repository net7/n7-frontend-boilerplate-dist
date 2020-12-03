import { TimelineData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import * as vis from 'vis-timeline';
declare type DataSet = TimelineData['dataSet'];
export declare class MrTimelineDS extends DataSource {
    id: string;
    /** timeline instance */
    timeline: vis.Timeline;
    timelineLoaded$: Subject<vis.Timeline>;
    protected transform(data: {
        dataSet: DataSet;
    }): TimelineData;
}
export {};
