import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-twoway',
    template: `
        <div>
            <h3 class="text-danger">Twoway binding</h3>
            <p>Mentor: {{name}}</p>
            <input #tagInputName type="text" class="w-25 form-control" 
            (keyup)="changeName(tagInputName.value)">
            <hr />
            <p>2waybinding</p>
            <input type="text" class="w-25 form-control" [(ngModel)]="name">
            <hr />
            <div class="d-flex">
                <div class="card w-25">
                    <img [src]="product.img" alt="...">
                    <div class="card-body">
                        <p>{{product.name}}</p>
                        <p>{{product.price}}</p>
                        <button class="btn btn-dark text-white">Add to card</button>
                    </div>
                </div>
                <div class="w-50 ml-5">
                    <div class="form-group">
                        <p>id</p>
                        <input type="text" class="form-control" #id [(ngModel)]="product.id">
                    </div>
                    <div class="form-group">
                        <p>name</p>
                        <input type="text" class="form-control" #name1 [(ngModel)]="product.name">
                    </div>
                    <div class="form-group">
                        <p>price</p>
                        <input type="text" class="form-control" #price [(ngModel)]="product.price">
                    </div>
                    <div class="form-group">
                        <p>Image</p>
                        <input type="text" class="form-control" #img [(ngModel)]="product.img">
                    </div>
                    <button class="btn btn-success" (click)="changeProduct(id.value, name1.value, price.value, img.value)">Update</button>
                </div>
            </div>
            
        </div>
    `
})

export class TwoWayComponent implements OnInit {
    product:Product = {
        id:1,
        name: "Iphone",
        price: 1000,
        img: 'https://picsum.photos/id/20/200'
    };
    name:string = 'Trường mentor';
    changeProduct(id:string, name:string, price:string, img:string):void {
        this.product.id = Number(id);
        this.product.name = name;
        this.product.price = Number(price);
        this.product.img = img;
    }
    changeName(name:string):void {
        this.name = name;
    }
    constructor() { }
    
    ngOnInit() { }
}

interface Product {
    id:number,
    name:string,
    price:number,
    img:string
}