import { DataSource } from '@n7-frontend/core';
export declare class AwHomeFacetsWrapperDS extends DataSource {
    private autoComplete;
    lockedFacets: {};
    lastData: {};
    closedEyes: any[];
    openTippy: string;
    protected transform(data: any): any[];
    tippyMaker: (id: any) => void;
    tippyClose: (id: any) => void;
}
