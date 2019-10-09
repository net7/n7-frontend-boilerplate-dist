/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwEntitaNavDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const navigation = {
            items: [
                {
                    text: 'OVERVIEW',
                    payload: 'overview',
                },
                {
                    text: 'CAMPI',
                    payload: 'campi',
                },
                {
                    text: 'OGGETTI COLLEGATI',
                    payload: 'oggetti-collegati',
                },
                {
                    text: 'ENTITA COLLEGATE',
                    payload: 'entita-collegate',
                },
                {
                    text: 'MAXXI',
                    payload: 'maxxi',
                },
                {
                    text: 'WIKIPEDIA',
                    payload: 'wiki',
                },
            ],
            payload: 'entita-nav'
        };
        return navigation;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW5hdi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW5hdi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTs7Ozs7O0lBRWpDLFNBQVMsQ0FBQyxJQUFJOztjQUNoQixVQUFVLEdBQVE7WUFDdEIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsVUFBVTtpQkFDcEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxtQkFBbUI7b0JBQ3pCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQzdCO2dCQUNEO29CQUNFLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzVCO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsWUFBWTtTQUN0QjtRQUNELE9BQU8sVUFBVSxDQUFBO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YU5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBjb25zdCBuYXZpZ2F0aW9uOiBhbnkgPSB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ09WRVJWSUVXJyxcbiAgICAgICAgICBwYXlsb2FkOiAnb3ZlcnZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NBTVBJJyxcbiAgICAgICAgICBwYXlsb2FkOiAnY2FtcGknLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ09HR0VUVEkgQ09MTEVHQVRJJyxcbiAgICAgICAgICBwYXlsb2FkOiAnb2dnZXR0aS1jb2xsZWdhdGknLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0VOVElUQSBDT0xMRUdBVEUnLFxuICAgICAgICAgIHBheWxvYWQ6ICdlbnRpdGEtY29sbGVnYXRlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNQVhYSScsXG4gICAgICAgICAgcGF5bG9hZDogJ21heHhpJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdXSUtJUEVESUEnLFxuICAgICAgICAgIHBheWxvYWQ6ICd3aWtpJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBwYXlsb2FkOiAnZW50aXRhLW5hdidcbiAgICB9XG4gICAgcmV0dXJuIG5hdmlnYXRpb25cbiAgfVxufSJdfQ==