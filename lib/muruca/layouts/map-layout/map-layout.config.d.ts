import { MrMapLayoutDS } from './map-layout.ds';
import { MrMapLayoutEH } from './map-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrMapLayoutConfig: {
    layoutId: string;
    widgets: {
        id: string;
    }[];
    layoutDS: typeof MrMapLayoutDS;
    layoutEH: typeof MrMapLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
