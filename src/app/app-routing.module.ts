import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGridComponent } from './main-grid/main-grid.component';
const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
