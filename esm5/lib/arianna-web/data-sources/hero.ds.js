/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHeroDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHeroDS, _super);
    function AwHeroDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHeroDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log({ data: data });
        /** @type {?} */
        var HERO_DATA = {
            title: "Arte, architettura e fotografia nel XXII secolo",
            text: "Consulta il patrimonio completo del polo nazionale per l\'arte e l\'architettura contemporanee.",
            button: {
                text: "CERCA",
                payload: "cerca"
            },
            backgroundImage: "https://i.imgur.com/FgsxSYR.png",
            input: {
                placeholder: "Cerca in MAXXI",
                payload: "cerca-in-maxxi"
            }
        };
        return HERO_DATA;
    };
    return AwHeroDS;
}(DataSource));
export { AwHeroDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFtQkEsQ0FBQzs7Ozs7O0lBakJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLENBQUM7O1lBQ2QsU0FBUyxHQUFHO1lBQ2hCLEtBQUssRUFBRSxpREFBaUQ7WUFDeEQsSUFBSSxFQUFFLGlHQUFpRztZQUN2RyxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLE9BQU87YUFDakI7WUFDRCxlQUFlLEVBQUUsaUNBQWlDO1lBQ2xELEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsZ0JBQWdCO2dCQUM3QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFuQkQsQ0FBOEIsVUFBVSxHQW1CdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSEVST19NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKHtkYXRhfSk7XG4gICAgY29uc3QgSEVST19EQVRBID0ge1xuICAgICAgdGl0bGU6IFwiQXJ0ZSwgYXJjaGl0ZXR0dXJhIGUgZm90b2dyYWZpYSBuZWwgWFhJSSBzZWNvbG9cIixcbiAgICAgIHRleHQ6IFwiQ29uc3VsdGEgaWwgcGF0cmltb25pbyBjb21wbGV0byBkZWwgcG9sbyBuYXppb25hbGUgcGVyIGxcXCdhcnRlIGUgbFxcJ2FyY2hpdGV0dHVyYSBjb250ZW1wb3JhbmVlLlwiLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6IFwiQ0VSQ0FcIixcbiAgICAgICAgcGF5bG9hZDogXCJjZXJjYVwiXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vRmdzeFNZUi5wbmdcIixcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNlcmNhIGluIE1BWFhJXCIsXG4gICAgICAgIHBheWxvYWQ6IFwiY2VyY2EtaW4tbWF4eGlcIlxuICAgICAgfVxuICAgIH07ICBcbiAgICByZXR1cm4gSEVST19EQVRBO1xuICB9XG59Il19