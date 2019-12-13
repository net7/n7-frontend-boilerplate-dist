/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
// import tippy from 'tippy.js/dist/tippy-bundle.esm';
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
                let element = document.getElementsByClassName('bubble-chart__tippy-template')[0];
                element.getElementsByClassName('aw-bubble-popup-menu__text')[0].innerHTML =
                    `È collegato a ${bubble.count} entità`;
                element.getElementsByClassName('aw-bubble-popup-menu__title')[0].innerHTML =
                    `${bubble.entity.label}`;
                /** @type {?} */
                let toggleBubbleText = this.selected.includes(bubble.entity.id) ? `Deseleziona` : `Seleziona`;
                element.getElementsByClassName('aw-bubble-popup-menu__link')[1].innerHTML = toggleBubbleText;
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
        if (data.response && data.response.entitiesData) {
            this.chartData = data.response.entitiesData;
        }
        return {
            containerId: 'bubbleChartContainer',
            width: 500,
            height: 500,
            transition: 750,
            sizeRange: [.5, 500],
            selected: this.selected,
            colorMatch: {
                domain: ['persona', 'luogo', 'organizzazione', 'cosa notevole'],
                range: ['#4d8df3', '#f2d04c', '#c99245', '#6cb286']
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQTBCLE1BQU0sVUFBVSxDQUFDOztBQUdsRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUNTLGNBQVMsR0FBUSxFQUFFLENBQUEsQ0FBTSwrQkFBK0I7O1FBQ3hELFNBQUksR0FBUSxJQUFJLENBQUMsQ0FBUSxxREFBcUQ7O1FBQzlFLGFBQVEsR0FBYSxFQUFFLENBQUEsQ0FBRSwyQkFBMkI7O1FBQ3BELFlBQU8sR0FBVSxFQUFFLENBQUEsQ0FBTSwyREFBMkQ7O1FBQ3BGLGVBQVUsR0FBVSxFQUFFLENBQUE7UUFDdEIsY0FBUyxHQUFVLEVBQUUsQ0FBQSxDQUFJLDBCQUEwQjtRQXVCMUQsZ0JBQVc7Ozs7UUFBRyxHQUFHLENBQUMsRUFBRTtZQUNsQjs7O2NBR0U7WUFDRixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTthQUNyQjtpQkFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSwyREFBMkQ7Z0JBQ3hGLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FB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QUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztnQkFDL0QsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3BCLE9BQU87Ozs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1NBQ2xDLENBQUE7SUFDSCxDQUFDO0NBOEZGOzs7SUF4SEMsb0NBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLG1DQUE4Qjs7SUFDOUIsa0NBQTBCOztJQUMxQixxQ0FBNkI7O0lBQzdCLG9DQUE0Qjs7SUFDNUIsd0NBQTRCOztJQXNCNUIsc0NBb0JDOztJQUVELDRDQVVDOztJQUVELHFDQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHksIHsgY3JlYXRlU2luZ2xldG9uIH0gZnJvbSAndGlwcHkuanMnO1xuLy8gaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzL2Rpc3QvdGlwcHktYnVuZGxlLmVzbSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gICAgICAvLyBkYXRhIHJlbmRlcmVkIGludG8gdGhlIGdyYXBoXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAgICAgICAgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdICAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gICAgICAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXVxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdICAgIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG4gIHB1YmxpYyBmb2N1c2VkQnViYmxlOiBzdHJpbmcgICAgLy8gaWQgb2YgdGhlIGZvY3VzZWQgYnViYmxlXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgaWYgKGRhdGEucmVzcG9uc2UgJiYgZGF0YS5yZXNwb25zZS5lbnRpdGllc0RhdGEpIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gZGF0YS5yZXNwb25zZS5lbnRpdGllc0RhdGFcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgdHJhbnNpdGlvbjogNzUwLFxuICAgICAgc2l6ZVJhbmdlOiBbLjUsIDUwMF0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIGNvbG9yTWF0Y2g6IHtcbiAgICAgICAgZG9tYWluOiBbJ3BlcnNvbmEnLCAnbHVvZ28nLCAnb3JnYW5penphemlvbmUnLCAnY29zYSBub3Rldm9sZSddLFxuICAgICAgICByYW5nZTogWycjNGQ4ZGYzJywgJyNmMmQwNGMnLCAnI2M5OTI0NScsICcjNmNiMjg2J11cbiAgICAgIH0sXG4gICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YSxcbiAgICAgIHNldERyYXc6IGRyYXcgPT4gdGhpcy5kcmF3ID0gZHJhd1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0ID0gcmVzID0+IHtcbiAgICAvKlxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCJcbiAgICAqL1xuICAgIGlmIChyZXMpIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzXG4gICAgfSBlbHNlIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZSBiZWZvcmUgcmVkcmF3aW5nIHRoZSBncmFwaFxuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUocmVzKSAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHJlcztcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQnViYmxlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cbiAgICAqL1xuICAgIGNvbnN0IGlkID0gcGF5bG9hZFxuICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGlkKSwgMSkgLy8gcmVtb3ZlIHNlbGVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpIC8vIGFkZCBzZWxlY3Rpb25cbiAgICB9XG4gIH1cblxuICB0aXBweU1ha2VyID0gYnViYmxlcyA9PiB7XG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcbiAgICB0aGlzLnRpcHB5TGlzdC5mb3JFYWNoKHQgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKSB9IH0pXG4gICAgdGhpcy50aXBweUxpc3QgPSBbXVxuXG4gICAgY29uc3QgYnVpbGRUb29sdGlwID0gYnViYmxlID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnViYmxlLWNoYXJ0X190aXBweS10ZW1wbGF0ZScpWzBdXG4gICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190ZXh0JylbMF0uaW5uZXJIVE1MID1cbiAgICAgICAgYMOIIGNvbGxlZ2F0byBhICR7YnViYmxlLmNvdW50fSBlbnRpdMOgYFxuICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGl0bGUnKVswXS5pbm5lckhUTUwgPVxuICAgICAgICBgJHtidWJibGUuZW50aXR5LmxhYmVsfWBcbiAgICAgIGxldCB0b2dnbGVCdWJibGVUZXh0ID0gdGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhidWJibGUuZW50aXR5LmlkKSA/IGBEZXNlbGV6aW9uYWAgOiBgU2VsZXppb25hYFxuICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fbGluaycpWzFdLmlubmVySFRNTCA9IHRvZ2dsZUJ1YmJsZVRleHRcbiAgICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgIH1cbiAgICBjb25zdCBmb2N1c0J1YmJsZSA9IGlkID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZEJ1YmJsZSA9IGlkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xuICAgICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICAvLyBtYWtlIG5ldyB0b29sdGlwc1xuICAgIGJ1YmJsZXMuZm9yRWFjaChiID0+IHtcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGIuZW50aXR5LmlkKS5wYXJlbnRFbGVtZW50IC8vIHNlbGVjdHMgYSA8Zz4gZWxlbWVudFxuICAgICAgdGhpcy50aXBweUxpc3QucHVzaCggLy8gYWRkIHRoaXMgdGlwcHkgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xuICAgICAgICB0aXBweShlbCwge1xuICAgICAgICAgIGNvbnRlbnQ6IGJ1aWxkVG9vbHRpcChiKSxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgIG9uTW91bnQoKSB7XG4gICAgICAgICAgICBmb2N1c0J1YmJsZShiLmVudGl0eS5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGVTaW5nbGV0b24odGhpcy50aXBweUxpc3QsIHtcbiAgICAvLyAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAvLyAgIGFycm93OiB0cnVlLFxuICAgIC8vICAgZmxpcDogZmFsc2UsXG4gICAgLy8gICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAvLyAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgLy8gICBkZWxheTogWzE1MCwgMzBdLFxuICAgIC8vICAgdXBkYXRlRHVyYXRpb246IDQwMCxcbiAgICAgIC8vIG9uVHJpZ2dlcihyZWYpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coe3JlZn0pXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdmaXJlZCcpXG4gICAgICAvLyB9XG4gICAgLy8gfSlcbiAgfVxufSJdfQ==