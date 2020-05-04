/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/chart-tippy.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwChartTippyDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        // ====== DATA ======
        const { bubbles, selected } = data;
        const { basePath, selectable } = this.options;
        // ==================
        /** @type {?} */
        const templates = bubbles.map((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            const { count, entity } = b;
            const { id, label, relation, relationName } = entity;
            return {
                id,
                selectable,
                title: label,
                text: `È collegato a ${count} oggetti culturali`,
                isSelected: selected.includes(id),
                anchorData: {
                    href: `${basePath}${id}/${helpers.slugify(label)}`,
                },
                relation: {
                    key: relationName,
                    value: relation,
                }
            };
        }));
        return templates;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7O0lBQ2xDLFNBQVMsQ0FBQyxJQUFJOztjQUVoQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO2NBQzVCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOzs7Y0FFdkMsU0FBUyxHQUFVLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtrQkFDbkMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztrQkFDckIsRUFDSixFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQ2xDLEdBQUcsTUFBTTtZQUNWLE9BQU87Z0JBQ0wsRUFBRTtnQkFDRixVQUFVO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxpQkFBaUIsS0FBSyxvQkFBb0I7Z0JBQ2hELFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxHQUFHLFFBQVEsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtpQkFDbkQ7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxZQUFZO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDaEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIC8vID09PT09PSBEQVRBID09PT09PVxuICAgIGNvbnN0IHsgYnViYmxlcywgc2VsZWN0ZWQgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIC8vID09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBidWJibGVzLm1hcCgoYikgPT4ge1xuICAgICAgY29uc3QgeyBjb3VudCwgZW50aXR5IH0gPSBiO1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZCwgbGFiZWwsIHJlbGF0aW9uLCByZWxhdGlvbk5hbWVcbiAgICAgIH0gPSBlbnRpdHk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICB0ZXh0OiBgw4ggY29sbGVnYXRvIGEgJHtjb3VudH0gb2dnZXR0aSBjdWx0dXJhbGlgLFxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXG4gICAgICAgIGFuY2hvckRhdGE6IHtcbiAgICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpb246IHtcbiAgICAgICAgICBrZXk6IHJlbGF0aW9uTmFtZSxcbiAgICAgICAgICB2YWx1ZTogcmVsYXRpb24sXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlcztcbiAgfVxufVxuIl19