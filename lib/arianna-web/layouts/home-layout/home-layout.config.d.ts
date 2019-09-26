import { AwHomeLayoutDS } from './home-layout.ds';
import { AwHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwHomeLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        hasStaticData?: undefined;
    } | {
        id: string;
        hasStaticData: boolean;
    })[];
    layoutDS: typeof AwHomeLayoutDS;
    layoutEH: typeof AwHomeLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
