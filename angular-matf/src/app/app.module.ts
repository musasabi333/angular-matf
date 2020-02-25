import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TypeScriptComponent,
    InlineTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
