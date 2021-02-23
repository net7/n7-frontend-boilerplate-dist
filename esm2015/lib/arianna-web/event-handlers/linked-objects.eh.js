import { EventHandler } from '@n7-frontend/core';
export class AwLinkedObjectsEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.handleScroll = (target) => {
            const { totalObjects, loadedData } = this.dataSource;
            const loadedTotal = Array.isArray(loadedData.result) ? loadedData.result.length : 0;
            if (loadedTotal >= totalObjects) {
                return;
            }
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150
                && this.dataSource.loadedData.isLoading === false) {
                this.dataSource.loadedData.isLoading = true;
                this.emitOuter('datarequest', {
                    currentPage: this.dataSource.currentPage,
                });
            }
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    this.emitOuter('change', +payload.value);
                    break;
                default:
                    console.warn('unhandled event type: ', type, ' with payload: ', payload);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.viewmore':
                    // ask home-layout for more data
                    this.dataSource.checkForMore(false);
                    this.emitOuter('datarequest', {
                        currentPage: this.dataSource.currentPage,
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    {
                        // handle incoming data from home-layout
                        const { res } = payload;
                        this.dataSource.handleIncomingData(res);
                    }
                    break;
                case 'aw-home-layout.scroll':
                    this.handleScroll(payload);
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZO0lBQW5EOztRQW9DUyxpQkFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDL0IsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBGLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTtnQkFDL0IsT0FBTzthQUNSO1lBQ0Q7OztjQUdFO1lBQ0YsSUFDRSxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO21CQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUNqRDtnQkFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtvQkFDNUIsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztpQkFDekMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBeERRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywwQkFBMEIsRUFBRSx1Q0FBdUM7b0JBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7d0JBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7cUJBQ3pDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNkJBQTZCO29CQUFFO3dCQUNsQyx3Q0FBd0M7d0JBQ3hDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3pDO29CQUFDLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBdUJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOiAvLyBjaGFuZ2VkIHBhZ2Ugc2l6ZSB2YWx1ZSAocGFnaW5hdGlvbilcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCArcGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgdHlwZTogJywgdHlwZSwgJyB3aXRoIHBheWxvYWQ6ICcsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudmlld21vcmUnOlxyXG4gICAgICAgICAgLy8gYXNrIGhvbWUtbGF5b3V0IGZvciBtb3JlIGRhdGFcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGVja0Zvck1vcmUoZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kYXRhcmVzcG9uc2UnOiB7XHJcbiAgICAgICAgICAvLyBoYW5kbGUgaW5jb21pbmcgZGF0YSBmcm9tIGhvbWUtbGF5b3V0XHJcbiAgICAgICAgICBjb25zdCB7IHJlcyB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVJbmNvbWluZ0RhdGEocmVzKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnNjcm9sbCc6XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlU2Nyb2xsID0gKHRhcmdldCkgPT4ge1xyXG4gICAgY29uc3QgeyB0b3RhbE9iamVjdHMsIGxvYWRlZERhdGEgfSA9IHRoaXMuZGF0YVNvdXJjZTtcclxuICAgIGNvbnN0IGxvYWRlZFRvdGFsID0gQXJyYXkuaXNBcnJheShsb2FkZWREYXRhLnJlc3VsdCkgPyBsb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggOiAwO1xyXG5cclxuICAgIGlmIChsb2FkZWRUb3RhbCA+PSB0b3RhbE9iamVjdHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAgQ2hlY2sgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIHNjcm9sbGVkIG5lYXIgdGhlIGVuZCB3aGlsZSBkYXRhIGlzIG5vdCBhbHJlYWR5IGxvYWRpbmcuXHJcbiAgICAgIElmIHRoZSBjb25kaXRpb24gaXMgbWV0LCBhIHJlcXVlc3QgZm9yIG1vcmUgZGF0YSBpcyBzZW50LlxyXG4gICAgKi9cclxuICAgIGlmIChcclxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQgPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAtIDE1MFxyXG4gICAgICAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGVkRGF0YS5pc0xvYWRpbmcgPT09IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRlZERhdGEuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=