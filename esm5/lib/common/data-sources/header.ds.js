import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MOBILE_CLASS = 'is-mobile-nav-displayed';
var ACTIVE_CLASS = 'is-active';
var HeaderDS = /** @class */ (function (_super) {
    __extends(HeaderDS, _super);
    function HeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderDS.prototype.transform = function (data) {
        if (!data) {
            return null;
        }
        return __assign(__assign({}, data), { menuToggle: {
                open: {
                    payload: 'mobile-open'
                },
                close: {
                    payload: 'mobile-close'
                }
            } });
    };
    HeaderDS.prototype.onCurrentNavChange = function (payload) {
        this.output.nav.items.forEach(function (item) {
            item.classes = item._meta.id === payload ? ACTIVE_CLASS : '';
        });
    };
    HeaderDS.prototype.onRouterChange = function () {
        if (!this.output) {
            return;
        }
        var classes = this.output.classes;
        classes = classes || '';
        classes = classes.split(' ');
        if (classes.includes(MOBILE_CLASS)) {
            classes.splice(classes.indexOf(MOBILE_CLASS), 1);
            this.output.classes = classes.join(' ');
        }
    };
    HeaderDS.prototype.onClick = function (payload) {
        // mobile control
        if (['mobile-open', 'mobile-close'].includes(payload)) {
            var classes = this.output.classes;
            classes = classes || '';
            classes = classes.split(' ');
            if (classes.includes(MOBILE_CLASS)) {
                classes.splice(classes.indexOf(MOBILE_CLASS), 1);
            }
            else {
                classes.push(MOBILE_CLASS);
            }
            this.output.classes = classes.join(' ');
        }
    };
    return HeaderDS;
}(DataSource));
export { HeaderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsSUFBTSxZQUFZLEdBQUcseUJBQXlCLENBQUM7QUFFL0MsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO0FBRWpDO0lBQThCLDRCQUFVO0lBQXhDOztJQXNEQSxDQUFDO0lBckRXLDRCQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCw2QkFDSyxJQUFJLEtBQ1AsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsYUFBYTtpQkFDdkI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxjQUFjO2lCQUN4QjthQUNGLElBQ0Q7SUFDSixDQUFDO0lBRU0scUNBQWtCLEdBQXpCLFVBQTBCLE9BQU87UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGlDQUFjLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0ssSUFBQSw2QkFBTyxDQUFpQjtRQUM5QixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRU0sMEJBQU8sR0FBZCxVQUFlLE9BQU87UUFDcEIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLElBQUEsNkJBQU8sQ0FBaUI7WUFDOUIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDeEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0IsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF0REQsQ0FBOEIsVUFBVSxHQXNEdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuY29uc3QgTU9CSUxFX0NMQVNTID0gJ2lzLW1vYmlsZS1uYXYtZGlzcGxheWVkJztcblxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBIZWFkZXJEYXRhIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgbWVudVRvZ2dsZToge1xuICAgICAgICBvcGVuOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ21vYmlsZS1vcGVuJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZToge1xuICAgICAgICAgIHBheWxvYWQ6ICdtb2JpbGUtY2xvc2UnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG9uQ3VycmVudE5hdkNoYW5nZShwYXlsb2FkKSB7XG4gICAgdGhpcy5vdXRwdXQubmF2Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NlcyA9IGl0ZW0uX21ldGEuaWQgPT09IHBheWxvYWQgPyBBQ1RJVkVfQ0xBU1MgOiAnJztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblJvdXRlckNoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMub3V0cHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB7IGNsYXNzZXMgfSA9IHRoaXMub3V0cHV0O1xuICAgIGNsYXNzZXMgPSBjbGFzc2VzIHx8ICcnO1xuICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNwbGl0KCcgJyk7XG5cbiAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhNT0JJTEVfQ0xBU1MpKSB7XG4gICAgICBjbGFzc2VzLnNwbGljZShjbGFzc2VzLmluZGV4T2YoTU9CSUxFX0NMQVNTKSwgMSk7XG4gICAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIC8vIG1vYmlsZSBjb250cm9sXG4gICAgaWYgKFsnbW9iaWxlLW9wZW4nLCAnbW9iaWxlLWNsb3NlJ10uaW5jbHVkZXMocGF5bG9hZCkpIHtcbiAgICAgIGxldCB7IGNsYXNzZXMgfSA9IHRoaXMub3V0cHV0O1xuICAgICAgY2xhc3NlcyA9IGNsYXNzZXMgfHwgJyc7XG4gICAgICBjbGFzc2VzID0gY2xhc3Nlcy5zcGxpdCgnICcpO1xuXG4gICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhNT0JJTEVfQ0xBU1MpKSB7XG4gICAgICAgIGNsYXNzZXMuc3BsaWNlKGNsYXNzZXMuaW5kZXhPZihNT0JJTEVfQ0xBU1MpLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChNT0JJTEVfQ0xBU1MpO1xuICAgICAgfVxuICAgICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cbiAgfVxufVxuIl19