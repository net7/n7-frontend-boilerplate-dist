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
          branches {
            label
            id
            icon  
            branches {
              label
              id
              icon          
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
              color
              icon
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
                icon
                color
              }
              count
            }
          }
        }
      }
    }`
    },
    'getItemDetails': {
        queryName: 'getItemDetails',
        queryBody: `{
        getItemDetails(__PARAMS__){
            title
            text
            subTitle
            image
            fields {
              id
              label
              fields {
                id
                key
                value
              }
            }
            item {
              id
            }
            breadcrumbs {
              label
              link
            }
          }
      }`
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QlY7S0FDRjtJQUNELGNBQWMsRUFBQztRQUNiLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUErQ1I7S0FDSDtJQUNELGdCQUFnQixFQUFDO1FBQ2YsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBdUJOO0tBQ0g7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBcG9sbG9Qcm92aWRlckNvbmZpZyA9IHtcbiAgJ2dldExhc3RQb3N0cyc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRMYXN0UG9zdHMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAge1xuICAgICAgICBnZXRMYXN0UG9zdHMoX19QQVJBTVNfXykge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAgXG4gIH0sXG5cbiAgJ2dldFRyZWUnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0VHJlZU9mSXRlbXMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgIHtcbiAgICAgIGdldFRyZWVPZkl0ZW1zKHRyZWVJZDogXCJwYXRyaW1vbmlvSWRcIiApIHtcbiAgICAgICAgaWRcbiAgICAgICAgbGFiZWxcbiAgICAgICAgaWNvblxuICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpZFxuICAgICAgICAgIGljb24gICBcbiAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGljb24gIFxuICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpY29uICAgICAgICAgIFxuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgfSAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgXG4gIH0sXG4gICdnbG9iYWxGaWx0ZXInOntcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxuICAgIHF1ZXJ5Qm9keTpge1xuICAgICAgZ2xvYmFsRmlsdGVyKF9fUEFSQU1TX18pe1xuICAgICAgICBlbnRpdGllc0RhdGEge1xuICAgICAgICAgIGNvdW50RGF0YSB7XG4gICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgICAgZW50aXRpZXNDb3VudERhdGEge1xuICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xuICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICByZWxhdGVkVE9FRGF0YSB7XG4gICAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gICdnZXRJdGVtRGV0YWlscyc6e1xuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW1EZXRhaWxzJyxcbiAgICBxdWVyeUJvZHk6YHtcbiAgICAgICAgZ2V0SXRlbURldGFpbHMoX19QQVJBTVNfXyl7XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9YFxuICAgIH1cbiAgfTtcbiAgICBcbiJdfQ==