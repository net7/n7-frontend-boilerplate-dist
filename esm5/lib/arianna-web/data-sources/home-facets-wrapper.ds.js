/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-facets-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeFacetsWrapperDS, _super);
    function AwHomeFacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoComplete = {};
        _this.tippyMaker = (/**
         * @param {?} res
         * @param {?} id
         * @return {?}
         */
        function (res, id) {
            id = id.replace(/ /g, '-');
            // create data for this facet
            if (!_this.autoComplete[id]) {
                _this.autoComplete[id] = {
                    tippy: undefined,
                    // tippy data / config
                    open: true // show or hide tippy
                };
                /** @type {?} */
                var ac_1 = _this.autoComplete[id];
                /** @type {?} */
                var getContent = (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var contentNode = document.getElementsByClassName('aw-simple-autocomplete__' + id.replace(/-search/, ''))[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                });
                if (!ac_1.tippy) {
                    /** @type {?} */
                    var target = '.' + id;
                    ac_1.tippy = tippy(target, {
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
            var ac = _this.autoComplete[id];
            if (res.results.length > 0 && ac.tippy) {
                ac.tippy.show();
            }
            else {
                ac.tippy.hide();
            }
        });
        return _this;
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    AwHomeFacetsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var facetData = _a.facetData, lockedFacets = _a.lockedFacets;
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.autoComplete[id] && _this.autoComplete[id].tippy) {
                _this.autoComplete[id].tippy.destroy();
            }
        }));
        this.autoComplete = {}; // reset
        facetData.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
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
            var headerClasses = [];
            /** @type {?} */
            var iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet.configKey) {
                headerClasses.push("color-" + facet.configKey);
                iconClasses.push("color-" + facet.configKey);
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
                            function (f) {
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
        var widgetData = [];
        headers.map((/**
         * @param {?} h
         * @param {?} i
         * @return {?}
         */
        function (h, i) {
            widgetData.push({ header: h, input: inputs[i] });
        }));
        return widgetData;
    };
    return AwHomeFacetsWrapperDS;
}(DataSource));
export { AwHomeFacetsWrapperDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeFacetsWrapperDS.prototype.autoComplete;
    /** @type {?} */
    AwHomeFacetsWrapperDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCO0lBQTJDLGlEQUFVO0lBQXJEO1FBQUEscUVBMEhDO1FBekhTLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBaUZuQixnQkFBVTs7Ozs7UUFBRyxVQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzFCLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUMxQiw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUc7b0JBQ3RCLEtBQUssRUFBRSxTQUFTOztvQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxxQkFBcUI7aUJBQ2pDLENBQUM7O29CQUNJLElBQUUsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQzs7b0JBQzFCLFVBQVU7OztnQkFBRzs7d0JBQ1gsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsMEJBQTBCLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQ3ZELENBQUMsQ0FBQyxDQUFDO29CQUNKLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7b0JBQ3BELE9BQU8sV0FBVyxDQUFDO2dCQUNyQixDQUFDLENBQUE7Z0JBRUQsSUFBSSxDQUFDLElBQUUs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QyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7OztZQUVHLFVBQVUsR0FBVSxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDZixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUEwQ0gsNEJBQUM7QUFBRCxDQUFDLEFBMUhELENBQTJDLFVBQVUsR0EwSHBEOzs7Ozs7O0lBekhDLDZDQUEwQjs7SUFpRjFCLDJDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlID0ge307XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh7IGZhY2V0RGF0YSwgbG9ja2VkRmFjZXRzIH0pIHtcbiAgICBjb25zdCBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGlucHV0czogYW55W10gPSBbXTtcblxuICAgIC8vIHdoZW4gZmFjZXQgZGF0YSBjaGFuZ2VzLCBkZXN0cm95IGV2ZXJ5IHRpcHB5IGFuZCByZXNldCBhdXRvY29tcGxldGUgZGF0YS5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmF1dG9Db21wbGV0ZSkuZm9yRWFjaCggaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlW2lkXSAmJiB0aGlzLmF1dG9Db21wbGV0ZVtpZF0udGlwcHkpIHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGVbaWRdLnRpcHB5LmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5hdXRvQ29tcGxldGUgPSB7fSAvLyByZXNldFxuXG4gICAgZmFjZXREYXRhLmZvckVhY2goZmFjZXQgPT4ge1xuICAgICAgLypcbiAgICAgICBGb3IgZWFjaCBmYWNldCBvbiBiYWNrLWVuZCwgcHVzaCBhIGhlYWRlci1jb21wb25lbnRcbiAgICAgICBhbmQgYSBmYWNldC1jb21wb25lbnQgKHNlYXJjaCBpbnB1dCBvbmx5KSB0byBlYWNoIGFycmF5LlxuICAgICAgICovXG4gICAgICBpZiAoT2JqZWN0LmtleXMobG9ja2VkRmFjZXRzKS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSkge1xuICAgICAgICAgIC8vIGlmIGJ1YmJsZSBjaGFydCBzYXkgbG9jayB0aGlzIGZhY2V0LCBsb2NrIGl0XG4gICAgICAgICAgZmFjZXQubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoZWFkZXJDbGFzc2VzID0gW107XG4gICAgICBjb25zdCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmICghZmFjZXQuZW5hYmxlZCkgeyBoZWFkZXJDbGFzc2VzLnB1c2goJ2lzLWRpc2FibGVkJyk7IH1cbiAgICAgIGlmIChmYWNldC5jb25maWdLZXkpIHtcbiAgICAgICAgaGVhZGVyQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LmNvbmZpZ0tleX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC5jb25maWdLZXl9YCk7XG4gICAgICB9XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGljb25DbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgdGV4dDogZmFjZXQubGFiZWwsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBmYWNldC5jb3VudCxcbiAgICAgICAgaWNvblJpZ2h0OiBmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcsXG4gICAgICAgIGNsYXNzZXM6XG4gICAgICAgICAgaGVhZGVyQ2xhc3Nlcy5qb2luKCcgJykgK1xuICAgICAgICAgIChmYWNldC5sb2NrZWRcbiAgICAgICAgICAgID8gJyBpcy1ibG9ja2VkJ1xuICAgICAgICAgICAgOiAvLyBpZiBldmVyeSBvdGhlciBmYWNldCBpcyBkaXNhYmxlZCDihpIgTG9jayB0aGlzIGZhY2V0XG4gICAgICAgICAgICBmYWNldERhdGEuZXZlcnkoZiA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAhZi5lbmFibGVkIHx8IGYudHlwZSA9PT0gZmFjZXQudHlwZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgID8gJyBpcy1ibG9ja2VkJ1xuICAgICAgICAgICAgICA6ICcgbm90LWJsb2NrZWQnKSxcbiAgICAgICAgcGF5bG9hZDogZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJylcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmYWNldFsnaW5wdXQtcGxhY2Vob2xkZXInXSxcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhZmFjZXQuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICBpbnB1dFBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlKSArICctc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBpY29uUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGVudGVyUGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUpICsgJy1zZWFyY2gnLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IFN0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoJyAnLCAnLScpKSArICctc2VhcmNoJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB6aXBwaW5nIGFycmF5cyB0byByZW5kZXIgd2lkZ2V0cyB3aXRoIHNlcGFyYXRlIGRhdGEgKHNlZSBob21lLWxheW91dC5odG1sKVxuICAgIGNvbnN0IHdpZGdldERhdGE6IGFueVtdID0gW107XG4gICAgaGVhZGVycy5tYXAoKGgsIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCh7IGhlYWRlcjogaCwgaW5wdXQ6IGlucHV0c1tpXSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gd2lkZ2V0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyB0aXBweU1ha2VyID0gKHJlcywgaWQpID0+IHtcbiAgICBpZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgIC8vIGNyZWF0ZSBkYXRhIGZvciB0aGlzIGZhY2V0XG4gICAgaWYgKCF0aGlzLmF1dG9Db21wbGV0ZVtpZF0pIHtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXSA9IHtcbiAgICAgICAgdGlwcHk6IHVuZGVmaW5lZCwgLy8gdGlwcHkgZGF0YSAvIGNvbmZpZ1xuICAgICAgICBvcGVuOiB0cnVlIC8vIHNob3cgb3IgaGlkZSB0aXBweVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbaWRdO1xuICAgICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICdhdy1zaW1wbGUtYXV0b2NvbXBsZXRlX18nICsgaWQucmVwbGFjZSgvLXNlYXJjaC8sICcnKVxuICAgICAgICApWzBdO1xuICAgICAgICBjb250ZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJyk7XG4gICAgICAgIHJldHVybiBjb250ZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhYy50aXBweSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAnLicgKyBpZDsgLy8gdGFyZ2V0IHRoZSBjb3JyZWN0IHRoaXMuYXV0b0NvbXBsZXRlW2lkXSBpbnB1dCBjbGFzc1xuICAgICAgICBhYy50aXBweSA9IHRpcHB5KHRhcmdldCwge1xuICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoKSxcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIGF3LWhvbWVfX2ZhY2V0LXRpcHB5JyxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0pWzFdOyAvLyBhdHRhY2ggdGlwcHkgdG8gaW5wdXQgdHlwZSB0ZXh0XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtpZF07XG4gICAgaWYgKHJlcy5yZXN1bHRzLmxlbmd0aCA+IDAgJiYgYWMudGlwcHkpIHtcbiAgICAgIGFjLnRpcHB5LnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWMudGlwcHkuaGlkZSgpO1xuICAgIH1cbiAgfVxufVxuIl19