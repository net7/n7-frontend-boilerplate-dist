/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeFacetsWrapperDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var inputs = [];
        data.forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => {
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             */
            /**
             * For each facet on back-end, push a header-component
             * and a facet-component (search input only) to each array.
             * @type {?}
             */
            let headerClasses = [];
            /** @type {?} */
            let iconClasses = [facet.icon];
            if (facet.enabled)
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
        (item, i) => {
            widgetData.push({ header: item, input: inputs[i] });
        }));
        return widgetData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxVQUFVOzs7Ozs7SUFFekMsU0FBUyxDQUFDLElBQUk7O1lBQ2xCLE9BQU8sR0FBVSxFQUFFOztZQUNuQixNQUFNLEdBQVUsRUFBRTtRQUV0QixJQUFJLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25COzs7ZUFHRzs7Ozs7O2dCQUVDLGFBQWEsR0FBRyxFQUFFOztnQkFDbEIsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFHLEtBQUssQ0FBQyxPQUFPO2dCQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUNuRDtZQUVELDZCQUE2QjtZQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNqQixjQUFjLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hFLE9BQU8sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTthQUN2QixDQUFDLENBQUM7WUFDSCw0QkFBNEI7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixLQUFLLEVBQUU7b0JBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztvQkFDdkMsSUFBSSxFQUFFLGdCQUFnQjs7b0JBRXRCLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPO29CQUN4QixPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUztpQkFDM0M7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQzs7O1lBR0MsVUFBVSxHQUFVLEVBQUU7UUFDMUIsT0FBTyxDQUFDLEdBQUc7Ozs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsVUFBVSxDQUFDLElBQUksQ0FBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLENBQUE7UUFDdkQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lRmFjZXRzV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdmFyIGhlYWRlcnM6IGFueVtdID0gW107XG4gICAgdmFyIGlucHV0czogYW55W10gPSBbXTtcblxuICAgIGRhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEZvciBlYWNoIGZhY2V0IG9uIGJhY2stZW5kLCBwdXNoIGEgaGVhZGVyLWNvbXBvbmVudFxuICAgICAgICogYW5kIGEgZmFjZXQtY29tcG9uZW50IChzZWFyY2ggaW5wdXQgb25seSkgdG8gZWFjaCBhcnJheS5cbiAgICAgICAqL1xuXG4gICAgICBsZXQgaGVhZGVyQ2xhc3NlcyA9IFtdO1xuICAgICAgbGV0IGljb25DbGFzc2VzID0gW2ZhY2V0Lmljb25dO1xuICAgICAgaWYoZmFjZXQuZW5hYmxlZCkgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgaWYoZmFjZXQudHlwZS5jb25maWdLZXkpIHtcbiAgICAgICAgaGVhZGVyQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LnR5cGUuY29uZmlnS2V5fWApO1xuICAgICAgICBpY29uQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0LnR5cGUuY29uZmlnS2V5fWApO1xuICAgICAgfVxuXG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGljb25DbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgdGV4dDogZmFjZXQubGFiZWwsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBmYWNldC5jb3VudCxcbiAgICAgICAgaWNvblJpZ2h0OiAoZmFjZXQuZW5hYmxlZCA/ICduNy1pY29uLWV5ZScgOiAnbjctaWNvbi1leWUtc2xhc2gnKSxcbiAgICAgICAgY2xhc3NlczogaGVhZGVyQ2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHBheWxvYWQ6IGZhY2V0LnR5cGUuaWQsXG4gICAgICB9KTtcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaW5wdXRzIGRhdGFcbiAgICAgIGlucHV0cy5wdXNoKHtcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXG4gICAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICAvLyBkaXNhYmxlIGlucHV0IGlmIGZhY2VkIGhlYWRlciBpcyBub3QgZW5hYmxlZFxuICAgICAgICAgIGRpc2FibGVkOiAhZmFjZXQuZW5hYmxlZCxcbiAgICAgICAgICBwYXlsb2FkOiBTdHJpbmcoZmFjZXQudHlwZS5pZCkgKyAnLXNlYXJjaCcsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gemlwcGluZyBhcnJheXMgdG8gcmVuZGVyIHdpZGdldHMgd2l0aCBzZXBhcmF0ZSBkYXRhIChzZWUgaG9tZS1sYXlvdXQuaHRtbClcbiAgICB2YXIgd2lkZ2V0RGF0YTogYW55W10gPSBbXVxuICAgIGhlYWRlcnMubWFwKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgd2lkZ2V0RGF0YS5wdXNoKCB7IGhlYWRlcjogaXRlbSwgaW5wdXQ6IGlucHV0c1tpXSB9IClcbiAgICB9KTtcbiAgICByZXR1cm4gd2lkZ2V0RGF0YVxuICB9XG5cbn0iXX0=