import { AwEntitaLayoutDS } from './entita-layout.ds';
import { AwEntitaLayoutEH } from './entita-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwEntitaLayoutConfig: {
    layoutId: string;
    /**
     * Array of components to use
     * in this layout
     */
    widgets: {
        id: string;
    }[];
    layoutDS: typeof AwEntitaLayoutDS;
    layoutEH: typeof AwEntitaLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
