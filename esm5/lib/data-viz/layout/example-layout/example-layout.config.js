/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFM0MsTUFBTSxLQUFPLHFCQUFxQixHQUFHO0lBQ25DLFFBQVEsRUFBRSxtQkFBbUI7Ozs7O0lBSzdCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7UUFDN0MsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7UUFDeEMsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7UUFDL0IsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7S0FDeEM7SUFDRCxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0Isa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHZFeGFtcGxlTGF5b3V0RFMgfSBmcm9tICcuL2V4YW1wbGUtbGF5b3V0LmRzJztcbmltcG9ydCB7IER2RXhhbXBsZUxheW91dEVIIH0gZnJvbSAnLi9leGFtcGxlLWxheW91dC5laCc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgRHZFeGFtcGxlTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2R2LWV4YW1wbGUtbGF5b3V0JyxcbiAgLyoqXG4gICAqIEFycmF5IG9mIGNvbXBvbmVudHMgeW91IHdhbnQgdG8gdXNlXG4gICAqIGluIHRoaXMgbGV5b3V0XG4gICovXG4gIHdpZGdldHM6IFtcbiAgICB7IGlkOiAnZHYtaW5uZXItdGl0bGUnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXG4gICAgeyBpZDogJ2R2LXdpZGdldCcsIGhhc1N0YXRpY0RhdGE6IHRydWUgfSxcbiAgICB7IGlkOiAnZHYtZGF0ZXBpY2tlci13cmFwcGVyJyB9LFxuICAgIHsgaWQ6ICdkdi1ncmFwaCcsIGhhc1N0YXRpY0RhdGE6IHRydWUgfSxcbiAgXSxcbiAgbGF5b3V0RFM6IER2RXhhbXBsZUxheW91dERTLFxuICBsYXlvdXRFSDogRHZFeGFtcGxlTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfVxufTsiXX0=