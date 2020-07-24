import { EventHandler } from '@n7-frontend/core';
export declare class AwSearchLayoutEH extends EventHandler {
    layoutId: string;
    private destroyed$;
    private route;
    /** Emits when any of the search-facets are changed */
    private facetsChange$;
    /** Emits when the pagination element
     * or the select-sort element are changed */
    private additionalParamsChange$;
    /** Last queried text, used to check if the text has changed */
    private previousText;
    /** Is true when the search is triggered with a new text-string */
    private textHasChanged;
    listen(): void;
    /**
     * Handles changes to any of the search-facets
     */
    private _listenToFacetsChange;
    /**
     * Handles entity links pagination
     */
    private _listenToInternalFilters;
    /**
     * Handles changes happening on pagination and select elements.
     */
    private _listenToAdditionalParamsChange;
    /** URL changes */
    private _listenToRouterChanges;
}
