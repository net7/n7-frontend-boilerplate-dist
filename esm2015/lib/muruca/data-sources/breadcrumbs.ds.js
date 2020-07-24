import { DataSource } from '@n7-frontend/core';
export class MrBreadcrumbsDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        const bcMock = {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUc3Qyw2REFBNkQ7SUFDbkQsU0FBUyxDQUFDLElBQVM7UUFDM0IsTUFBTSxNQUFNLEdBQUc7WUFDYixLQUFLLEVBQUUsQ0FBQztvQkFDTixLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2lCQUMxQixFQUFFO29CQUNELEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7aUJBQzNCLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2lCQUNyQyxFQUFFO29CQUNELEtBQUssRUFBRSxZQUFZO29CQUNuQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO2lCQUNoQyxFQUFFO29CQUNELEtBQUssRUFBRSx3Q0FBd0M7b0JBQy9DLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSx1Q0FBdUMsRUFBRTtpQkFDMUQsQ0FBQztTQUNILENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJCcmVhZGNydW1ic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgYmNNb2NrID0ge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGxhYmVsOiAnSG9tZScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiAnL2hvbWUnIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdPcGVyZScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiAnL29wZXJlJyB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnT3BlcmUgZ2lvdmFuaWxpJyxcbiAgICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvb3BlcmUtZ2lvdmFuaWxpJyB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnQ2Fuem9uaWVyZScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiAnL2NhbnpvbmllcmUnIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdDYW56b25pZXJlIChSZXJ1bSB2dWxnYXJpdW0gZnJhZ21lbnRhKScsXG4gICAgICAgIGFuY2hvcjogeyBocmVmOiAnL2NhbnpvbmllcmUvcmVydW0tdnVsZ2FyaXVtLWZyYWdtZW50YScgfVxuICAgICAgfV1cbiAgICB9O1xuICAgIHJldHVybiBiY01vY2s7XG4gIH1cbn1cbiJdfQ==