import { AwSearchModel, AwSearchConfig } from './aw-search.model';
import * as i0 from "@angular/core";
export declare class AwSearchService {
    private _models;
    add(id: string, config: AwSearchConfig): void;
    remove(id: string): void;
    model(id: string): AwSearchModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AwSearchService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AwSearchService>;
}
