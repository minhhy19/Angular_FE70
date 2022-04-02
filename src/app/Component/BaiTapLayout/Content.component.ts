import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `
        <div class="bg-success text-white p-5 text-center">
            content component
        </div>
    `
})

export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}