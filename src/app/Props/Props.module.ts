import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './DemoInput/ProductItem.component';
import { productListComponent } from './DemoInput/ProductList.component';
import { PropsComponent } from './Props.component';

@NgModule({
    declarations: [PropsComponent, ProductItemComponent, productListComponent],
    imports: [FormsModule, CommonModule],
    exports: [PropsComponent],
})
export class PropsModule {}
