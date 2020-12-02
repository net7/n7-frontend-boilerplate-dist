import helpers from '../../common/helpers';
var metadataIsEmpty = function (value) { return (!value || value === 'null'); };
var ɵ0 = metadataIsEmpty;
var isLink = function (fields) { return !!fields.filter(function (_a) {
    var key = _a.key;
    return key === 'isLink';
}).length; };
var ɵ1 = isLink;
var isRepeater = function (fields) { return Array.isArray(fields); };
var ɵ2 = isRepeater;
var getLink = function (fields, paths) {
    var schedaTypes = ['oggetto-culturale', 'aggregazione-logica'];
    var label = fields.find(function (_a) {
        var key = _a.key;
        return key === 'label';
    }).value;
    var slug = helpers.slugify(label);
    var id = fields.find(function (_a) {
        var key = _a.key;
        return key === 'id';
    }).value;
    var type = fields.find(function (_a) {
        var key = _a.key;
        return key === 'type';
    }).value;
    var basePath = paths.entitaBasePath;
    if (schedaTypes.includes(type)) {
        basePath = paths.schedaBasePath;
    }
    return "<a href=\"" + basePath + id + "/" + slug + "\">" + label + "</a>";
};
var ɵ3 = getLink;
var getRepeater = function (fields, labels, metadataToShow, type, parentLabel) {
    var html = [];
    fields
        .filter(function (_a) {
        var subFields = _a.fields;
        return subFields;
    })
        .forEach(function (_a) {
        var subFields = _a.fields;
        var subHtml = [];
        subFields
            .filter(function (_a) {
            var key = _a.key, value = _a.value;
            return metadataToShow.includes(parentLabel + "." + key) && !metadataIsEmpty(value);
        })
            .map(function (_a) {
            var key = _a.key, value = _a.value;
            return ({
                key: key,
                value: value,
                order: metadataToShow.indexOf(parentLabel + "." + key),
                label: helpers.prettifySnakeCase(key, labels[type + "." + parentLabel + "." + key])
            });
        })
            .sort(function (a, b) { return a.order - b.order; })
            .forEach(function (_a) {
            var label = _a.label, value = _a.value;
            subHtml.push("<div>");
            subHtml.push("<dt>" + label + "</dt>");
            subHtml.push("<dd>" + value + "</dd>");
            subHtml.push("</div>");
        });
        if (subHtml.length) {
            html.push("<dl>" + subHtml.join('') + "</dl>");
        }
    });
    return html.length ? html.join('') : null;
};
var ɵ4 = getRepeater;
export default {
    normalize: function (_a) {
        var data = _a.fields, paths = _a.paths, labels = _a.labels, metadataToShow = _a.metadataToShow, type = _a.type;
        var result = [];
        if (Array.isArray(data)) {
            data.forEach(function (_a) {
                var key = _a.key, value = _a.value, label = _a.label, fields = _a.fields;
                // link & repeater control
                if (fields && Array.isArray(fields)) {
                    if (isLink(fields)) {
                        result.push({ key: label, value: getLink(fields, paths) });
                    }
                    else if (isRepeater(fields)) {
                        result.push({
                            key: label,
                            value: getRepeater(fields, labels, metadataToShow, type, label)
                        });
                    }
                    // default
                }
                else if (metadataToShow.includes(key)) {
                    result.push({ key: key, value: value });
                }
            });
        }
        return result
            .filter(function (_a) {
            var value = _a.value;
            return !metadataIsEmpty(value);
        })
            .map(function (_a) {
            var key = _a.key, value = _a.value;
            return ({
                key: key,
                value: value,
                order: metadataToShow.indexOf(key),
                label: helpers.prettifySnakeCase(key, labels[type + "." + key]),
            });
        })
            .sort(function (a, b) { return a.order - b.order; });
    }
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2hlbHBlcnMvbWV0YWRhdGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUM7O0FBRWhFLElBQU0sTUFBTSxHQUFHLFVBQUMsTUFBYSxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFPO1FBQUwsWUFBRztJQUFPLE9BQUEsR0FBRyxLQUFLLFFBQVE7QUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBckQsQ0FBcUQsQ0FBQzs7QUFFeEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFhLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFyQixDQUFxQixDQUFDOztBQUU1RCxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQWEsRUFBRSxLQUFLO0lBQ25DLElBQU0sV0FBVyxHQUFHLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTztZQUFMLFlBQUc7UUFBTyxPQUFBLEdBQUcsS0FBSyxPQUFPO0lBQWYsQ0FBZSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU87WUFBTCxZQUFHO1FBQU8sT0FBQSxHQUFHLEtBQUssSUFB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LEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBSSxJQUFJLFNBQUksR0FBSyxDQUFDLENBQUM7YUFDaEUsQ0FBQztRQUx1QixDQUt2QixDQUFDO2FBQ0YsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBtZXRhZGF0YUlzRW1wdHkgPSAodmFsdWUpID0+ICghdmFsdWUgfHwgdmFsdWUgPT09ICdudWxsJyk7XG5cbmNvbnN0IGlzTGluayA9IChmaWVsZHM6IGFueVtdKSA9PiAhIWZpZWxkcy5maWx0ZXIoKHsga2V5IH0pID0+IGtleSA9PT0gJ2lzTGluaycpLmxlbmd0aDtcblxuY29uc3QgaXNSZXBlYXRlciA9IChmaWVsZHM6IGFueVtdKSA9PiBBcnJheS5pc0FycmF5KGZpZWxkcyk7XG5cbmNvbnN0IGdldExpbmsgPSAoZmllbGRzOiBhbnlbXSwgcGF0aHMpID0+IHtcbiAgY29uc3Qgc2NoZWRhVHlwZXMgPSBbJ29nZ2V0dG8tY3VsdHVyYWxlJywgJ2FnZ3JlZ2F6aW9uZS1sb2dpY2EnXTtcbiAgY29uc3QgbGFiZWwgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAnbGFiZWwnKS52YWx1ZTtcbiAgY29uc3Qgc2x1ZyA9IGhlbHBlcnMuc2x1Z2lmeShsYWJlbCk7XG4gIGNvbnN0IGlkID0gZmllbGRzLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gJ2lkJykudmFsdWU7XG4gIGNvbnN0IHR5cGUgPSBmaWVsZHMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSAndHlwZScpLnZhbHVlO1xuICBsZXQgYmFzZVBhdGggPSBwYXRocy5lbnRpdGFCYXNlUGF0aDtcbiAgaWYgKHNjaGVkYVR5cGVzLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgYmFzZVBhdGggPSBwYXRocy5zY2hlZGFCYXNlUGF0aDtcbiAgfVxuICByZXR1cm4gYDxhIGhyZWY9XCIke2Jhc2VQYXRofSR7aWR9LyR7c2x1Z31cIj4ke2xhYmVsfTwvYT5gO1xufTtcblxuY29uc3QgZ2V0UmVwZWF0ZXIgPSAoZmllbGRzOiBhbnlbXSwgbGFiZWxzLCBtZXRhZGF0YVRvU2hvdywgdHlwZSwgcGFyZW50TGFiZWwpID0+IHtcbiAgY29uc3QgaHRtbCA9IFtdO1xuICBmaWVsZHNcbiAgICAuZmlsdGVyKCh7IGZpZWxkczogc3ViRmllbGRzIH0pID0+IHN1YkZpZWxkcylcbiAgICAuZm9yRWFjaCgoeyBmaWVsZHM6IHN1YkZpZWxkcyB9KSA9PiB7XG4gICAgICBjb25zdCBzdWJIdG1sID0gW107XG4gICAgICBzdWJGaWVsZHNcbiAgICAgICAgLmZpbHRlcigoeyBrZXksIHZhbHVlIH0pID0+IG1ldGFkYXRhVG9TaG93LmluY2x1ZGVzKGAke3BhcmVudExhYmVsfS4ke2tleX1gKSAmJiAhbWV0YWRhdGFJc0VtcHR5KHZhbHVlKSlcbiAgICAgICAgLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGAke3BhcmVudExhYmVsfS4ke2tleX1gKSxcbiAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1tgJHt0eXBlfS4ke3BhcmVudExhYmVsfS4ke2tleX1gXSlcbiAgICAgICAgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcbiAgICAgICAgLmZvckVhY2goKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICBzdWJIdG1sLnB1c2goYDxkaXY+YCk7XG4gICAgICAgICAgc3ViSHRtbC5wdXNoKGA8ZHQ+JHtsYWJlbH08L2R0PmApO1xuICAgICAgICAgIHN1Ykh0bWwucHVzaChgPGRkPiR7dmFsdWV9PC9kZD5gKTtcbiAgICAgICAgICBzdWJIdG1sLnB1c2goYDwvZGl2PmApO1xuICAgICAgICB9KTtcbiAgICAgIGlmIChzdWJIdG1sLmxlbmd0aCkge1xuICAgICAgICBodG1sLnB1c2goYDxkbD4ke3N1Ykh0bWwuam9pbignJyl9PC9kbD5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgcmV0dXJuIGh0bWwubGVuZ3RoID8gaHRtbC5qb2luKCcnKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5vcm1hbGl6ZTogKHtcbiAgICBmaWVsZHM6IGRhdGEsXG4gICAgcGF0aHMsXG4gICAgbGFiZWxzLFxuICAgIG1ldGFkYXRhVG9TaG93LFxuICAgIHR5cGVcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhLmZvckVhY2goKHtcbiAgICAgICAga2V5LCB2YWx1ZSwgbGFiZWwsIGZpZWxkc1xuICAgICAgfSkgPT4ge1xuICAgICAgICAvLyBsaW5rICYgcmVwZWF0ZXIgY29udHJvbFxuICAgICAgICBpZiAoZmllbGRzICYmIEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgICAgICAgIGlmIChpc0xpbmsoZmllbGRzKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBrZXk6IGxhYmVsLCB2YWx1ZTogZ2V0TGluayhmaWVsZHMsIHBhdGhzKSB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUmVwZWF0ZXIoZmllbGRzKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGxhYmVsLFxuICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmVwZWF0ZXIoZmllbGRzLCBsYWJlbHMsIG1ldGFkYXRhVG9TaG93LCB0eXBlLCBsYWJlbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGFUb1Nob3cuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHsga2V5LCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgICAgIC5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gIW1ldGFkYXRhSXNFbXB0eSh2YWx1ZSkpXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2Yoa2V5KSxcbiAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCBsYWJlbHNbYCR7dHlwZX0uJHtrZXl9YF0pLFxuICAgICAgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuICB9XG59O1xuIl19