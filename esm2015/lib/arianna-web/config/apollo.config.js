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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb25maWcvYXBvbGxvLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBQ2IsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7O09BT1I7S0FDSjtJQUNELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztNQWdCVDtLQUNIO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtFUjtLQUNKO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBd0NMO0tBQ1A7SUFDRCxxQkFBcUIsRUFBRTtRQUNyQixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBNkJMO0tBQ1A7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVGUjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXFJUDtLQUNMO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtRFA7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWdIVDtLQUNIO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW9CVDtLQUNIO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7UUFNUDtLQUNMO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7TUFlVDtLQUNIO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7TUFhVDtLQUNIO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O01BZ0JUO0tBQ0g7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldExhc3RQb3N0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcclxuICAgIHF1ZXJ5Qm9keTogYFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdldExhc3RQb3N0cyhfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gIH0sXHJcbiAgZ2V0U2xpZGVyOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRTbGlkZXInLFxyXG4gICAgcXVlcnlCb2R5OiBgIHtcclxuICAgICAgZ2V0U2xpZGVyIHtcclxuICAgICAgICBwcmV0ZXh0XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgY3RhTGFiZWxcclxuICAgICAgICBjdGFQYXlsb2FkXHJcbiAgICAgICAgbWV0YWRhdGEge1xyXG4gICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gXHJcbiAgfSxcclxuICBnZXRUcmVlOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRUcmVlT2ZJdGVtcycsXHJcbiAgICBxdWVyeUJvZHk6IGBcclxuICAgICAge1xyXG4gICAgICAgIGdldFRyZWVPZkl0ZW1ze1xyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpbWdcclxuICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICBicmFuY2hlcyB7XHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBicmFuY2hlcyB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYCxcclxuICB9LFxyXG4gIGdsb2JhbEZpbHRlcjoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XHJcbiAgICAgICAgICBlbnRpdGllc0RhdGEge1xyXG4gICAgICAgICAgICBlbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgfSBjb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZU9mRW50aXR5RGF0YSB7XHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0RW50aXR5UmVsYXRlZEl0ZW1zOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcclxuICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0RW50aXR5RGV0YWlsczoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5JyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBnZXRFbnRpdHkoX19QQVJBTVNfXyl7XHJcbiAgICAgICAgICByZWxhdGVkSXRlbXNUb3RhbENvdW50LFxyXG4gICAgICAgICAgcmVsYXRlZExhVG90YWxDb3VudDogcmVsYXRlZEFsVG90YWxDb3VudCxcclxuICAgICAgICAgIG92ZXJ2aWV3VGFiXHJcbiAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgcmVsYXRlZExhOiByZWxhdGVkQWwge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgcmVsYXRpb24gICAgICAgICAgXHJcbiAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXh0cmFUYWJcclxuICAgICAgICAgIHdpa2lUYWIge1xyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgIHJlbGF0aW9uXHJcbiAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBmaWVsZHNcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgICBlbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICAgIHJlbGF0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYCxcclxuICB9LFxyXG4gIGdldEl0ZW06IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW0nLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGdldEl0ZW0oX19QQVJBTVNfXykge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICBpY29uXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgc3ViVGl0bGVcclxuICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIGVudGl0eXtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcclxuICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9YCxcclxuICB9LFxyXG4gIGdldE5vZGU6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldE5vZGUnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGdldE5vZGUoX19QQVJBTVNfXykge1xyXG4gICAgICAgICAgLi4uIG9uIEl0ZW0ge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBzdWJUaXRsZVxyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICBkaWdpdGFsT2JqZWN0cyB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgb3JkZXJcclxuICAgICAgICAgICAgICBpdGVtcyB7ICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcmRlciAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHVybCAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgICBlbnRpdHl7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLi4uIG9uIE5vZGUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgIGVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9YCxcclxuICB9LFxyXG4gIGF1dG9Db21wbGV0ZToge1xyXG4gICAgcXVlcnlOYW1lOiAnYXV0b0NvbXBsZXRlJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBhdXRvQ29tcGxldGUoX19QQVJBTVNfXyl7XHJcbiAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICByZXN1bHRzIHtcclxuICAgICAgICAgICAgLi4uIG9uIEVudGl0eUNvdW50RGF0YSB7XHJcbiAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICBlbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLiBvbiBJdGVtTGlzdGluZyB7XHJcbiAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9YCxcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgc2VhcmNoKF9fUEFSQU1TX18pe1xyXG4gICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICByZXN1bHRzIHtcclxuICAgICAgICAgIG9yZGVye1xyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICBkaXJlY3Rpb25cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkc1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBoaWdobGlnaHRcclxuICAgICAgICAgICAgbGltaXRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgICAgLi4uIG9uIEVudGl0eSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgICBlbnRpdHl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIEl0ZW0ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBzdWJUaXRsZVxyXG4gICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWAsXHJcbiAgfSxcclxuICBmYWNldHM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ3NlYXJjaCcsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgIHNlYXJjaChfX1BBUkFNU19fKXtcclxuICAgICAgICBmYWNldHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgICAgIG9wZXJhdG9yXHJcbiAgICAgICAgICBsaW1pdFxyXG4gICAgICAgICAgb3JkZXJcclxuICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICBjb3VudGVyXHJcbiAgICAgICAgICAgIHNlYXJjaERhdGEge1xyXG4gICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0TWlzc2luZ0J1YmJsZToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5JyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBnZXRFbnRpdHkoX19QQVJBTVNfXyl7XHJcbiAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgIH1cclxuICAgICAgfWAsXHJcbiAgfSxcclxuICBnZXRNYXBPYmplY3RzOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRNYXBPYmplY3RzJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgZ2V0TWFwT2JqZWN0c3tcclxuICAgICAgICBsYXRcclxuICAgICAgICBsb25cclxuICAgICAgICBpdGVtIHtcclxuICAgICAgICAgIC4uLm9uIEl0ZW0ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4uLm9uIEVudGl0eSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWAsXHJcbiAgfSxcclxuICBnZXRFdmVudE9iamVjdHM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldEV2ZW50T2JqZWN0cycsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgIGdldEV2ZW50T2JqZWN0c3tcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN0YXJ0XHJcbiAgICAgICAgZW5kXHJcbiAgICAgICAgbGFiZWxcclxuICAgICAgICBpdGVtIHtcclxuICAgICAgICAgIC4uLiBvbiBFbnRpdHkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWAsXHJcbiAgfSxcclxuICBnZXRDb2xsZWN0aW9uOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRDb2xsZWN0aW9uJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgZ2V0Q29sbGVjdGlvbihfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBpdGVtcyB7XHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgYmFja2dyb3VuZFxyXG4gICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYTR2SWRcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgICAgIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YFxyXG4gIH1cclxufTtcclxuIl19