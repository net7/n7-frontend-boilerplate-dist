import { EventHandler } from '@n7-frontend/core';
export class SmartPaginationEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-smart-pagination.change':
                    this.emitOuter('change', payload);
                    break;
                case 'n7-smart-pagination.click':
                    this.emitOuter('click', payload);
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZXZlbnQtaGFuZGxlcnMvc21hcnQtcGFnaW5hdGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFDMUMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBRVIsS0FBSywyQkFBMkI7b0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNqQyxNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=