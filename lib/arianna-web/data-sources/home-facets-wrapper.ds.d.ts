import { DataSource } from '@n7-frontend/core';
export declare class AwHomeFacetsWrapperDS extends DataSource {
    private autoComplete;
    protected transform(data: any): any[];
    tippyMaker: (res: any, id: any) => void;
}
