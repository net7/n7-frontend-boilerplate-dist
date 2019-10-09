import { AwEntitaLayoutDS } from './entita-layout.ds';
import { AwEntitaLayoutEH } from './entita-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwEntitaLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        hasStaticData: boolean;
    } | {
        id: string;
        hasStaticData?: undefined;
    })[];
    layoutDS: typeof AwEntitaLayoutDS;
    layoutEH: typeof AwEntitaLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
