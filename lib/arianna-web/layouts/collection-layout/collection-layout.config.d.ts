import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { AwCollectionLayoutDS } from './collection-layout.ds';
import { AwCollectionLayoutEH } from './collection-layout.eh';
export declare const AwCollectionLayoutConfig: {
    layoutId: string;
    widgets: any[];
    layoutDS: typeof AwCollectionLayoutDS;
    layoutEH: typeof AwCollectionLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
