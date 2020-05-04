/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/gallery-layout/gallery-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwGalleryLayoutDS } from './gallery-layout.ds';
import { AwGalleryLayoutEH } from './gallery-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { FacetsWrapperDS, SmartPaginationDS } from '../../../common/data-sources';
import { FacetsWrapperEH, SmartPaginationEH } from '../../../common/event-handlers';
/** @type {?} */
export var AwGalleryLayoutConfig = {
    layoutId: 'aw-gallery-layout',
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: [
        { id: 'facets-wrapper', dataSource: FacetsWrapperDS, eventHandler: FacetsWrapperEH },
        { id: 'aw-linked-objects' },
        { id: 'aw-search-layout-tabs', hasStaticData: true },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        },
    ],
    layoutDS: AwGalleryLayoutDS,
    layoutEH: AwGalleryLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvZ2FsbGVyeS1sYXlvdXQvZ2FsbGVyeS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRXBGLE1BQU0sS0FBTyxxQkFBcUIsR0FBRztJQUNuQyxRQUFRLEVBQUUsbUJBQW1COzs7OztJQUs3QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUU7UUFDcEYsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7UUFDM0IsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtRQUNwRDtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0Isa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdHYWxsZXJ5TGF5b3V0RFMgfSBmcm9tICcuL2dhbGxlcnktbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3R2FsbGVyeUxheW91dEVIIH0gZnJvbSAnLi9nYWxsZXJ5LWxheW91dC5laCc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0IHsgRmFjZXRzV3JhcHBlckRTLCBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgRmFjZXRzV3JhcHBlckVILCBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBBd0dhbGxlcnlMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnYXctZ2FsbGVyeS1sYXlvdXQnLFxuICAvKipcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcbiAgICogaW4gdGhpcyBsYXlvdXRcbiAgICovXG4gIHdpZGdldHM6IFtcbiAgICB7IGlkOiAnZmFjZXRzLXdyYXBwZXInLCBkYXRhU291cmNlOiBGYWNldHNXcmFwcGVyRFMsIGV2ZW50SGFuZGxlcjogRmFjZXRzV3JhcHBlckVIIH0sXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9LFxuICAgIHsgaWQ6ICdhdy1zZWFyY2gtbGF5b3V0LXRhYnMnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXG4gICAge1xuICAgICAgaWQ6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcbiAgICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcbiAgICB9LFxuICBdLFxuICBsYXlvdXREUzogQXdHYWxsZXJ5TGF5b3V0RFMsXG4gIGxheW91dEVIOiBBd0dhbGxlcnlMYXlvdXRFSCxcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICBvcHRpb25zOiB7XG4gICAgLy8gVE9ET1xuICB9LFxufTtcbiJdfQ==