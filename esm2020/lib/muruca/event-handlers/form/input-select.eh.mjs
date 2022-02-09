import { EventHandler } from '@n7-frontend/core';
export class MrInputSelectEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`: {
                    const { value } = payload;
                    // set new value
                    this.dataSource.setState({ value });
                    // emit changed signal
                    this.changed$.next({
                        id: this.dataSource.id,
                        state: this.dataSource.getState()
                    });
                    break;
                }
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2Zvcm0vaW5wdXQtc2VsZWN0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBS3hDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztvQkFDMUIsZ0JBQWdCO29CQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ3BDLHNCQUFzQjtvQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtxQkFDbEMsQ0FBQyxDQUFDO29CQUNILE1BQU07aUJBQ1A7Z0JBQ0Q7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJJbnB1dFNlbGVjdERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtc2VsZWN0LmRzJztcclxuaW1wb3J0IHsgTXJJbnB1dEV2ZW50SGFuZGxlciwgTXJDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbnB1dFNlbGVjdEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgTXJJbnB1dEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGNoYW5nZWQkOiBTdWJqZWN0PE1yQ2hhbmdlZFBhcmFtcz47XHJcblxyXG4gIHB1YmxpYyBkYXRhU291cmNlOiBNcklucHV0U2VsZWN0RFM7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jaGFuZ2VgOiB7XHJcbiAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFN0YXRlKHsgdmFsdWUgfSk7XHJcbiAgICAgICAgICAvLyBlbWl0IGNoYW5nZWQgc2lnbmFsXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZWQkLm5leHQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5kYXRhU291cmNlLmdldFN0YXRlKClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==