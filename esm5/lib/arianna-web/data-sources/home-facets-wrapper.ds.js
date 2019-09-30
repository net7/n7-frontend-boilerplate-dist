/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeFacetsWrapperDS, _super);
    function AwHomeFacetsWrapperDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeFacetsWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        data.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             */
            // make array of headers data
            headers.push({
                iconLeft: facet.icon,
                text: facet.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: (facet.enabled ? 'prova' : 'is-disabled') + (facet.type.color ? " " + facet.type.color : ''),
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                input: {
                    placeholder: 'Search',
                    icon: 'n7-icon-search',
                    // disable input if faced header is not enabled
                    disabled: !facet.enabled,
                    payload: String(facet.type.id) + '-search',
                }
            });
        }));
        // zipping arrays to render widgets with separate data (see home-layout.html)
        /** @type {?} */
        var widgetData = [];
        headers.map((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        function (item, i) {
            widgetData.push({ header: item, input: inputs[i] });
        }));
        return widgetData;
    };
    return AwHomeFacetsWrapperDS;
}(DataSource));
export { AwHomeFacetsWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEyQyxpREFBVTtJQUFyRDs7SUF5Q0EsQ0FBQzs7Ozs7O0lBdkNXLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNsQixPQUFPLEdBQVUsRUFBRTs7WUFDbkIsTUFBTSxHQUFVLEVBQUU7UUFFdEIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDaEI7OztlQUdHO1lBRUgsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNwQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2pCLGNBQWMsRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDM0IsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDaEUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JHLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDdkIsQ0FBQyxDQUFDO1lBQ0gsNEJBQTRCO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLFdBQVcsRUFBRSxRQUFRO29CQUNyQixJQUFJLEVBQUUsZ0JBQWdCOztvQkFFdEIsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87b0JBQ3hCLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTO2lCQUMzQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDOzs7WUFHQyxVQUFVLEdBQVUsRUFBRTtRQUMxQixPQUFPLENBQUMsR0FBRzs7Ozs7UUFBRSxVQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxJQUFJLENBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxDQUFBO1FBQ3ZELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQztJQUVILDRCQUFDO0FBQUQsQ0FBQyxBQXpDRCxDQUEyQyxVQUFVLEdBeUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB2YXIgaGVhZGVyczogYW55W10gPSBbXVxuICAgIHZhciBpbnB1dHM6IGFueVtdID0gW11cblxuICAgIGRhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgICogYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAqL1xuXG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGZhY2V0Lmljb24sXG4gICAgICAgIHRleHQ6IGZhY2V0LmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogKGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyksXG4gICAgICAgIGNsYXNzZXM6IChmYWNldC5lbmFibGVkID8gJ3Byb3ZhJyA6ICdpcy1kaXNhYmxlZCcpICsgKGZhY2V0LnR5cGUuY29sb3IgPyBgICR7ZmFjZXQudHlwZS5jb2xvcn1gIDogJycpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC50eXBlLmlkLFxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgLy8gZGlzYWJsZSBpbnB1dCBpZiBmYWNlZCBoZWFkZXIgaXMgbm90IGVuYWJsZWRcbiAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgcGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUuaWQpICsgJy1zZWFyY2gnLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgdmFyIHdpZGdldERhdGE6IGFueVtdID0gW11cbiAgICBoZWFkZXJzLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCggeyBoZWFkZXI6IGl0ZW0sIGlucHV0OiBpbnB1dHNbaV0gfSApXG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGFcbiAgfVxuXG59Il19