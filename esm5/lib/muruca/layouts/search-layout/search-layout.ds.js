/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBS25DLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDOzs7SUFHNUMsZUFBZSxHQUFHLGtCQUFrQjtBQUUxQztJQUFzQyw0Q0FBZ0I7SUFBdEQ7O0lBb0JBLENBQUM7Ozs7O0lBZkMsaUNBQU07Ozs7SUFBTixVQUFPLEVBR047O1FBRkMsb0RBQW9EO1FBQ3BELGtCQUFNO1FBRU4sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELHdFQUF3RTtRQUV4RSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFwQkQsQ0FBc0MsZ0JBQWdCLEdBb0JyRDs7Ozs7OztJQW5CQyxrQ0FBOEI7Ozs7O0lBRTlCLHVDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU2VydmljZSxcbiAgU2VhcmNoTW9kZWwsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuLy8gaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBTRUFSQ0hfTU9ERUxfSUQgPSAnbXItc2VhcmNoLWxheW91dCc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlO1xuXG4gIHByaXZhdGUgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuXG4gIG9uSW5pdCh7XG4gICAgLy8gY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCBjb21tdW5pY2F0aW9uLFxuICAgIHNlYXJjaCxcbiAgfSkge1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIGlmICh0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpKSB7XG4gICAgICB0aGlzLnNlYXJjaC5yZW1vdmUoU0VBUkNIX01PREVMX0lEKTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2guYWRkKFNFQVJDSF9NT0RFTF9JRCwgY2xvbmVEZWVwKGZhY2V0c0NvbmZpZykpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwgPSB0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpO1xuICAgIC8vIHRoaXMub25lKCdmYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7IHNlYXJjaE1vZGVsOiB0aGlzLnNlYXJjaE1vZGVsIH0pO1xuXG4gICAgdGhpcy5vbmUoJ21yLXJlc291cmNlcycpLnVwZGF0ZU9wdGlvbnMoeyBzb3VyY2U6ICdzZWFyY2gnIH0pO1xuICAgIHRoaXMub25lKCdtci1yZXNvdXJjZXMnKS51cGRhdGUoe30pO1xuICB9XG59XG4iXX0=