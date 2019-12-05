/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-facets-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
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
            id = id.replace(/ /g, '-');
            // create data for this facet
            if (!this.autoComplete[id]) {
                this.autoComplete[id] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true // show or hide tippy
                };
                /** @type {?} */
                const ac = this.autoComplete[id];
                /** @type {?} */
                const getContent = (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const contentNode = document.getElementsByClassName('aw-simple-autocomplete__' + id.replace(/-search/, ''))[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                });
                if (!ac.tippy) {
                    /** @type {?} */
                    const target = '.' + id;
                    ac.tippy = tippy(target, {
                        content: getContent(),
                        trigger: 'manual',
                        interactive: true,
                        arrow: false,
                        flip: false,
                        appendTo: 'parent',
                        theme: 'light-border aw-home__facet-tippy',
                        placement: 'bottom-start',
                        maxWidth: '100%',
                    })[1]; // attach tippy to input type text
                }
            }
            /** @type {?} */
            const ac = this.autoComplete[id];
            if (res.results.length > 0 && ac.tippy) {
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
        const headers = [];
        /** @type {?} */
        const inputs = [];
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            if (this.autoComplete[id] && this.autoComplete[id].tippy) {
                this.autoComplete[id].tippy.destroy();
            }
        }));
        this.autoComplete = {}; // reset
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
            const headerClasses = [];
            /** @type {?} */
            const iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet.configKey) {
                headerClasses.push(`color-${facet.configKey}`);
                iconClasses.push(`color-${facet.configKey}`);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash',
                classes: headerClasses.join(' ') +
                    (facet.locked
                        ? ' is-blocked'
                        : // if every other facet is disabled → Lock this facet
                            facetData.every((/**
                             * @param {?} f
                             * @return {?}
                             */
                            f => {
                                return !f.enabled || f.type === facet.type;
                            }))
                                ? ' is-blocked'
                                : ' not-blocked'),
                payload: facet.type.replace(/ /g, '-')
            });
            // make array of inputs data
            inputs.push({
                sections: [
                    {
                        inputs: [
                            {
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type) + '-search',
                                iconPayload: String(facet.type) + '-search',
                                enterPayload: String(facet.type) + '-search',
                                classes: String(facet.type.replace(' ', '-')) + '-search'
                            }
                        ]
                    }
                ]
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        /** @type {?} */
        const widgetData = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0IsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFBckQ7O1FBQ1UsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFpRm5CLGVBQVU7Ozs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDOUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRztvQkFDdEIsS0FBSyxFQUFFLFNBQVM7O29CQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtpQkFDakMsQ0FBQzs7c0JBQ0ksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOztzQkFDMUIsVUFBVTs7O2dCQUFHLEdBQUcsRUFBRTs7MEJBQ2hCLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ2pELDBCQUEwQixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUN2RCxDQUFDLENBQUMsQ0FBQztvQkFDSixXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNwRCxPQUFPLFdBQVcsQ0FBQztnQkFDckIsQ0FBQyxDQUFB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Q0Y7aUJBQ0Y7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQzs7O2NBRUcsVUFBVSxHQUFVLEVBQUU7UUFDNUIsT0FBTyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBMENGOzs7Ozs7SUF6SEMsNkNBQTBCOztJQWlGMUIsMkNBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBhdXRvQ29tcGxldGUgPSB7fTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgZmFjZXREYXRhLCBsb2NrZWRGYWNldHMgfSkge1xuICAgIGNvbnN0IGhlYWRlcnM6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5wdXRzOiBhbnlbXSA9IFtdO1xuXG4gICAgLy8gd2hlbiBmYWNldCBkYXRhIGNoYW5nZXMsIGRlc3Ryb3kgZXZlcnkgdGlwcHkgYW5kIHJlc2V0IGF1dG9jb21wbGV0ZSBkYXRhLlxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXV0b0NvbXBsZXRlKS5mb3JFYWNoKCBpZCA9PiB7XG4gICAgICBpZiAodGhpcy5hdXRvQ29tcGxldGVbaWRdICYmIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweSkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkuZGVzdHJveSgpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IHt9IC8vIHJlc2V0XG5cbiAgICBmYWNldERhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvKlxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIGlmIChPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmxlbmd0aCkge1xuICAgICAgICBpZiAobG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdKSB7XG4gICAgICAgICAgLy8gaWYgYnViYmxlIGNoYXJ0IHNheSBsb2NrIHRoaXMgZmFjZXQsIGxvY2sgaXRcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGNvbnN0IGljb25DbGFzc2VzID0gW2ZhY2V0Lmljb25dO1xuICAgICAgaWYgKCFmYWNldC5lbmFibGVkKSB7IGhlYWRlckNsYXNzZXMucHVzaCgnaXMtZGlzYWJsZWQnKTsgfVxuICAgICAgaWYgKGZhY2V0LmNvbmZpZ0tleSkge1xuICAgICAgICBoZWFkZXJDbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXQuY29uZmlnS2V5fWApO1xuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LmNvbmZpZ0tleX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyxcbiAgICAgICAgY2xhc3NlczpcbiAgICAgICAgICBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKSArXG4gICAgICAgICAgKGZhY2V0LmxvY2tlZFxuICAgICAgICAgICAgPyAnIGlzLWJsb2NrZWQnXG4gICAgICAgICAgICA6IC8vIGlmIGV2ZXJ5IG90aGVyIGZhY2V0IGlzIGRpc2FibGVkIOKGkiBMb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgICAgIGZhY2V0RGF0YS5ldmVyeShmID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICFmLmVuYWJsZWQgfHwgZi50eXBlID09PSBmYWNldC50eXBlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgPyAnIGlzLWJsb2NrZWQnXG4gICAgICAgICAgICAgIDogJyBub3QtYmxvY2tlZCcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGZhY2V0WydpbnB1dC1wbGFjZWhvbGRlciddLFxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFmYWNldC5lbmFibGVkLFxuICAgICAgICAgICAgICAgIGlucHV0UGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGljb25QYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgZW50ZXJQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogU3RyaW5nKGZhY2V0LnR5cGUucmVwbGFjZSgnICcsICctJykpICsgJy1zZWFyY2gnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgY29uc3Qgd2lkZ2V0RGF0YTogYW55W10gPSBbXTtcbiAgICBoZWFkZXJzLm1hcCgoaCwgaSkgPT4ge1xuICAgICAgd2lkZ2V0RGF0YS5wdXNoKHsgaGVhZGVyOiBoLCBpbnB1dDogaW5wdXRzW2ldIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB3aWRnZXREYXRhO1xuICB9XG5cbiAgcHVibGljIHRpcHB5TWFrZXIgPSAocmVzLCBpZCkgPT4ge1xuICAgIGlkID0gaWQucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgLy8gY3JlYXRlIGRhdGEgZm9yIHRoaXMgZmFjZXRcbiAgICBpZiAoIXRoaXMuYXV0b0NvbXBsZXRlW2lkXSkge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdID0ge1xuICAgICAgICB0aXBweTogdW5kZWZpbmVkLCAvLyB0aXBweSBkYXRhIC8gY29uZmlnXG4gICAgICAgIG9wZW46IHRydWUgLy8gc2hvdyBvciBoaWRlIHRpcHB5XG4gICAgICB9O1xuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF07XG4gICAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgJ2F3LXNpbXBsZS1hdXRvY29tcGxldGVfXycgKyBpZC5yZXBsYWNlKC8tc2VhcmNoLywgJycpXG4gICAgICAgIClbMF07XG4gICAgICAgIGNvbnRlbnROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjLnRpcHB5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICcuJyArIGlkOyAvLyB0YXJnZXQgdGhlIGNvcnJlY3QgdGhpcy5hdXRvQ29tcGxldGVbaWRdIGlucHV0IGNsYXNzXG4gICAgICAgIGFjLnRpcHB5ID0gdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgYXctaG9tZV9fZmFjZXQtdGlwcHknLFxuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSlbMV07IC8vIGF0dGFjaCB0aXBweSB0byBpbnB1dCB0eXBlIHRleHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXTtcbiAgICBpZiAocmVzLnJlc3VsdHMubGVuZ3RoID4gMCAmJiBhYy50aXBweSkge1xuICAgICAgYWMudGlwcHkuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhYy50aXBweS5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=