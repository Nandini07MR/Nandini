import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'RegistrationForm', pathMatch:"full"},
  {path:"RegistrationForm",component:RegistrationFormComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
