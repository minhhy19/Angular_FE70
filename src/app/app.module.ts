import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './Component/Demo/Demo.component';
import { BaiTapLayoutModule } from './Component/BaiTapLayout/BaiTapLayout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DirectiveModule } from './Directive/Directive.module';
import { PropsModule } from './Props/Props.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Nơi chứa thẻ component
    DemoComponent,
  ],
  imports: [
    BrowserModule, // Nơi chửa các module khác muốn sử dụng cho module này
    BaiTapLayoutModule, // module
    DataBindingModule,
    DirectiveModule,
    PropsModule
  ],
  providers: [], // Nơi import các service
  bootstrap: [AppComponent] // Các thẻ component muốn sử dụng trong index.html
})
export class AppModule { }
