/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import config from './search-config.mock';
/**
 * @return {?}
 */
function getHeaders() {
    /** @type {?} */
    var headers = {};
    config.facets.sections.forEach((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var header = _a.header;
        headers[header.id] = Math.round(Math.random() * 100);
    }));
    return headers;
}
export default (/**
 * @param {?} page
 * @param {?} sort
 * @return {?}
 */
function (page, sort) { return ({
    sort: sort,
    totalCount: Math.round(Math.random() * 1000),
    page: { current: page, limit: 10 },
    headers: getHeaders(),
    results: [
        {
            image: 'https://i.imgur.com/52UFqca.png',
            title: 'Yudi Shanhai Quantu',
            text: 'Complete Map of all mountains and seas',
        }, {
            image: 'https://i.imgur.com/52UFqca.png',
            title: 'World Map based on Matteo Ricci 1850',
            text: 'Complete Map fo all mountains and seas',
        }, {
            image: '',
            title: 'Reconstruction of D\'Elia\'s map',
            text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
        }, {
            image: '',
            title: 'Unattributed version',
            text: 'A japanese colored version',
        }, {
            image: '',
            title: 'Matteo Ricci\'s way from Macau to Beijing',
            text: 'A japanese colored version',
        }, {
            image: '',
            title: 'The 400-year-old map that shows China as the centre of the world',
            text: 'A japanese colored version',
        }, {
            image: 'https://i.imgur.com/52UFqca.png',
            title: 'Yudi Shanhai Quantu',
            text: 'Complete Map of all mountains and seas',
        }, {
            image: 'https://i.imgur.com/52UFqca.png',
            title: 'World Map based on Matteo Ricci 1850',
            text: 'Complete Map fo all mountains and seas',
        }, {
            image: '',
            title: 'Reconstruction of D\'Elia\'s map',
            text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
        }, {
            image: '',
            title: 'Unattributed version',
            text: 'A japanese colored version',
        }, {
            image: '',
            title: 'Matteo Ricci\'s way from Macau to Beijing',
            text: 'A japanese colored version',
        }, {
            image: '',
            title: 'The 400-year-old map that shows China as the centre of the world',
            text: 'A japanese colored version',
        }
    ]
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1yZXN1bHRzLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBRTFDLFNBQVMsVUFBVTs7UUFDWCxPQUFPLEdBQUcsRUFBRTtJQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQyxFQUFVO1lBQVIsa0JBQU07UUFDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRDs7Ozs7QUFBZSxVQUFDLElBQUksRUFBRSxJQUFJLElBQUssT0FBQSxDQUFDO0lBQzlCLElBQUksTUFBQTtJQUNKLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDNUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUU7SUFDckIsT0FBTyxFQUFFO1FBQ1A7WUFDRSxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLHdDQUF3QztTQUMvQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxLQUFLLEVBQUUsc0NBQXNDO1lBQzdDLElBQUksRUFBRSx3Q0FBd0M7U0FDL0MsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsMEVBQTBFO1NBQ2pGLEVBQUU7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsSUFBSSxFQUFFLDRCQUE0QjtTQUNuQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsMkNBQTJDO1lBQ2xELElBQUksRUFBRSw0QkFBNEI7U0FDbkMsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxJQUFJLEVBQUUsNEJBQTRCO1NBQ25DLEVBQUU7WUFDRCxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLHdDQUF3QztTQUMvQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxLQUFLLEVBQUUsc0NBQXNDO1lBQzdDLElBQUksRUFBRSx3Q0FBd0M7U0FDL0MsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsMEVBQTBFO1NBQ2pGLEVBQUU7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsSUFBSSxFQUFFLDRCQUE0QjtTQUNuQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsMkNBQTJDO1lBQ2xELElBQUksRUFBRSw0QkFBNEI7U0FDbkMsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxJQUFJLEVBQUUsNEJBQTRCO1NBQ25DO0tBQ0Y7Q0FDRixDQUFDLEVBeEQ2QixDQXdEN0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9zZWFyY2gtY29uZmlnLm1vY2snO1xuXG5mdW5jdGlvbiBnZXRIZWFkZXJzKCkge1xuICBjb25zdCBoZWFkZXJzID0ge307XG4gIGNvbmZpZy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIgfSkgPT4ge1xuICAgIGhlYWRlcnNbaGVhZGVyLmlkXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gIH0pO1xuICByZXR1cm4gaGVhZGVycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHBhZ2UsIHNvcnQpID0+ICh7XG4gIHNvcnQsXG4gIHRvdGFsQ291bnQ6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApLFxuICBwYWdlOiB7IGN1cnJlbnQ6IHBhZ2UsIGxpbWl0OiAxMCB9LFxuICBoZWFkZXJzOiBnZXRIZWFkZXJzKCksXG4gIHJlc3VsdHM6IFtcbiAgICB7XG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcbiAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgIHRpdGxlOiAnV29ybGQgTWFwIGJhc2VkIG9uIE1hdHRlbyBSaWNjaSAxODUwJyxcbiAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgZm8gYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcbiAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxuICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ01hdHRlbyBSaWNjaVxcJ3Mgd2F5IGZyb20gTWFjYXUgdG8gQmVpamluZycsXG4gICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnVGhlIDQwMC15ZWFyLW9sZCBtYXAgdGhhdCBzaG93cyBDaGluYSBhcyB0aGUgY2VudHJlIG9mIHRoZSB3b3JsZCcsXG4gICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxuICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgdGl0bGU6ICdXb3JsZCBNYXAgYmFzZWQgb24gTWF0dGVvIFJpY2NpIDE4NTAnLFxuICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBmbyBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxuICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXG4gICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnTWF0dGVvIFJpY2NpXFwncyB3YXkgZnJvbSBNYWNhdSB0byBCZWlqaW5nJyxcbiAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdUaGUgNDAwLXllYXItb2xkIG1hcCB0aGF0IHNob3dzIENoaW5hIGFzIHRoZSBjZW50cmUgb2YgdGhlIHdvcmxkJyxcbiAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgfVxuICBdXG59KTtcbiJdfQ==