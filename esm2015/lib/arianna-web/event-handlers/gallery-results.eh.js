import { EventHandler } from '@n7-frontend/core';
export class AwGalleryResultsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-gallery-results.change':
                    this.emitOuter('change', +payload.value);
                    break;
                case 'aw-gallery-results.click':
                    if (typeof payload === 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            const targetPage = +payload.replace('goto-', '');
                            // kill impossible page navigations
                            if (targetPage > this.dataSource.totalPages)
                                return;
                            if (targetPage < 1 || targetPage === this.dataSource.currentPage)
                                return;
                            this.emitOuter('goto', payload);
                        }
                    }
                    else { // click on a linked object
                        this.emitOuter('click', payload);
                    }
                    break;
                default:
                    console.warn('(gallery-results) unhandled inner event of type', type);
                    break;
            }
        });
        // this.outerEvents$.subscribe(({ type, payload }) => {
        // });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2dhbGxlcnktcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFDM0MsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1IsS0FBSywwQkFBMEI7b0JBQzdCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFLEVBQUUsc0JBQXNCO3dCQUN2RCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQzlCLHFEQUFxRDs0QkFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQ3ZDOzZCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDckMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDakQsbUNBQW1DOzRCQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7Z0NBQUUsT0FBTzs0QkFDcEQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7Z0NBQUUsT0FBTzs0QkFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQ2pDO3FCQUNGO3lCQUFNLEVBQUUsMkJBQTJCO3dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN0RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILHVEQUF1RDtRQUN2RCxNQUFNO0lBQ1IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5UmVzdWx0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsICtwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNsaWNrJzpcbiAgICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnKSB7IC8vIGNsaWNrIG9uIHBhZ2luYXRpb25cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgICAvLyBwYWdpbmF0aW9uIHJvdXRpbmcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IGxheW91dFxuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnaW5hdGlvbicsIHBheWxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ2dvdG8nKSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQYWdlID0gK3BheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgICAgICAgICAgIC8vIGtpbGwgaW1wb3NzaWJsZSBwYWdlIG5hdmlnYXRpb25zXG4gICAgICAgICAgICAgIGlmICh0YXJnZXRQYWdlID4gdGhpcy5kYXRhU291cmNlLnRvdGFsUGFnZXMpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPCAxIHx8IHRhcmdldFBhZ2UgPT09IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZ290bycsIHBheWxvYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7IC8vIGNsaWNrIG9uIGEgbGlua2VkIG9iamVjdFxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGdhbGxlcnktcmVzdWx0cykgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgLy8gfSk7XG4gIH1cbn1cbiJdfQ==