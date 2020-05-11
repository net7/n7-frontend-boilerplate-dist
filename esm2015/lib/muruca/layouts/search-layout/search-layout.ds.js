/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import facetsConfig from './search-facets.config';
export class MrSearchLayoutDS extends LayoutDataSource {
    /**
     * @return {?}
     */
    onInit() {
        this.facetsConfig = facetsConfig;
        this.one('mr-resources').updateOptions({ source: 'search' });
        this.one('mr-resources').update({});
    }
}
if (false) {
    /** @type {?} */
    MrSearchLayoutDS.prototype.facetsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBRWxELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7Ozs7SUFHcEQsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGOzs7SUFSQyx3Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL3NlYXJjaC1mYWNldHMuY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHVibGljIGZhY2V0c0NvbmZpZztcblxuICBvbkluaXQoKSB7XG4gICAgdGhpcy5mYWNldHNDb25maWcgPSBmYWNldHNDb25maWc7XG5cbiAgICB0aGlzLm9uZSgnbXItcmVzb3VyY2VzJykudXBkYXRlT3B0aW9ucyh7IHNvdXJjZTogJ3NlYXJjaCcgfSk7XG4gICAgdGhpcy5vbmUoJ21yLXJlc291cmNlcycpLnVwZGF0ZSh7fSk7XG4gIH1cbn1cbiJdfQ==