/**
 * @fileoverview added by tsickle
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
        const { basePath, selectable } = this.options
        // ==================
        ;
        // ==================
        /** @type {?} */
        const templates = bubbles.map((/**
         * @param {?} b
         * @return {?}
         */
        b => {
            const { count, entity } = b;
            const { id, label, typeOfEntity } = entity;
            return {
                id,
                selectable,
                title: label,
                text: `È collegato a ${count} oggetti culturali`,
                isSelected: selected.includes(id),
                anchorData: {
                    href: `${basePath}${id}/${helpers.slugify(label)}`
                }
            };
        }));
        return templates;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVOzs7Ozs7SUFDbEMsU0FBUyxDQUFDLElBQUk7O2NBRWhCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUk7Y0FDNUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDN0MscUJBQXFCOzs7O2NBQ2YsU0FBUyxHQUFTLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7a0JBQ2hDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUM7a0JBQ3JCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsR0FBRyxNQUFNO1lBQzFDLE9BQU87Z0JBQ0wsRUFBRTtnQkFDRixVQUFVO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxpQkFBaUIsS0FBSyxvQkFBb0I7Z0JBQ2hELFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxHQUFHLFFBQVEsR0FBRyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtpQkFDbkQ7YUFDRixDQUFBO1FBQ0gsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIC8vID09PT09PSBEQVRBID09PT09PVxuICAgIGNvbnN0IHsgYnViYmxlcywgc2VsZWN0ZWQgfSA9IGRhdGFcbiAgICBjb25zdCB7IGJhc2VQYXRoLCBzZWxlY3RhYmxlIH0gPSB0aGlzLm9wdGlvbnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCB0ZW1wbGF0ZXM6YW55W10gPSBidWJibGVzLm1hcChiID0+IHtcbiAgICAgIGNvbnN0IHsgY291bnQsIGVudGl0eSB9ID0gYlxuICAgICAgY29uc3QgeyBpZCwgbGFiZWwsIHR5cGVPZkVudGl0eSB9ID0gZW50aXR5XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICB0ZXh0OiBgw4ggY29sbGVnYXRvIGEgJHtjb3VudH0gb2dnZXR0aSBjdWx0dXJhbGlgLFxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXG4gICAgICAgIGFuY2hvckRhdGE6IHtcbiAgICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlc1xuICB9XG59Il19