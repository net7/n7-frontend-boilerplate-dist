import { AwGalleryLayoutDS } from './gallery-layout.ds';
import { AwGalleryLayoutEH } from './gallery-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { FacetsWrapperDS } from '../../../common/data-sources';
import { FacetsWrapperEH } from '../../../common/event-handlers';
export declare const AwGalleryLayoutConfig: {
    layoutId: string;
    widgets: ({
        id: string;
        dataSource: typeof FacetsWrapperDS;
        eventHandler: typeof FacetsWrapperEH;
        hasStaticData?: undefined;
    } | {
        id: string;
        hasStaticData: boolean;
        dataSource?: undefined;
        eventHandler?: undefined;
    })[];
    layoutDS: typeof AwGalleryLayoutDS;
    layoutEH: typeof AwGalleryLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    layoutOptions: {};
};
