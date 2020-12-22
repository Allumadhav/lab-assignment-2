import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  template: `
  <h3>You have selected product with id is {{productId}}. </h3>
  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  public productId; 
  public namee;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
  }
}