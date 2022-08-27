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

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "seats", component: SeatsComponent },
  { path: "bus-schedule", component: BookBusComponent },
  { path: "payment", component: MakePaymentComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "bookings", component: BookingsComponent },
      { path: "changePassword", component: ChangePasswordComponent },
      { path: "wallet", component: WalletComponent }
    ]
  },
  { path: "", component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
