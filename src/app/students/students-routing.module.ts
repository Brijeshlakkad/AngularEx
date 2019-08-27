import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowListComponent } from './show-list/show-list.component';
import { ShowNameComponent } from './show-name/show-name.component';


const routes: Routes = [
    {
        path: '',
        children: [{
            path: 'list',
            component: ShowListComponent
        }, {
            path: 'name',
            component: ShowNameComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule { }