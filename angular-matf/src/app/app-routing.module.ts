import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeScriptComponent } from './type-script/type-script.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TvComponent } from './tv/tv.component';
import { WorkingWithClassesComponent } from './working-with-classes/working-with-classes.component';
import { BookstoreListComponent } from './bookstores/bookstore-list/bookstore-list.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: 'type-script', component: TypeScriptComponent },
  { path: 'inline-template-component', component: InlineTemplateComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'tv', component: TvComponent },
  {
    path: '',
    redirectTo: '/type-script',
    pathMatch: 'full'
  },
  { path: 'classes', component: WorkingWithClassesComponent },
  { path: 'bookstores', component: BookstoreListComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'material', component: MaterialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
