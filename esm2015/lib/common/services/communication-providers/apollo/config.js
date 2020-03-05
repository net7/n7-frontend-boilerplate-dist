/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/apollo/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ApolloProviderConfig = {
    getLastPosts: {
        queryName: 'getLastPosts',
        queryBody: `
      {
        getLastPosts(__PARAMS__) {
          id
          title
        }
      }
    `,
    },
    getTree: {
        queryName: 'getTreeOfItems',
        queryBody: `
    {
      getTreeOfItems{
        id
        label
        icon
        branches {
          label
          id
          img
          branches {
            label
            id
            icon
            img
            branches {
              label
              id
              icon
              img
              branches {
                label
                id
                icon
                img
                branches {
                  label
                  id
                  icon
                  img
                  branches {
                    label
                    id
                    icon
                    img
                    branches {
                      label
                      id
                      icon
                      img
                      branches {
                        label
                        id
                        icon
                        img
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    },
    globalFilter: {
        queryName: 'globalFilter',
        queryBody: `{
      globalFilter(__PARAMS__){
        entitiesData {
          entity {
              id
              label
              typeOfEntity
          } count
        }
        typeOfEntityData {
          type
          count
        }
        itemsPagination {
          totalCount
          items {
            thumbnail
            item {
              id
              label
              fields
              {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
              breadcrumbs {
                label
                link
              }
              relatedTypesOfEntity {
                type
                count
              }
            }
          }
        }
      }
      }`,
    },
    getEntityDetails: {
        queryName: 'getEntity',
        queryBody: `{
      getEntity(__PARAMS__){
        overviewTab
        label
        id
        typeOfEntity
        fields {
          ...
          on KeyValueField {
            key
            value
          }
          ... on
          KeyValueFieldGroup {
            label
            fields
            {
              ...
              on KeyValueField {
                key
                value
              }
            }
          }
        }
        extraTab
        wikiTab {
          text
          url
        }
        relatedItems {
          thumbnail
          item {
            label
            id
            fields
            {
              ...
              on KeyValueField {
                key
                value
              }
            }
            breadcrumbs {
              label
              link
            }
          }
          relatedTypesOfEntity {
            type
            count
          }
        }
        relatedEntities {
          entity {
              id
              label
              typeOfEntity
          }
          count
        }
      }
    }
    `,
    },
    getItem: {
        queryName: 'getItem',
        queryBody: `{
      getItem(__PARAMS__) {
        id
        label
        icon
        title
        subTitle
        image
        text
        fields {
          ...
          on KeyValueField {
            key
            value
          }
          ... on KeyValueFieldGroup {
            label
            fields {
              ...
              on KeyValueField {
                key
                value
              }
            }
          }
        }
        relatedEntities {
          count
          entity{
            id
            label
            typeOfEntity
          }
        }
        relatedItems {
          thumbnail
          item {
            label
            id
            relatedTypesOfEntity {
              type
              count
            }
          }
        }
        breadcrumbs {
          label
          link
        }
      }
    }`,
    },
    getNode: {
        queryName: 'getNode',
        queryBody: `{
      getNode(__PARAMS__) {
        ... on Item {
          id
          label
          icon
          title
          subTitle
          image
          text
          fields {
            ...
            on KeyValueField {
              key
              value
            }
            ... on KeyValueFieldGroup {
              label
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
          relatedEntities {
              count
              entity{
                id
                label
                typeOfEntity
              }
          }
          relatedItems {
              thumbnail
              item {
                label
                id
                fields {
                  ...
                  on KeyValueField {
                    key
                    value
                  }
                  ... on KeyValueFieldGroup {
                    label
                    fields {
                      ...
                      on KeyValueField {
                        key
                        value
                      }
                    }
                  }
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
          breadcrumbs {
            label
            link
          }
        }
        ... on Node {
          id
          label
          img
          fields {
            ...
            on KeyValueField {
              key
              value
            }
            ... on KeyValueFieldGroup {
              label
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
        }
      }
    }`,
    },
    autoComplete: {
        queryName: 'autoComplete',
        queryBody: `{
      autoComplete(__PARAMS__){
        totalCount
        results {
          ... on EntityCountData {
            count
            entity {
              id
              label
              typeOfEntity
              fields {
                ... on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ... on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
          ... on ItemListing {
            item {
              id
              label
              document_type
              fields {
                ... on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ... on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    },
    search: {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        totalCount
        facets {
          id
          type
          operator
          limit
          order
          data {
            label
            value
            counter
            searchData {
              key
              value
            }
          }
        }
        results {
          order{
            type
            key
            direction
          }
          fields
          {
            id
            highlight
            limit
          }
          items {
            ... on Entity {
              id
              label
              typeOfEntity
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ...
                    on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
              relatedEntities {
                  count
                  entity{
                    id
                    label
                    typeOfEntity
                  }
              }
              relatedItems {
                  thumbnail
                  item {
                    label
                    id
                    fields {
                      ...
                      on KeyValueField {
                        key
                        value
                      }
                      ... on KeyValueFieldGroup {
                        label
                        fields {
                          ...
                          on KeyValueField {
                            key
                            value
                          }
                        }
                      }
                    }
                }
                relatedTypesOfEntity {
                  type
                  count
                }
              }
            }
            ... on Item {
              id
              label
              icon
              title
              subTitle
              image
              text
              relatedTypesOfEntity {
                type
                count
              }
              breadcrumbs {
                label
                link
              }
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
                ... on KeyValueFieldGroup {
                  label
                  fields {
                    ...
                    on KeyValueField {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    },
    getMissingBubble: {
        queryName: 'getEntity',
        queryBody: `{
      getEntity(__PARAMS__){
        label
        id
        typeOfEntity
      }
    }`,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sT0FBTyxvQkFBb0IsR0FBRztJQUNsQyxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7S0FPVjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1RFY7S0FDRjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXdDUDtLQUNMO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRFY7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFrRFQ7S0FDSDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTJGVDtLQUNIO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtRFQ7S0FDSDtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQStIVDtLQUNIO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7TUFNVDtLQUNIO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQXBvbGxvUHJvdmlkZXJDb25maWcgPSB7XHJcbiAgZ2V0TGFzdFBvc3RzOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRMYXN0UG9zdHMnLFxyXG4gICAgcXVlcnlCb2R5OiBgXHJcbiAgICAgIHtcclxuICAgICAgICBnZXRMYXN0UG9zdHMoX19QQVJBTVNfXykge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIH0sXHJcbiAgZ2V0VHJlZToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxyXG4gICAgcXVlcnlCb2R5OiBgXHJcbiAgICB7XHJcbiAgICAgIGdldFRyZWVPZkl0ZW1ze1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbGFiZWxcclxuICAgICAgICBpY29uXHJcbiAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpbWdcclxuICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGAsXHJcbiAgfSxcclxuICBnbG9iYWxGaWx0ZXI6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcclxuICAgICAgICBlbnRpdGllc0RhdGEge1xyXG4gICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICB9IGNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR5cGVPZkVudGl0eURhdGEge1xyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgY291bnRcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcclxuICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgfWAsXHJcbiAgfSxcclxuICBnZXRFbnRpdHlEZXRhaWxzOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBnZXRFbnRpdHkoX19QQVJBTVNfXyl7XHJcbiAgICAgICAgb3ZlcnZpZXdUYWJcclxuICAgICAgICBsYWJlbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLi4uIG9uXHJcbiAgICAgICAgICBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBleHRyYVRhYlxyXG4gICAgICAgIHdpa2lUYWIge1xyXG4gICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbGF0ZWRJdGVtcyB7XHJcbiAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYCxcclxuICB9LFxyXG4gIGdldEl0ZW06IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW0nLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBnZXRJdGVtKF9fUEFSQU1TX18pIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGxhYmVsXHJcbiAgICAgICAgaWNvblxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgc3ViVGl0bGVcclxuICAgICAgICBpbWFnZVxyXG4gICAgICAgIHRleHRcclxuICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgLi4uXHJcbiAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBlbnRpdHl7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICBsaW5rXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGdldE5vZGU6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldE5vZGUnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBnZXROb2RlKF9fUEFSQU1TX18pIHtcclxuICAgICAgICAuLi4gb24gSXRlbSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGljb25cclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBzdWJUaXRsZVxyXG4gICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgIHRleHRcclxuICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgIGVudGl0eXtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcclxuICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuLi4gb24gTm9kZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGF1dG9Db21wbGV0ZToge1xyXG4gICAgcXVlcnlOYW1lOiAnYXV0b0NvbXBsZXRlJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xyXG4gICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICByZXN1bHRzIHtcclxuICAgICAgICAgIC4uLiBvbiBFbnRpdHlDb3VudERhdGEge1xyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICBlbnRpdHkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4uLiBvbiBJdGVtTGlzdGluZyB7XHJcbiAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgc2VhcmNoKF9fUEFSQU1TX18pe1xyXG4gICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICBmYWNldHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgICAgIG9wZXJhdG9yXHJcbiAgICAgICAgICBsaW1pdFxyXG4gICAgICAgICAgb3JkZXJcclxuICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICBjb3VudGVyXHJcbiAgICAgICAgICAgIHNlYXJjaERhdGEge1xyXG4gICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0cyB7XHJcbiAgICAgICAgICBvcmRlcntcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgZGlyZWN0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgaGlnaGxpZ2h0XHJcbiAgICAgICAgICAgIGxpbWl0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtcyB7XHJcbiAgICAgICAgICAgIC4uLiBvbiBFbnRpdHkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgICAgZW50aXR5e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gSXRlbSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIHN1YlRpdGxlXHJcbiAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGdldE1pc3NpbmdCdWJibGU6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcclxuICAgICAgICBsYWJlbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgIH1cclxuICAgIH1gLFxyXG4gIH0sXHJcbn07XHJcbiJdfQ==