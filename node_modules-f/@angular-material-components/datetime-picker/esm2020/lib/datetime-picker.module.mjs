import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatCalendar, NgxMatCalendarHeader } from './calendar';
import { NgxMatCalendarBody } from './calendar-body';
import { DefaultNgxMatCalendarRangeStrategy, NGX_MAT_DATE_RANGE_SELECTION_STRATEGY } from './date-range-selection-strategy';
import { NgxMatDatetimeInput } from './datetime-input';
import { NgxMatDatetimeContent, NgxMatDatetimePicker } from './datetime-picker.component';
import { NgxMatMonthView } from './month-view';
import { NgxMatMultiYearView } from './multi-year-view';
import { NgxMatTimepickerModule } from './timepicker.module';
import { NgxMatYearView } from './year-view';
import * as i0 from "@angular/core";
export class NgxMatDatetimePickerModule {
}
/** @nocollapse */ /** @nocollapse */ NgxMatDatetimePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: NgxMatDatetimePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ /** @nocollapse */ NgxMatDatetimePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: NgxMatDatetimePickerModule, declarations: [NgxMatDatetimePicker,
        NgxMatDatetimeContent,
        NgxMatDatetimeInput,
        NgxMatCalendar,
        NgxMatMonthView,
        NgxMatCalendarBody,
        NgxMatYearView,
        NgxMatMultiYearView,
        NgxMatCalendarHeader], imports: [CommonModule,
        MatDatepickerModule,
        MatDialogModule,
        PortalModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        NgxMatTimepickerModule], exports: [NgxMatDatetimePicker,
        NgxMatDatetimeInput,
        NgxMatCalendar,
        NgxMatMonthView,
        NgxMatCalendarBody,
        NgxMatYearView,
        NgxMatMultiYearView,
        NgxMatCalendarHeader] });
/** @nocollapse */ /** @nocollapse */ NgxMatDatetimePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: NgxMatDatetimePickerModule, providers: [
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
        {
            provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: DefaultNgxMatCalendarRangeStrategy
        }
    ], imports: [[
            CommonModule,
            MatDatepickerModule,
            MatDialogModule,
            PortalModule,
            FormsModule,
            MatIconModule,
            MatButtonModule,
            MatInputModule,
            NgxMatTimepickerModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: NgxMatDatetimePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        PortalModule,
                        FormsModule,
                        MatIconModule,
                        MatButtonModule,
                        MatInputModule,
                        NgxMatTimepickerModule
                    ],
                    exports: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatCalendarBody,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    declarations: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeContent,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatCalendarBody,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    entryComponents: [
                        NgxMatDatetimeContent,
                        NgxMatCalendarHeader
                    ],
                    providers: [
                        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                        {
                            provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
                            useClass: DefaultNgxMatCalendarRangeStrategy
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RhdGV0aW1lLXBpY2tlci9zcmMvbGliL2RhdGV0aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLCtDQUErQyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBK0M3QyxNQUFNLE9BQU8sMEJBQTBCOzs2SkFBMUIsMEJBQTBCOzhKQUExQiwwQkFBMEIsaUJBdEJqQyxvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLG9CQUFvQixhQTdCcEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWM7UUFDZCxzQkFBc0IsYUFHdEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLG9CQUFvQjs4SkF5QmIsMEJBQTBCLGFBUnpCO1FBQ1IsK0NBQStDO1FBQy9DO1lBQ0csT0FBTyxFQUFFLHFDQUFxQztZQUM5QyxRQUFRLEVBQUUsa0NBQWtDO1NBQzlDO0tBQ0gsWUExQ1E7WUFDTixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixZQUFZO1lBQ1osV0FBVztZQUNYLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLHNCQUFzQjtTQUN4QjsyRkFrQ1MsMEJBQTBCO2tCQTdDdEMsUUFBUTttQkFBQztvQkFDUCxPQUFPLEVBQUU7d0JBQ04sWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLHNCQUFzQjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNOLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1gsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLG9CQUFvQjtxQkFDdEI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNkLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1IsK0NBQStDO3dCQUMvQzs0QkFDRyxPQUFPLEVBQUUscUNBQXFDOzRCQUM5QyxRQUFRLEVBQUUsa0NBQWtDO3lCQUM5QztxQkFDSDtpQkFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTmd4TWF0Q2FsZW5kYXIsIE5neE1hdENhbGVuZGFySGVhZGVyIH0gZnJvbSAnLi9jYWxlbmRhcic7XHJcbmltcG9ydCB7IE5neE1hdENhbGVuZGFyQm9keSB9IGZyb20gJy4vY2FsZW5kYXItYm9keSc7XHJcbmltcG9ydCB7IERlZmF1bHROZ3hNYXRDYWxlbmRhclJhbmdlU3RyYXRlZ3ksIE5HWF9NQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1kgfSBmcm9tICcuL2RhdGUtcmFuZ2Utc2VsZWN0aW9uLXN0cmF0ZWd5JztcclxuaW1wb3J0IHsgTmd4TWF0RGF0ZXRpbWVJbnB1dCB9IGZyb20gJy4vZGF0ZXRpbWUtaW5wdXQnO1xyXG5pbXBvcnQgeyBOZ3hNYXREYXRldGltZUNvbnRlbnQsIE5neE1hdERhdGV0aW1lUGlja2VyIH0gZnJvbSAnLi9kYXRldGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4TWF0TW9udGhWaWV3IH0gZnJvbSAnLi9tb250aC12aWV3JztcclxuaW1wb3J0IHsgTmd4TWF0TXVsdGlZZWFyVmlldyB9IGZyb20gJy4vbXVsdGkteWVhci12aWV3JztcclxuaW1wb3J0IHsgTmd4TWF0VGltZXBpY2tlck1vZHVsZSB9IGZyb20gJy4vdGltZXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ3hNYXRZZWFyVmlldyB9IGZyb20gJy4veWVhci12aWV3JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgIGltcG9ydHM6IFtcclxuICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgIFBvcnRhbE1vZHVsZSxcclxuICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgIE5neE1hdFRpbWVwaWNrZXJNb2R1bGVcclxuICAgXSxcclxuICAgZXhwb3J0czogW1xyXG4gICAgICBOZ3hNYXREYXRldGltZVBpY2tlcixcclxuICAgICAgTmd4TWF0RGF0ZXRpbWVJbnB1dCxcclxuICAgICAgTmd4TWF0Q2FsZW5kYXIsXHJcbiAgICAgIE5neE1hdE1vbnRoVmlldyxcclxuICAgICAgTmd4TWF0Q2FsZW5kYXJCb2R5LFxyXG4gICAgICBOZ3hNYXRZZWFyVmlldyxcclxuICAgICAgTmd4TWF0TXVsdGlZZWFyVmlldyxcclxuICAgICAgTmd4TWF0Q2FsZW5kYXJIZWFkZXJcclxuICAgXSxcclxuICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgIE5neE1hdERhdGV0aW1lUGlja2VyLFxyXG4gICAgICBOZ3hNYXREYXRldGltZUNvbnRlbnQsXHJcbiAgICAgIE5neE1hdERhdGV0aW1lSW5wdXQsXHJcbiAgICAgIE5neE1hdENhbGVuZGFyLFxyXG4gICAgICBOZ3hNYXRNb250aFZpZXcsXHJcbiAgICAgIE5neE1hdENhbGVuZGFyQm9keSxcclxuICAgICAgTmd4TWF0WWVhclZpZXcsXHJcbiAgICAgIE5neE1hdE11bHRpWWVhclZpZXcsXHJcbiAgICAgIE5neE1hdENhbGVuZGFySGVhZGVyXHJcbiAgIF0sXHJcbiAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICBOZ3hNYXREYXRldGltZUNvbnRlbnQsXHJcbiAgICAgIE5neE1hdENhbGVuZGFySGVhZGVyXHJcbiAgIF0sXHJcbiAgIHByb3ZpZGVyczogW1xyXG4gICAgICBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUixcclxuICAgICAge1xyXG4gICAgICAgICBwcm92aWRlOiBOR1hfTUFUX0RBVEVfUkFOR0VfU0VMRUNUSU9OX1NUUkFURUdZLFxyXG4gICAgICAgICB1c2VDbGFzczogRGVmYXVsdE5neE1hdENhbGVuZGFyUmFuZ2VTdHJhdGVneVxyXG4gICAgICB9XHJcbiAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdERhdGV0aW1lUGlja2VyTW9kdWxlIHsgfVxyXG4iXX0=