import { TypeModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductGroup, selectGroupedCartEntries, selectTotalPrice } from 'src/cart-state-store/cart.selectors';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  totalPrice$: Observable<number> | undefined;
  cartEntries$: any;
  constructor(private store:Store) { }

  ngOnInit(): void {
    // this.cartEntries = localStorage.getItem('state');
    // this.cartEntries$ = this.store.select(selectGroupedCartEntries);
    // this.cartEntries$.subscribe((ele)=>{
    //   ele.forEach((res)=>{
    //     this.totalPrice=this.totalPrice+res.product.price;
    //     this.products.push(res.product);
    //   })
    // })
    // console.log(this.totalPrice) 
    this.totalPrice$ = this.store.select(selectTotalPrice);
    this.cartEntries$ = this.store.select(selectGroupedCartEntries);
  }



}
