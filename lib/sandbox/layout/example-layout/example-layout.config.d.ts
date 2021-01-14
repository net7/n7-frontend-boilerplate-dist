import { SbExampleLayoutDS } from './example-layout.ds';
import { SbExampleLayoutEH } from './example-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const SbExampleLayoutConfig: {
    layoutId: string;
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: {
        id: string;
        hasStaticData: boolean;
    }[];
    layoutDS: typeof SbExampleLayoutDS;
    layoutEH: typeof SbExampleLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
