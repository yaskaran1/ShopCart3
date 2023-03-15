import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts } from 'src/cart-state-store/cart.selectors';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  loginStatus:string="";
  countProducts$: Observable<number>;
  constructor(private store:Store, private routes: Router) {
    this.countProducts$ = store.select(selectCountProducts);
  }

  ngOnInit(): void {
  
  }
  loginAuth() {
    this.loginStatus=localStorage.getItem('login') as string;
      if(this.loginStatus=="true"){
        console.log(this.loginStatus);
        this.routes.navigate(['/cartpage']);
      }
      else{
        alert("login first");

      }
    }
  
}

