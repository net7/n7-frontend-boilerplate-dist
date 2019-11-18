/**
 * @fileoverview added by tsickle
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
            console.log({ res });
            if (res.entities.length > 0 && ac.tippy) {
                ac.tippy.show();
            }
            else {
                ac.tippy.hide();
            }
            console.log(this.autoComplete);
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
                payload: facet.type.replace(' ', '-')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFDVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQXlFbkIsZUFBVTs7Ozs7UUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUN0QixLQUFLLEVBQUUsU0FBUzs7b0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCO2lCQUNqQyxDQUFDOztzQkFDSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7O3NCQUMxQixVQUFVOzs7Z0JBQUcsR0FBRyxFQUFFOzswQkFDaEIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsMEJBQTBCLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQ3ZELENBQUMsQ0FBQyxDQUFDO29CQUNKLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7b0JBQ3BELE9BQU8sV0FBVyxDQUFDO2dCQUNyQixDQUFDLENBQUE7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QztRQUNuRCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0E2Q0Y7Ozs7OztJQXBIQyw2Q0FBMEI7O0lBeUUxQiwyQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGF1dG9Db21wbGV0ZSA9IHt9O1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBmYWNldERhdGEsIGxvY2tlZEZhY2V0cyB9KSB7XG4gICAgY29uc3QgaGVhZGVyczogYW55W10gPSBbXTtcbiAgICBjb25zdCBpbnB1dHM6IGFueVtdID0gW107XG5cbiAgICBmYWNldERhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvKlxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIGlmIChPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmxlbmd0aCkge1xuICAgICAgICBpZiAobG9ja2VkRmFjZXRzW2ZhY2V0LnR5cGVdKSB7XG4gICAgICAgICAgLy8gaWYgYnViYmxlIGNoYXJ0IHNheSBsb2NrIHRoaXMgZmFjZXQsIGxvY2sgaXRcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGNvbnN0IGljb25DbGFzc2VzID0gW2ZhY2V0Lmljb25dO1xuICAgICAgaWYgKCFmYWNldC5lbmFibGVkKSB7IGhlYWRlckNsYXNzZXMucHVzaCgnaXMtZGlzYWJsZWQnKTsgfVxuICAgICAgaWYgKGZhY2V0LmNvbmZpZ0tleSkge1xuICAgICAgICBoZWFkZXJDbGFzc2VzLnB1c2goYGNvbG9yLSR7ZmFjZXQuY29uZmlnS2V5fWApO1xuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LmNvbmZpZ0tleX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyxcbiAgICAgICAgY2xhc3NlczpcbiAgICAgICAgICBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKSArXG4gICAgICAgICAgKGZhY2V0LmxvY2tlZFxuICAgICAgICAgICAgPyAnIGlzLWJsb2NrZWQnXG4gICAgICAgICAgICA6IC8vIGlmIGV2ZXJ5IG90aGVyIGZhY2V0IGlzIGRpc2FibGVkIOKGkiBMb2NrIHRoaXMgZmFjZXRcbiAgICAgICAgICAgIGZhY2V0RGF0YS5ldmVyeShmID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICFmLmVuYWJsZWQgfHwgZi50eXBlID09PSBmYWNldC50eXBlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgPyAnIGlzLWJsb2NrZWQnXG4gICAgICAgICAgICAgIDogJyBub3QtYmxvY2tlZCcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC50eXBlLnJlcGxhY2UoJyAnLCAnLScpXG4gICAgICB9KTtcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaW5wdXRzIGRhdGFcbiAgICAgIGlucHV0cy5wdXNoKHtcbiAgICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgaW5wdXRQYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZSkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICAgICAgaWNvblBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBlbnRlclBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKCcgJywgJy0nKSkgKyAnLXNlYXJjaCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gemlwcGluZyBhcnJheXMgdG8gcmVuZGVyIHdpZGdldHMgd2l0aCBzZXBhcmF0ZSBkYXRhIChzZWUgaG9tZS1sYXlvdXQuaHRtbClcbiAgICBjb25zdCB3aWRnZXREYXRhOiBhbnlbXSA9IFtdO1xuICAgIGhlYWRlcnMubWFwKChoLCBpKSA9PiB7XG4gICAgICB3aWRnZXREYXRhLnB1c2goeyBoZWFkZXI6IGgsIGlucHV0OiBpbnB1dHNbaV0gfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGE7XG4gIH1cblxuICBwdWJsaWMgdGlwcHlNYWtlciA9IChyZXMsIGlkKSA9PiB7XG4gICAgaWQgPSBpZC5yZXBsYWNlKC8gL2csICctJylcbiAgICAvLyBjcmVhdGUgZGF0YSBmb3IgdGhpcyBmYWNldFxuICAgIGlmICghdGhpcy5hdXRvQ29tcGxldGVbaWRdKSB7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gPSB7XG4gICAgICAgIHRpcHB5OiB1bmRlZmluZWQsIC8vIHRpcHB5IGRhdGEgLyBjb25maWdcbiAgICAgICAgb3BlbjogdHJ1ZSAvLyBzaG93IG9yIGhpZGUgdGlwcHlcbiAgICAgIH07XG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXTtcbiAgICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAnYXctc2ltcGxlLWF1dG9jb21wbGV0ZV9fJyArIGlkLnJlcGxhY2UoLy1zZWFyY2gvLCAnJylcbiAgICAgICAgKVswXTtcbiAgICAgICAgY29udGVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xuICAgICAgICByZXR1cm4gY29udGVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWMudGlwcHkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJy4nICsgaWQ7IC8vIHRhcmdldCB0aGUgY29ycmVjdCB0aGlzLmF1dG9Db21wbGV0ZVtpZF0gaW5wdXQgY2xhc3NcbiAgICAgICAgYWMudGlwcHkgPSB0aXBweSh0YXJnZXQsIHtcbiAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBhdy1ob21lX19mYWNldC10aXBweScsXG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICB9KVsxXTsgLy8gYXR0YWNoIHRpcHB5IHRvIGlucHV0IHR5cGUgdGV4dFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdO1xuICAgIGNvbnNvbGUubG9nKHtyZXN9KVxuICAgIGlmIChyZXMuZW50aXRpZXMubGVuZ3RoID4gMCAmJiBhYy50aXBweSkge1xuICAgICAgYWMudGlwcHkuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhYy50aXBweS5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5hdXRvQ29tcGxldGUpXG4gIH1cbn1cbiJdfQ==