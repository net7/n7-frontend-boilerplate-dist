interface IFacetInputData {
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
    protected data: IFacetInputData[];
    protected isEmpty: boolean;
    constructor(config: any);
    abstract setActive(facetValue: any): void;
    protected abstract transform(): any;
    update: () => any;
    getId: () => string;
    getData: () => IFacetInputData[];
    getConfig: () => any;
    getFacetId: () => any;
    getInputIndex: () => any;
    getSectionIndex: () => any;
    getContext: () => any;
    getTarget: () => any;
    getSearchIn: () => any;
    getType: () => any;
    getOutput: () => any;
    clear(): void;
    setIsEmpty: (empty: boolean) => void;
    setData: (newData: IFacetInputData[]) => IFacetInputData[];
    private _setId;
}
export {};
