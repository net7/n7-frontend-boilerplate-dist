/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {
    text: 'Filtra i risultati'
}, ɵ1 = {
    id: 'query',
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
const facets = {
    sections: [{
            header: {
                id: 'header-filtra',
                data: ɵ0
            },
            inputs: [{
                    id: 'query',
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
                    id: 'input-toponimi-filter',
                    type: 'text',
                    data: ɵ3
                }, {
                    id: 'input-toponimi',
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
                    id: 'input-glossario-filter',
                    type: 'text',
                    data: ɵ6
                }, {
                    id: 'input-glossario',
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
                    id: 'input-continenti',
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
                    id: 'input-keywords',
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
                    id: 'input-data',
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
                    id: 'input-luogo',
                    type: 'link',
                    queryParam: true,
                    data: ɵ15
                }],
        }],
    classes: 'facets-wrapper'
};
const ɵ16 = /**
 * @param {?} id
 * @return {?}
 */
(id) => ({
    id,
    queryParam: true,
});
/** @type {?} */
const layoutInputs = ['page', 'limit', 'sort'].map((ɵ16));
/** @type {?} */
const request = {
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
export default (/** @type {?} */ ({ request, facets, layoutInputs }));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7V0FNWTtJQUNKLElBQUksRUFBRSxvQkFBb0I7Q0FDM0IsT0FNSztJQUNKLEVBQUUsRUFBRSxPQUFPO0lBQ1gsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0NBQzNCLE9BS0s7SUFDSixJQUFJLEVBQUUsVUFBVTtJQUNoQixjQUFjLEVBQUUsS0FBSztDQUN0QixPQUtLO0lBQ0osRUFBRSxFQUFFLGVBQWU7SUFDbkIsV0FBVyxFQUFFLFFBQVE7SUFDckIsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtDQUMzQixPQUtLO0lBQ0osS0FBSyxFQUFFLEVBQUU7Q0FDVixPQUtLO0lBQ0osSUFBSSxFQUFFLFdBQVc7SUFDakIsY0FBYyxFQUFFLElBQUk7Q0FDckIsT0FLSztJQUNKLEVBQUUsRUFBRSxlQUFlO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FLSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsT0FLSztJQUNKLElBQUksRUFBRSxZQUFZO0lBQ2xCLGNBQWMsRUFBRSxHQUFHO0NBQ3BCLE9BTUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLFFBS0s7SUFDSixJQUFJLEVBQUUs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QUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxFQUFFO0lBQ0YsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FBQzs7TUFISSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsT0FHL0M7O01BRUcsT0FBTyxHQUFHO0lBQ2QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLFFBQVE7UUFDWixLQUFLLEVBQUUsR0FBRztLQUNYO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLE9BQU87S0FDWjtJQUNELFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEtBQUssRUFBRSxHQUFHO0NBQ1g7QUFFRCxlQUFlLG1CQUFBLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL3NlYXJjaC1mYWNldHMtbGF5b3V0L3NlYXJjaC1mYWNldHMtY29uZmlnJztcblxuY29uc3QgZmFjZXRzID0ge1xuICBzZWN0aW9uczogW3tcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWZpbHRyYScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdGaWx0cmEgaSByaXN1bHRhdGknXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ3F1ZXJ5JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAncXVlcnknLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGknLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICBlbnRlclBheWxvYWQ6ICdzZWFyY2gtZW50ZXInLFxuICAgICAgICBpY29uUGF5bG9hZDogJ3NlYXJjaC1pY29uJ1xuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLXRvcG9uaW1pJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ1RvcG9uaW1pJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICc3ODYnLFxuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC10b3BvbmltaS1maWx0ZXInLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ2lucHV0LXRleHQtMDEnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgIGVudGVyUGF5bG9hZDogJ3NlYXJjaC1lbnRlcicsXG4gICAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nLFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGlkOiAnaW5wdXQtdG9wb25pbWknLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItZ2xvc3NhcmlvJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0dsb3NzYXJpbycsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnOTYnLFxuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC1nbG9zc2FyaW8tZmlsdGVyJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdpbnB1dC10ZXh0LTAyJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICBlbnRlclBheWxvYWQ6ICdzZWFyY2gtZW50ZXInLFxuICAgICAgICBpY29uUGF5bG9hZDogJ3NlYXJjaC1pY29uJyxcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpZDogJ2lucHV0LWdsb3NzYXJpbycsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1jb250aW5lbnRpJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0NvbnRpbmVudGknLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzMnXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LWNvbnRpbmVudGknLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXIta2V5d29yZHMnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnS2V5d29yZHMnLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzEwOCcsXG4gICAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtcmlnaHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LWtleXdvcmRzJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dLFxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1kYXRhJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0RhdGEgZGkgcHViYmxpY2F6aW9uZScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnMjAnLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLXJpZ2h0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC1kYXRhJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dLFxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1sdW9nbycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdMdW9nbyBkaSBwdWJibGljYXppb25lJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICcxNScsXG4gICAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtcmlnaHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LWx1b2dvJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dLFxuICB9XSxcbiAgY2xhc3NlczogJ2ZhY2V0cy13cmFwcGVyJ1xufTtcblxuY29uc3QgbGF5b3V0SW5wdXRzID0gWydwYWdlJywgJ2xpbWl0JywgJ3NvcnQnXS5tYXAoKGlkKSA9PiAoe1xuICBpZCxcbiAgcXVlcnlQYXJhbTogdHJ1ZSxcbn0pKTtcblxuY29uc3QgcmVxdWVzdCA9IHtcbiAgcmVzdWx0czoge1xuICAgIGlkOiAnc2VhcmNoJyxcbiAgICBkZWxheTogNTAwXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgaWQ6ICdsaW5rcycsXG4gIH0sXG4gIHByb3ZpZGVyOiAncmVzdCcsXG4gIGRlbGF5OiA1MDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgcmVxdWVzdCwgZmFjZXRzLCBsYXlvdXRJbnB1dHMgfSBhcyBTZWFyY2hDb25maWc7XG4iXX0=