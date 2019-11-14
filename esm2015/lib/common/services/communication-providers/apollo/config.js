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
    'autoComplete': {
        queryName: 'autoComplete',
        queryBody: `{
      autoComplete(__PARAMS__){
        totalCount
        entities {
          entity {
              id
              label
              typeOfEntity
          }
          count
        }
      }
    }`
    },
    'search': {
        queryName: 'search',
        queryBody: `{
      search(__PARAMS__){
        totalCount
        facets
        filters
        results
        page
      }
    }`
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVEVjtLQUNGO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsU0FBUyxFQUFFLGNBQWM7UUFDekIsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFvQ1A7S0FDTDtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyRFY7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFrRFQ7S0FDSDtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7O01BWVQ7S0FDSDtJQUNELFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7TUFRVDtLQUNIO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQXBvbGxvUHJvdmlkZXJDb25maWcgPSB7XG4gICdnZXRMYXN0UG9zdHMnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICAgIHtcbiAgICAgICAgZ2V0TGFzdFBvc3RzKF9fUEFSQU1TX18pIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH0sXG4gICdnZXRUcmVlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldFRyZWVPZkl0ZW1zJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICB7XG4gICAgICBnZXRUcmVlT2ZJdGVtc3tcbiAgICAgICAgaWRcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWNvblxuICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpZFxuICAgICAgICAgIGltZ1xuICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgfSxcbiAgJ2dsb2JhbEZpbHRlcic6IHtcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcbiAgICAgICAgZW50aXRpZXNEYXRhIHtcbiAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICB9IGNvdW50XG4gICAgICAgIH1cbiAgICAgICAgdHlwZU9mRW50aXR5RGF0YSB7XG4gICAgICAgICAgdHlwZVxuICAgICAgICAgIGNvdW50XG4gICAgICAgIH1cbiAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcbiAgICAgICAgICB0b3RhbENvdW50XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfWBcbiAgfSxcbiAgJ2dldEVudGl0eURldGFpbHMnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5JyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRFbnRpdHkoX19QQVJBTVNfXyl7XG4gICAgICAgIG92ZXJ2aWV3VGFiXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGlkXG4gICAgICAgIHR5cGVPZkVudGl0eVxuICAgICAgICBmaWVsZHMge1xuICAgICAgICAgIC4uLlxuICAgICAgICAgIG9uIEtleVZhbHVlRmllbGQge1xuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuLi4gb25cbiAgICAgICAgICBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHRyYVRhYlxuICAgICAgICB3aWtpVGFiIHtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRlZEl0ZW1zIHtcbiAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgZmllbGRzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbGF0ZWRUeXBlc09mRW50aXR5IHtcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbGF0ZWRFbnRpdGllcyB7XG4gICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYFxuICB9LFxuICAnZ2V0SXRlbSc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRJdGVtJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRJdGVtKF9fUEFSQU1TX18pIHtcbiAgICAgICAgaWRcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWNvblxuICAgICAgICB0aXRsZVxuICAgICAgICBzdWJUaXRsZVxuICAgICAgICBpbWFnZVxuICAgICAgICB0ZXh0XG4gICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgLi4uXG4gICAgICAgICAgb24gS2V5VmFsdWVGaWVsZCB7XG4gICAgICAgICAgICBrZXlcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICAgIC4uLiBvbiBLZXlWYWx1ZUZpZWxkR3JvdXAge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICBvbiBLZXlWYWx1ZUZpZWxkIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbGF0ZWRJdGVtcyB7XG4gICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgICByZWxhdGVkVHlwZXNPZkVudGl0eSB7XG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBsaW5rXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9LFxuICAnYXV0b0NvbXBsZXRlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2F1dG9Db21wbGV0ZScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xuICAgICAgICB0b3RhbENvdW50XG4gICAgICAgIGVudGl0aWVzIHtcbiAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHlcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gICdzZWFyY2gnOiB7XG4gICAgcXVlcnlOYW1lOiAnc2VhcmNoJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBzZWFyY2goX19QQVJBTVNfXyl7XG4gICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgZmFjZXRzXG4gICAgICAgIGZpbHRlcnNcbiAgICAgICAgcmVzdWx0c1xuICAgICAgICBwYWdlXG4gICAgICB9XG4gICAgfWBcbiAgfVxufTtcbiJdfQ==