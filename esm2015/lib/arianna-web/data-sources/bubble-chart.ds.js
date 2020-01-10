/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
export class AwBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.chartData = []; // data rendered into the graph
        // data rendered into the graph
        this.draw = null; // exposed component draw function to update the view
        // exposed component draw function to update the view
        this.selected = []; // list of selected bubbles
        // list of selected bubbles
        this.filters = []; // list of active filters to show only some TypeOfEntity(s)
        // list of active filters to show only some TypeOfEntity(s)
        this.closedEyes = [];
        this.tippyList = []; // list of tippy instances
        this.updateChart = (/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /*
              Redraws the graph with the incoming data.
              "res" should be Apollo's "response.entitiesData".
              When res is passed as null, the chart is rendered with the previous data.
            */
            if (res === null) {
                res = this.chartData;
            }
            else {
                this.chartData = res;
            }
            if (this.filters.length > 0) { // apply filters to the response
                res = this.chartData.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
            }
            if (!this.draw) {
                this.update(this.smartSlice(res)); // component self-update
            }
            else {
                this.output.selected = this.selected;
                this.output.data = this.smartSlice(res);
                this.output.smallView.data = this.smartSlice(res, this.options.smallChartSize);
                this.draw();
            }
        });
        this.smartSlice = (/**
         * @param {?} d
         * @param {?=} length
         * @return {?}
         */
        (d, length) => {
            /** @type {?} */
            const l = length ? length : this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            else {
                return d;
            }
        });
        this.handleBubbleClick = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /*
                  Toggles the selection of the clicked bubble.
                */
            /** @type {?} */
            const id = payload;
            if (this.selected.includes(id)) {
                this.selected.splice(this.selected.indexOf(id), 1); // remove selection
            }
            else {
                this.selected.push(id); // add selection
            }
        });
        this.tippyMaker = (/**
         * @param {?} bubbles
         * @return {?}
         */
        bubbles => {
            // flush existing tooltips
            this.tippyList.forEach((/**
             * @param {?} t
             * @return {?}
             */
            t => { if (t) {
                t.destroy();
            } }));
            this.tippyList = [];
            /** @type {?} */
            const buildTooltip = (/**
             * @param {?} bubble
             * @return {?}
             */
            bubble => {
                /** @type {?} */
                let element = (/** @type {?} */ (document.getElementsByClassName('bubble-chart__tippy-template')[0].cloneNode(true)));
                /** @type {?} */
                let gotoButton = element.getElementsByClassName('aw-bubble-popup-menu__text')[0];
                gotoButton.innerHTML =
                    `È collegato a ${bubble.count} entità`;
                element.getElementsByClassName('aw-bubble-popup-menu__title')[0].innerHTML =
                    `${bubble.entity.label}`;
                /** @type {?} */
                let selectButton = element.getElementsByClassName('aw-bubble-popup-menu__link')[1];
                if (this.options.simple) {
                    if (selectButton)
                        selectButton.remove();
                }
                else {
                    /** @type {?} */
                    let toggleBubbleText = this.selected.includes(bubble.entity.id) ? `Deseleziona` : `Seleziona`;
                    selectButton.innerHTML = toggleBubbleText;
                }
                // console.log(element)
                return element.innerHTML;
            });
            /** @type {?} */
            const focusBubble = (/**
             * @param {?} id
             * @return {?}
             */
            id => {
                this.focusedBubble = id;
            });
            if (this.filters.length > 0) { // apply filters to the data before adding tooltips
                bubbles = bubbles.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
            }
            // make new tooltips
            bubbles.forEach((/**
             * @param {?} b
             * @return {?}
             */
            b => {
                /** @type {?} */
                let el = document.getElementById(b.entity.id);
                /** @type {?} */
                let group = el ? el.parentElement : false // selects a <g> element
                ;
                if (group) {
                    this.tippyList.push(// add this tippy to the array of instances
                    tippy(group, {
                        content: buildTooltip(b),
                        interactive: true,
                        appendTo: document.body,
                        // suppress interactive warning
                        arrow: true,
                        flip: false,
                        theme: 'light-border no-padding',
                        placement: 'top',
                        delay: [150, 30],
                        updateDuration: 400,
                        /**
                         * @return {?}
                         */
                        onMount() {
                            focusBubble(b.entity.id);
                        }
                    }));
                }
            }));
            // createSingleton(this.tippyList, {
            //   interactive: true,
            //   appendTo: document.body, // suppress interactive warning
            //   arrow: true,
            //   flip: false,
            //   theme: 'light-border no-padding',
            //   placement: 'top',
            //   delay: [150, 30],
            //   updateDuration: 400,
            // onTrigger(ref) {
            //   console.log({ref})
            //   console.log('fired')
            // }
            // })
        });
    }
    // id of the focused bubble
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { config, smallChartSize } = this.options;
        const { fontRendering, transition, shuffle } = config.get('bubble-chart');
        /** @type {?} */
        const domain = [];
        /** @type {?} */
        const range = [];
        /** @type {?} */
        const colorConfig = config.get('config-keys');
        Object.keys(colorConfig).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            domain.push(k.replace(/-/g, ' '));
            range.push(((colorConfig[k] || {}).color || {}).hex);
        }));
        /** @type {?} */
        const commonParams = {
            containerId: 'bubbleChartContainer',
            setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            draw => this.draw = draw),
            colorMatch: { domain, range },
            selected: this.selected,
            sizeRange: [.5, 500],
            fontRendering,
            height: 500,
            width: 500,
            transition,
            shuffle,
        }
        /*
          Two data streams are ouputted.
          The default stream is for the normal visualization,
          "smallView" is used for a compressed view of the same data.
        */
        ;
        /*
          Two data streams are ouputted.
          The default stream is for the normal visualization,
          "smallView" is used for a compressed view of the same data.
        */
        return Object.assign({}, commonParams, { data: this.smartSlice(data), smallView: Object.assign({}, commonParams, { data: this.smartSlice(data, smallChartSize) }) });
    }
}
if (false) {
    /** @type {?} */
    AwBubbleChartDS.prototype.chartData;
    /** @type {?} */
    AwBubbleChartDS.prototype.draw;
    /** @type {?} */
    AwBubbleChartDS.prototype.selected;
    /** @type {?} */
    AwBubbleChartDS.prototype.filters;
    /** @type {?} */
    AwBubbleChartDS.prototype.closedEyes;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyList;
    /** @type {?} */
    AwBubbleChartDS.prototype.focusedBubble;
    /** @type {?} */
    AwBubbleChartDS.prototype.updateChart;
    /** @type {?} */
    AwBubbleChartDS.prototype.smartSlice;
    /** @type {?} */
    AwBubbleChartDS.prototype.handleBubbleClick;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQTBCLE1BQU0sVUFBVSxDQUFDO0FBRWxELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBQ1MsY0FBUyxHQUFRLEVBQUUsQ0FBQSxDQUFNLCtCQUErQjs7UUFDeEQsU0FBSSxHQUFRLElBQUksQ0FBQyxDQUFRLHFEQUFxRDs7UUFDOUUsYUFBUSxHQUFhLEVBQUUsQ0FBQSxDQUFFLDJCQUEyQjs7UUFDcEQsWUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFNLDJEQUEyRDs7UUFDcEYsZUFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBeUMxRCxnQkFBVzs7OztRQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCOzs7O2NBSUU7WUFDRixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzdELEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FB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QUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0RCxDQUFDLEVBQUMsQ0FBQTs7Y0FFSSxZQUFZLEdBQUc7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxPQUFPOzs7O1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNqQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ3BCLGFBQWE7WUFDYixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxHQUFHO1lBQ1YsVUFBVTtZQUNWLE9BQU87U0FDUjtRQUNEOzs7O1VBSUU7O1FBSkY7Ozs7VUFJRTtRQUNGLHlCQUNLLFlBQVksSUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDM0IsU0FBUyxvQkFDSixZQUFZLElBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxPQUU5QztJQUNILENBQUM7Q0FtSEY7OztJQS9KQyxvQ0FBMEI7O0lBQzFCLCtCQUF3Qjs7SUFDeEIsbUNBQThCOztJQUM5QixrQ0FBMEI7O0lBQzFCLHFDQUE2Qjs7SUFDN0Isb0NBQTRCOztJQUM1Qix3Q0FBNEI7O0lBd0M1QixzQ0FzQkM7O0lBRUQscUNBT0M7O0lBRUQsNENBVUM7O0lBRUQscUNBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSwgeyBjcmVhdGVTaW5nbGV0b24gfSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gICAgICAvLyBkYXRhIHJlbmRlcmVkIGludG8gdGhlIGdyYXBoXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAgICAgICAgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdICAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gICAgICAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXVxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdICAgIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG4gIHB1YmxpYyBmb2N1c2VkQnViYmxlOiBzdHJpbmcgICAgLy8gaWQgb2YgdGhlIGZvY3VzZWQgYnViYmxlXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNtYWxsQ2hhcnRTaXplIH0gPSB0aGlzLm9wdGlvbnNcbiAgICBjb25zdCB7IGZvbnRSZW5kZXJpbmcsIHRyYW5zaXRpb24sIHNodWZmbGUgfSA9IGNvbmZpZy5nZXQoJ2J1YmJsZS1jaGFydCcpXG4gICAgY29uc3QgZG9tYWluID0gW10sIHJhbmdlID0gW11cbiAgICBjb25zdCBjb2xvckNvbmZpZyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcblxuICAgIE9iamVjdC5rZXlzKGNvbG9yQ29uZmlnKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgZG9tYWluLnB1c2goay5yZXBsYWNlKC8tL2csICcgJykpXG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgc2V0RHJhdzogZHJhdyA9PiB0aGlzLmRyYXcgPSBkcmF3LFxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIHNpemVSYW5nZTogWy41LCA1MDBdLFxuICAgICAgZm9udFJlbmRlcmluZyxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzaHVmZmxlLFxuICAgIH1cbiAgICAvKlxuICAgICAgVHdvIGRhdGEgc3RyZWFtcyBhcmUgb3VwdXR0ZWQuXG4gICAgICBUaGUgZGVmYXVsdCBzdHJlYW0gaXMgZm9yIHRoZSBub3JtYWwgdmlzdWFsaXphdGlvbixcbiAgICAgIFwic21hbGxWaWV3XCIgaXMgdXNlZCBmb3IgYSBjb21wcmVzc2VkIHZpZXcgb2YgdGhlIHNhbWUgZGF0YS5cbiAgICAqL1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXG4gICAgICBzbWFsbFZpZXc6IHtcbiAgICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgc21hbGxDaGFydFNpemUpLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDaGFydCA9IHJlcyA9PiB7XG4gICAgLypcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXG4gICAgICBcInJlc1wiIHNob3VsZCBiZSBBcG9sbG8ncyBcInJlc3BvbnNlLmVudGl0aWVzRGF0YVwiLlxuICAgICAgV2hlbiByZXMgaXMgcGFzc2VkIGFzIG51bGwsIHRoZSBjaGFydCBpcyByZW5kZXJlZCB3aXRoIHRoZSBwcmV2aW91cyBkYXRhLlxuICAgICovXG4gICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydERhdGEgPSByZXNcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIHJlc3BvbnNlXG4gICAgICByZXMgPSB0aGlzLmNoYXJ0RGF0YS5maWx0ZXIoZWwgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgfVxuICAgIGlmICghdGhpcy5kcmF3KSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnNtYXJ0U2xpY2UocmVzKSkgLy8gY29tcG9uZW50IHNlbGYtdXBkYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMub3V0cHV0LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzKTtcbiAgICAgIHRoaXMub3V0cHV0LnNtYWxsVmlldy5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlcywgdGhpcy5vcHRpb25zLnNtYWxsQ2hhcnRTaXplKTtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuICB9XG5cbiAgc21hcnRTbGljZSA9IChkLCBsZW5ndGg/KSA9PiB7XG4gICAgY29uc3QgbCA9IGxlbmd0aCA/IGxlbmd0aCA6IHRoaXMub3B0aW9ucy5saW1pdFxuICAgIGlmIChsICYmIGwgPCBkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGQuc2xpY2UoMCwgbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCdWJibGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gb2YgdGhlIGNsaWNrZWQgYnViYmxlLlxuICAgICovXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSh0aGlzLnNlbGVjdGVkLmluZGV4T2YoaWQpLCAxKSAvLyByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpZCkgLy8gYWRkIHNlbGVjdGlvblxuICAgIH1cbiAgfVxuXG4gIHRpcHB5TWFrZXIgPSBidWJibGVzID0+IHtcbiAgICAvLyBmbHVzaCBleGlzdGluZyB0b29sdGlwc1xuICAgIHRoaXMudGlwcHlMaXN0LmZvckVhY2godCA9PiB7IGlmICh0KSB7IHQuZGVzdHJveSgpIH0gfSlcbiAgICB0aGlzLnRpcHB5TGlzdCA9IFtdXG5cbiAgICBjb25zdCBidWlsZFRvb2x0aXAgPSBidWJibGUgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSA8RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidWJibGUtY2hhcnRfX3RpcHB5LXRlbXBsYXRlJylbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICBsZXQgZ290b0J1dHRvbiA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX3RleHQnKVswXVxuICAgICAgZ290b0J1dHRvbi5pbm5lckhUTUwgPVxuICAgICAgICBgw4ggY29sbGVnYXRvIGEgJHtidWJibGUuY291bnR9IGVudGl0w6BgXG4gICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190aXRsZScpWzBdLmlubmVySFRNTCA9XG4gICAgICAgIGAke2J1YmJsZS5lbnRpdHkubGFiZWx9YFxuICAgICAgbGV0IHNlbGVjdEJ1dHRvbiA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX2xpbmsnKVsxXVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdEJ1dHRvbikgc2VsZWN0QnV0dG9uLnJlbW92ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG9nZ2xlQnViYmxlVGV4dCA9IHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoYnViYmxlLmVudGl0eS5pZCkgPyBgRGVzZWxlemlvbmFgIDogYFNlbGV6aW9uYWBcbiAgICAgICAgc2VsZWN0QnV0dG9uLmlubmVySFRNTCA9IHRvZ2dsZUJ1YmJsZVRleHRcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUxcbiAgICB9XG4gICAgY29uc3QgZm9jdXNCdWJibGUgPSBpZCA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWRCdWJibGUgPSBpZFxuICAgIH1cblxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcbiAgICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihlbCA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICB9XG4gICAgLy8gbWFrZSBuZXcgdG9vbHRpcHNcbiAgICBidWJibGVzLmZvckVhY2goYiA9PiB7XG4gICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiLmVudGl0eS5pZClcbiAgICAgIGxldCBncm91cCA9IGVsID8gZWwucGFyZW50RWxlbWVudCA6IGZhbHNlIC8vIHNlbGVjdHMgYSA8Zz4gZWxlbWVudFxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMudGlwcHlMaXN0LnB1c2goIC8vIGFkZCB0aGlzIHRpcHB5IHRvIHRoZSBhcnJheSBvZiBpbnN0YW5jZXNcbiAgICAgICAgICB0aXBweShncm91cCwge1xuICAgICAgICAgICAgY29udGVudDogYnVpbGRUb29sdGlwKGIpLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIGRlbGF5OiBbMTUwLCAzMF0sXG4gICAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgb25Nb3VudCgpIHtcbiAgICAgICAgICAgICAgZm9jdXNCdWJibGUoYi5lbnRpdHkuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlU2luZ2xldG9uKHRoaXMudGlwcHlMaXN0LCB7XG4gICAgLy8gICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgLy8gICBhcnJvdzogdHJ1ZSxcbiAgICAvLyAgIGZsaXA6IGZhbHNlLFxuICAgIC8vICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgLy8gICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIC8vICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAvLyAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgLy8gb25UcmlnZ2VyKHJlZikge1xuICAgIC8vICAgY29uc29sZS5sb2coe3JlZn0pXG4gICAgLy8gICBjb25zb2xlLmxvZygnZmlyZWQnKVxuICAgIC8vIH1cbiAgICAvLyB9KVxuICB9XG59Il19