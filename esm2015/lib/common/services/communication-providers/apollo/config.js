/**
 * @fileoverview added by tsickle
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
            }
            relatedTypesOfEntity {
              type
              count
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
          }
          relatedTypesOfEntity {
            type
            count
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
            }
            relatedTypesOfEntity {
              type
              count
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVEVjtLQUNGO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBd0NQO0tBQ0w7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStEVjtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWtEVDtLQUNIO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMkZUO0tBQ0g7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1EVDtLQUNIO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUEySFQ7S0FDSDtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFNBQVMsRUFBRTs7Ozs7O01BTVQ7S0FDSDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFwb2xsb1Byb3ZpZGVyQ29uZmlnID0ge1xuICAnZ2V0TGFzdFBvc3RzJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldExhc3RQb3N0cycsXG4gICAgcXVlcnlCb2R5OiBgXG4gICAgICB7XG4gICAgICAgIGdldExhc3RQb3N0cyhfX1BBUkFNU19fKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICB9LFxuICAnZ2V0VHJlZSc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRUcmVlT2ZJdGVtcycsXG4gICAgcXVlcnlCb2R5OiBgXG4gICAge1xuICAgICAgZ2V0VHJlZU9mSXRlbXN7XG4gICAgICAgIGlkXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGljb25cbiAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICBpbWdcbiAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgXG4gIH0sXG4gICdnbG9iYWxGaWx0ZXInOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XG4gICAgICAgIGVudGl0aWVzRGF0YSB7XG4gICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgfSBjb3VudFxuICAgICAgICB9XG4gICAgICAgIHR5cGVPZkVudGl0eURhdGEge1xuICAgICAgICAgIHR5cGVcbiAgICAgICAgICBjb3VudFxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbiB7XG4gICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB9YFxuICB9LFxuICAnZ2V0RW50aXR5RGV0YWlscyc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcbiAgICAgICAgb3ZlcnZpZXdUYWJcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWRcbiAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgLi4uXG4gICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICBrZXlcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICAgIC4uLiBvblxuICAgICAgICAgIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4dHJhVGFiXG4gICAgICAgIHdpa2lUYWIge1xuICAgICAgICAgIHRleHRcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgICByZWxhdGVkSXRlbXMge1xuICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBmaWVsZHNcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgfSxcbiAgJ2dldEl0ZW0nOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0SXRlbScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0SXRlbShfX1BBUkFNU19fKSB7XG4gICAgICAgIGlkXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGljb25cbiAgICAgICAgdGl0bGVcbiAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgaW1hZ2VcbiAgICAgICAgdGV4dFxuICAgICAgICBmaWVsZHMge1xuICAgICAgICAgIC4uLlxuICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICBlbnRpdHl7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgbGlua1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWBcbiAgfSxcbiAgJ2dldE5vZGUnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0Tm9kZScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0Tm9kZShfX1BBUkFNU19fKSB7XG4gICAgICAgIC4uLiBvbiBJdGVtIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWNvblxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICBpbWFnZVxuICAgICAgICAgIHRleHRcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgZW50aXR5e1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xuICAgICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgbGlua1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuLi4gb24gTm9kZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGltZ1xuICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gICdhdXRvQ29tcGxldGUnOiB7XG4gICAgcXVlcnlOYW1lOiAnYXV0b0NvbXBsZXRlJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBhdXRvQ29tcGxldGUoX19QQVJBTVNfXyl7XG4gICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgcmVzdWx0cyB7XG4gICAgICAgICAgLi4uIG9uIEVudGl0eUNvdW50RGF0YSB7XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi4gb24gSXRlbUxpc3Rpbmcge1xuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGRvY3VtZW50X3R5cGVcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWBcbiAgfSxcbiAgJ3NlYXJjaCc6IHtcbiAgICBxdWVyeU5hbWU6ICdzZWFyY2gnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIHNlYXJjaChfX1BBUkFNU19fKXtcbiAgICAgICAgdG90YWxDb3VudFxuICAgICAgICBmYWNldHMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIG9wZXJhdG9yXG4gICAgICAgICAgbGltaXRcbiAgICAgICAgICBvcmRlclxuICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgICBzZWFyY2hEYXRhIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgIG9yZGVye1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGhpZ2hsaWdodFxuICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgLi4uIG9uIEVudGl0eSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gSXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9LFxuICAnZ2V0TWlzc2luZ0J1YmJsZSc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWRcbiAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICB9XG4gICAgfWBcbiAgfVxufTtcbiJdfQ==