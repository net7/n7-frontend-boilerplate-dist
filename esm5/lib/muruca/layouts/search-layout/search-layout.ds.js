/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-layout/search-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { cloneDeep } from 'lodash';
import facetsConfig from './search-facets.config';
// import helpers from '../../../common/helpers';
/** @type {?} */
var SEARCH_MODEL_ID = 'mr-search-layout';
var MrSearchLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutDS, _super);
    function MrSearchLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    MrSearchLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var 
        // configuration, mainState, options, communication,
        search = _a.search;
        this.search = search;
        if (this.search.model(SEARCH_MODEL_ID)) {
            this.search.remove(SEARCH_MODEL_ID);
        }
        this.search.add(SEARCH_MODEL_ID, cloneDeep(facetsConfig));
        this.searchModel = this.search.model(SEARCH_MODEL_ID);
        // this.one('facets-wrapper').update({ searchModel: this.searchModel });
        this.one('mr-resources').updateOptions({ source: 'search' });
        this.one('mr-resources').update({});
    };
    return MrSearchLayoutDS;
}(LayoutDataSource));
export { MrSearchLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutDS.prototype.search;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutDS.prototype.searchModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUtuQyxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQzs7O0lBRzVDLGVBQWUsR0FBRyxrQkFBa0I7QUFFMUM7SUFBc0MsNENBQWdCO0lBQXREOztJQW9CQSxDQUFDOzs7OztJQWZDLGlDQUFNOzs7O0lBQU4sVUFBTyxFQUdOOztRQUZDLG9EQUFvRDtRQUNwRCxrQkFBTTtRQUVOLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCx3RUFBd0U7UUFFeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBcEJELENBQXNDLGdCQUFnQixHQW9CckQ7Ozs7Ozs7SUFuQkMsa0NBQThCOzs7OztJQUU5Qix1Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIFNlYXJjaFNlcnZpY2UsXG4gIFNlYXJjaE1vZGVsLFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL3NlYXJjaC1mYWNldHMuY29uZmlnJztcbi8vIGltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuY29uc3QgU0VBUkNIX01PREVMX0lEID0gJ21yLXNlYXJjaC1sYXlvdXQnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZTtcblxuICBwcml2YXRlIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcblxuICBvbkluaXQoe1xuICAgIC8vIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbixcbiAgICBzZWFyY2gsXG4gIH0pIHtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICBpZiAodGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKSkge1xuICAgICAgdGhpcy5zZWFyY2gucmVtb3ZlKFNFQVJDSF9NT0RFTF9JRCk7XG4gICAgfVxuICAgIHRoaXMuc2VhcmNoLmFkZChTRUFSQ0hfTU9ERUxfSUQsIGNsb25lRGVlcChmYWNldHNDb25maWcpKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gdGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKTtcbiAgICAvLyB0aGlzLm9uZSgnZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoeyBzZWFyY2hNb2RlbDogdGhpcy5zZWFyY2hNb2RlbCB9KTtcblxuICAgIHRoaXMub25lKCdtci1yZXNvdXJjZXMnKS51cGRhdGVPcHRpb25zKHsgc291cmNlOiAnc2VhcmNoJyB9KTtcbiAgICB0aGlzLm9uZSgnbXItcmVzb3VyY2VzJykudXBkYXRlKHt9KTtcbiAgfVxufVxuIl19