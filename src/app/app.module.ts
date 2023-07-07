import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonAdministrationModule } from './modules/person-administration/person-administration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { AdminLayoutModule } from "./shared/admin-layout/admin-layout.module";
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms'


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
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
