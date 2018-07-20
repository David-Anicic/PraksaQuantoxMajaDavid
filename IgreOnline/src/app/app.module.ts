import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
