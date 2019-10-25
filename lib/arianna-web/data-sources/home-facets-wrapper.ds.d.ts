import { DataSource } from '@n7-frontend/core';
export declare class AwHomeFacetsWrapperDS extends DataSource {
    private autoComplete;
    protected transform({ facetData, lockedFacets }: {
        facetData: any;
        lockedFacets: any;
    }): any[];
    tippyMaker: (res: any, id: any) => void;
}
