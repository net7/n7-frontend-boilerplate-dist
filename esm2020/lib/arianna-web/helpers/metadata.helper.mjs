import helpers from '../../common/helpers';
const metadataIsEmpty = (value) => (!value || value === 'null');
const isLink = (fields) => !!fields.filter(({ key }) => key === 'isLink').length;
const isRepeater = (fields) => Array.isArray(fields);
const getLink = (fields, paths) => {
    const schedaTypes = ['oggetto-culturale', 'aggregazione-logica'];
    const label = fields.find(({ key }) => key === 'label').value;
    const slug = helpers.slugify(label);
    const id = fields.find(({ key }) => key === 'id').value;
    const type = fields.find(({ key }) => key === 'type').value;
    let basePath = paths.entitaBasePath;
    if (schedaTypes.includes(type)) {
        basePath = paths.schedaBasePath;
    }
    return `<a href="${basePath}${id}/${slug}">${label}</a>`;
};
const getRepeater = (fields, labels, metadataToShow, type, parentLabel, paths) => {
    const html = [];
    fields
        .filter(({ fields: subFields }) => subFields)
        .forEach(({ fields: subFields }) => {
        const subHtml = [];
        if (isLink(subFields)) {
            subHtml.push('<div>');
            subHtml.push(`<dd>${getLink(subFields, paths)}</dd>`);
            subHtml.push('</div>');
        }
        subFields
            .filter(({ key }) => {
            if (isLink(subFields)) {
                return !(['label', 'id', 'type', 'isLink'].includes(key));
            }
            return true;
        })
            .filter(({ key, value }) => metadataToShow.includes(`${parentLabel}.${key}`) && !metadataIsEmpty(value))
            .map(({ key, value }) => ({
            key,
            value,
            order: metadataToShow.indexOf(`${parentLabel}.${key}`),
            label: helpers.prettifySnakeCase(key, labels[`${type}.${parentLabel}.${key}`])
        }))
            .sort((a, b) => a.order - b.order)
            .forEach(({ label, value }) => {
            subHtml.push('<div>');
            subHtml.push(`<dt>${label}</dt>`);
            subHtml.push(`<dd>${value}</dd>`);
            subHtml.push('</div>');
        });
        if (subHtml.length) {
            html.push(`<dl>${subHtml.join('')}</dl>`);
        }
    });
    return html.length ? html.join('') : null;
};
export default {
    normalize: ({ fields: data, paths, labels, metadataToShow, type }) => {
        const result = [];
        if (Array.isArray(data)) {
            data.forEach(({ key, value, label, fields }) => {
                // link & repeater control
                if (fields && Array.isArray(fields)) {
                    if (isLink(fields)) {
                        result.push({ key: label, value: getLink(fields, paths) });
                    }
                    else if (isRepeater(fields) && metadataToShow.includes(label)) {
                        result.push({
                            key: label,
                            value: getRepeater(fields, labels, metadataToShow, type, label, paths)
                        });
                    }
                    // default
                }
                else if (metadataToShow.includes(key)) {
                    result.push({ key, value });
                }
            });
        }
        return result
            .filter(({ value }) => !metadataIsEmpty(value))
            .map(({ key, value }) => ({
            key,
            value,
            order: metadataToShow.indexOf(key),
            label: helpers.prettifySnakeCase(key, labels[`${type}.${key}`]),
        }))
            .sort((a, b) => a.order - b.order);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvaGVscGVycy9tZXRhZGF0YS5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBRWhFLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFeEYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFNUQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJ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QUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO3lCQUN2RSxDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsVUFBVTtpQkFDWDtxQkFBTSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNO2FBQ1YsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEIsR0FBRztZQUNILEtBQUs7WUFDTCxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDaEUsQ0FBQyxDQUFDO2FBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmNvbnN0IG1ldGFkYXRhSXNFbXB0eSA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJ251bGwnKTtcblxuY29uc3QgaXNMaW5rID0gKGZpZWxkczogYW55W10pID0+ICEhZmllbGRzLmZpbHRlcigoeyBrZXkgfSkgPT4ga2V5ID09PSAnaXNMaW5rJykubGVuZ3RoO1xuXG5jb25zdCBpc1JlcGVhdGVyID0gKGZpZWxkczogYW55W10pID0+IEFycmF5LmlzQXJyYXkoZmllbGRzKTtcblxuY29uc3QgZ2V0TGluayA9IChmaWVsZHM6IGFueVtdLCBwYXRocykgPT4ge1xuICBjb25zdCBzY2hlZGFUeXBlcyA9IFsnb2dnZXR0by1jdWx0dXJhbGUnLCAnYWdncmVnYXppb25lLWxvZ2ljYSddO1xuICBjb25zdCBsYWJlbCA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICdsYWJlbCcpLnZhbHVlO1xuICBjb25zdCBzbHVnID0gaGVscGVycy5zbHVnaWZ5KGxhYmVsKTtcbiAgY29uc3QgaWQgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAnaWQnKS52YWx1ZTtcbiAgY29uc3QgdHlwZSA9IGZpZWxkcy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09ICd0eXBlJykudmFsdWU7XG4gIGxldCBiYXNlUGF0aCA9IHBhdGhzLmVudGl0YUJhc2VQYXRoO1xuICBpZiAoc2NoZWRhVHlwZXMuaW5jbHVkZXModHlwZSkpIHtcbiAgICBiYXNlUGF0aCA9IHBhdGhzLnNjaGVkYUJhc2VQYXRoO1xuICB9XG4gIHJldHVybiBgPGEgaHJlZj1cIiR7YmFzZVBhdGh9JHtpZH0vJHtzbHVnfVwiPiR7bGFiZWx9PC9hPmA7XG59O1xuXG5jb25zdCBnZXRSZXBlYXRlciA9IChmaWVsZHM6IGFueVtdLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlLCBwYXJlbnRMYWJlbCwgcGF0aHMpID0+IHtcbiAgY29uc3QgaHRtbCA9IFtdO1xuICBmaWVsZHNcbiAgICAuZmlsdGVyKCh7IGZpZWxkczogc3ViRmllbGRzIH0pID0+IHN1YkZpZWxkcylcbiAgICAuZm9yRWFjaCgoeyBmaWVsZHM6IHN1YkZpZWxkcyB9KSA9PiB7XG4gICAgICBjb25zdCBzdWJIdG1sID0gW107XG4gICAgICBpZiAoaXNMaW5rKHN1YkZpZWxkcykpIHtcbiAgICAgICAgc3ViSHRtbC5wdXNoKCc8ZGl2PicpO1xuICAgICAgICBzdWJIdG1sLnB1c2goYDxkZD4ke2dldExpbmsoc3ViRmllbGRzLCBwYXRocyl9PC9kZD5gKTtcbiAgICAgICAgc3ViSHRtbC5wdXNoKCc8L2Rpdj4nKTtcbiAgICAgIH1cbiAgICAgIHN1YkZpZWxkc1xuICAgICAgICAuZmlsdGVyKCh7IGtleSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGlzTGluayhzdWJGaWVsZHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gIShbJ2xhYmVsJywgJ2lkJywgJ3R5cGUnLCAnaXNMaW5rJ10uaW5jbHVkZXMoa2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKCh7IGtleSwgdmFsdWUgfSkgPT4gbWV0YWRhdGFUb1Nob3cuaW5jbHVkZXMoYCR7cGFyZW50TGFiZWx9LiR7a2V5fWApICYmICFtZXRhZGF0YUlzRW1wdHkodmFsdWUpKVxuICAgICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2YoYCR7cGFyZW50TGFiZWx9LiR7a2V5fWApLFxuICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2Ake3R5cGV9LiR7cGFyZW50TGFiZWx9LiR7a2V5fWBdKVxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxuICAgICAgICAuZm9yRWFjaCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIHN1Ykh0bWwucHVzaCgnPGRpdj4nKTtcbiAgICAgICAgICBzdWJIdG1sLnB1c2goYDxkdD4ke2xhYmVsfTwvZHQ+YCk7XG4gICAgICAgICAgc3ViSHRtbC5wdXNoKGA8ZGQ+JHt2YWx1ZX08L2RkPmApO1xuICAgICAgICAgIHN1Ykh0bWwucHVzaCgnPC9kaXY+Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3ViSHRtbC5sZW5ndGgpIHtcbiAgICAgICAgaHRtbC5wdXNoKGA8ZGw+JHtzdWJIdG1sLmpvaW4oJycpfTwvZGw+YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIHJldHVybiBodG1sLmxlbmd0aCA/IGh0bWwuam9pbignJykgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBub3JtYWxpemU6ICh7XG4gICAgZmllbGRzOiBkYXRhLFxuICAgIHBhdGhzLFxuICAgIGxhYmVscyxcbiAgICBtZXRhZGF0YVRvU2hvdyxcbiAgICB0eXBlXG4gIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YS5mb3JFYWNoKCh7XG4gICAgICAgIGtleSwgdmFsdWUsIGxhYmVsLCBmaWVsZHNcbiAgICAgIH0pID0+IHtcbiAgICAgICAgLy8gbGluayAmIHJlcGVhdGVyIGNvbnRyb2xcbiAgICAgICAgaWYgKGZpZWxkcyAmJiBBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICAgICAgICBpZiAoaXNMaW5rKGZpZWxkcykpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsga2V5OiBsYWJlbCwgdmFsdWU6IGdldExpbmsoZmllbGRzLCBwYXRocykgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1JlcGVhdGVyKGZpZWxkcykgJiYgbWV0YWRhdGFUb1Nob3cuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIGtleTogbGFiZWwsXG4gICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXBlYXRlcihmaWVsZHMsIGxhYmVscywgbWV0YWRhdGFUb1Nob3csIHR5cGUsIGxhYmVsLCBwYXRocylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGFUb1Nob3cuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHsga2V5LCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgICAgIC5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gIW1ldGFkYXRhSXNFbXB0eSh2YWx1ZSkpXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2Yoa2V5KSxcbiAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCBsYWJlbHNbYCR7dHlwZX0uJHtrZXl9YF0pLFxuICAgICAgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuICB9XG59O1xuIl19