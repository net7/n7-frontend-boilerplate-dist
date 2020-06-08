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
     * @param {?} schemas
     * @return {?}
     */
    function (state, schemas) {
        /** @type {?} */
        var queryParams = {};
        Object.keys(state).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var value = state[key];
            /** @type {?} */
            var schema = schemas[key];
            var multiple = schema.multiple, valueType = schema.valueType;
            if (hasValue(value)) {
                switch (valueType) {
                    case 'number':
                    case 'string':
                        queryParams[key] = multiple ? value.join(',') : value;
                        break;
                    case 'boolean':
                        queryParams[key] = multiple ? value.map((/**
                         * @param {?} v
                         * @return {?}
                         */
                        function (v) { return +v; })).join(',') : +value;
                        break;
                    default:
                        break;
                }
            }
        }));
        return queryParams;
    },
    queryParamsToState: /**
     * @param {?} queryParams
     * @param {?} schemas
     * @return {?}
     */
    function (queryParams, schemas) {
        /** @type {?} */
        var state = {};
        Object.keys(queryParams).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var value = queryParams[key];
            /** @type {?} */
            var schema = schemas[key];
            var multiple = schema.multiple, valueType = schema.valueType;
            if (hasValue(value)) {
                if (hasValue(value)) {
                    switch (valueType) {
                        case 'number':
                            state[key] = multiple ? value.split(',').map((/**
                             * @param {?} v
                             * @return {?}
                             */
                            function (v) { return +v; })) : +value;
                            break;
                        case 'string':
                            state[key] = multiple ? value.split(',').map((/**
                             * @param {?} v
                             * @return {?}
                             */
                            function (v) { return "" + v; })) : "" + value;
                            break;
                        case 'boolean':
                            state[key] = multiple ? value.split(',').map((/**
                             * @param {?} v
                             * @return {?}
                             */
                            function (v) { return !!v; })) : !!value;
                            break;
                        default:
                            break;
                    }
                }
            }
        }));
        return state;
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvaGVscGVycy9zZWFyY2gtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBRU0sUUFBUTs7OztBQUFHLFVBQUMsS0FBSztJQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUE7O0FBRUQsZUFBZTtJQUNiLGtCQUFrQjs7Ozs7SUFBbEIsVUFBbUIsS0FBSyxFQUFFLE9BQXVDOztZQUN6RCxXQUFXLEdBQUcsRUFBRTtRQUV0QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQUc7O2dCQUN2QixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ2xCLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ25CLElBQUEsMEJBQVEsRUFBRSw0QkFBUztZQUMzQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxTQUFTLEVBQUU7b0JBQ2pCLEtBQUssUUFBUSxDQUFDO29CQUNkLEtBQUssUUFBUTt3QkFDWCxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ3RELE1BQU07b0JBRVIsS0FBSyxTQUFTO3dCQUNaLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7O3dCQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUYsQ0FBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDdEUsTUFBTTtvQkFFUjt3QkFDRSxNQUFNO2lCQUNUO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxrQkFBa0I7Ozs7O0lBQWxCLFVBQW1CLFdBQVcsRUFBRSxPQUF1Qzs7WUFDL0QsS0FBSyxHQUFHLEVBQUU7UUFFaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxHQUFHOztnQkFDN0IsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7O2dCQUN4QixNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNuQixJQUFBLDBCQUFRLEVBQUUsNEJBQVM7WUFDM0IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNuQixRQUFRLFNBQVMsRUFBRTt3QkFDakIsS0FBSyxRQUFROzRCQUNYLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7Ozs0QkFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFGLENBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDakUsTUFBTTt3QkFFUixLQUFLLFFBQVE7NEJBQ1gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OzRCQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBRyxDQUFHLEVBQU4sQ0FBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsS0FBTyxDQUFDOzRCQUN6RSxNQUFNO3dCQUVSLEtBQUssU0FBUzs0QkFDWixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7NEJBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUNuRSxNQUFNO3dCQUdSOzRCQUNFLE1BQU07cUJBQ1Q7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0U2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2guaW50ZXJmYWNlJztcblxuY29uc3QgaGFzVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gIH1cbiAgcmV0dXJuICEhdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlVG9RdWVyeVBhcmFtcyhzdGF0ZSwgc2NoZW1hczogeyBba2V5OiBzdHJpbmddOiBJbnB1dFNjaGVtYSB9KSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYXNba2V5XTtcbiAgICAgIGNvbnN0IHsgbXVsdGlwbGUsIHZhbHVlVHlwZSB9ID0gc2NoZW1hO1xuICAgICAgaWYgKGhhc1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLmpvaW4oJywnKSA6IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLm1hcCgodikgPT4gK3YpLmpvaW4oJywnKSA6ICt2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9LFxuICBxdWVyeVBhcmFtc1RvU3RhdGUocXVlcnlQYXJhbXMsIHNjaGVtYXM6IHsgW2tleTogc3RyaW5nXTogSW5wdXRTY2hlbWEgfSkge1xuICAgIGNvbnN0IHN0YXRlID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFzW2tleV07XG4gICAgICBjb25zdCB7IG11bHRpcGxlLCB2YWx1ZVR5cGUgfSA9IHNjaGVtYTtcbiAgICAgIGlmIChoYXNWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN3aXRjaCAodmFsdWVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gbXVsdGlwbGUgPyB2YWx1ZS5zcGxpdCgnLCcpLm1hcCgodikgPT4gK3YpIDogK3ZhbHVlO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IG11bHRpcGxlID8gdmFsdWUuc3BsaXQoJywnKS5tYXAoKHYpID0+IGAke3Z9YCkgOiBgJHt2YWx1ZX1gO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLnNwbGl0KCcsJykubWFwKCh2KSA9PiAhIXYpIDogISF2YWx1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl19