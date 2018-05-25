import {RouterModule, Routes} from '@angular/router';

import {TestComponent} from './test/test.component';
import {TestFormComponent} from './test/test-form/test-form.component';

const appRoutes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'test/new',
    component: TestFormComponent
  },
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
  TestComponent,
  TestFormComponent,
];
