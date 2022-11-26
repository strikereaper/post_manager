import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/user-details/dashboard-home/dashboard-home.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin_home' },
  { path: 'admin_home', component:  DashboardHomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
