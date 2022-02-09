import { EventHandler } from '@n7-frontend/core';
export class SbImageViewerToolsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-tools.click':
                    if (payload.thumbindex !== undefined) {
                        const index = payload.thumbindex;
                        this.dataSource.handleThumbs(index);
                        this.emitOuter('thumbclick', index);
                        break;
                    }
                    if (payload === 'close-description') {
                        this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-description') {
                        this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-thumbs') {
                        this.dataSource.toggleThumbs();
                        break;
                    }
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-layout.init':
                case 'sb-image-viewer-layout.thumbclick':
                    // Silent
                    break;
                case 'sb-image-viewer-layout.pagechange':
                    this.dataSource.handlePageChange(payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvc2FuZGJveC9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXItdG9vbHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxZQUFZO0lBQzdDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7d0JBQ3BDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxtQkFBbUIsRUFBRTt3QkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLG9CQUFvQixFQUFFO3dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssZUFBZSxFQUFFO3dCQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUMvQixNQUFNO3FCQUNQO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDZCQUE2QixDQUFDO2dCQUNuQyxLQUFLLG1DQUFtQztvQkFDdEMsU0FBUztvQkFDVCxNQUFNO2dCQUNSLEtBQUssbUNBQW1DO29CQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlclRvb2xzRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci10b29scy5jbGljayc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZC50aHVtYmluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXlsb2FkLnRodW1iaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVUaHVtYnMoaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndGh1bWJjbGljaycsIGluZGV4KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ2Nsb3NlLWRlc2NyaXB0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ3RvZ2dsZS1kZXNjcmlwdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZURlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICd0b2dnbGUtdGh1bWJzJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVGh1bWJzKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC50aHVtYmNsaWNrJzpcclxuICAgICAgICAgIC8vIFNpbGVudFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC5wYWdlY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlQ2hhbmdlKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19