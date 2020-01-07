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
        return Object.assign({}, commonParams, { data: this.smartSlice(data), smallView: Object.assign({}, commonParams, { data: this.smartSlice(data, this.options.smallChartSize) }) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQTBCLE1BQU0sVUFBVSxDQUFDO0FBRWxELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBQ1MsY0FBUyxHQUFRLEVBQUUsQ0FBQSxDQUFNLCtCQUErQjs7UUFDeEQsU0FBSSxHQUFRLElBQUksQ0FBQyxDQUFRLHFEQUFxRDs7UUFDOUUsYUFBUSxHQUFhLEVBQUUsQ0FBQSxDQUFFLDJCQUEyQjs7UUFDcEQsWUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFNLDJEQUEyRDs7UUFDcEYsZUFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBeUMxRCxnQkFBVzs7OztRQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCOzs7O2NBSUU7WUFDRixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzdELEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FB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QUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RELENBQUMsRUFBQyxDQUFBOztjQUVJLFlBQVksR0FBRztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLE9BQU87Ozs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2pDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDcEIsYUFBYTtZQUNiLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7WUFDVixVQUFVO1lBQ1YsT0FBTztTQUNSO1FBQ0Q7Ozs7VUFJRTs7UUFKRjs7OztVQUlFO1FBQ0YseUJBQ0ssWUFBWSxJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUMzQixTQUFTLG9CQUNKLFlBQVksSUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FFM0Q7SUFDSCxDQUFDO0NBbUhGOzs7SUEvSkMsb0NBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLG1DQUE4Qjs7SUFDOUIsa0NBQTBCOztJQUMxQixxQ0FBNkI7O0lBQzdCLG9DQUE0Qjs7SUFDNUIsd0NBQTRCOztJQXdDNUIsc0NBc0JDOztJQUVELHFDQU9DOztJQUVELDRDQVVDOztJQUVELHFDQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHksIHsgY3JlYXRlU2luZ2xldG9uIH0gZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdICAgICAgLy8gZGF0YSByZW5kZXJlZCBpbnRvIHRoZSBncmFwaFxuICBwdWJsaWMgZHJhdzogYW55ID0gbnVsbDsgICAgICAgIC8vIGV4cG9zZWQgY29tcG9uZW50IGRyYXcgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2aWV3XG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAgLy8gbGlzdCBvZiBzZWxlY3RlZCBidWJibGVzXG4gIHB1YmxpYyBmaWx0ZXJzOiBhbnlbXSA9IFtdICAgICAgLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcbiAgcHVibGljIGNsb3NlZEV5ZXM6IGFueVtdID0gW11cbiAgcHVibGljIHRpcHB5TGlzdDogYW55W10gPSBbXSAgICAvLyBsaXN0IG9mIHRpcHB5IGluc3RhbmNlc1xuICBwdWJsaWMgZm9jdXNlZEJ1YmJsZTogc3RyaW5nICAgIC8vIGlkIG9mIHRoZSBmb2N1c2VkIGJ1YmJsZVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnNcbiAgICBjb25zdCB7IGZvbnRSZW5kZXJpbmcsIHRyYW5zaXRpb24sIHNodWZmbGUgfSA9IGNvbmZpZy5nZXQoJ2J1YmJsZS1jaGFydCcpXG4gICAgY29uc3QgZG9tYWluID0gW10sIHJhbmdlID0gW11cbiAgICBjb25zdCBjb2xvckNvbmZpZyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcblxuICAgIE9iamVjdC5rZXlzKGNvbG9yQ29uZmlnKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgZG9tYWluLnB1c2goay5yZXBsYWNlKC8tL2csICcgJykpXG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgc2V0RHJhdzogZHJhdyA9PiB0aGlzLmRyYXcgPSBkcmF3LFxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIHNpemVSYW5nZTogWy41LCA1MDBdLFxuICAgICAgZm9udFJlbmRlcmluZyxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzaHVmZmxlLFxuICAgIH1cbiAgICAvKlxuICAgICAgVHdvIGRhdGEgc3RyZWFtcyBhcmUgb3VwdXR0ZWQuXG4gICAgICBUaGUgZGVmYXVsdCBzdHJlYW0gaXMgZm9yIHRoZSBub3JtYWwgdmlzdWFsaXphdGlvbixcbiAgICAgIFwic21hbGxWaWV3XCIgaXMgdXNlZCBmb3IgYSBjb21wcmVzc2VkIHZpZXcgb2YgdGhlIHNhbWUgZGF0YS5cbiAgICAqL1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXG4gICAgICBzbWFsbFZpZXc6IHtcbiAgICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgdGhpcy5vcHRpb25zLnNtYWxsQ2hhcnRTaXplKSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2hhcnQgPSByZXMgPT4ge1xuICAgIC8qXG4gICAgICBSZWRyYXdzIHRoZSBncmFwaCB3aXRoIHRoZSBpbmNvbWluZyBkYXRhLlxuICAgICAgXCJyZXNcIiBzaG91bGQgYmUgQXBvbGxvJ3MgXCJyZXNwb25zZS5lbnRpdGllc0RhdGFcIi5cbiAgICAgIFdoZW4gcmVzIGlzIHBhc3NlZCBhcyBudWxsLCB0aGUgY2hhcnQgaXMgcmVuZGVyZWQgd2l0aCB0aGUgcHJldmlvdXMgZGF0YS5cbiAgICAqL1xuICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZVxuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5zbWFydFNsaWNlKHJlcykpIC8vIGNvbXBvbmVudCBzZWxmLXVwZGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLm91dHB1dC5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlcyk7XG4gICAgICB0aGlzLm91dHB1dC5zbWFsbFZpZXcuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXMsIHRoaXMub3B0aW9ucy5zbWFsbENoYXJ0U2l6ZSk7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cbiAgfVxuXG4gIHNtYXJ0U2xpY2UgPSAoZCwgbGVuZ3RoPykgPT4ge1xuICAgIGNvbnN0IGwgPSBsZW5ndGggPyBsZW5ndGggOiB0aGlzLm9wdGlvbnMubGltaXRcbiAgICBpZiAobCAmJiBsIDwgZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkLnNsaWNlKDAsIGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQnViYmxlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cbiAgICAqL1xuICAgIGNvbnN0IGlkID0gcGF5bG9hZFxuICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGlkKSwgMSkgLy8gcmVtb3ZlIHNlbGVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpIC8vIGFkZCBzZWxlY3Rpb25cbiAgICB9XG4gIH1cblxuICB0aXBweU1ha2VyID0gYnViYmxlcyA9PiB7XG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcbiAgICB0aGlzLnRpcHB5TGlzdC5mb3JFYWNoKHQgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKSB9IH0pXG4gICAgdGhpcy50aXBweUxpc3QgPSBbXVxuXG4gICAgY29uc3QgYnVpbGRUb29sdGlwID0gYnViYmxlID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gPEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnViYmxlLWNoYXJ0X190aXBweS10ZW1wbGF0ZScpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgbGV0IGdvdG9CdXR0b24gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190ZXh0JylbMF1cbiAgICAgIGdvdG9CdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgYMOIIGNvbGxlZ2F0byBhICR7YnViYmxlLmNvdW50fSBlbnRpdMOgYFxuICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGl0bGUnKVswXS5pbm5lckhUTUwgPVxuICAgICAgICBgJHtidWJibGUuZW50aXR5LmxhYmVsfWBcbiAgICAgIGxldCBzZWxlY3RCdXR0b24gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X19saW5rJylbMV1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxlKSB7XG4gICAgICAgIGlmIChzZWxlY3RCdXR0b24pIHNlbGVjdEJ1dHRvbi5yZW1vdmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRvZ2dsZUJ1YmJsZVRleHQgPSB0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGJ1YmJsZS5lbnRpdHkuaWQpID8gYERlc2VsZXppb25hYCA6IGBTZWxlemlvbmFgXG4gICAgICAgIHNlbGVjdEJ1dHRvbi5pbm5lckhUTUwgPSB0b2dnbGVCdWJibGVUZXh0XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfVxuICAgIGNvbnN0IGZvY3VzQnViYmxlID0gaWQgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkQnViYmxlID0gaWRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgZGF0YSBiZWZvcmUgYWRkaW5nIHRvb2x0aXBzXG4gICAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZWwgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgfVxuICAgIC8vIG1ha2UgbmV3IHRvb2x0aXBzXG4gICAgYnViYmxlcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYi5lbnRpdHkuaWQpXG4gICAgICBsZXQgZ3JvdXAgPSBlbCA/IGVsLnBhcmVudEVsZW1lbnQgOiBmYWxzZSAvLyBzZWxlY3RzIGEgPGc+IGVsZW1lbnRcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgICAgICAgdGlwcHkoZ3JvdXAsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGJ1aWxkVG9vbHRpcChiKSxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICBkZWxheTogWzE1MCwgMzBdLFxuICAgICAgICAgICAgdXBkYXRlRHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgIG9uTW91bnQoKSB7XG4gICAgICAgICAgICAgIGZvY3VzQnViYmxlKGIuZW50aXR5LmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNyZWF0ZVNpbmdsZXRvbih0aGlzLnRpcHB5TGlzdCwge1xuICAgIC8vICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgLy8gICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgIC8vICAgYXJyb3c6IHRydWUsXG4gICAgLy8gICBmbGlwOiBmYWxzZSxcbiAgICAvLyAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgIC8vICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAvLyAgIGRlbGF5OiBbMTUwLCAzMF0sXG4gICAgLy8gICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgIC8vIG9uVHJpZ2dlcihyZWYpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHtyZWZ9KVxuICAgIC8vICAgY29uc29sZS5sb2coJ2ZpcmVkJylcbiAgICAvLyB9XG4gICAgLy8gfSlcbiAgfVxufSJdfQ==