import { AwTimelineLayoutDS } from './timeline-layout.ds';
import { AwTimelineLayoutEH } from './timeline-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwTimelineLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        hasStaticData: boolean;
    } | {
        id: string;
        hasStaticData?: undefined;
    })[];
    layoutDS: typeof AwTimelineLayoutDS;
    layoutEH: typeof AwTimelineLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
