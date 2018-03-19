import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any, fieldControl?: any) {
    const config = {
      'required': `${fieldControl}  is required`,
      'invalidEmailAddress': 'Invalid email address',
      'invalidMobileNumber': `Mobile number is not valid. Enter valid Number`,
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `${fieldControl} must be atleast ${validatorValue.requiredLength} characters`,
      'pattern': `please enter valid data ${fieldControl}`,
      'maxlength': `${fieldControl} maximum length should be ${validatorValue.requiredLength} characters`
    };
    return config[validatorName];
  }

  static emailValidator(control) {
    if (control.value
      .match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
  // static mobileNumberValidator(control) {
  //   if (control.value.match(/^\d{10}$/)) {
  //     return null;
  //   } else {
  //     return { 'invalidMobileNumber': true };
  //   }
  // }

  static passwordValidator(control) {
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('cpassword').value;
    if (password !== confirmPassword) {
      AC.get('cpassword').setErrors({ MatchPassword: true });
    } else {
      AC.get('cpassword').setErrors(null);
    }
  }
}
