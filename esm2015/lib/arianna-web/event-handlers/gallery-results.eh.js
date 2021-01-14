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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2dhbGxlcnktcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFDM0MsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1IsS0FBSywwQkFBMEI7b0JBQzdCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFLEVBQUUsc0JBQXNCO3dCQUN2RCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQzlCLHFEQUFxRDs0QkFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQ3ZDOzZCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDckMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDakQsbUNBQW1DOzRCQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7Z0NBQUUsT0FBTzs0QkFDcEQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7Z0NBQUUsT0FBTzs0QkFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQ2pDO3FCQUNGO3lCQUFNLEVBQUUsMkJBQTJCO3dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN0RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILHVEQUF1RDtRQUN2RCxNQUFNO0lBQ1IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3R2FsbGVyeVJlc3VsdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgK3BheWxvYWQudmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNsaWNrJzpcclxuICAgICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycpIHsgLy8gY2xpY2sgb24gcGFnaW5hdGlvblxyXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5zdGFydHNXaXRoKCdwYWdlJykpIHtcclxuICAgICAgICAgICAgICAvLyBwYWdpbmF0aW9uIHJvdXRpbmcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IGxheW91dFxyXG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdpbmF0aW9uJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC5zdGFydHNXaXRoKCdnb3RvJykpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQYWdlID0gK3BheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XHJcbiAgICAgICAgICAgICAgLy8ga2lsbCBpbXBvc3NpYmxlIHBhZ2UgbmF2aWdhdGlvbnNcclxuICAgICAgICAgICAgICBpZiAodGFyZ2V0UGFnZSA+IHRoaXMuZGF0YVNvdXJjZS50b3RhbFBhZ2VzKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPCAxIHx8IHRhcmdldFBhZ2UgPT09IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdnb3RvJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7IC8vIGNsaWNrIG9uIGEgbGlua2VkIG9iamVjdFxyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhnYWxsZXJ5LXJlc3VsdHMpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcbn1cclxuIl19