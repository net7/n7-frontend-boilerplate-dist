import { DataSource } from '@n7-frontend/core';
export declare class AwTimelineDS extends DataSource {
    protected transform: (data: any) => {
        containerID: string;
        libOptions: {
            height: string;
            locale: string;
            cluster: {
                clusterCriteria: (f: any, s: any) => boolean;
            };
            showTooltips: boolean;
            tooltip: {
                followMouse: boolean;
                template: (d: any, element: {
                    title: string;
                }) => string;
            };
            template: (d: any) => string;
            width: string;
            minHeight: string;
            maxHeight: string;
            zoomFriction: number;
        };
        dataSet: ({
            id: number;
            content: string;
            start: string;
            end?: undefined;
        } | {
            id: number;
            content: string;
            start: string;
            end: string;
        })[];
        _setInstance: (timeline: any) => any;
    };
}
