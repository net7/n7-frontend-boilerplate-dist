/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const hasValue = (/**
 * @param {?} value
 * @return {?}
 */
(value) => {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return !!value;
});
const ɵ0 = hasValue;
export default {
    /**
     * @param {?} state
     * @param {?} schemas
     * @return {?}
     */
    stateToQueryParams(state, schemas) {
        /** @type {?} */
        const queryParams = {};
        Object.keys(state).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            const value = state[key];
            /** @type {?} */
            const schema = schemas[key];
            const { multiple, valueType } = schema;
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
                        (v) => +v)).join(',') : +value;
                        break;
                    default:
                        break;
                }
            }
        }));
        return queryParams;
    },
    /**
     * @param {?} queryParams
     * @param {?} schemas
     * @return {?}
     */
    queryParamsToState(queryParams, schemas) {
        /** @type {?} */
        const state = {};
        Object.keys(queryParams).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            const value = queryParams[key];
            /** @type {?} */
            const schema = schemas[key];
            const { multiple, valueType } = schema;
            if (hasValue(value)) {
                if (hasValue(value)) {
                    switch (valueType) {
                        case 'number':
                            state[key] = multiple ? value.split(',').map((/**
                             * @param {?} v
                             * @return {?}
                             */
                            (v) => +v)) : +value;
                            break;
                        case 'string':
                            state[key] = multiple ? value.split(',').map((/**
                             * @param {?} v
                             * @return {?}
                             */
                            (v) => `${v}`)) : `${value}`;
                            break;
                        case 'boolean':
                            state[key] = multiple ? value.split(',').map((/**
                             * @param {?} v
                             * @return {?}
                             */
                            (v) => !!v)) : !!value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvaGVscGVycy9zZWFyY2gtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BRU0sUUFBUTs7OztBQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDekIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDekI7SUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFBOztBQUVELGVBQWU7Ozs7OztJQUNiLGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUF1Qzs7Y0FDekQsV0FBVyxHQUFHLEVBQUU7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7a0JBQzNCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDOztrQkFDbEIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7a0JBQ3JCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU07WUFDdEMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsU0FBUyxFQUFFO29CQUNqQixLQUFLLFFBQVEsQ0FBQztvQkFDZCxLQUFLLFFBQVE7d0JBQ1gsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUN0RCxNQUFNO29CQUVSLEtBQUssU0FBUzt3QkFDWixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRzs7Ozt3QkFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUN0RSxNQUFNO29CQUVSO3dCQUNFLE1BQU07aUJBQ1Q7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBQ0Qsa0JBQWtCLENBQUMsV0FBVyxFQUFFLE9BQXVDOztjQUMvRCxLQUFLLEdBQUcsRUFBRTtRQUVoQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFOztrQkFDakMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7O2tCQUN4QixNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztrQkFDckIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTTtZQUN0QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ25CLFFBQVEsU0FBUyxFQUFFO3dCQUNqQixLQUFLLFFBQVE7NEJBQ1gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDakUsTUFBTTt3QkFFUixLQUFLLFFBQVE7NEJBQ1gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7OzRCQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUM7NEJBQ3pFLE1BQU07d0JBRVIsS0FBSyxTQUFTOzRCQUNaLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7Ozs0QkFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUNuRSxNQUFNO3dCQUdSOzRCQUNFLE1BQU07cUJBQ1Q7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0U2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2guaW50ZXJmYWNlJztcblxuY29uc3QgaGFzVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gIH1cbiAgcmV0dXJuICEhdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlVG9RdWVyeVBhcmFtcyhzdGF0ZSwgc2NoZW1hczogeyBba2V5OiBzdHJpbmddOiBJbnB1dFNjaGVtYSB9KSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYXNba2V5XTtcbiAgICAgIGNvbnN0IHsgbXVsdGlwbGUsIHZhbHVlVHlwZSB9ID0gc2NoZW1hO1xuICAgICAgaWYgKGhhc1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLmpvaW4oJywnKSA6IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLm1hcCgodikgPT4gK3YpLmpvaW4oJywnKSA6ICt2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9LFxuICBxdWVyeVBhcmFtc1RvU3RhdGUocXVlcnlQYXJhbXMsIHNjaGVtYXM6IHsgW2tleTogc3RyaW5nXTogSW5wdXRTY2hlbWEgfSkge1xuICAgIGNvbnN0IHN0YXRlID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFzW2tleV07XG4gICAgICBjb25zdCB7IG11bHRpcGxlLCB2YWx1ZVR5cGUgfSA9IHNjaGVtYTtcbiAgICAgIGlmIChoYXNWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgIHN3aXRjaCAodmFsdWVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gbXVsdGlwbGUgPyB2YWx1ZS5zcGxpdCgnLCcpLm1hcCgodikgPT4gK3YpIDogK3ZhbHVlO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IG11bHRpcGxlID8gdmFsdWUuc3BsaXQoJywnKS5tYXAoKHYpID0+IGAke3Z9YCkgOiBgJHt2YWx1ZX1gO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLnNwbGl0KCcsJykubWFwKCh2KSA9PiAhIXYpIDogISF2YWx1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl19