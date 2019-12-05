import { MainLayoutDS } from './main-layout.ds';
import { MainLayoutEH } from './main-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MainLayoutConfig: {
    layoutId: string;
    widgets: {
        id: string;
    }[];
    layoutDS: typeof MainLayoutDS;
    layoutEH: typeof MainLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
