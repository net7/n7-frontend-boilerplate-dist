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
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             * @type {?}
             */
            var headerClasses = [];
            /** @type {?} */
            var iconClasses = [facet.icon];
            if (facet.enabled)
                headerClasses.push('is-disabled');
            if (facet.type.configKey) {
                headerClasses.push("color-" + facet.type.configKey);
                iconClasses.push("color-" + facet.type.configKey);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: headerClasses.join(' '),
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                input: {
                    placeholder: facet['input-placeholder'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEyQyxpREFBVTtJQUFyRDs7SUFpREEsQ0FBQzs7Ozs7O0lBL0NXLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNsQixPQUFPLEdBQVUsRUFBRTs7WUFDbkIsTUFBTSxHQUFVLEVBQUU7UUFFdEIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDaEI7OztlQUdHOzs7Ozs7Z0JBRUMsYUFBYSxHQUFHLEVBQUU7O2dCQUNsQixXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUcsS0FBSyxDQUFDLE9BQU87Z0JBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QixhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFXLENBQUMsQ0FBQztnQkFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7YUFDbkQ7WUFFRCw2QkFBNkI7WUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDWCxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQy9CLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDakIsY0FBYyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2dCQUNoRSxPQUFPLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDdkIsQ0FBQyxDQUFDO1lBQ0gsNEJBQTRCO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsbUJBQW1CLENBQUM7b0JBQ3ZDLElBQUksRUFBRSxnQkFBZ0I7O29CQUV0QixRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTztvQkFDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVM7aUJBQzNDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7OztZQUdDLFVBQVUsR0FBVSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFFLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsVUFBVSxDQUFDLElBQUksQ0FBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLENBQUE7UUFDdkQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBRUgsNEJBQUM7QUFBRCxDQUFDLEFBakRELENBQTJDLFVBQVUsR0FpRHBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHZhciBoZWFkZXJzOiBhbnlbXSA9IFtdO1xuICAgIHZhciBpbnB1dHM6IGFueVtdID0gW107XG5cbiAgICBkYXRhLmZvckVhY2goZmFjZXQgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBGb3IgZWFjaCBmYWNldCBvbiBiYWNrLWVuZCwgcHVzaCBhIGhlYWRlci1jb21wb25lbnRcbiAgICAgICAqIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXG4gICAgICAgKi9cblxuICAgICAgbGV0IGhlYWRlckNsYXNzZXMgPSBbXTtcbiAgICAgIGxldCBpY29uQ2xhc3NlcyA9IFtmYWNldC5pY29uXTtcbiAgICAgIGlmKGZhY2V0LmVuYWJsZWQpIGhlYWRlckNsYXNzZXMucHVzaCgnaXMtZGlzYWJsZWQnKTtcbiAgICAgIGlmKGZhY2V0LnR5cGUuY29uZmlnS2V5KSB7XG4gICAgICAgIGhlYWRlckNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC50eXBlLmNvbmZpZ0tleX1gKTtcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldC50eXBlLmNvbmZpZ0tleX1gKTtcbiAgICAgIH1cblxuICAgICAgLy8gbWFrZSBhcnJheSBvZiBoZWFkZXJzIGRhdGFcbiAgICAgIGhlYWRlcnMucHVzaCh7XG4gICAgICAgIGljb25MZWZ0OiBpY29uQ2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHRleHQ6IGZhY2V0LmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogKGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyksXG4gICAgICAgIGNsYXNzZXM6IGhlYWRlckNsYXNzZXMuam9pbignICcpLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC50eXBlLmlkLFxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGZhY2V0WydpbnB1dC1wbGFjZWhvbGRlciddLFxuICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgLy8gZGlzYWJsZSBpbnB1dCBpZiBmYWNlZCBoZWFkZXIgaXMgbm90IGVuYWJsZWRcbiAgICAgICAgICBkaXNhYmxlZDogIWZhY2V0LmVuYWJsZWQsXG4gICAgICAgICAgcGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUuaWQpICsgJy1zZWFyY2gnLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgdmFyIHdpZGdldERhdGE6IGFueVtdID0gW11cbiAgICBoZWFkZXJzLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCggeyBoZWFkZXI6IGl0ZW0sIGlucHV0OiBpbnB1dHNbaV0gfSApXG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGFcbiAgfVxuXG59Il19