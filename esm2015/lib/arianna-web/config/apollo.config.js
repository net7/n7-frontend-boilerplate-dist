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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb25maWcvYXBvbGxvLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBQ2IsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7O09BT1I7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrRVI7S0FDSjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXdDTDtLQUNQO0lBQ0QscUJBQXFCLEVBQUU7UUFDckIsU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQTZCTDtLQUNQO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUZSO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1EUDtLQUNMO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBcUlQO0tBQ0w7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1EUDtLQUNMO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BZ0hUO0tBQ0g7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFBUTtRQUNuQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bb0JUO0tBQ0g7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7OztRQU1QO0tBQ0w7SUFDRCxhQUFhLEVBQUU7UUFDYixTQUFTLEVBQUUsZUFBZTtRQUMxQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztNQWVUO0tBQ0g7SUFDRCxlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7OztNQWFUO0tBQ0g7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldExhc3RQb3N0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcclxuICAgIHF1ZXJ5Qm9keTogYFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGdldExhc3RQb3N0cyhfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gIH0sXHJcbiAgZ2V0VHJlZToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxyXG4gICAgcXVlcnlCb2R5OiBgXHJcbiAgICAgIHtcclxuICAgICAgICBnZXRUcmVlT2ZJdGVtc3tcclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaW1nXHJcbiAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICBicmFuY2hlcyB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudF9jbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGAsXHJcbiAgfSxcclxuICBnbG9iYWxGaWx0ZXI6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2xvYmFsRmlsdGVyKF9fUEFSQU1TX18pe1xyXG4gICAgICAgICAgZW50aXRpZXNEYXRhIHtcclxuICAgICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgIH0gY291bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHR5cGVPZkVudGl0eURhdGEge1xyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9YCxcclxuICB9LFxyXG4gIGdldEVudGl0eVJlbGF0ZWRJdGVtczoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XHJcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9YCxcclxuICB9LFxyXG4gIGdldEVudGl0eURldGFpbHM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2V0RW50aXR5KF9fUEFSQU1TX18pe1xyXG4gICAgICAgICAgb3ZlcnZpZXdUYWJcclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICByZWxhdGVkTGE6IHJlbGF0ZWRBbCB7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbFxyXG4gICAgICAgICAgICByZWxhdGlvbiAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleHRyYVRhYlxyXG4gICAgICAgICAgd2lraVRhYiB7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGZpZWxkc1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XHJcbiAgICAgICAgICAgIGVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgLFxyXG4gIH0sXHJcbiAgZ2V0SXRlbToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0SXRlbScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2V0SXRlbShfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIGljb25cclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBzdWJUaXRsZVxyXG4gICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgIHRleHRcclxuICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcclxuICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgZW50aXR5e1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcclxuICAgICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gIH0sXHJcbiAgZ2V0Tm9kZToge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0Tm9kZScsXHJcbiAgICBxdWVyeUJvZHk6IGB7XHJcbiAgICAgICAgZ2V0Tm9kZShfX1BBUkFNU19fKSB7XHJcbiAgICAgICAgICAuLi4gb24gSXRlbSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIHN1YlRpdGxlXHJcbiAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgIGRpZ2l0YWxPYmplY3RzIHtcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICBvcmRlclxyXG4gICAgICAgICAgICAgIGl0ZW1zIHsgICAgICBcclxuICAgICAgICAgICAgICAgIG9yZGVyICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdXJsICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIGVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICAgIHJlbGF0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcclxuICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgbGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuLi4gb24gTm9kZSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICBkb2N1bWVudF90eXBlXHJcbiAgICAgICAgICAgIGRvY3VtZW50X2NsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xyXG4gICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgZW50aXR5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICByZWxhdGlvblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhZGNydW1icyB7XHJcbiAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gIH0sXHJcbiAgYXV0b0NvbXBsZXRlOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdhdXRvQ29tcGxldGUnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGF1dG9Db21wbGV0ZShfX1BBUkFNU19fKXtcclxuICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgIHJlc3VsdHMge1xyXG4gICAgICAgICAgICAuLi4gb24gRW50aXR5Q291bnREYXRhIHtcclxuICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgIGVudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIEl0ZW1MaXN0aW5nIHtcclxuICAgICAgICAgICAgICBpdGVtIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfdHlwZVxyXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1gLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdzZWFyY2gnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBzZWFyY2goX19QQVJBTVNfXyl7XHJcbiAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgIHJlc3VsdHMge1xyXG4gICAgICAgICAgb3JkZXJ7XHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgIGRpcmVjdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodFxyXG4gICAgICAgICAgICBsaW1pdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgICAuLi4gb24gRW50aXR5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgICAgICAgIGVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZWxhdGVkSXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gSXRlbSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIHN1YlRpdGxlXHJcbiAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgIGxpbmtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZmllbGRzIHtcclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGZhY2V0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgc2VhcmNoKF9fUEFSQU1TX18pe1xyXG4gICAgICAgIGZhY2V0cyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgb3BlcmF0b3JcclxuICAgICAgICAgIGxpbWl0XHJcbiAgICAgICAgICBvcmRlclxyXG4gICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIGNvdW50ZXJcclxuICAgICAgICAgICAgc2VhcmNoRGF0YSB7XHJcbiAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWAsXHJcbiAgfSxcclxuICBnZXRNaXNzaW5nQnViYmxlOiB7XHJcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdHlwZU9mRW50aXR5XHJcbiAgICAgICAgfVxyXG4gICAgICB9YCxcclxuICB9LFxyXG4gIGdldE1hcE9iamVjdHM6IHtcclxuICAgIHF1ZXJ5TmFtZTogJ2dldE1hcE9iamVjdHMnLFxyXG4gICAgcXVlcnlCb2R5OiBge1xyXG4gICAgICBnZXRNYXBPYmplY3Rze1xyXG4gICAgICAgIGxhdFxyXG4gICAgICAgIGxvblxyXG4gICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgLi4ub24gSXRlbSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLi4ub24gRW50aXR5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG4gIGdldEV2ZW50T2JqZWN0czoge1xyXG4gICAgcXVlcnlOYW1lOiAnZ2V0RXZlbnRPYmplY3RzJyxcclxuICAgIHF1ZXJ5Qm9keTogYHtcclxuICAgICAgZ2V0RXZlbnRPYmplY3Rze1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3RhcnRcclxuICAgICAgICBlbmRcclxuICAgICAgICBsYWJlbFxyXG4gICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgLi4uIG9uIEVudGl0eSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICB9LFxyXG59O1xyXG4iXX0=