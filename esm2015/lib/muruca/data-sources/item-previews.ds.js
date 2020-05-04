/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/item-previews.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class MrItemPreviewsDS extends DataSource {
    constructor() {
        super(...arguments);
        // ===== MOCK DATA =====
        this.mock = {
            resources: [
                {
                    image: 'https://i.imgur.com/8bNcgR6.png',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                    metadata: [{
                            classes: 'metadata',
                            items: [
                                { label: 'Artista', value: 'Massimo Berruti' },
                                { label: 'Tecnica', value: 'Fotografia' },
                                { label: 'Galleria', value: 'Galleria Tonelli' },
                            ]
                        }]
                }, {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'Yudi Shanhai Quantu',
                    text: 'Complete Map of all mountains and seas',
                }, {
                    image: 'https://i.imgur.com/sLu7u2v.png',
                    title: 'Reconstruction of D\'Elia\'s map',
                    text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
                    metadata: [{
                            classes: 'metadata',
                            items: [
                                { label: 'Artista', value: 'Massimo Berruti' },
                                { label: 'Tecnica', value: 'Fotografia' },
                                { label: 'Galleria', value: 'Galleria Tonelli' },
                            ]
                        }]
                }, {
                    image: 'https://i.imgur.com/8bNcgR6.png',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                }
            ],
            collections: [
                {
                    image: 'https://i.imgur.com/8bNcgR6.png',
                    title: 'Unattributed version',
                    text: 'A japanese colored version',
                }, {
                    image: 'https://i.imgur.com/52UFqca.png',
                    title: 'Yudi Shanhai Quantu',
                    text: 'Complete Map of all mountains and seas',
                }, {
                    image: 'https://i.imgur.com/sLu7u2v.png',
                    title: 'Reconstruction of D\'Elia\'s map',
                    text: 'A digital collage of the map portions from Pasquale D\'Elia "mappamondo"',
                }
            ],
            search: [
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
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return this.mock[this.options.source];
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrItemPreviewsDS.prototype.mock;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3cy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2l0ZW0tcHJldmlld3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7SUFBaEQ7OztRQU9VLFNBQUksR0FBRztZQUNiLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO29CQUNsQyxRQUFRLEVBQUUsQ0FBQzs0QkFDVCxPQUFPLEVBQUUsVUFBVTs0QkFDbkIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7Z0NBQzlDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dDQUN6QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFOzZCQUNqRDt5QkFDRixDQUFDO2lCQUNILEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsa0NBQWtDO29CQUN6QyxJQUFJLEVBQUUsMEVBQTBFO29CQUNoRixRQUFRLEVBQUUsQ0FBQzs0QkFDVCxPQUFPLEVBQUUsVUFBVTs0QkFDbkIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7Z0NBQzlDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dDQUN6QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFOzZCQUNqRDt5QkFDRixDQUFDO2lCQUNILEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkM7YUFDRjtZQUNELFdBQVcsRUFBRTtnQkFDWDtvQkFDRSxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtpQkFDakY7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxzQ0FBc0M7b0JBQzdDLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtpQkFDakYsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSwyQ0FBMkM7b0JBQ2xELElBQUksRUFBRSw0QkFBNEI7aUJBQ25DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtFQUFrRTtvQkFDekUsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxzQ0FBc0M7b0JBQzdDLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtpQkFDakYsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSwyQ0FBMkM7b0JBQ2xELElBQUksRUFBRSw0QkFBNEI7aUJBQ25DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtFQUFrRTtvQkFDekUsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkM7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDOzs7Ozs7O0lBNUdXLFNBQVMsQ0FBQyxJQUFZO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0EwR0Y7Ozs7OztJQXZHQyxnQ0FzR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJJdGVtUHJldmlld3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb2NrW3RoaXMub3B0aW9ucy5zb3VyY2VdO1xuICB9XG5cbiAgLy8gPT09PT0gTU9DSyBEQVRBID09PT09XG4gIHByaXZhdGUgbW9jayA9IHtcbiAgICByZXNvdXJjZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzhiTmNnUjYucG5nJyxcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICAgIG1ldGFkYXRhOiBbe1xuICAgICAgICAgIGNsYXNzZXM6ICdtZXRhZGF0YScsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdBcnRpc3RhJywgdmFsdWU6ICdNYXNzaW1vIEJlcnJ1dGknIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnVGVjbmljYScsIHZhbHVlOiAnRm90b2dyYWZpYScgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdHYWxsZXJpYScsIHZhbHVlOiAnR2FsbGVyaWEgVG9uZWxsaScgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9zTHU3dTJ2LnBuZycsXG4gICAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXG4gICAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxuICAgICAgICBtZXRhZGF0YTogW3tcbiAgICAgICAgICBjbGFzc2VzOiAnbWV0YWRhdGEnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnQXJ0aXN0YScsIHZhbHVlOiAnTWFzc2ltbyBCZXJydXRpJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ1RlY25pY2EnLCB2YWx1ZTogJ0ZvdG9ncmFmaWEnIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnR2FsbGVyaWEnLCB2YWx1ZTogJ0dhbGxlcmlhIFRvbmVsbGknIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vOGJOY2dSNi5wbmcnLFxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbGxlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS84Yk5jZ1I2LnBuZycsXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vc0x1N3Uydi5wbmcnLFxuICAgICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxuICAgICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcbiAgICAgIH1cbiAgICBdLFxuICAgIHNlYXJjaDogW1xuICAgICAge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgICB0aXRsZTogJ1dvcmxkIE1hcCBiYXNlZCBvbiBNYXR0ZW8gUmljY2kgMTg1MCcsXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgZm8gYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcbiAgICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdNYXR0ZW8gUmljY2lcXCdzIHdheSBmcm9tIE1hY2F1IHRvIEJlaWppbmcnLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnVGhlIDQwMC15ZWFyLW9sZCBtYXAgdGhhdCBzaG93cyBDaGluYSBhcyB0aGUgY2VudHJlIG9mIHRoZSB3b3JsZCcsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICAgIHRpdGxlOiAnV29ybGQgTWFwIGJhc2VkIG9uIE1hdHRlbyBSaWNjaSAxODUwJyxcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBmbyBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxuICAgICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ01hdHRlbyBSaWNjaVxcJ3Mgd2F5IGZyb20gTWFjYXUgdG8gQmVpamluZycsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdUaGUgNDAwLXllYXItb2xkIG1hcCB0aGF0IHNob3dzIENoaW5hIGFzIHRoZSBjZW50cmUgb2YgdGhlIHdvcmxkJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cbiJdfQ==