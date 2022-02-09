import { EventHandler } from '@n7-frontend/core';
export class DvDatepickerWrapperEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'dv-datepicker-wrapper.click':
                    this.dataSource.setLabel(payload);
                    if (payload === 'ByDate') {
                        this.dataSource.openDatepicker();
                    }
                    else {
                        this.dataSource.closeDatepicker();
                    }
                    break;
                case 'dv-datepicker-wrapper.toggle':
                    this.dataSource.toggleDropDown();
                    break;
                case 'dv-datepicker-wrapper.change':
                    this.dataSource.setLabel(payload.dateStr);
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovZXZlbnQtaGFuZGxlcnMvZGF0ZXBpY2tlci13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTtJQUM5QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssNkJBQTZCO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO3dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUNsQzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUNuQztvQkFDRCxNQUFNO2dCQUNSLEtBQUssOEJBQThCO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssOEJBQThCO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHZEYXRlcGlja2VyV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdkdi1kYXRlcGlja2VyLXdyYXBwZXIuY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExhYmVsKHBheWxvYWQpO1xyXG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICdCeURhdGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vcGVuRGF0ZXBpY2tlcigpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsb3NlRGF0ZXBpY2tlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZHYtZGF0ZXBpY2tlci13cmFwcGVyLnRvZ2dsZSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRHJvcERvd24oKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2R2LWRhdGVwaWNrZXItd3JhcHBlci5jaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExhYmVsKHBheWxvYWQuZGF0ZVN0cik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=