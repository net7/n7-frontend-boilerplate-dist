/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-mock-request.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
export default (/**
 * @param {?} params
 * @param {?} configKeys
 * @param {?} enabledEntities
 * @return {?}
 */
(params, configKeys, enabledEntities) => {
    params.totalCount = Math.floor(Math.random() * 1000);
    console.log('fake-search-request----------->', params);
    let { facets } = params;
    // query links
    _getFacet('query-links', facets).data = _getQueryLinksData(configKeys, enabledEntities);
    // entity types
    _getFacet('entity-types', facets).data = _getEntityTypesData(configKeys, enabledEntities);
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
 * @param {?} enabledEntities
 * @return {?}
 */
(configKeys, enabledEntities) => {
    return enabledEntities.map((/**
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
 * @param {?} enabledEntities
 * @return {?}
 */
(configKeys, enabledEntities) => {
    return enabledEntities.map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vY2stcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLW1vY2stcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEM7Ozs7OztBQUFlLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQW1CLEVBQUU7SUFDdEUsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTTtJQUV2QixjQUFjO0lBQ2QsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRXhGLGVBQWU7SUFDZixTQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFMUYsZUFBZTtJQUNmLFNBQVMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLG1CQUFtQixFQUFFLENBQUM7SUFFL0QsWUFBWTtJQUNaLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLGdCQUFnQixFQUFFLENBQUM7SUFFekQsVUFBVTtJQUNWLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBRXJELE9BQU8s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Q0gsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZGVmYXVsdCAocGFyYW1zLCBjb25maWdLZXlzLCBlbmFibGVkRW50aXRpZXMpOiBPYnNlcnZhYmxlPGFueT4gPT4ge1xuICBwYXJhbXMudG90YWxDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gIGNvbnNvbGUubG9nKCdmYWtlLXNlYXJjaC1yZXF1ZXN0LS0tLS0tLS0tLS0+JywgcGFyYW1zKTtcblxuICBsZXQgeyBmYWNldHMgfSA9IHBhcmFtcztcblxuICAvLyBxdWVyeSBsaW5rc1xuICBfZ2V0RmFjZXQoJ3F1ZXJ5LWxpbmtzJywgZmFjZXRzKS5kYXRhID0gX2dldFF1ZXJ5TGlua3NEYXRhKGNvbmZpZ0tleXMsIGVuYWJsZWRFbnRpdGllcyk7XG5cbiAgLy8gZW50aXR5IHR5cGVzXG4gIF9nZXRGYWNldCgnZW50aXR5LXR5cGVzJywgZmFjZXRzKS5kYXRhID0gX2dldEVudGl0eVR5cGVzRGF0YShjb25maWdLZXlzLCBlbmFibGVkRW50aXRpZXMpO1xuXG4gIC8vIGVudGl0eSBsaW5rc1xuICBfZ2V0RmFjZXQoJ2VudGl0eS1saW5rcycsIGZhY2V0cykuZGF0YSA9IF9nZXRFbnRpdHlMaW5rc0RhdGEoKTtcblxuICAvLyBkYXRlIGZyb21cbiAgX2dldEZhY2V0KCdkYXRlLWZyb20nLCBmYWNldHMpLmRhdGEgPSBfZ2V0RGF0ZUZyb21EYXRhKCk7XG4gIFxuICAvLyBkYXRlIHRvXG4gIF9nZXRGYWNldCgnZGF0ZS10bycsIGZhY2V0cykuZGF0YSA9IF9nZXREYXRlVG9EYXRhKCk7XG4gIFxuICByZXR1cm4gb2YocGFyYW1zKTtcbn1cblxuY29uc3QgX2dldEZhY2V0ID0gKGlkLCBmYWNldHMpID0+IHtcbiAgcmV0dXJuIGZhY2V0cy5maWx0ZXIoZiA9PiBmLmlkID09PSBpZClbMF07XG59XG5cbmNvbnN0IF9nZXRRdWVyeUxpbmtzRGF0YSA9IChjb25maWdLZXlzLCBlbmFibGVkRW50aXRpZXMpID0+IHtcbiAgcmV0dXJuIGVuYWJsZWRFbnRpdGllcy5tYXAoa2V5ID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBjb25maWdLZXlzW2tleV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBrZXksXG4gICAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgICAgY291bnRlcjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgIFxuICAgICAgLy8gcXVlc3RpIHZhbm5vIGFnZ2l1bnRpIGEgbWFubyBsYXRvIGZyb250LWVuZFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBpY29uOiBjb25maWcuaWNvbixcbiAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7a2V5fWBcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuY29uc3QgX2dldEVudGl0eVR5cGVzRGF0YSA9IChjb25maWdLZXlzLCBlbmFibGVkRW50aXRpZXMpID0+IHtcbiAgcmV0dXJuIGVuYWJsZWRFbnRpdGllcy5tYXAoa2V5ID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBjb25maWdLZXlzW2tleV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBrZXksXG4gICAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBfZ2V0RGF0ZUZyb21EYXRhID0gKCkgPT4ge1xuICByZXR1cm4gWycxOTkwJywgJzE5OTEnLCAnMTk5MicsICcxOTkzJ10ubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBrZXksXG4gICAgICBsYWJlbDoga2V5LFxuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBfZ2V0RGF0ZVRvRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIFsnMjAwMCcsICcyMDAxJywgJzIwMDInLCAnMjAwMyddLm1hcChrZXkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToga2V5LFxuICAgICAgbGFiZWw6IGtleSxcbiAgICB9O1xuICB9KTtcbn1cblxuY29uc3QgX2dldEVudGl0eUxpbmtzRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgdHlwZXMgPSBbJ3BsYWNlcycsICdwbGFjZXMnLCAnY29uY2VwdHMnLCAncGVvcGxlJywgJ3Blb3BsZSddO1xuICBjb25zdCBpdGVtcyA9IFsnbWlsYW5vJywgJ3JvbWEnLCAnc3BhemlvJywgJ3JvZG9sZm8tbWFybmEnLCAnYWxpZ2hpZXJvLWJvZXR0aSddO1xuXG4gIHJldHVybiBpdGVtcy5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGtleS5yZXBsYWNlKCctJywgJyAnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGtleSxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIGNvdW50ZXI6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCksXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICdlbnRpdHktdHlwZSc6IHR5cGVzW2luZGV4XVxuICAgICAgfSAgXG4gICAgfVxuICB9KTtcbn0iXX0=