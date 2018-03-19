import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
	selector: 'app-form-control-messages',
	template: `<div class="errormsg" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
	styleUrls: ['./form-control-message.component.css']
})
export class FormControlMessageComponent {

	@Input() control: FormControl;
	@Input() name: string;

	get errorMessage() {
		for (const propertyName in this.control.errors) {
			if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
				return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.name);

			}
		}
		return null;
	}
}
