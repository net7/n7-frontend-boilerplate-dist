import { HistogramRangeData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import 'tippy.js/dist/tippy.css';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string;
export declare class FacetHistogramDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    isUpdate: boolean;
    histogramApi: any;
    protected transform({ links }: {
        links: any;
    }): HistogramRangeData;
    setValue: (value: any, update?: boolean) => void;
    /**
     * Returns the current facet value
     */
    getValue: () => FACET_VALUE;
    /**
     * Reset to the default facet value
     */
    clear(): void;
    /**
     * Loads tippy tooltips and appends them to the histogram bars
     */
    loadTooltips(): void;
    /**
     * Convert the links into the histogram component format
     */
    parseLinks(links: any): any;
    /**
     * Get the left-most label
     */
    private getFirstLabel;
    /**
     * Get the right-most label
     */
    private getLastLabel;
}
export {};
