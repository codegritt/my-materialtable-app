import { NgModule } from '@angular/core';
import { MatButtonModule,MatButtonToggleModule } from '@angular/material/button';


const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({

  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents

  ]
})
export class MaterialModule { }
