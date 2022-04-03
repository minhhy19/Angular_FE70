import { NgModule } from '@angular/core';

// Sử dụng directive cần import
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './Directive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent]
})
export class DirectiveModule { }
