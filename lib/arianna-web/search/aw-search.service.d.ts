import { AwSearchModel, AwSearchConfig } from './aw-search.model';
export declare class AwSearchService {
    private _models;
    add(id: string, config: AwSearchConfig): void;
    remove(id: string): void;
    model(id: string): AwSearchModel;
}
