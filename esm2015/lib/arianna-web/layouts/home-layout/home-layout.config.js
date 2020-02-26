/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwHomeLayoutDS } from './home-layout.ds';
import { AwHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
export const AwHomeLayoutConfig = {
    layoutId: 'aw-home-layout',
    widgets: [{
            id: 'aw-hero',
        }, {
            id: 'aw-home-hero-patrimonio',
        }, {
            id: 'aw-bubble-chart',
        }, {
            id: 'aw-home-facets-wrapper',
        }, {
            id: 'aw-home-item-tags-wrapper',
        }, {
            id: 'aw-home-autocomplete',
        }, {
            id: 'aw-linked-objects',
        }, {
            id: 'aw-autocomplete-wrapper',
        }, {
            id: 'aw-chart-tippy',
        }],
    layoutDS: AwHomeLayoutDS,
    layoutEH: AwHomeLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyxrQkFBa0IsR0FBRztJQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLE9BQU8sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLFNBQVM7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLGlCQUFpQjtTQUN0QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHdCQUF3QjtTQUM3QixFQUFFO1lBQ0QsRUFBRSxFQUFFLDJCQUEyQjtTQUNoQyxFQUFFO1lBQ0QsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLGdCQUFnQjtTQUNyQixDQUFDO0lBQ0YsUUFBUSxFQUFFLGNBQWM7SUFDeEIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdIb21lTGF5b3V0RFMgfSBmcm9tICcuL2hvbWUtbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3SG9tZUxheW91dEVIIH0gZnJvbSAnLi9ob21lLWxheW91dC5laCc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgQXdIb21lTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LWhvbWUtbGF5b3V0JyxcbiAgd2lkZ2V0czogW3tcbiAgICBpZDogJ2F3LWhlcm8nLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1ob21lLWhlcm8tcGF0cmltb25pbycsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWJ1YmJsZS1jaGFydCcsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJyxcbiAgfSwge1xuICAgIGlkOiAnYXctaG9tZS1hdXRvY29tcGxldGUnLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcbiAgfSwge1xuICAgIGlkOiAnYXctY2hhcnQtdGlwcHknLFxuICB9XSxcbiAgbGF5b3V0RFM6IEF3SG9tZUxheW91dERTLFxuICBsYXlvdXRFSDogQXdIb21lTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfVxufTsiXX0=