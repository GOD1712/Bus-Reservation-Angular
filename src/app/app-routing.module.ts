import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookBusComponent } from './components/book-bus/book-bus.component';
import { BookingsComponent } from './components/dashboard/bookings/bookings.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { WalletComponent } from './components/dashboard/wallet/wallet.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SeatsComponent } from './components/seats/seats.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminAddbusComponent } from './components/admin-dashboard/admin-addbus/admin-addbus.component';
import { AdminScheduleComponent } from './components/admin-dashboard/admin-schedule/admin-schedule.component';
import { AdminPasswordComponent } from './components/admin-dashboard/admin-password/admin-password.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "seats", component: SeatsComponent },
  { path: "bus-schedule", component: BookBusComponent },
  { path: "payment", component: MakePaymentComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "payment-success", component: PaymentSuccessComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "bookings", component: BookingsComponent },
      { path: "changePassword", component: ChangePasswordComponent },
      { path: "wallet", component: WalletComponent }
    ]
  },
  { path: "admin-login", component: AdminLoginComponent },
  {
    path: "admin-dashboard", component: AdminDashboardComponent,
    children: [
      { path: "admin-addbus", component: AdminAddbusComponent },
      { path: "admin-shedule", component: AdminScheduleComponent },
      { path: "admin-password", component: AdminPasswordComponent }
    ]
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", component: NotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
