
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  static registerForm: any;
  static registerationForm: any;
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  registerForm!: FormGroup;
  submitted!:boolean;
  registerationForm: any;
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
      
      })
    };
  }


