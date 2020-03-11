import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeScriptComponent } from './type-script/type-script.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TvComponent } from './tv/tv.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
