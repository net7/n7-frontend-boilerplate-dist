import { EventHandler } from '@n7-frontend/core';
import { FacetHistogramDS } from '../../data-sources/facets/facet-histogram.ds';
export declare class FacetHistogramEH extends EventHandler {
    dataSource: FacetHistogramDS;
    listen(): void;
}
