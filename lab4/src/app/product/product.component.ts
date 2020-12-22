import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  template: `
    <ul>
    <li (click)="onSelect(p)"  *ngFor="let p of products">
      <span>{{p.id}}- </span> {{p.name}}
    </li>
  </ul>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  public products = [
    {"id": 1, "name": "HP"},
    {"id": 2, "name": "Dell"},
    {"id": 3, "name": "Acer"},
    {"id": 4, "name": "Lenovo"},
  ]
  constructor(private rounter: Router) { }

  ngOnInit() {
  }
  onSelect(p){
    this.rounter.navigate(['/product', p.id]);
  }
}
