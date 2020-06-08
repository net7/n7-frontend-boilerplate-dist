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
        var state = data.state, linksResponse = data.linksResponse, facetsConfig = data.facetsConfig;
        var linkInputs = linksResponse.inputs;
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
                        /** @type {?} */
                        var text = value;
                        if (linkInputs[id]) {
                            text = linkInputs[id].find((/**
                             * @param {?} __0
                             * @return {?}
                             */
                            function (_a) {
                                var payload = _a.payload;
                                return payload === value;
                            })).text;
                        }
                        tags.push({
                            text: text,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0M7SUFBb0MsMENBQVU7SUFBOUM7O0lBZ0NBLENBQUM7Ozs7OztJQS9CVyxrQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxrQ0FBYSxFQUFFLGdDQUFZO1FBQ2xDLElBQUEsaUNBQWtCOztZQUNwQixJQUFJLEdBQUcsRUFBRTtRQUVmLGdCQUFnQjtRQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEVBQVU7Z0JBQVIsa0JBQU07WUFDckMsTUFBTTtpQkFDSCxNQUFNOzs7O1lBQUMsVUFBQyxFQUFjO29CQUFaLDBCQUFVO2dCQUFPLE9BQUEsVUFBVTtZQUFWLENBQVUsRUFBQztpQkFDdEMsT0FBTzs7OztZQUFDLFVBQUMsRUFBTTtvQkFBSixVQUFFO2dCQUNaLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFOzt3QkFDUCxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDakUsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxLQUFLOzs0QkFDZixJQUFJLEdBQUcsS0FBSzt3QkFDaEIsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTs7Ozs0QkFBQyxVQUFDLEVBQVc7b0NBQVQsb0JBQU87Z0NBQU8sT0FBQSxPQUFPLEtBQUssS0FBSzs0QkFBakIsQ0FBaUIsRUFBQyxDQUFDLElBQUksQ0FBQzt5QkFDckU7d0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDUixJQUFJLE1BQUE7NEJBQ0osSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLE9BQU8sRUFBRTtnQ0FDUCxFQUFFLElBQUE7Z0NBQ0YsS0FBSyxPQUFBOzZCQUNOO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoQ0QsQ0FBb0MsVUFBVSxHQWdDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgVGFnRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoVGFnc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IFRhZ0RhdGFbXSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgbGlua3NSZXNwb25zZSwgZmFjZXRzQ29uZmlnIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaW5wdXRzOiBsaW5rSW5wdXRzIH0gPSBsaW5rc1Jlc3BvbnNlO1xuICAgIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgIC8vIGlucHV0cyBjb25maWdcbiAgICBmYWNldHNDb25maWcuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgaW5wdXRzXG4gICAgICAgIC5maWx0ZXIoKHsgcXVlcnlQYXJhbSB9KSA9PiBxdWVyeVBhcmFtKVxuICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlW2lkXSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0ZVtpZF0pID8gc3RhdGVbaWRdIDogW3N0YXRlW2lkXV07XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHRleHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGxpbmtJbnB1dHNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGxpbmtJbnB1dHNbaWRdLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSB2YWx1ZSkudGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWdzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuIl19