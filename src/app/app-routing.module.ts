import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloading } from './common/CustomPreloading';


const routes: Routes = [{
  path: 'students', loadChildren: './students/students.module#StudentsModule' // loadChildren: () => import('./students/students.module').then(mod => mod.StudentsModule) 
},
{ path: 'lazy', loadChildren: './lazy.module#LazyModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
