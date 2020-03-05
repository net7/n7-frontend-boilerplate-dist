interface FacetInputData {
    value: string | number;
    label: string;
    counter: number;
    hidden?: boolean;
    options?: any;
}
export declare abstract class FacetInput {
    static index: number;
    private id;
    protected config: any;
    protected output: any;
    protected data: FacetInputData[];
    protected isEmpty: boolean;
    constructor(config: any);
    abstract setActive(facetValue: any): void;
    protected abstract transform(): any;
    update: () => void;
    getId: () => string;
    getData: () => FacetInputData[];
    getConfig: () => any;
    getFacetId: () => any;
    getInputIndex: () => any;
    getSectionIndex: () => any;
    getContext: () => any;
    getTarget: () => any;
    getSearchIn: () => any;
    getType: () => any;
    getOutput: () => any;
    clear(): any;
    setIsEmpty: (empty: boolean) => void;
    setData: (newData: FacetInputData[]) => void;
    private _setId;
}
export {};
