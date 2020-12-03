import { LayoutDataSource } from '@n7-frontend/core';
import { InnerTitleData, ItemPreviewData } from '@n7-frontend/components';
import * as vis from 'vis-timeline';
import { Subject } from 'rxjs';
export declare class MrTimelineLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private layoutState;
    private route;
    private loadedResourceDetails;
    yearHeader: InnerTitleData;
    eventHeader: string;
    eventDescription: string;
    timelineListener$: Subject<vis.Timeline>;
    bibliographyMock: ItemPreviewData[];
    connectedMapsMock: ItemPreviewData[];
    images: string[];
    eventTitle: string;
    onInit(payload: any): void;
    updatePageDetails(id: any): void;
}
