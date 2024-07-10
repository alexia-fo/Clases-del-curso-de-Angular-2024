import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  firstName = new FormControl('');
  lastName = new FormControl('');

  ngOnInit() { }

  onSubmit() {
    console.log({
      firstName: this.firstName.value,
      lastName: this.lastName.value
    });
  }

}
