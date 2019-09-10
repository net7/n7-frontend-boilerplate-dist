import { AwWorksLayoutDS } from './works-layout.ds';
import { AwWorksLayoutEH } from './works-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwWorksLayoutConfig: {
    layoutId: string;
    widgets: any[];
    layoutDS: typeof AwWorksLayoutDS;
    layoutEH: typeof AwWorksLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
