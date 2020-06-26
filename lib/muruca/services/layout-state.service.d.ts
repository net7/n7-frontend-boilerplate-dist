import { Subject } from 'rxjs';
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
    get$(id: string): Subject<LayoutState>;
    set(id: string, newState: LayoutState): void;
}
