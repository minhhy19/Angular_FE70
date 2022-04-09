import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    template: `
        <h3>Danh sách sản phẩm</h3>
        <div class="row">
            <div class="col-4" *ngFor="let prod of arrProduct">
                <app-product-item (xemChiTiet)="xemChiTiet($event)" [product]="prod"></app-product-item>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-4">
                <h3>Iphone</h3>
                <img [src]="productDetail.img" alt="..." height="350">
            </div>
            <div class="col-8">
                <h3>Chi tiết sản phẩm</h3>
                <table class="table">
                    <tr>
                        <th>id</th>
                        <th>{{productDetail.id}}</th>
                    </tr>
                    <tr>
                        <th>name</th>
                        <th>{{productDetail.name}}</th>
                    </tr>
                    <tr>
                        <th>id</th>
                        <th>{{productDetail.price}}</th>
                    </tr>
                </table>
            </div>
        </div>
    `
})

export class productListComponent implements OnInit {
    arrProduct: Product[] = [
        {id: 1, name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/10/200'},
        {id: 2, name: 'Iphone X', price: 2000, img: 'https://picsum.photos/id/20/200'},
        {id: 3, name: 'Iphone XS', price: 3000, img: 'https://picsum.photos/id/30/200'},
    ]
    productDetail: Product = {id: 1, name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/10/200'}
    constructor() { }
    xemChiTiet(outPutValue: Product) {
        this.productDetail = outPutValue;
    }
    ngOnInit() { }
}

interface Product {
    id: number,
    name: string,
    img: string,
    price: number
}