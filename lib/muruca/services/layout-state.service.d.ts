import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare enum LayoutState {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    EMPTY = "EMPTY",
    ERROR = "ERROR"
}
export declare class MrLayoutStateService {
    private stateContainers;
    add(id: string | string[]): void;
    get$(id: string): ReplaySubject<LayoutState>;
    set(id: string, newState: LayoutState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrLayoutStateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrLayoutStateService>;
}
