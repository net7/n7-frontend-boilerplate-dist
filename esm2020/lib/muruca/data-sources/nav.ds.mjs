import { DataSource } from '@n7-frontend/core';
export class MrNavDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        const items = [];
        data.nav.forEach((el) => {
            items.push({
                text: el.title,
                anchor: {
                    href: `http://localhost:4200/mr/static/${el.id}`,
                    target: '_blank',
                    payload: el.id
                }
            });
        });
        return {
            items,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9uYXYuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxPQUFRLFNBQVEsVUFBVTtJQUNyQyw2REFBNkQ7SUFDbkQsU0FBUyxDQUFDLElBQUk7UUFDdEIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDVCxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDaEQsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRTtpQkFDZjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTztZQUNMLEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNck5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgIGRhdGEubmF2LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgIHRleHQ6IGVsLnRpdGxlLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgaHJlZjogYGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9tci9zdGF0aWMvJHtlbC5pZH1gLFxyXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICAgIHBheWxvYWQ6IGVsLmlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=