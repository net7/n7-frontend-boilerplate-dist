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
      getTreeOfItems(treeId: "patrimonioId" ) {
        id
        label
        icon
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
    `
    },
    'globalFilter': {
        queryName: 'globalFilter',
        queryBody: `{
      globalFilter(__PARAMS__){
        entitiesData {
          countData {
            type {
              id
              label
              configKey
            }
            count
          }
          entitiesCountData {
            entity {
              id
              label
              typeOfEntity {
                id
              }
            }
            count
          }
        }
        itemsPagination {
          totalCount
          items {
            item {
              id
              label
              info {
                key
                value
              }
            }
            thumbnail
            relatedTOEData {
              type {
                id
                label
                configKey
              }
              count
            }
          }
        }
      }
    }`
    },
    'getEntityDetails': {
        queryName: 'getEntityDetails',
        queryBody: `{
      getEntityDetails(__PARAMS__){
        overviewTab
        entity {
          label
          id
          typeOfEntity {
            configKey
          }
        }
        fieldsTab {
          label
          fields {
            key
            value
          }
        }
        entities {
          entity {
            id
            label
            typeOfEntity {
              configKey
            }
          }
          count
        }
        extraTab
        wikiTab {
          text
          url
        }
        items {
          breadcrumbs {
            link
            label
          }
          item {
            id
            label
            info {
              key
              value
            }
          }
          thumbnail
          relatedTOEData {
            type {
              id
              configKey
            }
            count
          }
        }
      }
    }
    `
    },
    'getItemDetails': {
        queryName: 'getItemDetails',
        queryBody: `{
        getItemDetails(__PARAMS__){
          title
          text
          subTitle
          image
           item {
            id
            icon
          }
          items {
            thumbnail
              item {
                label
                icon
                info {
                  key
                  value
                }
              }
            relatedTOEData {
              count
              type {
                label
                configKey
              }
            }
          }
          connectedEntities {
            count
            entity{
             id
            label
              typeOfEntity {
                id
                label
                configKey
              }
            }
          }
          fields {
            id
            label
            fields {
              id
              key
              value
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
        items {
          item {
            id
            label
            info {
              key
              value
            }
            icon
          }
          thumbnail
          typeOfEntity {
            id
            configKey
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
        facets
        filters
        results
        page
      }
    }`
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQlY7S0FDRjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNUO0tBQ0g7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3RFY7S0FDRjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFzRFA7S0FDTDtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFvQlQ7S0FDSDtJQUNELFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRTs7Ozs7Ozs7TUFRVDtLQUNIO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQXBvbGxvUHJvdmlkZXJDb25maWcgPSB7XG4gICdnZXRMYXN0UG9zdHMnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0TGFzdFBvc3RzJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICAgIHtcbiAgICAgICAgZ2V0TGFzdFBvc3RzKF9fUEFSQU1TX18pIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH0sXG5cbiAgJ2dldFRyZWUnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgIHtcbiAgICAgIGdldFRyZWVPZkl0ZW1zKHRyZWVJZDogXCJwYXRyaW1vbmlvSWRcIiApIHtcbiAgICAgICAgaWRcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWNvblxuICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpZFxuICAgICAgICAgIGljb25cbiAgICAgICAgICBpbWdcbiAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgXG4gIH0sXG4gICdnbG9iYWxGaWx0ZXInOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2xvYmFsRmlsdGVyJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnbG9iYWxGaWx0ZXIoX19QQVJBTVNfXyl7XG4gICAgICAgIGVudGl0aWVzRGF0YSB7XG4gICAgICAgICAgY291bnREYXRhIHtcbiAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICAgIGVudGl0aWVzQ291bnREYXRhIHtcbiAgICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXRlbXNQYWdpbmF0aW9uIHtcbiAgICAgICAgICB0b3RhbENvdW50XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGluZm8ge1xuICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgICAgcmVsYXRlZFRPRURhdGEge1xuICAgICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9LFxuICAnZ2V0RW50aXR5RGV0YWlscyc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRFbnRpdHlEZXRhaWxzJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICBnZXRFbnRpdHlEZXRhaWxzKF9fUEFSQU1TX18pe1xuICAgICAgICBvdmVydmlld1RhYlxuICAgICAgICBlbnRpdHkge1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICB0eXBlT2ZFbnRpdHkge1xuICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpZWxkc1RhYiB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAga2V5XG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbnRpdGllcyB7XG4gICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50XG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFUYWJcbiAgICAgICAgd2lraVRhYiB7XG4gICAgICAgICAgdGV4dFxuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICByZWxhdGVkVE9FRGF0YSB7XG4gICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgXG4gIH0sXG4gICdnZXRJdGVtRGV0YWlscyc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRJdGVtRGV0YWlscycsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgICBnZXRJdGVtRGV0YWlscyhfX1BBUkFNU19fKXtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHRleHRcbiAgICAgICAgICBzdWJUaXRsZVxuICAgICAgICAgIGltYWdlXG4gICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgIGluZm8ge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRlZFRPRURhdGEge1xuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbm5lY3RlZEVudGl0aWVzIHtcbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICBlbnRpdHl7XG4gICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgbGlua1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWBcbiAgfSxcbiAgJ2F1dG9Db21wbGV0ZSc6IHtcbiAgICBxdWVyeU5hbWU6ICdhdXRvQ29tcGxldGUnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGF1dG9Db21wbGV0ZShfX1BBUkFNU19fKXtcbiAgICAgICAgdG90YWxDb3VudFxuICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGluZm8ge1xuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICB9XG4gICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9LFxuICAnc2VhcmNoJzoge1xuICAgIHF1ZXJ5TmFtZTogJ3NlYXJjaCcsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgc2VhcmNoKF9fUEFSQU1TX18pe1xuICAgICAgICB0b3RhbENvdW50XG4gICAgICAgIGZhY2V0c1xuICAgICAgICBmaWx0ZXJzXG4gICAgICAgIHJlc3VsdHNcbiAgICAgICAgcGFnZVxuICAgICAgfVxuICAgIH1gXG4gIH1cbn07XG4iXX0=