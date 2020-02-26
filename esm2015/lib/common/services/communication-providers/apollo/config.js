/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/apollo/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ApolloProviderConfig = {
    'getLastPosts': {
        queryName: 'getLastPosts',
        queryBody: `
      {
        getLastPosts(__PARAMS__) {
          id
          title
        }
      }
    `
    },
    'getTree': {
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
    `
    },
    'globalFilter': {
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
      }`
    },
    'getEntityDetails': {
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
    `
    },
    'getItem': {
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
    }`
    },
    'getNode': {
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
    }`
    },
    'autoComplete': {
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
    }`
    },
    'search': {
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
    }`
    },
    'getMissingBubble': {
        queryName: 'getEntity',
        queryBody: `{
      getEntity(__PARAMS__){
        label
        id
        typeOfEntity
      }
    }`
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sT0FBTyxvQkFBb0IsR0FBRztJQUNsQyxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7S0FPVjtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1RFY7S0FDRjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXdDUDtLQUNMO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErRFY7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFrRFQ7S0FDSDtJQUNELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTJGVDtLQUNIO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtRFQ7S0FDSDtJQUNELFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQStIVDtLQUNIO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsU0FBUyxFQUFFOzs7Ozs7TUFNVDtLQUNIO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQXBvbGxvUHJvdmlkZXJDb25maWcgPSB7XG4gICdnZXRMYXN0UG9zdHMnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICAgIHtcbiAgICAgICAgZ2V0TGFzdFBvc3RzKF9fUEFSQU1TX18pIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH0sXG4gICdnZXRUcmVlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldFRyZWVPZkl0ZW1zJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICB7XG4gICAgICBnZXRUcmVlT2ZJdGVtc3tcbiAgICAgICAgaWRcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWNvblxuICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpZFxuICAgICAgICAgIGltZ1xuICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgfSxcbiAgJ2dsb2JhbEZpbHRlcic6IHtcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcbiAgICAgICAgZW50aXRpZXNEYXRhIHtcbiAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICB9IGNvdW50XG4gICAgICAgIH1cbiAgICAgICAgdHlwZU9mRW50aXR5RGF0YSB7XG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIGNvdW50XG4gICAgICAgIH1cbiAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcbiAgICAgICAgICB0b3RhbENvdW50XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfWBcbiAgfSxcbiAgJ2dldEVudGl0eURldGFpbHMnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5JyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRFbnRpdHkoX19QQVJBTVNfXyl7XG4gICAgICAgIG92ZXJ2aWV3VGFiXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGlkXG4gICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICBmaWVsZHMge1xuICAgICAgICAgIC4uLlxuICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi4gb25cbiAgICAgICAgICBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHRyYVRhYlxuICAgICAgICB3aWtpVGFiIHtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgXG4gIH0sXG4gICdnZXRJdGVtJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW0nLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdldEl0ZW0oX19QQVJBTVNfXykge1xuICAgICAgICBpZFxuICAgICAgICBsYWJlbFxuICAgICAgICBpY29uXG4gICAgICAgIHRpdGxlXG4gICAgICAgIHN1YlRpdGxlXG4gICAgICAgIGltYWdlXG4gICAgICAgIHRleHRcbiAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICBjb3VudFxuICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbGF0ZWRJdGVtcyB7XG4gICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBsaW5rXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9LFxuICAnZ2V0Tm9kZSc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXROb2RlJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXROb2RlKF9fUEFSQU1TX18pIHtcbiAgICAgICAgLi4uIG9uIEl0ZW0ge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpY29uXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzdWJUaXRsZVxuICAgICAgICAgIGltYWdlXG4gICAgICAgICAgdGV4dFxuICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICBlbnRpdHl7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XG4gICAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLi4uIG9uIE5vZGUge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpbWdcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9LFxuICAnYXV0b0NvbXBsZXRlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2F1dG9Db21wbGV0ZScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xuICAgICAgICB0b3RhbENvdW50XG4gICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgIC4uLiBvbiBFbnRpdHlDb3VudERhdGEge1xuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLi4uIG9uIEl0ZW1MaXN0aW5nIHtcbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gICdzZWFyY2gnOiB7XG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBzZWFyY2goX19QQVJBTVNfXyl7XG4gICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgZmFjZXRzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHR5cGVcbiAgICAgICAgICBvcGVyYXRvclxuICAgICAgICAgIGxpbWl0XG4gICAgICAgICAgb3JkZXJcbiAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICAgc2VhcmNoRGF0YSB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHRzIHtcbiAgICAgICAgICBvcmRlcntcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBoaWdobGlnaHRcbiAgICAgICAgICAgIGxpbWl0XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgIC4uLiBvbiBFbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgICBlbnRpdHl7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uIG9uIEl0ZW0ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gICdnZXRNaXNzaW5nQnViYmxlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0RW50aXR5KF9fUEFSQU1TX18pe1xuICAgICAgICBsYWJlbFxuICAgICAgICBpZFxuICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgIH1cbiAgICB9YFxuICB9XG59O1xuIl19