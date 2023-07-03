import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './topbar/top-bar.component';
import { SideBarComponent } from './sidebar/side-bar.component';



@NgModule({
  declarations: [
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TopBarComponent,
    SideBarComponent,
  ]
})
export class SharedModule { }
