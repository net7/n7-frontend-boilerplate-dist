export declare abstract class AbstractLayout {
    protected config: any;
    protected widgets: any[];
    lb: any;
    constructor(config: any);
    protected abstract initPayload(): any;
    protected onInit(): void;
    protected onDestroy(): void;
}
