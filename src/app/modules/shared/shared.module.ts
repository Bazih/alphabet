import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

const importAndExport = [
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...importAndExport
  ],
  exports: [
    ...importAndExport
  ]
})
export class SharedModule { }
