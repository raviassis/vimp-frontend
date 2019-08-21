import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  exports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
})
export class SharedModule { }
