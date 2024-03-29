import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwHomeLayoutDS extends LayoutDataSource {
    private communication;
    private mainState;
    private tippy;
    private configuration;
    private facetInputs;
    private autocompletePopover;
    private autocompletePopoverOpen;
    private autocompleteChanged$;
    numOfItemsStr: string;
    currentHoverEntity: any;
    hasScrollBackground: boolean;
    resultsLimit: number;
    selectedEntitiesIds: any[];
    outerLinks: any;
    outerLinksTitle: string;
    outerLinksDescription: string;
    homeAutocompleteQuery: string;
    private destroyed$;
    homeAutocompleteIsLoading: boolean;
    resultsListIsLoading: boolean;
    /** Enabled from: arianna-config/features-enabled/carousel */
    carouselEnabled: boolean;
    bubblesEnabled: boolean;
    selectedBubbles: any[];
    lastBubbleResponse: any;
    firstBubbleResponse: any;
    onInit({ communication, mainState, configuration, tippy, }: {
        communication: any;
        mainState: any;
        configuration: any;
        tippy: any;
    }): void;
    onDestroy(): void;
    makeRequest$(query: any, params: any): any;
    updateComponent: (id: any, data: any, options?: any) => void;
    initialFilterRequest(): any;
    parseInitialRequest(response: any): void;
    renderPreviewsFromApolloQuery(response: any): void;
    updateTags(onlyBubbles?: boolean): void;
    handleFacetSearchChange(change: any): void;
    renderItemTags(): void;
    /**
     * Loads data for the carousel component
     */
    loadCarousel(): void;
    onHeroChange(value: any): void;
    private _scrollBackgroundControl;
    private _setHasScrollBackground;
    private _listenAutoCompleteChanges;
    private _toggleAutocompletePopover;
}
