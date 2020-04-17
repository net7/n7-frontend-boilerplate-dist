import { MrGlossaryLayoutDS } from './glossary-layout.ds';
import { MrGlossaryLayoutEH } from './glossary-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrGlossaryLayoutConfig: {
    layoutId: string;
    widgets: any[];
    layoutDS: typeof MrGlossaryLayoutDS;
    layoutEH: typeof MrGlossaryLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
