import { CarouselData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
declare type GetSliderResponse = SlideData[];
declare type SlideData = {
    background: {
        type: string;
        value: string | null;
    };
    ctaLabel: string;
    ctaPayload: string;
    metadata: {
        key: string;
        value: string;
    }[] | null;
    pretext: string;
    text: string;
    title: string;
};
export declare class AwCarouselDS extends DataSource {
    protected transform(data: GetSliderResponse): CarouselData;
}
export {};
