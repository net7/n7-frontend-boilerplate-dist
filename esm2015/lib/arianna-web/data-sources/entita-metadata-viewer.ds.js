/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwEntitaMetadataViewerDS extends DataSource {
    constructor() {
        super(...arguments);
        this.hasFields = false;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        this.hasFields = !!(Array.isArray(data) && data.length);
        return {
            group: [{
                    items: data || []
                }]
        };
    }
}
if (false) {
    /** @type {?} */
    AwEntitaMetadataViewerDS.prototype.hasFields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFVO0lBQXhEOztRQUNTLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFXM0IsQ0FBQzs7Ozs7O0lBVFcsU0FBUyxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RCxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ04sS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFO2lCQUNsQixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRjs7O0lBWEMsNkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgaGFzRmllbGRzID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgdGhpcy5oYXNGaWVsZHMgPSAhIShBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBncm91cDogW3tcbiAgICAgICAgaXRlbXM6IGRhdGEgfHwgW11cbiAgICAgIH1dXG4gICAgfTtcbiAgfVxufVxuIl19