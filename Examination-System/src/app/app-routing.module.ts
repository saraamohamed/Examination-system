import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsListComponent } from '../Components/exams-list/exams-list.component';

const routes: Routes = [
  { path: 'exams', component: ExamsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
