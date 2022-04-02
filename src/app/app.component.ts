import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'app-root', // selector của thẻ component
  templateUrl: './app.component.html', // đường dẫn đến file giao diện
  styleUrls: ['./app.component.scss'] // đường dẫn đến file scss
})
export class AppComponent {
  title = 'angulerfe70';
}
