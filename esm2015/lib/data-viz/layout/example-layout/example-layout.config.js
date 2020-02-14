/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DvExampleLayoutDS } from './example-layout.ds';
import { DvExampleLayoutEH } from './example-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
export const DvExampleLayoutConfig = {
    layoutId: 'dv-example-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'dv-inner-title', hasStaticData: true },
        { id: 'dv-widget', hasStaticData: true },
        { id: 'dv-datepicker-wrapper' },
        { id: 'dv-graph', hasStaticData: true },
    ],
    layoutDS: DvExampleLayoutDS,
    layoutEH: DvExampleLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyxxQkFBcUIsR0FBRztJQUNuQyxRQUFRLEVBQUUsbUJBQW1COzs7OztJQUs3QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQzdDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQ3hDLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO0tBQ3hDO0lBQ0QsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER2RXhhbXBsZUxheW91dERTIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IER2RXhhbXBsZUxheW91dEVIIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5laCc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEdkV4YW1wbGVMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdkdi1leGFtcGxlLWxheW91dCcsXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcclxuICAgKiBpbiB0aGlzIGxleW91dFxyXG4gICovXHJcbiAgd2lkZ2V0czogW1xyXG4gICAgeyBpZDogJ2R2LWlubmVyLXRpdGxlJywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9LFxyXG4gICAgeyBpZDogJ2R2LXdpZGdldCcsIGhhc1N0YXRpY0RhdGE6IHRydWUgfSxcclxuICAgIHsgaWQ6ICdkdi1kYXRlcGlja2VyLXdyYXBwZXInIH0sXHJcbiAgICB7IGlkOiAnZHYtZ3JhcGgnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXHJcbiAgXSxcclxuICBsYXlvdXREUzogRHZFeGFtcGxlTGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IER2RXhhbXBsZUxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9XHJcbn07Il19