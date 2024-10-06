import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { HeaderModule } from 'src/app/shared/shared/components/header/header.module';
import { CustomInputModule } from 'src/app/shared/shared/components/custom-input/custom-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    HeaderModule,
    CustomInputModule,
    ReactiveFormsModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
