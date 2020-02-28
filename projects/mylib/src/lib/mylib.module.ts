import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { HeaderOutletComponent } from './tab-group/tab-header-outlet';



@NgModule({
  declarations: [TabComponent, TabGroupComponent, HeaderOutletComponent],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [TabComponent, TabGroupComponent]
})
export class MylibModule { }
