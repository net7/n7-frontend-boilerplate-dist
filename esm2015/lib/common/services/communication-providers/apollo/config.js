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
        extraTabUrl
        wikiTabUrl
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQlY7S0FDRjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNUO0tBQ0g7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxRFY7S0FDRjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFzRFA7S0FDTDtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFvQlQ7S0FDSDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFwb2xsb1Byb3ZpZGVyQ29uZmlnID0ge1xuICAnZ2V0TGFzdFBvc3RzJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldExhc3RQb3N0cycsXG4gICAgcXVlcnlCb2R5OiBgXG4gICAgICB7XG4gICAgICAgIGdldExhc3RQb3N0cyhfX1BBUkFNU19fKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICB9LFxuXG4gICdnZXRUcmVlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldFRyZWVPZkl0ZW1zJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICB7XG4gICAgICBnZXRUcmVlT2ZJdGVtcyh0cmVlSWQ6IFwicGF0cmltb25pb0lkXCIgKSB7XG4gICAgICAgIGlkXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGljb25cbiAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICBpY29uXG4gICAgICAgICAgaW1nXG4gICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBpY29uXG4gICAgICAgICAgICBpbWdcbiAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICBpbWdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYFxuICB9LFxuICAnZ2xvYmFsRmlsdGVyJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2xvYmFsRmlsdGVyKF9fUEFSQU1TX18pe1xuICAgICAgICBlbnRpdGllc0RhdGEge1xuICAgICAgICAgIGNvdW50RGF0YSB7XG4gICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbnRpdGllc0NvdW50RGF0YSB7XG4gICAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbiB7XG4gICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpbmZvIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgIHJlbGF0ZWRUT0VEYXRhIHtcbiAgICAgICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWBcbiAgfSxcbiAgJ2dldEVudGl0eURldGFpbHMnOiB7XG4gICAgcXVlcnlOYW1lOiAnZ2V0RW50aXR5RGV0YWlscycsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2V0RW50aXR5RGV0YWlscyhfX1BBUkFNU19fKXtcbiAgICAgICAgb3ZlcnZpZXdUYWJcbiAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGlkXG4gICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWVsZHNUYWIge1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW50aXRpZXMge1xuICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIHR5cGVPZkVudGl0eSB7XG4gICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudFxuICAgICAgICB9XG4gICAgICAgIGV4dHJhVGFiVXJsXG4gICAgICAgIHdpa2lUYWJVcmxcbiAgICAgICAgaXRlbXMge1xuICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpbmZvIHtcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRodW1ibmFpbFxuICAgICAgICAgIHJlbGF0ZWRUT0VEYXRhIHtcbiAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgfSxcbiAgJ2dldEl0ZW1EZXRhaWxzJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW1EZXRhaWxzJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdldEl0ZW1EZXRhaWxzKF9fUEFSQU1TX18pe1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgdGV4dFxuICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaWNvblxuICAgICAgICAgIH1cbiAgICAgICAgICBzaW1pbGFySXRlbXMge1xuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgIGluZm8ge1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRlZFRPRURhdGEge1xuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbm5lY3RlZEVudGl0aWVzIHtcbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICBlbnRpdHl7XG4gICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgbGlua1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWBcbiAgfSxcbiAgJ2F1dG9Db21wbGV0ZSc6IHtcbiAgICBxdWVyeU5hbWU6ICdhdXRvQ29tcGxldGUnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGF1dG9Db21wbGV0ZShfX1BBUkFNU19fKXtcbiAgICAgICAgdG90YWxDb3VudFxuICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGluZm8ge1xuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICB9XG4gICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9YFxuICB9XG59O1xuIl19