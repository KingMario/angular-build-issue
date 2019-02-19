import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildComponent } from './child.component';

const routes: Routes = [
  {
    path: '@',
    children: [
      {
        path: 'child',
        component: ChildComponent,
      },
      {
        path: '**',
        redirectTo: 'child',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildRoutingModule {}
