import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule} from './/app-routing.module';
import { NewPageComponent } from './NewPage/NewPage.component';
import { senderComponent } from './sender/sender.component';
import { FormsModule} from '@angular/forms';
import { accessrolesComponent } from './accessroles/accessroles.component';
import { applicationComponent } from './application/application.component';
import { auditlogComponent } from './auditlog/auditlog.component';
import { employeeComponent } from './employee/employee.component';
import { packageComponent } from './package/package.component';
import { vehicleComponent } from './vehicle/vehicle.component';
import { vehicletypeComponent } from './vehicletype/vehicletype.component';
import { shipmentagentComponent } from './shipmentagent/shipmentagent.component';
import { reportsComponent } from './reports/reports.component';
import { pricingComponent } from './pricing/pricing.component';
import { SenderService } from './sender/sender.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewPageComponent,
    senderComponent, 
    accessrolesComponent,
    applicationComponent,
    auditlogComponent,
    employeeComponent,
    packageComponent,
    vehicleComponent,
    vehicletypeComponent,
    shipmentagentComponent,
    reportsComponent,
    pricingComponent,
 
    
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [SenderService],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
