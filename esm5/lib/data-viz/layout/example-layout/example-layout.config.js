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
export var DvExampleLayoutConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sS0FBTyxxQkFBcUIsR0FBRztJQUNuQyxRQUFRLEVBQUUsbUJBQW1COzs7OztJQUs3QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQzdDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQ3hDLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO0tBQ3hDO0lBQ0QsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER2RXhhbXBsZUxheW91dERTIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5kcyc7XG5pbXBvcnQgeyBEdkV4YW1wbGVMYXlvdXRFSCB9IGZyb20gJy4vZXhhbXBsZS1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IER2RXhhbXBsZUxheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdkdi1leGFtcGxlLWxheW91dCcsXG4gIC8qKlxuICAgKiBBcnJheSBvZiBjb21wb25lbnRzIHlvdSB3YW50IHRvIHVzZVxuICAgKiBpbiB0aGlzIGxleW91dFxuICAqL1xuICB3aWRnZXRzOiBbXG4gICAgeyBpZDogJ2R2LWlubmVyLXRpdGxlJywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdkdi13aWRnZXQnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXG4gICAgeyBpZDogJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicgfSxcbiAgICB7IGlkOiAnZHYtZ3JhcGgnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXG4gIF0sXG4gIGxheW91dERTOiBEdkV4YW1wbGVMYXlvdXREUyxcbiAgbGF5b3V0RUg6IER2RXhhbXBsZUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH1cbn07Il19