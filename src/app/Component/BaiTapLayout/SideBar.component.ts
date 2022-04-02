import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-bar',
    template: `
        <div class="bg-dark text-white p-5 text-center">
            sidebar component
        </div>
    `
})

export class SideBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}