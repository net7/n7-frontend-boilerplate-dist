/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var ApolloProviderConfig = {
    'getLastPosts': {
        queryName: 'getLastPosts',
        queryBody: "\n      {\n        getLastPosts(__PARAMS__) {\n          id\n          title\n        }\n      }\n    "
    },
    'getTree': {
        queryName: 'getTreeOfItems',
        queryBody: "\n    {\n      getTreeOfItems(treeId: \"patrimonioId\" ) {\n        id\n        label\n        icon\n        branches {\n          label\n          id\n          icon   \n          branches {\n            label\n            id\n            icon  \n            branches {\n              label\n              id\n              icon          \n            }        \n          }       \n        }\n      }\n    }\n    "
    },
    'globalFilter': {
        queryName: 'globalFilter',
        queryBody: "{\n      globalFilter(__PARAMS__){\n        entitiesData {\n          countData {\n            type {\n              id\n              label\n              configKey\n            }\n            count\n          }\n          entitiesCountData {\n            entity {\n              id\n              label\n              typeOfEntity {\n                id\n              }\n            }\n            count\n          }\n        }\n        itemsPagination {\n          totalCount\n          items {\n            item {\n              id\n              label\n              info {\n                key\n                value\n              }\n            }\n            thumbnail\n            relatedTOEData {\n              type {\n                id\n                label\n                configKey\n              }\n              count\n            }\n          }\n        }\n      }\n    }"
    },
    'getEntityDetails': {
        queryName: 'getEntityDetails',
        queryBody: "{\n      getEntityDetails(__PARAMS__){\n        overviewTab\n        entity {\n          label\n          id\n        }\n        fieldsTab {\n          id\n          fields {\n            id\n            key\n            value\n          }\n        }\n        entities {\n          entity {\n            id\n            label\n            typeOfEntity {\n              configKey\n            }\n          }\n          count\n        }\n        items {\n          breadcrumbs {\n            link\n            label\n          }\n          item {\n            id\n            label\n          }\n          thumbnail\n          relatedTOEData {\n            type {\n              id\n              configKey\n            }\n            count\n          }\n        }\n      }\n    }\n    "
    },
    'getItemDetails': {
        queryName: 'getItemDetails',
        queryBody: "{\n        getItemDetails(__PARAMS__){\n            title\n            text\n            subTitle\n            image\n            fields {\n              id\n              label\n              fields {\n                id\n                key\n                value\n              }\n            }\n            item {\n              id\n            }\n            breadcrumbs {\n              label\n              link\n            }\n          }\n      }"
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxLQUFPLG9CQUFvQixHQUFHO0lBQ2xDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFNBQVMsRUFBRSx3R0FPVjtLQUNGO0lBRUQsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUUsaWFBdUJWO0tBQ0Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTLEVBQUUsY0FBYztRQUN6QixTQUFTLEVBQUUsODNCQTZDVDtLQUNIO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixTQUFTLEVBQUUsa3hCQTZDVjtLQUNGO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUUseWNBdUJQO0tBQ0w7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBcG9sbG9Qcm92aWRlckNvbmZpZyA9IHtcbiAgJ2dldExhc3RQb3N0cyc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRMYXN0UG9zdHMnLFxuICAgIHF1ZXJ5Qm9keTogYFxuICAgICAge1xuICAgICAgICBnZXRMYXN0UG9zdHMoX19QQVJBTVNfXykge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgfSxcblxuICAnZ2V0VHJlZSc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRUcmVlT2ZJdGVtcycsXG4gICAgcXVlcnlCb2R5OiBgXG4gICAge1xuICAgICAgZ2V0VHJlZU9mSXRlbXModHJlZUlkOiBcInBhdHJpbW9uaW9JZFwiICkge1xuICAgICAgICBpZFxuICAgICAgICBsYWJlbFxuICAgICAgICBpY29uXG4gICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICBsYWJlbFxuICAgICAgICAgIGlkXG4gICAgICAgICAgaWNvbiAgIFxuICAgICAgICAgIGJyYW5jaGVzIHtcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaWNvbiAgXG4gICAgICAgICAgICBicmFuY2hlcyB7XG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGljb24gICAgICAgICAgXG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgfSxcbiAgJ2dsb2JhbEZpbHRlcic6IHtcbiAgICBxdWVyeU5hbWU6ICdnbG9iYWxGaWx0ZXInLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdsb2JhbEZpbHRlcihfX1BBUkFNU19fKXtcbiAgICAgICAgZW50aXRpZXNEYXRhIHtcbiAgICAgICAgICBjb3VudERhdGEge1xuICAgICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9XG4gICAgICAgICAgZW50aXRpZXNDb3VudERhdGEge1xuICAgICAgICAgICAgZW50aXR5IHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtc1BhZ2luYXRpb24ge1xuICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICByZWxhdGVkVE9FRGF0YSB7XG4gICAgICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBjb25maWdLZXlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gXG4gIH0sXG4gICdnZXRFbnRpdHlEZXRhaWxzJzoge1xuICAgIHF1ZXJ5TmFtZTogJ2dldEVudGl0eURldGFpbHMnLFxuICAgIHF1ZXJ5Qm9keTogYHtcbiAgICAgIGdldEVudGl0eURldGFpbHMoX19QQVJBTVNfXyl7XG4gICAgICAgIG92ZXJ2aWV3VGFiXG4gICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgICAgIGZpZWxkc1RhYiB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW50aXRpZXMge1xuICAgICAgICAgIGVudGl0eSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIHR5cGVPZkVudGl0eSB7XG4gICAgICAgICAgICAgIGNvbmZpZ0tleVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudFxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICBicmVhZGNydW1icyB7XG4gICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICByZWxhdGVkVE9FRGF0YSB7XG4gICAgICAgICAgICB0eXBlIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgY29uZmlnS2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgXG4gIH0sXG4gICdnZXRJdGVtRGV0YWlscyc6IHtcbiAgICBxdWVyeU5hbWU6ICdnZXRJdGVtRGV0YWlscycsXG4gICAgcXVlcnlCb2R5OiBge1xuICAgICAgICBnZXRJdGVtRGV0YWlscyhfX1BBUkFNU19fKXtcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICBzdWJUaXRsZVxuICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFkY3J1bWJzIHtcbiAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1gXG4gIH1cbn07XG4iXX0=