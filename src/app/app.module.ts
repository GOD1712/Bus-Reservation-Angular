import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SearchBusComponent } from './components/book-bus/search-bus/search-bus.component';
import { SeatsComponent } from './components/seats/seats.component';
import { ScheduleComponent } from './components/book-bus/schedule/schedule.component';
import { BookBusComponent } from './components/book-bus/book-bus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingsComponent } from './components/dashboard/bookings/bookings.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { WalletComponent } from './components/dashboard/wallet/wallet.component';
import { HomeComponent } from './components/home/home.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminAddbusComponent } from './components/admin-dashboard/admin-addbus/admin-addbus.component';
import { AdminPasswordComponent } from './components/admin-dashboard/admin-password/admin-password.component';
import { AdminScheduleComponent } from './components/admin-dashboard/admin-schedule/admin-schedule.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    SearchBusComponent,
    SeatsComponent,
    ScheduleComponent,
    BookBusComponent,
    DashboardComponent,
    BookingsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    WalletComponent,
    HomeComponent,
    MakePaymentComponent,
    NotfoundPageComponent,
    ContactUsComponent,
    AdminDashboardComponent,
    AdminAddbusComponent,
    AdminPasswordComponent,
    AdminScheduleComponent,
    AdminLoginComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
