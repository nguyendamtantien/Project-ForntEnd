import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './shared/employee.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PositionsComponent } from './positions/positions.component';
import { PositionComponent } from './positions/position/position.component';
import { ListPositionComponent } from './positions/list-position/list-position.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    TopbarComponent,
    EmployeeComponent,
    EmployeesComponent,
    EmployeeListComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PositionsComponent,
    PositionComponent,
    ListPositionComponent,
    VerifyEmailComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
