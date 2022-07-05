import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MasterView1Component } from './master-view1/master-view1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view1', component: MasterView1Component, data: { text: 'Master View 1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
