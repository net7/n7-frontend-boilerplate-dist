/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
export default (/**
 * @param {?} params
 * @param {?} configKeys
 * @return {?}
 */
function (params, configKeys) {
    params.totalCount = Math.floor(Math.random() * 1000);
    console.log('fake-search-request----------->', params);
    var facets = params.facets;
    // query links
    _getFacet('query-links', facets).data = _getQueryLinksData(configKeys);
    // entity types
    _getFacet('entity-types', facets).data = _getEntityTypesData(configKeys);
    // entity links
    _getFacet('entity-links', facets).data = _getEntityLinksData();
    // date from
    _getFacet('date-from', facets).data = _getDateFromData();
    // date to
    _getFacet('date-to', facets).data = _getDateToData();
    return of(params);
});
/** @type {?} */
var _getFacet = (/**
 * @param {?} id
 * @param {?} facets
 * @return {?}
 */
function (id, facets) {
    return facets.filter((/**
     * @param {?} f
     * @return {?}
     */
    function (f) { return f.id === id; }))[0];
});
var ɵ0 = _getFacet;
/** @type {?} */
var _getQueryLinksData = (/**
 * @param {?} configKeys
 * @return {?}
 */
function (configKeys) {
    return Object.keys(configKeys).map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var config = configKeys[key];
        return {
            value: key,
            label: config.label,
            counter: Math.floor(Math.random() * 100),
            // questi vanno aggiunti a mano lato front-end
            options: {
                icon: config.icon,
                classes: "color-" + key
            }
        };
    }));
});
var ɵ1 = _getQueryLinksData;
/** @type {?} */
var _getEntityTypesData = (/**
 * @param {?} configKeys
 * @return {?}
 */
function (configKeys) {
    return Object.keys(configKeys).map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var config = configKeys[key];
        return {
            value: key,
            label: config.label,
        };
    }));
});
var ɵ2 = _getEntityTypesData;
/** @type {?} */
var _getDateFromData = (/**
 * @return {?}
 */
function () {
    return ['1990', '1991', '1992', '1993'].map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return {
            value: key,
            label: key,
        };
    }));
});
var ɵ3 = _getDateFromData;
/** @type {?} */
var _getDateToData = (/**
 * @return {?}
 */
function () {
    return ['2000', '2001', '2002', '2003'].map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return {
            value: key,
            label: key,
        };
    }));
});
var ɵ4 = _getDateToData;
/** @type {?} */
var _getEntityLinksData = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    var types = ['places', 'places', 'concepts', 'people', 'people'];
    /** @type {?} */
    var items = ['milano', 'roma', 'spazio', 'rodolfo-marna', 'alighiero-boetti'];
    return items.map((/**
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    function (key, index) {
        /** @type {?} */
        var label = key.replace('-', ' ');
        return {
            value: key,
            label: label,
            counter: Math.floor(Math.random() * 100),
            metadata: {
                title: label,
                'entity-type': types[index]
            }
        };
    }));
});
var ɵ5 = _getEntityLinksData;
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vY2stcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLW1vY2stcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0Qzs7Ozs7QUFBZSxVQUFDLE1BQU0sRUFBRSxVQUFVO0lBQ2hDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVqRCxJQUFBLHNCQUFNO0lBRVosY0FBYztJQUNkLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXZFLGVBQWU7SUFDZixTQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV6RSxlQUFlO0lBQ2YsU0FBUyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQztJQUUvRCxZQUFZO0lBQ1osU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUV6RCxVQUFVO0lBQ1YsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFFckQsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxFQUFBOztJQUVLLFNBQVM7Ozs7O0FBQUcsVUFBQyxFQUFFLEVBQUUsTUFBTTtJQUMzQixPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUE7OztJQUVLLGtCQUFrQjs7OztBQUFHLFVBQUMsVUFBVTtJQUNwQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsR0FBRzs7WUFDOUIsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDOUIsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7O1lBR3hDLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxXQUFTLEdBQUs7YUFDeEI7U0FDRixDQUFDO0lBQ0osQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7OztJQUVLLG1CQUFtQjs7OztBQUFHLFVBQUMsVUFBVTtJQUNyQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsR0FBRzs7WUFDOUIsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDOUIsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1NBQ3BCLENBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQTs7O0lBRUssZ0JBQWdCOzs7QUFBRztJQUN2QixPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsR0FBRztRQUM3QyxPQUFPO1lBQ0wsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsR0FBRztTQUNYLENBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQTs7O0lBRUssY0FBYzs7O0FBQUc7SUFDckIsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLEdBQUc7UUFDN0MsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDO0lBQ0osQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7OztJQUVLLG1CQUFtQjs7O0FBQUc7O1FBQ3BCLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7O1FBQzVELEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztJQUUvRSxPQUFPLEtBQUssQ0FBQyxHQUFHOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7O1lBQ3BCLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDbkMsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ3hDLFFBQVEsRUFBRTtnQkFDUixLQUFLLEVBQUUsS0FBSztnQkFDWixhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUM1QjtTQUNGLENBQUE7SUFDSCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJhbXMsIGNvbmZpZ0tleXMpOiBPYnNlcnZhYmxlPGFueT4gPT4ge1xuICBwYXJhbXMudG90YWxDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gIGNvbnNvbGUubG9nKCdmYWtlLXNlYXJjaC1yZXF1ZXN0LS0tLS0tLS0tLS0+JywgcGFyYW1zKTtcblxuICBsZXQgeyBmYWNldHMgfSA9IHBhcmFtcztcblxuICAvLyBxdWVyeSBsaW5rc1xuICBfZ2V0RmFjZXQoJ3F1ZXJ5LWxpbmtzJywgZmFjZXRzKS5kYXRhID0gX2dldFF1ZXJ5TGlua3NEYXRhKGNvbmZpZ0tleXMpO1xuXG4gIC8vIGVudGl0eSB0eXBlc1xuICBfZ2V0RmFjZXQoJ2VudGl0eS10eXBlcycsIGZhY2V0cykuZGF0YSA9IF9nZXRFbnRpdHlUeXBlc0RhdGEoY29uZmlnS2V5cyk7XG5cbiAgLy8gZW50aXR5IGxpbmtzXG4gIF9nZXRGYWNldCgnZW50aXR5LWxpbmtzJywgZmFjZXRzKS5kYXRhID0gX2dldEVudGl0eUxpbmtzRGF0YSgpO1xuXG4gIC8vIGRhdGUgZnJvbVxuICBfZ2V0RmFjZXQoJ2RhdGUtZnJvbScsIGZhY2V0cykuZGF0YSA9IF9nZXREYXRlRnJvbURhdGEoKTtcbiAgXG4gIC8vIGRhdGUgdG9cbiAgX2dldEZhY2V0KCdkYXRlLXRvJywgZmFjZXRzKS5kYXRhID0gX2dldERhdGVUb0RhdGEoKTtcbiAgXG4gIHJldHVybiBvZihwYXJhbXMpO1xufVxuXG5jb25zdCBfZ2V0RmFjZXQgPSAoaWQsIGZhY2V0cykgPT4ge1xuICByZXR1cm4gZmFjZXRzLmZpbHRlcihmID0+IGYuaWQgPT09IGlkKVswXTtcbn1cblxuY29uc3QgX2dldFF1ZXJ5TGlua3NEYXRhID0gKGNvbmZpZ0tleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZ0tleXMpLm1hcChrZXkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ0tleXNba2V5XTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgICBjb3VudGVyOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgICAgXG4gICAgICAvLyBxdWVzdGkgdmFubm8gYWdnaXVudGkgYSBtYW5vIGxhdG8gZnJvbnQtZW5kXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGljb246IGNvbmZpZy5pY29uLFxuICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXl9YFxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBfZ2V0RW50aXR5VHlwZXNEYXRhID0gKGNvbmZpZ0tleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZ0tleXMpLm1hcChrZXkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ0tleXNba2V5XTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgfTtcbiAgfSk7XG59XG5cbmNvbnN0IF9nZXREYXRlRnJvbURhdGEgPSAoKSA9PiB7XG4gIHJldHVybiBbJzE5OTAnLCAnMTk5MScsICcxOTkyJywgJzE5OTMnXS5tYXAoa2V5ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBrZXksXG4gICAgfTtcbiAgfSk7XG59XG5cbmNvbnN0IF9nZXREYXRlVG9EYXRhID0gKCkgPT4ge1xuICByZXR1cm4gWycyMDAwJywgJzIwMDEnLCAnMjAwMicsICcyMDAzJ10ubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBrZXksXG4gICAgICBsYWJlbDoga2V5LFxuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBfZ2V0RW50aXR5TGlua3NEYXRhID0gKCkgPT4ge1xuICBjb25zdCB0eXBlcyA9IFsncGxhY2VzJywgJ3BsYWNlcycsICdjb25jZXB0cycsICdwZW9wbGUnLCAncGVvcGxlJ107XG4gIGNvbnN0IGl0ZW1zID0gWydtaWxhbm8nLCAncm9tYScsICdzcGF6aW8nLCAncm9kb2xmby1tYXJuYScsICdhbGlnaGllcm8tYm9ldHRpJ107XG5cbiAgcmV0dXJuIGl0ZW1zLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0ga2V5LnJlcGxhY2UoJy0nLCAnICcpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToga2V5LFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgY291bnRlcjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgJ2VudGl0eS10eXBlJzogdHlwZXNbaW5kZXhdXG4gICAgICB9ICBcbiAgICB9XG4gIH0pO1xufSJdfQ==