import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxLoadingModule } from 'ngx-loading';

import { PagesRoutingModule } from './pages-routing.module';
import { UIModule } from '../shared/ui/ui.module';

// Import all page components
import { DefaultComponent } from "./dashboards/default/default.component";
import { materialComponent } from "./specifications/material/material.component";
import { sleeveComponent } from "./specifications/sleeve/sleeve.component";
import { collarComponent } from "./specifications/collar/collar.component";
import { colorComponent } from "./specifications/color/color.component";
import { designComponent } from "./specifications/design/design.component";
import { formComponent } from "./specifications/form/form.component";
import { sizeComponent } from "./specifications/size/size.component";
import { discountComponent } from "./discount/discount.component";
import { voucherComponent } from "./voucher/voucher.component";
import { ProductComponent } from "./product/product.component";
import { OrderComponent } from "./order/order.component";
import { ContactComponent } from "./contactShop/contact.component";
import { employeeComponent } from "./employee/employee.component";
import { categoryoriComponent } from "./categoryorigin/categoryori.component";
import { categoriComponent } from "./categori/categori.component";
import { customerComponent } from "./customer/customer.component";
import { RatingComponent } from "./rating/rating.component";
import { doanhthuComponent } from "./statistical/Doanhthu/doanhthu.component";
import { sanphamComponent } from "./statistical/Sanpham/sanpham.component";
import { ExchangeComponent } from "./exchange/exchange.component";

@NgModule({
    declarations: [
        DefaultComponent,
        materialComponent,
        sleeveComponent,
        collarComponent,
        colorComponent,
        designComponent,
        formComponent,
        sizeComponent,
        discountComponent,
        voucherComponent,
        ProductComponent,
        OrderComponent,
        ContactComponent,
        employeeComponent,
        categoryoriComponent,
        categoriComponent,
        customerComponent,
        RatingComponent,
        doanhthuComponent,
        sanphamComponent,
        ExchangeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule,
        NgxLoadingModule,
        UIModule,
        PagesRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }