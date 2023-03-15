import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterBtnComponent } from './component/filter-btn/filter-btn.component';
import { HeaderComponent } from './component/header/header.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer, metaReducerLocalStorage } from 'src/cart-state-store/cart.reducer';
import { HoverDirective } from './directives/hover.directive';
import { FashionComponent } from './component/fashion/fashion.component';
import { FootwearComponent } from './component/footwear/footwear.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartpageComponent } from './component/cartpage/cartpage.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterBtnComponent,
    HeaderComponent,
    NavigationBarComponent,
    ProductCardComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    HoverDirective,
    FashionComponent,
    FootwearComponent,
    ElectronicsComponent,
    ProductDetailComponent,
    CartpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ cartEntries: cartReducer }, { metaReducers: [ metaReducerLocalStorage ] }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
