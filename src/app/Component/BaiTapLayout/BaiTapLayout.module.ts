// a-module
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTHeaderComponent } from './BTHeader.component';
import { ContentComponent } from './Content.component';
import { FooterComponent } from './Footer.component';
import { SideBarComponent } from './SideBar.component';



@NgModule({
    exports: [BaiTapLayoutComponent],
    declarations: [
        BaiTapLayoutComponent,
        BTHeaderComponent,
        SideBarComponent,
        ContentComponent,
        FooterComponent
    ]
})
export class BaiTapLayoutModule { }
