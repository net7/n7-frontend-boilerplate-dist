import { MrItineraryLayoutDS } from './itinerary-layout.ds';
import { MrItineraryLayoutEH } from './itinerary-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export declare const MrItineraryLayoutConfig: {
    layoutId: string;
    widgets: {
        id: string;
    }[];
    layoutDS: typeof MrItineraryLayoutDS;
    layoutEH: typeof MrItineraryLayoutEH;
    widgetsDataSources: typeof DS;
    widgetsEventHandlers: typeof EH;
    options: {};
};
