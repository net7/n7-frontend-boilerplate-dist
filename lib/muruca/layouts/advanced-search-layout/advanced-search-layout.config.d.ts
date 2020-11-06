import { MrAdvancedSearchLayoutDS } from './advanced-search-layout.ds';
import { MrAdvancedSearchLayoutEH } from './advanced-search-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrAdvancedSearchLayoutConfig: {
    layoutId: string;
    widgets: {
        id: string;
    }[];
    layoutDS: typeof MrAdvancedSearchLayoutDS;
    layoutEH: typeof MrAdvancedSearchLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
