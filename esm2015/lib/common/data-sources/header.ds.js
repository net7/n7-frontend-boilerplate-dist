import { DataSource } from '@n7-frontend/core';
const MOBILE_CLASS = 'is-mobile-nav-displayed';
const ACTIVE_CLASS = 'is-active';
export class HeaderDS extends DataSource {
    transform(data) {
        if (!data) {
            return null;
        }
        return Object.assign(Object.assign({}, data), { menuToggle: {
                open: {
                    payload: 'mobile-open'
                },
                close: {
                    payload: 'mobile-close'
                }
            } });
    }
    onCurrentNavChange(payload) {
        this.output.nav.items.forEach((item) => {
            this.updateItemClass(item, payload);
            if (item.subnav) {
                item.subnav.forEach((subNavItem) => {
                    this.updateItemClass(subNavItem, payload);
                });
            }
        });
    }
    onRouterChange() {
        if (!this.output) {
            return;
        }
        let { classes } = this.output;
        classes = classes || '';
        classes = classes.split(' ');
        if (classes.includes(MOBILE_CLASS)) {
            classes.splice(classes.indexOf(MOBILE_CLASS), 1);
            this.output.classes = classes.join(' ');
        }
    }
    onClick(payload) {
        // mobile control
        if (['mobile-open', 'mobile-close'].includes(payload)) {
            let { classes } = this.output;
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
    }
    updateItemClass(item, payload) {
        let itemClasses = [];
        if (item.classes) {
            itemClasses = itemClasses.concat(item.classes.split(' '));
        }
        if (item._meta.id === payload && !itemClasses.includes(ACTIVE_CLASS)) {
            itemClasses.push(ACTIVE_CLASS);
        }
        else if (itemClasses.includes(ACTIVE_CLASS)) {
            itemClasses.splice(itemClasses.indexOf(ACTIVE_CLASS, 1));
        }
        item.classes = itemClasses.join(' ');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxNQUFNLFlBQVksR0FBRyx5QkFBeUIsQ0FBQztBQUUvQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUFFakMsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0lBQzVCLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsdUNBQ0ssSUFBSSxLQUNQLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGFBQWE7aUJBQ3ZCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsY0FBYztpQkFDeEI7YUFDRixJQUNEO0lBQ0osQ0FBQztJQUVNLGtCQUFrQixDQUFDLE9BQU87UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO29CQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVNLE9BQU8sQ0FBQyxPQUFPO1FBQ3BCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyRCxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM5QixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUN4QixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU3QixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNsRDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDbkMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3BFLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBNT0JJTEVfQ0xBU1MgPSAnaXMtbW9iaWxlLW5hdi1kaXNwbGF5ZWQnO1xyXG5cclxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBIZWFkZXJEYXRhIHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBtZW51VG9nZ2xlOiB7XHJcbiAgICAgICAgb3Blbjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ21vYmlsZS1vcGVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2U6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdtb2JpbGUtY2xvc2UnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ3VycmVudE5hdkNoYW5nZShwYXlsb2FkKSB7XHJcbiAgICB0aGlzLm91dHB1dC5uYXYuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1DbGFzcyhpdGVtLCBwYXlsb2FkKTtcclxuICAgICAgaWYgKGl0ZW0uc3VibmF2KSB7XHJcbiAgICAgICAgaXRlbS5zdWJuYXYuZm9yRWFjaCgoc3ViTmF2SXRlbSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVJdGVtQ2xhc3Moc3ViTmF2SXRlbSwgcGF5bG9hZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUm91dGVyQ2hhbmdlKCkge1xyXG4gICAgaWYgKCF0aGlzLm91dHB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgeyBjbGFzc2VzIH0gPSB0aGlzLm91dHB1dDtcclxuICAgIGNsYXNzZXMgPSBjbGFzc2VzIHx8ICcnO1xyXG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhNT0JJTEVfQ0xBU1MpKSB7XHJcbiAgICAgIGNsYXNzZXMuc3BsaWNlKGNsYXNzZXMuaW5kZXhPZihNT0JJTEVfQ0xBU1MpLCAxKTtcclxuICAgICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgLy8gbW9iaWxlIGNvbnRyb2xcclxuICAgIGlmIChbJ21vYmlsZS1vcGVuJywgJ21vYmlsZS1jbG9zZSddLmluY2x1ZGVzKHBheWxvYWQpKSB7XHJcbiAgICAgIGxldCB7IGNsYXNzZXMgfSA9IHRoaXMub3V0cHV0O1xyXG4gICAgICBjbGFzc2VzID0gY2xhc3NlcyB8fCAnJztcclxuICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKE1PQklMRV9DTEFTUykpIHtcclxuICAgICAgICBjbGFzc2VzLnNwbGljZShjbGFzc2VzLmluZGV4T2YoTU9CSUxFX0NMQVNTKSwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKE1PQklMRV9DTEFTUyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJdGVtQ2xhc3MoaXRlbSwgcGF5bG9hZCkge1xyXG4gICAgbGV0IGl0ZW1DbGFzc2VzID0gW107XHJcbiAgICBpZiAoaXRlbS5jbGFzc2VzKSB7XHJcbiAgICAgIGl0ZW1DbGFzc2VzID0gaXRlbUNsYXNzZXMuY29uY2F0KGl0ZW0uY2xhc3Nlcy5zcGxpdCgnICcpKTtcclxuICAgIH1cclxuICAgIGlmIChpdGVtLl9tZXRhLmlkID09PSBwYXlsb2FkICYmICFpdGVtQ2xhc3Nlcy5pbmNsdWRlcyhBQ1RJVkVfQ0xBU1MpKSB7XHJcbiAgICAgIGl0ZW1DbGFzc2VzLnB1c2goQUNUSVZFX0NMQVNTKTtcclxuICAgIH0gZWxzZSBpZiAoaXRlbUNsYXNzZXMuaW5jbHVkZXMoQUNUSVZFX0NMQVNTKSkge1xyXG4gICAgICBpdGVtQ2xhc3Nlcy5zcGxpY2UoaXRlbUNsYXNzZXMuaW5kZXhPZihBQ1RJVkVfQ0xBU1MsIDEpKTtcclxuICAgIH1cclxuICAgIGl0ZW0uY2xhc3NlcyA9IGl0ZW1DbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcbn1cclxuIl19