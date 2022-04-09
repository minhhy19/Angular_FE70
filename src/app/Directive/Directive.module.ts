import { NgModule } from '@angular/core';

// Sử dụng directive cần import
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './Directive.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './Card.component';
import { BaiTapLoginComponent } from './BaiTapLogin.component';
import { BaiTapQuanLySanPhamComponent } from './BaiTapQuanLySanPham.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent, CardComponent, BaiTapLoginComponent, BaiTapQuanLySanPhamComponent]
})
export class DirectiveModule { }
