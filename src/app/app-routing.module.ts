
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../node_modules/@angular/router';

import { NgModule } from '@angular/core';
import { NewPageComponent } from './NewPage/NewPage.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { senderComponent } from './sender/sender.component';
import { accessrolesComponent } from './accessroles/accessroles.component';
import { applicationComponent } from './application/application.component';
import { auditlogComponent } from './auditlog/auditlog.component';
import { employeeComponent } from './employee/employee.component';
import { packageComponent } from './package/package.component';
import { pricingComponent } from './pricing/pricing.component';
import { reportsComponent } from './reports/reports.component';
import { shipmentagentComponent } from './shipmentagent/shipmentagent.component';
import { vehicleComponent } from './vehicle/vehicle.component';
import { vehicletypeComponent } from './vehicletype/vehicletype.component';


const routes: Routes = [
  { path: 'NewPage', component: NewPageComponent },
  { path: 'App', component:  AppComponent} ,
  { path: 'Dashboard', component:  DashboardComponent},
  { path: 'sender', component:  senderComponent}, 
  { path: 'accessroles', component:  accessrolesComponent},
  { path: 'application', component:  applicationComponent},
  { path: 'auditlog', component:  auditlogComponent},
  { path: 'employee', component:  employeeComponent},
  { path: 'package', component:  packageComponent},
  { path: 'pricing', component:  pricingComponent},
  { path: 'reports', component:  reportsComponent},
  { path: 'shipmentagent', component:  shipmentagentComponent},
  { path: 'vehicle', component:  vehicleComponent},
  { path: 'vehicletype', component:  vehicletypeComponent}
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
