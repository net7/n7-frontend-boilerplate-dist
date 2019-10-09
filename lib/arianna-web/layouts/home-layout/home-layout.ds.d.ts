import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwHomeLayoutDS extends LayoutDataSource {
    private communication;
    private mainState;
    private tippy;
    private configuration;
    private facetData;
    private facetInputs;
    private allBubbles;
    private autocompletePopover;
    private autocompletePopoverOpen;
    private autocompleteChanged$;
    selectedBubbles: any[];
    numOfItemsStr: string;
    private _bubbleChart;
    private maxBubblesSelectable;
    private entityBubbleIdMap;
    private lastWindowWidth;
    private bubblePopup;
    currentHoverEntity: any;
    hasScrollBackground: boolean;
    onInit({ communication, mainState, configuration, tippy }: {
        communication: any;
        mainState: any;
        configuration: any;
        tippy: any;
    }): void;
    onBubbleTooltipClick(source: string, payload: any): void;
    onBubbleMouseEnter(payload: any): void;
    renderPreviewsFromApolloQuery(response: any): void;
    onBubbleSelected(bubble: any): void;
    onBubbleDeselected(payload: any): void;
    /**
     * updates the bubble chart and the item previews based on the currently
     * selected bubbles
     *
     * @param onlyBubbles specifies if only the bubble chart should be updated,
     *                    leaving the item previews as they are
     */
    private updateBubblesAndItemPreviews;
    /**
     * converts the id of an entity to the id of a bubble
     * ( // d3/svg does not allow Number as beginning of ID.
     *   // d3/svg does not allow '-' as part of ID. )
     * @param entityId id of the entity
     */
    private convertEntityIdToBubbleId;
    /**
     * sets the this.allBubbles variable based on the response apollo has given
     * for the globalFilterQuery
     *
     * @param response apollo's response
     * @param reset true if the bubble chart has to be reset/redrawn
     */
    setAllBubblesFromApolloQuery(response: any, reset?: boolean): void;
    filterBubblesBasedOnFacetsEnabled(): any[];
    handleFacetSearchChange(change: any): void;
    handleFacetSearchEnter(enter: any): void;
    handleFacetHeaderClick(facetId: any): void;
    renderItemTags(): void;
    onTagClicked(payload: any): void;
    onHeroChange(value: any): void;
    private _getSubnav;
    private _getBreadcrumbs;
    private _scrollBackgroundControl;
    private _setHasScrollBackground;
    private _listenAutoCompleteChanges;
    private _toggleAutocompletePopover;
}
