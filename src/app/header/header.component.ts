import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // tag name
  template: `
    <div class="container">
      hello header
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
