import { LayoutDataSource } from '@n7-frontend/core';
import { ItemPreviewData, TimelineData } from '@n7-frontend/components';
import { Timeline } from 'vis-timeline';
import { Subject } from 'rxjs';
import 'leaflet.markercluster';
export declare class MrTimelineLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private layoutState;
    private configId;
    private pageConfig;
    private location;
    loading: {
        resourceDetails: boolean;
        timeline: boolean;
    };
    defaultDescription: string;
    eventHeader: string;
    eventDescription: string;
    timelineData: TimelineData;
    hasMap: boolean;
    route: any;
    mapHeader: string;
    timelineListener$: Subject<Timeline>;
    bibliographyData: {
        header: {
            title: string;
        };
        items: {
            payload?: {
                action: string;
                id: number;
                type: string;
            };
            text?: string;
        }[];
    };
    collectionWorksData: {
        header: {
            title: string;
        };
        items: ItemPreviewData[];
    };
    collectionWitnessData: {
        header: {
            title: string;
        };
        items: ItemPreviewData[];
    };
    collectionGalleryData: any;
    eventTitle: string;
    onInit(payload: any): void;
    loadDefaults(navigate: boolean): void;
    updatePageDetails(id: any): void;
}
