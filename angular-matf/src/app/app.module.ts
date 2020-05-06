import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { ChildComponent } from './child/child.component';
import { CounterComponent } from './counter/counter.component';
import { QuotePipe } from './quote.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { RemoteComponent } from './remote/remote.component';
import { TvComponent } from './tv/tv.component';
import { HighlightDirective } from './highlight.directive';
import { DisableDirective } from './disable.directive';
import { SpaceDirective } from './space.directive';
import { WorkingWithClassesComponent } from './working-with-classes/working-with-classes.component';
import { BookstoresModule } from './bookstores/bookstores.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TypeScriptComponent,
    InlineTemplateComponent,
    ChildComponent,
    CounterComponent,
    QuotePipe,
    DirectivesComponent,
    RemoteComponent,
    TvComponent,
    HighlightDirective,
    DisableDirective,
    SpaceDirective,
    WorkingWithClassesComponent,
    RxjsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BookstoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
