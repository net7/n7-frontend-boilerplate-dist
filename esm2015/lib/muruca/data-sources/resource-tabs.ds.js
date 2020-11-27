import { DataSource, _t } from '@n7-frontend/core';
export class MrResourceTabsDS extends DataSource {
    transform(data) {
        const { currentTab, root, slug, id: resourceId } = this.options;
        return data.map(({ id, label }) => ({
            label: _t(label),
            classes: currentTab === id ? 'is-active' : '',
            anchor: {
                href: `/${root}/${resourceId}/${slug}/${id}`
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdGFicy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3Jlc291cmNlLXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtJQUNwQyxTQUFTLENBQUMsSUFBUztRQUMzQixNQUFNLEVBQ0osVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFDdkMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0MsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTthQUM3QztTQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNclJlc291cmNlVGFic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50VGFiLCByb290LCBzbHVnLCBpZDogcmVzb3VyY2VJZFxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICByZXR1cm4gZGF0YS5tYXAoKHsgaWQsIGxhYmVsIH0pID0+ICh7XG4gICAgICBsYWJlbDogX3QobGFiZWwpLFxuICAgICAgY2xhc3NlczogY3VycmVudFRhYiA9PT0gaWQgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAvJHtyb290fS8ke3Jlc291cmNlSWR9LyR7c2x1Z30vJHtpZH1gXG4gICAgICB9XG4gICAgfSkpO1xuICB9XG59XG4iXX0=