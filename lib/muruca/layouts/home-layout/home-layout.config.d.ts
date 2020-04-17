import { MrHomeLayoutDS } from './home-layout.ds';
import { MrHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrHomeLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        dataSource: typeof DS.MrItemPreviewsDS;
    } | {
        id: string;
        dataSource: typeof DS.MrInnerTitleDS;
    } | {
        id: string;
        dataSource: typeof DS.MrHeroDS;
    })[];
    layoutDS: typeof MrHomeLayoutDS;
    layoutEH: typeof MrHomeLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
