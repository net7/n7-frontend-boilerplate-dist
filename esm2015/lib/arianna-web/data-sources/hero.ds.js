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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0lBQXhDOztRQUNTLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztJQXVCaEMsQ0FBQztJQXJCVyxTQUFTLENBQUMsSUFBSTtRQUN0QixNQUFNLEVBQ0osS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQ3JELEdBQUcsSUFBSSxDQUFDO1FBQ1QsT0FBTztZQUNMLEtBQUs7WUFDTCxJQUFJO1lBQ0osZUFBZTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsT0FBTztpQkFDakI7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7WUFDRCxPQUFPO1NBQ1IsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgY3VycmVudElucHV0VmFsdWUgPSAnJztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLCB0ZXh0LCBidXR0b24sIGJhY2tncm91bmRJbWFnZSwgaW5wdXQsIGNsYXNzZXNcclxuICAgIH0gPSBkYXRhO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnY2VyY2EnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIHBheWxvYWQ6ICdjZXJjYS1pbi1tYXh4aScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsYXNzZXMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=