import { EventHandler } from '@n7-frontend/core';
export class DvCardExampleLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            console.log('innerEvents$----->', type, payload);
            switch (type) {
                case 'dv-card-example-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                case 'dv-card-example-layout.destroy':
                    this.dataSource.onDestroy();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            console.log('outerEvents$----->', type, payload);
            // TODO
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1leGFtcGxlLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTtJQUM5QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssNkJBQTZCO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUixLQUFLLGdDQUFnQztvQkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqRCxPQUFPO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkNhcmRFeGFtcGxlTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbm5lckV2ZW50cyQtLS0tLT4nLCB0eXBlLCBwYXlsb2FkKTtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdkdi1jYXJkLWV4YW1wbGUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2R2LWNhcmQtZXhhbXBsZS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ291dGVyRXZlbnRzJC0tLS0tPicsIHR5cGUsIHBheWxvYWQpO1xuICAgICAgLy8gVE9ET1xuICAgIH0pO1xuICB9XG59XG4iXX0=