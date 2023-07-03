import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonAdministrationModule } from './modules/person-administration/person-administration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { AdminLayoutModule } from "./shared/admin-layout/admin-layout.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PersonAdministrationModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        SharedModule,
        MatCardModule,
        MatButtonModule,
        AdminLayoutModule,
        HttpClientModule
    ]
})
export class AppModule { }
