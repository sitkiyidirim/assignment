import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomerDetailPageComponent } from './customer/customer-detail-page/customer-detail-page.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { Role } from './models/role.enum';
import { QuestionnaireComponent } from './review/questionnaire/questionnaire.component';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},

  {  path:'profile', component:ProfileComponent,
     canActivate: [AuthGuard],
     data: {roles: [Role.ADMİN, Role.CUSTOMER]} 
  },

  {path:'customerDetailPage', component:CustomerDetailPageComponent},
  {path:'questionnaire', component:QuestionnaireComponent},
  {path:'register', component:RegisterComponent},

  {path:'404', component:NotFoundComponent},
  {path:'401', component:UnauthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router){
    this.router.errorHandler=(err:any)=>{
      this.router.navigate(['/404']);
    };
  }
}
