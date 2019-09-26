import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwHomeLayoutDS extends LayoutDataSource {
    private communication;
    private mainState;
    test: string;
    private facetData;
    private facetInputs;
    private allBubbles;
    selectedBubbleIds: any[];
    numOfItemsStr: string;
    onInit({ communication, mainState }: {
        communication: any;
        mainState: any;
    }): void;
    renderPreviewsFromApolloQuery(response: any): void;
    onBubbleSelected(payload: any): void;
    onBubbleDeselected(payload: any): void;
    private updateItemPreviews;
    renderBubblesFromApolloQuery(response: any): void;
    handleFacetSearchChange(change: any): void;
    handleFacetSearchEnter(enter: any): void;
    handleFacetHeaderClick(facetId: any): void;
    renderItemTags(): void;
    private _getSubnav;
    private _getBreadcrumbs;
}
