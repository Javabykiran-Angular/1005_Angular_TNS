import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { NotfoundComponent } from './notfound/notfound.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';



import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    NotfoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModalModule.forRoot(),
  
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })
  
  ],
  providers: [Title],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
