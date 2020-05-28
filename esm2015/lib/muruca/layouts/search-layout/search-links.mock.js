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
    let i;
    /** @type {?} */
    const limit = 10;
    /** @type {?} */
    const links = [];
    for (i = 0; i < limit; i += 1) {
        /** @type {?} */
        const text = `${prefix} ${i + 1}`;
        links.push({
            text,
            counter: Math.round(Math.random() * 100),
            payload: text
        });
    }
    return links;
}
export default (/**
 * @return {?}
 */
() => {
    /** @type {?} */
    const results = {};
    config.facets.sections.forEach((/**
     * @param {?} __0
     * @return {?}
     */
    ({ inputs }) => {
        inputs
            .filter((/**
         * @param {?} input
         * @return {?}
         */
        (input) => input.type === 'link'))
            .forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id }) => {
            results[id] = getLinks(id);
        }));
    }));
    return results;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxpbmtzLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGlua3MubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRTFDLFNBQVMsUUFBUSxDQUFDLE1BQU07O1FBQ2xCLENBQUM7O1VBQ0MsS0FBSyxHQUFHLEVBQUU7O1VBQ1YsS0FBSyxHQUFHLEVBQUU7SUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Y0FDdkIsSUFBSSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNULElBQUk7WUFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRDs7O0FBQWUsR0FBRyxFQUFFOztVQUNaLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7SUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtRQUM1QyxNQUFNO2FBQ0gsTUFBTTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBQzthQUN4QyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUMsRUFBQyxDQUFDO0lBQ0gsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL3NlYXJjaC1jb25maWcubW9jayc7XG5cbmZ1bmN0aW9uIGdldExpbmtzKHByZWZpeCkge1xuICBsZXQgaTtcbiAgY29uc3QgbGltaXQgPSAxMDtcbiAgY29uc3QgbGlua3MgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IGxpbWl0OyBpICs9IDEpIHtcbiAgICBjb25zdCB0ZXh0ID0gYCR7cHJlZml4fSAke2kgKyAxfWA7XG4gICAgbGlua3MucHVzaCh7XG4gICAgICB0ZXh0LFxuICAgICAgY291bnRlcjogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgIHBheWxvYWQ6IHRleHRcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbGlua3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IHt9O1xuICBjb25maWcuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICBpbnB1dHNcbiAgICAgIC5maWx0ZXIoKGlucHV0KSA9PiBpbnB1dC50eXBlID09PSAnbGluaycpXG4gICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgIHJlc3VsdHNbaWRdID0gZ2V0TGlua3MoaWQpO1xuICAgICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cztcbn07XG4iXX0=