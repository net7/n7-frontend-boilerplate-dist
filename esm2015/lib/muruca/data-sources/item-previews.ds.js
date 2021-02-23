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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3cy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2l0ZW0tcHJldmlld3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUFVO0lBQWhEOztRQU1FLHdCQUF3QjtRQUNoQixTQUFJLEdBQUc7WUFDYixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtvQkFDbEMsUUFBUSxFQUFFLENBQUM7NEJBQ1QsT0FBTyxFQUFFLFVBQVU7NEJBQ25CLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2dDQUM5QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQ0FDekMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTs2QkFDakQ7eUJBQ0YsQ0FBQztpQkFDSCxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtvQkFDaEYsUUFBUSxFQUFFLENBQUM7NEJBQ1QsT0FBTyxFQUFFLFVBQVU7NEJBQ25CLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2dDQUM5QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQ0FDekMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTs2QkFDakQ7eUJBQ0YsQ0FBQztpQkFDSCxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxzQkFBc0I7b0JBQzdCLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DO2FBQ0Y7WUFDRCxXQUFXLEVBQUU7Z0JBQ1g7b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0NBQXNDO29CQUM3QyxJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsMkNBQTJDO29CQUNsRCxJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrRUFBa0U7b0JBQ3pFLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0NBQXNDO29CQUM3QyxJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrQ0FBa0M7b0JBQ3pDLElBQUksRUFBRSwwRUFBMEU7aUJBQ2pGLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsMkNBQTJDO29CQUNsRCxJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxrRUFBa0U7b0JBQ3pFLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DO2FBQ0Y7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQTdHQyw2REFBNkQ7SUFDbkQsU0FBUyxDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQTBHRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNckl0ZW1QcmV2aWV3c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vY2tbdGhpcy5vcHRpb25zLnNvdXJjZV07XG4gIH1cblxuICAvLyA9PT09PSBNT0NLIERBVEEgPT09PT1cbiAgcHJpdmF0ZSBtb2NrID0ge1xuICAgIHJlc291cmNlczogW1xuICAgICAge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vOGJOY2dSNi5wbmcnLFxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgICAgY2xhc3NlczogJ21ldGFkYXRhJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogJ0FydGlzdGEnLCB2YWx1ZTogJ01hc3NpbW8gQmVycnV0aScgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdUZWNuaWNhJywgdmFsdWU6ICdGb3RvZ3JhZmlhJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0dhbGxlcmlhJywgdmFsdWU6ICdHYWxsZXJpYSBUb25lbGxpJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tL3NMdTd1MnYucG5nJyxcbiAgICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcbiAgICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXG4gICAgICAgIG1ldGFkYXRhOiBbe1xuICAgICAgICAgIGNsYXNzZXM6ICdtZXRhZGF0YScsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdBcnRpc3RhJywgdmFsdWU6ICdNYXNzaW1vIEJlcnJ1dGknIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnVGVjbmljYScsIHZhbHVlOiAnRm90b2dyYWZpYScgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdHYWxsZXJpYScsIHZhbHVlOiAnR2FsbGVyaWEgVG9uZWxsaScgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1dXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS84Yk5jZ1I2LnBuZycsXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfVxuICAgIF0sXG4gICAgY29sbGVjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzhiTmNnUjYucG5nJyxcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9zTHU3dTJ2LnBuZycsXG4gICAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXG4gICAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxuICAgICAgfVxuICAgIF0sXG4gICAgc2VhcmNoOiBbXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXG4gICAgICAgIHRpdGxlOiAnV29ybGQgTWFwIGJhc2VkIG9uIE1hdHRlbyBSaWNjaSAxODUwJyxcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBmbyBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxuICAgICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ01hdHRlbyBSaWNjaVxcJ3Mgd2F5IGZyb20gTWFjYXUgdG8gQmVpamluZycsXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdUaGUgNDAwLXllYXItb2xkIG1hcCB0aGF0IHNob3dzIENoaW5hIGFzIHRoZSBjZW50cmUgb2YgdGhlIHdvcmxkJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcbiAgICAgICAgdGl0bGU6ICdXb3JsZCBNYXAgYmFzZWQgb24gTWF0dGVvIFJpY2NpIDE4NTAnLFxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIGZvIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXG4gICAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfSwge1xuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRpdGxlOiAnTWF0dGVvIFJpY2NpXFwncyB3YXkgZnJvbSBNYWNhdSB0byBCZWlqaW5nJyxcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0aXRsZTogJ1RoZSA0MDAteWVhci1vbGQgbWFwIHRoYXQgc2hvd3MgQ2hpbmEgYXMgdGhlIGNlbnRyZSBvZiB0aGUgd29ybGQnLFxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuIl19