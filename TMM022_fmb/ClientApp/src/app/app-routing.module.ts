import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartMasterComponent } from './components/part-master/part-master.component';

const routes: Routes = [
  { path: 'part-master', component: PartMasterComponent },
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
