import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  namePhoneForm!: FormGroup;

  ngOnInit() {
    this.namePhoneForm = new FormGroup({
      title: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$') // Example for a 10-digit phone number
      ])
    });
  }


  onSubmit(){

  }
}
