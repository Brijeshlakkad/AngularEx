import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent } from './show-list/show-list.component';
import { StudentsRoutingModule } from './students-routing.module';
import { ShowNameComponent } from './show-name/show-name.component';


@NgModule({
  declarations: [ShowListComponent, ShowNameComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
