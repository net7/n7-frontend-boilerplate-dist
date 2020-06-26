import { AwMapLayoutDS } from './map-layout.ds';
import { AwMapLayoutEH } from './map-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwMapLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        hasStaticData: boolean;
    } | {
        id: string;
        hasStaticData?: undefined;
    })[];
    layoutDS: typeof AwMapLayoutDS;
    layoutEH: typeof AwMapLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
