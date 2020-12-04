var hasValue = function (value) {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return !!value;
};
var ɵ0 = hasValue;
export default {
    stateToQueryParams: function (state, schemas) {
        var queryParams = {};
        Object.keys(state).forEach(function (key) {
            var schema = schemas[key];
            var multiple = schema.multiple, valueType = schema.valueType;
            var value = state[key];
            if (hasValue(value)) {
                switch (valueType) {
                    case 'number':
                    case 'string':
                        queryParams[key] = multiple ? value.join(',') : value;
                        break;
                    case 'boolean':
                        queryParams[key] = multiple ? value.map(function (v) { return +v; }).join(',') : +value;
                        break;
                    default:
                        break;
                }
            }
        });
        return queryParams;
    },
    queryParamsToState: function (queryParams, schemas) {
        var state = {};
        Object.keys(queryParams).forEach(function (key) {
            var value = queryParams[key];
            var schema = schemas[key];
            var multiple = schema.multiple, valueType = schema.valueType;
            if (hasValue(value)) {
                if (hasValue(value)) {
                    switch (valueType) {
                        case 'number':
                            state[key] = multiple ? value.split(',').map(function (v) { return +v; }) : +value;
                            break;
                        case 'string':
                            state[key] = multiple ? value.split(',').map(function (v) { return "" + v; }) : "" + value;
                            break;
                        case 'boolean':
                            state[key] = multiple ? value.split(',').map(function (v) { return !!v; }) : !!value;
                            break;
                        default:
                            break;
                    }
                }
            }
        });
        return state;
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvaGVscGVycy9zZWFyY2gtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBSztJQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUM7O0FBRUYsZUFBZTtJQUNiLGtCQUFrQixFQUFsQixVQUFtQixLQUFLLEVBQUUsT0FBeUM7UUFDakUsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUM3QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBQSwwQkFBUSxFQUFFLDRCQUFTLENBQVk7WUFDdkMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixRQUFRLFNBQVMsRUFBRTtvQkFDakIsS0FBSyxRQUFRLENBQUM7b0JBQ2QsS0FBSyxRQUFRO3dCQUNYLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDdEQsTUFBTTtvQkFFUixLQUFLLFNBQVM7d0JBQ1osV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFGLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ3RFLE1BQU07b0JBRVI7d0JBQ0UsTUFBTTtpQkFDVDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsa0JBQWtCLEVBQWxCLFVBQW1CLFdBQVcsRUFBRSxPQUF5QztRQUN2RSxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1lBQ25DLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBQSwwQkFBUSxFQUFFLDRCQUFTLENBQVk7WUFDdkMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNuQixRQUFRLFNBQVMsRUFBRTt3QkFDakIsS0FBSyxRQUFROzRCQUNYLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUYsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUNqRSxNQUFNO3dCQUVSLEtBQUssUUFBUTs0QkFDWCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUcsQ0FBRyxFQUFOLENBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLEtBQU8sQ0FBQzs0QkFDekUsTUFBTTt3QkFFUixLQUFLLFNBQVM7NEJBQ1osS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUNuRSxNQUFNO3dCQUVSOzRCQUNFLE1BQU07cUJBQ1Q7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ySW5wdXRTY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlYXJjaC5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgaGFzVmFsdWUgPSAodmFsdWUpID0+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gIH1cclxuICByZXR1cm4gISF2YWx1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzdGF0ZVRvUXVlcnlQYXJhbXMoc3RhdGUsIHNjaGVtYXM6IHsgW2tleTogc3RyaW5nXTogTXJJbnB1dFNjaGVtYSB9KSB7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHt9O1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgY29uc3Qgc2NoZW1hID0gc2NoZW1hc1trZXldO1xyXG4gICAgICBjb25zdCB7IG11bHRpcGxlLCB2YWx1ZVR5cGUgfSA9IHNjaGVtYTtcclxuICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xyXG4gICAgICBpZiAoaGFzVmFsdWUodmFsdWUpKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZVR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gbXVsdGlwbGUgPyB2YWx1ZS5qb2luKCcsJykgOiB2YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLm1hcCgodikgPT4gK3YpLmpvaW4oJywnKSA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcclxuICB9LFxyXG4gIHF1ZXJ5UGFyYW1zVG9TdGF0ZShxdWVyeVBhcmFtcywgc2NoZW1hczogeyBba2V5OiBzdHJpbmddOiBNcklucHV0U2NoZW1hIH0pIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge307XHJcblxyXG4gICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XHJcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYXNba2V5XTtcclxuICAgICAgY29uc3QgeyBtdWx0aXBsZSwgdmFsdWVUeXBlIH0gPSBzY2hlbWE7XHJcbiAgICAgIGlmIChoYXNWYWx1ZSh2YWx1ZSkpIHtcclxuICAgICAgICBpZiAoaGFzVmFsdWUodmFsdWUpKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLnNwbGl0KCcsJykubWFwKCh2KSA9PiArdikgOiArdmFsdWU7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLnNwbGl0KCcsJykubWFwKCh2KSA9PiBgJHt2fWApIDogYCR7dmFsdWV9YDtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBtdWx0aXBsZSA/IHZhbHVlLnNwbGl0KCcsJykubWFwKCh2KSA9PiAhIXYpIDogISF2YWx1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbiJdfQ==