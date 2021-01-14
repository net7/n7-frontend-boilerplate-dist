import { LayoutDataSource } from '@n7-frontend/core';
import { ItemPreviewData, TimelineData } from '@n7-frontend/components';
import * as vis from 'vis-timeline';
import { Subject } from 'rxjs';
export declare class MrTimelineLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private layoutState;
    private route;
    private location;
    private loadedResourceDetails;
    defaultDescription: string;
    eventHeader: string;
    eventDescription: string;
    timelineData: TimelineData;
    timelineListener$: Subject<vis.Timeline>;
    bibliographyMock: ItemPreviewData[];
    connectedMapsMock: ItemPreviewData[];
    images: string[];
    eventTitle: string;
    onInit(payload: any): void;
    loadDefaults(navigate: boolean): void;
    updatePageDetails(id: any): void;
}
