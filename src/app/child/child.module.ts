import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child-routing.module';

@NgModule({
  declarations: [ ChildComponent ],
  imports: [
    ChildRoutingModule,
  ],
})
export class ChildModule {}
