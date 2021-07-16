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
    getSlider: {
        queryName: 'getSlider',
        queryBody: ` {
      getSlider {
        pretext
        title
        text
        background {
            type
            value
        }
        ctaLabel
        ctaPayload
        metadata {
            key
            value
        }
      }
    }`
    },
    getTreeLite: {
        queryName: 'getTreeOfItems',
        queryBody: `
      {
        getTreeOfItems{
          label
          id
          document_type
          document_classification
          branches {
            label
            id
            document_type
            document_classification
            branches {
              label
              id
              document_type
              document_classification
              branches {
                label
                id
                document_type
                document_classification
                branches {
                  label
                  id
                  document_type
                  document_classification
                  branches {
                    label
                    id
                    document_type
                    document_classification
                    branches {
                      label
                      id
                      document_type
                      document_classification
                      branches {
                        label
                        id
                        document_type
                        document_classification
                        branches {
                          label
                          id
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
    getEntityRelatedItems: {
        queryName: 'globalFilter',
        queryBody: `{
        globalFilter(__PARAMS__){
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
          relatedItemsTotalCount,
          relatedLaTotalCount: relatedAlTotalCount,
          overviewTab
          label
          id
          typeOfEntity
          relatedLa: relatedAl {
            thumbnail
            relation          
            item {
              label
              id
              fields {
                ...
                on KeyValueField {
                  key
                  value
                }
              }
            }
          }
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
                relation
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
              relation
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
            digitalObjects {
              label
              type
              url
              order
              items {      
                order      
                label
                url                 
              }
            }
            text
            document_type
            document_classification
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
            document_classification
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
            relatedEntities {
              count
              entity {
                id
                label
                typeOfEntity
                relation
              }
            }
            breadcrumbs {
              label
              link
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
    facets: {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        facets {
          id
          type
          operator
          limit
          order
          totalCount
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
    getMapObjects: {
        queryName: 'getMapObjects',
        queryBody: `{
      getMapObjects{
        lat
        lon
        item {
          ...on Item {
              id
              label
          }
          ...on Entity {
              id
              label
          }
        }
      }
    }`,
    },
    getEventObjects: {
        queryName: 'getEventObjects',
        queryBody: `{
      getEventObjects{
        id
        start
        end
        label
        item {
          ... on Entity {
            id
            label
          }
        }
      }
    }`,
    },
    getCollection: {
        queryName: 'getCollection',
        queryBody: `{
      getCollection(__PARAMS__) {
        title
        text
        total
        items {
          title
          content
          background
          image
          url
          a4vId
          type
          classification
        }
      }
    }`
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb25maWcvYXBvbGxvLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBQ2IsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7O09BT1I7S0FDSjtJQUNELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztNQWdCVDtLQUNIO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXlEUjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtFUjtLQUNKO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBd0NMO0tBQ1A7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBNkJMO0tBQ1A7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVGUjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXFJUDtLQUNMO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWdIVDtLQUNIO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW9CVDtLQUNIO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7UUFNUDtLQUNMO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7TUFlVDtLQUNIO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7TUFhVDtLQUNIO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O01BZ0JUO0tBQ0g7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBnZXRMYXN0UG9zdHM6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRMYXN0UG9zdHMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAgICB7XG4gICAgICAgICAgZ2V0TGFzdFBvc3RzKF9fUEFSQU1TX18pIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgfSxcbiAgZ2V0U2xpZGVyOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0U2xpZGVyJyxcbiAgICBxdWVyeUJvZHk6IGAge1xuICAgICAgZ2V0U2xpZGVyIHtcbiAgICAgICAgcHJldGV4dFxuICAgICAgICB0aXRsZVxuICAgICAgICB0ZXh0XG4gICAgICAgIGJhY2tncm91bmQge1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBjdGFMYWJlbFxuICAgICAgICBjdGFQYXlsb2FkXG4gICAgICAgIG1ldGFkYXRhIHtcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gIGdldFRyZWVMaXRlOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAge1xuICAgICAgICBnZXRUcmVlT2ZJdGVtc3tcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGlkXG4gICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxuICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgLFxuICB9LFxuICBnZXRUcmVlOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAge1xuICAgICAgICBnZXRUcmVlT2ZJdGVtc3tcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGlkXG4gICAgICAgICAgaW1nXG4gICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBpbWdcbiAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgLFxuICB9LFxuICBnbG9iYWxGaWx0ZXI6IHtcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2xvYmFsRmlsdGVyKF9fUEFSQU1TX18pe1xuICAgICAgICAgIGVudGl0aWVzRGF0YSB7XG4gICAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgIH0gY291bnRcbiAgICAgICAgICB9XG4gICAgICAgICAgdHlwZU9mRW50aXR5RGF0YSB7XG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xuICAgICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9YCxcbiAgfSxcbiAgZ2V0RW50aXR5UmVsYXRlZEl0ZW1zOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xuICAgICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9YCxcbiAgfSxcbiAgZ2V0RW50aXR5RGV0YWlsczoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgICBnZXRFbnRpdHkoX19QQVJBTVNfXyl7XG4gICAgICAgICAgcmVsYXRlZEl0ZW1zVG90YWxDb3VudCxcbiAgICAgICAgICByZWxhdGVkTGFUb3RhbENvdW50OiByZWxhdGVkQWxUb3RhbENvdW50LFxuICAgICAgICAgIG92ZXJ2aWV3VGFiXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpZFxuICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgIHJlbGF0ZWRMYTogcmVsYXRlZEFsIHtcbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgcmVsYXRpb24gICAgICAgICAgXG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4dHJhVGFiXG4gICAgICAgICAgd2lraVRhYiB7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgcmVsYXRpb25cbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBmaWVsZHNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgcmVsYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgLFxuICB9LFxuICBnZXRJdGVtOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0SXRlbScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgICBnZXRJdGVtKF9fUEFSQU1TX18pIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWNvblxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICBpbWFnZVxuICAgICAgICAgIHRleHRcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICBlbnRpdHl7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICByZWxhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBsaW5rXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9YCxcbiAgfSxcbiAgZ2V0Tm9kZToge1xuICAgIHF1ZXJ5TmFtZTogJ2dldE5vZGUnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2V0Tm9kZShfX1BBUkFNU19fKSB7XG4gICAgICAgICAgLi4uIG9uIEl0ZW0ge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICBkaWdpdGFsT2JqZWN0cyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIG9yZGVyXG4gICAgICAgICAgICAgIGl0ZW1zIHsgICAgICBcbiAgICAgICAgICAgICAgICBvcmRlciAgICAgIFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgdXJsICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgZW50aXR5e1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgICAgIHJlbGF0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi4gb24gTm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxuICAgICAgICAgICAgZG9jdW1lbnRfY2xhc3NpZmljYXRpb25cbiAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgICByZWxhdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1gLFxuICB9LFxuICBhdXRvQ29tcGxldGU6IHtcbiAgICBxdWVyeU5hbWU6ICdhdXRvQ29tcGxldGUnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xuICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICByZXN1bHRzIHtcbiAgICAgICAgICAgIC4uLiBvbiBFbnRpdHlDb3VudERhdGEge1xuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLiBvbiBJdGVtTGlzdGluZyB7XG4gICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9YCxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBzZWFyY2goX19QQVJBTVNfXyl7XG4gICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgcmVzdWx0cyB7XG4gICAgICAgICAgb3JkZXJ7XG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICBrZXlcbiAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZHNcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaGlnaGxpZ2h0XG4gICAgICAgICAgICBsaW1pdFxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAuLi4gb24gRW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XG4gICAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICAgICAgZW50aXR5e1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZWxhdGVkSXRlbXMge1xuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLiBvbiBJdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICBzdWJUaXRsZVxuICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YCxcbiAgfSxcbiAgZmFjZXRzOiB7XG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBzZWFyY2goX19QQVJBTVNfXyl7XG4gICAgICAgIGZhY2V0cyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0eXBlXG4gICAgICAgICAgb3BlcmF0b3JcbiAgICAgICAgICBsaW1pdFxuICAgICAgICAgIG9yZGVyXG4gICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgICBzZWFyY2hEYXRhIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWAsXG4gIH0sXG4gIGdldE1pc3NpbmdCdWJibGU6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2V0RW50aXR5KF9fUEFSQU1TX18pe1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgfVxuICAgICAgfWAsXG4gIH0sXG4gIGdldE1hcE9iamVjdHM6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRNYXBPYmplY3RzJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRNYXBPYmplY3Rze1xuICAgICAgICBsYXRcbiAgICAgICAgbG9uXG4gICAgICAgIGl0ZW0ge1xuICAgICAgICAgIC4uLm9uIEl0ZW0ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi5vbiBFbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gLFxuICB9LFxuICBnZXRFdmVudE9iamVjdHM6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFdmVudE9iamVjdHMnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdldEV2ZW50T2JqZWN0c3tcbiAgICAgICAgaWRcbiAgICAgICAgc3RhcnRcbiAgICAgICAgZW5kXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGl0ZW0ge1xuICAgICAgICAgIC4uLiBvbiBFbnRpdHkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWAsXG4gIH0sXG4gIGdldENvbGxlY3Rpb246IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRDb2xsZWN0aW9uJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRDb2xsZWN0aW9uKF9fUEFSQU1TX18pIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgdGV4dFxuICAgICAgICB0b3RhbFxuICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgYmFja2dyb3VuZFxuICAgICAgICAgIGltYWdlXG4gICAgICAgICAgdXJsXG4gICAgICAgICAgYTR2SWRcbiAgICAgICAgICB0eXBlXG4gICAgICAgICAgY2xhc3NpZmljYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH1cbn07XG4iXX0=