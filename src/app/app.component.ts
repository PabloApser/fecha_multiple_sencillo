import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateClass } from 'ngx-multiple-dates';
// import { DateTime } from 'luxon';
// import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent {
  title = 'angularFecha';

  public model!: Date[];
  public modelWithToggleButton!: Date[];
  public modelPredefined: Date[] = [
    new Date('7/15/1966'),
    new Date('3/23/1968'),
    new Date('7/4/1992'),
    new Date('1/25/1994'),
    new Date('6/17/1998')
  ];
  public modelMinMax!: Date[];
  public modelMinlengthMaxlength!: Date[];
  public modelRequired!: Date[];
  public modelColor!: Date[];
  public modelClasses: Date[] = [ new Date('3/7/2021'), new Date('3/11/2021') ];
  public min = new Date(+(new Date()) - 30 * 24 * 60 * 60 * 1000);
  public max = new Date(+(new Date()) + 30 * 24 * 60 * 60 * 1000);
  public classes: DateClass[] = [
    { value: new Date('3/5/2021'), className: 'my-red' },
    { value: new Date('3/7/2021'), className: 'my-green' },
    { value: new Date('3/9/2021'), className: 'my-blue' }
  ];
  public reactiveControl = new FormControl();
  public dynamicName = 'reactiveFormControl';
  public reactiveForm = new FormGroup({
    [this.dynamicName]: new FormControl(this.modelPredefined)
  });

  
}
