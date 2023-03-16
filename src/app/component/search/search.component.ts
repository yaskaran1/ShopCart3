import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/service/api.service';
import { addProduct } from 'src/cart-state-store/cart.actions';
import { Product } from 'src/entity/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  product: any;
  productId:any;
  constructor( private api:ApiService,private route:ActivatedRoute,private store:Store) { }

  ngOnInit(): void {
    this.productId= this.route.snapshot.paramMap.get('searchId');
    console.log(this.productId);
    
    this.api.getProduct().subscribe((res)=>{
      this.product = res.filter((item:Product)=>item.title?.toString().includes(this.productId)) 
    })
    
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }

}
