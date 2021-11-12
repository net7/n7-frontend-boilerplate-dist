import { EventHandler } from '@n7-frontend/core';
import { FacetMapDS } from '../../data-sources/facets/facet-map.ds';
export declare class FacetMapEH extends EventHandler {
    dataSource: FacetMapDS;
    isMultiple: boolean;
    listen(): void;
}
