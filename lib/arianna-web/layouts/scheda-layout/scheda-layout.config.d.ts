import { AwPatrimonioLayoutDS } from './scheda-layout.ds';
import { AwPatrimonioLayoutEH } from './scheda-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwPatrimonioLayoutConfig: {
    layoutId: string;
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: {
        id: string;
    }[];
    layoutDS: typeof AwPatrimonioLayoutDS;
    layoutEH: typeof AwPatrimonioLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
