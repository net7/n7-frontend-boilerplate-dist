/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/header.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class HeaderDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data.items;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onCurrentNavChange(payload) {
        this.output.nav.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item._meta.id === payload) {
                item.classes = 'is-current';
            }
            else {
                item.classes = '';
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7Ozs7O0lBQzVCLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVNLGtCQUFrQixDQUFDLE9BQU87UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEhlYWRlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBIZWFkZXJEYXRhIHtcbiAgICByZXR1cm4gZGF0YS5pdGVtcztcbiAgfVxuXG4gIHB1YmxpYyBvbkN1cnJlbnROYXZDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMub3V0cHV0Lm5hdi5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5fbWV0YS5pZCA9PT0gcGF5bG9hZCkge1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSAnaXMtY3VycmVudCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19