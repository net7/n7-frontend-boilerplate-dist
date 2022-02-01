import { ItemPreviewData, MetadataData } from '@n7-frontend/components';
import * as i0 from "@angular/core";
/**
 * A hyperlinked metadata item
 */
export interface LinkedMetadataData extends MetadataData {
    /** href to use on the html element */
    href: string;
    /** list of highlights */
    items: string[];
}
/**
 * Data for Muruca's AdvancedResult component.
 */
interface AdvancedResultsData extends ItemPreviewData {
    highlights: LinkedMetadataData[];
}
export declare class MrAdvancedResultComponent {
    data: AdvancedResultsData;
    emit: any;
    /** Returns true if there are some highlights to render */
    hasHighlights: () => boolean;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrAdvancedResultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrAdvancedResultComponent, "mr-advanced-result", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
export {};
