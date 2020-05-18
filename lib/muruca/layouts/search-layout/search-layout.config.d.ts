import { MrSearchLayoutDS } from './search-layout.ds';
import { MrSearchLayoutEH } from './search-layout.eh';
import { FacetsWrapperDS, SmartPaginationDS } from '../../../common/data-sources';
import { FacetsWrapperEH, SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrSearchLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        dataSource: typeof FacetsWrapperDS;
        eventHandler: typeof FacetsWrapperEH;
    } | {
        id: string;
        dataSource?: undefined;
        eventHandler?: undefined;
    } | {
        id: string;
        dataSource: typeof DS.MrItemPreviewsDS;
        eventHandler?: undefined;
    } | {
        id: string;
        dataSource: typeof SmartPaginationDS;
        eventHandler: typeof SmartPaginationEH;
    })[];
    layoutDS: typeof MrSearchLayoutDS;
    layoutEH: typeof MrSearchLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
