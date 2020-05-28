/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import config from './search-config.mock';
/**
 * @param {?} prefix
 * @return {?}
 */
function getLinks(prefix) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var limit = 10;
    /** @type {?} */
    var links = [];
    for (i = 0; i < limit; i += 1) {
        /** @type {?} */
        var text = prefix + " " + (i + 1);
        links.push({
            text: text,
            counter: Math.round(Math.random() * 100),
            payload: text
        });
    }
    return links;
}
export default (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    var results = {};
    config.facets.sections.forEach((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var inputs = _a.inputs;
        inputs
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.type === 'link'; }))
            .forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var id = _a.id;
            results[id] = getLinks(id);
        }));
    }));
    return results;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxpbmtzLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGlua3MubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRTFDLFNBQVMsUUFBUSxDQUFDLE1BQU07O1FBQ2xCLENBQUM7O1FBQ0MsS0FBSyxHQUFHLEVBQUU7O1FBQ1YsS0FBSyxHQUFHLEVBQUU7SUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7WUFDdkIsSUFBSSxHQUFNLE1BQU0sVUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFFO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDVCxJQUFJLE1BQUE7WUFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRDs7O0FBQWU7O1FBQ1AsT0FBTyxHQUFHLEVBQUU7SUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztJQUFDLFVBQUMsRUFBVTtZQUFSLGtCQUFNO1FBQ3RDLE1BQU07YUFDSCxNQUFNOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBckIsQ0FBcUIsRUFBQzthQUN4QyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFNO2dCQUFKLFVBQUU7WUFDWixPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFDLENBQUM7SUFDSCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vc2VhcmNoLWNvbmZpZy5tb2NrJztcblxuZnVuY3Rpb24gZ2V0TGlua3MocHJlZml4KSB7XG4gIGxldCBpO1xuICBjb25zdCBsaW1pdCA9IDEwO1xuICBjb25zdCBsaW5rcyA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgbGltaXQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRleHQgPSBgJHtwcmVmaXh9ICR7aSArIDF9YDtcbiAgICBsaW5rcy5wdXNoKHtcbiAgICAgIHRleHQsXG4gICAgICBjb3VudGVyOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgICAgcGF5bG9hZDogdGV4dFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBsaW5rcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByZXN1bHRzID0ge307XG4gIGNvbmZpZy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgIGlucHV0c1xuICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0LnR5cGUgPT09ICdsaW5rJylcbiAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgcmVzdWx0c1tpZF0gPSBnZXRMaW5rcyhpZCk7XG4gICAgICB9KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHRzO1xufTtcbiJdfQ==