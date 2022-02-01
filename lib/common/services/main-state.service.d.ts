import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MainStateService {
    private custom;
    private default;
    get$: (key: string) => any;
    getCustom$: (key: string) => any;
    update: (key: string, newValue: any) => void;
    updateCustom: (key: string, newValue: any) => void;
    has: (key: string) => boolean;
    hasCustom: (key: string) => boolean;
    addCustom(key: string, stream$: ReplaySubject<any>): void;
    private _update;
    private _get;
    static ɵfac: i0.ɵɵFactoryDeclaration<MainStateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MainStateService>;
}
