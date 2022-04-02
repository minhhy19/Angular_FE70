import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './Component/Demo/Demo.component';
import { BaiTapLayoutComponent } from './Component/BaiTapLayout/BaiTapLayout.component';
import { BTHeaderComponent } from './Component/BaiTapLayout/BTHeader.component';
import { SideBarComponent } from './Component/BaiTapLayout/SideBar.component';
import { ContentComponent } from './Component/BaiTapLayout/Content.component';
import { FooterComponent } from './Component/BaiTapLayout/Footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Nơi chứa thẻ component
    DemoComponent,
    BaiTapLayoutComponent,
    BTHeaderComponent,
    SideBarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule // Nơi chửa các module khác muốn sử dụng cho module này
  ],
  providers: [], // Nơi import các service
  bootstrap: [AppComponent] // Các thẻ component muốn sử dụng trong index.html
})
export class AppModule { }
