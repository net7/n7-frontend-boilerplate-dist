/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/item-previews.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrItemPreviewsDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrItemPreviewsDS, _super);
    function MrItemPreviewsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ===== MOCK DATA =====
        _this.mock = {
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
        return _this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrItemPreviewsDS.prototype.transform = 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.mock[this.options.source];
    };
    return MrItemPreviewsDS;
}(DataSource));
export { MrItemPreviewsDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrItemPreviewsDS.prototype.mock;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3cy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2l0ZW0tcHJldmlld3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXNDLDRDQUFVO0lBQWhEO1FBQUEscUVBOEdDOztRQXZHUyxVQUFJLEdBQUc7WUFDYixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtvQkFDbEMsUUFBUSxFQUFFLENBQUM7NEJBQ1QsT0FBTyxFQUFFLFVBQVU7NEJBQ25CLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2dDQUM5QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQ0FDekMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTs2QkFDakQ7eUJBQ0YsQ0FBQztpQkFDSCxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtvQkFDaEYsUUFBUSxFQUFFLENBQUM7NEJBQ1QsT0FBTyxFQUFFLFVBQVU7NEJBQ25CLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2dDQUM5QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQ0FDekMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTs2QkFDakQ7eUJBQ0YsQ0FBQztpQkFDSCxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DO2FBQ0Y7WUFDRCxXQUFXLEVBQUU7Z0JBQ1g7b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0NBQXNDO29CQUM3QyxJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsMkNBQTJDO29CQUNsRCxJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrRUFBa0U7b0JBQ3pFLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0NBQXNDO29CQUM3QyxJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsMkNBQTJDO29CQUNsRCxJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrRUFBa0U7b0JBQ3pFLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DO2FBQ0Y7U0FDRixDQUFBOztJQUNILENBQUM7SUE3R0MsNkRBQTZEOzs7Ozs7O0lBQ25ELG9DQUFTOzs7Ozs7O0lBQW5CLFVBQW9CLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQTBHSCx1QkFBQztBQUFELENBQUMsQUE5R0QsQ0FBc0MsVUFBVSxHQThHL0M7Ozs7Ozs7SUF2R0MsZ0NBc0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ySXRlbVByZXZpZXdzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubW9ja1t0aGlzLm9wdGlvbnMuc291cmNlXTtcbiAgfVxuXG4gIC8vID09PT09IE1PQ0sgREFUQSA9PT09PVxuICBwcml2YXRlIG1vY2sgPSB7XG4gICAgcmVzb3VyY2VzOiBbXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS84Yk5jZ1I2LnBuZycsXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgICBtZXRhZGF0YTogW3tcbiAgICAgICAgICBjbGFzc2VzOiAnbWV0YWRhdGEnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnQXJ0aXN0YScsIHZhbHVlOiAnTWFzc2ltbyBCZXJydXRpJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ1RlY25pY2EnLCB2YWx1ZTogJ0ZvdG9ncmFmaWEnIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnR2FsbGVyaWEnLCB2YWx1ZTogJ0dhbGxlcmlhIFRvbmVsbGknIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vc0x1N3Uydi5wbmcnLFxuICAgICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxuICAgICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcbiAgICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgICAgY2xhc3NlczogJ21ldGFkYXRhJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogJ0FydGlzdGEnLCB2YWx1ZTogJ01hc3NpbW8gQmVycnV0aScgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdUZWNuaWNhJywgdmFsdWU6ICdGb3RvZ3JhZmlhJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0dhbGxlcmlhJywgdmFsdWU6ICdHYWxsZXJpYSBUb25lbGxpJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzhiTmNnUjYucG5nJyxcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9XG4gICAgXSxcbiAgICBjb2xsZWN0aW9uczogW1xuICAgICAge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vOGJOY2dSNi5wbmcnLFxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tL3NMdTd1MnYucG5nJyxcbiAgICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcbiAgICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXG4gICAgICB9XG4gICAgXSxcbiAgICBzZWFyY2g6IFtcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgICAgdGl0bGU6ICdXb3JsZCBNYXAgYmFzZWQgb24gTWF0dGVvIFJpY2NpIDE4NTAnLFxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIGZvIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXG4gICAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnTWF0dGVvIFJpY2NpXFwncyB3YXkgZnJvbSBNYWNhdSB0byBCZWlqaW5nJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ1RoZSA0MDAteWVhci1vbGQgbWFwIHRoYXQgc2hvd3MgQ2hpbmEgYXMgdGhlIGNlbnRyZSBvZiB0aGUgd29ybGQnLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxuICAgICAgICB0aXRsZTogJ1dvcmxkIE1hcCBiYXNlZCBvbiBNYXR0ZW8gUmljY2kgMTg1MCcsXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgZm8gYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcbiAgICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdNYXR0ZW8gUmljY2lcXCdzIHdheSBmcm9tIE1hY2F1IHRvIEJlaWppbmcnLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnVGhlIDQwMC15ZWFyLW9sZCBtYXAgdGhhdCBzaG93cyBDaGluYSBhcyB0aGUgY2VudHJlIG9mIHRoZSB3b3JsZCcsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9XG4gICAgXVxuICB9XG59XG4iXX0=