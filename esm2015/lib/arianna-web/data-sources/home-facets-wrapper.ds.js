/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import tippy from "tippy.js";
export class AwHomeFacetsWrapperDS extends DataSource {
    constructor() {
        super(...arguments);
        this.autoComplete = {};
        this.tippyMaker = (/**
         * @param {?} res
         * @param {?} id
         * @return {?}
         */
        (res, id) => {
            // create data for this facet
            if (!this.autoComplete[id]) {
                this.autoComplete[id] = {
                    // data: [],         // array of suggestions
                    template: undefined,
                    tippy: undefined,
                    // tippy data / config
                    open: true,
                };
                /** @type {?} */
                const ac = this.autoComplete[id];
                if (!ac.tippy) {
                    /** @type {?} */
                    const target = '.' + id;
                    ac.tippy = tippy(target, {
                        content: '<span>Loading results</span>',
                        trigger: 'manual',
                        interactive: true,
                        arrow: false,
                        flip: false,
                        appendTo: 'parent',
                        theme: 'light-border aw-home__facet-tippy',
                        placement: 'bottom-start',
                        maxWidth: '100%',
                        onHidden: (/**
                         * @return {?}
                         */
                        () => {
                            ac.open = false;
                        }),
                        onShow: (/**
                         * @return {?}
                         */
                        () => {
                            /** @type {?} */
                            let node = document.getElementsByClassName('aw-simple-autocomplete__' + id.replace('-search', ''))[0]
                            // after I use this node, it becomes undefined
                            ;
                            // after I use this node, it becomes undefined
                            if (node) { // if I have the node, don't try to get it again
                                node.setAttribute('style', 'display: block');
                                ac.tippy.setContent(node);
                            }
                        }),
                    })[0];
                }
            }
            /** @type {?} */
            let ac = this.autoComplete[id];
            if (res.totalCount > 0) {
                ac.tippy.show();
            }
            else {
                ac.tippy.hide();
            }
        });
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    transform({ facetData, lockedFacets }) {
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        facetData.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => {
            /*
             For each facet on back-end, push a header-component
             and a facet-component (search input only) to each array.
             */
            if (Object.keys(lockedFacets).length) {
                if (lockedFacets[facet.type]) {
                    // if bubble chart say lock this facet, lock it
                    facet.locked = true;
                }
                else {
                    facet.locked = false;
                }
            }
            /** @type {?} */
            let headerClasses = [];
            /** @type {?} */
            let iconClasses = [facet.icon];
            if (!facet.enabled)
                headerClasses.push('is-disabled');
            if (facet.configKey) {
                headerClasses.push(`color-${facet.configKey}`);
                iconClasses.push(`color-${facet.configKey}`);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: headerClasses.join(' ') + (facet.locked ? ' is-blocked' : (
                // if every other facet is disabled → Lock this facet
                facetData.every((/**
                 * @param {?} f
                 * @return {?}
                 */
                f => {
                    return !f.enabled || (f.type === facet.type);
                })) ? ' is-blocked' : ' not-blocked')),
                payload: facet.type,
            });
            // make array of inputs data
            inputs.push({
                sections: [{
                        inputs: [{
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type) + '-search',
                                iconPayload: String(facet.type) + '-search',
                                enterPayload: String(facet.type) + '-search',
                                classes: String(facet.type) + '-search',
                            }]
                    }]
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        /** @type {?} */
        var widgetData = [];
        headers.map((/**
         * @param {?} h
         * @param {?} i
         * @return {?}
         */
        (h, i) => {
            widgetData.push({ header: h, input: inputs[i] });
        }));
        return widgetData;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeFacetsWrapperDS.prototype.autoComplete;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFFVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQWlFbEIsZUFBVTs7Ozs7UUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5Qiw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUc7O29CQUV0QixRQUFRLEVBQUUsU0FBUztvQkFDbkIsS0FBSyxFQUFFLFNBQVM7O29CQUNoQixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFBOztzQkFDSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFOzswQkFDUCxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUU7b0JBQ3ZCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDdkIsT0FBTyxFQUFFLDhCQUE4Qjt3QkFDdkMsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixLQUFLLEVBQUUsS0FBSzt3QkFDWixJQUFJLEVBQUUsS0FBSzt3QkFDWCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsS0FBSyxFQUFFLG1DQUFtQzt3QkFDMUMsU0FBUyxFQUFF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O0lBaUV6QiwyQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gXCJ0aXBweS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJpdmF0ZSBhdXRvQ29tcGxldGUgPSB7fVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBmYWNldERhdGEsIGxvY2tlZEZhY2V0cyB9KSB7XG4gICAgdmFyIGhlYWRlcnM6IGFueVtdID0gW107XG4gICAgdmFyIGlucHV0czogYW55W10gPSBbXTtcblxuICAgIGZhY2V0RGF0YS5mb3JFYWNoKGZhY2V0ID0+IHtcbiAgICAgIC8qXG4gICAgICAgRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XG4gICAgICAgYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAqL1xuICAgICAgaWYoT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSkge1xuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGxldCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgaWYgKGZhY2V0LmNvbmZpZ0tleSkge1xuICAgICAgICBoZWFkZXJDbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXQuY29uZmlnS2V5fWApO1xuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LmNvbmZpZ0tleX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IChmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcpLFxuICAgICAgICBjbGFzc2VzOiBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKSArIChcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPyAnIGlzLWJsb2NrZWQnIDogKFxuICAgICAgICAgICAgLy8gaWYgZXZlcnkgb3RoZXIgZmFjZXQgaXMgZGlzYWJsZWQg4oaSIExvY2sgdGhpcyBmYWNldFxuICAgICAgICAgICAgZmFjZXREYXRhLmV2ZXJ5KGYgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gIWYuZW5hYmxlZCB8fCAoZi50eXBlID09PSBmYWNldC50eXBlKVxuICAgICAgICAgICAgfSkgPyAnIGlzLWJsb2NrZWQnIDogJyBub3QtYmxvY2tlZCcpKSxcbiAgICAgICAgcGF5bG9hZDogZmFjZXQudHlwZSxcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBzZWN0aW9uczogW3tcbiAgICAgICAgICBpbnB1dHM6IFt7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICFmYWNldC5lbmFibGVkLFxuICAgICAgICAgICAgaW5wdXRQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICBpY29uUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgZW50ZXJQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICBjbGFzc2VzOiBTdHJpbmcoZmFjZXQudHlwZSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgdmFyIHdpZGdldERhdGE6IGFueVtdID0gW11cbiAgICBoZWFkZXJzLm1hcCgoaCwgaSkgPT4ge1xuICAgICAgd2lkZ2V0RGF0YS5wdXNoKHsgaGVhZGVyOiBoLCBpbnB1dDogaW5wdXRzW2ldIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGFcbiAgfVxuXG4gIHB1YmxpYyB0aXBweU1ha2VyID0gKHJlcywgaWQpID0+IHtcbiAgICAvLyBjcmVhdGUgZGF0YSBmb3IgdGhpcyBmYWNldFxuICAgIGlmICghdGhpcy5hdXRvQ29tcGxldGVbaWRdKSB7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gPSB7XG4gICAgICAgIC8vIGRhdGE6IFtdLCAgICAgICAgIC8vIGFycmF5IG9mIHN1Z2dlc3Rpb25zXG4gICAgICAgIHRlbXBsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIHRpcHB5OiB1bmRlZmluZWQsIC8vIHRpcHB5IGRhdGEgLyBjb25maWdcbiAgICAgICAgb3BlbjogdHJ1ZSwgICAgICAgLy8gc2hvdyBvciBoaWRlIHRpcHB5XG4gICAgICB9XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXVxuICAgICAgaWYgKCFhYy50aXBweSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAnLicgKyBpZDsgLy8gdGFyZ2V0IHRoZSBjb3JyZWN0IHRoaXMuYXV0b0NvbXBsZXRlW2lkXSBpbnB1dCBjbGFzc1xuICAgICAgICBhYy50aXBweSA9IHRpcHB5KHRhcmdldCwge1xuICAgICAgICAgIGNvbnRlbnQ6ICc8c3Bhbj5Mb2FkaW5nIHJlc3VsdHM8L3NwYW4+JyxcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIGF3LWhvbWVfX2ZhY2V0LXRpcHB5JyxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgb25IaWRkZW46ICgpID0+IHtcbiAgICAgICAgICAgIGFjLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uU2hvdzogKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1zaW1wbGUtYXV0b2NvbXBsZXRlX18nICsgaWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKSlbMF1cbiAgICAgICAgICAgIC8vIGFmdGVyIEkgdXNlIHRoaXMgbm9kZSwgaXQgYmVjb21lcyB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChub2RlKSB7IC8vIGlmIEkgaGF2ZSB0aGUgbm9kZSwgZG9uJ3QgdHJ5IHRvIGdldCBpdCBhZ2FpblxuICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcbiAgICAgICAgICAgICAgYWMudGlwcHkuc2V0Q29udGVudChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVswXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF1cbiAgICBpZiAocmVzLnRvdGFsQ291bnQgPiAwKSB7XG4gICAgICBhYy50aXBweS5zaG93KClcbiAgICB9IGVsc2Uge1xuICAgICAgYWMudGlwcHkuaGlkZSgpXG4gICAgfVxuICB9XG59Il19