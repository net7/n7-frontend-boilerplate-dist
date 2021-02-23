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
    transform(data) {
        return this.mock[this.options.source];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3cy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2l0ZW0tcHJldmlld3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUFVO0lBQWhEOztRQU1FLHdCQUF3QjtRQUNoQixTQUFJLEdBQUc7WUFDYixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtvQkFDbEMsUUFBUSxFQUFFLENBQUM7NEJBQ1QsT0FBTyxFQUFFLFVBQVU7NEJBQ25CLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2dDQUM5QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQ0FDekMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTs2QkFDakQ7eUJBQ0YsQ0FBQztpQkFDSCxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtvQkFDaEYsUUFBUSxFQUFFLENBQUM7NEJBQ1QsT0FBTyxFQUFFLFVBQVU7NEJBQ25CLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2dDQUM5QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQ0FDekMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTs2QkFDakQ7eUJBQ0YsQ0FBQztpQkFDSCxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DO2FBQ0Y7WUFDRCxXQUFXLEVBQUU7Z0JBQ1g7b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0NBQXNDO29CQUM3QyxJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsMkNBQTJDO29CQUNsRCxJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrRUFBa0U7b0JBQ3pFLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0NBQXNDO29CQUM3QyxJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsMkNBQTJDO29CQUNsRCxJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrRUFBa0U7b0JBQ3pFLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DO2FBQ0Y7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQTdHQyw2REFBNkQ7SUFDbkQsU0FBUyxDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQTBHRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJdGVtUHJldmlld3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2NrW3RoaXMub3B0aW9ucy5zb3VyY2VdO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT0gTU9DSyBEQVRBID09PT09XHJcbiAgcHJpdmF0ZSBtb2NrID0ge1xyXG4gICAgcmVzb3VyY2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vOGJOY2dSNi5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxyXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXHJcbiAgICAgICAgbWV0YWRhdGE6IFt7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnbWV0YWRhdGEnLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0FydGlzdGEnLCB2YWx1ZTogJ01hc3NpbW8gQmVycnV0aScgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ1RlY25pY2EnLCB2YWx1ZTogJ0ZvdG9ncmFmaWEnIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdHYWxsZXJpYScsIHZhbHVlOiAnR2FsbGVyaWEgVG9uZWxsaScgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9XVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxyXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vc0x1N3Uydi5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXHJcbiAgICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXHJcbiAgICAgICAgbWV0YWRhdGE6IFt7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnbWV0YWRhdGEnLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0FydGlzdGEnLCB2YWx1ZTogJ01hc3NpbW8gQmVycnV0aScgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ1RlY25pY2EnLCB2YWx1ZTogJ0ZvdG9ncmFmaWEnIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdHYWxsZXJpYScsIHZhbHVlOiAnR2FsbGVyaWEgVG9uZWxsaScgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9XVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzhiTmNnUjYucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcclxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgY29sbGVjdGlvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS84Yk5jZ1I2LnBuZycsXHJcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXHJcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXHJcbiAgICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcclxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tL3NMdTd1MnYucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxyXG4gICAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgc2VhcmNoOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXHJcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXHJcbiAgICAgICAgdGl0bGU6ICdXb3JsZCBNYXAgYmFzZWQgb24gTWF0dGVvIFJpY2NpIDE4NTAnLFxyXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgZm8gYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcclxuICAgICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcclxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWF0dGVvIFJpY2NpXFwncyB3YXkgZnJvbSBNYWNhdSB0byBCZWlqaW5nJyxcclxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnVGhlIDQwMC15ZWFyLW9sZCBtYXAgdGhhdCBzaG93cyBDaGluYSBhcyB0aGUgY2VudHJlIG9mIHRoZSB3b3JsZCcsXHJcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXHJcbiAgICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcclxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1dvcmxkIE1hcCBiYXNlZCBvbiBNYXR0ZW8gUmljY2kgMTg1MCcsXHJcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBmbyBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxyXG4gICAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxyXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgdGl0bGU6ICdNYXR0ZW8gUmljY2lcXCdzIHdheSBmcm9tIE1hY2F1IHRvIEJlaWppbmcnLFxyXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgdGl0bGU6ICdUaGUgNDAwLXllYXItb2xkIG1hcCB0aGF0IHNob3dzIENoaW5hIGFzIHRoZSBjZW50cmUgb2YgdGhlIHdvcmxkJyxcclxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiJdfQ==