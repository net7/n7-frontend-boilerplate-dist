/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import helpers from '../../common/helpers';
/** @type {?} */
const metadataIsEmpty = (/**
 * @param {?} value
 * @return {?}
 */
(value) => (!value || value === 'null'));
const ɵ0 = metadataIsEmpty;
/** @type {?} */
const isLink = (/**
 * @param {?} fields
 * @return {?}
 */
(fields) => !!fields.filter((/**
 * @param {?} __0
 * @return {?}
 */
({ key }) => key === 'isLink')).length);
const ɵ1 = isLink;
/** @type {?} */
const isRepeater = (/**
 * @param {?} fields
 * @return {?}
 */
(fields) => Array.isArray(fields));
const ɵ2 = isRepeater;
/** @type {?} */
const getLink = (/**
 * @param {?} fields
 * @param {?} paths
 * @return {?}
 */
(fields, paths) => {
    /** @type {?} */
    const schedaTypes = ['oggetto-culturale', 'aggregazione-logica'];
    /** @type {?} */
    const label = fields.find((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key }) => key === 'label')).value;
    /** @type {?} */
    const slug = helpers.slugify(label);
    /** @type {?} */
    const id = fields.find((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key }) => key === 'id')).value;
    /** @type {?} */
    const type = fields.find((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key }) => key === 'type')).value;
    /** @type {?} */
    let basePath = paths.entitaBasePath;
    if (schedaTypes.includes(type)) {
        basePath = paths.schedaBasePath;
    }
    return `<a href="${basePath}${id}/${slug}">${label}</a>`;
});
const ɵ3 = getLink;
/** @type {?} */
const getRepeater = (/**
 * @param {?} fields
 * @param {?} labels
 * @param {?} metadataToShow
 * @param {?} type
 * @return {?}
 */
(fields, labels, metadataToShow, type) => {
    /** @type {?} */
    const html = [];
    fields
        .filter((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key, value }) => metadataToShow.includes(key) && !metadataIsEmpty(value)))
        .map((/**
     * @param {?} __0
     * @return {?}
     */
    ({ key, value }) => ({
        key,
        value,
        order: metadataToShow.indexOf(key),
        label: helpers.prettifySnakeCase(key, labels[`${type}.${key}`])
    })))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => a.order - b.order))
        .forEach((/**
     * @param {?} __0
     * @return {?}
     */
    ({ label, value }) => {
        html.push(`<dt>${label}</dt>`);
        html.push(`<dd>${value}</dd>`);
    }));
    return html.length
        ? `<dl>${html.join('')}</dl>`
        : null;
});
const ɵ4 = getRepeater;
export default {
    normalize: (/**
     * @param {?} __0
     * @return {?}
     */
    ({ fields: data, paths, labels, metadataToShow, type }) => {
        /** @type {?} */
        const result = [];
        if (Array.isArray(data)) {
            data.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ key, value, label, fields }) => {
                // link & repeater control
                if (fields && Array.isArray(fields)) {
                    if (isLink(fields)) {
                        result.push({ key: label, value: getLink(fields, paths) });
                    }
                    else if (isRepeater(fields)) {
                        result.push({ key: label, value: getRepeater(fields, labels, metadataToShow, type) });
                    }
                    // default
                }
                else {
                    result.push({ key, value });
                }
            }));
        }
        return result
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, value }) => metadataToShow.includes(key) && !metadataIsEmpty(value)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, value }) => ({
            key,
            value,
            order: metadataToShow.indexOf(key),
            label: helpers.prettifySnakeCase(key, labels[`${type}.${key}`]),
        })))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
    })
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQzs7TUFFckMsZUFBZTs7OztBQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQTs7O01BRXpELE1BQU07Ozs7QUFBRyxDQUFDLE1BQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O0FBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFDLENBQUMsTUFBTSxDQUFBOzs7TUFFakYsVUFBVTs7OztBQUFHLENBQUMsTUFBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBOzs7TUFFckQsT0FBTzs7Ozs7QUFBRyxDQUFDLE1BQWEsRUFBRSxLQUFLLEVBQUUsRUFBRTs7VUFDakMsV0FBVyxHQUFHLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7O1VBQzFELEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSTs7OztJQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBQyxDQUFDLEtBQUs7O1VBQ3ZELElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7VUFDN0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O0lBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFDLENBQUMsS0FBSzs7VUFDakQsSUFBSSxHQUFHLE1BQU0s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QUFDO3FCQUN2RjtvQkFDRCxVQUFVO2lCQUNYO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNO2FBQ1YsTUFBTTs7OztRQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUM7YUFDbkYsR0FBRzs7OztRQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEIsR0FBRztZQUNILEtBQUs7WUFDTCxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDaEUsQ0FBQyxFQUFDO2FBQ0YsSUFBSTs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmNvbnN0IG1ldGFkYXRhSXNFbXB0eSA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJ251bGwnKTtcblxuY29uc3QgaXNMaW5rID0gKGZpZWxkczogYW55W10pID0+ICEhZmllbGRzLmZpbHRlcigoeyBrZXkgfSkgPT4ga2V5ID09PSAnaXNMaW5rJykubGVuZ3RoO1xuXG5jb25zdCBpc1JlcGVhdGVyID0gKGZpZWxkczogYW55W10pID0+IEFycmF5LmlzQXJyYXkoZmllbGRzKTtcblxuY29uc3QgZ2V0TGluayA9IChmaWVsZHM6IGFueVtdLCBwYXRocykgPT4ge1xuICBjb25zdCBzY2hlZGFUeXBlcyA9IFsnb2dnZXR0by1jdWx0dXJhbGUnLCAnYWdncmVnYXppb25lLWxvZ2ljYSddO1xuICBjb25zdCBsYWJlbCA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICdsYWJlbCcpLnZhbHVlO1xuICBjb25zdCBzbHVnID0gaGVscGVycy5zbHVnaWZ5KGxhYmVsKTtcbiAgY29uc3QgaWQgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAnaWQnKS52YWx1ZTtcbiAgY29uc3QgdHlwZSA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICd0eXBlJykudmFsdWU7XG4gIGxldCBiYXNlUGF0aCA9IHBhdGhzLmVudGl0YUJhc2VQYXRoO1xuICBpZiAoc2NoZWRhVHlwZXMuaW5jbHVkZXModHlwZSkpIHtcbiAgICBiYXNlUGF0aCA9IHBhdGhzLnNjaGVkYUJhc2VQYXRoO1xuICB9XG4gIHJldHVybiBgPGEgaHJlZj1cIiR7YmFzZVBhdGh9JHtpZH0vJHtzbHVnfVwiPiR7bGFiZWx9PC9hPmA7XG59O1xuXG5jb25zdCBnZXRSZXBlYXRlciA9IChmaWVsZHM6IGFueVtdLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBbXTtcbiAgZmllbGRzXG4gICAgLmZpbHRlcigoeyBrZXksIHZhbHVlIH0pID0+IG1ldGFkYXRhVG9TaG93LmluY2x1ZGVzKGtleSkgJiYgIW1ldGFkYXRhSXNFbXB0eSh2YWx1ZSkpXG4gICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XG4gICAgICBrZXksXG4gICAgICB2YWx1ZSxcbiAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGtleSksXG4gICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1tgJHt0eXBlfS4ke2tleX1gXSlcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpXG4gICAgLmZvckVhY2goKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgICAgIGh0bWwucHVzaChgPGR0PiR7bGFiZWx9PC9kdD5gKTtcbiAgICAgIGh0bWwucHVzaChgPGRkPiR7dmFsdWV9PC9kZD5gKTtcbiAgICB9KTtcbiAgcmV0dXJuIGh0bWwubGVuZ3RoXG4gICAgPyBgPGRsPiR7aHRtbC5qb2luKCcnKX08L2RsPmBcbiAgICA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5vcm1hbGl6ZTogKHtcbiAgICBmaWVsZHM6IGRhdGEsXG4gICAgcGF0aHMsXG4gICAgbGFiZWxzLFxuICAgIG1ldGFkYXRhVG9TaG93LFxuICAgIHR5cGVcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhLmZvckVhY2goKHtcbiAgICAgICAga2V5LCB2YWx1ZSwgbGFiZWwsIGZpZWxkc1xuICAgICAgfSkgPT4ge1xuICAgICAgICAvLyBsaW5rICYgcmVwZWF0ZXIgY29udHJvbFxuICAgICAgICBpZiAoZmllbGRzICYmIEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgICAgICAgIGlmIChpc0xpbmsoZmllbGRzKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXk6IGxhYmVsLCB2YWx1ZTogZ2V0TGluayhmaWVsZHMsIHBhdGhzKSB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUmVwZWF0ZXIoZmllbGRzKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXk6IGxhYmVsLCB2YWx1ZTogZ2V0UmVwZWF0ZXIoZmllbGRzLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlKSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHsga2V5LCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgICAgIC5maWx0ZXIoKHsga2V5LCB2YWx1ZSB9KSA9PiBtZXRhZGF0YVRvU2hvdy5pbmNsdWRlcyhrZXkpICYmICFtZXRhZGF0YUlzRW1wdHkodmFsdWUpKVxuICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGtleSksXG4gICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2Ake3R5cGV9LiR7a2V5fWBdKSxcbiAgICAgIH0pKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcbiAgfVxufTtcbiJdfQ==