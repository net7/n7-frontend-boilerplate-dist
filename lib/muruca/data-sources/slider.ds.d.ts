import { CarouselData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class MrSliderDS extends DataSource {
    id: string;
    protected transform(data: any): CarouselData;
}
