import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { BillComponent } from '../bill/bill.component';

@NgModule({
    declarations: [
        PosComponent,
        BillComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgxLoadingModule,
        NgxBarcodeScannerModule,
        Ng2SearchPipeModule,
        PosRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PosModule { }