/**
 * @fileoverview added by tsickle
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
        item => {
            if (item._meta.id === payload) {
                item.classes = 'is-current';
            }
            else {
                item.classes = '';
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVOzs7Ozs7SUFDNUIsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElIZWFkZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogSUhlYWRlckRhdGEge1xuICAgIHJldHVybiBkYXRhLml0ZW1zO1xuICB9XG5cbiAgcHVibGljIG9uQ3VycmVudE5hdkNoYW5nZSAocGF5bG9hZCkge1xuICAgIHRoaXMub3V0cHV0Lm5hdi5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uX21ldGEuaWQgPT09IHBheWxvYWQpIHtcbiAgICAgICAgaXRlbS5jbGFzc2VzID0gJ2lzLWN1cnJlbnQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc2VzID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==