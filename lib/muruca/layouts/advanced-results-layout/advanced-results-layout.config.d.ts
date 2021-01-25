import { MrAdvancedResultsLayoutDS } from './advanced-results-layout.ds';
import { MrAdvancedResultsLayoutEH } from './advanced-results-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrAdvancedResultsLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        dataSource?: undefined;
        eventHandler?: undefined;
    } | {
        id: string;
        dataSource: typeof SmartPaginationDS;
        eventHandler: typeof SmartPaginationEH;
    })[];
    layoutDS: typeof MrAdvancedResultsLayoutDS;
    layoutEH: typeof MrAdvancedResultsLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
