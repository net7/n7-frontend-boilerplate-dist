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
            // make array of headers data
            headers.push({
                iconLeft: facet.type.icon,
                text: facet.type.label,
                additionalText: facet.count,
                iconRight: (facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash'),
                classes: '',
                payload: facet.type.id,
            });
            // make array of inputs data
            inputs.push({
                input: {
                    placeholder: 'Search',
                    icon: 'n7-icon-search',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEyQyxpREFBVTtJQUFyRDs7SUFrQ0EsQ0FBQzs7Ozs7O0lBaENXLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNsQixPQUFPLEdBQVUsRUFBRTs7WUFDbkIsTUFBTSxHQUFVLEVBQUU7UUFFdEIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDaEIsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDekIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDdEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2dCQUNoRSxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ3ZCLENBQUMsQ0FBQztZQUNILDRCQUE0QjtZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLEtBQUssRUFBRTtvQkFDTCxXQUFXLEVBQUUsUUFBUTtvQkFDckIsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVM7aUJBQzNDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7OztZQUdDLFVBQVUsR0FBVSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFFLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsVUFBVSxDQUFDLElBQUksQ0FBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLENBQUE7UUFDdkQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBRUgsNEJBQUM7QUFBRCxDQUFDLEFBbENELENBQTJDLFVBQVUsR0FrQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHZhciBoZWFkZXJzOiBhbnlbXSA9IFtdXG4gICAgdmFyIGlucHV0czogYW55W10gPSBbXVxuXG4gICAgZGF0YS5mb3JFYWNoKGZhY2V0ID0+IHtcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXG4gICAgICBoZWFkZXJzLnB1c2goe1xuICAgICAgICBpY29uTGVmdDogZmFjZXQudHlwZS5pY29uLFxuICAgICAgICB0ZXh0OiBmYWNldC50eXBlLmxhYmVsLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXG4gICAgICAgIGljb25SaWdodDogKGZhY2V0LmVuYWJsZWQgPyAnbjctaWNvbi1leWUnIDogJ243LWljb24tZXllLXNsYXNoJyksXG4gICAgICAgIGNsYXNzZXM6ICcnLFxuICAgICAgICBwYXlsb2FkOiBmYWNldC50eXBlLmlkLFxuICAgICAgfSk7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGlucHV0cyBkYXRhXG4gICAgICBpbnB1dHMucHVzaCh7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgcGF5bG9hZDogU3RyaW5nKGZhY2V0LnR5cGUuaWQpICsgJy1zZWFyY2gnLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHppcHBpbmcgYXJyYXlzIHRvIHJlbmRlciB3aWRnZXRzIHdpdGggc2VwYXJhdGUgZGF0YSAoc2VlIGhvbWUtbGF5b3V0Lmh0bWwpXG4gICAgdmFyIHdpZGdldERhdGE6IGFueVtdID0gW11cbiAgICBoZWFkZXJzLm1hcCggKGl0ZW0sIGkpID0+IHtcbiAgICAgIHdpZGdldERhdGEucHVzaCggeyBoZWFkZXI6IGl0ZW0sIGlucHV0OiBpbnB1dHNbaV0gfSApXG4gICAgfSk7XG4gICAgcmV0dXJuIHdpZGdldERhdGFcbiAgfVxuXG59Il19