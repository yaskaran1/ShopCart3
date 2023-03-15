import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CartpageComponent } from './component/cartpage/cartpage.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { FooterComponent } from './component/footer/footer.component';
import { FootwearComponent } from './component/footwear/footwear.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'product-card',
    component:ProductCardComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'fashion',
    component:FashionComponent
  },
  {
    path:'fashion/:id',
    component:FashionComponent
  },
  {
    path:'footwear',
    component:FootwearComponent
  },
  {
    path:'footwear/:id',
    component:FootwearComponent
  },
  {
    path:'product-detail',
    component:ProductDetailComponent
  },
  {
    path:'product-detail/:productId',
    component:ProductDetailComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'cartpage',
    component:CartpageComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
