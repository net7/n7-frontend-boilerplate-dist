import { LayoutDataSource } from '@n7-frontend/core';
import { ItemPreviewData } from '@n7-frontend/components';
import { Map } from 'leaflet';
import { Subject } from 'rxjs';
import 'leaflet.markercluster';
export declare class MrMapLayoutDS extends LayoutDataSource {
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
    eventHeader: string;
    eventDescription: string;
    route: any;
    mapListener$: Subject<Map>;
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
