// a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout',
    template: `
        <div>
            <app-bt-header></app-bt-header>
            <div class="row">
                <div class="col-4">
                    <app-side-bar></app-side-bar>
                </div>
                <div class="col-8">
                    <app-content></app-content>
                </div>
            </div>
            <app-footer></app-footer>
        </div>
    `
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}