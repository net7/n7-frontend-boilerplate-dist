import { EventHandler } from '@n7-frontend/core';
export class FacetTextEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`:
                    if (typeof payload.value === 'string') {
                        payload.value = payload.value.trim();
                    }
                    this.dataSource.setValue(payload.value);
                    this.emitOuter('change', Object.assign(Object.assign({}, payload), { id: this.dataSource.id }));
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXRleHQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxXQUFZLFNBQVEsWUFBWTtJQUNwQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUztvQkFDakMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO3dCQUNyQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ3RDO29CQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLGtDQUNsQixPQUFPLEtBQ1YsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUN0QixDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRUZXh0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jaGFuZ2VgOlxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkLnZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBwYXlsb2FkLnZhbHVlID0gcGF5bG9hZC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VmFsdWUocGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywge1xyXG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==