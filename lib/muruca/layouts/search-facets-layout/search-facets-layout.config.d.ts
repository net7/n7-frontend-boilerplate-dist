import { SearchFacetsLayoutDS } from './search-facets-layout.ds';
import { SearchFacetsLayoutEH } from './search-facets-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const SearchFacetsLayoutConfig: {
    layoutId: string;
    widgets: any[];
    layoutDS: typeof SearchFacetsLayoutDS;
    layoutEH: typeof SearchFacetsLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
