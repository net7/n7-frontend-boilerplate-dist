import { DvExampleLayoutDS } from './example-layout.ds';
import { DvExampleLayoutEH } from './example-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const DvExampleLayoutConfig: {
    layoutId: string;
    /**
     * Array of components you want to use
     * in this leyout
    */
    widgets: ({
        id: string;
        hasStaticData: boolean;
    } | {
        id: string;
        hasStaticData?: undefined;
    })[];
    layoutDS: typeof DvExampleLayoutDS;
    layoutEH: typeof DvExampleLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
