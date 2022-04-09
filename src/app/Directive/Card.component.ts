import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
        <div class="card text-left">
          <img class="card-img-top" src="" alt="">
          <div class="card-body">
            <h4 class="card-title">
                <ng-content selector=".name"></ng-content>
            </h4>
            <p class="card-text">
                <ng-content selector=".price"></ng-content>
            </p>
          </div>
        </div>
    `
})

export class CardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}