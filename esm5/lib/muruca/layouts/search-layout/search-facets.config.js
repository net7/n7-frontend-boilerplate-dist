/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} prefix
 * @return {?}
 */
function getLinks(prefix) {
    /** @type {?} */
    var i;
    /** @type {?} */
    var limit = Math.round(Math.random() * 10);
    /** @type {?} */
    var links = [];
    for (i = 0; i < limit; i += 1) {
        /** @type {?} */
        var text = prefix + " " + (i + 1);
        links.push({
            text: text,
            counter: Math.round(Math.random() * 100),
            payload: text
        });
    }
    return links;
}
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
};
/** @type {?} */
var configuration = {
    sections: [{
            header: {
                id: 'header-filtra',
                data: ɵ0
            },
            inputs: [{
                    id: 'input-00',
                    type: 'text',
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
                    internal: true,
                    data: ɵ3
                }, {
                    id: 'input-02',
                    type: 'link',
                    data: {
                        links: getLinks('Toponimo')
                    }
                }]
        }, {
            header: {
                id: 'header-glossario',
                data: {
                    text: 'Glossario',
                    additionalText: '96',
                }
            },
            inputs: [{
                    id: 'input-03',
                    type: 'text',
                    internal: true,
                    data: {
                        id: 'input-text-02',
                        placeholder: 'Search',
                        icon: 'n7-icon-search',
                        inputPayload: 'search-input',
                        enterPayload: 'search-enter',
                        iconPayload: 'search-icon',
                    }
                }, {
                    id: 'input-04',
                    type: 'link',
                    data: {
                        links: getLinks('Concetto')
                    }
                }]
        }, {
            header: {
                id: 'header-continenti',
                data: {
                    text: 'Continenti',
                    additionalText: '3'
                }
            },
            inputs: [{
                    id: 'input-05',
                    type: 'link',
                    data: {
                        links: getLinks('Continente')
                    }
                }]
        }, {
            header: {
                id: 'header-keywords',
                data: {
                    text: 'Keywords',
                    additionalText: '108',
                    iconRight: 'n7-icon-angle-right'
                }
            },
            inputs: [{
                    id: 'input-06',
                    type: 'link',
                    data: {
                        links: getLinks('Keyword')
                    }
                }],
        }, {
            header: {
                id: 'header-data',
                data: {
                    text: 'Data di pubblicazione',
                    additionalText: '20',
                    iconRight: 'n7-icon-angle-right'
                }
            },
            inputs: [{
                    id: 'input-07',
                    type: 'link',
                    data: {
                        links: getLinks('Data')
                    }
                }],
        }, {
            header: {
                id: 'header-luogo',
                data: {
                    text: 'Luogo di pubblicazione',
                    additionalText: '15',
                    iconRight: 'n7-icon-angle-right'
                }
            },
            inputs: [{
                    id: 'input-08',
                    type: 'link',
                    data: {
                        links: getLinks('Luogo')
                    }
                }],
        }],
    classes: 'facets-wrapper'
};
export default configuration;
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtZmFjZXRzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLFNBQVMsUUFBUSxDQUFDLE1BQU07O1FBQ2xCLENBQUM7O1FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7UUFDdEMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7WUFDdkIsSUFBSSxHQUFNLE1BQU0sVUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFFO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDVCxJQUFJLE1BQUE7WUFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7U0FNVztJQUNKLElBQUksRUFBRSxvQkFBb0I7Q0FDM0IsT0FLSztJQUNKLEVBQUUsRUFBRSxlQUFlO0lBQ25CLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtDQUMzQixPQUtLO0lBQ0osSUFBSSxFQUFFLFVBQVU7SUFDaEIsY0FBYyxFQUFFLEtBQUs7Q0FDdEIsT0FNSztJQUNKLEVBQUUsRUFBRSxlQUFlO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JC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Q0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUM7cUJBQ3hCO2lCQUNGLENBQUM7U0FDSCxFQUFFO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLHdCQUF3QjtvQkFDOUIsY0FBYyxFQUFFLElBQUk7b0JBQ3BCLFNBQVMsRUFBRSxxQkFBcUI7aUJBQ2pDO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsQ0FBQztvQkFDUCxFQUFFLEVBQUUsVUFBVTtvQkFDZCxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ3pCO2lCQUNGLENBQUM7U0FDSCxDQUFDO0lBQ0YsT0FBTyxFQUFFLGdCQUFnQjtDQUMxQjtBQUVELGVBQWUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi4vc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1jb25maWcnO1xuXG5mdW5jdGlvbiBnZXRMaW5rcyhwcmVmaXgpIHtcbiAgbGV0IGk7XG4gIGNvbnN0IGxpbWl0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCBsaW5rcyA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgbGltaXQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRleHQgPSBgJHtwcmVmaXh9ICR7aSArIDF9YDtcbiAgICBsaW5rcy5wdXNoKHtcbiAgICAgIHRleHQsXG4gICAgICBjb3VudGVyOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgICAgcGF5bG9hZDogdGV4dFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBsaW5rcztcbn1cblxuY29uc3QgY29uZmlndXJhdGlvbjogU2VhcmNoRmFjZXRzQ29uZmlnID0ge1xuICBzZWN0aW9uczogW3tcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWZpbHRyYScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdGaWx0cmEgaSByaXN1bHRhdGknXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LTAwJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdpbnB1dC10ZXh0LTAwJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBuZWkgdGl0b2xpJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbidcbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci10b3BvbmltaScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdUb3BvbmltaScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnNzg2JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtMDEnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaW50ZXJuYWw6IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnaW5wdXQtdGV4dC0wMScsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbnB1dC0wMicsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBnZXRMaW5rcygnVG9wb25pbW8nKVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWdsb3NzYXJpbycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdHbG9zc2FyaW8nLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzk2JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtMDMnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaW50ZXJuYWw6IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnaW5wdXQtdGV4dC0wMicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbnB1dC0wNCcsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBnZXRMaW5rcygnQ29uY2V0dG8nKVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWNvbnRpbmVudGknLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnQ29udGluZW50aScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnMydcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtMDUnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogZ2V0TGlua3MoJ0NvbnRpbmVudGUnKVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWtleXdvcmRzJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0tleXdvcmRzJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICcxMDgnLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLXJpZ2h0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC0wNicsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBnZXRMaW5rcygnS2V5d29yZCcpXG4gICAgICB9XG4gICAgfV0sXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWRhdGEnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnRGF0YSBkaSBwdWJibGljYXppb25lJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICcyMCcsXG4gICAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtcmlnaHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LTA3JyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IGdldExpbmtzKCdEYXRhJylcbiAgICAgIH1cbiAgICB9XSxcbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItbHVvZ28nLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnTHVvZ28gZGkgcHViYmxpY2F6aW9uZScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnMTUnLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLXJpZ2h0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC0wOCcsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBnZXRMaW5rcygnTHVvZ28nKVxuICAgICAgfVxuICAgIH1dLFxuICB9XSxcbiAgY2xhc3NlczogJ2ZhY2V0cy13cmFwcGVyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJhdGlvbjtcbiJdfQ==