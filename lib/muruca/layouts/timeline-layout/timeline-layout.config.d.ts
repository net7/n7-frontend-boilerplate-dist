import { MrTimelineLayoutDS } from './timeline-layout.ds';
import { MrTimelineLayoutEH } from './timeline-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrTimelineLayoutConfig: {
    layoutId: string;
    widgets: {
        id: string;
    }[];
    layoutDS: typeof MrTimelineLayoutDS;
    layoutEH: typeof MrTimelineLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
