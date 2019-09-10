import { Subject } from 'rxjs';
export declare class MainStateService {
    private custom;
    private default;
    get$: (key: string) => any;
    getCustom$: (key: string) => any;
    update: (key: string, newValue: any) => void;
    updateCustom: (key: string, newValue: any) => void;
    has: (key: string) => boolean;
    hasCustom: (key: string) => boolean;
    addCustom(key: string, stream$: Subject<any>): void;
    private _update;
    private _get;
}
