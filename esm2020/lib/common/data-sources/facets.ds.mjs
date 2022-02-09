import { DataSource } from '@n7-frontend/core';
export class FacetsDS extends DataSource {
    transform({ fields }) {
        const { searchModel } = this.options;
        this.searchModel = searchModel;
        return fields;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvY29tbW9uL2RhdGEtc291cmNlcy9mYWNldHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtJQUc1QixTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUU7UUFDNUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBzZWFyY2hNb2RlbDogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgZmllbGRzIH0pIHtcclxuICAgIGNvbnN0IHsgc2VhcmNoTW9kZWwgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIHRoaXMuc2VhcmNoTW9kZWwgPSBzZWFyY2hNb2RlbDtcclxuXHJcbiAgICByZXR1cm4gZmllbGRzO1xyXG4gIH1cclxufVxyXG4iXX0=