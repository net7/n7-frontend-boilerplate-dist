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
        (item, i) => {
            widgetData.push({ header: item, input: inputs[i] });
        }));
        return widgetData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxVQUFVOzs7Ozs7SUFFekMsU0FBUyxDQUFDLElBQUk7O1lBQ2xCLE9BQU8sR0FBVSxFQUFFOztZQUNuQixNQUFNLEdBQVUsRUFBRTtRQUV0QixJQUFJLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLDZCQUE2QjtZQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNYLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQ3pCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3RCLGNBQWMsRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDM0IsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDaEUsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTthQUN2QixDQUFDLENBQUM7WUFDSCw0QkFBNEI7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixLQUFLLEVBQUU7b0JBQ0wsV0FBVyxFQUFFLFFBQVE7b0JBQ3JCLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTO2lCQUMzQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDOzs7WUFHQyxVQUFVLEdBQVUsRUFBRTtRQUMxQixPQUFPLENBQUMsR0FBRzs7Ozs7UUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QixVQUFVLENBQUMsSUFBSSxDQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FBQTtRQUN2RCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVGYWNldHNXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICB2YXIgaGVhZGVyczogYW55W10gPSBbXVxuICAgIHZhciBpbnB1dHM6IGFueVtdID0gW11cblxuICAgIGRhdGEuZm9yRWFjaChmYWNldCA9PiB7XG4gICAgICAvLyBtYWtlIGFycmF5IG9mIGhlYWRlcnMgZGF0YVxuICAgICAgaGVhZGVycy5wdXNoKHtcbiAgICAgICAgaWNvbkxlZnQ6IGZhY2V0LnR5cGUuaWNvbixcbiAgICAgICAgdGV4dDogZmFjZXQudHlwZS5sYWJlbCxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IGZhY2V0LmNvdW50LFxuICAgICAgICBpY29uUmlnaHQ6IChmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcpLFxuICAgICAgICBjbGFzc2VzOiAnJyxcbiAgICAgICAgcGF5bG9hZDogZmFjZXQudHlwZS5pZCxcbiAgICAgIH0pO1xuICAgICAgLy8gbWFrZSBhcnJheSBvZiBpbnB1dHMgZGF0YVxuICAgICAgaW5wdXRzLnB1c2goe1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgIHBheWxvYWQ6IFN0cmluZyhmYWNldC50eXBlLmlkKSArICctc2VhcmNoJyxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB6aXBwaW5nIGFycmF5cyB0byByZW5kZXIgd2lkZ2V0cyB3aXRoIHNlcGFyYXRlIGRhdGEgKHNlZSBob21lLWxheW91dC5odG1sKVxuICAgIHZhciB3aWRnZXREYXRhOiBhbnlbXSA9IFtdXG4gICAgaGVhZGVycy5tYXAoIChpdGVtLCBpKSA9PiB7XG4gICAgICB3aWRnZXREYXRhLnB1c2goIHsgaGVhZGVyOiBpdGVtLCBpbnB1dDogaW5wdXRzW2ldIH0gKVxuICAgIH0pO1xuICAgIHJldHVybiB3aWRnZXREYXRhXG4gIH1cblxufSJdfQ==