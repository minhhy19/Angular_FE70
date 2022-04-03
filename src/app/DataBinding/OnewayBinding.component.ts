import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-oneway',
    template: `
        <div>
            <h3 class="text-danger">Oneway binding</h3>
            <h3 class="text-success">Cách 1 Interpolation</h3>
            <p>Hello: {{title}}</p>
            <p>Title: {{renderTitle()}}</p>
            <input type="text" class="w-25 form-control" value={{title}}>
            <hr />
            <h3 class="text-danger">Cách 2: properties binding dữ liệu nằm ở thuộc tính của thẻ</h3>
            <section [innerHTML]="'hello: ' + title"></section>
            <input type="text" class="w-25 form-control" [value]="title">
            <img [src]="imgSrc" class="w-25 mt-2" alt="...">
            <hr />
            <h3 class="text-danger">Event binding: Thay đổi dữ liệu giao diện thông qua sự kiện (handle state react)</h3>
            <div class="form-group">
                <p>New title</p>
                <input #iTitle type="text" class="form-control w-25"> 
                <button class="btn btn-success" (click)="changeTitle(iTitle.value)">Change title</button>
            </div>
        </div>
    `
})

export class OnewayComponent implements OnInit { // MVVM: Model View View Model
    // Tất cả dữ liệu trên giao diện phải là thuộc tính hoặc phương thức của model class
    title:string = 'Hello cybersoft';
    imgSrc:string = 'https://i.pravatar.cc?u=10'
    constructor() { }
    changeTitle(newTitle:string):void {
        this.title = newTitle;
    }
    renderTitle = ():string => {
        return 'FrontEnd 70'
    }
    ngOnInit() { }
}