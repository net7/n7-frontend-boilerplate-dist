/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/chart-tippy.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import tippy from 'tippy.js';
export class AwChartTippyEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.tippyList = []; // array of tippy instances
        this.tippyMaker = (/**
         * @param {?} bubbles
         * @return {?}
         */
        (bubbles) => {
            /*
              Destroys every existing tooltip,
              then creates a new Tippy instance for each bubble.
            */
            // flush existing tooltips
            this.tippyList.forEach((/**
             * @param {?} t
             * @return {?}
             */
            (t) => { if (t) {
                t.destroy();
            } }));
            this.tippyList = [];
            // create new tooltips
            bubbles.forEach((/**
             * @param {?} b
             * @return {?}
             */
            (b) => {
                // give a tooltip to each bubble
                /** @type {?} */
                const target = document.getElementById(`g_${b.entity.id}`);
                if (target) {
                    this.tippyList.push(// add this tippy to the array of instances
                    tippy(target, {
                        content: document.getElementById(`template__${b.entity.id}`),
                        interactive: true,
                        appendTo: document.body,
                        // suppress interactive warning
                        arrow: true,
                        flip: false,
                        theme: 'light-border no-padding',
                        placement: 'top',
                        delay: [150, 30],
                        updateDuration: 400,
                    }));
                }
            }));
        });
    }
    // array of tippy instances
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-chart-tippy.select':
                    this.emitOuter('select', payload);
                    break;
                default:
                    console.warn('(chart-tippy) unhandled inner event of type', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.d3end':
                case 'aw-entita-layout.d3end':
                case 'aw-scheda-layout.d3end':
                    this.dataSource.update(payload); // creating DOM Elements (templates)
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.tippyMaker(payload.bubbles); // assign templates to the bubbles
                    }));
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwChartTippyEH.prototype.tippyList;
    /** @type {?} */
    AwChartTippyEH.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTtJQUFoRDs7UUFDVSxjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUMsMkJBQTJCO1FBNkJ6RCxlQUFVOzs7O1FBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN2Qjs7O2NBR0U7WUFDRiwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsc0JBQXNCO1lBQ3RCLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7O3NCQUNkLE1BQU0sR0FBWSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkUsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsMkNBQTJDO29CQUM5RCxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDNUQsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTs7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3dCQUNoQixjQUFjLEVBQUUsR0FBRztxQkFDcEIsQ0FBQyxDQUNILENBQUM7aUJBQ0g7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQTtJQUNILENBQUM7Ozs7O0lBdkRRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2xFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssc0JBQXNCLENBQUM7Z0JBQzVCLEtBQUssd0JBQXdCLENBQUM7Z0JBQzlCLEtBQUssd0JBQXdCO29CQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztvQkFDckUsVUFBVTs7O29CQUFDLEdBQUcsRUFBRTt3QkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztvQkFDdEUsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0E4QkY7Ozs7OztJQXpEQyxtQ0FBNkI7O0lBNkI3QixvQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdDaGFydFRpcHB5RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIHRpcHB5IGluc3RhbmNlc1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1jaGFydC10aXBweS5zZWxlY3QnOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdCcsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybignKGNoYXJ0LXRpcHB5KSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kM2VuZCc6XHJcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kM2VuZCc6XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5kM2VuZCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHBheWxvYWQpOyAvLyBjcmVhdGluZyBET00gRWxlbWVudHMgKHRlbXBsYXRlcylcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyB3YWl0IERPTSB0byBiZSByZWFkeVxyXG4gICAgICAgICAgICB0aGlzLnRpcHB5TWFrZXIocGF5bG9hZC5idWJibGVzKTsgLy8gYXNzaWduIHRlbXBsYXRlcyB0byB0aGUgYnViYmxlc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGlwcHlNYWtlciA9IChidWJibGVzKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBEZXN0cm95cyBldmVyeSBleGlzdGluZyB0b29sdGlwLFxyXG4gICAgICB0aGVuIGNyZWF0ZXMgYSBuZXcgVGlwcHkgaW5zdGFuY2UgZm9yIGVhY2ggYnViYmxlLlxyXG4gICAgKi9cclxuICAgIC8vIGZsdXNoIGV4aXN0aW5nIHRvb2x0aXBzXHJcbiAgICB0aGlzLnRpcHB5TGlzdC5mb3JFYWNoKCh0KSA9PiB7IGlmICh0KSB7IHQuZGVzdHJveSgpOyB9IH0pO1xyXG4gICAgdGhpcy50aXBweUxpc3QgPSBbXTtcclxuICAgIC8vIGNyZWF0ZSBuZXcgdG9vbHRpcHNcclxuICAgIGJ1YmJsZXMuZm9yRWFjaCgoYikgPT4geyAvLyBnaXZlIGEgdG9vbHRpcCB0byBlYWNoIGJ1YmJsZVxyXG4gICAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ18ke2IuZW50aXR5LmlkfWApO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy50aXBweUxpc3QucHVzaCggLy8gYWRkIHRoaXMgdGlwcHkgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xyXG4gICAgICAgICAgdGlwcHkodGFyZ2V0LCB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0ZW1wbGF0ZV9fJHtiLmVudGl0eS5pZH1gKSxcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXHJcbiAgICAgICAgICAgIGFycm93OiB0cnVlLFxyXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcclxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXHJcbiAgICAgICAgICAgIGRlbGF5OiBbMTUwLCAzMF0sXHJcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19