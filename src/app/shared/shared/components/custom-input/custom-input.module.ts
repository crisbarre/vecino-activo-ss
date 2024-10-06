import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomInputComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[CustomInputComponent]
})
export class CustomInputModule { }
