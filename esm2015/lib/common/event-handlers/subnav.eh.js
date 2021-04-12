import { EventHandler } from '@n7-frontend/core';
export class SubnavEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'subnav.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9ldmVudC1oYW5kbGVycy9zdWJuYXYuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxRQUFTLFNBQVEsWUFBWTtJQUNqQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssY0FBYztvQkFDakIsbUJBQW1CO29CQUNuQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO3dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDdEM7b0JBRUQsZ0JBQWdCO29CQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDL0IsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJuYXZFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3VibmF2LmNsaWNrJzpcclxuICAgICAgICAgIC8vIG5hdmlnYXRlIGNvbnRyb2xcclxuICAgICAgICAgIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ25hdmlnYXRlJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gZ2xvYmFsIHNpZ25hbFxyXG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKHR5cGUsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==