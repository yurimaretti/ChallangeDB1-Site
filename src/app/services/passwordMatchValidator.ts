import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (control && matchingControl && control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
      return { mustMatch: true };
    } else {
      if (matchingControl?.hasError('mustMatch')) {
        matchingControl.setErrors(null);
      }
      return null;
    }
  };
}
