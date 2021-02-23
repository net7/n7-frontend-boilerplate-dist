import { MrPostsLayoutDS } from './posts-layout.ds';
import { MrPostsLayoutEH } from './posts-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrPostsLayoutConfig: {
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
    layoutDS: typeof MrPostsLayoutDS;
    layoutEH: typeof MrPostsLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
