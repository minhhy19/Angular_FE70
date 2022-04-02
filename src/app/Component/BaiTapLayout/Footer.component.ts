import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="bg-warning text-white p-5 text-center">
            footer component
        </div>
    `
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}