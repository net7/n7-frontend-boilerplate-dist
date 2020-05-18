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
    const headers = {};
    searchFacets.sections.forEach((/**
     * @param {?} __0
     * @return {?}
     */
    ({ header }) => {
        headers[header.id] = Math.round(Math.random() * 100);
    }));
    return headers;
}
export default (/**
 * @param {?} page
 * @param {?} sort
 * @return {?}
 */
(page, sort) => ({
    sort,
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
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVsRCxTQUFTLFVBQVU7O1VBQ1gsT0FBTyxHQUFHLEVBQUU7SUFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O0lBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRDs7Ozs7QUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUIsSUFBSTtJQUNKLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDNUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUU7SUFDckIsT0FBTyxFQUFFO1FBQ1A7WUFDRSxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLHdDQUF3QztTQUMvQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxLQUFLLEVBQUUsc0NBQXNDO1lBQzdDLElBQUksRUFBRSx3Q0FBd0M7U0FDL0MsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsMEVBQTBFO1NBQ2pGLEVBQUU7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsSUFBSSxFQUFFLDRCQUE0QjtTQUNuQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsMkNBQTJDO1lBQ2xELElBQUksRUFBRSw0QkFBNEI7U0FDbkMsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxJQUFJLEVBQUUsNEJBQTRCO1NBQ25DLEVBQUU7WUFDRCxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLHdDQUF3QztTQUMvQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLGlDQUFpQztZQUN4QyxLQUFLLEVBQUUsc0NBQXNDO1lBQzdDLElBQUksRUFBRSx3Q0FBd0M7U0FDL0MsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsMEVBQTBFO1NBQ2pGLEVBQUU7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsSUFBSSxFQUFFLDRCQUE0QjtTQUNuQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsMkNBQTJDO1lBQ2xELElBQUksRUFBRSw0QkFBNEI7U0FDbkMsRUFBRTtZQUNELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxJQUFJLEVBQUUsNEJBQTRCO1NBQ25DO0tBQ0Y7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VhcmNoRmFjZXRzIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuXG5mdW5jdGlvbiBnZXRIZWFkZXJzKCkge1xuICBjb25zdCBoZWFkZXJzID0ge307XG4gIHNlYXJjaEZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciB9KSA9PiB7XG4gICAgaGVhZGVyc1toZWFkZXIuaWRdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgfSk7XG4gIHJldHVybiBoZWFkZXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCAocGFnZSwgc29ydCkgPT4gKHtcbiAgc29ydCxcbiAgdG90YWxDb3VudDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMCksXG4gIHBhZ2U6IHsgY3VycmVudDogcGFnZSwgbGltaXQ6IDEwIH0sXG4gIGhlYWRlcnM6IGdldEhlYWRlcnMoKSxcbiAgcmVzdWx0czogW1xuICAgIHtcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxuICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgdGl0bGU6ICdXb3JsZCBNYXAgYmFzZWQgb24gTWF0dGVvIFJpY2NpIDE4NTAnLFxuICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBmbyBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxuICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXG4gICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnTWF0dGVvIFJpY2NpXFwncyB3YXkgZnJvbSBNYWNhdSB0byBCZWlqaW5nJyxcbiAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdUaGUgNDAwLXllYXItb2xkIG1hcCB0aGF0IHNob3dzIENoaW5hIGFzIHRoZSBjZW50cmUgb2YgdGhlIHdvcmxkJyxcbiAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXG4gICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICB0aXRsZTogJ1dvcmxkIE1hcCBiYXNlZCBvbiBNYXR0ZW8gUmljY2kgMTg1MCcsXG4gICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIGZvIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgIH0sIHtcbiAgICAgIGltYWdlOiAnJyxcbiAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXG4gICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcbiAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgfSwge1xuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgdGl0bGU6ICdNYXR0ZW8gUmljY2lcXCdzIHdheSBmcm9tIE1hY2F1IHRvIEJlaWppbmcnLFxuICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICB9LCB7XG4gICAgICBpbWFnZTogJycsXG4gICAgICB0aXRsZTogJ1RoZSA0MDAteWVhci1vbGQgbWFwIHRoYXQgc2hvd3MgQ2hpbmEgYXMgdGhlIGNlbnRyZSBvZiB0aGUgd29ybGQnLFxuICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICB9XG4gIF1cbn0pO1xuIl19