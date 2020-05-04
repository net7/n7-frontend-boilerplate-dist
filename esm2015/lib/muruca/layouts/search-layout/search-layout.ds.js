/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-layout/search-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { cloneDeep } from 'lodash';
import facetsConfig from './search-facets.config';
// import helpers from '../../../common/helpers';
/** @type {?} */
const SEARCH_MODEL_ID = 'mr-search-layout';
export class MrSearchLayoutDS extends LayoutDataSource {
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ 
    // configuration, mainState, options, communication,
    search, }) {
        this.search = search;
        if (this.search.model(SEARCH_MODEL_ID)) {
            this.search.remove(SEARCH_MODEL_ID);
        }
        this.search.add(SEARCH_MODEL_ID, cloneDeep(facetsConfig));
        this.searchModel = this.search.model(SEARCH_MODEL_ID);
        // this.one('facets-wrapper').update({ searchModel: this.searchModel });
        this.one('mr-resources').updateOptions({ source: 'search' });
        this.one('mr-resources').update({});
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBS25DLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDOzs7TUFHNUMsZUFBZSxHQUFHLGtCQUFrQjtBQUUxQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCOzs7OztJQUtwRCxNQUFNLENBQUM7SUFDTCxvREFBb0Q7SUFDcEQsTUFBTSxHQUNQO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELHdFQUF3RTtRQUV4RSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjs7Ozs7O0lBbkJDLGtDQUE4Qjs7Ozs7SUFFOUIsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBTZWFyY2hTZXJ2aWNlLFxuICBTZWFyY2hNb2RlbCxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCBmYWNldHNDb25maWcgZnJvbSAnLi9zZWFyY2gtZmFjZXRzLmNvbmZpZyc7XG4vLyBpbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmNvbnN0IFNFQVJDSF9NT0RFTF9JRCA9ICdtci1zZWFyY2gtbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgb25Jbml0KHtcbiAgICAvLyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIGNvbW11bmljYXRpb24sXG4gICAgc2VhcmNoLFxuICB9KSB7XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgaWYgKHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCkpIHtcbiAgICAgIHRoaXMuc2VhcmNoLnJlbW92ZShTRUFSQ0hfTU9ERUxfSUQpO1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaC5hZGQoU0VBUkNIX01PREVMX0lELCBjbG9uZURlZXAoZmFjZXRzQ29uZmlnKSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCk7XG4gICAgLy8gdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG5cbiAgICB0aGlzLm9uZSgnbXItcmVzb3VyY2VzJykudXBkYXRlT3B0aW9ucyh7IHNvdXJjZTogJ3NlYXJjaCcgfSk7XG4gICAgdGhpcy5vbmUoJ21yLXJlc291cmNlcycpLnVwZGF0ZSh7fSk7XG4gIH1cbn1cbiJdfQ==