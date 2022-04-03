import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';
import { OnewayComponent } from './OnewayBinding.component';
import { TwoWayComponent } from './TwoWayBinding.component';
// import module hỗ trợ
import { FormsModule } from '@angular/forms';
import { BaiTapComponent } from './BaiTapBinding.component';

@NgModule({
    imports: [FormsModule],
    exports: [DataBindingComponent],
    declarations: [DataBindingComponent, OnewayComponent, TwoWayComponent, BaiTapComponent]
})
export class DataBindingModule { }
