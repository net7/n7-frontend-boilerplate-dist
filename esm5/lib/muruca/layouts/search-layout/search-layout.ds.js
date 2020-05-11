/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import facetsConfig from './search-facets.config';
var MrSearchLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutDS, _super);
    function MrSearchLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    MrSearchLayoutDS.prototype.onInit = /**
     * @return {?}
     */
    function () {
        this.facetsConfig = facetsConfig;
        this.one('mr-resources').updateOptions({ source: 'search' });
        this.one('mr-resources').update({});
    };
    return MrSearchLayoutDS;
}(LayoutDataSource));
export { MrSearchLayoutDS };
if (false) {
    /** @type {?} */
    MrSearchLayoutDS.prototype.facetsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQztBQUVsRDtJQUFzQyw0Q0FBZ0I7SUFBdEQ7O0lBU0EsQ0FBQzs7OztJQU5DLGlDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQVRELENBQXNDLGdCQUFnQixHQVNyRDs7OztJQVJDLHdDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwdWJsaWMgZmFjZXRzQ29uZmlnO1xuXG4gIG9uSW5pdCgpIHtcbiAgICB0aGlzLmZhY2V0c0NvbmZpZyA9IGZhY2V0c0NvbmZpZztcblxuICAgIHRoaXMub25lKCdtci1yZXNvdXJjZXMnKS51cGRhdGVPcHRpb25zKHsgc291cmNlOiAnc2VhcmNoJyB9KTtcbiAgICB0aGlzLm9uZSgnbXItcmVzb3VyY2VzJykudXBkYXRlKHt9KTtcbiAgfVxufVxuIl19