import { SearchTestLayoutDS } from './search-test-layout.ds';
import { SearchTestLayoutEH } from './search-test-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const SearchTestLayoutConfig: {
    layoutId: string;
    widgets: any[];
    layoutDS: typeof SearchTestLayoutDS;
    layoutEH: typeof SearchTestLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
