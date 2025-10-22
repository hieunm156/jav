import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { SimplebarAngularModule } from 'simplebar-angular'; // Temporarily disabled
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { UIModule } from '../shared/ui/ui.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent, FooterComponent, RightsidebarComponent, HorizontalComponent, VerticalComponent, HorizontaltopbarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,
    ClickOutsideModule,
    UIModule
    // SimplebarAngularModule - Temporarily disabled due to version compatibility
  ],
  providers: [LanguageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
