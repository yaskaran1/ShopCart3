import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  
  product:any;
  id:any;

  constructor(private api:ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id=(this.route.snapshot.params['id']);
    this.api.getProduct().subscribe(res=>{
      this.product=res;
    });
  }
}
