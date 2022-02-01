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
            inputPayload: {
                ...payload,
                trigger: 'input',
            },
            enterPayload: {
                ...payload,
                trigger: 'enter',
            },
            iconPayload: {
                ...payload,
                trigger: 'icon',
            },
            _meta: { facetId },
        };
    }
    setActive(facetValue) {
        this.output.value = helpers.unescapeQuotes(facetValue) || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL3NlYXJjaC9hdy1mYWNldC1pbnB1dHMvYXctZmFjZXQtaW5wdXQtdGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFDdEMsU0FBUztRQUNqQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsTUFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPO1lBQ1AsTUFBTSxFQUFFLFlBQVk7U0FDckIsQ0FBQztRQUVGLE9BQU87WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDdEIsWUFBWSxFQUFFO2dCQUNaLEdBQUcsT0FBTztnQkFDVixPQUFPLEVBQUUsT0FBTzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDWixHQUFHLE9BQU87Z0JBQ1YsT0FBTyxFQUFFLE9BQU87YUFDakI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsR0FBRyxPQUFPO2dCQUNWLE9BQU8sRUFBRSxNQUFNO2FBQ2hCO1lBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0sU0FBUyxDQUFDLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDakUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdGYWNldElucHV0IH0gZnJvbSAnLi9hdy1mYWNldC1pbnB1dCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0ZhY2V0SW5wdXRUZXh0IGV4dGVuZHMgQXdGYWNldElucHV0IHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcbiAgICBjb25zdCBmYWNldElkID0gdGhpcy5nZXRGYWNldElkKCk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIGZhY2V0SWQsXG4gICAgICBzb3VyY2U6ICdpbnB1dC10ZXh0JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBsYWJlbDogdGhpcy5jb25maWcubGFiZWwsXG4gICAgICBkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5jb25maWcucGxhY2Vob2xkZXIsXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZy5pY29uLFxuICAgICAgaW5wdXRQYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdpbnB1dCcsXG4gICAgICB9LFxuICAgICAgZW50ZXJQYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHRyaWdnZXI6ICdlbnRlcicsXG4gICAgICB9LFxuICAgICAgaWNvblBheWxvYWQ6IHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgdHJpZ2dlcjogJ2ljb24nLFxuICAgICAgfSxcbiAgICAgIF9tZXRhOiB7IGZhY2V0SWQgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XG4gICAgdGhpcy5vdXRwdXQudmFsdWUgPSBoZWxwZXJzLnVuZXNjYXBlUXVvdGVzKGZhY2V0VmFsdWUpIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==