import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { BestProjectsComponent } from './pages/best-projects/best-projects.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavouriteItemsComponent } from './pages/favourite-items/favourite-items.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'cart',component: CartComponent},
  {path:'favourites',component: FavouriteItemsComponent},
  {path:'orders',component: OrdersComponent},
  {path:'best-projects',component: BestProjectsComponent},
  {path:'project-info',component: ProjectInfoComponent},
  {path:'projects',component: AllProjectsComponent},
  {path:'category-project',component: ProjectsComponent},
  {path:'user-profile',component: UserProfileComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'services', component: ServicesComponent},
  {path:'terms-condition', component: TermsConditionComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
