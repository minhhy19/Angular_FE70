import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
        <div class="container" style="margin-bottom: 500px;">
            <h3>DataBinding</h3>
            <app-oneway></app-oneway>
            <hr />
            <app-twoway></app-twoway>
            <hr />
            <h3>Bài tập</h3>
            <app-bai-tap-binding></app-bai-tap-binding>
        </div>
    `
})

export class DataBindingComponent implements OnInit {
    

    constructor() { }

    ngOnInit() { }
}