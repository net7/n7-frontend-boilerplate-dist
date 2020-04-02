/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVEVjtLQUNGO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBd0NQO0tBQ0w7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStEVjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWtEVDtLQUNIO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMkZUO0tBQ0g7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1EVDtLQUNIO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BK0hUO0tBQ0g7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsV0FBVztRQUN0QixTQUFTLEVBQUU7Ozs7OztNQU1UO0tBQ0g7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBcG9sbG9Qcm92aWRlckNvbmZpZyA9IHtcbiAgZ2V0TGFzdFBvc3RzOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICAgIHtcbiAgICAgICAgZ2V0TGFzdFBvc3RzKF9fUEFSQU1TX18pIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICB9LFxuICBnZXRUcmVlOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgIHtcbiAgICAgIGdldFRyZWVPZkl0ZW1ze1xuICAgICAgICBpZFxuICAgICAgICBsYWJlbFxuICAgICAgICBpY29uXG4gICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGlkXG4gICAgICAgICAgaW1nXG4gICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBpY29uXG4gICAgICAgICAgICBpbWdcbiAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYCxcbiAgfSxcbiAgZ2xvYmFsRmlsdGVyOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XG4gICAgICAgIGVudGl0aWVzRGF0YSB7XG4gICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgfSBjb3VudFxuICAgICAgICB9XG4gICAgICAgIHR5cGVPZkVudGl0eURhdGEge1xuICAgICAgICAgIHR5cGVcbiAgICAgICAgICBjb3VudFxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbiB7XG4gICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIH1gLFxuICB9LFxuICBnZXRFbnRpdHlEZXRhaWxzOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5JyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRFbnRpdHkoX19QQVJBTVNfXyl7XG4gICAgICAgIG92ZXJ2aWV3VGFiXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGlkXG4gICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICBmaWVsZHMge1xuICAgICAgICAgIC4uLlxuICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi4gb25cbiAgICAgICAgICBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHRyYVRhYlxuICAgICAgICB3aWtpVGFiIHtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgLFxuICB9LFxuICBnZXRJdGVtOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0SXRlbScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0SXRlbShfX1BBUkFNU19fKSB7XG4gICAgICAgIGlkXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGljb25cbiAgICAgICAgdGl0bGVcbiAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgaW1hZ2VcbiAgICAgICAgdGV4dFxuICAgICAgICBmaWVsZHMge1xuICAgICAgICAgIC4uLlxuICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgIGNvdW50XG4gICAgICAgICAgZW50aXR5e1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgcmVsYXRlZFR5cGVzT2ZFbnRpdHkge1xuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGxpbmtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gLFxuICB9LFxuICBnZXROb2RlOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0Tm9kZScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0Tm9kZShfX1BBUkFNU19fKSB7XG4gICAgICAgIC4uLiBvbiBJdGVtIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWNvblxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICBpbWFnZVxuICAgICAgICAgIHRleHRcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRlZEVudGl0aWVzIHtcbiAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgZW50aXR5e1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkSXRlbXMge1xuICAgICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBsaW5rXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC4uLiBvbiBOb2RlIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaW1nXG4gICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWAsXG4gIH0sXG4gIGF1dG9Db21wbGV0ZToge1xuICAgIHF1ZXJ5TmFtZTogJ2F1dG9Db21wbGV0ZScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xuICAgICAgICB0b3RhbENvdW50XG4gICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgIC4uLiBvbiBFbnRpdHlDb3VudERhdGEge1xuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGRHcm91cCB7XG4gICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLi4uIG9uIEl0ZW1MaXN0aW5nIHtcbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBkb2N1bWVudF90eXBlXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gLFxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBxdWVyeU5hbWU6ICdzZWFyY2gnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIHNlYXJjaChfX1BBUkFNU19fKXtcbiAgICAgICAgdG90YWxDb3VudFxuICAgICAgICBmYWNldHMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIG9wZXJhdG9yXG4gICAgICAgICAgbGltaXRcbiAgICAgICAgICBvcmRlclxuICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgICBzZWFyY2hEYXRhIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgIG9yZGVye1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGhpZ2hsaWdodFxuICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgLi4uIG9uIEVudGl0eSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi4gb24gS2V5VmFsdWVGaWVsZEdyb3VwIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi4gb24gSXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWAsXG4gIH0sXG4gIGdldE1pc3NpbmdCdWJibGU6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHknLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdldEVudGl0eShfX1BBUkFNU19fKXtcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWRcbiAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICB9XG4gICAgfWAsXG4gIH0sXG59O1xuIl19