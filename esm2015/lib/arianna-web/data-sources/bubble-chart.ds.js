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
              "res" should be Apollo's "response.entitiesData"
            */
            if (res) {
                this.chartData = res;
            }
            else if (res === null) {
                res = this.chartData;
            }
            if (this.filters.length > 0) { // apply filters to the response before redrawing the graph
                res = this.chartData.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
            }
            if (!this.draw) {
                this.update(res); // component self-update
            }
            else {
                this.output.data = res;
                this.output.selected = this.selected;
                this.draw();
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
                let el = document.getElementById(b.entity.id).parentElement // selects a <g> element
                ;
                this.tippyList.push(// add this tippy to the array of instances
                tippy(el, {
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
        if (data.response && data.response.entitiesData) {
            this.chartData = data.response.entitiesData;
        }
        return {
            fontRendering,
            containerId: 'bubbleChartContainer',
            width: 500,
            height: 500,
            shuffle,
            transition,
            sizeRange: [.5, 500],
            selected: this.selected,
            colorMatch: { domain, range },
            data: this.chartData,
            setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            draw => this.draw = draw)
        };
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
    AwBubbleChartDS.prototype.handleBubbleClick;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQTBCLE1BQU0sVUFBVSxDQUFDO0FBRWxELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBQ1MsY0FBUyxHQUFRLEVBQUUsQ0FBQSxDQUFNLCtCQUErQjs7UUFDeEQsU0FBSSxHQUFRLElBQUksQ0FBQyxDQUFRLHFEQUFxRDs7UUFDOUUsYUFBUSxHQUFhLEVBQUUsQ0FBQSxDQUFFLDJCQUEyQjs7UUFDcEQsWUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFNLDJEQUEyRDs7UUFDcEYsZUFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBZ0MxRCxnQkFBVzs7OztRQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCOzs7Y0FHRTtZQUNGLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO2lCQUFNLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7YUFDckI7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLDJEQUEyRDtnQkFDeEYsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztnQkFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFD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cEIsT0FBTzs7OztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7U0FDbEMsQ0FBQTtJQUNILENBQUM7Q0FxR0Y7OztJQXhJQyxvQ0FBMEI7O0lBQzFCLCtCQUF3Qjs7SUFDeEIsbUNBQThCOztJQUM5QixrQ0FBMEI7O0lBQzFCLHFDQUE2Qjs7SUFDN0Isb0NBQTRCOztJQUM1Qix3Q0FBNEI7O0lBK0I1QixzQ0FvQkM7O0lBRUQsNENBVUM7O0lBRUQscUNBZ0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSwgeyBjcmVhdGVTaW5nbGV0b24gfSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gICAgICAvLyBkYXRhIHJlbmRlcmVkIGludG8gdGhlIGdyYXBoXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAgICAgICAgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdICAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gICAgICAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXVxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdICAgIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG4gIHB1YmxpYyBmb2N1c2VkQnViYmxlOiBzdHJpbmcgICAgLy8gaWQgb2YgdGhlIGZvY3VzZWQgYnViYmxlXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMub3B0aW9uc1xuICAgIGNvbnN0IHsgZm9udFJlbmRlcmluZywgdHJhbnNpdGlvbiwgc2h1ZmZsZSB9ID0gY29uZmlnLmdldCgnYnViYmxlLWNoYXJ0JylcbiAgICBjb25zdCBkb21haW4gPSBbXSwgcmFuZ2UgPSBbXVxuICAgIGNvbnN0IGNvbG9yQ29uZmlnID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKVxuXG4gICAgT2JqZWN0LmtleXMoY29sb3JDb25maWcpLmZvckVhY2goayA9PiB7XG4gICAgICBkb21haW4ucHVzaChrLnJlcGxhY2UoLy0vZywgJyAnKSlcbiAgICAgIHJhbmdlLnB1c2goKChjb2xvckNvbmZpZ1trXSB8fCB7fSkuY29sb3IgfHwge30pLmhleClcbiAgICB9KVxuXG4gICAgaWYgKGRhdGEucmVzcG9uc2UgJiYgZGF0YS5yZXNwb25zZS5lbnRpdGllc0RhdGEpIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gZGF0YS5yZXNwb25zZS5lbnRpdGllc0RhdGFcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbnRSZW5kZXJpbmcsXG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIHNodWZmbGUsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgc2l6ZVJhbmdlOiBbLjUsIDUwMF0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIGNvbG9yTWF0Y2g6IHsgZG9tYWluLCByYW5nZSB9LFxuICAgICAgZGF0YTogdGhpcy5jaGFydERhdGEsXG4gICAgICBzZXREcmF3OiBkcmF3ID0+IHRoaXMuZHJhdyA9IGRyYXdcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDaGFydCA9IHJlcyA9PiB7XG4gICAgLypcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXG4gICAgICBcInJlc1wiIHNob3VsZCBiZSBBcG9sbG8ncyBcInJlc3BvbnNlLmVudGl0aWVzRGF0YVwiXG4gICAgKi9cbiAgICBpZiAocmVzKSB7XG4gICAgICB0aGlzLmNoYXJ0RGF0YSA9IHJlc1xuICAgIH0gZWxzZSBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICByZXMgPSB0aGlzLmNoYXJ0RGF0YVxuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgcmVzcG9uc2UgYmVmb3JlIHJlZHJhd2luZyB0aGUgZ3JhcGhcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhLmZpbHRlcihlbCA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRyYXcpIHtcbiAgICAgIHRoaXMudXBkYXRlKHJlcykgLy8gY29tcG9uZW50IHNlbGYtdXBkYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LmRhdGEgPSByZXM7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJ1YmJsZUNsaWNrID0gcGF5bG9hZCA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBvZiB0aGUgY2xpY2tlZCBidWJibGUuXG4gICAgKi9cbiAgICBjb25zdCBpZCA9IHBheWxvYWRcbiAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpZCksIDEpIC8vIHJlbW92ZSBzZWxlY3Rpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKGlkKSAvLyBhZGQgc2VsZWN0aW9uXG4gICAgfVxuICB9XG5cbiAgdGlwcHlNYWtlciA9IGJ1YmJsZXMgPT4ge1xuICAgIC8vIGZsdXNoIGV4aXN0aW5nIHRvb2x0aXBzXG4gICAgdGhpcy50aXBweUxpc3QuZm9yRWFjaCh0ID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCkgfSB9KVxuICAgIHRoaXMudGlwcHlMaXN0ID0gW11cblxuICAgIGNvbnN0IGJ1aWxkVG9vbHRpcCA9IGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IDxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1YmJsZS1jaGFydF9fdGlwcHktdGVtcGxhdGUnKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIGxldCBnb3RvQnV0dG9uID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGV4dCcpWzBdXG4gICAgICBnb3RvQnV0dG9uLmlubmVySFRNTCA9XG4gICAgICAgIGDDiCBjb2xsZWdhdG8gYSAke2J1YmJsZS5jb3VudH0gZW50aXTDoGBcbiAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX3RpdGxlJylbMF0uaW5uZXJIVE1MID1cbiAgICAgICAgYCR7YnViYmxlLmVudGl0eS5sYWJlbH1gXG4gICAgICBsZXQgc2VsZWN0QnV0dG9uID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fbGluaycpWzFdXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpbXBsZSkge1xuICAgICAgICBpZiAoc2VsZWN0QnV0dG9uKSBzZWxlY3RCdXR0b24ucmVtb3ZlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b2dnbGVCdWJibGVUZXh0ID0gdGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhidWJibGUuZW50aXR5LmlkKSA/IGBEZXNlbGV6aW9uYWAgOiBgU2VsZXppb25hYFxuICAgICAgICBzZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gdG9nZ2xlQnViYmxlVGV4dFxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgIH1cbiAgICBjb25zdCBmb2N1c0J1YmJsZSA9IGlkID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZEJ1YmJsZSA9IGlkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xuICAgICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICAvLyBtYWtlIG5ldyB0b29sdGlwc1xuICAgIGJ1YmJsZXMuZm9yRWFjaChiID0+IHtcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGIuZW50aXR5LmlkKS5wYXJlbnRFbGVtZW50IC8vIHNlbGVjdHMgYSA8Zz4gZWxlbWVudFxuICAgICAgdGhpcy50aXBweUxpc3QucHVzaCggLy8gYWRkIHRoaXMgdGlwcHkgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xuICAgICAgICB0aXBweShlbCwge1xuICAgICAgICAgIGNvbnRlbnQ6IGJ1aWxkVG9vbHRpcChiKSxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgIG9uTW91bnQoKSB7XG4gICAgICAgICAgICBmb2N1c0J1YmJsZShiLmVudGl0eS5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGVTaW5nbGV0b24odGhpcy50aXBweUxpc3QsIHtcbiAgICAvLyAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAvLyAgIGFycm93OiB0cnVlLFxuICAgIC8vICAgZmxpcDogZmFsc2UsXG4gICAgLy8gICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAvLyAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgLy8gICBkZWxheTogWzE1MCwgMzBdLFxuICAgIC8vICAgdXBkYXRlRHVyYXRpb246IDQwMCxcbiAgICAvLyBvblRyaWdnZXIocmVmKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh7cmVmfSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdmaXJlZCcpXG4gICAgLy8gfVxuICAgIC8vIH0pXG4gIH1cbn0iXX0=