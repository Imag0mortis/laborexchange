import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-module/test-component/test-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  {
    path: 'test',
    component: TestComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
