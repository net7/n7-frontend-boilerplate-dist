import { DataSource } from '@n7-frontend/core';
export class MrImageViewerDS extends DataSource {
    transform(data) {
        if (!data)
            return null;
        const { images, thumbs } = data;
        return {
            images,
            thumbs,
            viewerId: this.id,
            libOptions: {
                /* SHOW GROUP */
                showNavigator: false,
                autoHideControls: false,
                /* SHOW BUTTONS */
                showRotationControl: false,
                showSequenceControl: true,
                showHomeControl: true,
                showZoomControl: true,
                /* SEQUENCE */
                sequenceMode: true,
                showReferenceStrip: true,
                navigationControlAnchor: 'TOP_RIGHT',
            },
            _setViewer(viewer) {
                this.viewer = viewer;
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBS25DLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTztZQUNMLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUV2QixrQkFBa0I7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixlQUFlLEVBQUUsSUFBSTtnQkFFckIsY0FBYztnQkFDZCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFFeEIsdUJBQXVCLEVBQUUsV0FBVzthQUNyQztZQUNELFVBQVUsQ0FBQyxNQUFNO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZpZXdlcjogYW55O1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHsgaW1hZ2VzLCB0aHVtYnMgfSA9IGRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlcyxcbiAgICAgIHRodW1icyxcbiAgICAgIHZpZXdlcklkOiB0aGlzLmlkLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICAvKiBTSE9XIEdST1VQICovXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG5cbiAgICAgICAgLyogU0hPVyBCVVRUT05TICovXG4gICAgICAgIHNob3dSb3RhdGlvbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxuICAgICAgICBzaG93SG9tZUNvbnRyb2w6IHRydWUsXG4gICAgICAgIHNob3dab29tQ29udHJvbDogdHJ1ZSxcblxuICAgICAgICAvKiBTRVFVRU5DRSAqL1xuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsIC8vIGFsbG93cyBoYXZpbmcgbXVsdGlwbGUgaW1hZ2VzIChhcyBpbiBhcnJheSBvZiBpbWFnZXMgKyB6b29tZWQgaW1hZ2UpXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSwgLy8gc2hvd3MgdGhlIGltYWdlcyBhcnJheSAoZGVmYXVsdDogaG9yaXpvbnRhbGx5KVxuXG4gICAgICAgIG5hdmlnYXRpb25Db250cm9sQW5jaG9yOiAnVE9QX1JJR0hUJyxcbiAgICAgIH0sXG4gICAgICBfc2V0Vmlld2VyKHZpZXdlcikge1xuICAgICAgICB0aGlzLnZpZXdlciA9IHZpZXdlcjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=