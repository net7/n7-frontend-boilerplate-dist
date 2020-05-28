/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrSearchTagsDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchTagsDS, _super);
    function MrSearchTagsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrSearchTagsDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var state = data.state, facetsConfig = data.facetsConfig;
        /** @type {?} */
        var tags = [];
        // inputs config
        facetsConfig.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var inputs = _a.inputs;
            inputs
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var queryParam = _a.queryParam;
                return queryParam;
            }))
                .forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id;
                if (state[id]) {
                    /** @type {?} */
                    var values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values.forEach((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) {
                        tags.push({
                            text: value,
                            icon: 'n7-icon-close',
                            payload: {
                                id: id,
                                value: value
                            }
                        });
                    }));
                }
            }));
        }));
        return tags;
    };
    return MrSearchTagsDS;
}(DataSource));
export { MrSearchTagsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0M7SUFBb0MsMENBQVU7SUFBOUM7O0lBMkJBLENBQUM7Ozs7OztJQTFCVyxrQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxnQ0FBWTs7WUFDckIsSUFBSSxHQUFHLEVBQUU7UUFFZixnQkFBZ0I7UUFDaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFVO2dCQUFSLGtCQUFNO1lBQ3JDLE1BQU07aUJBQ0gsTUFBTTs7OztZQUFDLFVBQUMsRUFBYztvQkFBWiwwQkFBVTtnQkFBTyxPQUFBLFVBQVU7WUFBVixDQUFVLEVBQUM7aUJBQ3RDLE9BQU87Ozs7WUFBQyxVQUFDLEVBQU07b0JBQUosVUFBRTtnQkFDWixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTs7d0JBQ1AsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUMsS0FBSzt3QkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDUixJQUFJLEVBQUUsS0FBSzs0QkFDWCxJQUFJLEVBQUUsZUFBZTs0QkFDckIsT0FBTyxFQUFFO2dDQUNQLEVBQUUsSUFBQTtnQ0FDRixLQUFLLE9BQUE7NkJBQ047eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUFvQyxVQUFVLEdBMkI3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBUYWdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hUYWdzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogVGFnRGF0YVtdIHtcbiAgICBjb25zdCB7IHN0YXRlLCBmYWNldHNDb25maWcgfSA9IGRhdGE7XG4gICAgY29uc3QgdGFncyA9IFtdO1xuXG4gICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgIGZhY2V0c0NvbmZpZy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlucHV0cyB9KSA9PiB7XG4gICAgICBpbnB1dHNcbiAgICAgICAgLmZpbHRlcigoeyBxdWVyeVBhcmFtIH0pID0+IHF1ZXJ5UGFyYW0pXG4gICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGVbaWRdKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0YXRlW2lkXSkgPyBzdGF0ZVtpZF0gOiBbc3RhdGVbaWRdXTtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICB0YWdzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH1cbn1cbiJdfQ==