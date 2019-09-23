import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthMessage } from './components/auth-message.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { RememberComponent } from './components/remember/remember.component';

import { CreditCardDirective } from './directives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    RememberComponent,
    AuthMessage,
    CreditCardDirective
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  entryComponents: [MyFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
