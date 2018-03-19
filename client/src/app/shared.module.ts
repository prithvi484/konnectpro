import { PaginationComponent } from './common/pagination/pagination.component';
import { LoginComponent } from './common/login/login.component';
import { FormControlMessageComponent } from './common/form-control-message/form-control-message.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AsideNavComponent } from './theme/aside-nav/aside-nav.component';
import { FooterComponent } from './theme/footer/footer.component';
import { HeaderNavComponent } from './theme/header-nav/header-nav.component';
import { ScrollTopComponent } from './theme/scroll-top/scroll-top.component';
import { ToolTipsComponent } from './theme/tool-tips/tool-tips.component';

@NgModule({
  declarations: [
    AsideNavComponent,
    FooterComponent,
    HeaderNavComponent,
    ScrollTopComponent,
    ToolTipsComponent,
    FormControlMessageComponent,
    LoginComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot()
  ],
  exports: [
    AsideNavComponent,
    FooterComponent,
    HeaderNavComponent,
    ScrollTopComponent,
    ToolTipsComponent,
    FormControlMessageComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule,
    PaginationComponent,
    RecaptchaModule
  ],
  providers: [

  ]
})
export class SharedModule { }
