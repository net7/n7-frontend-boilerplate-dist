import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrBreadcrumbsDS = /** @class */ (function (_super) {
    __extends(MrBreadcrumbsDS, _super);
    function MrBreadcrumbsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    MrBreadcrumbsDS.prototype.transform = function (data) {
        var bcMock = {
            items: [{
                    label: 'Home',
                    anchor: { href: '/home' }
                }, {
                    label: 'Opere',
                    anchor: { href: '/opere' }
                }, {
                    label: 'Opere giovanili',
                    anchor: { href: '/opere-giovanili' }
                }, {
                    label: 'Canzoniere',
                    anchor: { href: '/canzoniere' }
                }, {
                    label: 'Canzoniere (Rerum vulgarium fragmenta)',
                    anchor: { href: '/canzoniere/rerum-vulgarium-fragmenta' }
                }]
        };
        return bcMock;
    };
    return MrBreadcrumbsDS;
}(DataSource));
export { MrBreadcrumbsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXFDLG1DQUFVO0lBQS9DOztJQXlCQSxDQUFDO0lBdEJDLDZEQUE2RDtJQUNuRCxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQU0sTUFBTSxHQUFHO1lBQ2IsS0FBSyxFQUFFLENBQUM7b0JBQ04sS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtpQkFDMUIsRUFBRTtvQkFDRCxLQUFLLEVBQUUsT0FBTztvQkFDZCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2lCQUMzQixFQUFFO29CQUNELEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtpQkFDckMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsWUFBWTtvQkFDbkIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtpQkFDaEMsRUFBRTtvQkFDRCxLQUFLLEVBQUUsd0NBQXdDO29CQUMvQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUU7aUJBQzFELENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFxQyxVQUFVLEdBeUI5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNckJyZWFkY3J1bWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCBiY01vY2sgPSB7XG4gICAgICBpdGVtczogW3tcbiAgICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvaG9tZScgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ09wZXJlJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvb3BlcmUnIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdPcGVyZSBnaW92YW5pbGknLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogJy9vcGVyZS1naW92YW5pbGknIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdDYW56b25pZXJlJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvY2Fuem9uaWVyZScgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ0NhbnpvbmllcmUgKFJlcnVtIHZ1bGdhcml1bSBmcmFnbWVudGEpJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvY2Fuem9uaWVyZS9yZXJ1bS12dWxnYXJpdW0tZnJhZ21lbnRhJyB9XG4gICAgICB9XVxuICAgIH07XG4gICAgcmV0dXJuIGJjTW9jaztcbiAgfVxufVxuIl19