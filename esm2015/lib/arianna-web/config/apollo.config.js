/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/config/apollo.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export default {
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
          label
          id
          img
          document_type
          document_classification
          branches {
            label
            id
            img
            document_type
            document_classification
            branches {
              label
              id
              img
              document_type
              document_classification
              branches {
                label
                id
                img
                document_type
                document_classification
                branches {
                  label
                  id
                  img
                  document_type
                  document_classification
                  branches {
                    label
                    id
                    img
                    document_type
                    document_classification
                    branches {
                      label
                      id
                      img
                      document_type
                      document_classification
                      branches {
                        label
                        id
                        img
                        document_type
                        document_classification
                        branches {
                          label
                          id
                          img
                          document_type
                          document_classification
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
            relation
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
            title
            subTitle
            image
            images
            text
            document_type
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
                  relation
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
            document_type
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb25maWcvYXBvbGxvLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7SUFDYixZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7T0FPUjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtFUjtLQUNKO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBd0NMO0tBQ1A7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnRVI7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFrRFA7S0FDTDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQThGUDtLQUNMO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQStIUDtLQUNMO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7UUFNUDtLQUNMO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0TGFzdFBvc3RzOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICAgICAge1xuICAgICAgICAgIGdldExhc3RQb3N0cyhfX1BBUkFNU19fKSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gIH0sXG4gIGdldFRyZWU6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRUcmVlT2ZJdGVtcycsXG4gICAgcXVlcnlCb2R5OiBgXG4gICAgICB7XG4gICAgICAgIGdldFRyZWVPZkl0ZW1ze1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICBpbWdcbiAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGAsXG4gIH0sXG4gIGdsb2JhbEZpbHRlcjoge1xuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XG4gICAgICAgICAgZW50aXRpZXNEYXRhIHtcbiAgICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgfSBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgICB0eXBlT2ZFbnRpdHlEYXRhIHtcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbiB7XG4gICAgICAgICAgICB0b3RhbENvdW50XG4gICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH1gLFxuICB9LFxuICBnZXRFbnRpdHlEZXRhaWxzOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5JyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcbiAgICAgICAgICBvdmVydmlld1RhYlxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb25cbiAgICAgICAgICAgIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4dHJhVGFiXG4gICAgICAgICAgd2lraVRhYiB7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgcmVsYXRpb25cbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBmaWVsZHNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYCxcbiAgfSxcbiAgZ2V0SXRlbToge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW0nLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2V0SXRlbShfX1BBUkFNU19fKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGljb25cbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgZW50aXR5e1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgbGlua1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWAsXG4gIH0sXG4gIGdldE5vZGU6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXROb2RlJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdldE5vZGUoX19QQVJBTVNfXykge1xuICAgICAgICAgIC4uLiBvbiBJdGVtIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgaW1hZ2VzXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XG4gICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICBlbnRpdHl7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICAgICAgcmVsYXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGVkSXRlbXMge1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC4uLiBvbiBOb2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1gLFxuICB9LFxuICBhdXRvQ29tcGxldGU6IHtcbiAgICBxdWVyeU5hbWU6ICdhdXRvQ29tcGxldGUnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xuICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICByZXN1bHRzIHtcbiAgICAgICAgICAgIC4uLiBvbiBFbnRpdHlDb3VudERhdGEge1xuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLiBvbiBJdGVtTGlzdGluZyB7XG4gICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9YCxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIHNlYXJjaChfX1BBUkFNU19fKXtcbiAgICAgICAgICB0b3RhbENvdW50XG4gICAgICAgICAgZmFjZXRzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICBvcGVyYXRvclxuICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICAgIG9yZGVyXG4gICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICAgICBzZWFyY2hEYXRhIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgICAgb3JkZXJ7XG4gICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGhpZ2hsaWdodFxuICAgICAgICAgICAgICBsaW1pdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAuLi4gb24gRW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLi4uIG9uIEl0ZW0ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBzdWJUaXRsZVxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWAsXG4gIH0sXG4gIGdldE1pc3NpbmdCdWJibGU6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2V0RW50aXR5KF9fUEFSQU1TX18pe1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgfVxuICAgICAgfWAsXG4gIH0sXG59O1xuIl19