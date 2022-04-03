import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-binding',
    template: `
        <div>
            <div class="card">
                <div class="card-header bg-dark text-white">
                    Register form
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Email</p>
                        <input type="text" class="form-control" #txtEmail [(ngModel)]="email">
                    </div>
                    <div class="form-group">
                        <p>Fullname</p>
                        <input type="text" class="form-control" #txtFullName >
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" (click)="changeName(txtFullName.value)">Submit</button>
                    </div>
                </div>
                <div class="card-footer">
                    <p>Email: {{email}}</p>
                    <p>Full Name: {{fullName}}</p>
                </div>
            </div>
        </div>
    `
})

export class BaiTapComponent implements OnInit {
    email:string = 'email';
    fullName:string = 'fullname'
    changeName(name:string):void {
        this.fullName = name;
    }

    constructor() { }

    ngOnInit() { }
}