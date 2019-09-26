import { AwPatrimonioLayoutDS } from './patrimonio-layout.ds';
import { AwPatrimonioLayoutEH } from './patrimonio-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwPatrimonioLayoutConfig: {
    layoutId: string;
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: any[];
    layoutDS: typeof AwPatrimonioLayoutDS;
    layoutEH: typeof AwPatrimonioLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
