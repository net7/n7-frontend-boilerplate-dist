import { EventHandler } from '@n7-frontend/core';
export class FacetLinkEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`:
                    if (payload) {
                        this.dataSource.toggleValue(payload);
                        this.emitOuter('change', {
                            value: this.dataSource.getValue(),
                            id: this.dataSource.id
                        });
                    }
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmsuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELE1BQU0sT0FBTyxXQUFZLFNBQVEsWUFBWTtJQUdwQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUztvQkFDakMsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFOzRCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ2pDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7eUJBQ3ZCLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgRmFjZXRMaW5rRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmsuZHMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRMaW5rRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBkYXRhU291cmNlOiBGYWNldExpbmtEU1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jaGFuZ2VgOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVmFsdWUocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywge1xuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhU291cmNlLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19