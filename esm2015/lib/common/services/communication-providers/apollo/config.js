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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7OztLQU9WO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QlY7S0FDRjtJQUNELGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNUO0tBQ0g7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF1QlA7S0FDTDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFwb2xsb1Byb3ZpZGVyQ29uZmlnID0ge1xuICAnZ2V0TGFzdFBvc3RzJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldExhc3RQb3N0cycsXG4gICAgcXVlcnlCb2R5OiBgXG4gICAgICB7XG4gICAgICAgIGdldExhc3RQb3N0cyhfX1BBUkFNU19fKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICB9LFxuXG4gICdnZXRUcmVlJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldFRyZWVPZkl0ZW1zJyxcbiAgICBxdWVyeUJvZHk6IGBcbiAgICB7XG4gICAgICBnZXRUcmVlT2ZJdGVtcyh0cmVlSWQ6IFwicGF0cmltb25pb0lkXCIgKSB7XG4gICAgICAgIGlkXG4gICAgICAgIGxhYmVsXG4gICAgICAgIGljb25cbiAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgaWRcbiAgICAgICAgICBpY29uICAgXG4gICAgICAgICAgYnJhbmNoZXMge1xuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBpY29uICBcbiAgICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgaWNvbiAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYFxuICB9LFxuICAnZ2xvYmFsRmlsdGVyJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dsb2JhbEZpbHRlcicsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgZ2xvYmFsRmlsdGVyKF9fUEFSQU1TX18pe1xuICAgICAgICBlbnRpdGllc0RhdGEge1xuICAgICAgICAgIGNvdW50RGF0YSB7XG4gICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbnRpdGllc0NvdW50RGF0YSB7XG4gICAgICAgICAgICBlbnRpdHkge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHkge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbiB7XG4gICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBpbmZvIHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgIHJlbGF0ZWRUT0VEYXRhIHtcbiAgICAgICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfWBcbiAgfSxcbiAgJ2dldEl0ZW1EZXRhaWxzJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEl0ZW1EZXRhaWxzJyxcbiAgICBxdWVyeUJvZHk6IGB7XG4gICAgICAgIGdldEl0ZW1EZXRhaWxzKF9fUEFSQU1TX18pe1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWRjcnVtYnMge1xuICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfWBcbiAgfVxufTtcbiJdfQ==