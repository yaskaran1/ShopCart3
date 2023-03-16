import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OutletContext, Router, RouterOutlet } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product: any;
  searchValue:any;
  userForm=new FormGroup({
    search: new FormControl()
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
    
    
  }
  onSearch(){
    this.searchValue=this.userForm.value;
    this.router.navigate(['/search/'+this.searchValue.search]);
  }
}
