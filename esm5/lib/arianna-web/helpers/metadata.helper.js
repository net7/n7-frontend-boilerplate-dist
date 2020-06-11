/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import helpers from '../../common/helpers';
/** @type {?} */
var metadataIsEmpty = (/**
 * @param {?} value
 * @return {?}
 */
function (value) { return (!value || value === 'null'); });
var ɵ0 = metadataIsEmpty;
/** @type {?} */
var isLink = (/**
 * @param {?} fields
 * @return {?}
 */
function (fields) { return !!fields.filter((/**
 * @param {?} __0
 * @return {?}
 */
function (_a) {
    var key = _a.key;
    return key === 'isLink';
})).length; });
var ɵ1 = isLink;
/** @type {?} */
var isRepeater = (/**
 * @param {?} fields
 * @return {?}
 */
function (fields) { return Array.isArray(fields); });
var ɵ2 = isRepeater;
/** @type {?} */
var getLink = (/**
 * @param {?} fields
 * @param {?} paths
 * @return {?}
 */
function (fields, paths) {
    /** @type {?} */
    var schedaTypes = ['oggetto-culturale', 'aggregazione-logica'];
    /** @type {?} */
    var label = fields.find((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key;
        return key === 'label';
    })).value;
    /** @type {?} */
    var slug = helpers.slugify(label);
    /** @type {?} */
    var id = fields.find((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key;
        return key === 'id';
    })).value;
    /** @type {?} */
    var type = fields.find((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key;
        return key === 'type';
    })).value;
    /** @type {?} */
    var basePath = paths.entitaBasePath;
    if (schedaTypes.includes(type)) {
        basePath = paths.schedaBasePath;
    }
    return "<a href=\"" + basePath + id + "/" + slug + "\">" + label + "</a>";
});
var ɵ3 = getLink;
/** @type {?} */
var getRepeater = (/**
 * @param {?} fields
 * @param {?} labels
 * @param {?} metadataToShow
 * @param {?} type
 * @return {?}
 */
function (fields, labels, metadataToShow, type) {
    /** @type {?} */
    var html = [];
    fields
        .filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key, value = _a.value;
        return metadataToShow.includes(key) && !metadataIsEmpty(value);
    }))
        .map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key, value = _a.value;
        return ({
            key: key,
            value: value,
            order: metadataToShow.indexOf(key),
            label: helpers.prettifySnakeCase(key, labels[type + "." + key])
        });
    }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.order - b.order; }))
        .forEach((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var label = _a.label, value = _a.value;
        html.push("<dt>" + label + "</dt>");
        html.push("<dd>" + value + "</dd>");
    }));
    return html.length
        ? "<dl>" + html.join('') + "</dl>"
        : null;
});
var ɵ4 = getRepeater;
export default {
    normalize: (/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var data = _a.fields, paths = _a.paths, labels = _a.labels, metadataToShow = _a.metadataToShow, type = _a.type;
        /** @type {?} */
        var result = [];
        if (Array.isArray(data)) {
            data.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var key = _a.key, value = _a.value, label = _a.label, fields = _a.fields;
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
                    result.push({ key: key, value: value });
                }
            }));
        }
        return result
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            return metadataToShow.includes(key) && !metadataIsEmpty(value);
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            return ({
                key: key,
                value: value,
                order: metadataToShow.indexOf(key),
                label: helpers.prettifySnakeCase(key, labels[type + "." + key]),
            });
        }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
    })
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQzs7SUFFckMsZUFBZTs7OztBQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUE7OztJQUV6RCxNQUFNOzs7O0FBQUcsVUFBQyxNQUFhLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7QUFBQyxVQUFDLEVBQU87UUFBTCxZQUFHO0lBQU8sT0FBQSxHQUFHLEtBQUssUUFBUTtBQUFoQixDQUFnQixFQUFDLENBQUMsTUFBTSxFQUFyRCxDQUFxRCxDQUFBOzs7SUFFakYsVUFBVTs7OztBQUFHLFVBQUMsTUFBYSxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQTs7O0lBRXJELE9BQU87Ozs7O0FBQUcsVUFBQyxNQUFhLEVBQUUsS0FBSzs7UUFDN0IsV0FBVyxHQUFHLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7O1FBQzFELEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSTs7OztJQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxPQUFPO0lBQWYsQ0FBZSxFQUFDLENBQUMsS0FBSzs7UUFDdkQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztRQUM3QixFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7SUFBQyxVQUFDLEVBQU87WUFBTCxZQUFHO1FBQU8sT0FBQSxHQUFHLEtBQUssSUFBSTtJQUFaLENBQVksRUFBQyxDQUFDLEtBQUs7O1FBQ2pELElBQUksR0FBRyxNQUFNLENBQUMsSUFBSTs7OztJQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxNQUFNO0lBQWQsQ0FBYyxFQUFDLENBQUMsS0FBSzs7UUFDdkQsUUFBUSxHQUFHLEtBQUssQ0FBQyxjQUFjO0lBQ25DLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM5QixRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztLQUNqQztJQUNELE9BQU8sZUFBWSxRQUFRLEdBQUcsRUFBRSxTQUFJLElBQUksV0FBSyxLQUFLLFNBQU0sQ0FBQztBQUMzRCxDQUFDLENBQUE7OztJQUVLLFdBQVc7Ozs7Ozs7QUFBRyxVQUFDLE1BQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUk7O1FBQ3hELElBQUksR0FBRyxFQUFFO0lBQ2YsTUFBTTtTQUNILE1BQU07Ozs7SUFBQyxVQUFDLEVBQWM7WUFBWixZQUFHLEVBQUUsZ0JBQUs7UUFBTyxPQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQXZELENBQXVELEVBQUM7U0FDbkYsR0FBRzs7OztJQUFDLFVBQUMsRUFBYztZQUFaLFlBQUcsRUFBRSxnQkFBSztRQUFPLE9BQUEsQ0FBQztZQUN4QixHQUFHLEtBQUE7WUFDSCxLQUFLLE9BQUE7WUFDTCxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFJLElBQUksU0FBSSxHQUFLLENBQUMsQ0FBQztTQUNoRSxDQUFDO0lBTHVCLENBS3ZCLEVBQUM7U0FDRixJQUFJOzs7OztJQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsRUFBQztTQUNqQyxPQUFPOzs7O0lBQUMsVUFBQyxFQUFnQjtZQUFkLGdCQUFLLEVBQUUsZ0JBQUs7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFPLEtBQUssVUFBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFPLEtBQUssVUFBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNO1FBQ2hCLENBQUMsQ0FBQyxTQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQU87UUFDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNYLENBQUMsQ0FBQTs7QUFFRCxlQUFlO0lBQ2IsU0FBUzs7OztJQUFFLFVBQUMsRUFNWDtZQUxDLGdCQUFZLEVBQ1osZ0JBQUssRUFDTCxrQkFBTSxFQUNOLGtDQUFjLEVBQ2QsY0FBSTs7WUFFRSxNQUFNLEdBQUcsRUFBRTtRQUNqQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEVBRWI7b0JBREMsWUFBRyxFQUFFLGdCQUFLLEVBQUUsZ0JBQUssRUFBRSxrQkFBTTtnQkFFekIsMEJBQTBCO2dCQUMxQixJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNuQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUM1RDt5QkFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3ZGO29CQUNELFVBQVU7aUJBQ1g7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNO2FBQ1YsTUFBTTs7OztRQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQXZELENBQXVELEVBQUM7YUFDbkYsR0FBRzs7OztRQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLENBQUM7Z0JBQ3hCLEdBQUcsS0FBQTtnQkFDSCxLQUFLLE9BQUE7Z0JBQ0wsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUksSUFBSSxTQUFJLEdBQUssQ0FBQyxDQUFDO2FBQ2hFLENBQUM7UUFMdUIsQ0FLdkIsRUFBQzthQUNGLElBQUk7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixFQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFBO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuY29uc3QgbWV0YWRhdGFJc0VtcHR5ID0gKHZhbHVlKSA9PiAoIXZhbHVlIHx8IHZhbHVlID09PSAnbnVsbCcpO1xuXG5jb25zdCBpc0xpbmsgPSAoZmllbGRzOiBhbnlbXSkgPT4gISFmaWVsZHMuZmlsdGVyKCh7IGtleSB9KSA9PiBrZXkgPT09ICdpc0xpbmsnKS5sZW5ndGg7XG5cbmNvbnN0IGlzUmVwZWF0ZXIgPSAoZmllbGRzOiBhbnlbXSkgPT4gQXJyYXkuaXNBcnJheShmaWVsZHMpO1xuXG5jb25zdCBnZXRMaW5rID0gKGZpZWxkczogYW55W10sIHBhdGhzKSA9PiB7XG4gIGNvbnN0IHNjaGVkYVR5cGVzID0gWydvZ2dldHRvLWN1bHR1cmFsZScsICdhZ2dyZWdhemlvbmUtbG9naWNhJ107XG4gIGNvbnN0IGxhYmVsID0gZmllbGRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ2xhYmVsJykudmFsdWU7XG4gIGNvbnN0IHNsdWcgPSBoZWxwZXJzLnNsdWdpZnkobGFiZWwpO1xuICBjb25zdCBpZCA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICdpZCcpLnZhbHVlO1xuICBjb25zdCB0eXBlID0gZmllbGRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ3R5cGUnKS52YWx1ZTtcbiAgbGV0IGJhc2VQYXRoID0gcGF0aHMuZW50aXRhQmFzZVBhdGg7XG4gIGlmIChzY2hlZGFUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgIGJhc2VQYXRoID0gcGF0aHMuc2NoZWRhQmFzZVBhdGg7XG4gIH1cbiAgcmV0dXJuIGA8YSBocmVmPVwiJHtiYXNlUGF0aH0ke2lkfS8ke3NsdWd9XCI+JHtsYWJlbH08L2E+YDtcbn07XG5cbmNvbnN0IGdldFJlcGVhdGVyID0gKGZpZWxkczogYW55W10sIGxhYmVscywgbWV0YWRhdGFUb1Nob3csIHR5cGUpID0+IHtcbiAgY29uc3QgaHRtbCA9IFtdO1xuICBmaWVsZHNcbiAgICAuZmlsdGVyKCh7IGtleSwgdmFsdWUgfSkgPT4gbWV0YWRhdGFUb1Nob3cuaW5jbHVkZXMoa2V5KSAmJiAhbWV0YWRhdGFJc0VtcHR5KHZhbHVlKSlcbiAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHtcbiAgICAgIGtleSxcbiAgICAgIHZhbHVlLFxuICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2Yoa2V5KSxcbiAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2Ake3R5cGV9LiR7a2V5fWBdKVxuICAgIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcbiAgICAuZm9yRWFjaCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgaHRtbC5wdXNoKGA8ZHQ+JHtsYWJlbH08L2R0PmApO1xuICAgICAgaHRtbC5wdXNoKGA8ZGQ+JHt2YWx1ZX08L2RkPmApO1xuICAgIH0pO1xuICByZXR1cm4gaHRtbC5sZW5ndGhcbiAgICA/IGA8ZGw+JHtodG1sLmpvaW4oJycpfTwvZGw+YFxuICAgIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9ybWFsaXplOiAoe1xuICAgIGZpZWxkczogZGF0YSxcbiAgICBwYXRocyxcbiAgICBsYWJlbHMsXG4gICAgbWV0YWRhdGFUb1Nob3csXG4gICAgdHlwZVxuICB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEuZm9yRWFjaCgoe1xuICAgICAgICBrZXksIHZhbHVlLCBsYWJlbCwgZmllbGRzXG4gICAgICB9KSA9PiB7XG4gICAgICAgIC8vIGxpbmsgJiByZXBlYXRlciBjb250cm9sXG4gICAgICAgIGlmIChmaWVsZHMgJiYgQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgICAgICAgaWYgKGlzTGluayhmaWVsZHMpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGtleTogbGFiZWwsIHZhbHVlOiBnZXRMaW5rKGZpZWxkcywgcGF0aHMpIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNSZXBlYXRlcihmaWVsZHMpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGtleTogbGFiZWwsIHZhbHVlOiBnZXRSZXBlYXRlcihmaWVsZHMsIGxhYmVscywgbWV0YWRhdGFUb1Nob3csIHR5cGUpIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXksIHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICAgICAgLmZpbHRlcigoeyBrZXksIHZhbHVlIH0pID0+IG1ldGFkYXRhVG9TaG93LmluY2x1ZGVzKGtleSkgJiYgIW1ldGFkYXRhSXNFbXB0eSh2YWx1ZSkpXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2Yoa2V5KSxcbiAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCBsYWJlbHNbYCR7dHlwZX0uJHtrZXl9YF0pLFxuICAgICAgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuICB9XG59O1xuIl19