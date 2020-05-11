/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrCollectionDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrCollectionDS, _super);
    function MrCollectionDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrCollectionDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var header = data.header;
        return tslib_1.__assign({}, data, { header: {
                title: {
                    main: {
                        text: header.title,
                        classes: 'bold'
                    },
                    secondary: {
                        text: header.subtitle,
                        classes: 'italic'
                    }
                },
                actions: {
                    buttons: [
                        {
                            text: header.button.text,
                            payload: header.button.link,
                            classes: 'n7-btn-cta'
                        }
                    ]
                }
            } });
    };
    return MrCollectionDS;
}(DataSource));
export { MrCollectionDS };
if (false) {
    /** @type {?} */
    MrCollectionDS.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBb0MsMENBQVU7SUFBOUM7O0lBK0JBLENBQUM7Ozs7OztJQTVCVyxrQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBUztRQUNuQixJQUFBLG9CQUFNO1FBRWQsNEJBQ0ssSUFBSSxJQUNQLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7d0JBQ3JCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtpQkFDRjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7NEJBQ3hCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7NEJBQzNCLE9BQU8sRUFBRSxZQUFZO3lCQUN0QjtxQkFDRjtpQkFDRjthQUNGLElBQ0Q7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBL0JELENBQW9DLFVBQVUsR0ErQjdDOzs7O0lBOUJDLDRCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yQ29sbGVjdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgaGVhZGVyIH0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnN1YnRpdGxlLFxuICAgICAgICAgICAgY2xhc3NlczogJ2l0YWxpYydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IGhlYWRlci5idXR0b24udGV4dCxcbiAgICAgICAgICAgICAgcGF5bG9hZDogaGVhZGVyLmJ1dHRvbi5saW5rLFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=