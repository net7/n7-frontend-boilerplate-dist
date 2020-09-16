import { MrStaticLayoutDS } from './static-layout.ds';
import { MrStaticLayoutEH } from './static-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrStaticLayoutConfig: {
    layoutId: string;
    widgets: {
        id: string;
    }[];
    layoutDS: typeof MrStaticLayoutDS;
    layoutEH: typeof MrStaticLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
