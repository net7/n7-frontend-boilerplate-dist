/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwSchedaBreadcrumbsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => data);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
        }
        else {
            sidebarData.classes = 'is-expanded';
        }
        this.update(sidebarData);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AwSchedaBreadcrumbsDS.prototype.transform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUFyRDs7UUFDWSxjQUFTOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztJQVd2QyxDQUFDOzs7O0lBVEMsYUFBYTs7Y0FDTCxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDL0IsSUFBSSxXQUFXLENBQUMsT0FBTyxLQUFLLGFBQWEsRUFBRTtZQUN6QyxXQUFXLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsV0FBVyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjs7Ozs7O0lBWEMsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhQnJlYWRjcnVtYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IGRhdGE7XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyRGF0YSA9IHRoaXMub3V0cHV0O1xuICAgIGlmIChzaWRlYmFyRGF0YS5jbGFzc2VzID09PSAnaXMtZXhwYW5kZWQnKSB7XG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWNvbGxhcHNlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtZXhwYW5kZWQnO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShzaWRlYmFyRGF0YSk7XG4gIH1cbn1cbiJdfQ==