import { DataSource } from '@n7-frontend/core';
import { PdfViewerData } from '../components';
export declare class AwSchedaPdfDS extends DataSource {
    private items;
    protected transform(data: any): PdfViewerData;
    onChange(index: any): void;
    onLoaded(): void;
}
