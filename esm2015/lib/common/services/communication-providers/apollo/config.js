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
          similarItems {
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
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QlY7S0FDRjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNUO0tBQ0g7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbURWO0tBQ0Y7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBc0RQO0tBQ0w7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bb0JUO0tBQ0g7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBcG9sbG9Qcm92aWRlckNvbmZpZyA9IHtcbiAgJ2dldExhc3RQb3N0cyc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRMYXN0UG9zdHMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAge1xuICAgICAgICBnZXRMYXN0UG9zdHMoX19QQVJBTVNfXykge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgfSxcblxuICAnZ2V0VHJlZSc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRUcmVlT2ZJdGVtcycsXG4gICAgcXVlcnlCb2R5OiBgXG4gICAge1xuICAgICAgZ2V0VHJlZU9mSXRlbXModHJlZUlkOiBcInBhdHJpbW9uaW9JZFwiICkge1xuICAgICAgICBpZFxuICAgICAgICBsYWJlbFxuICAgICAgICBpY29uXG4gICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGlkXG4gICAgICAgICAgaWNvblxuICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgfSxcbiAgJ2dsb2JhbEZpbHRlcic6IHtcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcbiAgICAgICAgZW50aXRpZXNEYXRhIHtcbiAgICAgICAgICBjb3VudERhdGEge1xuICAgICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgICAgZW50aXRpZXNDb3VudERhdGEge1xuICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xuICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICByZWxhdGVkVE9FRGF0YSB7XG4gICAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gICdnZXRFbnRpdHlEZXRhaWxzJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eURldGFpbHMnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdldEVudGl0eURldGFpbHMoX19QQVJBTVNfXyl7XG4gICAgICAgIG92ZXJ2aWV3VGFiXG4gICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpZFxuICAgICAgICAgIHR5cGVPZkVudGl0eSB7XG4gICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzVGFiIHtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICBrZXlcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVudGl0aWVzIHtcbiAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICB0eXBlT2ZFbnRpdHkge1xuICAgICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnRcbiAgICAgICAgfVxuICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGluZm8ge1xuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgcmVsYXRlZFRPRURhdGEge1xuICAgICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYFxuICB9LFxuICAnZ2V0SXRlbURldGFpbHMnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0SXRlbURldGFpbHMnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgICAgZ2V0SXRlbURldGFpbHMoX19QQVJBTVNfXyl7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICBpbWFnZVxuICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBpY29uXG4gICAgICAgICAgfVxuICAgICAgICAgIHNpbWlsYXJJdGVtcyB7XG4gICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGVkVE9FRGF0YSB7XG4gICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29ubmVjdGVkRW50aXRpZXMge1xuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIGVudGl0eXtcbiAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBsaW5rXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9YFxuICB9LFxuICAnYXV0b0NvbXBsZXRlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2F1dG9Db21wbGV0ZScsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgYXV0b0NvbXBsZXRlKF9fUEFSQU1TX18pe1xuICAgICAgICB0b3RhbENvdW50XG4gICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvblxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICB0eXBlT2ZFbnRpdHkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH1cbn07XG4iXX0=