import { of } from 'rxjs';
var mock = [{
        title: '1 - Casa a S. Piero a Ponti - 1964 - Tipo A - Veduta',
        classes: 'is-overlay has-image',
        image: 'https://placeimg.com/640/480/any',
    }, {
        title: '1953 - Settembre - Bari - Padiglione dell\'I.N.A alla Fiera del Levante (1953)',
        classes: 'is-overlay has-image',
        image: 'https://placeimg.com/640/480/any',
    }, {
        title: '1956 - Cagliari - cattedrale (1956)',
        classes: 'is-overlay has-image',
        image: 'https://placeimg.com/640/480/any',
    }, {
        title: '4 aprile 1948 - Lucca - San Martino - Tomba di Ilaria del Carretto - (J. della Quercia) (4 aprile 1948)',
        classes: 'is-overlay has-image',
        image: 'https://placeimg.com/640/480/any',
    }, {
        title: '5 - Casa a S. Piero a Ponti - Tipo A - Retro 1:50 ([1964])',
        classes: 'is-overlay has-image',
        image: 'https://placeimg.com/640/480/any',
    }, {
        title: '1 - Casa a S. Piero a Ponti - 1964 - Tipo A  Veduta (1964)',
        classes: 'is-overlay has-image',
        image: 'https://placeimg.com/640/480/any',
    }];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var getCollection = function (_a) {
    var offset = _a.offset, limit = _a.limit;
    return of({
        results: mock.slice(0, limit),
        totalCount: 120
    });
};
var ɵ0 = getCollection;
export default getCollection;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1tb2Nrcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2NvbGxlY3Rpb24tbGF5b3V0L2NvbGxlY3Rpb24tbW9ja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVF0QyxJQUFNLElBQUksR0FBRyxDQUFDO1FBQ1osS0FBSyxFQUFFLHNEQUFzRDtRQUM3RCxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLEtBQUssRUFBRSxrQ0FBa0M7S0FDMUMsRUFBRTtRQUNELEtBQUssRUFBRSxnRkFBZ0Y7UUFDdkYsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixLQUFLLEVBQUUsa0NBQWtDO0tBQzFDLEVBQUU7UUFDRCxLQUFLLEVBQUUscUNBQXFDO1FBQzVDLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsS0FBSyxFQUFFLGtDQUFrQztLQUMxQyxFQUFFO1FBQ0QsS0FBSyxFQUFFLHlHQUF5RztRQUNoSCxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLEtBQUssRUFBRSxrQ0FBa0M7S0FDMUMsRUFBRTtRQUNELEtBQUssRUFBRSw0REFBNEQ7UUFDbkUsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixLQUFLLEVBQUUsa0NBQWtDO0tBQzFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsNERBQTREO1FBQ25FLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsS0FBSyxFQUFFLGtDQUFrQztLQUMxQyxDQUFDLENBQUM7QUFFSCw2REFBNkQ7QUFDN0QsSUFBTSxhQUFhLEdBQUcsVUFBQyxFQUFpQjtRQUFmLGtCQUFNLEVBQUUsZ0JBQUs7SUFBNkIsT0FBQSxFQUFFLENBQUM7UUFDcEUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztRQUM3QixVQUFVLEVBQUUsR0FBRztLQUNoQixDQUFDO0FBSGlFLENBR2pFLENBQUM7O0FBRUgsZUFBZSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG50eXBlIHJlc3BvbnNlID0ge1xuICByZXN1bHRzOiBJdGVtUHJldmlld0RhdGFbXTtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xufVxuXG5jb25zdCBtb2NrID0gW3tcbiAgdGl0bGU6ICcxIC0gQ2FzYSBhIFMuIFBpZXJvIGEgUG9udGkgLSAxOTY0IC0gVGlwbyBBIC0gVmVkdXRhJyxcbiAgY2xhc3NlczogJ2lzLW92ZXJsYXkgaGFzLWltYWdlJyxcbiAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FueScsXG59LCB7XG4gIHRpdGxlOiAnMTk1MyAtIFNldHRlbWJyZSAtIEJhcmkgLSBQYWRpZ2xpb25lIGRlbGxcXCdJLk4uQSBhbGxhIEZpZXJhIGRlbCBMZXZhbnRlICgxOTUzKScsXG4gIGNsYXNzZXM6ICdpcy1vdmVybGF5IGhhcy1pbWFnZScsXG4gIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQwLzQ4MC9hbnknLFxufSwge1xuICB0aXRsZTogJzE5NTYgLSBDYWdsaWFyaSAtIGNhdHRlZHJhbGUgKDE5NTYpJyxcbiAgY2xhc3NlczogJ2lzLW92ZXJsYXkgaGFzLWltYWdlJyxcbiAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FueScsXG59LCB7XG4gIHRpdGxlOiAnNCBhcHJpbGUgMTk0OCAtIEx1Y2NhIC0gU2FuIE1hcnRpbm8gLSBUb21iYSBkaSBJbGFyaWEgZGVsIENhcnJldHRvIC0gKEouIGRlbGxhIFF1ZXJjaWEpICg0IGFwcmlsZSAxOTQ4KScsXG4gIGNsYXNzZXM6ICdpcy1vdmVybGF5IGhhcy1pbWFnZScsXG4gIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQwLzQ4MC9hbnknLFxufSwge1xuICB0aXRsZTogJzUgLSBDYXNhIGEgUy4gUGllcm8gYSBQb250aSAtIFRpcG8gQSAtIFJldHJvIDE6NTAgKFsxOTY0XSknLFxuICBjbGFzc2VzOiAnaXMtb3ZlcmxheSBoYXMtaW1hZ2UnLFxuICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzY0MC80ODAvYW55Jyxcbn0sIHtcbiAgdGl0bGU6ICcxIC0gQ2FzYSBhIFMuIFBpZXJvIGEgUG9udGkgLSAxOTY0IC0gVGlwbyBBICBWZWR1dGEgKDE5NjQpJyxcbiAgY2xhc3NlczogJ2lzLW92ZXJsYXkgaGFzLWltYWdlJyxcbiAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FueScsXG59XTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgZ2V0Q29sbGVjdGlvbiA9ICh7IG9mZnNldCwgbGltaXQgfSk6IE9ic2VydmFibGU8cmVzcG9uc2U+ID0+IG9mKHtcbiAgcmVzdWx0czogbW9jay5zbGljZSgwLCBsaW1pdCksXG4gIHRvdGFsQ291bnQ6IDEyMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbGxlY3Rpb247XG4iXX0=