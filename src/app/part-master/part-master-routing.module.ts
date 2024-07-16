import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartMasterComponent } from './part-master.component';

const routes: Routes = [
  { path: '', component: PartMasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartMasterRoutingModule { }
