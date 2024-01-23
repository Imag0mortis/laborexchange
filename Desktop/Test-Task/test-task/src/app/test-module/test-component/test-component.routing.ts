import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponentComponent
  }
];

export const TestComponentRoutes = RouterModule.forChild(routes);