
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
  it('form invalid when empty',()=>{
    // component.registerForm.controls['name'].setValue('');
    component.registerForm.controls['firstName'].setValue('');
    component.registerForm.controls['lastName'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();

  });



it('firstName field validity',()=>{
    const firstName = component.registerForm.controls['firstName'];
  firstName.setValue('');
  
   expect(firstName.valid).toBeFalsy();

  expect (firstName.hasError('required')).toBeTruthy();

});
it('lastName field validity',()=>{
  const lastName = component.registerForm.controls['lastName'];
  lastName.setValue('');
  
  expect(lastName.valid).toBeFalsy();
  expect(lastName.hasError('required')).toBeTruthy();
  
});


})
