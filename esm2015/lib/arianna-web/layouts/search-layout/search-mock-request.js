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
(params, configKeys) => {
    params.totalCount = Math.floor(Math.random() * 1000);
    console.log('fake-search-request----------->', params);
    let { facets } = params;
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
const _getFacet = (/**
 * @param {?} id
 * @param {?} facets
 * @return {?}
 */
(id, facets) => {
    return facets.filter((/**
     * @param {?} f
     * @return {?}
     */
    f => f.id === id))[0];
});
const ɵ0 = _getFacet;
/** @type {?} */
const _getQueryLinksData = (/**
 * @param {?} configKeys
 * @return {?}
 */
(configKeys) => {
    return Object.keys(configKeys).map((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const config = configKeys[key];
        return {
            value: key,
            label: config.label,
            counter: Math.floor(Math.random() * 100),
            // questi vanno aggiunti a mano lato front-end
            options: {
                icon: config.icon,
                classes: `color-${key}`
            }
        };
    }));
});
const ɵ1 = _getQueryLinksData;
/** @type {?} */
const _getEntityTypesData = (/**
 * @param {?} configKeys
 * @return {?}
 */
(configKeys) => {
    return Object.keys(configKeys).map((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const config = configKeys[key];
        return {
            value: key,
            label: config.label,
        };
    }));
});
const ɵ2 = _getEntityTypesData;
/** @type {?} */
const _getDateFromData = (/**
 * @return {?}
 */
() => {
    return ['1990', '1991', '1992', '1993'].map((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        return {
            value: key,
            label: key,
        };
    }));
});
const ɵ3 = _getDateFromData;
/** @type {?} */
const _getDateToData = (/**
 * @return {?}
 */
() => {
    return ['2000', '2001', '2002', '2003'].map((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        return {
            value: key,
            label: key,
        };
    }));
});
const ɵ4 = _getDateToData;
/** @type {?} */
const _getEntityLinksData = (/**
 * @return {?}
 */
() => {
    /** @type {?} */
    const types = ['places', 'places', 'concepts', 'people', 'people'];
    /** @type {?} */
    const items = ['milano', 'roma', 'spazio', 'rodolfo-marna', 'alighiero-boetti'];
    return items.map((/**
     * @param {?} key
     * @param {?} index
     * @return {?}
     */
    (key, index) => {
        /** @type {?} */
        const label = key.replace('-', ' ');
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
const ɵ5 = _getEntityLinksData;
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vY2stcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLW1vY2stcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0Qzs7Ozs7QUFBZSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQW1CLEVBQUU7SUFDckQsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTTtJQUV2QixjQUFjO0lBQ2QsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdkUsZUFBZTtJQUNmLFNBQVMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXpFLGVBQWU7SUFDZixTQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxtQkFBbUIsRUFBRSxDQUFDO0lBRS9ELFlBQVk7SUFDWixTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0lBRXpELFVBQVU7SUFDVixTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUVyRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixD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QUFDLEVBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXJhbXMsIGNvbmZpZ0tleXMpOiBPYnNlcnZhYmxlPGFueT4gPT4ge1xuICBwYXJhbXMudG90YWxDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gIGNvbnNvbGUubG9nKCdmYWtlLXNlYXJjaC1yZXF1ZXN0LS0tLS0tLS0tLS0+JywgcGFyYW1zKTtcblxuICBsZXQgeyBmYWNldHMgfSA9IHBhcmFtcztcblxuICAvLyBxdWVyeSBsaW5rc1xuICBfZ2V0RmFjZXQoJ3F1ZXJ5LWxpbmtzJywgZmFjZXRzKS5kYXRhID0gX2dldFF1ZXJ5TGlua3NEYXRhKGNvbmZpZ0tleXMpO1xuXG4gIC8vIGVudGl0eSB0eXBlc1xuICBfZ2V0RmFjZXQoJ2VudGl0eS10eXBlcycsIGZhY2V0cykuZGF0YSA9IF9nZXRFbnRpdHlUeXBlc0RhdGEoY29uZmlnS2V5cyk7XG5cbiAgLy8gZW50aXR5IGxpbmtzXG4gIF9nZXRGYWNldCgnZW50aXR5LWxpbmtzJywgZmFjZXRzKS5kYXRhID0gX2dldEVudGl0eUxpbmtzRGF0YSgpO1xuXG4gIC8vIGRhdGUgZnJvbVxuICBfZ2V0RmFjZXQoJ2RhdGUtZnJvbScsIGZhY2V0cykuZGF0YSA9IF9nZXREYXRlRnJvbURhdGEoKTtcbiAgXG4gIC8vIGRhdGUgdG9cbiAgX2dldEZhY2V0KCdkYXRlLXRvJywgZmFjZXRzKS5kYXRhID0gX2dldERhdGVUb0RhdGEoKTtcbiAgXG4gIHJldHVybiBvZihwYXJhbXMpO1xufVxuXG5jb25zdCBfZ2V0RmFjZXQgPSAoaWQsIGZhY2V0cykgPT4ge1xuICByZXR1cm4gZmFjZXRzLmZpbHRlcihmID0+IGYuaWQgPT09IGlkKVswXTtcbn1cblxuY29uc3QgX2dldFF1ZXJ5TGlua3NEYXRhID0gKGNvbmZpZ0tleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZ0tleXMpLm1hcChrZXkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ0tleXNba2V5XTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgICBjb3VudGVyOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgICAgXG4gICAgICAvLyBxdWVzdGkgdmFubm8gYWdnaXVudGkgYSBtYW5vIGxhdG8gZnJvbnQtZW5kXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGljb246IGNvbmZpZy5pY29uLFxuICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXl9YFxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBfZ2V0RW50aXR5VHlwZXNEYXRhID0gKGNvbmZpZ0tleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZ0tleXMpLm1hcChrZXkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ0tleXNba2V5XTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgfTtcbiAgfSk7XG59XG5cbmNvbnN0IF9nZXREYXRlRnJvbURhdGEgPSAoKSA9PiB7XG4gIHJldHVybiBbJzE5OTAnLCAnMTk5MScsICcxOTkyJywgJzE5OTMnXS5tYXAoa2V5ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBrZXksXG4gICAgfTtcbiAgfSk7XG59XG5cbmNvbnN0IF9nZXREYXRlVG9EYXRhID0gKCkgPT4ge1xuICByZXR1cm4gWycyMDAwJywgJzIwMDEnLCAnMjAwMicsICcyMDAzJ10ubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBrZXksXG4gICAgICBsYWJlbDoga2V5LFxuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBfZ2V0RW50aXR5TGlua3NEYXRhID0gKCkgPT4ge1xuICBjb25zdCB0eXBlcyA9IFsncGxhY2VzJywgJ3BsYWNlcycsICdjb25jZXB0cycsICdwZW9wbGUnLCAncGVvcGxlJ107XG4gIGNvbnN0IGl0ZW1zID0gWydtaWxhbm8nLCAncm9tYScsICdzcGF6aW8nLCAncm9kb2xmby1tYXJuYScsICdhbGlnaGllcm8tYm9ldHRpJ107XG5cbiAgcmV0dXJuIGl0ZW1zLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0ga2V5LnJlcGxhY2UoJy0nLCAnICcpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToga2V5LFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgY291bnRlcjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgJ2VudGl0eS10eXBlJzogdHlwZXNbaW5kZXhdXG4gICAgICB9ICBcbiAgICB9XG4gIH0pO1xufSJdfQ==