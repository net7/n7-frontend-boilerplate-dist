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
                // return d.splice(d.length - l, l)
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
    // public bubbleBasket: any[]
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { config } = this.options;
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
            fontRendering,
            containerId: 'bubbleChartContainer',
            width: 500,
            height: 500,
            shuffle,
            transition,
            sizeRange: [.5, 500],
            selected: this.selected,
            colorMatch: { domain, range },
        };
        return Object.assign({}, commonParams, { data: this.smartSlice(data), smallView: Object.assign({}, commonParams, { data: this.smartSlice(data, (this.options.smallChartSize || null)) }), setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            draw => this.draw = draw) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQTBCLE1BQU0sVUFBVSxDQUFDO0FBRWxELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBQ1MsY0FBUyxHQUFRLEVBQUUsQ0FBQSxDQUFNLCtCQUErQjs7UUFDeEQsU0FBSSxHQUFRLElBQUksQ0FBQyxDQUFRLHFEQUFxRDs7UUFDOUUsYUFBUSxHQUFhLEVBQUUsQ0FBQSxDQUFFLDJCQUEyQjs7UUFDcEQsWUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFNLDJEQUEyRDs7UUFDcEYsZUFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBMEMxRCxnQkFBVzs7OztRQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCOzs7O2NBSUU7WUFDRixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzdELEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FB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QyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEQsQ0FBQyxFQUFDLENBQUE7O2NBRUksWUFBWSxHQUFHO1lBQ25CLGFBQWE7WUFDYixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPO1lBQ1AsVUFBVTtZQUNWLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7U0FDOUI7UUFDRCx5QkFDSyxZQUFZLElBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBTTNCLFNBQVMsb0JBQ0osWUFBWSxJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBRXBFLE9BQU87Ozs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUNsQztJQUNILENBQUM7Q0FtSEY7OztJQWhLQyxvQ0FBMEI7O0lBQzFCLCtCQUF3Qjs7SUFDeEIsbUNBQThCOztJQUM5QixrQ0FBMEI7O0lBQzFCLHFDQUE2Qjs7SUFDN0Isb0NBQTRCOztJQUM1Qix3Q0FBNEI7O0lBeUM1QixzQ0FxQkM7O0lBRUQscUNBUUM7O0lBRUQsNENBVUM7O0lBRUQscUNBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSwgeyBjcmVhdGVTaW5nbGV0b24gfSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gICAgICAvLyBkYXRhIHJlbmRlcmVkIGludG8gdGhlIGdyYXBoXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAgICAgICAgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdICAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gICAgICAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXVxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdICAgIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG4gIHB1YmxpYyBmb2N1c2VkQnViYmxlOiBzdHJpbmcgICAgLy8gaWQgb2YgdGhlIGZvY3VzZWQgYnViYmxlXG4gIC8vIHB1YmxpYyBidWJibGVCYXNrZXQ6IGFueVtdXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMub3B0aW9uc1xuICAgIGNvbnN0IHsgZm9udFJlbmRlcmluZywgdHJhbnNpdGlvbiwgc2h1ZmZsZSB9ID0gY29uZmlnLmdldCgnYnViYmxlLWNoYXJ0JylcbiAgICBjb25zdCBkb21haW4gPSBbXSwgcmFuZ2UgPSBbXVxuICAgIGNvbnN0IGNvbG9yQ29uZmlnID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKVxuXG4gICAgT2JqZWN0LmtleXMoY29sb3JDb25maWcpLmZvckVhY2goayA9PiB7XG4gICAgICBkb21haW4ucHVzaChrLnJlcGxhY2UoLy0vZywgJyAnKSlcbiAgICAgIHJhbmdlLnB1c2goKChjb2xvckNvbmZpZ1trXSB8fCB7fSkuY29sb3IgfHwge30pLmhleClcbiAgICB9KVxuXG4gICAgY29uc3QgY29tbW9uUGFyYW1zID0ge1xuICAgICAgZm9udFJlbmRlcmluZyxcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgc2h1ZmZsZSxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzaXplUmFuZ2U6IFsuNSwgNTAwXSxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXG4gICAgICAvKlxuICAgICAgICBUaGlzIGN1c3RvbSBvdXRwdXQgc3RyZWFtIGlzIHVzZWQgd2hlblxuICAgICAgICB5b3UgbmVlZCB0byBkaXNwbGF5IGEgc21hbGxlciwgc2ltcGxlciB2ZXJzaW9uXG4gICAgICAgIG9mIHRoZSBzYW1lIHZpc3VhbGl6YXRpb25cbiAgICAgICovXG4gICAgICBzbWFsbFZpZXc6IHtcbiAgICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgKHRoaXMub3B0aW9ucy5zbWFsbENoYXJ0U2l6ZSB8fCBudWxsKSksXG4gICAgICB9LFxuICAgICAgc2V0RHJhdzogZHJhdyA9PiB0aGlzLmRyYXcgPSBkcmF3XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2hhcnQgPSByZXMgPT4ge1xuICAgIC8qXG4gICAgICBSZWRyYXdzIHRoZSBncmFwaCB3aXRoIHRoZSBpbmNvbWluZyBkYXRhLlxuICAgICAgXCJyZXNcIiBzaG91bGQgYmUgQXBvbGxvJ3MgXCJyZXNwb25zZS5lbnRpdGllc0RhdGFcIi5cbiAgICAgIFdoZW4gcmVzIGlzIHBhc3NlZCBhcyBudWxsLCB0aGUgY2hhcnQgaXMgcmVuZGVyZWQgd2l0aCB0aGUgcHJldmlvdXMgZGF0YS5cbiAgICAqL1xuICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZVxuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5zbWFydFNsaWNlKHJlcykpIC8vIGNvbXBvbmVudCBzZWxmLXVwZGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLm91dHB1dC5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlcyk7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cbiAgfVxuXG4gIHNtYXJ0U2xpY2UgPSAoZCwgbGVuZ3RoPykgPT4ge1xuICAgIGNvbnN0IGwgPSBsZW5ndGggPyBsZW5ndGggOiB0aGlzLm9wdGlvbnMubGltaXRcbiAgICBpZiAobCAmJiBsIDwgZC5sZW5ndGgpIHtcbiAgICAgIC8vIHJldHVybiBkLnNwbGljZShkLmxlbmd0aCAtIGwsIGwpXG4gICAgICByZXR1cm4gZC5zbGljZSgwLCBsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJ1YmJsZUNsaWNrID0gcGF5bG9hZCA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBvZiB0aGUgY2xpY2tlZCBidWJibGUuXG4gICAgKi9cbiAgICBjb25zdCBpZCA9IHBheWxvYWRcbiAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpZCksIDEpIC8vIHJlbW92ZSBzZWxlY3Rpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKGlkKSAvLyBhZGQgc2VsZWN0aW9uXG4gICAgfVxuICB9XG5cbiAgdGlwcHlNYWtlciA9IGJ1YmJsZXMgPT4ge1xuICAgIC8vIGZsdXNoIGV4aXN0aW5nIHRvb2x0aXBzXG4gICAgdGhpcy50aXBweUxpc3QuZm9yRWFjaCh0ID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCkgfSB9KVxuICAgIHRoaXMudGlwcHlMaXN0ID0gW11cblxuICAgIGNvbnN0IGJ1aWxkVG9vbHRpcCA9IGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IDxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1YmJsZS1jaGFydF9fdGlwcHktdGVtcGxhdGUnKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIGxldCBnb3RvQnV0dG9uID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGV4dCcpWzBdXG4gICAgICBnb3RvQnV0dG9uLmlubmVySFRNTCA9XG4gICAgICAgIGDDiCBjb2xsZWdhdG8gYSAke2J1YmJsZS5jb3VudH0gZW50aXTDoGBcbiAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX3RpdGxlJylbMF0uaW5uZXJIVE1MID1cbiAgICAgICAgYCR7YnViYmxlLmVudGl0eS5sYWJlbH1gXG4gICAgICBsZXQgc2VsZWN0QnV0dG9uID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fbGluaycpWzFdXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpbXBsZSkge1xuICAgICAgICBpZiAoc2VsZWN0QnV0dG9uKSBzZWxlY3RCdXR0b24ucmVtb3ZlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b2dnbGVCdWJibGVUZXh0ID0gdGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhidWJibGUuZW50aXR5LmlkKSA/IGBEZXNlbGV6aW9uYWAgOiBgU2VsZXppb25hYFxuICAgICAgICBzZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gdG9nZ2xlQnViYmxlVGV4dFxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgIH1cbiAgICBjb25zdCBmb2N1c0J1YmJsZSA9IGlkID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZEJ1YmJsZSA9IGlkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xuICAgICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICAvLyBtYWtlIG5ldyB0b29sdGlwc1xuICAgIGJ1YmJsZXMuZm9yRWFjaChiID0+IHtcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGIuZW50aXR5LmlkKVxuICAgICAgbGV0IGdyb3VwID0gZWwgPyBlbC5wYXJlbnRFbGVtZW50IDogZmFsc2UgLy8gc2VsZWN0cyBhIDxnPiBlbGVtZW50XG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy50aXBweUxpc3QucHVzaCggLy8gYWRkIHRoaXMgdGlwcHkgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xuICAgICAgICAgIHRpcHB5KGdyb3VwLCB7XG4gICAgICAgICAgICBjb250ZW50OiBidWlsZFRvb2x0aXAoYiksXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICBvbk1vdW50KCkge1xuICAgICAgICAgICAgICBmb2N1c0J1YmJsZShiLmVudGl0eS5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGVTaW5nbGV0b24odGhpcy50aXBweUxpc3QsIHtcbiAgICAvLyAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAvLyAgIGFycm93OiB0cnVlLFxuICAgIC8vICAgZmxpcDogZmFsc2UsXG4gICAgLy8gICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAvLyAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgLy8gICBkZWxheTogWzE1MCwgMzBdLFxuICAgIC8vICAgdXBkYXRlRHVyYXRpb246IDQwMCxcbiAgICAvLyBvblRyaWdnZXIocmVmKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh7cmVmfSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdmaXJlZCcpXG4gICAgLy8gfVxuICAgIC8vIH0pXG4gIH1cbn0iXX0=