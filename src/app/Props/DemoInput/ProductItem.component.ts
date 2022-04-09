import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product-item',
    template: `
        <div class="card text-left">
          <img class="card-img-top" [src]="product.img" alt="">
          <div class="card-body">
            <h4 class="card-title">{{product.name}}</h4>
            <p class="card-text">{{product.price}}</p>
            <button class="btn btn-success" (click)="viewDetail()">Xem chi tiết</button>
          </div>
        </div>
       
    `
})

export class ProductItemComponent implements OnInit {
    @Input() product: Product = {id: 0, name: '', img: '', price: 0}
    @Output() xemChiTiet = new EventEmitter();
    viewDetail() {
        // emit(gia_tri_putput): đưa giá trị ra bên ngoài thẻ
        this.xemChiTiet.emit(this.product);
    }

    constructor() { }
    
    ngOnInit() { }
}

interface Product {
    id: number,
    name: string,
    img: string,
    price: number
}