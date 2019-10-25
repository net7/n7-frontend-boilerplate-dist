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
            if (lockedFacets[facet.type.id.replace('toe-', '')]) {
                // if bubble chart say lock this facet, lock it
                facet.locked = true;
            }
            else {
                facet.locked = false;
            }
            /** @type {?} */
            let headerClasses = [];
            /** @type {?} */
            let iconClasses = [facet.icon];
            if (!facet.enabled)
                headerClasses.push('is-disabled');
            if (facet.type.configKey) {
                headerClasses.push(`color-${facet.type.configKey}`);
                iconClasses.push(`color-${facet.type.configKey}`);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: headerClasses.join(' ') + (facet.locked ? ' is-blocked' : ' not-blocked'),
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                sections: [{
                        inputs: [{
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type.id) + '-search',
                                iconPayload: String(facet.type.id) + '-search',
                                enterPayload: String(facet.type.id) + '-search',
                                classes: String(facet.type.id) + '-search',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFFVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQTtRQXlEbEIsZUFBVTs7Ozs7UUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5Qiw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUc7O29CQUV0QixRQUFRLEVBQUUsU0FBUztvQkFDbkIsS0FBSyxFQUFFLFNBQVM7O29CQUNoQixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFBOztzQkFDSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFOzswQkFDUCxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUU7b0JBQ3ZCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDdkIsT0FBTyxFQUFFLDhCQUE4Qjt3QkFDdkMsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixLQUFLLEVBQUUsS0FBSzt3QkFDWixJQUFJLEVBQUUsS0FBSzt3QkFDWCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsS0FBSyxFQUFFLG1DQUFtQzt3QkFDMUMsU0FBUyxFQUFF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QUFDLElBQUksQ0FBQztnQkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDVCxNQUFNLEVBQUUsQ0FBQztnQ0FDUCxJQUFJLEVBQUUsTUFBTTtnQ0FDWixXQUFXLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDO2dDQUN2QyxJQUFJLEVBQUUsZ0JBQWdCO2dDQUN0QixRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTztnQ0FDeEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVM7Z0NBQy9DLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTO2dDQUM5QyxZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUztnQ0FDL0MsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVM7NkJBQzNDLENBQUM7cUJBQ0gsQ0FBQzthQUNILENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDOzs7WUFFQyxVQUFVLEdBQVUsRUFBRTtRQUMxQixPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNsRCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7Q0E4Q0Y7Ozs7OztJQXJHQyw2Q0FBeUI7O0lBeUR6QiwyQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gXCJ0aXBweS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJpdmF0ZSBhdXRvQ29tcGxldGUgPSB7fVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oe2ZhY2V0RGF0YSwgbG9ja2VkRmFjZXRzfSkge1xuICAgIHZhciBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIHZhciBpbnB1dHM6IGFueVtdID0gW107XG5cbiAgICBmYWNldERhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvKlxuICAgICAgIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIGlmIChsb2NrZWRGYWNldHNbZmFjZXQudHlwZS5pZC5yZXBsYWNlKCd0b2UtJywgJycpXSkge1xuICAgICAgICAvLyBpZiBidWJibGUgY2hhcnQgc2F5IGxvY2sgdGhpcyBmYWNldCwgbG9jayBpdFxuICAgICAgICBmYWNldC5sb2NrZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZVxuICAgICAgfVxuICAgICAgbGV0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGxldCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgaWYgKGZhY2V0LnR5cGUuY29uZmlnS2V5KSB7XG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC50eXBlLmNvbmZpZ0tleX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC50eXBlLmNvbmZpZ0tleX1gKTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogaWNvbkNsYXNzZXMuam9pbignICcpLFxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IChmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcpLFxuICAgICAgICBjbGFzc2VzOiBoZWFkZXJDbGFzc2VzLmpvaW4oJyAnKSArIChmYWNldC5sb2NrZWQgPyAnIGlzLWJsb2NrZWQnIDogJyBub3QtYmxvY2tlZCcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC50eXBlLmlkLFxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIHNlY3Rpb25zOiBbe1xuICAgICAgICAgIGlucHV0czogW3tcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmYWNldFsnaW5wdXQtcGxhY2Vob2xkZXInXSxcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgICBpbnB1dFBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLmlkKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgIGljb25QYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5pZCkgKyAnLXNlYXJjaCcsXG4gICAgICAgICAgICBlbnRlclBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLmlkKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFN0cmluZyhmYWNldC50eXBlLmlkKSArICctc2VhcmNoJyxcbiAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gemlwcGluZyBhcnJheXMgdG8gcmVuZGVyIHdpZGdldHMgd2l0aCBzZXBhcmF0ZSBkYXRhIChzZWUgaG9tZS1sYXlvdXQuaHRtbClcbiAgICB2YXIgd2lkZ2V0RGF0YTogYW55W10gPSBbXVxuICAgIGhlYWRlcnMubWFwKChoLCBpKSA9PiB7XG4gICAgICB3aWRnZXREYXRhLnB1c2goeyBoZWFkZXI6IGgsIGlucHV0OiBpbnB1dHNbaV0gfSlcbiAgICB9KTtcbiAgICByZXR1cm4gd2lkZ2V0RGF0YVxuICB9XG5cbiAgcHVibGljIHRpcHB5TWFrZXIgPSAocmVzLCBpZCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBkYXRhIGZvciB0aGlzIGZhY2V0XG4gICAgaWYgKCF0aGlzLmF1dG9Db21wbGV0ZVtpZF0pIHtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXSA9IHtcbiAgICAgICAgLy8gZGF0YTogW10sICAgICAgICAgLy8gYXJyYXkgb2Ygc3VnZ2VzdGlvbnNcbiAgICAgICAgdGVtcGxhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgdGlwcHk6IHVuZGVmaW5lZCwgLy8gdGlwcHkgZGF0YSAvIGNvbmZpZ1xuICAgICAgICBvcGVuOiB0cnVlLCAgICAgICAvLyBzaG93IG9yIGhpZGUgdGlwcHlcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdXG4gICAgICBpZiAoIWFjLnRpcHB5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICcuJyArIGlkOyAvLyB0YXJnZXQgdGhlIGNvcnJlY3QgdGhpcy5hdXRvQ29tcGxldGVbaWRdIGlucHV0IGNsYXNzXG4gICAgICAgIGFjLnRpcHB5ID0gdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgY29udGVudDogJzxzcGFuPkxvYWRpbmcgcmVzdWx0czwvc3Bhbj4nLFxuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgYXctaG9tZV9fZmFjZXQtdGlwcHknLFxuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBvbkhpZGRlbjogKCkgPT4ge1xuICAgICAgICAgICAgYWMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25TaG93OiAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LXNpbXBsZS1hdXRvY29tcGxldGVfXycgKyBpZC5yZXBsYWNlKCctc2VhcmNoJywgJycpKVswXVxuICAgICAgICAgICAgLy8gYWZ0ZXIgSSB1c2UgdGhpcyBub2RlLCBpdCBiZWNvbWVzIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKG5vZGUpIHsgLy8gaWYgSSBoYXZlIHRoZSBub2RlLCBkb24ndCB0cnkgdG8gZ2V0IGl0IGFnYWluXG4gICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xuICAgICAgICAgICAgICBhYy50aXBweS5zZXRDb250ZW50KG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW2lkXVxuICAgIGlmIChyZXMudG90YWxDb3VudCA+IDApIHtcbiAgICAgIGFjLnRpcHB5LnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICBhYy50aXBweS5oaWRlKClcbiAgICB9XG4gIH1cbn0iXX0=