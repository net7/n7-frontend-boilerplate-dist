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
                return element.innerHTML;
            });
            /** @type {?} */
            const focusBubble = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ id, label }) => {
                this.focusedBubble = id;
                this.focusedBubbleLabel = label;
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
                let group = document.getElementById(`g_${b.entity.id}`) // select 
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
                            focusBubble(b.entity);
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
    AwBubbleChartDS.prototype.focusedBubbleLabel;
    /** @type {?} */
    AwBubbleChartDS.prototype.updateChart;
    /** @type {?} */
    AwBubbleChartDS.prototype.smartSlice;
    /** @type {?} */
    AwBubbleChartDS.prototype.handleBubbleClick;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQTBCLE1BQU0sVUFBVSxDQUFDO0FBRWxELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBQ1MsY0FBUyxHQUFRLEVBQUUsQ0FBQSxDQUFNLCtCQUErQjs7UUFDeEQsU0FBSSxHQUFRLElBQUksQ0FBQyxDQUFRLHFEQUFxRDs7UUFDOUUsYUFBUSxHQUFhLEVBQUUsQ0FBQSxDQUFFLDJCQUEyQjs7UUFDcEQsWUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFNLDJEQUEyRDs7UUFDcEYsZUFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBMEMxRCxnQkFBVzs7OztRQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCOzs7O2NBSUU7WUFDRixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzdELEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FB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QUMsQ0FBQTtZQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RELENBQUMsRUFBQyxDQUFBOztjQUVJLFlBQVksR0FBRztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLE9BQU87Ozs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2pDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDcEIsYUFBYTtZQUNiLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7WUFDVixVQUFVO1lBQ1YsT0FBTztTQUNSO1FBQ0Q7Ozs7VUFJRTs7UUFKRjs7OztVQUlFO1FBQ0YseUJBQ0ssWUFBWSxJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUMzQixTQUFTLG9CQUNKLFlBQVksSUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLE9BRTlDO0lBQ0gsQ0FBQztDQWtIRjs7O0lBL0pDLG9DQUEwQjs7SUFDMUIsK0JBQXdCOztJQUN4QixtQ0FBOEI7O0lBQzlCLGtDQUEwQjs7SUFDMUIscUNBQTZCOztJQUM3QixvQ0FBNEI7O0lBQzVCLHdDQUE2Qjs7SUFDN0IsNkNBQWtDOztJQXdDbEMsc0NBc0JDOztJQUVELHFDQU9DOztJQUVELDRDQVVDOztJQUVELHFDQWtFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHksIHsgY3JlYXRlU2luZ2xldG9uIH0gZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdICAgICAgLy8gZGF0YSByZW5kZXJlZCBpbnRvIHRoZSBncmFwaFxuICBwdWJsaWMgZHJhdzogYW55ID0gbnVsbDsgICAgICAgIC8vIGV4cG9zZWQgY29tcG9uZW50IGRyYXcgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2aWV3XG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAgLy8gbGlzdCBvZiBzZWxlY3RlZCBidWJibGVzXG4gIHB1YmxpYyBmaWx0ZXJzOiBhbnlbXSA9IFtdICAgICAgLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcbiAgcHVibGljIGNsb3NlZEV5ZXM6IGFueVtdID0gW11cbiAgcHVibGljIHRpcHB5TGlzdDogYW55W10gPSBbXSAgICAvLyBsaXN0IG9mIHRpcHB5IGluc3RhbmNlc1xuICBwdWJsaWMgZm9jdXNlZEJ1YmJsZTogc3RyaW5nOyAgICAvLyBpZCBvZiB0aGUgZm9jdXNlZCBidWJibGVcbiAgcHVibGljIGZvY3VzZWRCdWJibGVMYWJlbDogc3RyaW5nOyAvLyBpZCBvZiB0aGUgZm9jdXNlZCBidWJibGVcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgc21hbGxDaGFydFNpemUgfSA9IHRoaXMub3B0aW9uc1xuICAgIGNvbnN0IHsgZm9udFJlbmRlcmluZywgdHJhbnNpdGlvbiwgc2h1ZmZsZSB9ID0gY29uZmlnLmdldCgnYnViYmxlLWNoYXJ0JylcbiAgICBjb25zdCBkb21haW4gPSBbXSwgcmFuZ2UgPSBbXVxuICAgIGNvbnN0IGNvbG9yQ29uZmlnID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKVxuXG4gICAgT2JqZWN0LmtleXMoY29sb3JDb25maWcpLmZvckVhY2goayA9PiB7XG4gICAgICBkb21haW4ucHVzaChrLnJlcGxhY2UoLy0vZywgJyAnKSlcbiAgICAgIHJhbmdlLnB1c2goKChjb2xvckNvbmZpZ1trXSB8fCB7fSkuY29sb3IgfHwge30pLmhleClcbiAgICB9KVxuXG4gICAgY29uc3QgY29tbW9uUGFyYW1zID0ge1xuICAgICAgY29udGFpbmVySWQ6ICdidWJibGVDaGFydENvbnRhaW5lcicsXG4gICAgICBzZXREcmF3OiBkcmF3ID0+IHRoaXMuZHJhdyA9IGRyYXcsXG4gICAgICBjb2xvck1hdGNoOiB7IGRvbWFpbiwgcmFuZ2UgfSxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgc2l6ZVJhbmdlOiBbLjUsIDUwMF0sXG4gICAgICBmb250UmVuZGVyaW5nLFxuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICB3aWR0aDogNTAwLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIHNodWZmbGUsXG4gICAgfVxuICAgIC8qXG4gICAgICBUd28gZGF0YSBzdHJlYW1zIGFyZSBvdXB1dHRlZC5cbiAgICAgIFRoZSBkZWZhdWx0IHN0cmVhbSBpcyBmb3IgdGhlIG5vcm1hbCB2aXN1YWxpemF0aW9uLFxuICAgICAgXCJzbWFsbFZpZXdcIiBpcyB1c2VkIGZvciBhIGNvbXByZXNzZWQgdmlldyBvZiB0aGUgc2FtZSBkYXRhLlxuICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNvbW1vblBhcmFtcyxcbiAgICAgIGRhdGE6IHRoaXMuc21hcnRTbGljZShkYXRhKSxcbiAgICAgIHNtYWxsVmlldzoge1xuICAgICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICAgIGRhdGE6IHRoaXMuc21hcnRTbGljZShkYXRhLCBzbWFsbENoYXJ0U2l6ZSksXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0ID0gcmVzID0+IHtcbiAgICAvKlxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCIuXG4gICAgICBXaGVuIHJlcyBpcyBwYXNzZWQgYXMgbnVsbCwgdGhlIGNoYXJ0IGlzIHJlbmRlcmVkIHdpdGggdGhlIHByZXZpb3VzIGRhdGEuXG4gICAgKi9cbiAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICByZXMgPSB0aGlzLmNoYXJ0RGF0YVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0RGF0YSA9IHJlc1xuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgcmVzcG9uc2VcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhLmZpbHRlcihlbCA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRyYXcpIHtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMuc21hcnRTbGljZShyZXMpKSAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXMpO1xuICAgICAgdGhpcy5vdXRwdXQuc21hbGxWaWV3LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzLCB0aGlzLm9wdGlvbnMuc21hbGxDaGFydFNpemUpO1xuICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG4gIH1cblxuICBzbWFydFNsaWNlID0gKGQsIGxlbmd0aD8pID0+IHtcbiAgICBjb25zdCBsID0gbGVuZ3RoID8gbGVuZ3RoIDogdGhpcy5vcHRpb25zLmxpbWl0XG4gICAgaWYgKGwgJiYgbCA8IGQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZC5zbGljZSgwLCBsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJ1YmJsZUNsaWNrID0gcGF5bG9hZCA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBvZiB0aGUgY2xpY2tlZCBidWJibGUuXG4gICAgKi9cbiAgICBjb25zdCBpZCA9IHBheWxvYWRcbiAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpZCksIDEpIC8vIHJlbW92ZSBzZWxlY3Rpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKGlkKSAvLyBhZGQgc2VsZWN0aW9uXG4gICAgfVxuICB9XG5cbiAgdGlwcHlNYWtlciA9IGJ1YmJsZXMgPT4ge1xuICAgIC8vIGZsdXNoIGV4aXN0aW5nIHRvb2x0aXBzXG4gICAgdGhpcy50aXBweUxpc3QuZm9yRWFjaCh0ID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCkgfSB9KVxuICAgIHRoaXMudGlwcHlMaXN0ID0gW11cblxuICAgIGNvbnN0IGJ1aWxkVG9vbHRpcCA9IGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IDxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1YmJsZS1jaGFydF9fdGlwcHktdGVtcGxhdGUnKVswXS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIGxldCBnb3RvQnV0dG9uID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGV4dCcpWzBdXG4gICAgICBnb3RvQnV0dG9uLmlubmVySFRNTCA9XG4gICAgICAgIGDDiCBjb2xsZWdhdG8gYSAke2J1YmJsZS5jb3VudH0gZW50aXTDoGBcbiAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX3RpdGxlJylbMF0uaW5uZXJIVE1MID1cbiAgICAgICAgYCR7YnViYmxlLmVudGl0eS5sYWJlbH1gXG4gICAgICBsZXQgc2VsZWN0QnV0dG9uID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fbGluaycpWzFdXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpbXBsZSkge1xuICAgICAgICBpZiAoc2VsZWN0QnV0dG9uKSBzZWxlY3RCdXR0b24ucmVtb3ZlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b2dnbGVCdWJibGVUZXh0ID0gdGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhidWJibGUuZW50aXR5LmlkKSA/IGBEZXNlbGV6aW9uYWAgOiBgU2VsZXppb25hYFxuICAgICAgICBzZWxlY3RCdXR0b24uaW5uZXJIVE1MID0gdG9nZ2xlQnViYmxlVGV4dFxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfVxuICAgIGNvbnN0IGZvY3VzQnViYmxlID0gKHsgaWQsIGxhYmVsIH0pID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZEJ1YmJsZSA9IGlkO1xuICAgICAgdGhpcy5mb2N1c2VkQnViYmxlTGFiZWwgPSBsYWJlbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgZGF0YSBiZWZvcmUgYWRkaW5nIHRvb2x0aXBzXG4gICAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZWwgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgfVxuICAgIC8vIG1ha2UgbmV3IHRvb2x0aXBzXG4gICAgYnViYmxlcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgbGV0IGdyb3VwOiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdfJHtiLmVudGl0eS5pZH1gKSAvLyBzZWxlY3QgXG4gICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy50aXBweUxpc3QucHVzaCggLy8gYWRkIHRoaXMgdGlwcHkgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xuICAgICAgICAgIHRpcHB5KGdyb3VwLCB7XG4gICAgICAgICAgICBjb250ZW50OiBidWlsZFRvb2x0aXAoYiksXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICBvbk1vdW50KCkge1xuICAgICAgICAgICAgICBmb2N1c0J1YmJsZShiLmVudGl0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlU2luZ2xldG9uKHRoaXMudGlwcHlMaXN0LCB7XG4gICAgLy8gICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgLy8gICBhcnJvdzogdHJ1ZSxcbiAgICAvLyAgIGZsaXA6IGZhbHNlLFxuICAgIC8vICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgLy8gICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIC8vICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAvLyAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgLy8gb25UcmlnZ2VyKHJlZikge1xuICAgIC8vICAgY29uc29sZS5sb2coe3JlZn0pXG4gICAgLy8gICBjb25zb2xlLmxvZygnZmlyZWQnKVxuICAgIC8vIH1cbiAgICAvLyB9KVxuICB9XG59Il19