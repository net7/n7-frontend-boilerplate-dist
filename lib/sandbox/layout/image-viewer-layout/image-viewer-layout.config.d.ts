import { SbImageViewerLayoutDS } from './image-viewer-layout.ds';
import { SbImageViewerLayoutEH } from './image-viewer-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const SbImageViewerLayoutConfig: {
    layoutId: string;
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: {
        id: string;
        hasStaticData: boolean;
    }[];
    layoutDS: typeof SbImageViewerLayoutDS;
    layoutEH: typeof SbImageViewerLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
