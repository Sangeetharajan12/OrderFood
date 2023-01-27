import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MerchantMenuComponent } from './merchant-menu/merchant-menu.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path: "home",component:HomeComponent},
  {path:"/login",component:LoginComponent},
  {path:"/menu",component:MenuComponent},
  {path:"/register",component:RegisterComponent},
  {path: "/merchant-menu",component:MerchantMenuComponent},
  {path: "/add-item",component:AddItemComponent},
  {path: "/checkout",component:CheckoutComponent},
  {path: "/contact-us",component:ContactUsComponent},
  {path: "/welcome",component:WelcomeComponent},
  {path: "/success",component:SuccessComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
