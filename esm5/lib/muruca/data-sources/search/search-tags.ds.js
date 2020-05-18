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
            inputs.forEach((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0M7SUFBb0MsMENBQVU7SUFBOUM7O0lBeUJBLENBQUM7Ozs7OztJQXhCVyxrQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxnQ0FBWTs7WUFDckIsSUFBSSxHQUFHLEVBQUU7UUFFZixnQkFBZ0I7UUFDaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFVO2dCQUFSLGtCQUFNO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxFQUFNO29CQUFKLFVBQUU7Z0JBQ2xCLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFOzt3QkFDUCxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDakUsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxLQUFLO3dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDOzRCQUNSLElBQUksRUFBRSxLQUFLOzRCQUNYLElBQUksRUFBRSxlQUFlOzRCQUNyQixPQUFPLEVBQUU7Z0NBQ1AsRUFBRSxJQUFBO2dDQUNGLEtBQUssT0FBQTs2QkFDTjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBekJELENBQW9DLFVBQVUsR0F5QjdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xuICAgIGNvbnN0IHsgc3RhdGUsIGZhY2V0c0NvbmZpZyB9ID0gZGF0YTtcbiAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgaWYgKHN0YXRlW2lkXSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGVbaWRdKSA/IHN0YXRlW2lkXSA6IFtzdGF0ZVtpZF1dO1xuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgdGV4dDogdmFsdWUsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuIl19