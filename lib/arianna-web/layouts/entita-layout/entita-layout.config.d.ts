import { AwEntitaLayoutDS } from './entita-layout.ds';
import { AwEntitaLayoutEH } from './entita-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwEntitaLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        hasStaticData: boolean;
        dataSource?: undefined;
        eventHandler?: undefined;
    } | {
        id: string;
        hasStaticData?: undefined;
        dataSource?: undefined;
        eventHandler?: undefined;
    } | {
        id: string;
        dataSource: typeof SmartPaginationDS;
        eventHandler: typeof SmartPaginationEH;
        hasStaticData?: undefined;
    })[];
    layoutDS: typeof AwEntitaLayoutDS;
    layoutEH: typeof AwEntitaLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
