import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  personForm: FormGroup;
  emailRegEx: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordRegEx: RegExp = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
  mobileRegEx: RegExp = /^[0-9]{10}$/;
  displayData: any;
  isValidToShow: boolean = false;
  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailRegEx)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegEx)]],
      contact: ['', [Validators.required, Validators.pattern(this.mobileRegEx)]]
    });
  }

  ngOnInit() {
  }

  showFormData() {
    if (this.personForm.valid) {
      console.log('Inside save method');
      console.log(this.personForm.value);
      this.displayData = this.personForm.value;
      this.isValidToShow = true;
    } else {
      console.log('Invalid form');
      this.isValidToShow = false;
    }
  }
}