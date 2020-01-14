import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [

{ path: '', redirectTo: '/first', pathMatch: 'full' },
{ path: 'first', component: FirstComponent },
  //Page Not Found
  //should be at the end of all your component routes
{ path: '404', component: NotFoundComponent },
{ path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
