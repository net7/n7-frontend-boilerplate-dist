/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0IsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZO0lBQWhEOztRQUNVLGNBQVMsR0FBVSxFQUFFLENBQUEsQ0FBQywyQkFBMkI7UUE2QnpELGVBQVU7Ozs7UUFBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3ZCOzs7Y0FHRTtZQUNGLDBCQUEwQjtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixzQkFBc0I7WUFDdEIsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFOzs7c0JBQ2QsTUFBTSxHQUFZLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuRSxJQUFJLE1BQU0sRUFBRTtvQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSwyQ0FBMkM7b0JBQzlELEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ1osT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUM1RCxXQUFXLEVBQUUsSUFBSTt3QkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJOzt3QkFDdkIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLHlCQUF5Qjt3QkFDaEMsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQ2hCLGNBQWMsRUFBRSxHQUFHO3FCQUNwQixDQUFDLENBQ0gsQ0FBQztpQkFDSDtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFBO0lBQ0gsQ0FBQzs7Ozs7SUF2RFEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEUsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0IsQ0FBQztnQkFDNUIsS0FBSyx3QkFBd0IsQ0FBQztnQkFDOUIsS0FBSyx3QkFBd0I7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsb0NBQW9DO29CQUNyRSxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFO3dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0NBQWtDO29CQUN0RSxDQUFDLEVBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQThCRjs7Ozs7O0lBekRDLG1DQUE2Qjs7SUE2QjdCLG9DQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIHRpcHB5IGluc3RhbmNlc1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWNoYXJ0LXRpcHB5LnNlbGVjdCc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdCcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGNoYXJ0LXRpcHB5KSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kM2VuZCc6XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZDNlbmQnOlxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmQzZW5kJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHBheWxvYWQpOyAvLyBjcmVhdGluZyBET00gRWxlbWVudHMgKHRlbXBsYXRlcylcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gd2FpdCBET00gdG8gYmUgcmVhZHlcbiAgICAgICAgICAgIHRoaXMudGlwcHlNYWtlcihwYXlsb2FkLmJ1YmJsZXMpOyAvLyBhc3NpZ24gdGVtcGxhdGVzIHRvIHRoZSBidWJibGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aXBweU1ha2VyID0gKGJ1YmJsZXMpID0+IHtcbiAgICAvKlxuICAgICAgRGVzdHJveXMgZXZlcnkgZXhpc3RpbmcgdG9vbHRpcCxcbiAgICAgIHRoZW4gY3JlYXRlcyBhIG5ldyBUaXBweSBpbnN0YW5jZSBmb3IgZWFjaCBidWJibGUuXG4gICAgKi9cbiAgICAvLyBmbHVzaCBleGlzdGluZyB0b29sdGlwc1xuICAgIHRoaXMudGlwcHlMaXN0LmZvckVhY2goKHQpID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCk7IH0gfSk7XG4gICAgdGhpcy50aXBweUxpc3QgPSBbXTtcbiAgICAvLyBjcmVhdGUgbmV3IHRvb2x0aXBzXG4gICAgYnViYmxlcy5mb3JFYWNoKChiKSA9PiB7IC8vIGdpdmUgYSB0b29sdGlwIHRvIGVhY2ggYnViYmxlXG4gICAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ18ke2IuZW50aXR5LmlkfWApO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgICAgICAgdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGVtcGxhdGVfXyR7Yi5lbnRpdHkuaWR9YCksXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==