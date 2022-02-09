import { DataSource } from '@n7-frontend/core';
export class AwHeroDS extends DataSource {
    constructor() {
        super(...arguments);
        this.currentInputValue = '';
    }
    transform(data) {
        const { title, text, button, backgroundImage, input, classes } = data;
        return {
            title,
            text,
            backgroundImage,
            button: {
                text: button.text,
                anchor: {
                    payload: 'cerca',
                },
            },
            input: {
                placeholder: input.placeholder,
                payload: 'cerca-in-maxxi',
            },
            classes,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9oZXJvLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7SUFBeEM7O1FBQ1Msc0JBQWlCLEdBQUcsRUFBRSxDQUFDO0lBdUJoQyxDQUFDO0lBckJXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sRUFDSixLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFDckQsR0FBRyxJQUFJLENBQUM7UUFDVCxPQUFPO1lBQ0wsS0FBSztZQUNMLElBQUk7WUFDSixlQUFlO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztnQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtZQUNELE9BQU87U0FDUixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hlcm9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBjdXJyZW50SW5wdXRWYWx1ZSA9ICcnO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsIHRleHQsIGJ1dHRvbiwgYmFja2dyb3VuZEltYWdlLCBpbnB1dCwgY2xhc3Nlc1xyXG4gICAgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGV4dCxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdjZXJjYScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgcGF5bG9hZDogJ2NlcmNhLWluLW1heHhpJyxcclxuICAgICAgfSxcclxuICAgICAgY2xhc3NlcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==