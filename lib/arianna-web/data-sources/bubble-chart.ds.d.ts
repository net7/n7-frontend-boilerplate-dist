import { DataSource } from '@n7-frontend/core';
export declare class AwBubbleChartDS extends DataSource {
    private thresholdShowTitle;
    private thresholdShowValue;
    configuration: any;
    private allBubbles;
    private entityBubbleIdMap;
    selectedBubbles: any[];
    private facetData;
    private bubblePopup;
    currentHoverEntity: any;
    private _bubbleChart;
    private maxBubblesSelectable;
    private tippy;
    private windowResizeSet;
    protected transform(data: any): {
        containerId: any;
        containerWidth: any;
        containerHeight: number;
        isForceSimulationEnabled: boolean;
        maxBubblesSelected: number;
    };
    setAllBubblesFromApolloQuery(data: any, reset?: boolean): void;
    private convertEntityIdToBubbleId;
    filterBubblesBasedOnFacetsEnabled(): any[];
    onBubbleMouseEnter(payload: any): void;
    destroyTooltip(): void;
    onBubbleTooltipClick(source: string, payload: any): any;
    onBubbleSelected(bubble: any): void;
    getBubbleFromId(id: any): any;
    getSelectedBubbles(): any[];
    getAllBubbles(): any[];
    getEntityIdMap(): any;
    setWindowResize(): void;
}
