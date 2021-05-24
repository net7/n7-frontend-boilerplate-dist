import { EventHandler } from '@n7-frontend/core';
export class AwSchedaDropdownEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-scheda-dropdown.click') {
                if (payload === 'toggle') {
                    this.dataSource.toggle();
                }
                else {
                    this.dataSource.onChange(payload);
                    this.emitOuter('click', payload);
                }
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3NjaGVkYS1kcm9wZG93bi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFDM0MsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxJQUFJLElBQUksS0FBSywwQkFBMEIsRUFBRTtnQkFDdkMsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhRHJvcGRvd25FSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYgKHR5cGUgPT09ICdhdy1zY2hlZGEtZHJvcGRvd24uY2xpY2snKSB7XG4gICAgICAgIGlmIChwYXlsb2FkID09PSAndG9nZ2xlJykge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25DaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19