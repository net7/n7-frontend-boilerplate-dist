import { DataSource } from '@n7-frontend/core';
export declare class MrMetadataDS extends DataSource {
    /** Test if a string is a valid URL */
    isUrl: RegExp;
    /** Turn a string into an anchor element */
    toUrl: (string: string) => string;
    protected transform(data: any): any;
    private getItemGroup;
    private getItemValue;
}
