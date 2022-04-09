import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-quan-ly-sp',
    template: `
        <div class="container">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <h3>Quản lý danh mục sản phẩm</h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Mã sp</p>
                        <input class="form-control" #maSP type="text" [(ngModel)]="spInput.maSP">
                    </div>
                    <div class="form-group">
                        <p>Tên sp</p>
                        <input class="form-control" #tenSP type="text" [(ngModel)]="spInput.tenSP">
                    </div>
                    <div class="form-group">
                        <p>Giá</p>
                        <input class="form-control" #gia type="text" [(ngModel)]="spInput.gia">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" (click)="themSanPham()">Thêm sản phẩm</button>
                    </div>
                </div>
            </div>
            <table class="table mt-2">
                <thead class="bg-dark text-white">
                    <tr>
                        <th>STT</th>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr [ngClass]="{'bg-dark text-white':(i+1)%2==0}" *ngFor="let sp of arrSanPham; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{sp.maSP}}</td>
                        <td>{{sp.tenSP}}</td>
                        <td>{{sp.gia}}</td>
                        <td>
                            <button class="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class BaiTapQuanLySanPhamComponent implements OnInit {
    spInput: SanPham = {
        maSP: '',
        tenSP: '',
        gia: 0
    }
    arrSanPham: SanPham[] = [];

    themSanPham():void {
        console.log('spInput', this.spInput)
        this.arrSanPham.push({...this.spInput});
    }

    constructor() { }

    ngOnInit() { }
}

interface SanPham {
    maSP: string,
    tenSP: string,
    gia: number
}