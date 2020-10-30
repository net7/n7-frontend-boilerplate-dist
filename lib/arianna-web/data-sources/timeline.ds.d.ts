import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export declare class AwTimelineDS extends DataSource {
    timeline: any;
    timelineLoaded$: Subject<void>;
    dataSet: any;
    protected transform: (data: any) => {
        containerID: string;
        libOptions: {
            max: Date;
            min: Date;
            start: Date;
            end: Date;
            align: string;
            minHeight: string;
            locale: string;
            showCurrentTime: boolean;
            showTooltips: boolean;
            tooltip: {
                followMouse: boolean;
                template: (d: any, element: {
                    title: string;
                }) => string;
            };
            width: string;
            zoomMax: number;
            zoomMin: number;
        };
        dataSet: any;
        _setInstance: (timeline: any) => void;
    };
    getItemTemplate(datesLabel: any, label: any): string;
    getMax(): Date;
    getMin(): Date;
    getAllDates(): any[];
}
