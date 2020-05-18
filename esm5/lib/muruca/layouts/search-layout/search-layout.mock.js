/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import searchFacets from './search-facets.config';
/**
 * @return {?}
 */
function getHeaders() {
    /** @type {?} */
    var headers = {};
    searchFacets.sections.forEach((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVsRCxTQUFTLFVBQVU7O1FBQ1gsT0FBTyxHQUFHLEVBQUU7SUFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQyxFQUFVO1lBQVIsa0JBQU07UUFDckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRDs7Ozs7QUFBZSxVQUFDLElBQUksRUFBRSxJQUFJLElBQUssT0FBQSxDQUFDO0lBQzlCLElBQUksTUFBQTtJQUNKLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDNUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUU7SUFDckIsT0FBTyxFQUFFO1FBQ1A7WUFDRSxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLHdDQUF3QztTQUMvQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxLQUFLLEVBQUUsc0NBQXNDO1lBQzdDLElBQUksRUFBRSx3Q0FBd0M7U0FDL0MsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsMEVBQTBFO1NBQ2pGLEVBQUU7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsSUFBSSxFQUFFLDRCQUE0QjtTQUNuQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsMkNBQTJDO1lBQ2xELElBQUksRUFBRSw0QkFBNEI7U0FDbkMsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxJQUFJLEVBQUUsNEJBQTRCO1NBQ25DLEVBQUU7WUFDRCxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLHdDQUF3QztTQUMvQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxLQUFLLEVBQUUsc0NBQXNDO1lBQzdDLElBQUksRUFBRSx3Q0FBd0M7U0FDL0MsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsMEVBQTBFO1NBQ2pGLEVBQUU7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsSUFBSSxFQUFFLDRCQUE0QjtTQUNuQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsMkNBQTJDO1lBQ2xELElBQUksRUFBRSw0QkFBNEI7U0FDbkMsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxJQUFJLEVBQUUsNEJBQTRCO1NBQ25DO0tBQ0Y7Q0FDRixDQUFDLEVBeEQ2QixDQXdEN0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZWFyY2hGYWNldHMgZnJvbSAnLi9zZWFyY2gtZmFjZXRzLmNvbmZpZyc7XG5cbmZ1bmN0aW9uIGdldEhlYWRlcnMoKSB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgc2VhcmNoRmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyIH0pID0+IHtcbiAgICBoZWFkZXJzW2hlYWRlci5pZF0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICB9KTtcbiAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwYWdlLCBzb3J0KSA9PiAoe1xuICBzb3J0LFxuICB0b3RhbENvdW50OiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgcGFnZTogeyBjdXJyZW50OiBwYWdlLCBsaW1pdDogMTAgfSxcbiAgaGVhZGVyczogZ2V0SGVhZGVycygpLFxuICByZXN1bHRzOiBbXG4gICAge1xuICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXG4gICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICB0aXRsZTogJ1dvcmxkIE1hcCBiYXNlZCBvbiBNYXR0ZW8gUmljY2kgMTg1MCcsXG4gICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIGZvIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXG4gICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcbiAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdNYXR0ZW8gUmljY2lcXCdzIHdheSBmcm9tIE1hY2F1IHRvIEJlaWppbmcnLFxuICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ1RoZSA0MDAteWVhci1vbGQgbWFwIHRoYXQgc2hvd3MgQ2hpbmEgYXMgdGhlIGNlbnRyZSBvZiB0aGUgd29ybGQnLFxuICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcbiAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgIHRpdGxlOiAnV29ybGQgTWFwIGJhc2VkIG9uIE1hdHRlbyBSaWNjaSAxODUwJyxcbiAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgZm8gYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcbiAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxuICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ01hdHRlbyBSaWNjaVxcJ3Mgd2F5IGZyb20gTWFjYXUgdG8gQmVpamluZycsXG4gICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnVGhlIDQwMC15ZWFyLW9sZCBtYXAgdGhhdCBzaG93cyBDaGluYSBhcyB0aGUgY2VudHJlIG9mIHRoZSB3b3JsZCcsXG4gICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgIH1cbiAgXVxufSk7XG4iXX0=