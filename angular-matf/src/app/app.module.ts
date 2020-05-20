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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';

import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddressComponent } from './material/address/address.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { NavigationComponent } from './material/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragDropTableComponent } from './material/drag-drop-table/drag-drop-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    ReactiveFormsComponent,
    MaterialComponent,
    AddressComponent,
    NavigationComponent,
    DragDropTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BookstoresModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
