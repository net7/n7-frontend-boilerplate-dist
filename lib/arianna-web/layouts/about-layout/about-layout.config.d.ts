import { AwAboutLayoutDS } from './about-layout.ds';
import { AwAboutLayoutEH } from './about-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const AwAboutLayoutConfig: {
    layoutId: string;
    widgets: any[];
    layoutDS: typeof AwAboutLayoutDS;
    layoutEH: typeof AwAboutLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
