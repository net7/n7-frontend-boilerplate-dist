/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHomeHeroPatrimonioDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeHeroPatrimonioDS, _super);
    function AwHomeHeroPatrimonioDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeHeroPatrimonioDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var HERO_PATRIMONIO_DATA = {
            title: "IL MAXXI",
            backgroundImage: "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg",
            image: "https://i.imgur.com/8BgHOBi.png",
            text: "La storia del MAXXI inizia nell'autunno del 1997 quando l'allora Ministero per i beni culturali ottiene dal Ministero della Difesa la cessione di un'ampia area nel quartiene Flaminio di Roma, occupata da officine e padiglioni della ex Caserma Montello, in disuso da tempo, con il fine di creare un nuovo polo mseale nazionale dedicato alle arti contemporanee per la cui progettazione, nel 1998, viene bandito un concorso internazionale di idee in due fasi. Il bando di concorso prevedeva un piano funzionale complesso, con la presenza di vari poli museali: un museo per l'architettura e uno per le arti del XXI secolo, uno spazio per le produzioni sperimentali, la biblioteca, l'auditorium, spazi per eventi dal vivo e infine spazi didattici.",
            button: {
                text: "NAVIGA IL PATRIMONIO",
                payload: "naviga-patrimonio"
            }
        };
        return HERO_PATRIMONIO_DATA;
    };
    return AwHomeHeroPatrimonioDS;
}(DataSource));
export { AwHomeHeroPatrimonioDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1oZXJvLXBhdHJpbW9uaW8uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtaGVyby1wYXRyaW1vbmlvLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTRDLGtEQUFVO0lBQXREOztJQWVBLENBQUM7Ozs7OztJQWJXLDBDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztZQUNoQixvQkFBb0IsR0FBRztZQUMzQixLQUFLLEVBQUUsVUFBVTtZQUNqQixlQUFlLEVBQUUsNkZBQTZGO1lBQzlHLEtBQUssRUFBRSxpQ0FBaUM7WUFDeEMsSUFBSSxFQUFFLHd1QkFBd3VCO1lBQzl1QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsT0FBTyxFQUFFLG1CQUFtQjthQUM3QjtTQUNGO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBNEMsVUFBVSxHQWVyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVIZXJvUGF0cmltb25pb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgSEVST19QQVRSSU1PTklPX0RBVEEgPSB7XG4gICAgICB0aXRsZTogXCJJTCBNQVhYSVwiLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBcImh0dHBzOi8vd3d3LnNvbGlkYmFja2dyb3VuZHMuY29tL2ltYWdlcy8yNTYweDE0NDAvMjU2MHgxNDQwLWdyYXktc29saWQtY29sb3ItYmFja2dyb3VuZC5qcGdcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vOEJnSE9CaS5wbmdcIixcbiAgICAgIHRleHQ6IFwiTGEgc3RvcmlhIGRlbCBNQVhYSSBpbml6aWEgbmVsbCdhdXR1bm5vIGRlbCAxOTk3IHF1YW5kbyBsJ2FsbG9yYSBNaW5pc3Rlcm8gcGVyIGkgYmVuaSBjdWx0dXJhbGkgb3R0aWVuZSBkYWwgTWluaXN0ZXJvIGRlbGxhIERpZmVzYSBsYSBjZXNzaW9uZSBkaSB1bidhbXBpYSBhcmVhIG5lbCBxdWFydGllbmUgRmxhbWluaW8gZGkgUm9tYSwgb2NjdXBhdGEgZGEgb2ZmaWNpbmUgZSBwYWRpZ2xpb25pIGRlbGxhIGV4IENhc2VybWEgTW9udGVsbG8sIGluIGRpc3VzbyBkYSB0ZW1wbywgY29uIGlsIGZpbmUgZGkgY3JlYXJlIHVuIG51b3ZvIHBvbG8gbXNlYWxlIG5hemlvbmFsZSBkZWRpY2F0byBhbGxlIGFydGkgY29udGVtcG9yYW5lZSBwZXIgbGEgY3VpIHByb2dldHRhemlvbmUsIG5lbCAxOTk4LCB2aWVuZSBiYW5kaXRvIHVuIGNvbmNvcnNvIGludGVybmF6aW9uYWxlIGRpIGlkZWUgaW4gZHVlIGZhc2kuIElsIGJhbmRvIGRpIGNvbmNvcnNvIHByZXZlZGV2YSB1biBwaWFubyBmdW56aW9uYWxlIGNvbXBsZXNzbywgY29uIGxhIHByZXNlbnphIGRpIHZhcmkgcG9saSBtdXNlYWxpOiB1biBtdXNlbyBwZXIgbCdhcmNoaXRldHR1cmEgZSB1bm8gcGVyIGxlIGFydGkgZGVsIFhYSSBzZWNvbG8sIHVubyBzcGF6aW8gcGVyIGxlIHByb2R1emlvbmkgc3BlcmltZW50YWxpLCBsYSBiaWJsaW90ZWNhLCBsJ2F1ZGl0b3JpdW0sIHNwYXppIHBlciBldmVudGkgZGFsIHZpdm8gZSBpbmZpbmUgc3BhemkgZGlkYXR0aWNpLlwiLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6IFwiTkFWSUdBIElMIFBBVFJJTU9OSU9cIixcbiAgICAgICAgcGF5bG9hZDogXCJuYXZpZ2EtcGF0cmltb25pb1wiXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSEVST19QQVRSSU1PTklPX0RBVEE7XG4gIH1cbn0iXX0=