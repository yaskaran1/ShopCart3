import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, clearCart, removeProduct } from 'src/cart-state-store/cart.actions';
import { ProductGroup, selectGroupedCartEntries } from 'src/cart-state-store/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartEntries$: Observable<ProductGroup[]>

  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    
  }


  ngOnInit(): void {
  }

  clearEntries() {
    this.store.dispatch(clearCart());
  }

  more(entry: ProductGroup) {
    this.store.dispatch(addProduct(entry.product));
  }

  less(entry: ProductGroup) {
    this.store.dispatch(removeProduct(entry.product));
  }
}
