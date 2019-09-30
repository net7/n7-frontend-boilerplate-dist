import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwHomeLayoutDS extends LayoutDataSource {
    private communication;
    private mainState;
    private configuration;
    test: string;
    private facetData;
    private facetInputs;
    private allBubbles;
    selectedBubbles: any[];
    numOfItemsStr: string;
    private _bubbleChart;
    private maxBubblesSelectable;
    private entityBubbleIdMap;
    onInit({ communication, mainState, configuration }: {
        communication: any;
        mainState: any;
        configuration: any;
    }): void;
    renderPreviewsFromApolloQuery(response: any): void;
    onBubbleSelected(payload: any): void;
    onBubbleDeselected(payload: any): void;
    private updateBubblesAndItemPreviews;
    setAllBubblesFromApolloQuery(response: any, reset?: boolean): void;
    filterBubblesBasedOnFacetsEnabled(): any[];
    handleFacetSearchChange(change: any): void;
    handleFacetSearchEnter(enter: any): void;
    handleFacetHeaderClick(facetId: any): void;
    renderItemTags(): void;
    onTagClicked(payload: any): void;
    private _getSubnav;
    private _getBreadcrumbs;
}
