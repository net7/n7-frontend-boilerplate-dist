import { AwSearchLayoutDS } from './search-layout.ds';
import { AwSearchLayoutEH } from './search-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
export declare const AwSearchLayoutConfig: {
    layoutId: string;
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: ({
        id: string;
        dataSource: typeof DS.AwFacetsWrapperDS;
        eventHandler: typeof EH.AwFacetsWrapperEH;
        hasStaticData?: undefined;
    } | {
        id: string;
        dataSource?: undefined;
        eventHandler?: undefined;
        hasStaticData?: undefined;
    } | {
        id: string;
        hasStaticData: boolean;
        dataSource?: undefined;
        eventHandler?: undefined;
    } | {
        id: string;
        dataSource: typeof SmartPaginationDS;
        eventHandler: typeof SmartPaginationEH;
        hasStaticData?: undefined;
    })[];
    layoutDS: typeof AwSearchLayoutDS;
    layoutEH: typeof AwSearchLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
