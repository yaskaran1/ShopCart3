import { Logger } from '@angular-devkit/core/src/logger';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { type } from 'os';
import { ApiService } from 'src/app/service/api.service';
import { addProduct } from 'src/cart-state-store/cart.actions';
import { Product } from 'src/entity/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor(private route:ActivatedRoute, private api:ApiService, private store:Store) { }
  ngOnInit(): void {
    let productId= this.route.snapshot.paramMap.get('productId');
    this.api.getProduct().subscribe((res)=>{
      this.product = res.filter((item:Product)=>productId?.toString()===item.id?.toString()) 
    })
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));

  }
}

