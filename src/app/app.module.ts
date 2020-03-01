import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ParentComponent } from './dashboard/parent/parent.component';
import { ChildComponent } from './dashboard/parent/child/child.component';
import { ParentColorsDirective } from './dashboard/colors/parent-colors.directive';
import { ChildColorComponent } from './dashboard/colors/child-color/child-color.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentColorsDirective,
    ChildColorComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
