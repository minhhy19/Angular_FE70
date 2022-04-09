import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div style="margin-bottom: 500px;" class="container">
            <h3>Directive</h3>
            <div *ngIf="status; else divDangNhap">
                <p>Hello {{useName}}</p>
            </div>
            <!-- mặc định ng-template không hiển thị trên giao diện -->
            <ng-template #divDangNhap>
                <button class="btn btn-danger" (click)="dangNhap()">Đăng nhập</button>
            </ng-template>
            <hr />
            <div class="form-group">
                <p>Nhập vào 1 số</p>
                <input type="text" class="form-control" #so>
                <button class="btn btn-success mt-2" (click)="kiemTraSo(so.value)">Kiểm tra số</button>
                <div *ngIf="number%2 === 0" class="alert alert-success">
                    Số chẵn
                </div>
                <div *ngIf="number%2 !== 0" class="alert alert-danger">
                    Số lẻ
                </div>
            </div>
            <hr />
            <h3>*ngSwitchCase</h3>
            <div class="form-group">
                <p>Chọn chức vụ</p>
                <select #slChucVu class="form-control" [(ngModel)]="maChucVu">
                    <option value="1">Giám đốc</option>
                    <option value="2">Quản lý</option>
                    <option value="3">Nhân viên</option>
                </select>
            </div>
            <div class="form-group">
                <div [ngSwitch]="maChucVu">
                    <div *ngSwitchCase="'1'" class="alert alert-danger">Giám đốc</div>
                    <div *ngSwitchCase="'2'" class="alert alert-primary">Quản lý</div>
                    <div *ngSwitchCase="'3'" class="alert alert-success">Nhân viên</div>
                    <div *ngSwitchDefault class="alert alert-success">Mặc định</div>
                </div>
            </div>
            <hr />
            <h3>*ngFor - ngclass</h3>
            <table class="table" >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ng-container *ngIf="arrProduct">
                        <tr [ngClass]="{'bg-dark text-white': i % 2 == 0 }" *ngFor="let prop of arrProduct; let i = index">
                            <td>{{prop.id}}</td>
                            <td>
                                <img [src]="prop.img" alt="..." width="50">
                            </td>
                            <td>{{prop.name}}</td>
                            <td>{{prop.price}}</td>
                            <td>
                                <button class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    </ng-container>
                    <ng-container *ngIf="!arrProduct">
                        <tr>
                            <td colspan="5">Không tìm thấy sản phẩm</td>
                        </tr>
                    </ng-container>
                </tbody>
            </table>
            <hr />
            <h3>Product List</h3>
            <div class="row">
                <div class="col-4" *ngFor="let prod of arrProduct">
                    <div class="card">
                        <img [src]="prod.img" alt="..." class="w-100">
                        <div class="card-body">
                            <p>{{prod.name}}</p>
                            <p>{{prod.price}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h3>ng-content: Thường dùng để truyền giao diện</h3>
            <app-card>
                <p class="name">Iphone</p>
                <p class="price">1000</p>
            </app-card>
            <hr />
            <h3>*ngStyle</h3>
            <p [ngStyle]="{'font-size': fontSize + 'px'}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis at reprehenderit blanditiis facilis eaque? Officia libero temporibus, earum nisi vero eveniet? Eos voluptatem beatae quam, architecto fugiat vel repellendus nisi!</p>
            <button class="btn btn-success mr-2" (click)="changeFontSize(5)">+</button>
            <button class="btn btn-success ml-2" (click)="changeFontSize(-5)">-</button>
            <hr />
            <h3>Bài tập login</h3>
            <app-bt-login></app-bt-login>
            <hr />
            <h3>Bài tập quản lý sản phẩm</h3>
            <app-bt-quan-ly-sp></app-bt-quan-ly-sp>
        </div> 
    `
})

export class DirectiveComponent implements OnInit {
    fontSize: number = 17;
    maChucVu:string = '0';

    number:number = 0;
    status:boolean = false;
    useName:string = 'hy@email';
    arrProduct: Product[] = [
        {id: '1', name: 'Iphone', price: 1000, img: 'https://i.pravatar.cc?u=1'},
        {id: '2', name: 'Iphone X', price: 2000, img: 'https://i.pravatar.cc?u=2'},
        {id: '3', name: 'Iphone 13', price: 3000, img: 'https://i.pravatar.cc?u=3'},
    ]

    changeFontSize(number:number) {
        this.fontSize += number;
    }
    kiemTraSo(so:string):void {
        this.number = Number(so);
    }
    dangNhap():void {
        this.status = true;
    }
    constructor() { }

    ngOnInit() { }
}

interface Product {
    id: string,
    name: string,
    price: number,
    img: string
}