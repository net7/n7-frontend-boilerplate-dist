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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3cy5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9kYXRhLXNvdXJjZXMvaXRlbS1wcmV2aWV3cy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7SUFBaEQ7O1FBTUUsd0JBQXdCO1FBQ2hCLFNBQUksR0FBRztZQUNiLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO29CQUNsQyxRQUFRLEVBQUUsQ0FBQzs0QkFDVCxPQUFPLEVBQUUsVUFBVTs0QkFDbkIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7Z0NBQzlDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dDQUN6QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFOzZCQUNqRDt5QkFDRixDQUFDO2lCQUNILEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLHdDQUF3QztpQkFDL0MsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsa0NBQWtDO29CQUN6QyxJQUFJLEVBQUUsMEVBQTBFO29CQUNoRixRQUFRLEVBQUUsQ0FBQzs0QkFDVCxPQUFPLEVBQUUsVUFBVTs0QkFDbkIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7Z0NBQzlDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dDQUN6QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFOzZCQUNqRDt5QkFDRixDQUFDO2lCQUNILEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkM7YUFDRjtZQUNELFdBQVcsRUFBRTtnQkFDWDtvQkFDRSxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlDQUFpQztvQkFDeEMsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtpQkFDakY7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxzQ0FBc0M7b0JBQzdDLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtpQkFDakYsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSwyQ0FBMkM7b0JBQ2xELElBQUksRUFBRSw0QkFBNEI7aUJBQ25DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtFQUFrRTtvQkFDekUsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsd0NBQXdDO2lCQUMvQyxFQUFFO29CQUNELEtBQUssRUFBRSxpQ0FBaUM7b0JBQ3hDLEtBQUssRUFBRSxzQ0FBc0M7b0JBQzdDLElBQUksRUFBRSx3Q0FBd0M7aUJBQy9DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtDQUFrQztvQkFDekMsSUFBSSxFQUFFLDBFQUEwRTtpQkFDakYsRUFBRTtvQkFDRCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQyxFQUFFO29CQUNELEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSwyQ0FBMkM7b0JBQ2xELElBQUksRUFBRSw0QkFBNEI7aUJBQ25DLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLGtFQUFrRTtvQkFDekUsSUFBSSxFQUFFLDRCQUE0QjtpQkFDbkM7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBN0dDLDZEQUE2RDtJQUNuRCxTQUFTLENBQUMsSUFBWTtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBMEdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckl0ZW1QcmV2aWV3c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm1vY2tbdGhpcy5vcHRpb25zLnNvdXJjZV07XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PSBNT0NLIERBVEEgPT09PT1cclxuICBwcml2YXRlIG1vY2sgPSB7XHJcbiAgICByZXNvdXJjZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS84Yk5jZ1I2LnBuZycsXHJcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXHJcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcclxuICAgICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICAgIGNsYXNzZXM6ICdtZXRhZGF0YScsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IGxhYmVsOiAnQXJ0aXN0YScsIHZhbHVlOiAnTWFzc2ltbyBCZXJydXRpJyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnVGVjbmljYScsIHZhbHVlOiAnRm90b2dyYWZpYScgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0dhbGxlcmlhJywgdmFsdWU6ICdHYWxsZXJpYSBUb25lbGxpJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnWXVkaSBTaGFuaGFpIFF1YW50dScsXHJcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBvZiBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9zTHU3dTJ2LnBuZycsXHJcbiAgICAgICAgdGl0bGU6ICdSZWNvbnN0cnVjdGlvbiBvZiBEXFwnRWxpYVxcJ3MgbWFwJyxcclxuICAgICAgICB0ZXh0OiAnQSBkaWdpdGFsIGNvbGxhZ2Ugb2YgdGhlIG1hcCBwb3J0aW9ucyBmcm9tIFBhc3F1YWxlIERcXCdFbGlhIFwibWFwcGFtb25kb1wiJyxcclxuICAgICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICAgIGNsYXNzZXM6ICdtZXRhZGF0YScsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IGxhYmVsOiAnQXJ0aXN0YScsIHZhbHVlOiAnTWFzc2ltbyBCZXJydXRpJyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnVGVjbmljYScsIHZhbHVlOiAnRm90b2dyYWZpYScgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0dhbGxlcmlhJywgdmFsdWU6ICdHYWxsZXJpYSBUb25lbGxpJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vOGJOY2dSNi5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxyXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBjb2xsZWN0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzhiTmNnUjYucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1VuYXR0cmlidXRlZCB2ZXJzaW9uJyxcclxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxyXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vc0x1N3Uydi5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXHJcbiAgICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBzZWFyY2g6IFtcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS81MlVGcWNhLnBuZycsXHJcbiAgICAgICAgdGl0bGU6ICdZdWRpIFNoYW5oYWkgUXVhbnR1JyxcclxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIG9mIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1dvcmxkIE1hcCBiYXNlZCBvbiBNYXR0ZW8gUmljY2kgMTg1MCcsXHJcbiAgICAgICAgdGV4dDogJ0NvbXBsZXRlIE1hcCBmbyBhbGwgbW91bnRhaW5zIGFuZCBzZWFzJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICB0aXRsZTogJ1JlY29uc3RydWN0aW9uIG9mIERcXCdFbGlhXFwncyBtYXAnLFxyXG4gICAgICAgIHRleHQ6ICdBIGRpZ2l0YWwgY29sbGFnZSBvZiB0aGUgbWFwIHBvcnRpb25zIGZyb20gUGFzcXVhbGUgRFxcJ0VsaWEgXCJtYXBwYW1vbmRvXCInLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnVW5hdHRyaWJ1dGVkIHZlcnNpb24nLFxyXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgdGl0bGU6ICdNYXR0ZW8gUmljY2lcXCdzIHdheSBmcm9tIE1hY2F1IHRvIEJlaWppbmcnLFxyXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgdGl0bGU6ICdUaGUgNDAwLXllYXItb2xkIG1hcCB0aGF0IHNob3dzIENoaW5hIGFzIHRoZSBjZW50cmUgb2YgdGhlIHdvcmxkJyxcclxuICAgICAgICB0ZXh0OiAnQSBqYXBhbmVzZSBjb2xvcmVkIHZlcnNpb24nLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tLzUyVUZxY2EucG5nJyxcclxuICAgICAgICB0aXRsZTogJ1l1ZGkgU2hhbmhhaSBRdWFudHUnLFxyXG4gICAgICAgIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNTJVRnFjYS5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnV29ybGQgTWFwIGJhc2VkIG9uIE1hdHRlbyBSaWNjaSAxODUwJyxcclxuICAgICAgICB0ZXh0OiAnQ29tcGxldGUgTWFwIGZvIGFsbCBtb3VudGFpbnMgYW5kIHNlYXMnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnUmVjb25zdHJ1Y3Rpb24gb2YgRFxcJ0VsaWFcXCdzIG1hcCcsXHJcbiAgICAgICAgdGV4dDogJ0EgZGlnaXRhbCBjb2xsYWdlIG9mIHRoZSBtYXAgcG9ydGlvbnMgZnJvbSBQYXNxdWFsZSBEXFwnRWxpYSBcIm1hcHBhbW9uZG9cIicsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgdGl0bGU6ICdVbmF0dHJpYnV0ZWQgdmVyc2lvbicsXHJcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICB0aXRsZTogJ01hdHRlbyBSaWNjaVxcJ3Mgd2F5IGZyb20gTWFjYXUgdG8gQmVpamluZycsXHJcbiAgICAgICAgdGV4dDogJ0EgamFwYW5lc2UgY29sb3JlZCB2ZXJzaW9uJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGltYWdlOiAnJyxcclxuICAgICAgICB0aXRsZTogJ1RoZSA0MDAteWVhci1vbGQgbWFwIHRoYXQgc2hvd3MgQ2hpbmEgYXMgdGhlIGNlbnRyZSBvZiB0aGUgd29ybGQnLFxyXG4gICAgICAgIHRleHQ6ICdBIGphcGFuZXNlIGNvbG9yZWQgdmVyc2lvbicsXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIl19