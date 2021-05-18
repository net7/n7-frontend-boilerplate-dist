import { EventHandler } from '@n7-frontend/core';
export class MrSearchResultsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-results.click': {
                    const { action } = payload;
                    if (action === 'resource-modal') {
                        this.emitOuter('openresourcemodal', payload);
                    }
                    break;
                }
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFDMUMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QixDQUFDLENBQUM7b0JBQzlCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7b0JBQzNCLElBQUksTUFBTSxLQUFLLGdCQUFnQixFQUFFO3dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM5QztvQkFDRCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUmVzdWx0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1zZWFyY2gtcmVzdWx0cy5jbGljayc6IHtcclxuICAgICAgICAgIGNvbnN0IHsgYWN0aW9uIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Jlc291cmNlLW1vZGFsJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignb3BlbnJlc291cmNlbW9kYWwnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=