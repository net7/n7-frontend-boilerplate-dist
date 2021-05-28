import { DataSource } from '@n7-frontend/core';
export class MrSliderDS extends DataSource {
    transform(data) {
        const { slides } = data;
        return {
            slides,
            containerId: `carousel-${this.id}`,
            // classes: 'demo',
            libOptions: {
                count: 1,
                move: 1,
                // touch: true,
                // mode: 'align',
                buttons: true,
                dots: true,
                rewind: true,
                autoplay: 0,
                animation: 500,
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvc2xpZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sVUFBVyxTQUFRLFVBQVU7SUFHOUIsU0FBUyxDQUFDLElBQVM7UUFDM0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPO1lBQ0wsTUFBTTtZQUNOLFdBQVcsRUFBRSxZQUFZLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEMsbUJBQW1CO1lBQ25CLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsQ0FBQztnQkFDUCxlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEdBQUc7YUFPZjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTbGlkZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogQ2Fyb3VzZWxEYXRhIHtcclxuICAgIGNvbnN0IHsgc2xpZGVzIH0gPSBkYXRhO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2xpZGVzLFxyXG4gICAgICBjb250YWluZXJJZDogYGNhcm91c2VsLSR7dGhpcy5pZH1gLFxyXG4gICAgICAvLyBjbGFzc2VzOiAnZGVtbycsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBjb3VudDogMSxcclxuICAgICAgICBtb3ZlOiAxLFxyXG4gICAgICAgIC8vIHRvdWNoOiB0cnVlLFxyXG4gICAgICAgIC8vIG1vZGU6ICdhbGlnbicsXHJcbiAgICAgICAgYnV0dG9uczogdHJ1ZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHJld2luZDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogMCxcclxuICAgICAgICBhbmltYXRpb246IDUwMCxcclxuICAgICAgICAvLyByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgLy8gICAwOiB7IGNvdW50OiAxLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gICA0ODA6IHsgY291bnQ6IDIuNSwgYnV0dG9uczogZmFsc2UgfSxcclxuICAgICAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXHJcbiAgICAgICAgLy8gICAxNDQwOiB7IGNvdW50OiA0LCB0b3VjaDogZmFsc2UgfSxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19