import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-props-demo',
    template: `
        <div class="container">
            <h3>Input - Output</h3>
            <app-product-list></app-product-list>
        </div>
    `
})

export class PropsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}