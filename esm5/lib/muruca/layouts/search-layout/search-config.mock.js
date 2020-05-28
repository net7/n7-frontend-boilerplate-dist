/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = {
    text: 'Filtra i risultati'
}, ɵ1 = {
    id: 'input-text-00',
    placeholder: 'Cerca nei titoli',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon'
}, ɵ2 = {
    text: 'Toponimi',
    additionalText: '786',
}, ɵ3 = {
    id: 'input-text-01',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
}, ɵ4 = {
    links: []
}, ɵ5 = {
    text: 'Glossario',
    additionalText: '96',
}, ɵ6 = {
    id: 'input-text-02',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
}, ɵ7 = {
    links: []
}, ɵ8 = {
    text: 'Continenti',
    additionalText: '3'
}, ɵ9 = {
    links: []
}, ɵ10 = {
    text: 'Keywords',
    additionalText: '108',
    iconRight: 'n7-icon-angle-right'
}, ɵ11 = {
    links: []
}, ɵ12 = {
    text: 'Data di pubblicazione',
    additionalText: '20',
    iconRight: 'n7-icon-angle-right'
}, ɵ13 = {
    links: []
}, ɵ14 = {
    text: 'Luogo di pubblicazione',
    additionalText: '15',
    iconRight: 'n7-icon-angle-right'
}, ɵ15 = {
    links: []
};
/** @type {?} */
var facets = {
    sections: [{
            header: {
                id: 'header-filtra',
                data: ɵ0
            },
            inputs: [{
                    id: 'input-00',
                    type: 'text',
                    queryParam: true,
                    data: ɵ1
                }]
        }, {
            header: {
                id: 'header-toponimi',
                data: ɵ2
            },
            inputs: [{
                    id: 'input-01',
                    type: 'text',
                    data: ɵ3
                }, {
                    id: 'input-02',
                    type: 'link',
                    queryParam: true,
                    data: ɵ4
                }]
        }, {
            header: {
                id: 'header-glossario',
                data: ɵ5
            },
            inputs: [{
                    id: 'input-03',
                    type: 'text',
                    data: ɵ6
                }, {
                    id: 'input-04',
                    type: 'link',
                    queryParam: true,
                    data: ɵ7
                }]
        }, {
            header: {
                id: 'header-continenti',
                data: ɵ8
            },
            inputs: [{
                    id: 'input-05',
                    type: 'link',
                    queryParam: true,
                    data: ɵ9
                }]
        }, {
            header: {
                id: 'header-keywords',
                data: ɵ10
            },
            inputs: [{
                    id: 'input-06',
                    type: 'link',
                    queryParam: true,
                    data: ɵ11
                }],
        }, {
            header: {
                id: 'header-data',
                data: ɵ12
            },
            inputs: [{
                    id: 'input-07',
                    type: 'link',
                    queryParam: true,
                    data: ɵ13
                }],
        }, {
            header: {
                id: 'header-luogo',
                data: ɵ14
            },
            inputs: [{
                    id: 'input-08',
                    type: 'link',
                    queryParam: true,
                    data: ɵ15
                }],
        }],
    classes: 'facets-wrapper'
};
var ɵ16 = /**
 * @param {?} id
 * @return {?}
 */
function (id) { return ({
    id: id,
    queryParam: true,
}); };
/** @type {?} */
var layoutInputs = ['page', 'limit', 'sort'].map((ɵ16));
/** @type {?} */
var request = {
    results: {
        id: 'search',
        delay: 500
    },
    links: {
        id: 'links',
    },
    provider: 'rest',
    delay: 500
};
export default (/** @type {?} */ ({ request: request, facets: facets, layoutInputs: layoutInputs }));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7U0FNWTtJQUNKLElBQUksRUFBRSxvQkFBb0I7Q0FDM0IsT0FNSztJQUNKLEVBQUUsRUFBRSxlQUFlO0lBQ25CLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtDQUMzQixPQUtLO0lBQ0osSUFBSSxFQUFFLFVBQVU7SUFDaEIsY0FBYyxFQUFFLEtBQUs7Q0FDdEIsT0FLSztJQUNKLEVBQUUsRUFBRSxlQUFlO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FLSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsT0FLSztJQUNKLElBQUksRUFBRSxXQUFXO0lBQ2pCLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLE9BS0s7SUFDSixFQUFFLEVBQUUsZUFBZTtJQUNuQixXQUFXLEVBQUUsUUFBUTtJQUNyQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0NBQzNCLE9BS0s7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLE9BS0s7SUFDSixJQUFJLEVBQUUsWUFBWTtJQUNsQixjQUFjLEVBQUUsR0FBRztDQUNwQixPQU1LO0lBQ0osS0FBSyxFQUFFLEVBQUU7Q0FDVixRQUtLO0lBQ0osSUFBSSxFQUFF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QUMxRCxFQUFFLElBQUE7SUFDRixVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUFDLEVBSHlELENBR3pEOztJQUhJLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUcvQzs7SUFFRyxPQUFPLEdBQUc7SUFDZCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsUUFBUTtRQUNaLEtBQUssRUFBRSxHQUFHO0tBQ1g7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsT0FBTztLQUNaO0lBQ0QsUUFBUSxFQUFFLE1BQU07SUFDaEIsS0FBSyxFQUFFLEdBQUc7Q0FDWDtBQUVELGVBQWUsbUJBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxFQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1jb25maWcnO1xuXG5jb25zdCBmYWNldHMgPSB7XG4gIHNlY3Rpb25zOiBbe1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItZmlsdHJhJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0ZpbHRyYSBpIHJpc3VsdGF0aSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtMDAnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdpbnB1dC10ZXh0LTAwJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBuZWkgdGl0b2xpJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbidcbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci10b3BvbmltaScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdUb3BvbmltaScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnNzg2JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtMDEnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ2lucHV0LXRleHQtMDEnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgIGVudGVyUGF5bG9hZDogJ3NlYXJjaC1lbnRlcicsXG4gICAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nLFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGlkOiAnaW5wdXQtMDInLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItZ2xvc3NhcmlvJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0dsb3NzYXJpbycsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnOTYnLFxuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC0wMycsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnaW5wdXQtdGV4dC0wMicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbnB1dC0wNCcsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1jb250aW5lbnRpJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0NvbnRpbmVudGknLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzMnXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LTA1JyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWtleXdvcmRzJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0tleXdvcmRzJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICcxMDgnLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLXJpZ2h0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC0wNicsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XSxcbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItZGF0YScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdEYXRhIGRpIHB1YmJsaWNhemlvbmUnLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzIwJyxcbiAgICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1yaWdodCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtMDcnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWx1b2dvJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0x1b2dvIGRpIHB1YmJsaWNhemlvbmUnLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzE1JyxcbiAgICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1yaWdodCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtMDgnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH1dLFxuICBjbGFzc2VzOiAnZmFjZXRzLXdyYXBwZXInXG59O1xuXG5jb25zdCBsYXlvdXRJbnB1dHMgPSBbJ3BhZ2UnLCAnbGltaXQnLCAnc29ydCddLm1hcCgoaWQpID0+ICh7XG4gIGlkLFxuICBxdWVyeVBhcmFtOiB0cnVlLFxufSkpO1xuXG5jb25zdCByZXF1ZXN0ID0ge1xuICByZXN1bHRzOiB7XG4gICAgaWQ6ICdzZWFyY2gnLFxuICAgIGRlbGF5OiA1MDBcbiAgfSxcbiAgbGlua3M6IHtcbiAgICBpZDogJ2xpbmtzJyxcbiAgfSxcbiAgcHJvdmlkZXI6ICdyZXN0JyxcbiAgZGVsYXk6IDUwMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgeyByZXF1ZXN0LCBmYWNldHMsIGxheW91dElucHV0cyB9IGFzIFNlYXJjaENvbmZpZztcbiJdfQ==