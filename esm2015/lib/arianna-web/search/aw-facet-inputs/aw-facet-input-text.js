import { AwFacetInput } from './aw-facet-input';
import helpers from '../../../common/helpers';
export class AwFacetInputText extends AwFacetInput {
    transform() {
        const facetId = this.getFacetId();
        const payload = {
            facetId,
            source: 'input-text',
        };
        return {
            type: 'text',
            id: this.getId(),
            label: this.config.label,
            disabled: this.config.disabled,
            placeholder: this.config.placeholder,
            icon: this.config.icon,
            inputPayload: Object.assign(Object.assign({}, payload), { trigger: 'input' }),
            enterPayload: Object.assign(Object.assign({}, payload), { trigger: 'enter' }),
            iconPayload: Object.assign(Object.assign({}, payload), { trigger: 'icon' }),
            _meta: { facetId },
        };
    }
    setActive(facetValue) {
        this.output.value = helpers.unescapeQuotes(facetValue) || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctZmFjZXQtaW5wdXRzL2F3LWZhY2V0LWlucHV0LXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQ3RDLFNBQVM7UUFDakIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsT0FBTztZQUNQLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUM7UUFFRixPQUFPO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3RCLFlBQVksa0NBQ1AsT0FBTyxLQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2pCO1lBQ0QsWUFBWSxrQ0FDUCxPQUFPLEtBQ1YsT0FBTyxFQUFFLE9BQU8sR0FDakI7WUFDRCxXQUFXLGtDQUNOLE9BQU8sS0FDVixPQUFPLEVBQUUsTUFBTSxHQUNoQjtZQUNELEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVNLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2pFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3RmFjZXRJbnB1dCB9IGZyb20gJy4vYXctZmFjZXQtaW5wdXQnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdGYWNldElucHV0VGV4dCBleHRlbmRzIEF3RmFjZXRJbnB1dCB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcclxuICAgIGNvbnN0IGZhY2V0SWQgPSB0aGlzLmdldEZhY2V0SWQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIGZhY2V0SWQsXHJcbiAgICAgIHNvdXJjZTogJ2lucHV0LXRleHQnLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXHJcbiAgICAgIGxhYmVsOiB0aGlzLmNvbmZpZy5sYWJlbCxcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxyXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5jb25maWcucGxhY2Vob2xkZXIsXHJcbiAgICAgIGljb246IHRoaXMuY29uZmlnLmljb24sXHJcbiAgICAgIGlucHV0UGF5bG9hZDoge1xyXG4gICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgdHJpZ2dlcjogJ2lucHV0JyxcclxuICAgICAgfSxcclxuICAgICAgZW50ZXJQYXlsb2FkOiB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICB0cmlnZ2VyOiAnZW50ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICBpY29uUGF5bG9hZDoge1xyXG4gICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgdHJpZ2dlcjogJ2ljb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBfbWV0YTogeyBmYWNldElkIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XHJcbiAgICB0aGlzLm91dHB1dC52YWx1ZSA9IGhlbHBlcnMudW5lc2NhcGVRdW90ZXMoZmFjZXRWYWx1ZSkgfHwgbnVsbDtcclxuICB9XHJcbn1cclxuIl19