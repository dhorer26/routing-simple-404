import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudntDetailComponent } from './studnt-detail/studnt-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'ViewStudents', component: StudentListComponent},
  {path: 'ViewEmployees', component: EmployeeListComponent},
  {path: 'studentDetail', component: StudntDetailComponent},
  {path: '', redirectTo: '/ViewStudents', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}  // 404 page not found should be at last
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    EmployeeListComponent,
    StudntDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
