import { MrResourceLayoutDS } from './resource-layout.ds';
import { MrResourceLayoutEH } from './resource-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrResourceLayoutConfig: {
    layoutId: string;
    widgets: {
        id: string;
    }[];
    layoutDS: typeof MrResourceLayoutDS;
    layoutEH: typeof MrResourceLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
