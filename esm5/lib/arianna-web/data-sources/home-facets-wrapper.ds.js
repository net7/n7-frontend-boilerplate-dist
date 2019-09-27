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
                iconLeft: facet.type.icon,
                text: facet.type.label,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEyQyxpREFBVTtJQUFyRDs7SUF5Q0EsQ0FBQzs7Ozs7O0lBdkNXLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNsQixPQUFPLEdBQVUsRUFBRTs7WUFDbkIsTUFBTSxHQUFVLEVBQUU7UUFFdEIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDaEI7OztlQUdHO1lBRUgsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDekIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDdEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2dCQUNoRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckcsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTthQUN2QixDQUFDLENBQUM7WUFDSCw0QkFBNEI7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixLQUFLLEVBQUU7b0JBQ0wsV0FBVyxFQUFFLFFBQVE7b0JBQ3JCLElBQUksRUFBRSxnQkFBZ0I7O29CQUV0QixRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTztvQkFDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVM7aUJBQzNDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7OztZQUdDLFVBQVUsR0FBVSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFFLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsVUFBVSxDQUFDLElBQUksQ0FBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLENBQUE7UUFDdkQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBRUgsNEJBQUM7QUFBRCxDQUFDLEFBekNELENBQTJDLFVBQVUsR0F5Q3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHZhciBoZWFkZXJzOiBhbnlbXSA9IFtdXG4gICAgdmFyIGlucHV0czogYW55W10gPSBbXVxuXG4gICAgZGF0YS5mb3JFYWNoKGZhY2V0ID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogRm9yIGVhY2ggZmFjZXQgb24gYmFjay1lbmQsIHB1c2ggYSBoZWFkZXItY29tcG9uZW50XG4gICAgICAgKiBhbmQgYSBmYWNldC1jb21wb25lbnQgKHNlYXJjaCBpbnB1dCBvbmx5KSB0byBlYWNoIGFycmF5LlxuICAgICAgICovXG5cbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogZmFjZXQudHlwZS5pY29uLFxuICAgICAgICB0ZXh0OiBmYWNldC50eXBlLmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogKGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyksXG4gICAgICAgIGNsYXNzZXM6IChmYWNldC5lbmFibGVkID8gJ3Byb3ZhJyA6ICdpcy1kaXNhYmxlZCcpICsgKGZhY2V0LnR5cGUuY29sb3IgPyBgICR7ZmFjZXQudHlwZS5jb2xvcn1gIDogJycpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC50eXBlLmlkLFxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgLy8gZGlzYWJsZSBpbnB1dCBpZiBmYWNlZCBoZWFkZXIgaXMgbm90IGVuYWJsZWRcbiAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgcGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUuaWQpICsgJy1zZWFyY2gnLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgdmFyIHdpZGdldERhdGE6IGFueVtdID0gW11cbiAgICBoZWFkZXJzLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCggeyBoZWFkZXI6IGl0ZW0sIGlucHV0OiBpbnB1dHNbaV0gfSApXG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGFcbiAgfVxuXG59Il19