import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  options: SelectItem[] = [];
  formGroup: FormGroup;
  model: any;

  constructor(
		private readonly formBuilder: FormBuilder
	)
	{
	}

  ngOnInit() {
    this.options = [
            {label: 'Option1', value: 1, icon: 'fa-user'},
            {label: 'Option2', value: 2, icon: 'fa-user'},
            {label: 'Option3', value: 3, icon: 'fa-user'},
        ];

    this.formGroup = this.formBuilder.group({
			item: [null, Validators.required]
		});

  }
}
