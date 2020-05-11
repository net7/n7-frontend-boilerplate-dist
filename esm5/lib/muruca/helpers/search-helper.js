/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var hasValue = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return !!value;
});
var ɵ0 = hasValue;
export default {
    stateToQueryParams: /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var queryParams = (/** @type {?} */ ({}));
        Object.keys(state).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var value = state[key];
            if (hasValue(value)) {
                queryParams[key] = Array.isArray(value) ? value.join(',') : value;
            }
        }));
        return queryParams;
    },
    queryParamsToState: /**
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        /** @type {?} */
        var state = (/** @type {?} */ ({}));
        Object.keys(queryParams).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var value = queryParams[key];
            if (hasValue(value)) {
                state[key] = value.indexOf(',') !== -1 ? value.split(',') : value;
            }
        }));
        return state;
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvaGVscGVycy9zZWFyY2gtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBUU0sUUFBUTs7OztBQUFHLFVBQUMsS0FBSztJQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUE7O0FBRUQsZUFBZTtJQUNiLGtCQUFrQjs7OztJQUFsQixVQUFtQixLQUFrQjs7WUFDN0IsV0FBVyxHQUFHLG1CQUFBLEVBQUUsRUFBZTtRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQUc7O2dCQUN2QixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN4QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNuRTtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNELGtCQUFrQjs7OztJQUFsQixVQUFtQixXQUF3Qjs7WUFDbkMsS0FBSyxHQUFHLG1CQUFBLEVBQUUsRUFBZTtRQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQUc7O2dCQUM3QixLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNuRTtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgUXVlcnlQYXJhbXMgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxudHlwZSBTdGF0ZU9iamVjdCA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG59XG5cbmNvbnN0IGhhc1ZhbHVlID0gKHZhbHVlKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICB9XG4gIHJldHVybiAhIXZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZVRvUXVlcnlQYXJhbXMoc3RhdGU6IFN0YXRlT2JqZWN0KTogUXVlcnlQYXJhbXMge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge30gYXMgUXVlcnlQYXJhbXM7XG5cbiAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG4gICAgICBpZiAoaGFzVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywnKSA6IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgfSxcbiAgcXVlcnlQYXJhbXNUb1N0YXRlKHF1ZXJ5UGFyYW1zOiBRdWVyeVBhcmFtcyk6IFN0YXRlT2JqZWN0IHtcbiAgICBjb25zdCBzdGF0ZSA9IHt9IGFzIFN0YXRlT2JqZWN0O1xuXG4gICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgaWYgKGhhc1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBzdGF0ZVtrZXldID0gdmFsdWUuaW5kZXhPZignLCcpICE9PSAtMSA/IHZhbHVlLnNwbGl0KCcsJykgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXX0=