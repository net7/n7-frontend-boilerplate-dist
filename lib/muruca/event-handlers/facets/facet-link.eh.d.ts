import { EventHandler } from '@n7-frontend/core';
import { FacetLinkDS } from '../../data-sources/facets/facet-link.ds';
export declare class FacetLinkEH extends EventHandler {
    dataSource: FacetLinkDS;
    listen(): void;
}
