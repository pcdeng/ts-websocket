import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UsernameModalComponent } from './components/username-modal/username-modal.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MessageItemComponent,
    UserItemComponent,
    UsernameModalComponent,
    RelativeTimePipe
  ],
  entryComponents: [ UsernameModalComponent ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
