import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', redirectTo:'register', pathMatch:'full' },
  { path: 'register', component:RegistrationComponent },
  { path:'student',component:StudentComponent },
  { path:'**', component:RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
