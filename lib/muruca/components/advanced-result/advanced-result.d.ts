import { ItemPreviewData, MetadataData } from '@n7-frontend/components';
/**
 * A hyperlinked metadata item
 */
export interface LinkedMetadataData extends MetadataData {
    /** href to use on the html element */
    href: string;
}
/**
 * Data for Muruca's AdvancedResult component.
 */
interface AdvancedResultsData extends ItemPreviewData {
    metadata: LinkedMetadataData[];
}
export declare class MrAdvancedResultComponent {
    data: AdvancedResultsData;
    emit: any;
    onClick(payload: any): void;
}
export {};
