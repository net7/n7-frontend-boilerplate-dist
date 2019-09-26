import { Page404LayoutDS } from './page404-layout.ds';
import { Page404LayoutEH } from './page404-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const Page404LayoutConfig: {
    layoutId: string;
    widgets: any[];
    layoutDS: typeof Page404LayoutDS;
    layoutEH: typeof Page404LayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
