import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { WatsappComponent } from './components/watsapp/watsapp.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { BestProjectsComponent } from './pages/best-projects/best-projects.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavouriteItemsComponent } from './pages/favourite-items/favourite-items.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderDetailsModalComponent } from './components/order-details-modal/order-details-modal.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ServicesComponent } from './pages/services/services.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { ServiceDownComponent } from './components/service-down/service-down.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BestProjectsComponent,
    ProjectCardComponent,
    ContactComponent,
    BottomBarComponent,
    AllProjectsComponent,
    ProjectsComponent,
    ProjectInfoComponent,
    CartComponent,
    OrdersComponent,
    WatsappComponent,
    FavouriteItemsComponent,
    CartItemComponent,
    AddressFormComponent,
    AuthFormComponent,
    NotFoundComponent,
    UserProfileComponent,
    AboutUsComponent,
    OrderCardComponent,
    OrderDetailsModalComponent,
    ForgotPasswordComponent,
    ServicesComponent,
    TermsConditionComponent,
    ServiceDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
